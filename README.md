# HTML Public — публикация на GitHub Pages

## Адрес сайта

**https://ninenko.github.io/apps/**

Прямые ссылки:
- `apps/` → `https://ninenko.github.io/apps/apps/имя-файла.html`
- `lectures/` → `https://ninenko.github.io/apps/lectures/имя-файла.html`

---

## Как пользоваться

1. Сохрани HTML-файл в папку `apps/` (приложения, игры, **и страницы оценок**) или `lectures/` (слайды и презентации)
2. Скажи Claude: **«загрузи новый файл»** или **«обнови [название]»**
3. Claude добавит/обновит карточку на главной странице и опубликует — через ~1 минуту файл будет доступен в интернете

> Главная страница (`index.html`) всегда обновляется автоматически при каждой публикации — это прописано в воркфлоу.

---

## Три раздела сайта

Главная страница разбита на три раздела (фильтр + теги):

1. **Приложения и игры** — интерактивные приложения, инструменты, игры, эмуляторы, анализаторы, визуализации.
2. **Лекции и слайды** — слайды, презентации, материалы для чтения, эссе.
3. **Оценки** — страницы с результатами и оценками студентов.

Разделов три, а папок две: раздел «Оценки» — это группировка на главной, его файлы физически лежат в `apps/` (чтобы не ломать публичные ссылки).

---

## Структура папок

```
HTML public/
├── apps/       ← «Приложения и игры» + «Оценки»
├── lectures/   ← «Лекции и слайды»
├── essays/     ← лонгриды/эссе (в разделе «Лекции и слайды»)
├── index.html  ← главная страница сайта
├── .claude/    ← инструкции для Claude
```

**Правило размещения:** слайды/презентация/чтение → `lectures/`; всё остальное, включая страницы оценок → `apps/`.

---

## Опубликованные файлы

### Приложения и игры

| Файл | Ссылка |
|------|--------|
| binary-transistors-explorer.html | https://ninenko.github.io/apps/apps/binary-transistors-explorer.html |
| demo_infoprocessing.html | https://ninenko.github.io/apps/apps/demo_infoprocessing.html |
| matrix-picker.html | https://ninenko.github.io/apps/apps/matrix-picker.html |
| memory_neurons.html | https://ninenko.github.io/apps/apps/memory_neurons.html |
| neural_net_pattern_input.html | https://ninenko.github.io/apps/apps/neural_net_pattern_input.html |
| physics_deckbuilder_2p.html | https://ninenko.github.io/apps/apps/physics_deckbuilder_2p.html |
| physics_rules_2p.html | https://ninenko.github.io/apps/apps/physics_rules_2p.html |
| punchcard-emulator.html | https://ninenko.github.io/apps/apps/punchcard-emulator.html |
| punchcard-emulator-ru.html | https://ninenko.github.io/apps/apps/punchcard-emulator-ru.html |
| roleplay_IT_hardware.html | https://ninenko.github.io/apps/apps/roleplay_IT_hardware.html |
| transaction_analyzer_static.html | https://ninenko.github.io/apps/apps/transaction_analyzer_static.html |
| vnimanie_viktoriny.html | https://ninenko.github.io/apps/apps/vnimanie_viktoriny.html |
| word-embeddings-2d.html | https://ninenko.github.io/apps/apps/word-embeddings-2d.html |

### Лекции и слайды

| Файл | Ссылка |
|------|--------|
| api-slides.html | https://ninenko.github.io/apps/lectures/api-slides.html |
| game_mechanics_slides_v3.html | https://ninenko.github.io/apps/lectures/game_mechanics_slides_v3.html |
| new_school_slides.html | https://ninenko.github.io/apps/lectures/new_school_slides.html |
| randomness_slides.html | https://ninenko.github.io/apps/lectures/randomness_slides.html |
| story-of-programming-slides.html | https://ninenko.github.io/apps/lectures/story-of-programming-slides.html |
| waterfall-vs-agile.html | https://ninenko.github.io/apps/lectures/waterfall-vs-agile.html |
| essays/ai-gap/index.html | https://ninenko.github.io/apps/essays/ai-gap/index.html |
| physics_mechanics.html | https://ninenko.github.io/apps/lectures/physics_mechanics.html |

### Оценки

| Файл | Ссылка |
|------|--------|
| neuroemo_Spring2026_semester_grades.html | https://ninenko.github.io/apps/apps/neuroemo_Spring2026_semester_grades.html |
| neuroemo_results.html | https://ninenko.github.io/apps/apps/neuroemo_results.html |
| grades_neuro_edu_test1.html | https://ninenko.github.io/apps/apps/grades_neuro_edu_test1.html |
