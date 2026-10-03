/*
 * Traduções (PT / EN / ES) e tema dia/noite.
 * O português é o texto original do HTML: elementos com data-i18n="chave"
 * guardam o PT ao carregar e recebem EN/ES deste dicionário.
 * Para corrigir uma tradução, edite a chave abaixo.
 */
(function () {
  "use strict";

  var LANGS = ["pt", "en", "es"];
  var HTML_LANG = { pt: "pt-BR", en: "en", es: "es" };
  var LANG_KEY = "df-lang", THEME_KEY = "df-theme";

  var DICT = {
    en: {
      "meta.title": "Danillo Franccesco · Actor, Director and Producer",
      "meta.desc": "Danillo Franccesco: actor, director and producer. Paulo, o Apóstolo and A Vida de Jó (Record), Sintonia (Netflix), Um Broto Legal and the award-winning feature Não Peça Desculpas. Brand partnerships, projects and contact.",
      "meta.linksTitle": "Danillo Franccesco · Links",
      "skip": "Skip to content",
      "aria.menuOpen": "Open menu",
      "aria.menuClose": "Close menu",
      "aria.theme": "Switch day / night",
      "aria.lang": "Language",
      "aria.filter": "Filter works",
      "aria.closeVideo": "Close video",
      "dev.title": "Developed by Extrema Consultoria",

      "nav.sobre": "About",
      "nav.trabalhos": "Work",
      "nav.videos": "Videos",
      "nav.publicidade": "Brands",
      "nav.casting": "Casting",
      "nav.contato": "Contact",

      "role.ator": "Actor",
      "role.diretor": "Director",
      "role.produtor": "Producer",
      "roles": "Actor · Director · Producer",
      "leader.skip": "Skip",

      "hero.cta1": "See work",
      "hero.cta2": "Brands &amp; advertising",

      "about.kicker": "Scene 01 · About",
      "about.title": "A whole life <em>on stage</em>",
      "about.lead": "Born in Extrema, Minas Gerais, Danillo Franccesco has been on stage since childhood and now works between São Paulo and Rio de Janeiro, both in front of and behind the camera.",
      "about.p1": "On stage, he was part of <strong>Além da Vida</strong>, a play based on works psychographed by Chico Xavier that toured Brazil and drew over one million spectators. On TV, he played the villain Flito in <strong>Patrulha Salvadora</strong> (SBT), MC Rod dos Piseiros in <strong>Sintonia</strong> (Netflix), Festus in <strong>Paulo, o Apóstolo</strong> and the Son of God in <strong>A Vida de Jó</strong> (Record).",
      "about.p2": "In film, he played Eduardo, husband of singer Celly Campello, in <strong>Um Broto Legal</strong>. As director and producer, he made the feature <strong>Não Peça Desculpas</strong>, awarded in Brazil and abroad, plus documentaries and short films with MED Produções.",
      "stat.1": "years of career",
      "stat.2": "theater spectators",
      "stat.3": "awards as director",
      "stat.4": "films directed",

      "works.kicker": "Scene 02 · Filmography",
      "works.title": "Work",
      "filter.all": "All",
      "filter.tv": "TV &amp; Streaming",
      "filter.cinema": "Film",
      "filter.direcao": "Directing",
      "filter.teatro": "Theater",

      "feature.kicker": "Scene 03 · Directing and producing",
      "feature.lead": "A family drama about abuse and domestic violence, shot in Extrema (MG) with a cast and crew almost entirely from the town.",
      "feature.p": "Written to spark reflection on violence against women in Brazil, the 80-minute feature marked Danillo Franccesco's debut as a feature director and won festivals in Brazil and abroad.",
      "laurel.intl": "international<br>awards",
      "laurel.nat": "national<br>awards",
      "feature.cta1": "Screening + debate",
      "feature.cta2": "Talk about projects",
      "poster.by": "A film by Danillo Franccesco",
      "poster.meta": "Feature film · 2024 · 80 min",

      "videos.kicker": "Scene 04 · In motion",
      "videos.title": "Videos",

      "ads.kicker": "Scene 05 · Brands &amp; advertising",
      "ads.title": "Your brand <em>in the right frame</em>",
      "ads.intro": "A face from Netflix, Record and cinema who also directs and produces. Danillo can star in your campaign or deliver the whole piece, from script to final cut, through MED Produções.",
      "ad1.t": "Commercials",
      "ad1.p": "Films for TV, cinema and digital, performed by someone who has lived on set for over 15 years.",
      "ad2.t": "Instagram content",
      "ad2.p": "Reels, Stories and posts with a cinematic touch for the @danillofranccesco audience.",
      "ad3.t": "Brand ambassador",
      "ad3.p": "Long-term partnerships for sports, wellness, fashion and lifestyle brands.",
      "ad4.t": "Events",
      "ad4.p": "Appearances, hosting and activations at launches, fairs and festivals.",
      "ad5.t": "Corporate films",
      "ad5.p": "Films for companies, city halls and public agencies, directed and produced in-house.",
      "ad6.t": "Social impact",
      "ad6.p": "Awareness campaigns, like the award-winning Não Peça Desculpas, about domestic violence.",
      "why1.b": "Actor + director + producer",
      "why1.s": "One conversation, one team, a finished piece.",
      "why2.b": "A real athlete",
      "why2.s": "Former professional football player who practices over 30 sports.",
      "why3.b": "Ready for the world",
      "why3.s": "Fluent English, basic Spanish. Works all over Brazil.",
      "ads.ctaText": "Shall we put your brand on screen?",
      "ads.ctaBtn": "Request a quote",

      "insta.kicker": "Scene 06 · Behind the scenes",
      "insta.f1": "Set",
      "insta.f2": "Reels",
      "insta.f3": "Making of",
      "insta.f4": "Premieres",
      "insta.f5": "Photoshoot",
      "img.portrait": "Black and white profile portrait of Danillo Franccesco",
      "img.makeup": "Danillo getting makeup on the set of A Vida de Jó",
      "img.costume": "Danillo in the Son of God costume for A Vida de Jó",
      "img.close": "Close-up of Danillo as the Son of God",
      "img.shoot": "Danillo Franccesco in an outdoor photoshoot",
      "insta.btn": "Follow on Instagram",

      "casting.kicker": "Scene 07 · For casting directors",
      "casting.title": "Casting sheet",
      "slate.name": "Name",
      "slate.height": "Height",
      "slate.weight": "Weight",
      "slate.eyes": "Eyes",
      "slate.eyesV": "Brown",
      "slate.hair": "Hair",
      "slate.hairV": "Brown, short · beard",
      "slate.build": "Build",
      "slate.buildV": "Athletic",
      "slate.langs": "Languages",
      "slate.langsV": "Fluent English · Basic Spanish",
      "slate.base": "Based in",
      "slate.edu": "Education",
      "slate.eduV": "Postgraduate in Film · ILAC/Unimesp",
      "slate.skills": "Skills",
      "slate.skillsV": "Professional football · martial arts · water sports · dance · directing and filmmaking",
      "slate.agency": "Agency",
      "casting.elenco": "Elenco Digital profile",

      "credits.kicker": "End credits",
      "credits.title": "Contact",
      "credit.acting": "Acting",
      "credit.directing": "Directing",
      "credit.production": "Production",
      "credit.agency": "Agency",
      "contact.chat": "Talk to the team",
      "fin": "The End.",
      "footer.links": "Links",

      "bio.sub": "Netflix · Record · SBT · Film",
      "bio.portfolio": "Full portfolio",
      "bio.portfolioS": "Work, videos and casting sheet",
      "bio.ads": "Brands &amp; advertising",
      "bio.adsS": "Commercials, sponsored posts, events, ambassador",
      "bio.projects": "Film &amp; TV projects",
      "bio.projectsS": "Acting, directing and producing",
      "bio.watch": "Watch",
      "bio.paulo": "Record · Disney+ · as Festus",
      "bio.sintonia": "Netflix · season 3",
      "bio.broto": "Trailer · as Eduardo",
      "bio.npd": "My feature as director · 11 awards",
      "bio.contact": "Contact",
      "bio.imdb": "Official filmography",
      "bio.site": "official website"
    },

    es: {
      "meta.title": "Danillo Franccesco · Actor, Director y Productor",
      "meta.desc": "Danillo Franccesco: actor, director y productor. Paulo, o Apóstolo y A Vida de Jó (Record), Sintonia (Netflix), Um Broto Legal y el largometraje premiado Não Peça Desculpas. Publicidad, proyectos y contacto.",
      "meta.linksTitle": "Danillo Franccesco · Enlaces",
      "skip": "Ir al contenido",
      "aria.menuOpen": "Abrir menú",
      "aria.menuClose": "Cerrar menú",
      "aria.theme": "Cambiar día / noche",
      "aria.lang": "Idioma",
      "aria.filter": "Filtrar trabajos",
      "aria.closeVideo": "Cerrar video",
      "dev.title": "Desarrollado por Extrema Consultoria",

      "nav.sobre": "Sobre",
      "nav.trabalhos": "Trabajos",
      "nav.videos": "Videos",
      "nav.publicidade": "Publicidad",
      "nav.casting": "Casting",
      "nav.contato": "Contacto",

      "role.ator": "Actor",
      "role.diretor": "Director",
      "role.produtor": "Productor",
      "roles": "Actor · Director · Productor",
      "leader.skip": "Saltar",

      "hero.cta1": "Ver trabajos",
      "hero.cta2": "Publicidad y marcas",

      "about.kicker": "Escena 01 · Sobre",
      "about.title": "Toda una vida <em>en escena</em>",
      "about.lead": "Nacido en Extrema (Minas Gerais), Danillo Franccesco sube al escenario desde niño y hoy trabaja entre São Paulo y Río de Janeiro, delante y detrás de las cámaras.",
      "about.p1": "En teatro participó en <strong>Além da Vida</strong>, obra basada en textos psicografiados por Chico Xavier que recorrió Brasil y superó el millón de espectadores. En TV interpretó al villano Flito en <strong>Patrulha Salvadora</strong> (SBT), a MC Rod dos Piseiros en <strong>Sintonia</strong> (Netflix), a Festo en <strong>Paulo, o Apóstolo</strong> y al Hijo de Dios en <strong>A Vida de Jó</strong> (Record).",
      "about.p2": "En cine fue Eduardo, esposo de la cantante Celly Campello, en <strong>Um Broto Legal</strong>. Como director y productor firma el largometraje <strong>Não Peça Desculpas</strong>, premiado en Brasil y en el exterior, además de documentales y cortos con MED Produções.",
      "stat.1": "años de carrera",
      "stat.2": "espectadores en teatro",
      "stat.3": "premios como director",
      "stat.4": "películas dirigidas",

      "works.kicker": "Escena 02 · Filmografía",
      "works.title": "Trabajos",
      "filter.all": "Todos",
      "filter.tv": "TV y Streaming",
      "filter.cinema": "Cine",
      "filter.direcao": "Dirección",
      "filter.teatro": "Teatro",

      "feature.kicker": "Escena 03 · Dirección y producción",
      "feature.lead": "Un drama familiar sobre abuso y violencia doméstica, rodado en Extrema (MG) con elenco y equipo casi totalmente de la ciudad.",
      "feature.p": "Escrito para invitar a reflexionar sobre la violencia contra la mujer en Brasil, el largometraje de 80 minutos marcó el debut de Danillo Franccesco como director de largos y ganó festivales en Brasil y en el exterior.",
      "laurel.intl": "premios<br>internacionales",
      "laurel.nat": "premios<br>nacionales",
      "feature.cta1": "Proyección + debate",
      "feature.cta2": "Hablar de proyectos",
      "poster.by": "Una película de Danillo Franccesco",
      "poster.meta": "Largometraje · 2024 · 80 min",

      "videos.kicker": "Escena 04 · En movimiento",
      "videos.title": "Videos",

      "ads.kicker": "Escena 05 · Marcas y publicidad",
      "ads.title": "Tu marca <em>en el cuadro correcto</em>",
      "ads.intro": "Un rostro de Netflix, Record y el cine que además dirige y produce. Danillo puede protagonizar tu campaña o entregar la pieza completa, del guion a la posproducción, con MED Produções.",
      "ad1.t": "Comerciales",
      "ad1.p": "Piezas para TV, cine y digital con la actuación de quien vive el set hace más de 15 años.",
      "ad2.t": "Publi en Instagram",
      "ad2.p": "Reels, Stories y posts con lenguaje cinematográfico para la audiencia de @danillofranccesco.",
      "ad3.t": "Embajador de marca",
      "ad3.p": "Alianzas de largo plazo para marcas de deporte, bienestar, moda y lifestyle.",
      "ad4.t": "Eventos",
      "ad4.p": "Presencia, conducción y activaciones en lanzamientos, ferias y festivales.",
      "ad5.t": "Institucional",
      "ad5.p": "Películas para empresas, municipios y organismos públicos, con dirección y producción propias.",
      "ad6.t": "Impacto social",
      "ad6.p": "Campañas de concientización, como la premiada Não Peça Desculpas, sobre violencia doméstica.",
      "why1.b": "Actor + director + productor",
      "why1.s": "Una conversación, un equipo, la pieza lista.",
      "why2.b": "Deportista de verdad",
      "why2.s": "Exjugador de fútbol profesional y practicante de más de 30 deportes.",
      "why3.b": "Listo para el mundo",
      "why3.s": "Inglés fluido, español básico. Atiende todo Brasil.",
      "ads.ctaText": "¿Ponemos tu marca en escena?",
      "ads.ctaBtn": "Pedir presupuesto",

      "insta.kicker": "Escena 06 · Detrás de cámaras",
      "insta.f1": "Set",
      "insta.f2": "Reels",
      "insta.f3": "Making of",
      "insta.f4": "Estrenos",
      "insta.f5": "Sesión de fotos",
      "img.portrait": "Retrato de perfil en blanco y negro de Danillo Franccesco",
      "img.makeup": "Danillo maquillándose en el set de A Vida de Jó",
      "img.costume": "Danillo con el vestuario del Hijo de Dios en A Vida de Jó",
      "img.close": "Primer plano de Danillo caracterizado como el Hijo de Dios",
      "img.shoot": "Danillo Franccesco en una sesión de fotos al aire libre",
      "insta.btn": "Seguir en Instagram",

      "casting.kicker": "Escena 07 · Para directores de casting",
      "casting.title": "Ficha técnica",
      "slate.name": "Nombre",
      "slate.height": "Altura",
      "slate.weight": "Peso",
      "slate.eyes": "Ojos",
      "slate.eyesV": "Marrones",
      "slate.hair": "Cabello",
      "slate.hairV": "Castaño, corto · barba",
      "slate.build": "Biotipo",
      "slate.buildV": "Atlético",
      "slate.langs": "Idiomas",
      "slate.langsV": "Inglés fluido · Español básico",
      "slate.base": "Base",
      "slate.edu": "Formación",
      "slate.eduV": "Posgrado en Cine · ILAC/Unimesp",
      "slate.skills": "Habilidades",
      "slate.skillsV": "Fútbol profesional · artes marciales · deportes acuáticos · danza · dirección y filmmaking",
      "slate.agency": "Agencia",
      "casting.elenco": "Perfil en Elenco Digital",

      "credits.kicker": "Créditos finales",
      "credits.title": "Contacto",
      "credit.acting": "Actuación",
      "credit.directing": "Dirección",
      "credit.production": "Producción",
      "credit.agency": "Agencia",
      "contact.chat": "Hablar con el equipo",
      "fin": "Fin.",
      "footer.links": "Enlaces",

      "bio.sub": "Netflix · Record · SBT · Cine",
      "bio.portfolio": "Portafolio completo",
      "bio.portfolioS": "Trabajos, videos y ficha técnica",
      "bio.ads": "Publicidad y marcas",
      "bio.adsS": "Comerciales, publis, eventos, embajador",
      "bio.projects": "Proyectos audiovisuales",
      "bio.projectsS": "Actuación, dirección y producción",
      "bio.watch": "Mira",
      "bio.paulo": "Record · Disney+ · como Festo",
      "bio.sintonia": "Netflix · 3.ª temporada",
      "bio.broto": "Tráiler · como Eduardo",
      "bio.npd": "Mi largometraje como director · 11 premios",
      "bio.contact": "Contacto",
      "bio.imdb": "Filmografía oficial",
      "bio.site": "sitio oficial"
    }
  };

  /* Textos usados só pelo JavaScript (os três idiomas) */
  var JS = {
    pt: {
      "aria.menuOpen": "Abrir menu", "aria.menuClose": "Fechar menu",
      "type.tv": "TV & Streaming", "type.cinema": "Cinema", "type.direcao": "Direção", "type.teatro": "Teatro",
      "card.trailer": "Trailer", "card.more": "Saiba mais",
      "aria.watch": "Assistir trailer: ", "aria.open": "Abrir: "
    },
    en: {
      "type.tv": "TV & Streaming", "type.cinema": "Film", "type.direcao": "Directing", "type.teatro": "Theater",
      "card.trailer": "Trailer", "card.more": "Learn more",
      "aria.watch": "Watch trailer: ", "aria.open": "Open: "
    },
    es: {
      "type.tv": "TV y Streaming", "type.cinema": "Cine", "type.direcao": "Dirección", "type.teatro": "Teatro",
      "card.trailer": "Tráiler", "card.more": "Ver más",
      "aria.watch": "Ver tráiler: ", "aria.open": "Abrir: "
    }
  };

  /* ---------- Idioma ---------- */
  function store(key, val) { try { localStorage.setItem(key, val); } catch (e) {} }
  function read(key) { try { return localStorage.getItem(key); } catch (e) { return null; } }

  function detect() {
    var saved = read(LANG_KEY);
    if (LANGS.indexOf(saved) > -1) return saved;
    var nav = (navigator.languages && navigator.languages[0]) || navigator.language || "pt";
    nav = nav.slice(0, 2).toLowerCase();
    return LANGS.indexOf(nav) > -1 ? nav : (nav === "pt" ? "pt" : "en");
  }

  var lang = detect();
  var listeners = [];
  var original = {}; // textos PT capturados do HTML

  function t(key) {
    if (lang !== "pt" && DICT[lang] && DICT[lang][key] != null) return DICT[lang][key];
    if (JS[lang] && JS[lang][key] != null) return JS[lang][key];
    if (original[key] != null) return original[key];
    return (JS.pt[key] != null) ? JS.pt[key] : key;
  }

  /* Campo que pode ser texto simples ou { pt, en, es } */
  function pick(v) {
    if (v == null || typeof v === "string") return v || "";
    return v[lang] || v.pt || "";
  }

  function apply() {
    document.documentElement.lang = HTML_LANG[lang];

    Array.prototype.forEach.call(document.querySelectorAll("[data-i18n]"), function (el) {
      var key = el.getAttribute("data-i18n");
      if (!(key in original)) original[key] = el.innerHTML;
      el.innerHTML = t(key);
    });
    Array.prototype.forEach.call(document.querySelectorAll("[data-i18n-attr]"), function (el) {
      // formato: "atributo:chave; atributo:chave"
      el.getAttribute("data-i18n-attr").split(";").forEach(function (pair) {
        var p = pair.split(":"), attr = p[0].trim(), key = (p[1] || "").trim();
        if (!attr || !key) return;
        var okey = "@" + key;
        if (!(okey in original)) original[okey] = el.getAttribute(attr);
        el.setAttribute(attr, lang === "pt" ? original[okey] : (DICT[lang] && DICT[lang][key]) || original[okey]);
      });
    });

    var titleKey = document.body.getAttribute("data-title-key") || "meta.title";
    if (!("@title" in original)) original["@title"] = document.title;
    document.title = lang === "pt" ? original["@title"] : DICT[lang][titleKey];
    var desc = document.querySelector('meta[name="description"]');
    if (desc && document.body.getAttribute("data-title-key") !== "meta.linksTitle") {
      if (!("@desc" in original)) original["@desc"] = desc.content;
      desc.content = lang === "pt" ? original["@desc"] : DICT[lang]["meta.desc"];
    }

    Array.prototype.forEach.call(document.querySelectorAll(".lang-menu [data-lang]"), function (b) {
      b.setAttribute("aria-current", String(b.getAttribute("data-lang") === lang));
    });
    Array.prototype.forEach.call(document.querySelectorAll(".lang-current"), function (s) {
      s.textContent = lang.toUpperCase();
    });
  }

  function setLang(next) {
    if (LANGS.indexOf(next) < 0 || next === lang) return;
    lang = next;
    store(LANG_KEY, next);
    apply();
    listeners.forEach(function (fn) { fn(lang); });
  }

  /* Seletor de idioma (details/summary) */
  Array.prototype.forEach.call(document.querySelectorAll(".lang"), function (det) {
    det.addEventListener("click", function (e) {
      var b = e.target.closest("[data-lang]");
      if (!b) return;
      setLang(b.getAttribute("data-lang"));
      det.open = false;
      det.querySelector("summary").focus();
    });
    document.addEventListener("click", function (e) { if (!det.contains(e.target)) det.open = false; });
    det.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && det.open) { e.stopPropagation(); det.open = false; det.querySelector("summary").focus(); }
    });
  });

  /* ---------- Dia / noite (padrão: noite; segue o sistema se não houver escolha) ---------- */
  var root = document.documentElement;
  function effectiveTheme() {
    var a = root.getAttribute("data-theme");
    if (a === "light" || a === "dark") return a;
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }
  Array.prototype.forEach.call(document.querySelectorAll(".theme-toggle"), function (btn) {
    btn.addEventListener("click", function () {
      var next = effectiveTheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      store(THEME_KEY, next);
    });
  });

  apply();

  window.DFI18N = {
    t: t,
    pick: pick,
    lang: function () { return lang; },
    set: setLang,
    onChange: function (fn) { listeners.push(fn); }
  };
})();
