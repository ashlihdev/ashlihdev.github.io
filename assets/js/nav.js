/**
 * Header behavior: sticky background on scroll, mobile menu open/close,
 * active nav-link highlighting while scrolling through sections.
 */
(function () {
  function setup() {
    const header = document.querySelector(".site-header");
    const toggle = document.getElementById("nav-toggle");
    const mobileLinks = document.getElementById("nav-links");

    if (header) {
      const onScroll = () => {
        header.setAttribute("data-scrolled", window.scrollY > 8 ? "true" : "false");
      };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    if (toggle && mobileLinks) {
      const icon = window.ICONS || {};
      const close = () => {
        mobileLinks.setAttribute("data-open", "false");
        toggle.setAttribute("aria-expanded", "false");
        toggle.innerHTML = icon.menu || "";
      };
      const open = () => {
        mobileLinks.setAttribute("data-open", "true");
        toggle.setAttribute("aria-expanded", "true");
        toggle.innerHTML = icon.close || "";
      };

      toggle.addEventListener("click", () => {
        const isOpen = mobileLinks.getAttribute("data-open") === "true";
        isOpen ? close() : open();
      });

      mobileLinks.addEventListener("click", (e) => {
        if (e.target.closest("a")) close();
      });

      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") close();
      });
    }

    const sections = Array.from(document.querySelectorAll("main section[id]"));
    const navAnchors = Array.from(document.querySelectorAll(".nav-links a"));
    if (sections.length && navAnchors.length && "IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            navAnchors.forEach((a) => {
              const match = a.getAttribute("href") === `#${entry.target.id}`;
              if (match) a.setAttribute("aria-current", "true");
              else a.removeAttribute("aria-current");
            });
          });
        },
        { rootMargin: "-45% 0px -50% 0px" }
      );
      sections.forEach((section) => observer.observe(section));
    }
  }

  // Nav links are injected by render.js, which always fires this event
  // once the DOM is ready and populated — bind exactly once, here.
  document.addEventListener("site:rendered", setup);
})();
