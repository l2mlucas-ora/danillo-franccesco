(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var I18N = window.DFI18N;
  var t = I18N.t, pick = I18N.pick;
  var $ = function (s, ctx) { return (ctx || document).querySelector(s); };
  var $$ = function (s, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(s)); };

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* ---------- Contagem de película (só na 1ª visita da sessão) ---------- */
  var leader = $("#leader");
  function endLeader() {
    if (!leader || leader.classList.contains("done")) return;
    leader.classList.add("done");
    document.documentElement.classList.add("loaded");
    try { sessionStorage.setItem("df-leader", "1"); } catch (e) {}
  }
  var seen = false;
  try { seen = sessionStorage.getItem("df-leader") === "1"; } catch (e) {}
  if (!leader || reduceMotion || seen) {
    if (leader) leader.classList.add("done");
    requestAnimationFrame(function () { document.documentElement.classList.add("loaded"); });
  } else {
    var n = 3, num = $("#leaderNum");
    var timer = setInterval(function () {
      n -= 1;
      if (n <= 0) { clearInterval(timer); endLeader(); return; }
      num.textContent = n;
    }, 2000);
    leader.addEventListener("click", function () { clearInterval(timer); endLeader(); });
    document.addEventListener("keydown", function once() {
      clearInterval(timer); endLeader(); document.removeEventListener("keydown", once);
    });
  }

  /* ---------- Navegação ---------- */
  var nav = $("#nav"), toggle = $("#navToggle");
  function onScroll() { nav.classList.toggle("scrolled", window.scrollY > 40); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  function closeMenu() {
    nav.classList.remove("menu-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", t("aria.menuOpen"));
  }
  toggle.addEventListener("click", function () {
    var open = !nav.classList.contains("menu-open");
    nav.classList.toggle("menu-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", t(open ? "aria.menuClose" : "aria.menuOpen"));
  });
  $$("#navLinks a").forEach(function (a) { a.addEventListener("click", closeMenu); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeMenu(); });

  /* Link ativo conforme a seção */
  var links = $$("#navLinks a");
  if ("IntersectionObserver" in window) {
    var secObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        links.forEach(function (a) { a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id); });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    $$("main section[id]").forEach(function (s) { secObs.observe(s); });
  }

  /* ---------- Filmografia ---------- */
  var TONE = {
    tv: "rgba(212,174,58,.14)",
    cinema: "rgba(236,230,218,.10)",
    direcao: "rgba(179,38,30,.22)",
    teatro: "rgba(120,90,170,.18)"
  };
  var grid = $("#worksGrid");
  var vgrid = $("#videoGrid");
  var currentFilter = "all";

  function renderWorks() {
    grid.innerHTML = "";
    (window.WORKS || []).forEach(function (w) {
      var title = pick(w.title);
      var clickable = !!(w.youtube || w.link);
      var el = document.createElement(clickable ? "button" : "article");
      el.className = "card reveal in" + (w.image ? " has-img" : "");
      el.dataset.type = w.type;
      el.style.setProperty("--tone", TONE[w.type] || TONE.tv);
      if (currentFilter !== "all" && w.type !== currentFilter) el.classList.add("hide");
      if (clickable) {
        el.type = "button";
        el.setAttribute("data-clickable", "");
        el.setAttribute("aria-label", t(w.youtube ? "aria.watch" : "aria.open") + title);
      }
      el.innerHTML =
        (w.image ? '<img class="card-bg" src="' + esc(w.image) + '" alt="" loading="lazy" decoding="async">' : "") +
        '<div class="card-top"><span class="card-type">' + esc(t("type." + w.type)) + "</span><span>" + esc(w.year) + "</span></div>" +
        '<h3 class="card-title">' + esc(title) + "</h3>" +
        '<p class="card-role">' + esc(pick(w.role)) + "</p>" +
        '<p class="card-outlet">' + esc(pick(w.outlet)) + "</p>" +
        (w.youtube ? '<span class="card-play"><i>▶</i>' + esc(t("card.trailer")) + "</span>" :
          w.link ? '<span class="card-play"><i>→</i>' + esc(t("card.more")) + "</span>" : "");
      if (clickable) {
        el.addEventListener("click", function () {
          if (w.youtube) openVideo(w.youtube, title, el);
          else if (w.link.charAt(0) === "#") document.querySelector(w.link).scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
          else window.open(w.link, "_blank", "noopener");
        });
      }
      grid.appendChild(el);
    });
  }

  /* ---------- Carrossel em "Todos"; grade completa ao escolher uma categoria ---------- */
  var railNav = $("#railNav");
  var railTimer = null, railPaused = false, railVisible = false;

  function isRail() { return currentFilter === "all"; }

  function railStep(dir) {
    var card = $(".card:not(.hide)", grid);
    if (!card) return;
    var step = card.getBoundingClientRect().width + parseFloat(getComputedStyle(grid).columnGap || 20);
    var max = grid.scrollWidth - grid.clientWidth;
    var behavior = reduceMotion ? "auto" : "smooth";
    if (dir > 0 && grid.scrollLeft >= max - 4) grid.scrollTo({ left: 0, behavior: behavior });
    else if (dir < 0 && grid.scrollLeft <= 4) grid.scrollTo({ left: max, behavior: behavior });
    else grid.scrollBy({ left: dir * step, behavior: behavior });
  }

  function railTick() {
    if (isRail() && !railPaused && railVisible && !document.hidden) railStep(1);
  }

  function setLayout() {
    var rail = isRail();
    grid.classList.toggle("is-rail", rail);
    railNav.hidden = !rail;
    grid.scrollLeft = 0;
    clearInterval(railTimer);
    if (rail && !reduceMotion) railTimer = setInterval(railTick, 3000);
  }

  /* Pausa enquanto o visitante interage com o carrossel */
  ["mouseenter", "focusin", "touchstart"].forEach(function (ev) {
    grid.addEventListener(ev, function () { railPaused = true; }, { passive: true });
  });
  ["mouseleave", "focusout"].forEach(function (ev) {
    grid.addEventListener(ev, function () { railPaused = false; });
  });
  grid.addEventListener("touchend", function () { setTimeout(function () { railPaused = false; }, 4000); }, { passive: true });

  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) { railVisible = entries[0].isIntersecting; }).observe(grid);
  } else {
    railVisible = true;
  }

  $("#railPrev").addEventListener("click", function () { railStep(-1); });
  $("#railNext").addEventListener("click", function () { railStep(1); });

  $$(".filter").forEach(function (btn) {
    btn.addEventListener("click", function () {
      currentFilter = btn.dataset.filter;
      $$(".filter").forEach(function (b) { b.setAttribute("aria-pressed", String(b === btn)); });
      $$(".card", grid).forEach(function (c) {
        c.classList.toggle("hide", currentFilter !== "all" && c.dataset.type !== currentFilter);
      });
      setLayout();
    });
  });

  /* ---------- Vídeos ---------- */
  function renderVideos() {
    vgrid.innerHTML = "";
    (window.WORKS || []).filter(function (w) { return w.youtube; }).forEach(function (w) {
      var title = pick(w.title);
      var b = document.createElement("button");
      b.type = "button";
      b.className = "video reveal in";
      b.setAttribute("aria-label", t("aria.watch") + title);
      b.innerHTML =
        '<img loading="lazy" alt="" src="https://i.ytimg.com/vi/' + esc(w.youtube) + '/hqdefault.jpg">' +
        '<span class="video-play" aria-hidden="true"><svg viewBox="0 0 24 24"><path fill="currentColor" d="M7 4v16l13-8z"/></svg></span>' +
        '<span class="video-label"><small>' + esc(t("type." + w.type)) + " · " + esc(w.year) + "</small><b>" + esc(title) + "</b></span>";
      b.addEventListener("click", function () { openVideo(w.youtube, title, b); });
      vgrid.appendChild(b);
    });
  }

  renderWorks();
  renderVideos();
  setLayout();
  /* No primeiro carregamento os vídeos entram com animação
     (os cards do carrossel ficam visíveis: os que estão fora da tela, na lateral, não seriam revelados) */
  $$(".video").forEach(function (el) { el.classList.remove("in"); });

  I18N.onChange(function () {
    renderWorks();
    renderVideos();
    toggle.setAttribute("aria-label", t(nav.classList.contains("menu-open") ? "aria.menuClose" : "aria.menuOpen"));
  });

  /* ---------- Modal de vídeo ---------- */
  var modal = $("#modal"), frame = $("#modalFrame"), closeBtn = $("#modalClose"), lastFocus = null;
  function openVideo(id, title, from) {
    lastFocus = from || document.activeElement;
    $("#modalTitle").textContent = title;
    frame.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + encodeURIComponent(id) +
      '?autoplay=1&rel=0&modestbranding=1" title="' + esc(title) + '" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>';
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
    closeBtn.focus();
  }
  function closeVideo() {
    if (!modal.classList.contains("open")) return;
    modal.classList.remove("open");
    frame.innerHTML = "";
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  }
  closeBtn.addEventListener("click", closeVideo);
  /* Qualquer botão com data-video="<id do YouTube>" abre o trailer no modal */
  $$("[data-video]").forEach(function (b) {
    b.addEventListener("click", function () { openVideo(b.dataset.video, b.dataset.videoTitle || "Trailer", b); });
  });
  modal.addEventListener("click", function (e) { if (e.target === modal) closeVideo(); });
  document.addEventListener("keydown", function (e) {
    if (!modal.classList.contains("open")) return;
    if (e.key === "Escape") closeVideo();
    if (e.key === "Tab") { e.preventDefault(); closeBtn.focus(); }
  });

  /* ---------- Revelar ao rolar + contadores ---------- */
  function countUp(el) {
    var target = parseInt(el.dataset.count, 10), suffix = el.textContent.replace(/[0-9]/g, "");
    if (reduceMotion || !target) return;
    var start = null;
    function step(t) {
      if (!start) start = t;
      var p = Math.min((t - start) / 1400, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  var revealEls = $$(".reveal");
  if ("IntersectionObserver" in window && !reduceMotion) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        en.target.classList.add("in");
        $$("[data-count]", en.target).forEach(countUp);
        obs.unobserve(en.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(function (el) { obs.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  var y = $("#year");
  if (y) y.textContent = new Date().getFullYear();
})();
