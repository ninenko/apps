# Publishing — How to Push Changes to the Live Site

**Live site:** https://ninenko.github.io/apps/essays/ai-gap/
**GitHub repo:** `ninenko/apps` → files live at `essays/ai-gap/`
**Token:** stored in `.github-config` (project root) — never hardcode it anywhere

---

## Every session: clone the repo first

```bash
source "/sessions/CURRENT_SESSION/mnt/AI gap (1)/.github-config"
git clone "https://${GITHUB_TOKEN}@github.com/${GITHUB_USER}/${GITHUB_REPO}.git" /sessions/CURRENT_SESSION/apps-repo
git config -f /sessions/CURRENT_SESSION/apps-repo/.git/config user.email "ivan.ninenko@gmail.com"
git config -f /sessions/CURRENT_SESSION/apps-repo/.git/config user.name "Ivan Ninenko"
```

Replace `CURRENT_SESSION` with the actual session folder name (visible in the file path, e.g. `cool-vigilant-maxwell`).

---

## After editing files in `site/`: copy and push

```bash
cp "/sessions/CURRENT_SESSION/mnt/AI gap (1)/site/"* /sessions/CURRENT_SESSION/apps-repo/essays/ai-gap/
cd /sessions/CURRENT_SESSION/apps-repo
git add essays/ai-gap/
git commit -m "describe what changed"
git push
```

GitHub Pages redeploys automatically within 1–2 minutes.

---

## Important notes

- The `.git` folder inside `AI gap (1)/` is **empty and unused** — always clone fresh into the session temp folder.
- Never push `CLAUDE.md` or `.github-config` to the repo — they are local working files only.
- If push is blocked by GitHub secret scanning, check that no token is hardcoded in any committed file.
