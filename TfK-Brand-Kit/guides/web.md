# TfK — Web / HTML guide

(Assumes you read the kit's `CLAUDE.md` core rules. Adjust `TfK-Brand-Kit/` paths to where the kit sits.)

## Setup

```html
<link rel="stylesheet" href="TfK-Brand-Kit/tokens.css">
<link rel="stylesheet" href="TfK-Brand-Kit/fonts/fonts.css">
<link rel="icon" href="TfK-Brand-Kit/logo/favicon.svg">
```

Style with `var(--tfk-*)`: `--tfk-green #99AF82`, `--tfk-yellow #FFC607`, `--tfk-black`, `--tfk-white`, `--tfk-ink`, `--tfk-green-dark` (hover), plus muted tints `--tfk-mint`, `--tfk-warmgray-pale` etc. Ready classes: `.tfk-body .tfk-hero .tfk-h1..3 .tfk-display .tfk-btn .tfk-btn--yellow .tfk-card .tfk-quote .tfk-header .tfk-squares`.

## Page anatomy (signature look)

- **Hero / header band**: pale green `--tfk-green`, WHITE lockup top-left, huge white UPPERCASE Q3 DIN Condensed headline (think viewport-filling, `clamp(48px,12vw,160px)`), short white Calibri body text. Optional cluster of yellow squares in a corner (`.tfk-squares` or absolutely-positioned divs in a staircase/pixel pattern).
- **Content**: white background, black text, Q3 DIN Condensed uppercase headings, generous whitespace. Rectilinear: **no border-radius, no box-shadows, no gradients**.
- **Buttons/links**: black button with white text (hover `--tfk-green-dark`), or yellow button with black text for the main CTA. Links `--tfk-green-dark`.
- All text **left-aligned**; layout on a simple square grid; logo and headings flush to the left margin.

## Header snippet

```html
<header class="tfk-header">
  <a class="tfk-brand" href="https://teachforkyrgyzstan.org">
    <img src="TfK-Brand-Kit/logo/svg/lockup-white.svg" alt="Заманбап Мугалим — Teach for Kyrgyzstan">
  </a>
  <a class="tfk-btn tfk-btn--yellow" href="https://teachforkyrgyzstan.org/joinus">Стать жаратманом</a>
</header>
```

Light variant: add `tfk-header--light` and swap to `lockup-black.svg`.
`emblem.svg` / `lockup.svg` use `currentColor` — recolor via CSS `color:#000` or `#fff` ONLY.

## Contrast notes

- White text on `--tfk-green` is for display sizes (hero headlines, short intro lines). For long paragraphs use black on white.
- Never set text in yellow; never put black logo on green (use white) or white logo on white.

## Email (HTML)

Inline styles, table layout; green `#99AF82` banner with white PNG logo (`logo/png/lockup-white.png`), body black Calibri/Arial on white, yellow `#FFC607` only as a thin accent bar or button fill.
