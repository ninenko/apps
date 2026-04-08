# HTML Public — публикация на GitHub Pages

## Как пользоваться

1. Сохрани HTML-файл в папку `apps/` или `lectures/`
2. Скажи Claude: **"загрузи новый файл"** или **"обнови [название]"**
3. Через ~1 минуту файл будет доступен в интернете

---

## Адрес сайта

**https://ninenko.github.io/apps/**

Прямые ссылки:
- `apps/` → `https://ninenko.github.io/apps/apps/имя-файла.html`
- `lectures/` → `https://ninenko.github.io/apps/lectures/имя-файла.html`

---

## Инструкция для Claude

> Claude: читай этот раздел полностью в начале каждой сессии. Следуй инструкциям точно.

### Доступ к GitHub
- **Токен:** хранится в файле `.github-token` в этой папке (не в репо). Читать через `cat "/sessions/keen-eager-mccarthy/mnt/HTML public/.github-token"`
- **Пользователь:** ninenko
- **Репо (публичный):** https://github.com/ninenko/apps
- Git push через прокси работает. GitHub REST API заблокирован прокси — не использовать.

### Шаг 0 — клонировать репо (один раз за сессию)

```bash
TOKEN=$(cat "/sessions/keen-eager-mccarthy/mnt/HTML public/.github-token" | tr -d '[:space:]')
REPO=/sessions/keen-eager-mccarthy/apps-repo
if [ ! -d "$REPO" ]; then
  git clone https://$TOKEN@github.com/ninenko/apps.git $REPO
fi
cd $REPO
git config user.email "ivan.ninenko@gmail.com"
git config user.name "ninenko"
git pull
```

---

### Триггер: «загрузи новый файл» / «опубликуй»

Пользователь положил новый HTML-файл в `apps/` или `lectures/`. Нужно:

1. **Найти новый файл** — сравнить содержимое `apps/` и `lectures/` в папке пользователя с тем, что есть в `apps-repo/`. Новый файл — тот, которого нет в репо.
2. **Прочитать файл** — взять `<title>` и первый значимый заголовок (`<h1>` или аналог) для карточки.
3. **Добавить карточку в `index.html`** — найти подходящий раздел (Apps или Lectures), добавить карточку по образцу существующих. Указать правильный путь (`apps/` или `lectures/`), подобрать эмодзи, заполнить title и описание на русском и английском.
4. **Скопировать файлы в репо:**
   ```bash
   cp "/sessions/keen-eager-mccarthy/mnt/HTML public/apps/новый_файл.html" $REPO/apps/
   cp "/sessions/keen-eager-mccarthy/mnt/HTML public/index.html" $REPO/index.html
   ```
5. **Закоммитить и запушить:**
   ```bash
   cd $REPO && git add -A && git commit -m "Publish новый_файл.html" && git push
   ```
6. **Обновить раздел «Опубликованные файлы»** в этом README.
7. **Дать пользователю прямую ссылку** вида `https://ninenko.github.io/apps/apps/имя.html`

---

### Триггер: «обнови [название]» / «я загрузил обновлённый файл»

Пользователь положил обновлённую версию файла в ту же папку. Нужно:

1. **Определить файл** — по названию из запроса или по дате изменения (самый свежий файл в `apps/` или `lectures/`).
2. **Сравнить с репо:**
   ```bash
   diff "/sessions/keen-eager-mccarthy/mnt/HTML public/apps/файл.html" $REPO/apps/файл.html
   ```
3. **Проверить целостность** — убедиться, что файл заканчивается на `</html>`. Если обрезан — сообщить пользователю, не пушить.
4. **Скопировать и запушить:**
   ```bash
   cp "/sessions/keen-eager-mccarthy/mnt/HTML public/apps/файл.html" $REPO/apps/
   cd $REPO && git add apps/файл.html && git commit -m "Update файл.html" && git push
   ```
5. **Дать пользователю прямую ссылку** и напомнить сделать `Cmd+Shift+R` для обновления страницы.

---

### Важные правила
- **Всегда давать прямую ссылку** после любой публикации или обновления.
- Hard refresh в браузере: `Cmd+Shift+R`
- Если файл не заканчивается `</html>` — не пушить, сообщить пользователю.
- После публикации нового файла — обновлять раздел «Опубликованные файлы» в этом README.

---

## Опубликованные файлы

| Файл | Ссылка |
|------|--------|
| index.html | https://ninenko.github.io/apps/ |
| apps/binary-transistors-explorer.html | https://ninenko.github.io/apps/apps/binary-transistors-explorer.html |
| apps/game_mechanics_slides_v3.html | https://ninenko.github.io/apps/apps/game_mechanics_slides_v3.html |
| apps/matrix-picker.html | https://ninenko.github.io/apps/apps/matrix-picker.html |
| apps/memory_neurons.html | https://ninenko.github.io/apps/apps/memory_neurons.html |
| apps/neural_net_pattern_input.html | https://ninenko.github.io/apps/apps/neural_net_pattern_input.html |
| apps/neuroemo_midterm_results_S2026.html | https://ninenko.github.io/apps/apps/neuroemo_midterm_results_S2026.html |
| apps/neuroemo_results.html | https://ninenko.github.io/apps/apps/neuroemo_results.html |
| apps/punchcard-emulator-ru.html | https://ninenko.github.io/apps/apps/punchcard-emulator-ru.html |
| apps/punchcard-emulator.html | https://ninenko.github.io/apps/apps/punchcard-emulator.html |
| apps/roleplay_IT_hardware.html | https://ninenko.github.io/apps/apps/roleplay_IT_hardware.html |
| apps/transaction_analyzer_static.html | https://ninenko.github.io/apps/apps/transaction_analyzer_static.html |
| apps/word-embeddings-2d.html | https://ninenko.github.io/apps/apps/word-embeddings-2d.html |
| lectures/api-slides.html | https://ninenko.github.io/apps/lectures/api-slides.html |
| lectures/new_school_slides.html | https://ninenko.github.io/apps/lectures/new_school_slides.html |
| lectures/randomness_slides.html | https://ninenko.github.io/apps/lectures/randomness_slides.html |
| lectures/story-of-programming-slides.html | https://ninenko.github.io/apps/lectures/story-of-programming-slides.html |
