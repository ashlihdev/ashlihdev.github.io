/**
 * Renders every repeatable section from window.SITE (config.js) into the
 * containers declared in index.html. Adding a new project/service/FAQ later
 * is a config.js edit only — no HTML duplication required.
 */
(function () {
  const SITE = window.SITE;
  const ICONS = window.ICONS;

  const escapeHtml = (str) =>
    String(str).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    }[c]));

  const waHref = (text) =>
    `https://wa.me/${SITE.contact.whatsappNumber}${
      text ? `?text=${encodeURIComponent(text)}` : ""
    }`;

  const mailHref = () => `mailto:${SITE.contact.email}`;

  function bindSimpleFields() {
    document.querySelectorAll("[data-bind]").forEach((el) => {
      const path = el.getAttribute("data-bind");
      const value = path.split(".").reduce((acc, key) => (acc ? acc[key] : undefined), SITE);
      if (value !== undefined) el.textContent = value;
    });

    document.querySelectorAll("[data-bind-href]").forEach((el) => {
      const kind = el.getAttribute("data-bind-href");
      const map = {
        email: mailHref(),
        whatsapp: waHref("Halo, saya ingin diskusi terkait proyek digital."),
        github: SITE.contact.github,
        linkedin: SITE.contact.linkedin,
      };
      if (map[kind]) el.setAttribute("href", map[kind]);
    });
  }

  function renderNav() {
    const nav = document.getElementById("nav-links");
    if (!nav) return;
    const linksHtml = SITE.nav
      .map((item) => `<a href="${item.href}">${escapeHtml(item.label)}</a>`)
      .join("");
    nav.innerHTML =
      linksHtml +
      `<a href="#contact" class="btn btn-primary btn-block">${escapeHtml(SITE.hero.secondaryCta.label)}</a>`;
  }

  function renderHeroMeta() {
    const el = document.getElementById("hero-meta");
    if (!el) return;
    el.innerHTML = SITE.hero.meta
      .map(
        (item) =>
          `<span class="hero-meta-item">${ICONS[item.icon] || ""}${escapeHtml(item.label)}</span>`
      )
      .join("");
  }

  function renderTrustedBy() {
    const el = document.getElementById("trusted-by-grid");
    if (!el) return;
    el.innerHTML = SITE.trustedBy.items
      .map((item) => {
        if (item.logo) {
          return `<div class="logo-tile reveal"><img src="${item.logo}" alt="${escapeHtml(item.name)}" loading="lazy" width="140" height="42"></div>`;
        }
        return `<div class="logo-tile reveal"><span class="logo-tile-text">${escapeHtml(item.name)}</span></div>`;
      })
      .join("");
  }

  function renderStats() {
    const el = document.getElementById("stats-grid");
    if (!el) return;
    el.innerHTML = SITE.stats
      .map(
        (stat) =>
          `<div class="stat-tile reveal">
            <div class="stat-number" data-count-to="${stat.value}" data-suffix="${stat.suffix}">0${stat.suffix}</div>
            <div class="stat-label">${escapeHtml(stat.label)}</div>
          </div>`
      )
      .join("");
  }

  function renderServices() {
    const el = document.getElementById("services-grid");
    if (!el) return;
    el.innerHTML = SITE.services
      .map(
        (service) => `
        <article class="card card-hover service-card reveal">
          <div class="icon-frame">${ICONS[service.icon] || ""}</div>
          <h3>${escapeHtml(service.title)}</h3>
          <p>${escapeHtml(service.description)}</p>
          <div class="service-tags">
            ${service.tags.map((tag) => `<span class="badge">${escapeHtml(tag)}</span>`).join("")}
          </div>
        </article>`
      )
      .join("");
  }

  function projectVisualHtml(project) {
    const v = project.visual;
    if (v.type === "placeholder") {
      return `
        <div class="mockup-browser">
          <div class="mockup-browser-bar">
            <span class="mockup-browser-dot"></span><span class="mockup-browser-dot"></span><span class="mockup-browser-dot"></span>
          </div>
          <div class="mockup-browser-body">
            <div class="mockup-placeholder" role="img" aria-label="${escapeHtml(v.placeholderLabel)}">
              <span class="badge">Preview coming soon</span>
              <div class="bar w-60"></div>
              <div class="bar w-40"></div>
              <div class="block"></div>
              <div class="bar w-80"></div>
            </div>
          </div>
        </div>`;
    }

    const browser = `
      <div class="mockup-browser">
        <div class="mockup-browser-bar">
          <span class="mockup-browser-dot"></span><span class="mockup-browser-dot"></span><span class="mockup-browser-dot"></span>
        </div>
        <div class="mockup-browser-body">
          <img src="${v.image}" alt="Screenshot ${escapeHtml(project.name)}" loading="lazy" width="960" height="600">
        </div>
      </div>`;

    if (v.type === "browser+phone" && v.phoneImage) {
      return `
        <div class="mockup-stage">
          ${browser}
          <div class="mockup-phone">
            <div class="mockup-phone-body">
              <img src="${v.phoneImage}" alt="Aplikasi mobile ${escapeHtml(project.name)}" loading="lazy" width="270" height="540">
            </div>
          </div>
        </div>`;
    }

    return browser;
  }

  function renderProjects() {
    const el = document.getElementById("projects-list");
    if (!el) return;
    el.innerHTML = SITE.projects
      .map((project, index) => {
        const details = (project.details || [])
          .map(
            (d) =>
              `<div class="mockup-browser"><div class="mockup-browser-body"><img src="${d.image}" alt="${escapeHtml(d.alt)}" loading="lazy" width="480" height="300"></div></div>`
          )
          .join("");

        return `
        <article class="project-row reveal ${index % 2 === 1 ? "reverse" : ""}">
          <div class="project-visual">${projectVisualHtml(project)}</div>
          <div class="project-copy">
            <span class="badge project-tag">${escapeHtml(project.tag)}</span>
            <h3>${escapeHtml(project.name)}</h3>
            <p>${escapeHtml(project.description)}</p>
            <div class="project-feature-list">
              ${project.features.map((f) => `<span class="badge">${escapeHtml(f)}</span>`).join("")}
            </div>
            <div class="project-detail-grid">
              <div class="project-detail"><dt>Role</dt><dd>${escapeHtml(project.role)}</dd></div>
              <div class="project-detail"><dt>Technology</dt><dd>${escapeHtml(project.tech)}</dd></div>
              <div class="project-detail"><dt>Challenge</dt><dd>${escapeHtml(project.challenge)}</dd></div>
            </div>
            <p><strong>Solution: </strong>${escapeHtml(project.solution)}</p>
            <div class="project-impact">
              <strong>${escapeHtml(project.impact.value)}</strong>
              <span>${escapeHtml(project.impact.label)}</span>
            </div>
            ${details ? `<div class="service-tags" style="margin-top:1.5rem;gap:1rem;">${details}</div>` : ""}
          </div>
        </article>`;
      })
      .join("");
  }

  function renderStack() {
    const el = document.getElementById("stack-grid");
    if (!el) return;
    el.innerHTML = SITE.stack
      .map(
        (group) => `
        <div class="card stack-group reveal">
          <h3>${escapeHtml(group.title)}</h3>
          <ul>${group.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
        </div>`
      )
      .join("");
  }

  function renderProcess() {
    const el = document.getElementById("process-track");
    if (!el) return;
    el.innerHTML = SITE.process
      .map(
        (step, i) => `
        <div class="process-step reveal">
          <div class="process-step-index">${i + 1}</div>
          <h3>${escapeHtml(step.title)}</h3>
          <p>${escapeHtml(step.description)}</p>
        </div>`
      )
      .join("");
  }

  function renderWhyMe() {
    const el = document.getElementById("why-grid");
    if (!el) return;
    el.innerHTML = SITE.whyMe
      .map(
        (item) => `
        <article class="card card-hover why-card reveal">
          <div class="icon-frame">${ICONS[item.icon] || ""}</div>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.description)}</p>
        </article>`
      )
      .join("");
  }

  function initials(name) {
    return name
      .split(" ")
      .map((w) => w[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();
  }

  function renderTestimonials() {
    const el = document.getElementById("testimonial-grid");
    if (!el) return;
    el.innerHTML = SITE.testimonials
      .map(
        (t) => `
        <figure class="card testimonial-card reveal">
          <blockquote class="testimonial-quote">&ldquo;${escapeHtml(t.quote)}&rdquo;</blockquote>
          <figcaption class="testimonial-person">
            <span class="testimonial-avatar" aria-hidden="true">${initials(t.name)}</span>
            <span><strong>${escapeHtml(t.name)}</strong><span>${escapeHtml(t.role)}</span></span>
          </figcaption>
        </figure>`
      )
      .join("");
  }

  function renderFaq() {
    const el = document.getElementById("faq-list");
    if (!el) return;
    el.innerHTML = SITE.faq
      .map(
        (item, i) => `
        <details class="accordion-item"${i === 0 ? " open" : ""}>
          <summary>
            <span>${escapeHtml(item.question)}</span>
            <span class="accordion-icon">${ICONS.plus}</span>
          </summary>
          <div class="accordion-panel">
            <p>${escapeHtml(item.answer)}</p>
          </div>
        </details>`
      )
      .join("");
  }

  function renderFooterSocial() {
    const el = document.getElementById("footer-social");
    if (!el) return;
    el.innerHTML = `
      <a class="icon-btn" href="${mailHref()}" aria-label="Email ${escapeHtml(SITE.name)}">${ICONS.mail}</a>
      <a class="icon-btn" href="${waHref("Halo, saya ingin diskusi terkait proyek digital.")}" target="_blank" rel="noopener" aria-label="WhatsApp ${escapeHtml(SITE.name)}">${ICONS.whatsapp}</a>
      <a class="icon-btn" href="${SITE.contact.github}" target="_blank" rel="noopener" aria-label="GitHub ${escapeHtml(SITE.name)}">${ICONS.github}</a>
      <a class="icon-btn" href="${SITE.contact.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn ${escapeHtml(SITE.name)}">${ICONS.linkedin}</a>
    `;
  }

  function renderFooterNav() {
    const el = document.getElementById("footer-nav");
    if (!el) return;
    el.innerHTML = SITE.nav
      .map((item) => `<a href="${item.href}">${escapeHtml(item.label)}</a>`)
      .join("");
  }

  function setYear() {
    const el = document.getElementById("current-year");
    if (el) el.textContent = new Date().getFullYear();
  }

  function setThemeIcons() {
    document.querySelectorAll("[data-theme-icon]").forEach((el) => {
      el.innerHTML = ICONS[el.getAttribute("data-theme-icon")] || "";
    });
    document.querySelectorAll("[data-icon]").forEach((el) => {
      el.innerHTML = ICONS[el.getAttribute("data-icon")] || "";
    });
  }

  function init() {
    bindSimpleFields();
    renderNav();
    renderHeroMeta();
    renderTrustedBy();
    renderStats();
    renderServices();
    renderProjects();
    renderStack();
    renderProcess();
    renderWhyMe();
    renderTestimonials();
    renderFaq();
    renderFooterSocial();
    renderFooterNav();
    setThemeIcons();
    setYear();
    document.dispatchEvent(new CustomEvent("site:rendered"));
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
