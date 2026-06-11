# TfK Brand Kit — «Заманбап Мугалим» / Teach for Kyrgyzstan

Apply this brand to EVERY visual deliverable for Teach for Kyrgyzstan.
**This file is a router. Read ONLY the one guide your task needs — nothing else.**

## Core rules (often enough on their own — stop here if they cover your task)

- **Logo is monochrome only**: WHITE on green/dark/photo, BLACK on white/light. Never green, never recolored.
  Files: `logo/svg/…` → `lockup-white`, `lockup-black`, `emblem-white`, `emblem-black` (same names in `logo/png/` for docs/slides). lockup = spruce mark + wordmark; emblem = mark alone. Don't rebuild the wordmark with fonts — it ships inside the logo art.
- **Colors**: pale green `#99AF82` (main brand surface), black `#000000`, white `#FFFFFF`, yellow `#FFC607` (accent squares/highlights only, never text). Long reading text = black on white; covers/heroes = pale green with white text + white or black logo.
- **Type**: display/headings = Q3 DIN Condensed, UPPERCASE (`fonts/`; web: link `fonts/fonts.css`). Body = Calibri (fallback Arial/Helvetica/system sans). **All text left-aligned** — never centered, right-aligned or justified.
- **Layout**: square modular grid, rectilinear, no rounded corners/shadows/gradients. Logo and content align to the LEFT edge. Simplest, most laconic option always wins.
- **Tone**: warm, human, bilingual — Kyrgyz quotes always get a Russian translation.

## Task → read this file, only this file

| Task | Read |
|---|---|
| HTML page, web, email | `guides/web.md` (then link `tokens.css` + `fonts/fonts.css`) |
| Word / PDF document, letter, diploma, publication, business card | `guides/documents.md` |
| Poster, slide deck, social tile, badge, invitation, table card | `guides/poster-social.md` |
| Logo geometry, full palette (incl. CMYK), grid, backgrounds/textures, photo rules, edge cases | `guides/brand-core.md` |

`colors.json` = machine-readable palette. `patterns/` = official tiling background SVGs (spruce watermark, stripes, mark rows — see the guide for your task). Never read `source/` (master artwork + legacy files only).
