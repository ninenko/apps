# TfK — Brand core reference

Full rules distilled from the 2023 brandbook (`source/brandbook-2023.pdf`) + the 2025 pale-green evolution. Read only when the task needs edge-case detail.

## 1. Logo

- Two parts: stylized **spruce branch mark** + wordmark «Заманбап Мугалим» (Q3 DIN Condensed) with the line "TEACH FOR KYRGYZSTAN" (Arial Narrow, letterspaced). Wordmark without the English line is allowed. Mark alone (emblem) is allowed.
- Proportions and spacing between parts are **immutable**. Mark side ratio (height:width) = 2:3 module. Never recreate the wordmark with live fonts — use the artwork (`logo/`, masters in `source/`).
- **Color: black or white only** (brandbook base colors; also the current 2025+ practice). Tints of black allowed in special print cases; matte silver/gold only for ceremonial print.
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
Note: #99AF82 and #FFC607 are sampled from official 2025 Instagram materials (post-brandbook evolution); if an official print value is ever issued, update here and in `tokens.css`/`colors.json`.

## 3. Typography

- **Q3 DIN Condensed** — headlines/display, UPPERCASE (`fonts/Q3_DIN_Condensed.ttf`; also `Q3_DIN_normal.ttf`).
- Fallback for headings: Calibri Bold. Large text masses: **Calibri** (regular family). Web/system fallback: Arial, Helvetica, Segoe UI.
- Letter- and line-spacing: per task, lean tight for display. Supports Kyrgyz Cyrillic (Ң, Ө, Ү).

## 4. Layout / modular grid

Square grid sized to the mark's 2:3 module; the plane should divide into a whole number of modules. Mark/logo aligns to the **left edge** by priority; all text blocks left-aligned (no center/right/justify; right alignment of secondary blocks only on diplomas in special cases). Designers must always prefer the simplest, most laconic solution. Exceptions only with TfK leadership approval.

## 5. Illustration / photo requirements

1. Rights cleared; published with authors' consent.
2. Images must serve the message — no decorative filler (mountains, lakes, children's faces); avoid ecology/tourism associations. Aim: understanding, activity, moderate academic optimism.
3. Match technical requirements (resolution, size).
4. Few images per publication; avoid seminar/conference shots and "talking heads".

## 6. Voice & conventions

Warm, honest, human — classroom stories over corporate copy. Bilingual: Kyrgyz quotes always carry a Russian translation. Materials may be KG-only or RU-only; address blocks exist in KG/RU/EN patterns (see `guides/documents.md`).
