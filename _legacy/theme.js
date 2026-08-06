const toggle = document.getElementById("themeToggle");
const root = document.documentElement;

/* Load saved theme */
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  root.setAttribute("data-theme", savedTheme);
} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {

/* Auto detect system */
  root.setAttribute("data-theme", "dark");
}

/* Toggle click */
toggle.addEventListener("click", () => {
  let current = root.getAttribute("data-theme");

  if (current === "dark") {
    root.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
    toggle.innerHTML = "🌙";
  } else {
    root.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    toggle.innerHTML = "☀️";
  }
});
