/* ============================================================
   Soha — Marriage Biodata · script.js
   ------------------------------------------------------------
   ✎ EDIT ONLY THE `BIODATA` OBJECT BELOW.
   Any value starting with "Add " is treated as a placeholder
   (shown in italics with a dashed underline) until you replace it.
   ============================================================ */

const BIODATA = {
  name: "Jannatul Ferdaues",
  initial: "JF",
  photo: "",                 // e.g. "photo.jpg" — leave empty to show the initial
  invocation: "",            // optional opening line / dua / blessing (leave empty to hide)
  roles: [
    "Data Science & AI Student",
    "Machine Learning Builder",
    "Aspiring Data Analyst",
    "Data Analyst",
  ],

  stats: [
    { to: 4, label: "Featured projects" },
    { to: 2026, label: "Graduating", plain: true },
    { to: 2027, label: "Career start", plain: true },
  ],

  about: {
    lead: "Curious by nature, driven by data.",
    paragraphs: [
      "I'm a final-year student focused on data science and AI, based in Bangladesh. I love turning messy problems into working things — from machine learning models and NLP tools to full-stack web apps.",
      "Outside coursework, I build a portfolio through Kaggle competitions, academic work, and independent projects. I'm aiming to step into the IT industry in 2027 as a data analyst.",
      
    ],
    quote: "Add a line that sums you up — a favourite saying or personal motto.",
  },

  details: [
    ["Full Name", "Jannatul Ferdaues"],
    ["Date of Birth", "13.12.2002"],
    ["Age", "24"],
    ["Height", "5.1"],
    ["Eye color", "Brownish black"],
    ["Hair color", "Reddish black (currently Black)"],
    ["Weight", "68 kg"],
    ["Marital Status", "Single"],
    ["Religion", "Islam"],
    ["Hometown", "Jessore"],
    ["Current Location", "Dhaka, Bangladesh"],
    ["Languages", "Bangla, English, Hindi, Japanese"],
    ["Dress Preference", "Western"],
     
  ],

  family: [
    ["Father", "Mofizur Rahman & Works abroad"],
    ["Mother", "Mafahuza Akter & Housewife"],
    ["Siblings", "No Siblings"],
    ["Family Type", "Nuclear"],
    ["Family Values", "I'll prioritize my family more than anything."],
  ],


  education: [
    {
      when: "Expected 2027",
      title: "Final-year Undergraduate",
      text: "Focused on data science and AI. Add your degree, department, and university.",
    },
    {
      when: "Ongoing",
      title: "Portfolio & Competitions",
      text: "Kaggle competitions, academic projects, and independent development across ML, NLP, deep learning, and full-stack web.",
    },
    {
      when: "2027 · Goal",
      title: "Data Analyst in the IT Industry",
      text: "Looking to begin a career turning data into decisions.",
    },
  ],

  skills: [
    { group: "Data & AI", items: ["Machine Learning", "Deep Learning", "NLP", "Explainable AI", "Computer Vision"] },
    { group: "Build", items: ["Python", "Flask", "TensorFlow / Keras", "HTML · CSS · JavaScript", "Full-Stack Web"] },
    { group: "Practice", items: ["Kaggle", "Google Colab", "Hugging Face Spaces", "Data Storytelling"] },
  ],

  projects: [
    {
      title: "Global HDI × Explainable AI",
      tag: "Final Year Project",
      text: "An international platform presenting Human Development Index data with explainable AI, so the 'why' behind the numbers is visible.",
      stack: ["Data Science", "XAI", "Web"],
    },
    {
      title: "HireMind AI",
      tag: "Deployed on Hugging Face",
      text: "An AI-powered ATS resume checker that scores resumes against job requirements.",
      stack: ["Flask", "TensorFlow", "Keras"],
    },
    {
      title: "Candy",
      tag: "Full-Stack Web App",
      text: "An AI voice assistant web app with a polished frontend, Flask backend, authentication and saved chat history.",
      stack: ["JavaScript", "Flask", "Auth"],
    },
    {
      title: "CropLens",
      tag: "Deep Learning",
      text: "A deep learning image-classification project built and trained in Google Colab.",
      stack: ["Deep Learning", "Colab", "Vision"],
    },
  ],
  hfLink: "https://www.jannatulferdaues.site/home",

  interests: ["Watching Anime", "Reading Manhwa", "Watching K-drama", "Kaggle Competitions", "Building Web Apps", "Machine Learning", "Learning New Tools"],

  contact: {
    note: "For proposals, please reach out to my guardian first.",
    rows: [
      ["Guardian", "Mahafuza Akter"],
      ["Phone / WhatsApp", "01710236060"],
      ["Email", "kalpona@gmail.com"],
    ],
    extraLink: { label: "My projects on Github ↗", href: "https://github.com/jannatul-fredaues" },
  },

  footer: "Made with care, a little code, and a lot of hope.",
};

/* ============================================================
   Helpers
   ============================================================ */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const isPlaceholder = (v) => typeof v === "string" && v.trim().startsWith("Add");
const val = (v) => (isPlaceholder(v) ? `<span class="todo">${v}</span>` : v);
let hasPlaceholders = false;
const markTodo = (v) => { if (isPlaceholder(v)) hasPlaceholders = true; return val(v); };

/* ============================================================
   Build page from data
   ============================================================ */
const SECTIONS = [
  { id: "about", label: "About" },
  { id: "details", label: "Details" },
  { id: "journey", label: "Journey" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "family", label: "Family" },
  { id: "contact", label: "Contact" },
];

const head = (kicker, title) => `
  <div class="section-head reveal"><div class="kicker">${kicker}</div><h2>${title}</h2><span class="bar"></span></div>`;

function build() {
  const B = BIODATA;

  // Hero
  document.title = `${B.name} — Marriage Biodata`;
  $("#loaderMono").textContent = B.initial;
  $("#navLogo").textContent = B.initial;
  $("#invocation").textContent = B.invocation;
  const core = $("#portraitCore");
  if (B.photo) { core.style.backgroundImage = `url("${B.photo}")`; core.textContent = ""; }
  else core.textContent = B.initial;

  const letters = [...B.name];
  $("#heroName").innerHTML = letters
    .map((c, i) => `<span class="ch" style="--n:${letters.length};--p:${(i / Math.max(letters.length - 1, 1)) * 100}%;animation-delay:${1000 + i * 90}ms,${2200 + i * 200}ms">${c === " " ? "&nbsp;" : c}</span>`)
    .join("");

  $("#stats").innerHTML = B.stats
    .map((s) => `<div class="stat"><b class="count" data-to="${s.to}" data-plain="${!!s.plain}">0</b><span>${s.label}</span></div>`)
    .join("");

  $("#navLinks").innerHTML = SECTIONS.map((s) => `<a href="#${s.id}">${s.label}</a>`).join("");
  $("#footerText").textContent = B.footer;

  // Sections
  const about = `
  <section class="section" id="about"><div class="wrap">
    ${head("Hello", "A little about me")}
    <div class="about-grid">
      <div class="card about-text reveal left">
        <p class="lead">${B.about.lead}</p>
        ${B.about.paragraphs.map((p) => `<p>${markTodo(p)}</p>`).join("")}
      </div>
      <div class="card quote tilt reveal right"><p>${markTodo(B.about.quote)}</p></div>
    </div>
  </div></section>`;

  const details = `
  <section class="section" id="details"><div class="wrap">
    ${head("The basics", "Personal details")}
    <div class="details-grid">
      ${B.details.map(([k, v], i) => `<div class="detail reveal zoom" style="--d:${i * 70}ms"><small>${k}</small><strong>${markTodo(v)}</strong></div>`).join("")}
    </div>
  </div></section>`;

  const journey = `
  <section class="section" id="journey"><div class="wrap">
    ${head("Education & career", "My journey")}
    <div class="timeline" id="timeline"><div class="fill" id="tlFill"></div>
      ${B.education.map((e, i) => `
        <div class="t-item reveal" style="--d:${i * 100}ms"><div class="card">
          <div class="when">${e.when}</div><h3>${e.title}</h3><p>${markTodo(e.text)}</p>
        </div></div>`).join("")}
    </div>
  </div></section>`;

  const skills = `
  <section class="section" id="skills"><div class="wrap">
    ${head("What I work with", "Skills & tools")}
    <div class="skill-groups">
      ${B.skills.map((g, gi) => `
        <div class="card skill-group tilt reveal" style="--d:${gi * 120}ms">
          <h3>${g.group}</h3>
          <div class="chips">${g.items.map((it, i) => `<span class="chip" style="--fd:${(i * 0.4).toFixed(1)}s;--i:${i}">${it}</span>`).join("")}</div>
        </div>`).join("")}
    </div>
  </div></section>`;

  const projects = `
  <section class="section" id="projects"><div class="wrap">
    ${head("Selected work", "Things I've built")}
    <div class="project-grid">
      ${B.projects.map((p, i) => `
        <article class="card project tilt reveal" style="--d:${i * 110}ms">
          <div class="num">0${i + 1}</div>
          <span class="tag">${p.tag}</span>
          <h3>${p.title}</h3>
          <p>${p.text}</p>
          <div class="stack">${p.stack.map((s) => `<span>${s}</span>`).join("")}</div>
        </article>`).join("")}
    </div>
    <p class="reveal" style="text-align:center;margin-top:30px"><a class="btn ghost small" href="${B.hfLink}" target="_blank" rel="noopener">See more on Hugging Face ↗</a></p>
  </div></section>`;

  const family = `
  <section class="section" id="family"><div class="wrap">
    ${head("Where I come from", "Family & preferences")}
    <div class="two-col">
      <div class="card reveal left"><h3>Family</h3>
        <ul class="kv">${B.family.map(([k, v], i) => `<li class="reveal" style="--d:${i * 80}ms"><span>${k}</span><b>${markTodo(v)}</b></li>`).join("")}</ul>
      </div>
      <div class="card reveal right"><h3>Partner preferences</h3>
        <ul class="ticks">${B.preferences.map((p, i) => `<li class="reveal" style="--d:${i * 100}ms">${markTodo(p)}</li>`).join("")}</ul>
      </div>
    </div>
    <div class="marquee reveal"><div class="marquee-track">
      ${[...B.interests, ...B.interests].map((i) => `<span>${markTodo(i)}</span>`).join("")}
    </div></div>
  </div></section>`;

  const c = B.contact;
  const contact = `
  <section class="section" id="contact"><div class="wrap">
    ${head("Let's connect", "Get in touch")}
    <div class="card contact reveal zoom">
      <p class="note">${c.note}</p>
      <div class="contact-list">
        ${c.rows.map(([k, v], i) => `
          <div class="contact-row reveal" style="--d:${i * 120}ms"><div><small>${k}</small><span>${markTodo(v)}</span></div>
          ${isPlaceholder(v) ? "" : `<button class="copy" data-copy="${v}">Copy</button>`}</div>`).join("")}
      </div>
      <a class="btn primary" href="${c.extraLink.href}" target="_blank" rel="noopener">${c.extraLink.label}</a>
    </div>
  </div></section>`;

  $("#sections").innerHTML = about + details + journey + skills + projects + family + contact;
}

/* ============================================================
   Behaviours
   ============================================================ */
function toast(msg, ms = 4200) {
  let t = $(".toast");
  if (!t) { t = document.createElement("div"); t.className = "toast"; document.body.appendChild(t); }
  t.textContent = msg;
  requestAnimationFrame(() => t.classList.add("show"));
  clearTimeout(toast._t);
  toast._t = setTimeout(() => t.classList.remove("show"), ms);
}

function setupTheme() {
  let saved = null;
  try { saved = localStorage.getItem("biodata-theme"); } catch (e) {}
  const dark = saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
  document.documentElement.dataset.theme = dark ? "dark" : "light";
  $("#themeBtn").addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("biodata-theme", next); } catch (e) {}
  });
}

function setupTyped() {
  const el = $("#typed"), roles = BIODATA.roles;
  if (reduced) { el.textContent = roles[0]; return; }
  let r = 0, i = 0, del = false;
  (function tick() {
    const word = roles[r];
    el.textContent = word.slice(0, i);
    if (!del && i === word.length) { del = true; return setTimeout(tick, 1600); }
    if (del && i === 0) { del = false; r = (r + 1) % roles.length; }
    i += del ? -1 : 1;
    setTimeout(tick, del ? 32 : 70);
  })();
}

function countUp(el) {
  const to = +el.dataset.to, plain = el.dataset.plain === "true";
  if (reduced) { el.textContent = to; return; }
  const dur = 1500, t0 = performance.now();
  (function step(now) {
    const p = Math.min((now - t0) / dur, 1), e = 1 - Math.pow(1 - p, 3);
    el.textContent = plain ? Math.round(to - (to - Math.max(to - 30, 0)) * (1 - e)) : Math.round(to * e);
    if (p < 1) requestAnimationFrame(step); else el.textContent = to;
  })(t0);
}

function setupReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      en.target.classList.add("in");
      io.unobserve(en.target);
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -6% 0px" });
  $$(".reveal").forEach((el) => io.observe(el));

  const cio = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { countUp(en.target); cio.unobserve(en.target); } });
  }, { threshold: 0.6 });
  $$(".count").forEach((el) => cio.observe(el));
}

function setupScroll() {
  const bar = $("#progress"), nav = $("#nav"), fill = $("#tlFill"), tl = $("#timeline");
  const links = $$("#navLinks a");
  const secs = SECTIONS.map((s) => $("#" + s.id));
  const portrait = $("#portrait");
  let ticking = false;

  function update() {
    const y = window.scrollY, h = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = `scaleX(${h > 0 ? y / h : 0})`;
    nav.classList.toggle("scrolled", y > 30);

    // parallax portrait
    if (!reduced && y < innerHeight) portrait.style.transform = `translateY(${y * 0.12}px)`;

    // active nav link
    let cur = "";
    secs.forEach((s) => { if (s && s.getBoundingClientRect().top < innerHeight * 0.4) cur = s.id; });
    links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + cur));

    // timeline fill
    if (tl && fill) {
      const r = tl.getBoundingClientRect();
      const p = Math.min(Math.max((innerHeight * 0.6 - r.top) / r.height, 0), 1);
      fill.style.height = p * 100 + "%";
    }
    ticking = false;
  }
  addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  addEventListener("resize", update);
  update();
}

function setupTilt() {
  if (reduced || window.matchMedia("(hover: none)").matches) return;
  $$(".tilt").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transition = "transform 0.08s linear";
      card.style.transform = `perspective(800px) rotateX(${-y * 8}deg) rotateY(${x * 10}deg) translateY(-4px)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transition = "transform 0.6s cubic-bezier(.22,1,.36,1)";
      card.style.transform = "";
    });
  });
}

function setupCursor() {
  const g = $("#cursorGlow");
  addEventListener("mousemove", (e) => {
    g.classList.add("on");
    g.style.left = e.clientX + "px";
    g.style.top = e.clientY + "px";
  }, { passive: true });
  document.addEventListener("mouseleave", () => g.classList.remove("on"));
}

function setupMenu() {
  const burger = $("#burger"), links = $("#navLinks");
  burger.addEventListener("click", () => links.classList.toggle("open"));
  links.addEventListener("click", (e) => { if (e.target.tagName === "A") links.classList.remove("open"); });
  $("#printBtn").addEventListener("click", () => window.print());
  $("#topBtn").addEventListener("click", () => scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" }));
  document.addEventListener("click", (e) => {
    const b = e.target.closest(".copy");
    if (!b) return;
    navigator.clipboard?.writeText(b.dataset.copy).then(() => {
      const old = b.textContent; b.textContent = "Copied ✓";
      setTimeout(() => (b.textContent = old), 1500);
    });
  });
}

/* ---------- Per-section ambient motion ---------- */
function setupSectionFX() {
  $$(".section").forEach((s, i) => {
    const orbs = document.createElement("div");
    orbs.className = "fx";
    orbs.innerHTML = `<i class="o1"></i><i class="o2"></i><i class="s1">✦</i><i class="s2">✦</i><i class="s3">✦</i>`;
    s.prepend(orbs);
    s.style.setProperty("--sd", `${-i * 3}s`);
  });
  if (reduced) return;
  // gentle parallax for the orbs while scrolling
  const fx = $$(".section .fx");
  let t = false;
  addEventListener("scroll", () => {
    if (t) return; t = true;
    requestAnimationFrame(() => {
      fx.forEach((el) => {
        const r = el.parentElement.getBoundingClientRect();
        if (r.bottom < 0 || r.top > innerHeight) return;
        el.style.setProperty("--py", ((r.top + r.height / 2 - innerHeight / 2) * -0.08).toFixed(1) + "px");
      });
      t = false;
    });
  }, { passive: true });
}

/* ---------- Falling petals canvas ---------- */
function setupPetals() {
  if (reduced) return;
  const cv = $("#petals"), ctx = cv.getContext("2d");
  let W, H, petals = [], running = true, mouse = { x: -999, y: -999 };

  function resize() {
    const dpr = Math.min(devicePixelRatio || 1, 2);
    W = cv.clientWidth; H = cv.clientHeight;
    cv.width = W * dpr; cv.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  const rnd = (a, b) => a + Math.random() * (b - a);
  function make(initial) {
    return {
      x: rnd(0, W), y: initial ? rnd(-H, H) : rnd(-80, -10),
      s: rnd(7, 15), vy: rnd(0.35, 1.0), sway: rnd(0.4, 1.4), ph: rnd(0, 6.28),
      rot: rnd(0, 6.28), vr: rnd(-0.02, 0.02), a: rnd(0.35, 0.8), gold: Math.random() < 0.25,
    };
  }
  function init() {
    resize();
    const n = Math.round(Math.min(46, Math.max(18, W / 32)));
    petals = Array.from({ length: n }, () => make(true));
  }
  function draw(p) {
    ctx.save();
    ctx.translate(p.x, p.y); ctx.rotate(p.rot); ctx.globalAlpha = p.a;
    const cs = getComputedStyle(document.documentElement);
    ctx.fillStyle = p.gold ? cs.getPropertyValue("--accent-2").trim() : cs.getPropertyValue("--accent").trim();
    ctx.beginPath();
    ctx.moveTo(0, -p.s);
    ctx.bezierCurveTo(p.s, -p.s * 0.6, p.s * 0.8, p.s * 0.8, 0, p.s);
    ctx.bezierCurveTo(-p.s * 0.8, p.s * 0.8, -p.s, -p.s * 0.6, 0, -p.s);
    ctx.fill();
    ctx.restore();
  }
  function frame(t) {
    if (running) {
      ctx.clearRect(0, 0, W, H);
      petals.forEach((p, i) => {
        p.y += p.vy; p.ph += 0.015;
        p.x += Math.sin(p.ph) * p.sway;
        p.rot += p.vr;
        const dx = p.x - mouse.x, dy = p.y - mouse.y, d = Math.hypot(dx, dy);
        if (d < 120) { p.x += (dx / d) * (120 - d) * 0.06; p.y += (dy / d) * (120 - d) * 0.06; }
        if (p.y > H + 30 || p.x < -60 || p.x > W + 60) petals[i] = make(false);
        draw(p);
      });
    }
    requestAnimationFrame(frame);
  }
  const hero = $("#home");
  hero.addEventListener("mousemove", (e) => {
    const r = cv.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
  });
  hero.addEventListener("mouseleave", () => (mouse = { x: -999, y: -999 }));
  new IntersectionObserver(([en]) => (running = en.isIntersecting)).observe(hero);
  addEventListener("resize", init);
  init(); requestAnimationFrame(frame);
}

/* ============================================================
   Boot
   ============================================================ */
build();
setupTheme();
setupTyped();
setupReveal();
setupScroll();
setupTilt();
setupCursor();
setupMenu();
setupSectionFX();
setupPetals();

window.addEventListener("load", () => {
  setTimeout(() => $("#loader").classList.add("done"), reduced ? 0 : 900);
  if (hasPlaceholders) setTimeout(() => toast("Italic fields are placeholders — edit them in script.js"), 2800);
});
