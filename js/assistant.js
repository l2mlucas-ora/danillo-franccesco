/*
 * Assistente de atendimento roteirizado (sem IA).
 * Os textos e perguntas ficam em data/assistant-flows.js.
 * Qualquer botão com data-chat="<fluxo>" abre o assistente nesse fluxo
 * (data-chat="" abre no menu inicial).
 */
(function () {
  "use strict";

  var CFG = window.ASSISTANT;
  if (!CFG) return;

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var DELAY = reduceMotion ? 0 : 550;

  var ICON = {
    chat: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" d="M4 5h16v11H9l-5 4z"/></svg>',
    close: '<svg viewBox="0 0 24 24" aria-hidden="true"><path stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M6 6l12 12M18 6 6 18"/></svg>',
    restart: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M4 12a8 8 0 1 0 2.4-5.7M4 4v4h4"/></svg>',
    send: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M3 20 21 12 3 4v6l12 2-12 2z"/></svg>',
    wa: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm4.5 12.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2c.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.6-.3z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></g></svg>'
  };

  /* ---------- DOM ---------- */
  var fab = document.createElement("button");
  fab.type = "button";
  fab.className = "chat-fab";
  fab.setAttribute("aria-haspopup", "dialog");
  fab.innerHTML = ICON.chat + '<span class="fab-label">Fale com a equipe</span>';
  fab.setAttribute("aria-label", "Abrir atendimento");

  var panel = document.createElement("div");
  panel.className = "chat";
  panel.setAttribute("role", "dialog");
  panel.setAttribute("aria-modal", "false");
  panel.setAttribute("aria-labelledby", "chatTitle");
  panel.innerHTML =
    '<div class="chat-head">' +
      '<span class="chat-avatar" aria-hidden="true">DF</span>' +
      '<div><b id="chatTitle">Equipe Danillo Franccesco</b><small>Responde pelo WhatsApp</small></div>' +
      '<button class="chat-icon-btn" type="button" data-act="restart" aria-label="Recomeçar conversa" title="Recomeçar">' + ICON.restart + "</button>" +
      '<button class="chat-icon-btn" type="button" data-act="close" aria-label="Fechar atendimento" title="Fechar">' + ICON.close + "</button>" +
    "</div>" +
    '<div class="chat-log" aria-live="polite"></div>' +
    '<div class="chat-actions"></div>';

  document.body.appendChild(fab);
  document.body.appendChild(panel);

  var log = panel.querySelector(".chat-log");
  var actions = panel.querySelector(".chat-actions");

  /* ---------- Estado ---------- */
  var state = { flowId: null, queue: [], answers: [], run: 0 };

  /* ---------- Utilitários ---------- */
  function wait(ms) { return new Promise(function (r) { setTimeout(r, ms); }); }
  function scrollDown() { log.scrollTop = log.scrollHeight; }
  function clearActions() { actions.innerHTML = ""; }

  function addMsg(text, who) {
    var m = document.createElement("div");
    m.className = "msg " + who;
    m.textContent = text;
    log.appendChild(m);
    scrollDown();
    return m;
  }

  function botSay(text, run) {
    if (!DELAY) { addMsg(text, "bot"); return Promise.resolve(); }
    var t = document.createElement("div");
    t.className = "msg bot typing";
    t.setAttribute("aria-hidden", "true");
    t.innerHTML = "<i></i><i></i><i></i>";
    log.appendChild(t);
    scrollDown();
    return wait(Math.min(DELAY + text.length * 6, 1300)).then(function () {
      t.remove();
      if (run === state.run) addMsg(text, "bot");
    });
  }

  function chip(label, cls, onClick) {
    var b = document.createElement("button");
    b.type = "button";
    b.className = "chip" + (cls ? " " + cls : "");
    b.innerHTML = label;
    b.addEventListener("click", onClick);
    return b;
  }

  function showChips(list) {
    clearActions();
    var wrap = document.createElement("div");
    wrap.className = "chips";
    list.forEach(function (c) { wrap.appendChild(c); });
    actions.appendChild(wrap);
    var first = wrap.querySelector("button");
    if (first && panel.classList.contains("open")) first.focus({ preventScroll: true });
  }

  function textOf(html) {
    var d = document.createElement("div");
    d.innerHTML = html;
    return d.textContent;
  }

  /* ---------- Fluxo ---------- */
  function showMenu() {
    state.flowId = null;
    state.queue = [];
    state.answers = [];
    showChips(CFG.menu.map(function (item) {
      return chip(item.label, item.highlight ? "primary" : "", function () {
        addMsg(item.label, "user");
        startFlow(item.id);
      });
    }));
  }

  function greet() {
    var run = ++state.run;
    log.innerHTML = "";
    clearActions();
    return CFG.greeting.reduce(function (p, line) {
      return p.then(function () { return botSay(line, run); });
    }, Promise.resolve()).then(function () {
      if (run === state.run) showMenu();
    });
  }

  function startFlow(id) {
    var flow = CFG.flows[id];
    if (!flow) { showMenu(); return; }
    state.flowId = id;
    state.answers = [];
    state.queue = flow.steps.slice();
    clearActions();
    next();
  }

  function next() {
    var run = state.run;
    var step = state.queue.shift();
    if (!step) { finish(); return; }

    if (step.say) {
      botSay(step.say, run).then(function () { if (run === state.run) next(); });
      return;
    }
    if (step.goto) {
      showChips([
        chip(step.label || "Continuar", "primary", function () {
          addMsg(textOf(step.label || "Continuar"), "user");
          startFlow(step.goto);
        }),
        chip("Voltar ao menu", "ghost", backToMenu)
      ]);
      return;
    }
    if (step.end) {
      endWith(step.end);
      return;
    }
    if (step.ask) {
      botSay(step.ask, run).then(function () {
        if (run !== state.run) return;
        if (step.options) askOptions(step);
        else askInput(step);
      });
    }
  }

  function record(step, value) {
    addMsg(value, "user");
    if (step.key) state.answers.push([step.key, value]);
    var flow = CFG.flows[state.flowId];
    if (flow && flow.branches && flow.branches[value]) {
      state.queue = flow.branches[value].slice().concat(state.queue);
    }
    clearActions();
    next();
  }

  function askOptions(step) {
    showChips(step.options.map(function (opt) {
      return chip(opt, "", function () { record(step, opt); });
    }));
  }

  function askInput(step) {
    clearActions();
    var form = document.createElement("form");
    form.className = "chat-form";
    var input = document.createElement("input");
    input.type = "text";
    input.maxLength = 300;
    input.placeholder = step.input || "Digite aqui";
    input.setAttribute("aria-label", step.ask);
    input.autocomplete = "off";
    var send = document.createElement("button");
    send.type = "submit";
    send.innerHTML = ICON.send;
    send.setAttribute("aria-label", "Enviar resposta");
    form.appendChild(input);
    form.appendChild(send);
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var v = input.value.trim();
      if (!v) { input.focus(); return; }
      record(step, v);
    });
    actions.appendChild(form);
    if (step.optional) {
      var skip = document.createElement("button");
      skip.type = "button";
      skip.className = "chat-skip";
      skip.textContent = "Pular esta pergunta";
      skip.addEventListener("click", function () { clearActions(); next(); });
      actions.appendChild(skip);
    }
    if (panel.classList.contains("open")) input.focus({ preventScroll: true });
  }

  function backToMenu() {
    addMsg("Voltar ao menu", "user");
    var run = ++state.run;
    botSay("Claro! Em que mais podemos ajudar?", run).then(function () { if (run === state.run) showMenu(); });
  }

  function endWith(kind) {
    if (kind === "links") {
      showChips([
        chip("Instagram", "primary", function () { window.open("https://www.instagram.com/danillofranccesco/", "_blank", "noopener"); }),
        chip("Ver trabalhos", "", function () {
          if (document.getElementById("trabalhos")) { close(); location.hash = "#trabalhos"; }
          else location.href = "index.html#trabalhos";
        }),
        chip("Voltar ao menu", "ghost", backToMenu)
      ]);
    } else {
      showChips([chip("Voltar ao menu", "ghost", backToMenu)]);
    }
  }

  /* ---------- Resumo e envio ---------- */
  function buildMessage() {
    var flow = CFG.flows[state.flowId];
    var lines = ["Olá! Vim pelo site do Danillo Franccesco.", "", "*Assunto: " + flow.title + "*"];
    state.answers.forEach(function (a) { lines.push("• " + a[0] + ": " + a[1]); });
    return lines.join("\n");
  }

  function finish() {
    if (!state.answers.length) { showMenu(); return; }
    var run = state.run;
    botSay("Perfeito! Confira o resumo e envie para a equipe:", run).then(function () {
      if (run !== state.run) return;
      var flow = CFG.flows[state.flowId];
      var box = document.createElement("div");
      box.className = "summary";
      var h = document.createElement("h4");
      h.textContent = flow.title;
      var dl = document.createElement("dl");
      state.answers.forEach(function (a) {
        var dt = document.createElement("dt"); dt.textContent = a[0];
        var dd = document.createElement("dd"); dd.textContent = a[1];
        dl.appendChild(dt); dl.appendChild(dd);
      });
      box.appendChild(h);
      box.appendChild(dl);
      log.appendChild(box);
      scrollDown();

      var msg = buildMessage();
      var wa = "https://wa.me/" + CFG.whatsapp + "?text=" + encodeURIComponent(msg);
      var mail = "mailto:" + CFG.email +
        "?subject=" + encodeURIComponent("Site · " + flow.title) +
        "&body=" + encodeURIComponent(msg.replace(/\*/g, ""));

      showChips([
        chip(ICON.wa + "Enviar pelo WhatsApp", "primary", function () {
          window.open(wa, "_blank", "noopener");
          afterSend();
        }),
        chip(ICON.mail + "Enviar por e-mail", "", function () {
          location.href = mail;
          afterSend();
        }),
        chip("Recomeçar", "ghost", function () { greet(); })
      ]);
    });
  }

  function afterSend() {
    var run = ++state.run;
    botSay("Obrigado! 🎬 A equipe responde o mais breve possível.", run).then(function () {
      if (run === state.run) showChips([chip("Voltar ao menu", "ghost", backToMenu)]);
    });
  }

  /* ---------- Abrir / fechar ---------- */
  var started = false, lastFocus = null;

  function open(flowId) {
    lastFocus = document.activeElement;
    panel.classList.add("open");
    fab.classList.add("hidden");
    if (flowId && CFG.flows[flowId]) {
      state.run++;
      log.innerHTML = "";
      started = true;
      var run = state.run;
      botSay(CFG.greeting[0], run).then(function () {
        if (run !== state.run) return;
        addMsg(CFG.flows[flowId].title, "user");
        startFlow(flowId);
      });
    } else if (!started) {
      started = true;
      greet();
    } else {
      var f = actions.querySelector("button, input");
      if (f) f.focus({ preventScroll: true });
    }
  }

  function close() {
    panel.classList.remove("open");
    fab.classList.remove("hidden");
    (lastFocus && document.contains(lastFocus) ? lastFocus : fab).focus({ preventScroll: true });
  }

  fab.addEventListener("click", function () { open(); });
  panel.addEventListener("click", function (e) {
    var b = e.target.closest("[data-act]");
    if (!b) return;
    if (b.dataset.act === "close") close();
    if (b.dataset.act === "restart") greet();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && panel.classList.contains("open")) close();
  });
  document.addEventListener("click", function (e) {
    var t = e.target.closest("[data-chat]");
    if (!t) return;
    e.preventDefault();
    open(t.getAttribute("data-chat"));
  });

  window.DFAssistant = { open: open, close: close };
})();
