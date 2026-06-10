# TfK — Documents guide (Word / PDF / office print)

(Assumes the kit's `CLAUDE.md` core rules. Sizes in pt unless noted; specs follow the 2023 brandbook.)

## Universal rules

- A4, white background. Body = **Calibri 12** (PDF/web fallback: Arial/Helvetica). Headings = Calibri Bold, or Q3 DIN Condensed UPPERCASE for covers/titles.
- **Everything left-aligned** — body, headings, address blocks. No centering, no justification. (Only exception: secondary blocks on diplomas may be right-aligned in special cases.)
- Logo: **black** version in office documents (`logo/png/lockup-black.png` or `emblem-black.png`), top-left, min length 20 mm, clear space ≈ half the emblem width. Margins ≥ 1 cm everywhere.
- Cover pages MAY use the signature look: pale green `#99AF82` full-bleed, white logo + white Q3 DIN Condensed uppercase title, optional yellow `#FFC607` squares. Inner pages stay white/black.

## Address block (closing element of letters, folders, booklets)

Calibri 8 (folders 10, booklets/notepads 9), left-aligned only, bottom or bottom-left. Standard content (fill real data):

```
Кыргызская Республика, 720000, г. Бишкек, [адрес]
тел./факс: +996(312)XX XX XX
E-mail: [email] · [website]
```

May appear in Kyrgyz only, Russian only, or KG+RU+EN stacked — pick one pattern per document. Match language of the letter.

## Specific formats

| Format | Specs |
|---|---|
| Business letter A4 | Logo top-left; date/№ upper area; body Calibri 12; address block Calibri 8 at bottom; left margin ~2 cm, right ~1.5 cm |
| Press release | Bold WHEN/WHAT/WHERE (КОГДА/ЧТО/ГДЕ) block top-right of header zone; body 12; partner logos strip at the bottom |
| Business card 90×50 mm | Name Calibri Bold 9–10; rest Calibri 7.5–8; **black-white logo only**; 5 mm min padding |
| Envelope (E65/A5/A4) | Sender block Calibri 8; recipient Calibri Bold 14; toned paper allowed |
| Diploma / благодарность A4-A5 | Heading Calibri Light 24–36; text Calibri 14–16; embossing & textured paper allowed |
| Publication cover A4/A5 | Title Calibri (Bold) 14–24; subtitle Calibri Bold 11–12 |
| Title page | Title Calibri 14–18; subtitle Bold 11 |
| Booklet A4 (trifold) | Headings Calibri Bold 25–40; text 9–10; address block 9 |

## PDFs generated from HTML

Use `guides/web.md` styles; print-safe: green `#99AF82` only as cover/divider surface, body pages white with black Calibri/Arial text. Embed Q3 DIN Condensed from `fonts/` for display headings.
