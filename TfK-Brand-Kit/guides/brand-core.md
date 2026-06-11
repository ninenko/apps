# TfK — Brand core reference

Full rules distilled from the 2023 brandbook (`source/brandbook-2023.pdf`) + the 2025 pale-green evolution. Read only when the task needs edge-case detail.

## 1. Logo

- Two parts: stylized **spruce branch mark** + wordmark «Заманбап Мугалим» (Q3 DIN Condensed) with the line "TEACH FOR KYRGYZSTAN" (Arial Narrow, letterspaced). Wordmark without the English line is allowed. Mark alone (emblem) is allowed.
- Geometry: mark height = 5X (X = base module); 0.5X gaps between wordmark elements; the **full lockup fits a 2:3 box (height:width)**. Proportions and spacing are **immutable**. Never recreate the wordmark with live fonts — use the artwork (`logo/`, masters in `source/`).
- Additional brandbook versions: gray (≈50% black) lockup; TFK line set as two larger lines ("TEACH FOR / KYRGYZSTAN"); TFK line letterspaced to full lockup width; **circular badge** — «ЗАМАНБАП МУГАЛИМ · TEACH FOR KYRGYZSTAN» set in a circle around the mark (used as social avatar; raster in `source/badge-on-black.jpg`).
- **Color: black or white only** (brandbook base colors; also the current 2025+ practice). 50% gray variant allowed; tints of black in special print cases; matte silver/gold only for ceremonial print. Merch (apparel, cups, awards): always plain black or white logo on the material.
- Minimum logo length: **20 mm** (print). Web: lockup ≥ 120 px wide, emblem ≥ 24 px tall.
- Clear space: ≥ the mark's module (x) from publication edges; nothing inside ~½ emblem-width around the logo.
- Forbidden: changed proportions or element positions, other typefaces, off-palette colors, low contrast with background, busy/cluttered backgrounds, rotation, shadows, effects, gradients.

## 2. Color

Base = **black & white**. Everything else is auxiliary.

| Role | Hex | CMYK |
|---|---|---|
| Black (logo, text) | #000000 | 00 00 00 100 |
| White | #FFFFFF | 00 00 00 00 |
| **Pale green (2025+, main surface)** | **#99AF82** | ~43 18 58 01 |
| Yellow accent (2025+) | #FFC607 | ~00 22 95 00 |
| Sage gray | #A2B7B1 | 30 04 20 16 |
| Mint | #C2D9CE | 27 03 20 03 |
| Mint pale | #DCEFE3 | 13 00 12 00 |
| Warm gray | #C1BAAA | 26 23 32 00 |
| Warm gray mid | #CEC8BC | 19 17 24 00 |
| Warm gray soft | #E6E3DE | 09 08 10 00 |
| Warm gray pale | #F2F2ED | 04 03 05 00 |

Black tints 70/50/25% allowed. Matte silver & matte gold — special occasions only.
Note: #99AF82 and #FFC607 are sampled from official 2025 Instagram materials (post-brandbook evolution); if an official print value is ever issued, update here and in `tokens.css`/`colors.json`. The current pale green descends from the brandbook's sage #A2B7B1 (used flat on publication covers, p. 33).

## 3. Typography

- **Q3 DIN Condensed** — headlines/display, UPPERCASE (`fonts/Q3_DIN_Condensed.ttf`; also `Q3_DIN_normal.ttf`).
- Fallback for headings: Calibri Bold. Large text masses: **Calibri** (regular family). Web/system fallback: Arial, Helvetica, Segoe UI.
- Letter- and line-spacing: per task, lean tight for display. Supports Kyrgyz Cyrillic (Ң, Ө, Ү).

## 4. Layout / modular grid

Square grid sized to the mark's module; the plane should divide into a whole number of modules. Mark/logo aligns to the **left edge** by priority; all text blocks left-aligned (no center/right/justify; right alignment of secondary blocks only on diplomas in special cases). Designers must always prefer the simplest, most laconic solution. Exceptions only with TfK leadership approval. The 2025 yellow pixel-squares motif is this module grid made visible — keep squares on the grid.

## 5. Backgrounds & textures (brandbook pp. 34–35)

Four official **patterns** (ready SVG tiles in `patterns/`, CSS classes in `tokens.css`):

1. `emblem-watermark.svg` — spruce marks rotated 45°, light gray `#D2D2D2` on white (watermark walls, folder/notepad insides).
2. `stripes.svg` — diagonal stripes, mint `#CCE4CE` + warm beige `#D0C7B6` on white.
3. Dense diagonal stripes, dark gray `#6C696A` (≈70% black) — for strong dark surfaces.
4. `emblem-rows.svg` — upright marks in offset vertical rows, light gray `#CCCBCB`.

Patterns are always quiet: light tints on white (or the dark-gray stripe variant), never saturated colors, never under body text blocks.

**Photo textures**: natural close-ups — spruce branches, frost/ice crystals, stone/concrete, sand, leaf macro, textured paper — used as banner strips, cover backgrounds or full bleeds with the monochrome logo over a calm area. Toned paper is allowed in print. Publication covers may also be a flat sage `#A2B7B1` (brandbook) or pale green `#99AF82` (current) field.

## 6. Illustration / photo requirements

1. Rights cleared; published with authors' consent.
2. Images must serve the message — no decorative filler (mountains, lakes, children's faces); avoid ecology/tourism associations. Aim: understanding, activity, moderate academic optimism.
3. Match technical requirements (resolution, size).
4. Few images per publication; avoid seminar/conference shots and "talking heads".

## 7. Voice & conventions

Warm, honest, human — classroom stories over corporate copy. Bilingual: Kyrgyz quotes always carry a Russian translation. Materials may be KG-only or RU-only; address blocks exist in KG/RU/EN patterns (see `guides/documents.md`).
