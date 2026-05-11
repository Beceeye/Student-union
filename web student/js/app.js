/**
 * EAU STUDENT GALKAIO — site shell, i18n, theme, animations, calendar
 */
(function () {
  "use strict";

  const T = {
    en: {
      "meta.description":
        "Official student union of East Africa University (Jaamacadda Bariga Afrika) — EAU STUDENT GALKAIO.",
      "nav.home": "Home",
      "nav.about": "About",
      "nav.blog": "Blog",
      "nav.community": "Community",
      "nav.clubs": "Clubs",
      "nav.relations": "Relations",
      "nav.contact": "Contact",
      "common.readmore": "Read more",
      "common.join": "Join club",
      "common.learn": "Learn more",
      "footer.tagline": "Voice, vision, and service for every EAU student.",
      "footer.explore": "Explore",
      "footer.union": "Union",
      "footer.legal": "Legal",
      "footer.privacy": "Privacy",
      "footer.terms": "Terms",
      "footer.copy": "© {year} EAU STUDENT GALKAIO. All rights reserved.",
      "home.badge": "East Africa University",
      "home.hero.title": "Welcome to EAU STUDENT GALKAIO",
      "home.hero.sub": "Official Student Union of East Africa University",
      "home.cta.join": "Join community",
      "home.cta.clubs": "Explore clubs",
      "home.cta.news": "Latest news",
      "home.stat1": "Total students",
      "home.stat2": "Active clubs",
      "home.stat3": "Events held",
      "home.stat4": "Community members",
      "home.sec1.eyebrow": "Purpose",
      "home.sec1.title": "Leadership that serves students first",
      "home.sec1.desc":
        "We represent your interests, amplify your voice, and build programs that strengthen academic life and campus culture.",
      "home.sec2.eyebrow": "Leadership",
      "home.sec2.title": "Meet part of our leadership team",
      "home.sec2.desc": "Dedicated officers working across faculties and committees.",
      "home.card1.title": "Representation",
      "home.card1.desc":
        "Faculty councils, grievance support, and transparent reporting to students and administration.",
      "home.card2.title": "Programs",
      "home.card2.desc":
        "Leadership academies, civic engagement, wellness weeks, and career-facing collaborations.",
      "home.card3.title": "Culture",
      "home.card3.desc":
        "Celebrating Somali heritage and East African academic excellence on one inclusive campus stage.",
      "home.lead.link": "Full leadership structure",
      "about.page.title": "About the union",
      "about.page.sub": "History, former chairmen, and faculty student leadership.",
      "about.chairs.section": "Former Student Union Chairmen & Current Chairman",
      "about.chairs.so": "Guddoomiyaashii Soo Maray Ururka Ardayda",
      "about.chairs.intro":
        "Eight leaders who shaped the union’s path — and our current chairman carrying the mandate forward.",
      "about.feature.role": "Current chairman",
      "about.feature.msg":
        "My commitment is transparent governance, stronger student services, and partnerships that open real opportunities for every faculty.",
      "about.faculty.section": "Faculty leadership",
      "about.faculty.so": "Guddoomiyaasha iyo Guddoomiye Ku-xigeennada Kulliyadaha",
      "about.faculty.intro": "Seven faculties — chairs and vice chairs at your service.",
      "about.chair.label": "Chairman",
      "about.vice.label": "Vice chairman",
      "blog.page.title": "Blog & updates",
      "blog.page.sub": "Announcements, reports, events, and student voices.",
      "blog.cat.all": "All topics",
      "community.page.title": "Community",
      "community.page.sub": "Activities, volunteering, achievements, and stories.",
      "community.gal.title": "Event gallery",
      "community.test.title": "Testimonials",
      "clubs.page.title": "Clubs",
      "clubs.page.sub": "Discover culture, research, and literacy communities.",
      "relations.page.title": "Relations",
      "relations.page.sub": "Administration, partnerships, and collaboration.",
      "relations.form.title": "Collaboration inquiry",
      "relations.form.sub": "Partners, NGOs, and campus offices — reach out here.",
      "relations.comm.title": "Communication",
      "relations.comm.body":
        "Quarterly meetings with university administration, shared bulletins, and structured feedback channels for students.",
      "contact.page.title": "Contact",
      "contact.page.sub": "Visit, call, or write — we respond within two working days.",
      "contact.form.send": "Send message",
      "contact.addr": "Campus student union office, East Africa University",
      "newsletter.title": "Newsletter",
      "newsletter.sub": "Monthly highlights — events, grants, and leadership notes.",
      "newsletter.placeholder": "Your email",
      "newsletter.btn": "Subscribe",
      "calendar.title": "Event calendar",
      "theme.light": "Light",
      "theme.dark": "Dark",
    },
    so: {
      "meta.description":
        "Ururka rasmiga ah ee ardayda Jaamacadda Bariga Afrika — EAU STUDENT GALKAIO.",
      "nav.home": "Bogga hore",
      "nav.about": "Ku saabsan",
      "nav.blog": "Maqaallo",
      "nav.community": "Bulshada",
      "nav.clubs": "Naadiyada",
      "nav.relations": "Xiriirka",
      "nav.contact": "Nala soo xiriir",
      "common.readmore": "Akhri wax dheeraad ah",
      "common.join": "Ku biir naadi",
      "common.learn": "Wax badan ka baro",
      "footer.tagline": "Cod, aragti, iyo adeeg loogu talagalay arday kasta oo EAU.",
      "footer.explore": "Baadh",
      "footer.union": "Ururka",
      "footer.legal": "Sharciga",
      "footer.privacy": "Asturnaanta",
      "footer.terms": "Shuruudaha",
      "footer.copy": "© {year} EAU STUDENT GALKAIO. Xuquuqda oo dhan way dhawran yihiin.",
      "home.badge": "Jaamacadda Bariga Afrika",
      "home.hero.title": "Ku soo dhawoow EAU STUDENT GALKAIO",
      "home.hero.sub": "Ururka Rasmiga ah ee Ardayda Jaamacadda Bariga Afrika",
      "home.cta.join": "Ku biir bulshada",
      "home.cta.clubs": "Baadh naadiyada",
      "home.cta.news": "Wararkii ugu dambeeyay",
      "home.stat1": "Wadarta ardayda",
      "home.stat2": "Naadiyada firfircoon",
      "home.stat3": "Dhacdooyinka la qabtay",
      "home.stat4": "Xubnaha bulshada",
      "home.sec1.eyebrow": "Ujeedo",
      "home.sec1.title": "Hogaaminta ardayda mudnaanta u leh",
      "home.sec1.desc":
        "Waxaan matalnaa danahaaga, kor u qaadnaa codkaaga, waxaanan dhisnaa barnaamijyo xoojinaya nolosha tacliinta iyo dhaqanka xarunta.",
      "home.sec2.eyebrow": "Hogaaminta",
      "home.sec2.title": "Qaar ka mid ah kooxda hoggaanka",
      "home.sec2.desc": "Saraakiil ka go’an oo ka shaqeeya kulliyadaha iyo guddiyada.",
      "home.card1.title": "Wakiilinta",
      "home.card1.desc":
        "Golayaasha kulliyadaha, taageerada cabashooyinka, iyo warbixino hufan oo ardayda iyo maamulka u socota.",
      "home.card2.title": "Barnaamijyada",
      "home.card2.desc":
        "Iskuulada hoggaanka, ka qaybgalka muwaadiniinta, toddamaha caafimaadka, iyo iskaashiyada xirfadeed.",
      "home.card3.title": "Dhaqanka",
      "home.card3.desc":
        "Xuska dhaxalka Soomaaliyeed iyo heerka tacliinta Bariga Afrika hal marxaladdood oo isku dhafan.",
      "home.lead.link": "Qaab dhismeedka hoggaanka oo dhan",
      "about.page.title": "Ku saabsan ururka",
      "about.page.sub": "Taariikhda, guddoomiyayaashii hore, iyo hoggaanka ardayda ee kulliyadaha.",
      "about.chairs.section": "Guddoomiyayaashii Ururka Ardayda & Guddoomiyaha hadda",
      "about.chairs.so": "Guddoomiyaashii Soo Maray Ururka Ardayda",
      "about.chairs.intro":
        "Sideed hogaamiye oo qaabeyey wadada ururka — iyo guddoomiye hadda oo wata amarka.",
      "about.feature.role": "Guddoomiyaha hadda",
      "about.feature.msg":
        "Ballanqaadkaygu waa maamul hufan, adeegyo arday oo xoogan, iyo iskaashi fursado dhab ah u furaya kulliyad kasta.",
      "about.faculty.section": "Hogaanka kulliyadaha",
      "about.faculty.so": "Guddoomiyaasha iyo Guddoomiye Ku-xigeennada Kulliyadaha",
      "about.faculty.intro": "Toddoba kulliyadood — guddoomiyeyaal iyo ku-xigeenno adeeg kuu diyaar ah.",
      "about.chair.label": "Guddoomiye",
      "about.vice.label": "Guddoomiye ku-xigeen",
      "blog.page.title": "Maqaallo & cusbooneysiin",
      "blog.page.sub": "Ogeysiisyo, warbixino, dhacdooyin, iyo codka ardayda.",
      "blog.cat.all": "Mawduucyada oo dhan",
      "community.page.title": "Bulshada",
      "community.page.sub": "Howlaha, iskaa wax u qabsiga, guulaha, iyo sheekooyinka.",
      "community.gal.title": "Sawirada dhacdooyinka",
      "community.test.title": "Markhaatiyaal",
      "clubs.page.title": "Naadiyada",
      "clubs.page.sub": "Soo ogow dhaqanka, cilmi baarista, iyo akhriska.",
      "relations.page.title": "Xiriirka",
      "relations.page.sub": "Maamulka, iskaashiyada, iyo wada shaqeynta.",
      "relations.form.title": "Baaritaanka iskaashiga",
      "relations.form.sub": "Lamaane, NGO, iyo xafiisyada xarunta — halkan nala soo xiriir.",
      "relations.comm.title": "Isgaarsiinta",
      "relations.comm.body":
        "Kulan toddobaadle ah oo la leh maamulka jaamacadda, ogeysiisyo la wadaago, iyo kanaalo jawaab celin oo habaysan oo loogu talagalay ardayda.",
      "contact.page.title": "Nala soo xiriir",
      "contact.page.sub": "Soo booqo, wac, ama qor — waxaan ku jawaabnaa laba maalmood oo shaqo gudahood.",
      "contact.form.send": "Dir fariinta",
      "contact.addr": "Xafiiska ururka ardayda ee xarunta, Jaamacadda Bariga Afrika",
      "newsletter.title": "Wargeyska emaylka",
      "newsletter.sub": "Soo koobid bil kasta — dhacdooyin, deeqo, iyo qoraallada hoggaanka.",
      "newsletter.placeholder": "Emaylkaaga",
      "newsletter.btn": "Is diiwaangeli",
      "calendar.title": "Jadwalka dhacdooyinka",
      "theme.light": "Iftiin",
      "theme.dark": "Madow",
    },
  };

  function getLang() {
    return localStorage.getItem("eau-lang") || "en";
  }

  function setLang(lang) {
    localStorage.setItem("eau-lang", lang);
    document.documentElement.setAttribute("lang", lang === "so" ? "so" : "en");
    applyI18n(lang);
    const btn = document.querySelector("[data-lang-toggle]");
    if (btn) btn.textContent = lang === "so" ? "EN" : "SO";
  }

  function persistLang(next) {
    localStorage.setItem("eau-lang", next);
    document.documentElement.setAttribute("lang", next === "so" ? "so" : "en");
  }

  function t(lang, key) {
    const table = T[lang] || T.en;
    return table[key] != null ? table[key] : T.en[key] || key;
  }

  function applyI18n(lang) {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      const val = t(lang, key);
      if (val) el.textContent = val.replace("{year}", String(new Date().getFullYear()));
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      const key = el.getAttribute("data-i18n-placeholder");
      el.setAttribute("placeholder", t(lang, key));
    });
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", t(lang, "meta.description"));
  }

  function getTheme() {
    return localStorage.getItem("eau-theme") || "light";
  }

  function setTheme(theme) {
    localStorage.setItem("eau-theme", theme);
    document.documentElement.setAttribute("data-theme", theme === "dark" ? "dark" : "light");
    const btn = document.querySelector("[data-theme-toggle]");
    if (btn) {
      const lang = getLang();
      btn.setAttribute("aria-label", theme === "dark" ? t(lang, "theme.light") : t(lang, "theme.dark"));
      btn.textContent = theme === "dark" ? "☀" : "☾";
    }
  }

  function injectShell(page) {
    const headerSlot = document.querySelector("[data-include='header']");
    const footerSlot = document.querySelector("[data-include='footer']");
    const lang = getLang();

    const nav = function (id, file, key) {
      const cls = page === id ? ' class="is-active"' : "";
      return "<a href=\"" + file + "\"" + cls + ">" + t(lang, key) + "</a>";
    };

    if (headerSlot) {
      headerSlot.innerHTML =
        '<header class="site-header" id="top">' +
        '<div class="container header-inner">' +
        '<a class="brand" href="index.html">' +
        '<span class="brand-mark">EAU<br>SU</span>' +
        '<span class="brand-text">EAU STUDENT GALKAIO<small>Jaamacadda Bariga Afrika</small></span></a>' +
        '<nav class="nav-desktop" aria-label="Primary">' +
        nav("home", "index.html", "nav.home") +
        nav("about", "about.html", "nav.about") +
        nav("blog", "blog.html", "nav.blog") +
        nav("community", "community.html", "nav.community") +
        nav("clubs", "clubs.html", "nav.clubs") +
        nav("relations", "relations.html", "nav.relations") +
        nav("contact", "contact.html", "nav.contact") +
        "</nav>" +
        '<div class="header-actions">' +
        '<button type="button" class="lang-toggle" data-lang-toggle aria-label="Language">SO</button>' +
        '<button type="button" class="theme-toggle" data-theme-toggle>☾</button>' +
        '<button type="button" class="nav-toggle" data-nav-toggle aria-expanded="false" aria-label="Menu">☰</button>' +
        "</div></div>" +
        '<nav class="nav-mobile" id="nav-mobile" aria-label="Mobile">' +
        nav("home", "index.html", "nav.home") +
        nav("about", "about.html", "nav.about") +
        nav("blog", "blog.html", "nav.blog") +
        nav("community", "community.html", "nav.community") +
        nav("clubs", "clubs.html", "nav.clubs") +
        nav("relations", "relations.html", "nav.relations") +
        nav("contact", "contact.html", "nav.contact") +
        "</nav></header>";
    }

    if (footerSlot) {
      footerSlot.innerHTML =
        '<footer class="site-footer">' +
        '<div class="container footer-grid">' +
        '<div class="footer-brand">' +
        '<a class="brand" href="index.html">' +
        '<span class="brand-mark">EAU<br>SU</span>' +
        '<span class="brand-text">EAU STUDENT GALKAIO<small>Jaamacadda Bariga Afrika</small></span></a>' +
        '<p data-i18n="footer.tagline" style="margin:1rem 0 0;color:#94a3b8;max-width:280px;font-size:0.92rem;line-height:1.5"></p></div>' +
        '<div class="footer-col"><h4 data-i18n="footer.explore"></h4><ul>' +
        '<li><a href="about.html" data-i18n="nav.about"></a></li>' +
        '<li><a href="blog.html" data-i18n="nav.blog"></a></li>' +
        '<li><a href="clubs.html" data-i18n="nav.clubs"></a></li></ul></div>' +
        '<div class="footer-col"><h4 data-i18n="footer.union"></h4><ul>' +
        '<li><a href="community.html" data-i18n="nav.community"></a></li>' +
        '<li><a href="relations.html" data-i18n="nav.relations"></a></li>' +
        '<li><a href="contact.html" data-i18n="nav.contact"></a></li></ul></div>' +
        '<div class="footer-col"><h4 data-i18n="footer.legal"></h4><ul>' +
        '<li><a href="#" data-i18n="footer.privacy"></a></li>' +
        '<li><a href="#" data-i18n="footer.terms"></a></li></ul></div></div>' +
        '<div class="container footer-bottom">' +
        '<span data-i18n="footer.copy"></span>' +
        '<span>EAU · Student Union</span></div></footer>';
    }

    applyI18n(lang);
    document.documentElement.setAttribute("lang", lang === "so" ? "so" : "en");
    const langBtn = document.querySelector("[data-lang-toggle]");
    if (langBtn) langBtn.textContent = lang === "so" ? "EN" : "SO";
    wireHeaderFooter();
    setTheme(getTheme());
  }

  function wireHeaderFooter() {
    const langBtn = document.querySelector("[data-lang-toggle]");
    if (langBtn) {
      langBtn.addEventListener("click", function () {
        const next = getLang() === "en" ? "so" : "en";
        persistLang(next);
        injectShell(document.body.getAttribute("data-page") || "home");
        initCalendar();
      });
    }
    const themeBtn = document.querySelector("[data-theme-toggle]");
    if (themeBtn) {
      themeBtn.addEventListener("click", function () {
        setTheme(getTheme() === "dark" ? "light" : "dark");
      });
    }
    const navToggle = document.querySelector("[data-nav-toggle]");
    const navMobile = document.getElementById("nav-mobile");
    if (navToggle && navMobile) {
      navToggle.addEventListener("click", function () {
        const open = navMobile.classList.toggle("is-open");
        navToggle.setAttribute("aria-expanded", open ? "true" : "false");
      });
      navMobile.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", function () {
          navMobile.classList.remove("is-open");
          navToggle.setAttribute("aria-expanded", "false");
        });
      });
    }
    if (!window.__eauScrollBound) {
      window.__eauScrollBound = true;
      window.addEventListener(
        "scroll",
        function () {
          const h = document.querySelector(".site-header");
          if (h) h.classList.toggle("is-scrolled", window.scrollY > 24);
        },
        { passive: true }
      );
    }
  }

  function animateStats() {
    const nums = document.querySelectorAll("[data-count]");
    const io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const target = parseInt(el.getAttribute("data-count"), 10);
          const dur = 1600;
          const start = performance.now();
          function frame(now) {
            const p = Math.min(1, (now - start) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.round(target * eased).toLocaleString();
            if (p < 1) requestAnimationFrame(frame);
          }
          requestAnimationFrame(frame);
          io.unobserve(el);
        });
      },
      { threshold: 0.4 }
    );
    nums.forEach(function (n) {
      io.observe(n);
    });
  }

  function revealOnScroll() {
    const els = document.querySelectorAll(".reveal");
    if (!els.length) return;
    const io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) e.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach(function (el) {
      io.observe(el);
    });
  }

  /** Simple static event markers for current month display */
  function renderCalendarRoot(root) {
    const lang = getLang();
    const titleEl = root.querySelector("[data-cal-title]");
    const gridEl = root.querySelector("[data-cal-grid]");
    const listEl = root.querySelector("[data-cal-events]");
    if (!gridEl) return;

    const now = new Date();
    const y = now.getFullYear();
    const m = now.getMonth();
    const first = new Date(y, m, 1);
    const last = new Date(y, m + 1, 0);
    const startPad = (first.getDay() + 6) % 7;
    const daysInMonth = last.getDate();
    const today = now.getDate();

    const monthNames =
      lang === "so"
        ? ["Janaayo", "Febraayo", "Marso", "Abriil", "Maajo", "Juun", "Luuliyo", "Agoosto", "Sebteembar", "Oktoobar", "Nofeembar", "Diseembar"]
        : ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    if (titleEl) titleEl.textContent = monthNames[m] + " " + y;

    const eventDays = { 5: true, 12: true, 18: true, 24: true };
    const events = {
      5: lang === "so" ? "Shirka guddiga ardayda" : "Student council assembly",
      12: lang === "so" ? "Bandhig cilmi-baarista" : "Research showcase",
      18: lang === "so" ? "Maalinta iskaa wax u qabsiga" : "Volunteer day",
      24: lang === "so" ? "Kulan la leh maamulka" : "Town hall with administration",
    };

    const dow = lang === "so" ? ["Isn", "Tld", "Arb", "Khd", "Jim", "Axd", "Sbt"] : ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    let html = "";
    dow.forEach(function (d) {
      html += '<div class="cal-dow">' + d + "</div>";
    });
    for (let i = 0; i < startPad; i++) {
      html += '<div class="cal-cell muted">·</div>';
    }
    for (let d = 1; d <= daysInMonth; d++) {
      const has = eventDays[d];
      const isToday = d === today;
      let cls = "cal-cell";
      if (has) cls += " has-event";
      if (isToday) cls += " today";
      html += '<div class="' + cls + '" title="' + (has ? events[d] : "") + '">' + d + "</div>";
    }
    gridEl.innerHTML = html;

    if (listEl) {
      let lh = "<ul style='margin:0;padding-left:1.1rem'>";
      Object.keys(events).forEach(function (k) {
        lh += "<li><strong>" + k + " " + monthNames[m].slice(0, 3) + ":</strong> " + events[k] + "</li>";
      });
      lh += "</ul>";
      listEl.innerHTML = lh;
    }
  }

  function initCalendar() {
    document.querySelectorAll("[data-event-calendar]").forEach(renderCalendarRoot);
  }

  function handleForms() {
    document.querySelectorAll("form[data-demo-form]").forEach(function (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        alert(getLang() === "so" ? "Waad ku mahadsan tahay! (Tusaale demo ah.)" : "Thank you! (Demo form — not connected to a server.)");
      });
    });
  }

  function init() {
    const page = document.body.getAttribute("data-page") || "home";
    document.documentElement.setAttribute("data-theme", getTheme() === "dark" ? "dark" : "light");
    injectShell(page);
    revealOnScroll();
    if (page === "home") animateStats();
    initCalendar();
    handleForms();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
