/**
 * Light/dark toggle. The initial theme is already applied by the tiny
 * inline script in <head> (before first paint, to avoid a flash of the
 * wrong theme) — this file only wires up the toggle button.
 */
(function () {
  const root = document.documentElement;

  function apply(theme) {
    root.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {
      /* storage unavailable (private mode) — theme just won't persist */
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("theme-toggle");
    if (!btn) return;
    btn.addEventListener("click", () => {
      const isDark = root.getAttribute("data-theme") === "dark";
      apply(isDark ? "light" : "dark");
    });
  });
})();
