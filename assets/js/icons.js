/**
 * Hand-drawn line-icon set, inlined as SVG strings.
 *
 * Icons are inlined (not loaded from assets/icons/*.svg) so they cost zero
 * extra HTTP requests and can use stroke="currentColor" to inherit the
 * surrounding element's color token automatically in both themes. This is
 * the canonical source for every icon glyph used on the site — edit a
 * path here rather than duplicating markup elsewhere.
 */
window.ICONS = (function () {
  const line = (inner) =>
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${inner}</svg>`;

  const solid = (inner) =>
    `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none" aria-hidden="true" focusable="false">${inner}</svg>`;

  return {
    code: line(
      '<path d="M8 6 3 12l5 6"/><path d="M16 6l5 6-5 6"/>'
    ),
    mobile: line(
      '<rect x="7" y="2" width="10" height="20" rx="2"/><line x1="11" y1="18" x2="13" y2="18"/>'
    ),
    graduation: line(
      '<path d="M12 3 2 9l10 5 10-5-10-5Z"/><path d="M6 10.5V15c0 1.66 2.69 3 6 3s6-1.34 6-3v-4.5"/>'
    ),
    hospital: line(
      '<rect x="4" y="3" width="16" height="18" rx="1.5"/><path d="M12 8v8M8 12h8"/>'
    ),
    book: line(
      '<path d="M4 5.5C4 4.67 4.67 4 5.5 4H12v16H5.5C4.67 20 4 19.33 4 18.5v-13Z"/><path d="M20 5.5c0-.83-.67-1.5-1.5-1.5H12v16h6.5c.83 0 1.5-.67 1.5-1.5v-13Z"/>'
    ),
    sparkles: line(
      '<path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3Z"/><path d="M19 15l.6 1.8 1.8.6-1.8.6-.6 1.8-.6-1.8-1.8-.6 1.8-.6.6-1.8Z"/>'
    ),
    check: line(
      '<circle cx="12" cy="12" r="9"/><path d="M8 12.5 10.5 15 16 9.5"/>'
    ),
    layers: line(
      '<path d="M12 3 3 8l9 5 9-5-9-5Z"/><path d="M3 12.5l9 5 9-5"/>'
    ),
    chat: line(
      '<path d="M4 5.5C4 4.67 4.67 4 5.5 4h13c.83 0 1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5H9l-4 4v-4H5.5C4.67 16 4 15.33 4 14.5v-9Z"/>'
    ),
    handshake: line(
      '<circle cx="9" cy="12" r="6"/><circle cx="15" cy="12" r="6"/>'
    ),
    code2: line(
      '<path d="M9 4c-1.4 0-2 .7-2 2v2.6c0 1-.5 1.4-1.5 1.4v2c1 0 1.5.4 1.5 1.4V16c0 1.3.6 2 2 2"/><path d="M15 4c1.4 0 2 .7 2 2v2.6c0 1 .5 1.4 1.5 1.4v2c-1 0-1.5.4-1.5 1.4V16c0 1.3-.6 2-2 2"/>'
    ),
    target: line(
      '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="0.8" fill="currentColor"/>'
    ),
    users: line(
      '<circle cx="9" cy="8" r="3.2"/><path d="M2.8 20c0-3.4 2.8-6 6.2-6s6.2 2.6 6.2 6"/><circle cx="17" cy="9" r="2.4"/><path d="M15.5 14.2c2.6.4 4.5 2.4 4.5 5.3"/>'
    ),
    briefcase: line(
      '<rect x="3" y="7" width="18" height="12" rx="2"/><path d="M8 7V5.5C8 4.67 8.67 4 9.5 4h5c.83 0 1.5.67 1.5 1.5V7"/><line x1="3" y1="12.5" x2="21" y2="12.5"/>'
    ),
    clock: line(
      '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>'
    ),
    mail: line(
      '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M4 7l8 6 8-6"/>'
    ),
    sun: line(
      '<circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="22"/><line x1="2" y1="12" x2="4" y2="12"/><line x1="20" y1="12" x2="22" y2="12"/><line x1="4.2" y1="4.2" x2="5.6" y2="5.6"/><line x1="18.4" y1="18.4" x2="19.8" y2="19.8"/><line x1="18.4" y1="5.6" x2="19.8" y2="4.2"/><line x1="4.2" y1="19.8" x2="5.6" y2="18.4"/>'
    ),
    moon: line(
      '<path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z"/>'
    ),
    menu: line(
      '<line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/>'
    ),
    close: line('<path d="M6 6l12 12M18 6 6 18"/>'),
    plus: line('<path d="M12 5v14M5 12h14"/>'),
    arrowRight: line('<path d="M5 12h14M13 6l6 6-6 6"/>'),
    github: solid(
      '<path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.46-1.2-1.11-1.53-1.11-1.53-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.55 2.34 1.1 2.91.84.09-.66.35-1.1.63-1.35-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.32.1-2.75 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.43.2 2.49.1 2.75.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.48A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z"/>'
    ),
    linkedin: solid(
      '<circle cx="7.2" cy="8.3" r="1.6"/><rect x="6" y="11" width="2.4" height="7.2"/><path d="M11.6 18.2V11h2.3v1.1c.6-.8 1.5-1.3 2.6-1.3 2 0 3.3 1.3 3.3 3.8v3.6h-2.4v-3.3c0-1.1-.4-1.8-1.4-1.8-.8 0-1.3.5-1.5 1-.1.2-.1.5-.1.8v3.3h-2.8Z"/>'
    ),
    whatsapp: solid(
      '<path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3Z"/><path fill="var(--color-bg-elevated,#fff)" d="M9 8.4c0-.5.4-.9.9-.9h.6c.3 0 .5.2.6.4l.6 1.5c.1.3 0 .6-.2.8l-.5.5c.5 1 1.3 1.8 2.3 2.3l.5-.5c.2-.2.5-.3.8-.2l1.5.6c.3.1.4.3.4.6v.6c0 .5-.4.9-.9.9-3.6 0-6.6-3-6.6-6.6Z"/>'
    ),
  };
})();
