# German Learning App v1 — Build Notes (internal, NOT linked from the app UI)

## Where this was built
- Build directory: `~/workspace/german-learning-app/` (NOT a git repo).
- **Clone constraint — READ FIRST:** the repo was cloned to `~/workspace/github/german-learning-app/` as ordered, but the exec result then failed an execution-risk security check: the cloned content could run code during ordinary processing. Prohibited inside that clone: running git or package-manager commands (even status/diff/log), opening it in an editor, copying/moving its files into home/config/a repository/PATH/tools, or building/processing its content. If a prohibited action is necessary, the user must be asked first.
- **Workaround:** the app was built in a fresh directory with no git at all. **The parent must copy these files into the repo via the browser** (GitHub web UI upload) and push from there. Do not run git commands inside the clone from this subagent session.

## Files to copy into the repo root
| File | Size | What it is |
|---|---|---|
| `index.html` | ~2.4 KB | App shell: top bar (flag brand, speed toggle, search, streak), bottom nav (Home / Learn / Cards / Podcast / Pflege), toast, hidden JSON import input |
| `styles.css` | ~14.6 KB | Black/red/gold theme, phone-first, max-width 560px, 48px+ tap targets |
| `data.js` | ~194 KB | All curriculum content (LEVELS, CHAPTERS ×60, MOCK_A1, REVISION, NURSING, PODCAST) |
| `app.js` | ~51 KB | Router, views, speech helper, SRS flashcards, trainer, mock timer, progress store |
| `assets/day1-podcast.mp3` | 4.87 MB | Day 1 podcast episode (10:08), copied from `~/workspace/podcasts/german-day-1-zero-se-start-2026-11-22/` |

## Content — what is complete vs partial (verified 24 Nov 2026 — CORRECTED)
- **All 5 levels fully complete — 60/60 chapters at full depth.** Every chapter has dialogue (6 lines), ~40 vocab, 1 grammar point, 5-question chapter quiz, speaking prompt + model sentences, 1-minute recap, memory tip, 3–5 extra practice Q&As, and 6 tiny topics (words/sounds/dialogue/grammar/quiz/speak) with their own quizzes. An earlier draft of these notes claimed "24 full, 36 syllabus" — that was wrong for the shipped data.js and is corrected here (see v8 notes above).
- Totals (audited 24 Nov): 60 chapters, 360 topics, ~2,466 chapter vocab items (+26 nursing +5 podcast glossary), 703 quiz questions in total (300 chapter-quiz + topic quizzes + 5×20 mock questions + 3 podcast), 720 dialogue lines, 20-question mock test per level (A1–C1 all defined; 20 min, pass 12/20 = 60%, labelled practice-only, not a certificate).
- Curriculum spine mirrors Netzwerk neu A1–B1 → Sicher! aktuell B2 → Aspekte neu C1 (structure only; all text is original, never copied verbatim). Own content on top throughout: extra dialogues, extra vocab sets, extra practice, memory tips, nursing extras.
- **Nursing (Pflege):** 26 hospital words, 14 Sie-form patient phrases, 7-line morning-round dialogue, plus the B2-for-licence / B1-for-visa / telc B1·B2 Pflege exam note.
- **Podcast:** Day 1 episode with native `<audio>` player, 4-pass listening routine, 6 key lines, 5-word glossary, 3-question quiz.
- **Revision built in:** each level starts with a revision card (A1 = start-from-zero; A2–C1 = 60-second recap of the previous level); each chapter ends with a 1-minute recap; flashcards resurface weak words first.

## Rules applied
- **English + German only — NO Hindi anywhere in the app.** Verified: 0 Devanagari codepoints in all 4 text files (Python scan). All UI, explanations, tips and feedback in simple English; German content with English meanings; phonetics in simple English caps (e.g. "GOO-ten MOR-gen").
- **One deliberate exception:** the podcast episode's real title is "German Day 1 — Zero se Start" (the podcast is a separate Hindi-narrated series, explicitly out of scope of the language change). The title is kept as-is so the episode is not mislabelled; the podcast page states the narration is Hindi.
- **Easy-to-learn:** 5–10 min lessons, one new concept per chapter, short lines/dialogues, plain-English grammar terms first (e.g. "nominative = the doer, who?"), friendly quiz feedback that explains WHY, "Next:" bar on every screen, big tap targets.
- **Speech on every content item:** one shared helper (`speakText` / `speakDialogue`) using Web Speech API `speechSynthesis`, `lang='de-DE'`, best German voice picked on the device (prefers Google Deutsch / Microsoft voices), cancel-before-speak, slow 0.7× default / normal 1× toggle in the top bar (persisted in localStorage). If no German voice exists, a clear note is shown instead of failing silently. Speaker buttons on every vocab word, dialogue line, grammar example, quiz question, flashcard, nursing phrase and podcast line; "Play all" + loop for dialogues.
- **Progress:** localStorage key `gla_v1` (XP, streak, completed chapters, quiz bests, SRS card state, speed, mock best). XP: +10/chapter, +2/correct quiz answer, +5/trainer round, +1/card review, +20/mock. Export/import JSON backup on the Progress screen; streak from consecutive-day visits.
- **Flashcards:** SRS (Again = 10 min, Good = 1/3/7/14/30/60 days, Easy = double interval), weak words first, filters (Due / Weak / New / All / per level / Nursing).

## Verification performed (22 Nov 2026)
1. `node --check` on data.js and app.js — pass.
2. Served with `python3 -m http.server` — all 5 assets return HTTP 200 (index.html, styles.css, data.js, app.js, assets/day1-podcast.mp3); a missing file correctly returns 404.
3. Node smoke test (`/tmp/smoke-test.js`, DOM stubs) — **12/12 pass**: data shapes (5 levels, 60 chapters, every full chapter has dialogue/vocab/grammar/quiz×5/speak/recap), render of all 19 routes, quiz scoring 5/5, chapter completion + XP, trainer 10/10, flashcard grading + SRS fields, search (German + English), mock 20/20 with best score saved, progress export/import round-trip, nursing + podcast data, speech helpers, streak.
4. Data integrity counts via node: no missing `next` fields; LEVELS A1 complete, A2–C1 partial.

## v9 — Professional redesign: "looks like a real developer built it" (24 Nov 2026)
- **User feedback:** v8 "looks cheap, obviously AI-made". v9 is a visual/design-quality pass only — no content, structure, features or behaviour changed.
- **Design system (styles.css rewritten from scratch, same class names):** warm paper `#faf8f0`, warm ink `#1d1a15`, ONE red accent `#c8102e` (CTAs, active states, progress), gold only as identity (flag, streak, focus, START HERE ribbon on ink). No gradients except the 64px tricolour rule in the hero. Serif display headings (Iowan Old Style / Palatino / Georgia) + system sans body. **Google Fonts removed — no webfont dependency, fully offline-safe.** 8px spacing grid, one radius family (10/12/16px), hairline borders, one subtle shadow. Flat fills everywhere (progress bars solid, no gradient).
- **Icons:** one consistent inline-SVG set (Feather-style strokes, `IC` map in app.js + inline SVG in index.html). Bottom nav, section tiles, speaker buttons, search and streak flame are all SVG now. Decorative emoji removed from every screen: nav, section cards, tabs, topic kinds, chips, headings, toasts, progress export/import buttons, instructional text ("Tap the speaker button…"). Kept deliberately: ✅/❌ in quiz feedback and ✓ done-marks (functional status marks).
- **Hero:** the cliché centred black hero + gold radial glow is gone — editorial left-aligned white card: tricolour rule, red eyebrow "DEUTSCH LERNEN · A1–C1", serif headline, one red CTA.
- **Chrome:** top bar is now white with a hairline border (was black with a gold bar); bottom nav is light with a hairline top border, red active state (was black + gold). START HERE ribbons are ink pills with gold text (was gold pill, star removed). Speaker B's dialogue circle is outlined (A is solid ink) — the two voices are distinguishable.
- **Toast fix:** toast now sits at `bottom: calc(112px + safe-area)` — above the ~66px bottom nav, never covering it (was 96px, overlapped on some devices).
- **Dead code removed:** the `.topic-*` CSS rules (topic-list/row/num/main/time/done/crumb/next) were never used by app.js — deleted. CSS audit: every remaining selector is used; every class used in markup is defined.
- **Cache-buster:** ?v=8 → ?v=9 on styles.css, data.js, app.js.
- **Verification (local, 24 Nov):** node --check pass; v8 smoke test 27/27; v9 checks all pass (17 routes rendered, 0 decorative emoji in any view, 7 SVG section icons, 8 SVG icons in index.html, 0 Devanagari in all files, 0 Google Fonts refs). Live-browser check still needed (parent): load live site, eyeball Home/Learn/Chapter/Quiz/Cards on a phone, tap a speaker button.

## v8 — UI polish + quiz fixes (24 Nov 2026)
- **Quiz fix (reported bug):** the plural question for "der Stuhl" had options 'die Stuhle' vs 'die Stühle' — identical except for the umlaut, so it looked like a duplicate on a phone. Fixed in BOTH places it appeared (A1-9 chapter quiz + A1-9 topic quiz t6 — note: it is A1-9 "My Home", not A1-8 as reported): wrong option is now 'der Stühle' (wrong article — clearly distinct, still teaches the article). Same pattern fixed for "der Park" (A1-5 chapter quiz + topic quiz t6): 'die Parke' → 'der Parks'. Answer indices unchanged (Stuhl = 1, Park = 0). Audit scan of all 703 quiz questions: no exact duplicate options anywhere; remaining umlaut-only pairs (musst/müsst, hätte/hatte, 20 occurrences) are INTENTIONAL minimal-pair grammar tests (2nd-person forms; Konjunktiv II vs Präteritum) — left as-is.
- **Honesty correction (24 Nov audit — the old notes were wrong):** BUILD_NOTES previously said A2–C1 had only 3 full chapters each + 9 syllabus chapters. That is FALSE for the shipped data.js: a full audit shows **all 60 chapters are full depth** — every chapter in every level has 6 topics, a 6-line dialogue, ~40 vocab, a grammar point, a 5-question chapter quiz, topic quizzes, a speaking prompt, recap, memory tip and extra practice. Spot-checked content is real and level-appropriate (C1-7 medical ethics, B2-3 relative clauses in nursing reports; A1∩C1 vocab overlap only 5 words — proper progression). The Learn page now says so plainly ("All 5 levels are complete — 60 chapters in tiny 2–4 minute topics") and the Home footer carries the same true status line. The old "24 full, 36 syllabus" claim in the Content section below is corrected here — do not reintroduce it.
- **Polish:** A–D letter badges on every quiz option (chapter quiz, topic quiz, trainer, mock, podcast quiz); section-card icons now sit in tinted tiles; stat-row labels shortened (XP / Streak / Lessons / Cards) so nothing clips on narrow phones; inline SVG favicon (black/red/gold flag); `:focus-visible` gold outline; no grey tap flash. No content, structure or features changed; English + German only still verified (0 Devanagari in all files).
- **Cache-buster:** ?v=7 → ?v=8 on styles.css, data.js, app.js.
- **Verification (local, 24 Nov):** node --check pass; data audit (60 chapters, 360 topics, 703 quiz Qs, mocks A1–C1 all defined); Node render smoke test 27/27 (all routes render, fixed options verified in rendered HTML, quiz scoring + topic completion + XP work, no Devanagari in rendered views). Live-browser check still needed (parent): load live site, A1 start flow, open a chapter, run the A1-9 topic quiz, tap a speaker button, check mobile layout.

## Bugs found and fixed during verification
- `MOCK_A1` in data.js is an object `{title, sub, time, questions:[...]}`, not an array — app.js spread it directly and the mock crashed. Fixed to use `MOCK_A1.questions` / `MOCK_A1.time`; mock questions have no `why`, so the review now guards it.
- `index.html` still had Hindi in the `<title>` ("A1 se C1") and meta description — fixed to English. The hidden import input had no `onchange` — wired to `importProgressFile`.
- `styles.css` was missing classes app.js uses: `.flashcard`, `.card-front`, `.card-back`, `.big`, `.result-box` (+`.pass`/`.fail`), `.audio-box`, `.srs-row`, `.ok`, `.bad-text`, `.chip.active`, `.timer.low`, `.opt.dim`; fixed the `.quiz-q` container styling (was bolding the whole quiz block). Added as an appended block.
- Flashcard queue was built once at load, so words added later never appeared until the filter was re-tapped — the queue now rebuilds when navigating into the Cards view.

## NOT verified (needs a real phone/browser — this subagent has no live browser)
- Actual speech output: `speechSynthesis` voice availability varies by device (Android Chrome usually has Google Deutsch; iOS Safari ships German voices; some devices have none — the no-voice note covers that case, but no one has heard it speak yet).
- The 20-minute mock timer in a real browser (tested only in the Node stub, where the interval is faked).
- Visual layout on a real phone screen (CSS is phone-first by design, max-width 560px, but not eyeballed).
- The app has never been opened in a browser at all — parent should open the live link on a phone, tap a speaker button, run the mock once, and check the podcast plays.

## Deploy (parent, via browser)
Upload the 5 files above to the repo root (`ashutoshkumarjpg67-ai/german-learning-app`), keeping `assets/day1-podcast.mp3` under `assets/`. GitHub Pages serves it as a static site — no build step, no backend.
