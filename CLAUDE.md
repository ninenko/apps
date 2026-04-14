# Claude Instructions — AI Adoption Gap

**Read at the start of every session. This is the only file you need.**

---

## Project in one sentence

Bilingual (EN/RU) static HTML research essay by Ivan Ninenko on six dimensions of the AI adoption gap. Live at: **https://ninenko.github.io/apps/essays/ai-gap/**

---

## Session start checklist

1. Read this file ← you're doing it
2. Read the relevant `research/*.md` if editing content
3. Make edits in `site/`
4. Push (see below) — **always push, no need to ask Ivan**

---

## Pushing to GitHub — do this after every edit

**Step 1 — get token and clone (once per session):**
```bash
source "/sessions/CURRENT_SESSION/mnt/AI gap (1)/.github-config"
# TOKEN, GITHUB_USER, GITHUB_REPO are now available
git clone "https://${TOKEN}@github.com/${GITHUB_USER}/${GITHUB_REPO}.git" /sessions/CURRENT_SESSION/apps-repo
```

**Step 2 — copy files and push (after each edit):**
```bash
cp "/sessions/CURRENT_SESSION/mnt/AI gap (1)/site/"* /sessions/CURRENT_SESSION/apps-repo/essays/ai-gap/
cd /sessions/CURRENT_SESSION/apps-repo
git config user.email "ivan.ninenko@gmail.com"
git config user.name "Ivan Ninenko"
git add essays/ai-gap/
git commit -m "describe what changed"
git push
```

> Replace `CURRENT_SESSION` with the actual session folder (e.g. `cool-vigilant-maxwell`).
> The `.git` folder inside `AI gap (1)/` is empty — ignore it, always clone fresh.
> Never hardcode the token in any file — always `source .github-config`.

---

## File locations

| What | Where |
|---|---|
| GitHub token | `AI gap (1)/.github-config` → `$TOKEN` |
| GitHub repo | `ninenko/apps`, site at `essays/ai-gap/` |
| HTML + CSS to edit | `AI gap (1)/site/` |
| Research sources | `AI gap (1)/research/` — read-only |
| Changelog | `AI gap (1)/CHANGELOG.md` — update after each change |

---

## Site files

```
site/
├── style.css
├── index.html           ← cover + personal essay + gap navigator
├── gap-gender.html      ← 01
├── gap-income.html      ← 02
├── gap-language.html    ← 03
├── gap-age.html         ← 04
├── gap-education.html   ← 05
├── gap-once-bitten.html ← 06
└── methodology.html
```

---

## Design system (do not change without asking Ivan)

```css
--bg: #0e0c0a    --text: #e2ddd6    --accent: #c9944a (amber)
--bg2: #161310   --muted: #7a7369   --accent2: #8a5f28
--bg3: #1d1a16   --dim: #3a3530     --line: #2a2520
```
Fonts: **Playfair Display** (headlines) · **Libre Baskerville** (body) · **IBM Plex Mono** (stats/labels)
Aesthetic: Archival Index — warm dark editorial. No frameworks, no external JS.

---

## Bilingual rule

Every text element has `.en` and `.ru` in HTML. Always mirror changes in both languages unless Ivan says otherwise. `.ru` hidden by default; `ru-on` class on `<body>` switches language.

---

## Ivan's voice

- **Personal sections (index.html intro):** warm, ironic, essayistic. First person. Wife/agreement exists because she noticed he's "not entirely normal about this." Mentions meditation, AI psychosis.
- **Gap report sections:** objective, sourced, evidence-first. No opinion without citation.

---

## index.html — section map

| # | Section | Notes |
|---|---|---|
| 1 | Hero | Title, subtitle, byline |
| 2 | Karpathy | Two pull quotes + prose. He is "former OpenAI researcher, now independent researcher and founder of Eureka Labs" |
| 3 | Introduction | Ivan's personal narrative: resonance with divide → wife agreement → AI psychosis → noticed all enthusiasts are male → asked Claude → gender gap → six dimensions |
| 4 | Report Title Card | "Research Essay / Исследовательское эссе" |
| 5 | Four Notes | Pace · Spectrum · Method · Restrictions |
| 6 | Gap Navigator | Six cards linking to gap pages |
| 7 | Join the Conversation | Telegram (RU) + Facebook (EN) + Footer |

---

## Gap pages — headline stats

| File | # | Key stat | Source |
|---|---|---|---|
| gap-gender.html | 01 | 22% lower odds | HBS 2024 |
| gap-income.html | 02 | 9→34% professional use | Brookings 2025 |
| gap-language.html | 03 | 15× more tokens (Kyrgyz vs English) | NeurIPS 2023 |
| gap-age.html | 04 | 53.6 pp gap (students vs retirees) | OECD 2026 |
| gap-education.html | 05 | 46→22% at work (STEM vs other) | Federal Reserve 2025 |
| gap-once-bitten.html | 06 | 42% companies abandoned AI | Enterprise surveys 2025 |

Each gap page: Progress bar → Headline stat → Executive Summary → Part 1 Evidence → Part 2 Causes (`<details>`) → Part 3 Synthesis → Sources → Prev/Next nav.

---

## Changelog format

```markdown
## [0.x.x] — YYYY-MM-DD
### What changed
- Plain-language description.
```
