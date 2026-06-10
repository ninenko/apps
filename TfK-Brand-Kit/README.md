# Teach for Kyrgyzstan — Brand Kit
«Заманбап Мугалим» · TEACH FOR KYRGYZSTAN

Drop-in branding folder: logo, colors, fonts, CSS tokens and task-specific guides.
Copy the whole folder into any project; an AI agent (or a person) then has everything
needed to produce on-brand HTML, documents, slides, posters and social materials.

Based on the official 2023 brandbook (`source/brandbook-2023.pdf`) plus the 2025
evolution: **pale green `#99AF82` as the main brand surface** with the
**monochrome white/black logo** and yellow `#FFC607` square accents.

## Use in a Claude project

1. Copy `TfK-Brand-Kit/` into the project.
2. Tell Claude: *"Use the TfK-Brand-Kit in this folder for all branding."*
   (Or merge this folder's `CLAUDE.md` into the project's `CLAUDE.md`.)

`CLAUDE.md` is deliberately a **router**: core rules in ~20 lines, then a table sending
the agent to exactly one guide per task — so it never burns tokens reading the whole kit.

## Structure

```
TfK-Brand-Kit/
├── CLAUDE.md            ← agent router: core rules + which guide to read per task
├── README.md            ← this file (for humans)
├── tokens.css           ← CSS variables var(--tfk-*) + ready-made components
├── colors.json          ← machine-readable palette (hex + CMYK)
├── header-snippet.html  ← copy-paste page header
├── guides/
│   ├── web.md           ← HTML pages, web, email
│   ├── documents.md     ← Word/PDF, letters, diplomas, cards (brandbook specs)
│   ├── poster-social.md ← posters, slides, social tiles, badges, invitations
│   └── brand-core.md    ← full reference: logo geometry, palette, grid, photo rules
├── fonts/               ← Q3 DIN Condensed + Q3 DIN (ttf) + fonts.css (@font-face)
├── logo/
│   ├── svg/             ← lockup & emblem in white / black (+ currentColor versions)
│   ├── png/             ← transparent hi-res (Word/PPT/PDF) + favicon-512
│   └── favicon.svg      ← white emblem on green square
└── source/              ← masters: brandbook PDF, vector logo (PDF/EPS), legacy files
```

## The brand in five lines

1. **Logo**: monochrome only — white on green/dark/photo, black on white/light. lockup = mark + wordmark, emblem = spruce mark alone. Never recolor, stretch, or rebuild with fonts.
2. **Colors**: pale green `#99AF82` surfaces, black & white everything else, yellow `#FFC607` square accents (never text). Muted brandbook tints available for backgrounds.
3. **Type**: Q3 DIN Condensed UPPERCASE for display; Calibri (→ Arial) for body.
4. **Layout**: square modular grid, left-aligned everything, rectilinear (no rounded corners, shadows, gradients), the simplest option wins.
5. **Tone**: warm, human, bilingual — Kyrgyz quotes with a Russian translation.

## Quick start — HTML

```html
<link rel="stylesheet" href="TfK-Brand-Kit/tokens.css">
<link rel="stylesheet" href="TfK-Brand-Kit/fonts/fonts.css">
<header class="tfk-header">
  <a class="tfk-brand" href="https://teachforkyrgyzstan.org">
    <img src="TfK-Brand-Kit/logo/svg/lockup-white.svg" alt="Заманбап Мугалим — Teach for Kyrgyzstan"></a>
  <a class="tfk-btn tfk-btn--yellow" href="#">Стать жаратманом</a>
</header>
<section class="tfk-hero"><h1 class="tfk-display" style="font-size:clamp(48px,12vw,160px)">О нас</h1></section>
```

## Changelog

- **2026-06** — rebuilt from the 2023 brandbook + 2025 pale-green identity. Retired the
  unofficial saturated-green/cream/gold palette and green logo variants (kept in
  `source/legacy/`). Added Q3 DIN fonts, task-routed guides, new favicon.
- **2025** — first version of the kit (pre-brandbook, inferred palette).
