# Ashlih Dev — Portfolio

Static portfolio site for **ASHLIH DEV** (Full Stack Product Engineer), built as
plain HTML/CSS/JavaScript with no build step, deployed directly to GitHub
Pages.

## Quick start

Just open `index.html` in a browser, or serve the folder with any static
server (e.g. `npx serve .`). There is nothing to install and nothing to
build — every file is served as-is.

## Editing content

Almost everything on the page — name, tagline, contact links, services,
projects, tech stack, process steps, "why work with me" cards, testimonials
and FAQ — is data, not markup. It all lives in one file:

```
assets/js/config.js
```

Edit the `window.SITE` object there and the page updates automatically via
`assets/js/render.js`. In particular:

- **Contact info** (email, WhatsApp, GitHub, LinkedIn) and **tagline**: edit
  `SITE.contact` and `SITE.tagline` — these two spots also update the
  header/footer via `data-bind` / `data-bind-href` attributes in `index.html`.
- **Add a new project**: push a new object into `SITE.projects`. The zig-zag
  layout, feature badges, role/tech/challenge table and impact line are all
  generated from that object — no HTML editing required. Drop the screenshot
  into `assets/projects/` and point `visual.image` (and `visual.phoneImage`
  for a paired web+app case study) at it.
- **Add a service, FAQ, testimonial, stack group, process step, or "why me"
  card**: same idea — push an object into the matching array in `config.js`.

## Folder structure

```
/
├── index.html                # single page, all sections, SEO/meta head
├── assets/
│   ├── css/
│   │   ├── tokens.css         # design tokens: color, type, spacing, radius, shadow, motion
│   │   ├── base.css           # reset + base element styles
│   │   ├── layout.css         # header/nav, container, footer, section rhythm
│   │   ├── components.css     # buttons, cards, badges, mockup frames, accordion, reveal utility
│   │   └── sections.css       # per-section layout (hero, projects zig-zag, process timeline, ...)
│   ├── js/
│   │   ├── config.js          # ← content lives here (see above)
│   │   ├── icons.js           # inline SVG icon set (see "Icons" below)
│   │   ├── render.js          # builds sections from config.js, binds data-bind fields
│   │   ├── theme.js           # dark/light toggle (persists to localStorage)
│   │   ├── nav.js             # sticky header, mobile menu, active-link highlighting
│   │   └── observer.js        # scroll-reveal + stat count-up animation
│   ├── images/                # brand/institution logos (assets/images/brands-logo)
│   └── projects/              # project screenshots — drop new ones here
├── favicon/                   # favicon.ico + 16/32px PNGs
├── _legacy/                   # previous site version, kept for reference (not linked from the new site)
├── robots.txt
├── sitemap.xml
├── manifest.webmanifest
└── browserconfig.xml
```

## Key design decisions

**No build step, no framework, no Tailwind.** The brief asked for something
light and easy to maintain that deploys straight to GitHub Pages. Hand-written
CSS with custom-property design tokens gets a fully custom, on-brand look
without a Node toolchain, a `node_modules` folder, or a build step that could
break silently. Five small CSS files (`tokens` → `base` → `layout` →
`components` → `sections`) keep things modular without needing a bundler.

**System-font stack instead of a downloaded Inter/Geist font.** The stack in
`tokens.css` (`-apple-system, "Segoe UI", "Inter", Roboto, ...`) renders
visually very close to Inter — Inter's metrics were deliberately designed to
match system UI fonts — while costing zero font requests and zero
render-blocking `@font-face`. That's a direct trade for the "Lighthouse 95+"
requirement. If a specific downloaded font is wanted later, self-host an
Inter or Geist variable `woff2`, add one `@font-face` block to `tokens.css`,
and update `--font-sans`.

**Icons are inline SVG (`assets/js/icons.js`), not an icon font or library.**
Each icon is a hand-drawn `<svg>` string using `stroke="currentColor"`, so it
automatically inherits the right color in both light and dark themes with no
extra CSS. Inlining also means zero additional HTTP requests versus loading
icon files individually.

**Hero visual is CSS/SVG, not a stock illustration.** The previous site used
a generic purple 3D clip-art image (`_legacy/images/mainhero.webp`) that read
as a generic template rather than a senior engineer's portfolio. The new hero
uses a hand-built abstract browser + phone mockup (`.mockup-browser` /
`.mockup-phone` in `components.css`) — on-brand, in the Linear/Stripe/Vercel
direction the brief asked for, and free.

**Project screenshots are real, mapped carefully.** `assets/projects/` holds
genuine screenshots from delivered work (Mahad Bimbingan Islam's LMS +
Android app, its payment/invoice dashboards, and a ranking/quiz dashboard
used for the Mahad Ibn Zubair case study). Two case studies (RS JIH
Purwokerto, FK UGM & RSUP Dr. Sardjito) don't have a real screenshot in the
repo yet, so they render a clearly-abstract placeholder mockup instead of a
fabricated screenshot — replace `visual.type: "placeholder"` with
`visual.image` in `config.js` once a real screenshot is available. Likewise,
"Trusted By" only shows a logo for institutions whose real logo file exists
in the repo (Mahad Bimbingan Islam, RS JIH Purwokerto); the rest render as
plain text cards rather than risk showing the wrong institution's mark.

**Testimonials are placeholders.** They're structured and rendered exactly
like real ones would be — swap the `quote`/`name`/`role` fields in
`SITE.testimonials` for real client quotes whenever they're available.

**No skill-bar percentages.** Per the brief, `SITE.stack` is grouped plain
lists (Backend/Frontend/Mobile/Cloud/AI), not progress bars — those read as
junior/template-y and don't actually convey anything meaningful.

**Animation is intentionally minimal.** A single `.reveal` fade-up class
(`observer.js` + `IntersectionObserver`) and a one-time stat count-up are the
only scroll animations; everything else is a 150–300ms hover/transition.
`prefers-reduced-motion` disables both.

**`_legacy/` instead of deleting.** The previous Tailwind-based site
(`webinar/`, old `input.css`/`output.css`, old `script.js`/`theme.js`, unused
`images/`) was moved into `_legacy/` rather than deleted, so nothing is lost
and it's easy to recover a file from the old version if needed. It isn't
linked from the new site and isn't part of the deploy surface conceptually —
delete the folder once you're confident you no longer need it.

## Known gaps to fill in later

- `favicon/` only has 16×16/32×32 PNGs (from the previous site). For full iOS
  home-screen / Android PWA support, generate proper 180×180
  (`apple-touch-icon`) and 192×192 / 512×512 icons from a high-resolution
  source logo and update `index.html` + `manifest.webmanifest` accordingly —
  they're currently just pointed at the 32×32 PNG as a non-blurry-but-small
  fallback.
- Real screenshots for the RS JIH Purwokerto and FK UGM/RSUP Dr. Sardjito
  case studies (see `SITE.projects` in `config.js`).
- Real testimonials to replace the placeholders in `SITE.testimonials`.

## Performance & SEO checklist

- Lighthouse: run against a served copy (`npx serve .` or GitHub Pages
  itself) and check Performance/SEO/Accessibility/Best Practices.
- All images use `loading="lazy"` and explicit `width`/`height` to avoid
  layout shift.
- `robots.txt`, `sitemap.xml`, canonical URL, Open Graph, Twitter Card, and
  `ProfessionalService` JSON-LD are all in `index.html` / root — update the
  hardcoded contact values in the JSON-LD `<script>` block if contact info in
  `config.js` ever changes (structured data is static markup for crawler
  reliability, so it isn't generated from `config.js` at runtime).
