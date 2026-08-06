/**
 * Scroll-triggered micro-interactions: fade-up reveal for .reveal elements,
 * and a count-up animation for the stats numbers. Both run once per element
 * (IntersectionObserver unobserves after triggering) and are skipped
 * entirely for users who prefer reduced motion.
 */
(function () {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  function animateCount(el) {
    const target = Number(el.getAttribute("data-count-to")) || 0;
    const suffix = el.getAttribute("data-suffix") || "";
    if (prefersReducedMotion) {
      el.textContent = `${target.toLocaleString("id-ID")}${suffix}`;
      return;
    }

    const duration = 1200;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(target * eased);
      el.textContent = `${value.toLocaleString("id-ID")}${suffix}`;
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }

  function setup() {
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
      document.querySelectorAll("[data-count-to]").forEach(animateCount);
      return;
    }

    const revealObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

    const countObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          animateCount(entry.target);
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.5 }
    );
    document.querySelectorAll("[data-count-to]").forEach((el) => countObserver.observe(el));
  }

  document.addEventListener("site:rendered", setup);
})();
