# Claude Instructions — The AI Adoption Gap Project

Read this at the start of every session. It contains everything needed to work on this project without asking Ivan for context.

---

## What this project is

A bilingual (EN/RU) static HTML website by Ivan Ninenko — a personal research essay on the AI adoption gap across six dimensions: gender, income, language, age, education, and experience (once-bitten). Live at **https://ninenko.github.io/apps/essays/ai-gap/**.

---

## How to push changes (do this after every edit)

The GitHub token and repo details are in `.github-config` (project root). Every session, clone fresh and push after edits:

```bash
# 1. Read token from .github-config (never hardcode it here)
source "/sessions/CURRENT_SESSION/mnt/AI gap (1)/.github-config"
# TOKEN is now set from the file

# 2. Clone the repo (use actual current session path)
git clone "https://${TOKEN}@github.com/ninenko/apps.git" /sessions/CURRENT_SESSION/apps-repo

# 3. After editing files in site/, copy and push:
cp "/sessions/CURRENT_SESSION/mnt/AI gap (1)/site/"* /sessions/CURRENT_SESSION/apps-repo/essays/ai-gap/
cd /sessions/CURRENT_SESSION/apps-repo
git config user.email "ivan.ninenko@gmail.com"
git config user.name "Ivan Ninenko"
git add essays/ai-gap/
git commit -m "short description of what changed"
git push
```

Replace `CURRENT_SESSION` with the actual session folder name (visible in file paths like `/sessions/cool-vigilant-maxwell/`). **Always push immediately after any edit. No need to ask Ivan.**

---

## Folder structure

```
AI gap (1)/              ← workspace root (persistent on Ivan's computer)
├── site/                ← ALL HTML and CSS files (edit these)
│   ├── style.css
│   ├── index.html
│   ├── gap-gender.html
│   ├── gap-income.html
│   ├── gap-language.html
│   ├── gap-age.html
│   ├── gap-education.html
│   ├── gap-once-bitten.html
│   └── methodology.html
├── research/            ← source MD docs, read-only reference
├── .github-config       ← GitHub token, repo name, URLs
├── CHANGELOG.md         ← update after every meaningful change
├── CLAUDE.md            ← this file
└── README.md
```

**Rules:** Never put HTML/CSS outside `site/`. Never modify files in `research/`.

---

## GitHub repo structure

- Repo: `ninenko/apps` → `https://github.com/ninenko/apps`
- Site files live at `essays/ai-gap/` inside that repo
- Pages URL: `https://ninenko.github.io/apps/essays/ai-gap/`

---

## Before building or editing any page

1. Read the relevant research MD in `research/` for context.
2. Build English first, add Russian after.
3. Push when done.

---

## Design system

**Colors:**
```css
--bg: #0e0c0a       /* near-black warm background */
--bg2: #161310      /* section backgrounds */
--bg3: #1d1a16      /* card backgrounds */
--text: #e2ddd6     /* primary text */
--muted: #7a7369    /* secondary text */
--dim: #3a3530      /* borders */
--accent: #c9944a   /* amber — highlights, stats, links */
--accent2: #8a5f28  /* amber dark */
--line: #2a2520     /* thin dividers */
```

**Fonts:** Playfair Display (headlines) · Libre Baskerville (body) · IBM Plex Mono (stats, labels)

**Aesthetic:** Archival Index — editorial, warm-dark. Not corporate, not "tech teal." Do not change palette or fonts without asking Ivan.

---

## Bilingual implementation

- Every text element has `.en` and `.ru` versions in HTML.
- CSS hides `.ru` by default; `ru-on` class on `<body>` switches language.
- **Always mirror every change in both EN and RU unless Ivan says otherwise.**
- Russian personal/essayistic sections may need native speaker review before publishing — flag if unsure.

---

## Ivan's voice

- **Intro / personal sections:** warm, slightly ironic, essayistic. First person. Mentions his wife, meditation, "AI psychosis." The wife/agreement exists because she noticed he's "not entirely normal about this." He uses AI for work, research, thinking.
- **Report sections:** objective, sourced, evidence-first. No opinion without citation.

---

## Page structure

### index.html — 7 sections
1. Hero (title, subtitle, byline)
2. Karpathy — two pull quotes + prose. Karpathy is described as "former OpenAI researcher, now independent researcher and founder of Eureka Labs"
3. Introduction / Personal Note — Ivan's voice: resonates with Karpathy's divide; struck by people who don't realize how fast AI is advancing; wife/agreement story; "I believe I don't have AI psychosis"; noticed all AI enthusiasts he knows are male; asked Claude; gender gap proved real; not the only gap; six dimensions
4. Report Title Card
5. Four Notes (pace of change, spectrum, method, restrictions/blocks)
6. Gap Navigator (six cards linking to gap pages)
7. Join the Conversation (Telegram RU + Facebook EN) + Footer

### gap-[name].html — standard template
- Progress bar · Back link · Headline stat · Executive Summary (5–7 bullets)
- PART 1 — Evidence (1.1–1.7)
- PART 2 — Causes (2.1–2.4, expandable via `<details>`)
- PART 3 — Synthesis · Sources table · Prev/Next nav

---

## Six gap pages — headline stats

| File | # | Stat displayed | Source |
|---|---|---|---|
| gap-gender.html | 01 | 22% lower odds | HBS, 2024 |
| gap-income.html | 02 | 9→34% professional use | Brookings, 2025 |
| gap-language.html | 03 | 15× more tokens | Petrov et al., NeurIPS 2023 |
| gap-age.html | 04 | 53.6 pp gap | OECD, 2026 |
| gap-education.html | 05 | 46→22% at work (STEM vs other) | Federal Reserve, 2025 |
| gap-once-bitten.html | 06 | 42% companies abandoned AI | Enterprise surveys, 2025 |

---

## Changelog protocol

After every meaningful change, add an entry to `CHANGELOG.md`:

```markdown
## [version] — YYYY-MM-DD

### What changed
- Plain-language description of what was built or changed and why.
```

Versions: `0.x.x` for WIP, `1.0.0` for first public release.

---

## What not to do

- No frameworks, build tools, or external JS libraries — pure HTML/CSS/JS only.
- No content not in the research docs without flagging it as a gap.
- No palette or font changes without asking Ivan.
