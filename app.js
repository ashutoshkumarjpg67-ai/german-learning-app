/* ============================================================
   Deutsch Lernen — app engine
   English + German only. Static, no backend, no login.
   Progress in localStorage. Speech via Web Speech API (de-DE).
   ============================================================ */

/* ================= Speech (Web Speech API) ================= */
const Speech = {
  supported: ('speechSynthesis' in window),
  voice: null, noVoice: false, ready: false,
  init() {
    if (!this.supported) { this.noVoice = true; return; }
    const pick = () => {
      const vs = window.speechSynthesis.getVoices().filter(v => v.lang && v.lang.toLowerCase().startsWith('de'));
      if (!vs.length) { this.noVoice = true; return; }
      const score = v => {
        let s = 0;
        if (/google deutsch/i.test(v.name)) s += 3;
        if (/microsoft/i.test(v.name)) s += 2;
        if (/katja|anna|conrad|petra|stefan/i.test(v.name)) s += 1;
        if (v.lang === 'de-DE') s += 1;
        return s;
      };
      vs.sort((a, b) => score(b) - score(a));
      this.voice = vs[0]; this.ready = true; this.noVoice = false;
    };
    pick();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = pick;
    }
    // voices may load a moment later — retry once
    setTimeout(pick, 800);
  },
  rate() { return (store.data && store.data.speed === 'normal') ? 1 : 0.7; },
};

let speakToken = 0;
function stopSpeak() { speakToken++; if (Speech.supported) { try { window.speechSynthesis.cancel(); } catch (e) {} } }
function speakOne(text, onend) {
  if (!Speech.supported) { toast('Speech is not supported on this device.'); return; }
  if (Speech.noVoice) { toast('German voice not found on this device. Install a German voice in your system text-to-speech settings.'); }
  const token = ++speakToken;
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'de-DE';
  if (Speech.voice) u.voice = Speech.voice;
  u.rate = Speech.rate();
  u.onend = () => { if (token === speakToken && onend) onend(); };
  u.onerror = () => { if (token === speakToken && onend) onend(); };
  window.speechSynthesis.speak(u);
}
function speakText(text) { stopSpeak(); speakOne(text); }
function speakLines(lines, loop) {
  stopSpeak();
  const token = ++speakToken;
  let i = 0;
  const next = () => {
    if (token !== speakToken) return;
    if (i >= lines.length) { if (loop) { i = 0; next(); } return; }
    const u = new SpeechSynthesisUtterance(lines[i]);
    u.lang = 'de-DE'; if (Speech.voice) u.voice = Speech.voice; u.rate = Speech.rate();
    u.onend = () => { i++; next(); };
    u.onerror = () => { i++; next(); };
    window.speechSynthesis.speak(u);
  };
  next();
}
function speakDialogue(chId, loop) {
  const ch = CHAPTERS[chId]; if (!ch || !ch.dialogue) return;
  speakLines(ch.dialogue.map(d => d.de), loop);
  toast(loop ? 'Playing dialogue on loop — tap any speaker to stop.' : 'Playing dialogue…');
}
function toggleSpeed() {
  store.data.speed = (store.data.speed === 'normal') ? 'slow' : 'normal';
  store.save(); updateSpeedBtn();
  toast(store.data.speed === 'slow' ? 'Speech speed: slow (0.7×) — best for learning.' : 'Speech speed: normal (1×).');
}
function updateSpeedBtn() {
  const b = document.getElementById('speedBtn');
  if (!b) return;
  b.textContent = (store.data.speed === 'normal') ? '1×' : '0.7×';
}

/* ================= Progress store (localStorage) ================= */
const store = {
  key: 'gla_v1',
  data: null,
  fresh() {
    return { xp: 0, streak: 0, lastVisit: null, days: {}, completed: {}, read: {}, topicsDone: {},
      quizBest: {}, cards: {}, speed: 'slow', podcastDone: false, mockBest: null, mockBests: {}, trainerBest: 0, voiceNoteDismissed: false };
  },
  load() {
    try { this.data = JSON.parse(localStorage.getItem(this.key)) || this.fresh(); }
    catch (e) { this.data = this.fresh(); }
    this.touch();
  },
  save() { try { localStorage.setItem(this.key, JSON.stringify(this.data)); } catch (e) {} },
  touch() {
    const today = new Date().toDateString();
    const d = this.data;
    if (d.lastVisit !== today) {
      const y = new Date(Date.now() - 864e5).toDateString();
      d.streak = (d.lastVisit === y) ? d.streak + 1 : 1;
      d.lastVisit = today; d.days[today] = true; this.save();
    }
  },
  addXP(n) { this.data.xp += n; this.save(); },
  completeChapter(chId, score) {
    if (!this.data.completed[chId]) { this.data.completed[chId] = { score: score || 0, at: Date.now() }; this.addXP(10); }
    else if (score && score > this.data.completed[chId].score) { this.data.completed[chId].score = score; this.save(); }
  },
  markRead(chId) { if (!this.data.read[chId]) { this.data.read[chId] = Date.now(); this.addXP(5); } },
};

function optLetter(i) { return 'ABCD'[i] || ''; }
/* ================= Helpers ================= */
function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
function escAttr(s) { return esc(s).replace(/'/g, '&#39;'); }
function go(route) { location.hash = '#/' + route; }
function toast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  clearTimeout(toast._t); toast._t = setTimeout(() => t.classList.remove('show'), 2600);
}
/* ================= Inline SVG icons (one consistent set) ================= */
/* Feather-style stroke icons + one filled flame. No emoji in the chrome —
   the speaker button, nav, section tiles and streak all draw from here. */
const IC = {
  flame: '<svg class="ic" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"/></svg>',
  speaker: '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M18.5 5.5a9 9 0 0 1 0 13"/></svg>',
  learn: '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
  cards: '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',
  vocab: '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>',
  mock: '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5"/><line x1="22" y1="10" x2="22" y2="16"/></svg>',
  podcast: '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>',
  nursing: '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>',
  progress: '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>',
  check: '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>',
  x: '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
};
function speakBtn(text, cls) {
  return '<button class="speak-btn ' + (cls || '') + '" data-say="' + escAttr(text) + '" aria-label="Listen to pronunciation">' + IC.speaker + '</button>';
}
function chapterList(levelId) {
  return Object.values(CHAPTERS).filter(c => c.level === levelId).sort((a, b) => a.n - b.n);
}
function levelProgress(levelId) {
  const list = chapterList(levelId);
  const full = list.filter(c => !c.syllabus);
  const done = full.filter(c => store.data.completed[c.id]).length;
  const read = list.filter(c => c.syllabus && store.data.read[c.id]).length;
  return { total: list.length, full: full.length, done, read, syllabus: list.length - full.length };
}
/* ================= Tiny topics (A1 chapters split into micro-lessons) ================= */
function topicKey(chId, topicId) { return chId + ':' + topicId; }
function topicDoneMap() {
  if (!store.data.topicsDone) store.data.topicsDone = {};
  return store.data.topicsDone;
}
function topicProgress(ch) {
  if (!ch.topics) return null;
  const done = topicDoneMap();
  const d = ch.topics.filter(t => done[topicKey(ch.id, t.id)]).length;
  return { done: d, total: ch.topics.length };
}
function topicKindLabel(kind) {
  return { words: 'Words', sounds: 'Sounds', dialogue: 'Dialogue', grammar: 'Grammar', quiz: 'Quiz', speak: 'Speak' }[kind] || kind;
}
function completeTopic(chId, topicId) {
  const done = topicDoneMap();
  const key = topicKey(chId, topicId);
  if (!done[key]) { done[key] = Date.now(); store.addXP(5); toast('Topic done! +5 XP '); }
  const ch = CHAPTERS[chId];
  if (ch && ch.topics && ch.topics.every(t => done[topicKey(chId, t.id)]) && !store.data.completed[chId]) {
    store.data.completed[chId] = { score: 0, at: Date.now() };
    store.save();
    toast('Chapter complete! ');
  } else store.save();
  render();
}
function speakTopicDialogue(chId, topicId) {
  const ch = CHAPTERS[chId]; if (!ch || !ch.topics) return;
  const t = ch.topics.find(x => x.id === topicId); if (!t || !t.lines) return;
  speakLines(t.lines.map(d => d.de), false);
  toast('Playing dialogue…');
}
function allVocab() {
  const out = [];
  Object.values(CHAPTERS).forEach(ch => {
    (ch.vocab || []).forEach((v, i) => out.push({ key: ch.id + ':' + i, ch: ch.id, level: ch.level, title: ch.title, ...v }));
  });
  NURSING.words.forEach((v, i) => out.push({ key: 'nursing:' + i, ch: 'nursing', level: 'Pflege', title: 'Nursing words', ...v }));
  PODCAST.glossary.forEach((v, i) => out.push({ key: 'podcast:' + i, ch: 'podcast', level: 'A1', title: 'Podcast glossary', ...v }));
  return out;
}
function nextIncomplete() {
  for (const lv of LEVELS) {
    for (const ch of chapterList(lv.id)) {
      if (!ch.syllabus && !store.data.completed[ch.id]) return ch;
    }
  }
  return null;
}
function nextBar(text, route, label) {
  return '<div class="nextbar"><p class="small">' + esc(text) + '</p>' +
    '<button class="btn red" style="margin-top:8px" onclick="go(\'' + route + '\')">' + esc(label) + ' →</button></div>';
}
function voiceNote() {
  if (!Speech.noVoice || store.data.voiceNoteDismissed) return '';
  let h = '<div class="voice-note"><p><b>German voice not found.</b> Speaker buttons will use your default voice. <a href="javascript:void(0)" onclick="toggleVoiceNote()">Details</a></p>' +
    '<button class="voice-close" aria-label="Dismiss this notice" onclick="dismissVoiceNote()">' + IC.x + '</button></div>';
  if (state.voiceNoteOpen) {
    h += '<div class="voice-note-details"><p>To hear real German pronunciation, install a German voice in your system text-to-speech settings (Android: Settings → Language → Text-to-speech → German). The app itself does not record your voice or send audio anywhere.</p>' +
      '<button class="btn small ghost" onclick="speakText(\'Guten Tag! Ich heiße Anna.\')">Test voice</button></div>';
  }
  return h;
}
function dismissVoiceNote() { store.data.voiceNoteDismissed = true; store.save(); render(); }
function toggleVoiceNote() { state.voiceNoteOpen = !state.voiceNoteOpen; render(); }

/* ================= Router ================= */
let state = { tab: 'listen', quiz: {}, quizDone: {}, trainer: null, mock: null, topicQuiz: null, cardFilter: 'due', cardIdx: 0, cardFlipped: false, cardQueue: [], cardSession: 0, searchQ: '', vocabFilter: 'all', vocabQ: '', voiceNoteOpen: false };
let lastPage = '';
let lastHash = '';
const scrollPos = {}; // route -> scrollY, so Back returns to where you were instead of the top

function render() {
  stopSpeak();
  const hash = (location.hash || '#/home').replace(/^#\//, '');
  const parts = hash.split('/');
  const page = parts[0] || 'home';
  const routeChanged = hash !== lastHash;
  if (routeChanged && lastHash) scrollPos[lastHash] = window.scrollY || 0;
  const view = document.getElementById('view');
  const navPage = page === 'trainer' ? 'vocab' : page;
  document.querySelectorAll('#bottomnav button').forEach(b => {
    b.classList.toggle('active', b.dataset.nav === navPage || (page === 'chapter' && b.dataset.nav === 'learn') || (page === 'topic' && b.dataset.nav === 'learn') || (page === 'level' && b.dataset.nav === 'learn'));
  });
  const st = document.getElementById('streakTop'); if (st) st.textContent = store.data.streak;
  updateSpeedBtn();
  if (page === 'home') view.innerHTML = viewHome();
  else if (page === 'learn') view.innerHTML = viewLearn();
  else if (page === 'level') view.innerHTML = viewLevel(parts[1]);
  else if (page === 'chapter') view.innerHTML = viewChapter(parts[1]);
  else if (page === 'topic') view.innerHTML = viewTopic(parts[1], parts[2]);
  else if (page === 'cards') {
    // rebuild the queue when arriving from another screen, so words added
    // since the last visit (e.g. "Add to flashcards") show up
    if (lastPage !== 'cards') { state.cardQueue = buildCardQueue(state.cardFilter); state.cardIdx = 0; state.cardFlipped = false; }
    view.innerHTML = viewCards();
  }
  else if (page === 'trainer') view.innerHTML = viewTrainer();
  else if (page === 'vocab') view.innerHTML = viewVocab();
  else if (page === 'podcast') view.innerHTML = viewPodcast();
  else if (page === 'nursing') view.innerHTML = viewNursing();
  else if (page === 'mock') view.innerHTML = viewMock(parts[1] || 'A1');
  else if (page === 'mocks') view.innerHTML = viewMocks();
  else if (page === 'search') view.innerHTML = viewSearch();
  else if (page === 'progress') view.innerHTML = viewProgress();
  else if (page === 'privacy') view.innerHTML = viewPrivacy();
  else if (page === 'terms') view.innerHTML = viewTerms();
  else if (page === 'about') view.innerHTML = viewAbout();
  else view.innerHTML = viewHome();
  // Only move the scroll when the route actually changed. Same-screen
  // re-renders (answering a quiz, flipping a card, switching a tab) must
  // leave the user exactly where they were. On a route change, go back to
  // the saved position for a visited route, else to the top.
  if (routeChanged) {
    if (scrollPos[hash] !== undefined) window.scrollTo(0, scrollPos[hash]);
    else window.scrollTo(0, 0);
  }
  lastPage = page;
  lastHash = hash;
  if (page === 'mock' && state.mock && state.mock.running) startMockTimer();
}
window.addEventListener('hashchange', render);

/* Global click delegation: speaker buttons + flashcard flip */
document.addEventListener('click', (e) => {
  const say = e.target.closest('[data-say]');
  if (say) { speakText(say.dataset.say); return; }
  const flip = e.target.closest('[data-flip]');
  if (flip) { state.cardFlipped = !state.cardFlipped; render(); return; }
});

/* ================= Home ================= */
function viewHome() {
  const next = nextIncomplete();
  const totalFull = Object.values(CHAPTERS).filter(c => !c.syllabus).length;
  const doneFull = Object.values(CHAPTERS).filter(c => !c.syllabus && store.data.completed[c.id]).length;
  const dueCount = dueCards().length;
  const wordsKnown = Object.keys(store.data.cards).length;
  let h = '';
  h += voiceNote();
  h += '<div class="hero"><div class="hero-rule" aria-hidden="true"></div><p class="hero-eyebrow">Deutsch Lernen · A1 – C1</p>' +
    '<h1>Speak German, step by step.</h1>' +
    '<p>Short lessons. Real sentences. Tap the speaker to hear every word. Free — no login, no ads.</p>' +
    (next
      ? '<button class="btn red" onclick="go(\'chapter/' + next.id + '\')">Continue: ' + esc(next.level + ' · Chapter ' + next.n + ' — ' + next.title) + ' →</button>'
      : '<button class="btn red" onclick="go(\'learn\')">Start learning →</button>') +
    '</div>';
  h += '<div class="stat-row">' +
    '<div class="stat"><b>' + store.data.xp + '</b><span>XP</span></div>' +
    '<div class="stat"><b>' + IC.flame + ' ' + store.data.streak + '</b><span>Streak</span></div>' +
    '<div class="stat"><b>' + doneFull + '/' + totalFull + '</b><span>Lessons</span></div>' +
    '<div class="stat"><b>' + wordsKnown + '</b><span>Cards</span></div></div>';
  h += '<div class="card tight"><div class="row"><div class="grow"><b>Your progress</b><div class="small">' + doneFull + ' of ' + totalFull + ' full lessons complete</div></div><b>' + Math.round(doneFull / totalFull * 100) + '%</b></div>' +
    '<div class="progress-track mt"><div class="progress-fill" style="width:' + Math.round(doneFull / totalFull * 100) + '%"></div></div></div>';
  h += '<h2>Your path — A1 to C1</h2>';
  LEVELS.forEach(lv => {
    const p = levelProgress(lv.id);
    const pct = p.full ? Math.round(p.done / p.full * 100) : 0;
    const status = '<span class="tag">' + p.full + ' of ' + p.total + ' chapters ready</span>';
    h += '<div class="card level-card" onclick="go(\'level/' + lv.id + '\')" style="cursor:pointer">' +
      '<div class="level-badge ' + (p.done === p.full && p.full ? 'done' : (p.done > 0 ? 'open' : 'locked')) + '">' + lv.id + '</div>' +
      '<div class="grow"><h3>' + esc(lv.name) + '</h3><p>' + esc(lv.desc) + '</p>' + status +
      '<div class="progress-track" style="margin-top:8px"><div class="progress-fill gold" style="width:' + pct + '%"></div></div></div></div>';
  });
  h += '<h2>All sections</h2>';
  h += '<div class="sections-grid">' +
    sectionCard('learn', 'Learn', 'Lessons in tiny topics, A1 to C1.', doneFull + '/' + totalFull + ' lessons done', 'learn') +
    sectionCard('cards', 'Flashcards', 'Spaced repetition for every word you learn.', dueCount + ' due now', 'cards') +
    sectionCard('vocab', 'Vocabulary', 'Every word, searchable by level and chapter.', allVocab().length + ' words', 'vocab') +
    sectionCard('mock', 'Mock tests', 'Goethe-style practice tests, one per level.', store.data.mockBest !== null ? 'A1 best: ' + store.data.mockBest + '/100' : 'A1 mock ready', 'mocks') +
    sectionCard('podcast', 'Podcast', 'German Day 1 — Zero se Start.', '10:08 · listen & repeat', 'podcast') +
    sectionCard('nursing', 'Nursing', 'Hospital German for Pflege.', '26 words · 14 phrases', 'nursing') +
    sectionCard('progress', 'Progress', 'XP, streak and per-level progress.', store.data.xp + ' XP · ' + store.data.streak + '-day streak', 'progress') +
    '</div>';
  h += nextBar('Not sure where to start? Start at A1 Chapter 1 — it begins from absolute zero.', 'chapter/A1-1', 'Start A1 Chapter 1');
  return h;
}
function sectionCard(icon, title, desc, status, route) {
  return '<button class="section-card" onclick="go(\'' + route + '\')">' +
    '<span class="section-ic">' + IC[icon] + '</span><b>' + esc(title) + '</b>' +
    '<span class="section-desc">' + esc(desc) + '</span>' +
    '<span class="section-status">' + esc(status) + '</span></button>';
}

/* ================= Learn (level list) ================= */
function viewLearn() {
  let h = '<p class="kicker">Learn</p><h1>Choose your level</h1>' +
    '<p class="lead">All 5 levels are complete — 60 chapters in tiny 2–4 minute topics. Pick your level and start.</p>';
  LEVELS.forEach(lv => {
    const p = levelProgress(lv.id);
    h += '<div class="card level-card" onclick="go(\'level/' + lv.id + '\')" style="cursor:pointer">' +
      '<div class="level-badge ' + (p.done === p.full && p.full ? 'done' : (p.done > 0 ? 'open' : 'locked')) + '">' + lv.id + '</div>' +
      '<div class="grow"><h3>' + esc(lv.name) + '</h3><p>' + esc(lv.goal) + '</p>' +
      '<span class="tag">' + p.done + ' / ' + p.full + ' full chapters done</span>' +
      (p.read ? '<span class="tag green">' + p.read + ' syllabus chapters read</span>' : '') +
      '<div class="chip-row"><span class="chip">' + esc(lv.vocab) + '</span><span class="chip">' + esc(lv.hours) + '</span><span class="chip">' + esc(lv.book) + '</span></div></div></div>';
  });
  h += nextBar('Finished a level? Take its mock test to check your score before moving on.', 'mocks', 'Take a mock test');
  return h;
}

/* ================= Level page ================= */
function viewLevel(levelId) {
  const lv = LEVELS.find(l => l.id === levelId);
  if (!lv) return '<p class="empty">Level not found.</p>';
  const rev = REVISION[levelId];
  const p = levelProgress(levelId);
  let h = '<p class="kicker">' + esc(lv.id) + ' · ' + esc(lv.book) + '</p><h1>' + esc(lv.name) + '</h1>' +
    '<p class="lead">' + esc(lv.desc) + '</p>' +
    '<div class="chip-row mb"><span class="chip">' + esc(lv.vocab) + '</span><span class="chip">' + esc(lv.hours) + '</span><span class="chip">' + esc(lv.goal) + '</span></div>';
  h += '<div class="recap-box"><h3>' + esc(rev.title) + '</h3><p>' + esc(rev.sub) + '</p><ul>' +
    rev.points.map(pt => '<li>' + esc(pt) + '</li>').join('') + '</ul></div>';
  h += '<h2>Chapters</h2>';
  chapterList(levelId).forEach(ch => {
    const done = store.data.completed[ch.id];
    const read = store.data.read[ch.id];
    const tp = topicProgress(ch);
    h += '<button class="chapter-row ' + (done ? 'done' : '') + '" onclick="go(\'chapter/' + ch.id + '\')">' +
      '<span class="ch-num">' + ch.n + '</span>' +
      '<span class="t"><b>' + esc(ch.title) + ' ' + (done ? '<span class="done-mark">✓</span>' : '') + (ch.syllabus ? ' <span class="tag grey">Syllabus</span>' : '') + '</b>' +
      '<span>' + esc(ch.concept) + ' · ' + esc(ch.time) + (tp ? ' · ' + tp.done + '/' + tp.total + ' topics' : '') + (ch.syllabus ? ' · core words + grammar' : '') + (read && ch.syllabus ? ' · read ✓' : '') + '</span></span>' +
      '<span class="arrow">›</span></button>';
  });
  if (mockFor(levelId)) {
    const best = store.data.mockBests ? store.data.mockBests[levelId] : null;
    h += '<div class="card"><h3 style="margin-top:0">' + levelId + ' Mock Test</h3><p>Goethe-style practice test: 20 questions, 20 minutes, pass at 60%. Practice only — not an official certificate.' +
      (best !== null && best !== undefined ? ' Your best score: <b>' + best + '/100</b>.' : '') + '</p>' +
      '<button class="btn red" onclick="startMock(\'' + levelId + '\')">Start the mock test →</button></div>';
  }
  h += nextBar('What to do next: finish one chapter, then review its words in flashcards.', 'cards', 'Review flashcards');
  return h;
}

/* ================= Chapter page ================= */
function viewChapter(chId) {
  const ch = CHAPTERS[chId];
  if (!ch) return '<p class="empty">Chapter not found.</p>';
  if (ch.topics) return viewChapterTopics(ch);
  const tabs = ch.syllabus ? ['words', 'grammar'] : ['listen', 'words', 'grammar', 'quiz', 'speak'];
  const tabNames = { listen: 'Listen', words: 'Words', grammar: 'Grammar', quiz: 'Quiz', speak: 'Speak' };
  if (!tabs.includes(state.tab)) state.tab = tabs[0];
  let h = '<p class="kicker">' + esc(ch.level) + ' · Chapter ' + ch.n + ' · ' + esc(ch.time) + '</p>' +
    '<h1>' + esc(ch.title) + '</h1><p class="lead">' + esc(ch.concept) + '</p>';
  if (ch.syllabus) {
    h += '<div class="note-box"><b>Syllabus chapter.</b> The full lesson is coming soon. For now, learn the core words and the grammar point below — they are the real content of this chapter, not an empty page.</div>';
  }
  h += '<div class="tabs">' + tabs.map(t =>
    '<button class="tab ' + (state.tab === t ? 'active' : '') + '" onclick="setTab(\'' + t + '\')">' + tabNames[t] + '</button>').join('') + '</div>';
  if (state.tab === 'listen' && !ch.syllabus) h += tabListen(ch);
  if (state.tab === 'words') h += tabWords(ch);
  if (state.tab === 'grammar') h += tabGrammar(ch);
  if (state.tab === 'quiz' && !ch.syllabus) h += tabQuiz(ch);
  if (state.tab === 'speak' && !ch.syllabus) h += tabSpeak(ch);
  const done = store.data.completed[ch.id];
  if (!ch.syllabus) {
    h += '<div class="card tight"><div class="row"><div class="grow"><b>' + (done ? '✓ Lesson complete — well done!' : 'Finished this lesson?') + '</b><div class="small">' + (done ? 'Score: ' + done.score + '/5 on the quiz.' : 'Tap below when you finish — it saves your progress.') + '</div></div>' +
      '<button class="btn small ' + (done ? 'ghost' : 'gold') + '" onclick="finishChapter(\'' + ch.id + '\')">' + (done ? 'Done ✓' : 'Finish lesson ✓') + '</button></div></div>';
  } else {
    h += '<div class="card tight"><div class="row"><div class="grow"><b>Read the core words?</b><div class="small">Mark this syllabus chapter as read to track it.</div></div>' +
      '<button class="btn small ' + (store.data.read[ch.id] ? 'ghost' : 'gold') + '" onclick="markRead(\'' + ch.id + '\')">' + (store.data.read[ch.id] ? 'Read ✓' : 'Mark as read') + '</button></div></div>';
  }
  h += nextBar(ch.next || 'What to do next: review these words in flashcards.', 'cards', 'Review flashcards');
  return h;
}
/* ---- Chapter page for topic chapters (A1): organised topic list, no long page ---- */
function viewChapterTopics(ch) {
  const tp = topicProgress(ch);
  const list = chapterList(ch.level);
  const idx = list.findIndex(c => c.id === ch.id);
  const nextCh = list[idx + 1];
  const nextRoute = nextCh ? 'chapter/' + nextCh.id : (ch.level === 'A1' ? 'mock' : 'learn');
  const nextLabel = nextCh ? 'Next: ' + nextCh.title : (ch.level === 'A1' ? 'Take the A1 mock test' : 'Back to lessons');
  let h = '<p class="kicker">' + esc(ch.level) + ' · Chapter ' + ch.n + ' · ' + esc(ch.time) + '</p>' +
    '<h1>' + esc(ch.title) + '</h1><p class="lead">' + esc(ch.concept) + '</p>';
  h += '<div class="card tight"><div class="row"><div class="grow"><b>' + tp.done + ' of ' + tp.total + ' topics done</b><div class="small">Each topic takes 2–4 minutes. Finish all ' + tp.total + ' to complete the chapter.</div></div><b>' + Math.round(tp.done / tp.total * 100) + '%</b></div>' +
    '<div class="progress-track mt"><div class="progress-fill gold" style="width:' + Math.round(tp.done / tp.total * 100) + '%"></div></div></div>';
  h += '<h2>Topics</h2>';
  ch.topics.forEach((t, i) => {
    const done = topicDoneMap()[topicKey(ch.id, t.id)];
    h += '<button class="chapter-row ' + (done ? 'done' : '') + '" onclick="go(\'topic/' + ch.id + '/' + t.id + '\')">' +
      '<span class="ch-num">' + (i + 1) + '</span>' +
      '<span class="t"><b>' + esc(t.title) + ' ' + (done ? '<span class="done-mark">✓</span>' : '') + '</b>' +
      '<span>' + esc(topicKindLabel(t.kind)) + ' · ' + esc(t.time) + '</span></span>' +
      '<span class="arrow">›</span></button>';
  });
  h += '<div class="recap-box"><h3>1-minute recap</h3><ul>' + ch.recap.map(r => '<li>' + esc(r) + '</li>').join('') + '</ul></div>';
  if (ch.tip) h += '<div class="tip-box"><b>Memory tip:</b> ' + esc(ch.tip) + '</div>';
  if (ch.extra) {
    h += '<div class="card"><h3 style="margin-top:0">Extra practice — try these</h3>';
    ch.extra.forEach(ex => {
      h += '<div class="kv"><div><b>' + esc(ex.q) + '</b><div class="small">Answer: ' + esc(ex.a) + '</div></div>' + speakBtn(ex.a) + '</div>';
    });
    h += '</div>';
  }
  h += '<button class="btn" onclick="addChapterToCards(\'' + ch.id + '\')">Add these words to flashcards →</button>';
  if (store.data.completed[ch.id]) h += '<div class="card tight"><div class="row"><div class="grow"><b>✓ Chapter complete — well done!</b><div class="small">All ' + tp.total + ' topics done.</div></div></div></div>';
  h += nextBar(ch.next || 'What to do next: review these words in flashcards.', nextRoute, nextLabel);
  return h;
}

/* ---- One tiny topic: a single focused screen ---- */
function viewTopic(chId, topicId) {
  const ch = CHAPTERS[chId];
  if (!ch || !ch.topics) return '<p class="empty">Topic not found.</p>';
  const idx = ch.topics.findIndex(t => t.id === topicId);
  if (idx < 0) return '<p class="empty">Topic not found.</p>';
  const t = ch.topics[idx];
  const tp = topicProgress(ch);
  const done = !!topicDoneMap()[topicKey(chId, topicId)];
  const prev = ch.topics[idx - 1], next = ch.topics[idx + 1];
  const quizGate = t.kind === 'quiz' && !(state.topicQuiz && state.topicQuiz.key === topicKey(chId, t.id) && state.topicQuiz.finished);
  let h = '<p class="kicker">' + esc(ch.level) + ' · Chapter ' + ch.n + ' · Topic ' + (idx + 1) + ' of ' + ch.topics.length + '</p>' +
    '<h1>' + esc(t.title) + '</h1>' +
    '<p class="lead">' + esc(topicKindLabel(t.kind)) + ' · ' + esc(t.time) + ' · ' + tp.done + '/' + tp.total + ' topics done in this chapter</p>' +
    '<div class="progress-track mb"><div class="progress-fill gold" style="width:' + Math.round(tp.done / tp.total * 100) + '%"></div></div>';
  h += topicContentHTML(ch, t);
  h += '<div class="card tight"><div class="row"><div class="grow"><b>' + (done ? '✓ Topic done!' : (quizGate ? 'Answer the quiz first' : 'Finished this topic?')) + '</b><div class="small">' + (done ? 'Nice work — this topic is ticked off.' : (quizGate ? 'Answer all the questions above to finish this topic.' : 'Tap below to tick it off and earn +5 XP.')) + '</div></div>' +
    '<button class="btn small ' + (done ? 'ghost' : 'gold') + '" ' + (quizGate ? 'disabled' : '') + ' onclick="completeTopic(\'' + chId + '\',\'' + t.id + '\')">' + (done ? 'Done ✓' : 'Mark as done ✓ (+5 XP)') + '</button></div></div>';
  h += '<div class="btn-row">' +
    (prev ? '<button class="btn small ghost" onclick="go(\'topic/' + chId + '/' + prev.id + '\')">← ' + esc(prev.title) + '</button>' : '') +
    (next ? '<button class="btn small" onclick="go(\'topic/' + chId + '/' + next.id + '\')">Next topic: ' + esc(next.title) + ' →</button>'
      : '<button class="btn small gold" onclick="go(\'chapter/' + chId + '\')">Back to chapter ✓</button>') +
    '</div>';
  h += '<p class="small mt" style="text-align:center"><a href="javascript:void(0)" onclick="go(\'chapter/' + chId + '\')">← Back to ' + esc(ch.title) + '</a></p>';
  return h;
}
function topicContentHTML(ch, t) {
  if (t.kind === 'words') {
    let h = '<div class="card"><h3 style="margin-top:0">Words — ' + t.vocab.length + ' new words</h3>' +
      '<p class="small">Every word has a pronunciation hint and a speaker button. Tap the speaker button to hear it. Say each word out loud 3 times.</p>';
    t.vocab.forEach(v => {
      h += '<div class="vocab-row"><div class="txt"><div class="de">' +
        (v.art ? '<span class="art">' + esc(v.art) + '</span> ' : '') + esc(v.de) +
        (v.pl ? ' <span class="plural">· plural: die ' + esc(v.pl) + '</span>' : '') + '</div>' +
        '<div class="ph">' + esc(v.ph) + '</div><div class="en">' + esc(v.en) + '</div></div>' +
        speakBtn((v.art ? v.art + ' ' : '') + v.de) + '</div>';
    });
    return h + '</div>';
  }
  if (t.kind === 'sounds') {
    let h = '<div class="card"><h3 style="margin-top:0">Sounds to learn first</h3>';
    t.sounds.forEach(s => {
      h += '<div class="kv"><div><b>' + esc(s.de) + '</b><div class="small">' + esc(s.en) + '</div></div><span class="small" style="color:var(--red);font-weight:700">' + esc(s.ph) + '</span></div>';
    });
    h += '<p class="small mt">Three golden rules: (1) W = V, V = F, J = Y. (2) Every noun starts with a capital letter. (3) What is written is spoken — almost no silent letters.</p></div>';
    if (t.grammar) h += topicGrammarHTML(t.grammar);
    return h;
  }
  if (t.kind === 'dialogue') {
    let h = '<div class="card"><h3 style="margin-top:0">Listen & repeat</h3>' +
      '<p class="small">Tap the speaker button on any line to hear it. Tap "Play all" to hear the whole dialogue. Say each line out loud after you hear it.</p>' +
      '<div class="btn-row mb"><button class="btn small" onclick="speakTopicDialogue(\'' + ch.id + '\',\'' + t.id + '\')">Play all</button>' +
      '<button class="btn small ghost" onclick="stopSpeak()">Stop</button></div>';
    t.lines.forEach(d => {
      h += '<div class="dialogue-line"><div class="who ' + (d.who === 'B' ? 'b' : '') + '">' + d.who + '</div>' +
        '<div class="txt"><div class="de">' + esc(d.de) + '</div><div class="ph">' + esc(d.ph) + '</div><div class="en">' + esc(d.en) + '</div></div>' +
        speakBtn(d.de) + '</div>';
    });
    h += '</div>';
    if (t.speak) {
      const lines = Array.isArray(t.speak.model) ? t.speak.model : [t.speak.model];
      h += '<div class="card"><h3 style="margin-top:0">Speak — say it out loud</h3>' +
        '<p class="small">Speaking is the fastest way to remember. Tap a line, listen, then repeat it — 3 times each.</p>';
      lines.forEach(line => {
        h += '<div class="kv"><div><b>' + esc(line) + '</b></div>' + speakBtn(line) + '</div>';
      });
      h += '<p class="small mt"><b>Your task:</b> ' + esc(t.speak.prompt) + '</p></div>';
    }
    return h;
  }
  if (t.kind === 'grammar') return topicGrammarHTML(t.grammar);
  if (t.kind === 'quiz') return topicQuizHTML(ch, t);
  return '<p class="empty">Nothing here yet.</p>';
}
function topicGrammarHTML(g) {
  let h = '<div class="grammar-box"><h3>' + esc(g.title) + '</h3>' +
    '<p>' + esc(g.plain) + '</p><p class="rule">' + esc(g.rule) + '</p></div>';
  if (g.examples) {
    h += '<div class="card"><h3 style="margin-top:0">Examples — tap to hear</h3>';
    g.examples.forEach(ex => {
      h += '<div class="example"><div class="row"><div class="grow"><div class="de">' + esc(ex.de) + '</div><div class="ph" style="color:var(--red);font-weight:600;font-size:14px">' + esc(ex.ph) + '</div><div class="en">' + esc(ex.en) + '</div></div>' + speakBtn(ex.de, 'small') + '</div></div>';
    });
    h += '</div>';
  }
  return h;
}
function topicQuizState(chId, t) {
  const key = topicKey(chId, t.id);
  if (!state.topicQuiz || state.topicQuiz.key !== key) {
    state.topicQuiz = { key, idx: 0, answers: {}, score: 0, picked: null, finished: false };
  }
  return state.topicQuiz;
}
function topicQuizHTML(ch, t) {
  const qz = topicQuizState(ch.id, t);
  const total = t.questions.length;
  let h = '<div class="card"><h3 style="margin-top:0">Quick quiz — ' + total + ' questions</h3>' +
    '<p class="small">Wrong answers explain <b>why</b> — read the explanation before moving on.</p>';
  if (qz.finished) {
    const pass = qz.score >= Math.ceil(total / 2);
    h += '<div class="result-box ' + (pass ? 'pass' : 'fail') + '"><b>Your score: ' + qz.score + ' / ' + total + '</b><br>' +
      (pass ? ' Well done! Mark this topic done below.' : 'Keep going — read the explanations, then try again.') + '</div>' +
      '<button class="btn small ghost mt" onclick="restartTopicQuiz()">Restart quiz</button></div>';
    return h;
  }
  const q = t.questions[qz.idx];
  const picked = qz.picked;
  h += '<p class="small">Question ' + (qz.idx + 1) + ' of ' + total + ' · Score: ' + qz.score + '</p>' +
    '<div class="quiz-q"><p><b>' + (qz.idx + 1) + '.</b> ' + esc(q.q) + ' ' + speakBtn(q.q) + '</p>';
  q.options.forEach((opt, oi) => {
    let cls = 'opt';
    if (picked !== null) {
      if (oi === q.answer) cls += ' correct';
      else if (oi === picked) cls += ' wrong';
      else cls += ' dim';
    }
    h += '<button class="' + cls + '" ' + (picked !== null ? 'disabled' : '') + ' onclick="answerTopicQuiz(' + oi + ')">' + '<span class="opt-letter">' + optLetter(oi) + '</span>' + esc(opt) + '</button>';
  });
  if (picked !== null) {
    h += '<div class="feedback ' + (picked === q.answer ? 'good' : 'bad') + '"><b>' + (picked === q.answer ? IC.check + ' Correct!' : IC.x + ' Not quite.') + '</b> ' + esc(q.why) + '</div>' +
      '<button class="btn mt" onclick="nextTopicQuiz()">' + (qz.idx === total - 1 ? 'See result →' : 'Next →') + '</button>';
  }
  h += '</div></div>';
  return h;
}
function answerTopicQuiz(oi) {
  const qz = state.topicQuiz; if (!qz || qz.picked !== null || qz.finished) return;
  const parts = qz.key.split(':');
  const ch = CHAPTERS[parts[0]]; const t = ch.topics.find(x => x.id === parts[1]);
  qz.picked = oi; qz.answers[qz.idx] = oi;
  if (oi === t.questions[qz.idx].answer) { qz.score++; store.addXP(2); }
  render();
}
function nextTopicQuiz() {
  const qz = state.topicQuiz; if (!qz) return;
  qz.picked = null; qz.idx++;
  const parts = qz.key.split(':');
  const ch = CHAPTERS[parts[0]]; const t = ch.topics.find(x => x.id === parts[1]);
  if (qz.idx >= t.questions.length) qz.finished = true;
  render();
}
function restartTopicQuiz() {
  if (state.topicQuiz) state.topicQuiz = { key: state.topicQuiz.key, idx: 0, answers: {}, score: 0, picked: null, finished: false };
  render();
}
function setTab(t) { state.tab = t; render(); }
function finishChapter(chId) {
  const score = (state.quizDone[chId] && state.quizDone[chId].score) || (store.data.completed[chId] ? store.data.completed[chId].score : 0);
  store.completeChapter(chId, score);
  toast('Lesson complete! +10 XP ');
  render();
}
function markRead(chId) { store.markRead(chId); toast('Marked as read. +5 XP'); render(); }

/* ---- Chapter tab: Listen (dialogue) ---- */
function tabListen(ch) {
  let h = '<div class="card"><h3 style="margin-top:0">Listen & repeat</h3>' +
    '<p class="small">Tap the speaker button on any line to hear it. Tap "Play all" to hear the whole dialogue. Say each line out loud after you hear it.</p>' +
    '<div class="btn-row mb"><button class="btn small" onclick="speakDialogue(\'' + ch.id + '\', false)">Play all</button>' +
    '<button class="btn small ghost" onclick="speakDialogue(\'' + ch.id + '\', true)">Loop</button>' +
    '<button class="btn small ghost" onclick="stopSpeak()">Stop</button></div>';
  ch.dialogue.forEach((d, i) => {
    h += '<div class="dialogue-line"><div class="who ' + (d.who === 'B' ? 'b' : '') + '">' + d.who + '</div>' +
      '<div class="txt"><div class="de">' + esc(d.de) + '</div><div class="ph">' + esc(d.ph) + '</div><div class="en">' + esc(d.en) + '</div></div>' +
      speakBtn(d.de) + '</div>';
  });
  h += '</div>';
  if (ch.sounds) {
    h += '<div class="card"><h3 style="margin-top:0">Sounds to learn first</h3>';
    ch.sounds.forEach(s => {
      h += '<div class="kv"><div><b>' + esc(s.de) + '</b><div class="small">' + esc(s.en) + '</div></div><span class="small" style="color:var(--red);font-weight:700">' + esc(s.ph) + '</span></div>';
    });
    h += '<p class="small mt">Three golden rules: (1) W = V, V = F, J = Y. (2) Every noun starts with a capital letter. (3) What is written is spoken — almost no silent letters.</p></div>';
  }
  h += '<button class="btn" onclick="setTab(\'words\')">Next: Words →</button>';
  return h;
}

/* ---- Chapter tab: Words ---- */
function tabWords(ch) {
  let h = '<div class="card"><h3 style="margin-top:0">Words — ' + ch.vocab.length + ' new words</h3>' +
    '<p class="small">Every word has a pronunciation hint (how it sounds in English letters) and a speaker button. Tap the speaker button to hear it. Say each word out loud 3 times.</p>';
  ch.vocab.forEach(v => {
    h += '<div class="vocab-row"><div class="txt"><div class="de">' +
      (v.art ? '<span class="art">' + esc(v.art) + '</span> ' : '') + esc(v.de) +
      (v.pl ? ' <span class="plural">· plural: die ' + esc(v.pl) + '</span>' : '') + '</div>' +
      '<div class="ph">' + esc(v.ph) + '</div><div class="en">' + esc(v.en) + '</div></div>' +
      speakBtn((v.art ? v.art + ' ' : '') + v.de) + '</div>';
  });
  h += '</div>';
  h += '<button class="btn" onclick="addChapterToCards(\'' + ch.id + '\')">Add these words to flashcards →</button>';
  if (!ch.syllabus) h += '<button class="btn ghost mt" onclick="setTab(\'grammar\')">Next: Grammar →</button>';
  return h;
}
function addChapterToCards(chId) {
  const ch = CHAPTERS[chId];
  let added = 0;
  (ch.vocab || []).forEach((v, i) => {
    const key = chId + ':' + i;
    if (!store.data.cards[key]) { store.data.cards[key] = { ivl: 0, due: 0, again: 0 }; added++; }
  });
  store.save();
  toast(added ? added + ' words added to flashcards.' : 'These words are already in your flashcards.');
}

/* ---- Chapter tab: Grammar ---- */
function tabGrammar(ch) {
  const g = ch.grammar;
  let h = '<div class="grammar-box"><h3>' + esc(g.title) + '</h3>' +
    '<p>' + esc(g.plain) + '</p><p class="rule">' + esc(g.rule) + '</p></div>';
  if (g.examples) {
    h += '<div class="card"><h3 style="margin-top:0">Examples — tap to hear</h3>';
    g.examples.forEach(ex => {
      h += '<div class="example"><div class="row"><div class="grow"><div class="de">' + esc(ex.de) + '</div><div class="ph" style="color:var(--red);font-weight:600;font-size:14px">' + esc(ex.ph) + '</div><div class="en">' + esc(ex.en) + '</div></div>' + speakBtn(ex.de, 'small') + '</div></div>';
    });
    h += '</div>';
  }
  if (ch.tip) h += '<div class="tip-box"><b>Memory tip:</b> ' + esc(ch.tip) + '</div>';
  if (!ch.syllabus) h += '<button class="btn" onclick="setTab(\'quiz\')">Next: Quiz →</button>';
  return h;
}

/* ---- Chapter tab: Quiz ---- */
function tabQuiz(ch) {
  const qz = state.quiz[ch.id] || (state.quiz[ch.id] = { answers: {}, score: 0, finished: false });
  const done = state.quizDone[ch.id];
  let h = '<div class="card"><h3 style="margin-top:0">Quiz — 5 questions</h3>' +
    '<p class="small">Wrong answers explain <b>why</b> — read the explanation before moving on. Pass: 3 of 5.</p>';
  ch.quiz.forEach((q, qi) => {
    const picked = qz.answers[qi];
    h += '<div class="quiz-q"><p><b>' + (qi + 1) + '.</b> ' + esc(q.q) + ' ' + speakBtn(q.q) + '</p>';
    q.options.forEach((opt, oi) => {
      let cls = 'opt';
      if (picked !== undefined) {
        if (oi === q.answer) cls += ' correct';
        else if (oi === picked) cls += ' wrong';
        else cls += ' dim';
      }
      h += '<button class="' + cls + '" ' + (picked !== undefined ? 'disabled' : '') + ' onclick="answerQuiz(\'' + ch.id + '\',' + qi + ',' + oi + ',this)">' + '<span class="opt-letter">' + optLetter(oi) + '</span>' + esc(opt) + '</button>';
    });
    if (picked !== undefined) {
      h += '<div class="feedback ' + (picked === q.answer ? 'good' : 'bad') + '"><b>' + (picked === q.answer ? IC.check + ' Correct!' : IC.x + ' Not quite.') + '</b> ' + esc(q.why) + '</div>';
    }
    h += '</div>';
  });
  const answered = Object.keys(qz.answers).length;
  if (answered === ch.quiz.length && !done) {
    const score = qz.score;
    state.quizDone[ch.id] = { score };
    store.data.quizBest[ch.id] = Math.max(store.data.quizBest[ch.id] || 0, score);
    store.save();
    h += '<div class="result-box ' + (score >= 3 ? 'pass' : 'fail') + '"><b>Your score: ' + score + ' / 5</b><br>' +
      (score >= 3 ? ' Well done! You passed this chapter. Mark the lesson complete below.' : 'Keep going — read the explanations above, then try the quiz again. Tap "Restart quiz" to retry.') + '</div>' +
      '<button class="btn small ghost mt" onclick="restartQuiz(\'' + ch.id + '\')">Restart quiz</button>';
  }
  h += '</div>';
  if (answered === ch.quiz.length) h += '<button class="btn" onclick="setTab(\'speak\')">Next: Speak & Recap →</button>';
  return h;
}
function answerQuiz(chId, qi, oi, el) {
  const qz = state.quiz[chId];
  if (!qz || qz.answers[qi] !== undefined) return;
  const ch = CHAPTERS[chId];
  qz.answers[qi] = oi;
  if (oi === ch.quiz[qi].answer) { qz.score++; store.addXP(2); }
  render();
}
function restartQuiz(chId) {
  state.quiz[chId] = { answers: {}, score: 0, finished: false };
  delete state.quizDone[chId];
  render();
}

/* ---- Chapter tab: Speak & Recap ---- */
function tabSpeak(ch) {
  let h = '<div class="card"><h3 style="margin-top:0">Speak — say it out loud</h3>' +
    '<p class="small">Speaking is the fastest way to remember. Tap a line, listen, then repeat it — 3 times each.</p>';
  const lines = Array.isArray(ch.speak.model) ? ch.speak.model : [ch.speak.model];
  lines.forEach(line => {
    h += '<div class="kv"><div><b>' + esc(line) + '</b></div>' + speakBtn(line) + '</div>';
  });
  h += '<p class="small mt"><b>Your task:</b> ' + esc(ch.speak.prompt) + '</p></div>';
  h += '<div class="recap-box"><h3>1-minute recap</h3><ul>' +
    ch.recap.map(r => '<li>' + esc(r) + '</li>').join('') + '</ul></div>';
  if (ch.extra) {
    h += '<div class="card"><h3 style="margin-top:0">Extra practice — try these</h3>';
    ch.extra.forEach(ex => {
      h += '<div class="kv"><div><b>' + esc(ex.q) + '</b><div class="small">Answer: ' + esc(ex.a) + '</div></div>' + speakBtn(ex.a) + '</div>';
    });
    h += '</div>';
  }
  h += '<button class="btn gold" onclick="finishChapter(\'' + ch.id + '\')">Finish lesson ✓ (+10 XP)</button>';
  return h;
}

/* ================= Flashcards (SRS) ================= */
function cardState(key) { return store.data.cards[key] || null; }
function dueCards() {
  const now = Date.now();
  return allVocab().filter(v => {
    const c = store.data.cards[v.key];
    return c && c.due <= now;
  });
}
function buildCardQueue(filter) {
  const now = Date.now();
  let items = allVocab();
  if (filter === 'due') items = items.filter(v => { const c = store.data.cards[v.key]; return c && c.due <= now; });
  else if (filter === 'weak') items = items.filter(v => { const c = store.data.cards[v.key]; return c && c.again >= 2; });
  else if (filter === 'new') items = items.filter(v => !store.data.cards[v.key]);
  else if (filter.startsWith('level:')) { const lv = filter.split(':')[1]; items = items.filter(v => v.level === lv); }
  // weak words first, then most overdue
  items.sort((a, b) => {
    const ca = store.data.cards[a.key], cb = store.data.cards[b.key];
    const wa = ca ? ca.again : 0, wb = cb ? cb.again : 0;
    if (wa !== wb) return wb - wa;
    const da = ca ? ca.due : 0, db = cb ? cb.due : 0;
    return da - db;
  });
  return items.slice(0, 30);
}
function viewCards() {
  const filters = [
    { id: 'due', label: 'Due now (' + dueCards().length + ')' },
    { id: 'weak', label: 'Weak words' },
    { id: 'new', label: 'New words' },
    { id: 'all', label: 'All words' },
  ];
  ['A1', 'A2', 'B1', 'B2', 'C1', 'Pflege'].forEach(lv => filters.push({ id: 'level:' + lv, label: lv }));
  let h = '<p class="kicker">Flashcards</p><h1>Flashcards</h1>' +
    '<p class="lead">Tap a card to see the answer. Words you mark "Again" come back first — that is how spaced repetition works.</p>' +
    '<div class="chip-row mb">' + filters.map(f =>
      '<button class="chip ' + (state.cardFilter === f.id ? 'active' : '') + '" onclick="setCardFilter(\'' + f.id + '\')">' + f.label + '</button>').join('') + '</div>';
  const queue = state.cardQueue;
  if (!queue.length) {
    const hasAnyCards = Object.keys(store.data.cards).length > 0;
    if (!hasAnyCards) {
      h += '<div class="card"><h3 style="margin-top:0">No flashcards yet — start here</h3>' +
        '<p>Flashcards are built from the words you learn. Finish A1 Chapter 1 (Letters &amp; Sounds), then tap "Add these words to flashcards" — your first cards will appear here.</p>' +
        '<button class="btn gold" onclick="go(\'chapter/A1-1\')">Start A1 Chapter 1 →</button></div>';
      return h;
    }
    h += '<div class="card empty">No cards in this view. You are all caught up — great work! </div>';
    h += nextBar('What to do next: learn a new chapter to add more words.', 'learn', 'Go to lessons');
    return h;
  }
  const card = queue[state.cardIdx];
  const cs = store.data.cards[card.key];
  h += '<div class="flashcard" data-flip>' +
    '<p class="small" style="color:var(--muted)">' + esc(card.level) + ' · ' + esc(card.title) + ' · Card ' + (state.cardIdx + 1) + ' of ' + queue.length + ' in this session</p>' +
    '<div class="card-front"><div class="de big">' + (card.art ? '<span class="art">' + esc(card.art) + '</span> ' : '') + esc(card.de) + '</div>' +
    '<div class="ph">' + esc(card.ph) + '</div>' +
    '<div class="mt">' + speakBtn((card.art ? card.art + ' ' : '') + card.de) + '</div>' +
    (state.cardFlipped
      ? '<div class="card-back"><div class="en big">' + esc(card.en) + '</div>' +
        (card.pl ? '<div class="small">plural: die ' + esc(card.pl) + '</div>' : '') +
        (cs ? '<div class="small">reviewed ' + (cs.again + (cs.ivl ? 1 : 0)) + '× · interval ' + (cs.ivl || 0) + ' day(s)</div>' : '') + '</div>'
      : '<p class="small mt">Tap the card to see the answer</p>') +
    '</div></div>';
  h += '<div class="srs-row">' +
    '<button class="btn red" onclick="gradeCard(0)">Again</button>' +
    '<button class="btn" onclick="gradeCard(1)">Good</button>' +
    '<button class="btn gold" onclick="gradeCard(2)">Easy</button></div>';
  h += '<p class="small" style="text-align:center">Session: ' + state.cardSession + ' reviewed · +1 XP per card</p>';
  h += nextBar('What to do next: after cards, practise in the vocabulary trainer.', 'trainer', 'Open trainer');
  return h;
}
function setCardFilter(f) {
  state.cardFilter = f; state.cardIdx = 0; state.cardFlipped = false; state.cardSession = 0;
  state.cardQueue = buildCardQueue(f);
  render();
}
function gradeCard(grade) {
  const queue = state.cardQueue;
  const card = queue[state.cardIdx];
  if (!card) return;
  const now = Date.now();
  const c = store.data.cards[card.key] || { ivl: 0, due: 0, again: 0 };
  const steps = [1, 3, 7, 14, 30, 60];
  if (grade === 0) { c.ivl = 0; c.due = now + 10 * 60 * 1000; c.again++; }
  else if (grade === 1) { const i = steps.indexOf(c.ivl); c.ivl = i < 0 ? 1 : steps[Math.min(i + 1, steps.length - 1)]; c.due = now + c.ivl * 864e5; }
  else { c.ivl = c.ivl ? Math.min(c.ivl * 2, 90) : 3; c.due = now + c.ivl * 864e5; }
  store.data.cards[card.key] = c; store.addXP(1); state.cardSession++;
  store.save();
  state.cardFlipped = false;
  state.cardIdx++;
  if (state.cardIdx >= queue.length) {
    toast('Deck finished! ' + state.cardSession + ' cards reviewed. ');
    state.cardQueue = buildCardQueue(state.cardFilter);
    state.cardIdx = 0; state.cardSession = 0;
    if (!state.cardQueue.length) { render(); return; }
  }
  render();
}

/* ================= Vocabulary trainer ================= */
function startTrainer(mode) {
  const pool = allVocab().filter(v => store.data.cards[v.key]);
  const usePool = pool.length >= 10 ? pool : allVocab();
  const qs = [];
  const shuffled = [...usePool].sort(() => Math.random() - 0.5).slice(0, 10);
  shuffled.forEach(item => {
    const wrongs = [...usePool].filter(v => v.key !== item.key).sort(() => Math.random() - 0.5).slice(0, 3);
    const opts = mode === 'de-en'
      ? [item.en, ...wrongs.map(w => w.en)]
      : [item.de, ...wrongs.map(w => w.de)];
    const order = opts.map((o, i) => i).sort(() => Math.random() - 0.5);
    const options = order.map(i => opts[i]);
    qs.push({ item, options, answer: order.indexOf(0), mode });
  });
  state.trainer = { mode, qs, idx: 0, score: 0, picked: null, finished: false };
  render();
}
function viewTrainer() {
  let h = '<p class="kicker">Trainer</p><h1>Vocabulary trainer</h1>' +
    '<p class="lead">10 quick questions. Two directions — pick one and start.</p>' +
    '<div class="btn-row mb"><button class="btn ' + (state.trainer && state.trainer.mode === 'de-en' ? '' : 'ghost') + '" onclick="startTrainer(\'de-en\')">German → English</button>' +
    '<button class="btn ' + (state.trainer && state.trainer.mode === 'en-de' ? '' : 'ghost') + '" onclick="startTrainer(\'en-de\')">English → German</button></div>';
  const t = state.trainer;
  if (!t) {
    h += '<div class="card"><p>Your best trainer score: <b>' + (store.data.trainerBest || 0) + ' / 10</b></p>' +
      '<p class="small">Tip: words you have added to flashcards appear first. New words come from all chapters.</p></div>';
    h += nextBar('What to do next: review flashcards before your next trainer round.', 'cards', 'Review flashcards');
    return h;
  }
  if (t.finished) {
    h += '<div class="result-box ' + (t.score >= 7 ? 'pass' : 'fail') + '"><b>Score: ' + t.score + ' / 10</b><br>' +
      (t.score >= 7 ? ' Strong round! Your German is growing.' : 'Good effort — review the words below and try again.') + '</div>';
    store.data.trainerBest = Math.max(store.data.trainerBest || 0, t.score);
    store.save();
    h += '<button class="btn" onclick="startTrainer(\'' + t.mode + '\')">Play again →</button>';
    h += nextBar('What to do next: open a lesson to learn new words.', 'learn', 'Go to lessons');
    return h;
  }
  const q = t.qs[t.idx];
  h += '<div class="card"><p class="small">Question ' + (t.idx + 1) + ' of 10 · Score: ' + t.score + '</p>' +
    '<p class="big">' + (q.mode === 'de-en' ? '<b>' + (q.item.art ? esc(q.item.art) + ' ' : '') + esc(q.item.de) + '</b> ' + speakBtn((q.item.art ? q.item.art + ' ' : '') + q.item.de) : '<b>' + esc(q.item.en) + '</b>') + '</p>' +
    '<p class="small">' + (q.mode === 'de-en' ? 'What does it mean in English?' : 'What is it in German?') + '</p>';
  q.options.forEach((opt, oi) => {
    let cls = 'opt';
    if (t.picked !== null) {
      if (oi === q.answer) cls += ' correct';
      else if (oi === t.picked) cls += ' wrong';
      else cls += ' dim';
    }
    h += '<button class="' + cls + '" ' + (t.picked !== null ? 'disabled' : '') + ' onclick="answerTrainer(' + oi + ')">' + '<span class="opt-letter">' + optLetter(oi) + '</span>' + esc(opt) + '</button>';
  });
  if (t.picked !== null) {
    h += '<div class="feedback ' + (t.picked === q.answer ? 'good' : 'bad') + '"><b>' + (t.picked === q.answer ? IC.check + ' Correct!' : IC.x + ' The answer is: ' + esc(q.options[q.answer])) + '</b> ' + esc(q.item.de) + ' — ' + esc(q.item.en) + ' (' + esc(q.item.ph) + ')</div>' +
      '<button class="btn mt" onclick="nextTrainer()">' + (t.idx === 9 ? 'See result →' : 'Next →') + '</button>';
  }
  h += '</div>';
  return h;
}
function answerTrainer(oi) {
  const t = state.trainer; if (!t || t.picked !== null) return;
  t.picked = oi;
  if (oi === t.qs[t.idx].answer) { t.score++; store.addXP(2); }
  render();
}
function nextTrainer() {
  const t = state.trainer; if (!t) return;
  t.picked = null; t.idx++;
  if (t.idx >= 10) { t.finished = true; store.addXP(5); }
  render();
}

/* ================= Vocabulary (own section) ================= */
function vocabItems() {
  const all = allVocab();
  const q = (state.vocabQ || '').trim().toLowerCase();
  let items = all;
  if (state.vocabFilter !== 'all') items = items.filter(v => v.level === state.vocabFilter);
  if (q) items = items.filter(v => v.de.toLowerCase().includes(q) || v.en.toLowerCase().includes(q));
  return items;
}
function vocabListHTML(items) {
  if (!items.length) return '<p class="empty">No words match. Try a shorter word or another level.</p>';
  const known = items.filter(v => store.data.cards[v.key]).length;
  const shown = Math.min(state.vocabShown || 200, items.length);
  let h = '<p class="small">' + shown + ' of ' + items.length + ' words shown · ' + known + ' in your flashcards</p><div class="card">';
  let lastCh = null;
  items.slice(0, shown).forEach(v => {
    if (v.ch !== lastCh) { h += '<h3>' + esc(v.level) + ' · ' + esc(v.title) + '</h3>'; lastCh = v.ch; }
    h += '<div class="vocab-row"><div class="txt"><div class="de">' +
      (v.art ? '<span class="art">' + esc(v.art) + '</span> ' : '') + esc(v.de) +
      (v.pl ? ' <span class="plural">· plural: die ' + esc(v.pl) + '</span>' : '') + '</div>' +
      '<div class="ph">' + esc(v.ph) + '</div><div class="en">' + esc(v.en) + '</div></div>' +
      speakBtn((v.art ? v.art + ' ' : '') + v.de) + '</div>';
  });
  if (items.length > shown) h += '<button class="btn ghost mt" onclick="showMoreVocab()">Show more (' + (items.length - shown) + ' remaining) ↓</button>';
  return h + '</div>';
}
function showMoreVocab() { state.vocabShown = (state.vocabShown || 200) + 200; renderVocabList(); }
function viewVocab() {
  const all = allVocab();
  const levels = ['all', 'A1', 'A2', 'B1', 'B2', 'C1', 'Pflege'];
  let h = '<p class="kicker">Vocabulary</p><h1>Vocabulary</h1>' +
    '<p class="lead">Every word in the app — ' + all.length + ' words. Filter by level, search, tap the speaker button to hear each one.</p>' +
    '<input class="search-input mb" type="text" placeholder="Search German or English…" value="' + escAttr(state.vocabQ || '') + '" oninput="state.vocabQ=this.value;state.vocabShown=200;renderVocabList()">' +
    '<div class="chip-row mb">' + levels.map(lv => '<button class="chip ' + (state.vocabFilter === lv ? 'active' : '') + '" onclick="setVocabFilter(\'' + lv + '\')">' + (lv === 'all' ? 'All levels' : lv) + '</button>').join('') + '</div>' +
    '<div id="vocabList">' + vocabListHTML(vocabItems()) + '</div>' +
    '<div class="card"><h3 style="margin-top:0">Test yourself</h3><p>10 quick questions, German → English or English → German.</p>' +
    '<button class="btn" onclick="go(\'trainer\')">Open the vocabulary trainer →</button></div>';
  return h;
}
function setVocabFilter(f) { state.vocabFilter = f; state.vocabShown = 200; render(); }
function renderVocabList() {
  const el = document.getElementById('vocabList');
  if (el) el.innerHTML = vocabListHTML(vocabItems());
}

/* ================= Search ================= */
function viewSearch() {
  const q = (state.searchQ || '').trim().toLowerCase();
  let h = '<p class="kicker">Search</p><h1>Search words & lessons</h1>' +
    '<input class="search-input" type="text" placeholder="Type a German or English word…" value="' + escAttr(state.searchQ || '') + '" oninput="state.searchQ=this.value;renderSearchResults()" autofocus>';
  h += '<div id="searchResults">' + searchResultsHTML(q) + '</div>';
  return h;
}
function searchResultsHTML(q) {
  if (!q) return '<p class="empty">Try "Wasser", "water", "Krankenhaus" or "hello".</p>';
  const hits = allVocab().filter(v => v.de.toLowerCase().includes(q) || v.en.toLowerCase().includes(q)).slice(0, 40);
  const chHits = Object.values(CHAPTERS).filter(c => c.title.toLowerCase().includes(q) || c.concept.toLowerCase().includes(q)).slice(0, 5);
  let h = '';
  if (chHits.length) {
    h += '<h3>Lessons</h3>';
    chHits.forEach(c => { h += '<button class="chapter-row" onclick="go(\'chapter/' + c.id + '\')"><span class="ch-num">' + c.level + '</span><span class="t"><b>' + esc(c.title) + '</b><span>' + esc(c.concept) + '</span></span><span class="arrow">›</span></button>'; });
  }
  if (hits.length) {
    h += '<h3>Words (' + hits.length + ')</h3>';
    hits.forEach(v => {
      h += '<div class="vocab-row"><div class="txt"><div class="de">' + (v.art ? '<span class="art">' + esc(v.art) + '</span> ' : '') + esc(v.de) + '</div><div class="en">' + esc(v.en) + ' · ' + esc(v.level) + ' · ' + esc(v.title) + '</div></div>' + speakBtn((v.art ? v.art + ' ' : '') + v.de) + '</div>';
    });
  } else if (!chHits.length) {
    h += '<p class="empty">No results for "' + esc(q) + '". Try a shorter word.</p>';
  }
  return h;
}
function renderSearchResults() {
  const el = document.getElementById('searchResults');
  if (el) el.innerHTML = searchResultsHTML((state.searchQ || '').trim().toLowerCase());
}

/* ================= Podcast ================= */
function viewPodcast() {
  const p = PODCAST;
  let h = '<p class="kicker">Podcast · German Day 1</p><h1>' + esc(p.title) + '</h1>' +
    '<p class="lead">' + esc(p.desc) + '</p>' +
    '<div class="audio-box"><audio controls preload="metadata" src="' + escAttr(p.file) + '" style="width:100%"></audio>' +
    '<p class="small mt">Duration: ' + esc(p.duration) + ' · Listen with headphones. You can download it for offline listening.</p></div>' +
    '<div class="note-box"><b>How to use it (4-pass routine):</b><br>' + esc(p.routine) + '</div>';
  h += '<div class="card"><h3 style="margin-top:0">Key lines from the episode</h3>';
  p.highlights.forEach(l => {
    h += '<div class="vocab-row"><div class="txt"><div class="de">' + esc(l.de) + '</div><div class="ph">' + esc(l.ph) + '</div><div class="en">' + esc(l.en) + '</div></div>' + speakBtn(l.de) + '</div>';
  });
  h += '</div>';
  h += '<div class="card"><h3 style="margin-top:0">Glossary — 5 words</h3>';
  p.glossary.forEach(v => {
    h += '<div class="vocab-row"><div class="txt"><div class="de">' + (v.art ? '<span class="art">' + esc(v.art) + '</span> ' : '') + esc(v.de) + '</div><div class="ph">' + esc(v.ph) + '</div><div class="en">' + esc(v.en) + '</div></div>' + speakBtn((v.art ? v.art + ' ' : '') + v.de) + '</div>';
  });
  h += '</div>';
  h += '<div class="card"><h3 style="margin-top:0">Quick check — 3 questions</h3>';
  p.quiz.forEach((q, qi) => {
    const picked = state.quiz['podcast'] && state.quiz['podcast'].answers[qi];
    h += '<div class="quiz-q"><p><b>' + (qi + 1) + '.</b> ' + esc(q.q) + '</p>';
    q.options.forEach((opt, oi) => {
      let cls = 'opt';
      if (picked !== undefined) { if (oi === q.answer) cls += ' correct'; else if (oi === picked) cls += ' wrong'; else cls += ' dim'; }
      h += '<button class="' + cls + '" ' + (picked !== undefined ? 'disabled' : '') + ' onclick="answerPodcastQuiz(' + qi + ',' + oi + ')">' + '<span class="opt-letter">' + optLetter(oi) + '</span>' + esc(opt) + '</button>';
    });
    if (picked !== undefined) h += '<div class="feedback ' + (picked === q.answer ? 'good' : 'bad') + '"><b>' + (picked === q.answer ? IC.check + ' Correct!' : IC.x + ' Not quite.') + '</b> ' + esc(q.why) + '</div>';
    h += '</div>';
  });
  h += '</div>';
  h += nextBar('What to do next: open A1 Chapter 1 and practise the same words in the lesson.', 'chapter/A1-1', 'Open A1 Chapter 1');
  return h;
}
function answerPodcastQuiz(qi, oi) {
  const qz = state.quiz['podcast'] || (state.quiz['podcast'] = { answers: {}, score: 0 });
  if (qz.answers[qi] !== undefined) return;
  qz.answers[qi] = oi;
  if (oi === PODCAST.quiz[qi].answer) { qz.score++; store.addXP(2); }
  render();
}

/* ================= Nursing (Pflege) ================= */
function viewNursing() {
  const n = NURSING;
  let h = '<p class="kicker">Bonus · Nursing German (Pflege)</p><h1>Nursing German</h1>' +
    '<p class="lead">' + esc(n.intro) + '</p>' +
    '<div class="card"><h3 style="margin-top:0">Hospital words — ' + n.words.length + '</h3>';
  n.words.forEach(v => {
    h += '<div class="vocab-row"><div class="txt"><div class="de"><span class="art">' + esc(v.art) + '</span> ' + esc(v.de) + (v.pl ? ' <span class="plural">· plural: die ' + esc(v.pl) + '</span>' : '') + '</div><div class="ph">' + esc(v.ph) + '</div><div class="en">' + esc(v.en) + '</div></div>' + speakBtn(v.art + ' ' + v.de) + '</div>';
  });
  h += '<button class="btn mt" onclick="addNursingToCards()">Add all nursing words to flashcards →</button></div>';
  h += '<div class="card"><h3 style="margin-top:0">Patient phrases — always Sie-form</h3>' +
    '<p class="small">With patients, always use "Sie" (formal you) — never "du". Tap the speaker button to hear each phrase.</p>';
  n.phrases.forEach(p => {
    h += '<div class="vocab-row"><div class="txt"><div class="de">' + esc(p.de) + '</div><div class="ph">' + esc(p.ph) + '</div><div class="en">' + esc(p.en) + '</div></div>' + speakBtn(p.de) + '</div>';
  });
  h += '</div>';
  h += '<div class="card"><h3 style="margin-top:0">Dialogue — morning round</h3>' +
    '<div class="btn-row mb"><button class="btn small" onclick="speakNursingDialogue(false)">Play all</button>' +
    '<button class="btn small ghost" onclick="speakNursingDialogue(true)">Loop</button>' +
    '<button class="btn small ghost" onclick="stopSpeak()">Stop</button></div>';
  n.dialogue.forEach(d => {
    h += '<div class="dialogue-line"><div class="who ' + (d.who === 'B' ? 'b' : '') + '">' + d.who + '</div>' +
      '<div class="txt"><div class="de">' + esc(d.de) + '</div><div class="ph">' + esc(d.ph) + '</div><div class="en">' + esc(d.en) + '</div></div>' +
      speakBtn(d.de) + '</div>';
  });
  h += '</div>';
  h += '<div class="note-box"><b>Exam to aim for:</b> ' + esc(n.exam) + '</div>';
  h += nextBar('What to do next: finish B2 Chapter 3 (Health & Nursing) — it covers the grammar for hospital German.', 'chapter/B2-3', 'Open B2 Chapter 3');
  return h;
}
function speakNursingDialogue(loop) {
  stopSpeak();
  const lines = NURSING.dialogue.map(d => d.de);
  const token = ++speakToken;
  let i = 0;
  const next = () => {
    if (token !== speakToken) return;
    if (i >= lines.length) { if (loop) { i = 0; next(); } return; }
    const u = new SpeechSynthesisUtterance(lines[i]);
    u.lang = 'de-DE'; if (Speech.voice) u.voice = Speech.voice; u.rate = Speech.rate();
    u.onend = () => { i++; next(); }; u.onerror = () => { i++; next(); };
    window.speechSynthesis.speak(u);
  };
  next();
}
function addNursingToCards() {
  let added = 0;
  NURSING.words.forEach((v, i) => {
    const key = 'nursing:' + i;
    if (!store.data.cards[key]) { store.data.cards[key] = { ivl: 0, due: 0, again: 0 }; added++; }
  });
  store.save();
  toast(added ? added + ' nursing words added to flashcards.' : 'Nursing words are already in your flashcards.');
}

/* ================= Mock Tests (one per level) ================= */
function mockFor(level) {
  if (level === 'A2') return (typeof MOCK_A2 !== 'undefined') ? MOCK_A2 : null;
  if (level === 'B1') return (typeof MOCK_B1 !== 'undefined') ? MOCK_B1 : null;
  if (level === 'B2') return (typeof MOCK_B2 !== 'undefined') ? MOCK_B2 : null;
  if (level === 'C1') return (typeof MOCK_C1 !== 'undefined') ? MOCK_C1 : null;
  return MOCK_A1;
}
function mockBest(level) {
  if (store.data.mockBests && store.data.mockBests[level] !== undefined) return store.data.mockBests[level];
  return level === 'A1' ? store.data.mockBest : null;
}
function startMock(level) {
  const src = mockFor(level || 'A1');
  if (!src) { toast('This mock test is not ready yet — it arrives when the level is complete.'); return; }
  const qs = [...src.questions];
  state.mock = { level: level || 'A1', qs, idx: 0, answers: {}, score: 0, remaining: src.time || 20 * 60, running: true, finished: false };
  go('mock/' + (level || 'A1'));
  render(); // render() too: go() alone does nothing when already on #/mock/<level> (no hashchange fires)
}
function viewMocks() {
  let h = '<p class="kicker">Mock tests</p><h1>Mock tests</h1>' +
    '<p class="lead">Goethe-style practice tests — 20 questions, 20 minutes, pass at 60%. One per level. Practice only — not an official certificate.</p>';
  LEVELS.forEach(lv => {
    const m = mockFor(lv.id);
    const best = mockBest(lv.id);
    if (m) {
      h += '<div class="card"><h3 style="margin-top:0">' + lv.id + ' Mock Test</h3><p>20 questions · 20 minutes · pass 12/20.' +
        (best !== null && best !== undefined ? ' Your best: <b>' + best + '/100</b>.' : '') + '</p>' +
        '<button class="btn red" onclick="startMock(\'' + lv.id + '\')">Start the ' + lv.id + ' mock test →</button></div>';
    } else {
      h += '<div class="card"><h3 style="margin-top:0">' + lv.id + ' Mock Test</h3>' +
        '<p class="small">This mock test arrives when ' + lv.id + ' is complete. Finish the level first — then test yourself here.</p></div>';
    }
  });
  return h;
}
function viewMock(level) {
  const lv = level || 'A1';
  const m = state.mock;
  if (!m) {
    const src = mockFor(lv);
    if (!src) return viewMocks();
    const best = mockBest(lv);
    return '<p class="kicker">Mock test · ' + lv + '</p><h1>Goethe-style ' + lv + ' Mock Test</h1>' +
      '<p class="lead">20 questions. 20 minutes. Pass at 60% (12 correct). Each question is worth 5 points. Practice only — not an official certificate.</p>' +
      '<div class="card"><h3 style="margin-top:0">Rules</h3><ul><li>One question at a time — no going back.</li><li>The timer starts when you tap Start.</li><li>When time runs out, the test submits itself.</li><li>Your best score is saved: <b>' + (best !== null && best !== undefined ? best + ' / 100' : 'not taken yet') + '</b></li></ul>' +
      '<button class="btn red" onclick="startMock(\'' + lv + '\')">Start the mock test</button></div>' +
      nextBar('Not ready yet? Finish ' + lv + ' Chapter 12 first — it reviews the whole level.', 'chapter/' + lv + '-12', 'Open ' + lv + ' Chapter 12');
  }
  if (m.finished) {
    const pct = m.score * 5;
    return '<p class="kicker">Mock test · ' + m.level + '</p><h1>Your result</h1>' +
      '<div class="result-box ' + (pct >= 60 ? 'pass' : 'fail') + '"><b>Score: ' + pct + ' / 100 (' + m.score + ' of ' + m.qs.length + ' correct)</b><br>' +
      (pct >= 60 ? ' You passed! The pass mark is 60% — you are at ' + m.level + ' exam level.' : 'Not yet — 60% is the pass mark. Review the answers below, revise the weak chapters, and try again.') + '</div>' +
      m.qs.map((q, i) => {
        const picked = m.answers[i];
        return '<div class="card tight"><p><b>' + (i + 1) + '.</b> ' + esc(q.q) + '</p>' +
          '<p class="' + (picked === q.answer ? 'ok' : 'bad-text') + '">' + (picked === q.answer ? IC.check + ' You answered: ' : IC.x + ' You answered: ') + esc(q.options[picked] !== undefined ? q.options[picked] : '—') + '</p>' +
          (picked !== q.answer ? '<p class="ok">' + IC.check + ' Correct answer: ' + esc(q.options[q.answer]) + '</p>' : '') +
          (q.why ? '<p class="small">' + esc(q.why) + '</p>' : '') + '</div>';
      }).join('') +
      '<button class="btn mt" onclick="startMock(\'' + m.level + '\')">Try again →</button>' +
      nextBar('What to do next: revise your weakest chapter, then retake the test.', 'learn', 'Go to lessons');
  }
  const q = m.qs[m.idx];
  const mm = Math.floor(m.remaining / 60), ss = String(m.remaining % 60).padStart(2, '0');
  let h = '<p class="kicker">Mock test · ' + m.level + '</p><h1>Question ' + (m.idx + 1) + ' of ' + m.qs.length + '</h1>' +
    '<div class="timer ' + (m.remaining <= 120 ? 'low' : '') + '">' + mm + ':' + ss + ' left</div>' +
    '<div class="progress-track mb"><div class="progress-fill" style="width:' + (m.idx / m.qs.length * 100) + '%"></div></div>' +
    '<div class="card"><p class="big">' + esc(q.q) + ' ' + speakBtn(q.q) + '</p>';
  q.options.forEach((opt, oi) => {
    h += '<button class="opt" onclick="answerMock(' + oi + ')">' + '<span class="opt-letter">' + optLetter(oi) + '</span>' + esc(opt) + '</button>';
  });
  h += '</div><p class="small">Tip: read the question slowly. Tap the speaker button to hear it in German.</p>';
  return h;
}
function answerMock(oi) {
  const m = state.mock; if (!m || m.finished) return;
  m.answers[m.idx] = oi;
  if (oi === m.qs[m.idx].answer) m.score++;
  m.idx++;
  if (m.idx >= m.qs.length) finishMock();
  render();
}
function finishMock() {
  const m = state.mock; if (!m) return;
  m.running = false; m.finished = true;
  const pct = m.score * 5;
  if (!store.data.mockBests) store.data.mockBests = {};
  store.data.mockBests[m.level] = Math.max(store.data.mockBests[m.level] || 0, pct);
  if (m.level === 'A1') store.data.mockBest = store.data.mockBests.A1;
  store.addXP(20);
  store.save();
  toast(pct >= 60 ? 'Mock test passed! +20 XP ' : 'Mock test finished. +20 XP');
}
function startMockTimer() {
  clearInterval(startMockTimer._t);
  startMockTimer._t = setInterval(() => {
    const m = state.mock;
    if (!m || !m.running) { clearInterval(startMockTimer._t); return; }
    m.remaining--;
    const el = document.querySelector('.timer');
    if (el) {
      const mm = Math.floor(m.remaining / 60), ss = String(m.remaining % 60).padStart(2, '0');
      el.textContent = '' + mm + ':' + ss + ' left';
      if (m.remaining <= 120) el.classList.add('low');
    }
    if (m.remaining <= 0) { clearInterval(startMockTimer._t); finishMock(); render(); }
  }, 1000);
}

/* ================= Progress (export / import) ================= */
function viewProgress() {
  const d = store.data;
  const doneChs = Object.keys(d.completed).length;
  const readChs = Object.keys(d.read).length;
  let h = '<p class="kicker">Progress</p><h1>Your progress</h1>' +
    '<div class="stat-row">' +
    '<div class="stat"><b>' + d.xp + '</b><span>XP</span></div>' +
    '<div class="stat"><b>' + IC.flame + ' ' + d.streak + '</b><span>Streak</span></div>' +
    '<div class="stat"><b>' + doneChs + '</b><span>Lessons</span></div>' +
    '<div class="stat"><b>' + Object.keys(d.cards).length + '</b><span>Cards</span></div></div>';
  h += '<div class="card"><h3 style="margin-top:0">Per level</h3>';
  LEVELS.forEach(lv => {
    const p = levelProgress(lv.id);
    h += '<div class="kv"><div><b>' + lv.id + ' — ' + esc(lv.name) + '</b><div class="small">' + p.done + '/' + p.full + ' full chapters · ' + p.read + ' syllabus read</div></div><b>' + Math.round(p.full ? p.done / p.full * 100 : 0) + '%</b></div>';
  });
  h += '<p class="small mt">Quiz best: A1 Mock ' + (d.mockBest !== null ? d.mockBest + '/100' : 'not taken') + ' · Trainer ' + (d.trainerBest || 0) + '/10</p></div>';
  h += '<div class="card"><h3 style="margin-top:0">Save your progress</h3>' +
    '<p class="small">Progress lives on this device. Export a backup file now — if you clear browser data, you can import it back.</p>' +
    '<div class="btn-row"><button class="btn small" onclick="exportProgress()">Export (JSON)</button>' +
    '<button class="btn small ghost" onclick="document.getElementById(\'importFile\').click()">Import (JSON)</button></div>' +
    '<button class="btn small ghost mt" onclick="if(confirm(\'Delete ALL progress? This cannot be undone.\')){localStorage.removeItem(store.key);location.reload();}">Reset all progress</button></div>';
  h += '<div class="card"><h3 style="margin-top:0">Pronunciation voice</h3>' +
    '<p class="small">' + (Speech.noVoice ? 'No German voice found on this device. Install a German voice in system text-to-speech settings.' : 'German voice ready: <b>' + esc(Speech.voice ? Speech.voice.name : 'default') + '</b>') + '</p>' +
    '<div class="btn-row"><button class="btn small" onclick="speakText(\'Guten Tag! Ich heiße Anna. Ich lerne Deutsch.\')">Test voice</button>' +
    '<button class="btn small ghost" onclick="toggleSpeed()">Speed: ' + (d.speed === 'normal' ? 'normal (1×)' : 'slow (0.7×)') + '</button></div></div>';
  h += nextBar('What to do next: keep your streak alive — finish one lesson today.', 'home', 'Back to Home');
  return h;
}
/* ================= About & legal ================= */
function viewPrivacy() {
  return '<div class="legal"><p class="kicker">Legal</p><h1>Privacy Policy</h1>' +
    '<p class="lead">Short version: this app collects nothing about you. There is no account, no sign-in, no analytics, no ads and no tracking.</p>' +
    '<p class="updated">Last updated: 24 November 2026</p>' +
    '<h2>What we collect</h2><p>Nothing. We do not ask for your name, email address or any other personal information, and we do not run analytics or advertising trackers. The app sets no cookies.</p>' +
    '<h2>Your progress stays on your device</h2><p>Your learning progress — XP, streak, completed lessons, quiz scores and flashcard state — is saved only in your own browser, using localStorage on your device. It is never sent to us or to anyone else. You can export it as a file from the Progress page, and delete it at any time with “Reset all progress” or by clearing this site’s browser data.</p>' +
    '<h2>Pronunciation</h2><p>Spoken German uses your device’s built-in text-to-speech. The app does not record your voice and does not send any audio anywhere. How your device handles speech is governed by your own device settings.</p>' +
    '<h2>Hosting</h2><p>This site is hosted on GitHub Pages. GitHub may collect standard server logs (such as an IP address) when you visit, as described in <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement" target="_blank" rel="noopener">GitHub’s privacy statement</a>.</p>' +
    '<h2>Children</h2><p>The app does not knowingly collect personal information from anyone, including children, because it collects no personal information at all.</p>' +
    '<h2>Changes</h2><p>If this policy changes, the new version will be posted here with a new date.</p>' +
    '<h2>Questions</h2><p>There is no contact form in the app. Questions can be raised on the <a href="https://github.com/ashutoshkumarjpg67-ai/german-learning-app" target="_blank" rel="noopener">GitHub repository</a>.</p></div>' +
    nextBar('Back to learning.', 'home', 'Back to Home');
}
function viewTerms() {
  return '<div class="legal"><p class="kicker">Legal</p><h1>Terms of Use</h1>' +
    '<p class="lead">The rules for using Deutsch Lernen — free German lessons from A1 to C1.</p>' +
    '<p class="updated">Last updated: 24 November 2026</p>' +
    '<h2>What this app is</h2><p>Deutsch Lernen is a free educational app for learning German. Use it for your own personal learning.</p>' +
    '<h2>Not an official exam</h2><p>This app is not affiliated with, endorsed by, or connected to the Goethe-Institut or any other exam body. The mock tests are practice only: they are not official exams, they give no certificate, and they do not guarantee any exam result.</p>' +
    '<h2>Content “as is”</h2><p>The lessons, words and explanations are provided as they are. They may contain mistakes, and they may change or be removed at any time. Pronunciation uses your device’s speech service, so quality varies by device.</p>' +
    '<h2>Your responsibility</h2><p>Use the app at your own risk. We are not liable for exam results or for decisions you make based on the content. Please do not present the app’s content as your own work, and do not resell it.</p>' +
    '<h2>Fair use</h2><p>Do not try to break the app or use it in a way that harms other learners. If you do not agree with these terms, please do not use the app.</p></div>' +
    nextBar('Back to learning.', 'home', 'Back to Home');
}
function viewAbout() {
  return '<div class="legal"><p class="kicker">About</p><h1>About Deutsch Lernen</h1>' +
    '<p class="lead">A free German self-study app — from your first word to C1.</p>' +
    '<p class="updated">Last updated: 24 November 2026</p>' +
    '<h2>What it is</h2><p>Deutsch Lernen teaches German in tiny 2–4 minute topics: one concept at a time, in the right order, from zero — letters and sounds, numbers, greetings — all the way to C1.</p>' +
    '<h2>What’s inside</h2><ul><li>60 chapters across A1, A2, B1, B2 and C1, each split into tiny topics</li><li>Vocabulary with pronunciation hints and a speaker button on every word</li><li>Grammar in plain English, with examples you can hear</li><li>Quizzes that explain <i>why</i> an answer is right</li><li>Flashcards with spaced repetition, and a vocabulary trainer</li><li>Goethe-style mock tests, one per level (practice only — not a certificate)</li><li>A Day 1 podcast and a Nursing section with hospital German for Pflege</li></ul>' +
    '<h2>Free, forever</h2><p>No login, no account, no ads. Your progress is saved only on your own device.</p>' +
    '<h2>Built by</h2><p>Built by Ashutosh Kumar. The source is public: <a href="https://github.com/ashutoshkumarjpg67-ai/german-learning-app" target="_blank" rel="noopener">github.com/ashutoshkumarjpg67-ai/german-learning-app</a>.</p>' +
    '<h2>Not official</h2><p>This app is not affiliated with the Goethe-Institut or any exam body.</p></div>' +
    nextBar('Start learning — it begins from zero.', 'chapter/A1-1', 'Start A1 Chapter 1');
}
function exportProgress() {
  const blob = new Blob([JSON.stringify(store.data, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'german-learning-progress.json';
  a.click();
  toast('Progress exported.');
}
function importProgressFile(input) {
  const file = input.files[0]; if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const data = JSON.parse(reader.result);
      if (typeof data.xp !== 'number') throw new Error('bad file');
      store.data = Object.assign(store.fresh(), data);
      store.save();
      toast('Progress imported. Welcome back!');
      render();
    } catch (e) { toast('That file is not a valid progress backup.'); }
  };
  reader.readAsText(file);
}

/* ================= Init ================= */
Speech.init();
store.load();
if (!location.hash) location.hash = '#/home';
state.cardQueue = buildCardQueue('due');
render();
