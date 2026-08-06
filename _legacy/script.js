var doc = document.querySelector("html");

if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  // dark mode

  doc.classList.add("dark");
} else {
  doc.classList.add("light");
}
