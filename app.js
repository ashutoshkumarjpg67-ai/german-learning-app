/* ============================================================
   Deutsch Lernen v13 — Clean From-Scratch Engine
   Organized: Grammar (Level -> Chapter -> Topic)
              Spoken  (Level / Pflege -> Chapter -> Topic)
              Practice (Flashcards · Drill/Typing · Mock Exams)
   ============================================================ */

/* ================= Icons ================= */
const IC = {
  speaker: '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M18.5 5.5a9 9 0 0 1 0 13"/></svg>',
  mic: '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>',
  check: '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
  x: '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
  plus: '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',
};

/* ================= Store (localStorage gla_v1) ================= */
const store = {
  key: 'gla_v1',
  data: null,
  fresh() {
    return {
      xp: 0, streak: 0, lastVisit: null, days: {},
      completed: {}, topicsDone: {}, spokenDone: {},
      cards: {}, speed: 'slow', theme: 'dark', largeText: false,
      mockBests: {}, mockBest: null, trainerBest: 0
    };
  },
  load() {
    try { this.data = Object.assign(this.fresh(), JSON.parse(localStorage.getItem(this.key)) || {}); }
    catch (e) { this.data = this.fresh(); }
    if (!this.data.topicsDone) this.data.topicsDone = {};
    if (!this.data.spokenDone) this.data.spokenDone = {};
    if (!this.data.mockBests) this.data.mockBests = {};
    if (!this.data.cards) this.data.cards = {};
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
  addXP(n) { this.data.xp += n; this.save(); }
};

/* ================= Speech Synthesis (TTS) & Mic Check ================= */
const Speech = {
  supported: ('speechSynthesis' in window),
  voice: null, noVoice: false,
  init() {
    if (!this.supported) { this.noVoice = true; return; }
    const pick = () => {
      const vs = window.speechSynthesis.getVoices().filter(v => v.lang && v.lang.toLowerCase().startsWith('de'));
      if (!vs.length) { this.noVoice = true; return; }
      const score = v => (/google deutsch/i.test(v.name) ? 3 : 0) + (/microsoft/i.test(v.name) ? 2 : 0) + (v.lang === 'de-DE' ? 1 : 0);
      vs.sort((a, b) => score(b) - score(a));
      this.voice = vs[0]; this.noVoice = false;
    };
    pick();
    if (window.speechSynthesis.onvoiceschanged !== undefined) window.speechSynthesis.onvoiceschanged = pick;
    setTimeout(pick, 800);
  },
  rate() { return (store.data && store.data.speed === 'normal') ? 1 : 0.7; }
};

let speakToken = 0;
function stopSpeak() { speakToken++; if (Speech.supported) { try { window.speechSynthesis.cancel(); } catch (e) {} } }
function speakText(text) {
  stopSpeak();
  if (!Speech.supported) { toast('Speech not supported on this device.'); return; }
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'de-DE'; if (Speech.voice) u.voice = Speech.voice; u.rate = Speech.rate();
  window.speechSynthesis.speak(u);
}
function speakLines(lines, loop) {
  stopSpeak();
  if (!Speech.supported) { toast('Speech not supported on this device.'); return; }
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
  toast(loop ? 'Looping dialogue — tap Stop to end.' : 'Playing dialogue…');
}

function normalizeDe(s) {
  return String(s || '').toLowerCase().replace(/[.,!?;:"'„“()\-–—]/g, ' ').replace(/\s+/g, ' ').trim();
}
const Mic = {
  rec: null, btn: null,
  supported() { return !!(window.SpeechRecognition || window.webkitSpeechRecognition); },
  stop() {
    if (this.rec) { try { this.rec.abort(); } catch (e) {} this.rec = null; }
    if (this.btn) { this.btn.classList.remove('listening'); this.btn = null; }
  },
  check(target, slotId, btn) {
    const out = document.getElementById(slotId);
    if (!this.supported()) {
      const m = 'Mic check needs Chrome or Edge. Tap the speaker to listen and repeat.';
      if (out) { out.className = 'speak-res info'; out.textContent = m; } else toast(m);
      return;
    }
    if (this.btn === btn) { this.stop(); return; }
    this.stop(); stopSpeak();
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    const rec = new SR();
    rec.lang = 'de-DE'; rec.interimResults = false; rec.maxAlternatives = 1;
    this.rec = rec; this.btn = btn; btn.classList.add('listening');
    if (out) { out.className = 'speak-res info'; out.textContent = 'Listening in German… speak now.'; }
    rec.onresult = ev => {
      const heard = (ev.results && ev.results[0] && ev.results[0][0]) ? ev.results[0][0].transcript : '';
      const tw = normalizeDe(target).split(' ').filter(Boolean);
      const hw = normalizeDe(heard).split(' ').filter(Boolean);
      const pct = tw.length ? Math.round(tw.filter(w => hw.includes(w)).length / tw.length * 100) : 0;
      if (out) {
        out.className = 'speak-res ' + (pct >= 75 ? 'good' : 'bad');
        out.textContent = (pct >= 75 ? 'Great! ' : 'Try again — ') + 'Heard: "' + heard + '" (' + pct + '% match)';
      }
      if (pct >= 75) store.addXP(1);
      this.stop();
    };
    rec.onerror = ev => {
      if (out) {
        out.className = 'speak-res info';
        out.textContent = ev.error === 'not-allowed' ? 'Allow microphone permission in browser settings.' : 'Could not hear clearly — tap mic and try again.';
      }
      this.stop();
    };
    rec.onend = () => this.stop();
    try { rec.start(); } catch (e) { this.stop(); }
  }
};

/* ================= Helpers & Theme ================= */
const THEMES = [
  { id: 'dark', name: 'Midnight Dark', color: '#0b0e14' },
  { id: 'light', name: 'Pure Light', color: '#f6f7f9' },
  { id: 'forest', name: 'Forest Calm', color: '#091112' }
];
function applyTheme(id) {
  const t = THEMES.find(x => x.id === id) || THEMES[0];
  if (document.documentElement) document.documentElement.setAttribute('data-theme', t.id);
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', t.color);
}
function cycleTheme() {
  const cur = store.data.theme || 'dark';
  const next = THEMES[(THEMES.findIndex(x => x.id === cur) + 1) % THEMES.length];
  store.data.theme = next.id; store.save(); applyTheme(next.id);
  toast('Theme: ' + next.name);
}
function toggleSpeed() {
  store.data.speed = store.data.speed === 'normal' ? 'slow' : 'normal';
  store.save(); updateTopBar();
  toast(store.data.speed === 'slow' ? 'Speech speed: 0.7× (slow)' : 'Speech speed: 1× (normal)');
}
function updateTopBar() {
  const sb = document.getElementById('speedBtn'); if (sb) sb.textContent = store.data.speed === 'normal' ? '1×' : '0.7×';
  const st = document.getElementById('streakTop'); if (st) st.textContent = store.data.streak;
  const tb = document.getElementById('textSizeBtn'); if (tb) tb.textContent = store.data.largeText ? 'Aa+' : 'Aa';
}
function applyTextSize(large) {
  if (document.documentElement) document.documentElement.setAttribute('data-text', large ? 'large' : 'normal');
}
function toggleTextSize() {
  store.data.largeText = !store.data.largeText;
  store.save(); applyTextSize(store.data.largeText); updateTopBar();
  toast(store.data.largeText ? 'German text: Large' : 'German text: Normal');
}
function artBadge(art) {
  if (!art) return '';
  const a = String(art).trim().toLowerCase();
  const cls = a === 'der' ? 'art-der' : (a === 'die' ? 'art-die' : (a === 'das' ? 'art-das' : 'art-die'));
  return '<span class="art-badge ' + cls + '">' + esc(art) + '</span>';
}
function weekStripHTML() {
  const labels = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const today = new Date();
  let h = '<div class="week-strip" aria-label="7-day activity streak">';
  for (let i = 6; i >= 0; i--) {
    const dt = new Date(today.getTime() - i * 864e5);
    const key = dt.toDateString();
    const on = !!(store.data.days && store.data.days[key]);
    const isToday = i === 0;
    h += '<div class="w-day ' + (on ? 'on' : '') + (isToday ? ' today' : '') + '">' +
      '<span>' + labels[dt.getDay()] + '</span><div class="w-dot">' + (on ? '✓' : dt.getDate()) + '</div></div>';
  }
  return h + '</div>';
}
function celebrate() {
  if (!document.body || typeof document.createElement !== 'function') return;
  const box = document.createElement('div');
  box.className = 'confetti-box';
  const cols = ['#f43f5e', '#facc15', '#22c55e', '#3b82f6', '#f97316'];
  for (let i = 0; i < 18; i++) {
    const p = document.createElement('span');
    p.className = 'confetti-p';
    const ang = (Math.PI * 2 * i) / 18;
    const dist = 80 + Math.random() * 110;
    p.style.background = cols[i % cols.length];
    p.style.setProperty('--tx', Math.round(Math.cos(ang) * dist) + 'px');
    p.style.setProperty('--ty', Math.round(Math.sin(ang) * dist - 40) + 'px');
    p.style.setProperty('--rot', Math.round((Math.random() - 0.5) * 540) + 'deg');
    box.appendChild(p);
  }
  document.body.appendChild(box);
  setTimeout(() => { if (box.parentNode) box.parentNode.removeChild(box); }, 1100);
}
function esc(s) { return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
function escAttr(s) { return esc(s).replace(/'/g, '&#39;'); }
function optLetter(i) { return 'ABCD'[i] || ''; }
function go(route) { location.hash = '#/' + route; }
function toast(msg) {
  const t = document.getElementById('toast'); if (!t) return;
  t.textContent = msg; t.classList.add('show');
  clearTimeout(toast._t); toast._t = setTimeout(() => t.classList.remove('show'), 2400);
}
function speakBtn(text) {
  return '<button class="act-btn" data-say="' + escAttr(text) + '" aria-label="Listen">' + IC.speaker + '</button>';
}
function micBtn(text, slot) {
  return '<button class="act-btn" data-mic="' + escAttr(text) + '" data-slot="' + escAttr(slot) + '" aria-label="Speak and check">' + IC.mic + '</button>';
}
function chapterList(lv) { return Object.values(CHAPTERS).filter(c => c.level === lv).sort((a, b) => a.n - b.n); }
function allVocab() {
  const out = [];
  Object.values(CHAPTERS).forEach(ch => {
    (ch.vocab || []).forEach((v, i) => out.push({ key: ch.id + ':' + i, ch: ch.id, level: ch.level, title: ch.title, ...v }));
  });
  NURSING.words.forEach((v, i) => out.push({ key: 'nursing:' + i, ch: 'nursing', level: 'Pflege', title: 'Hospital German', ...v }));
  return out;
}
function mockFor(lv) {
  return { A0: typeof MOCK_A0 !== 'undefined' ? MOCK_A0 : null, A1: MOCK_A1, A2: MOCK_A2, B1: MOCK_B1, B2: MOCK_B2, C1: MOCK_C1 }[lv] || MOCK_A1;
}
function mockBest(lv) {
  if (store.data.mockBests && store.data.mockBests[lv] !== undefined) return store.data.mockBests[lv];
  return lv === 'A1' ? store.data.mockBest : null;
}

/* ================= State & Router ================= */
const state = {
  grammarLv: 'A0',
  spokenLv: 'A0',
  practiceTab: 'cards', // cards | drill | mock
  lessonTopicIdx: 0,
  spokenTab: 'dialogue', // dialogue | speak | extra
  pflegeTab: 'phrases',  // phrases | dialogues | words | quiz | podcast
  topicQuiz: null,
  nursingQuiz: { answers: {}, score: 0 },
  cardFilter: 'due', cardQueue: [], cardIdx: 0, cardFlipped: false, cardSession: 0,
  trainer: null,
  mock: null, mockLv: 'A0',
  searchQ: '', searchLv: 'all', searchShown: 120
};

let lastHash = '';
function render() {
  stopSpeak(); Mic.stop();
  const hash = (location.hash || '#/grammar').replace(/^#\//, '');
  const parts = hash.split('/');
  const page = parts[0] || 'grammar';
  if (page !== 'practice' && startMockTimer._t) { clearInterval(startMockTimer._t); startMockTimer._t = null; }
  updateTopBar();

  const navMap = { grammar: 'grammar', gchapter: 'grammar', spoken: 'spoken', schapter: 'spoken', practice: 'practice' };
  const activeNav = navMap[page] || '';
  document.querySelectorAll('#nav [data-nav]').forEach(b => b.classList.toggle('active', b.dataset.nav === activeNav));

  const view = document.getElementById('view');
  if (page === 'grammar') view.innerHTML = viewGrammar();
  else if (page === 'gchapter') view.innerHTML = viewGrammarChapter(parts[1], parts[2]);
  else if (page === 'spoken') view.innerHTML = viewSpoken();
  else if (page === 'schapter') view.innerHTML = viewSpokenChapter(parts[1]);
  else if (page === 'practice') view.innerHTML = viewPractice();
  else if (page === 'search') view.innerHTML = viewSearch();
  else if (page === 'profile') view.innerHTML = viewProfile();
  else view.innerHTML = viewGrammar();

  if (hash !== lastHash) window.scrollTo(0, 0);
  lastHash = hash;
  if (page === 'practice' && state.practiceTab === 'mock' && state.mock && state.mock.running) startMockTimer();
}
window.addEventListener('hashchange', render);

document.addEventListener('click', e => {
  const say = e.target.closest('[data-say]'); if (say) { speakText(say.dataset.say); return; }
  const mic = e.target.closest('[data-mic]'); if (mic) { Mic.check(mic.dataset.mic, mic.dataset.slot, mic); return; }
  const flip = e.target.closest('[data-flip]'); if (flip) { state.cardFlipped = !state.cardFlipped; render(); return; }
});
let touchX0 = null;
document.addEventListener('touchstart', e => {
  if (e.target.closest('.fc-stage') && e.touches && e.touches[0]) touchX0 = e.touches[0].clientX;
}, { passive: true });
document.addEventListener('touchend', e => {
  if (touchX0 === null || !e.changedTouches || !e.changedTouches[0]) return;
  const dx = e.changedTouches[0].clientX - touchX0;
  touchX0 = null;
  if (Math.abs(dx) > 65 && state.practiceTab === 'cards' && state.cardQueue.length) {
    gradeCard(dx > 0 ? 1 : 0);
  }
}, { passive: true });

/* ================= 1. GRAMMAR SECTION (Level -> Chapter -> Topic) ================= */
function grammarTopicsOf(ch) {
  return (ch.topics || []).filter(t => t.kind === 'grammar' || t.kind === 'words' || t.kind === 'quiz' || t.kind === 'sounds');
}
function grammarChProgress(ch) {
  const ts = grammarTopicsOf(ch);
  const done = ts.filter(t => store.data.topicsDone[ch.id + ':' + t.id]).length;
  return { done, total: ts.length };
}
function setGrammarLevel(lv) { state.grammarLv = lv; render(); }

function viewGrammar() {
  const lv = LEVELS.find(x => x.id === state.grammarLv) || LEVELS[0];
  const chs = chapterList(lv.id);
  const doneChs = chs.filter(c => { const p = grammarChProgress(c); return p.total && p.done === p.total; }).length;
  const pct = Math.round(doneChs / chs.length * 100);
  const ringR = 25, ringC = Math.round(2 * Math.PI * ringR);
  const ringOff = Math.round(ringC * (1 - pct / 100));
  const nextCh = chs.find(c => { const p = grammarChProgress(c); return p.done < p.total; }) || chs[0];

  let h = '<p class="eyebrow">Section 1 · Structured Curriculum</p><h1>Grammar &amp; Vocabulary</h1>' +
    '<p class="sub">From child-first basics (A0) to advanced (C1) — organized level-wise, chapter-wise, and topic-wise.</p>';

  // Level Switcher + 7-Day Streak Strip
  h += '<div class="seg" role="tablist">' + LEVELS.map(x =>
    '<button class="' + (x.id === lv.id ? 'active' : '') + '" onclick="setGrammarLevel(\'' + x.id + '\')">' + x.id + '</button>'
  ).join('') + '</div>' + weekStripHTML();

  // Focused Continue Card
  h += '<div class="focus-card"><div class="focus-meta">' +
    '<div class="ring"><svg viewBox="0 0 62 62"><circle class="r-bg" cx="31" cy="31" r="' + ringR + '"/>' +
    '<circle class="r-fg" cx="31" cy="31" r="' + ringR + '" stroke-dasharray="' + ringC + '" stroke-dashoffset="' + ringOff + '"/></svg>' +
    '<span>' + pct + '%</span></div>' +
    '<div class="grow"><div class="muted">' + esc(lv.name) + ' · ' + doneChs + '/' + chs.length + ' chapters</div>' +
    '<h3>Ch ' + nextCh.n + ': ' + esc(nextCh.title) + '</h3>' +
    '<div class="muted">' + esc(nextCh.grammar ? nextCh.grammar.title : nextCh.concept) + '</div></div></div>' +
    '<button class="btn primary sm" onclick="openGrammarChapter(\'' + nextCh.id + '\')">Continue →</button></div>';

  // Chapter List
  h += '<h2>' + lv.id + ' Chapters (1–' + chs.length + ')</h2><div class="ch-list">';
  chs.forEach(ch => {
    const p = grammarChProgress(ch);
    const isDone = p.total && p.done === p.total;
    const isNext = ch.id === nextCh.id && !isDone;
    h += '<button class="ch-item ' + (isDone ? 'done' : (isNext ? 'next' : '')) + '" onclick="openGrammarChapter(\'' + ch.id + '\')">' +
      '<span class="ch-badge">' + (isDone ? '✓' : ch.n) + '</span>' +
      '<span class="grow"><span class="ch-title">' + esc(ch.title) + '</span>' +
      '<span class="ch-meta">' + esc(ch.grammar ? ch.grammar.title : ch.concept) + '</span></span>' +
      '<span class="ch-pct">' + p.done + '/' + p.total + '</span></button>';
  });
  h += '</div>';
  return h;
}

function openGrammarChapter(chId, topicId) {
  const ch = CHAPTERS[chId]; if (!ch) return;
  const ts = grammarTopicsOf(ch);
  const idx = topicId ? Math.max(0, ts.findIndex(t => t.id === topicId)) : 0;
  state.lessonTopicIdx = idx;
  go('gchapter/' + chId + '/' + (ts[idx] ? ts[idx].id : ''));
}

function viewGrammarChapter(chId, topicId) {
  const ch = CHAPTERS[chId];
  if (!ch) return '<p class="muted">Chapter not found.</p>';
  const ts = grammarTopicsOf(ch);
  let idx = topicId ? ts.findIndex(t => t.id === topicId) : state.lessonTopicIdx;
  if (idx < 0 || idx >= ts.length) idx = 0;
  state.lessonTopicIdx = idx;
  const t = ts[idx];
  const tKey = ch.id + ':' + t.id;
  const isDone = !!store.data.topicsDone[tKey];

  let h = '<div class="lesson-head">' +
    '<button class="btn ghost sm" onclick="go(\'grammar\')">← ' + ch.level + ' Chapters</button>' +
    '<span class="muted">' + ch.level + ' · Ch ' + ch.n + ' · Topic ' + (idx + 1) + '/' + ts.length + '</span></div>' +
    '<h1>' + esc(ch.title) + '</h1><p class="sub">' + esc(ch.concept) + '</p>';

  // Topic Stepper Pills
  h += '<div class="step-pills">' + ts.map((tp, i) => {
    const d = !!store.data.topicsDone[ch.id + ':' + tp.id];
    return '<button class="step-pill ' + (i === idx ? 'active' : (d ? 'done' : '')) + '" onclick="openGrammarChapter(\'' + ch.id + '\',\'' + tp.id + '\')">' +
      (d ? '✓ ' : (i + 1) + '. ') + esc(tp.title) + '</button>';
  }).join('') + '</div>';

  // Render Current Topic Content
  if (t.kind === 'grammar') {
    h += renderGrammarBlock(t.grammar, ch.tip);
  } else if (t.kind === 'sounds') {
    h += '<div class="card"><h3>German Sounds &amp; Rules</h3>';
    (t.sounds || []).forEach(s => {
      h += '<div class="v-row"><div class="grow"><div class="v-de">' + esc(s.de) + '</div><div class="v-en">' + esc(s.en) + '</div></div><span class="v-ph">' + esc(s.ph) + '</span></div>';
    });
    h += '</div>';
    if (t.grammar) h += renderGrammarBlock(t.grammar, ch.tip);
  } else if (t.kind === 'words') {
    h += '<div class="card"><div class="row mb"><h3 class="grow" style="margin:0">' + esc(t.title) + ' (' + t.vocab.length + ' words)</h3>' +
      '<button class="btn ghost sm" onclick="addChapterToCards(\'' + ch.id + '\')">+ Save to Cards</button></div>';
    t.vocab.forEach(v => {
      const say = (v.art ? v.art + ' ' : '') + v.de;
      h += '<div class="v-row"><div class="grow"><div class="v-de">' + artBadge(v.art) + esc(v.de) +
        (v.pl ? ' <span class="muted">· die ' + esc(v.pl) + '</span>' : '') + '</div>' +
        '<div class="v-ph">' + esc(v.ph) + '</div><div class="v-en">' + esc(v.en) + '</div></div>' + speakBtn(say) + '</div>';
    });
    h += '</div>';
  } else if (t.kind === 'quiz') {
    h += renderTopicQuiz(ch, t);
  }

  // Footer Action Row
  const quizGate = t.kind === 'quiz' && !(state.topicQuiz && state.topicQuiz.key === tKey && state.topicQuiz.finished);
  const nextTopic = ts[idx + 1];
  h += '<div class="btn-row mt">';
  if (!isDone) {
    h += '<button class="btn primary" ' + (quizGate ? 'disabled' : '') + ' onclick="completeGrammarTopic(\'' + ch.id + '\',\'' + t.id + '\',' + (nextTopic ? '\'' + nextTopic.id + '\'' : 'null') + ')">' +
      (nextTopic ? 'Mark Done &amp; Next Topic →' : 'Finish Chapter ✓ (+10 XP)') + '</button>';
  } else if (nextTopic) {
    h += '<button class="btn primary" onclick="openGrammarChapter(\'' + ch.id + '\',\'' + nextTopic.id + '\')">Next: ' + esc(nextTopic.title) + ' →</button>';
  } else {
    h += '<button class="btn primary" onclick="go(\'schapter/' + ch.id + '\')">Practise Spoken for Ch ' + ch.n + ' →</button>';
  }
  h += '</div>';

  if (ch.recap && ch.recap.length && idx === ts.length - 1) {
    h += '<div class="card mt"><h3>1-Minute Chapter Recap</h3><ul style="padding-left:18px;color:var(--ink-2)">' +
      ch.recap.map(r => '<li style="margin-bottom:5px">' + esc(r) + '</li>').join('') + '</ul></div>';
  }
  return h;
}

function renderRuleVisual(rule) {
  const parts = String(rule || '').split(/\s*[·|]\s*/).map(s => s.trim()).filter(Boolean);
  if (parts.length >= 2) {
    return '<div class="rule-grid">' + parts.map(p => {
      const m = p.match(/^([^=:→]+?)(\s*[=:→]\s*)(.+)$/);
      return '<div class="rule-pill">' + (m ? '<b>' + esc(m[1]) + '</b>' + esc(m[2]) + esc(m[3]) : '<b>' + esc(p) + '</b>') + '</div>';
    }).join('') + '</div>';
  }
  return '<div class="callout"><b>Pattern:</b> ' + esc(rule) + '</div>';
}
function renderGrammarBlock(g, tip) {
  let h = '<div class="card"><div class="eyebrow">Grammar Rule</div><h3>' + esc(g.title) + '</h3>' +
    '<p class="sub">' + esc(g.plain) + '</p>' + renderRuleVisual(g.rule);
  if (g.examples && g.examples.length) {
    h += '<h3>Examples</h3>';
    g.examples.forEach(ex => {
      h += '<div class="v-row"><div class="grow"><div class="v-de">' + esc(ex.de) + '</div><div class="v-ph">' + esc(ex.ph) + '</div><div class="v-en">' + esc(ex.en) + '</div></div>' + speakBtn(ex.de) + '</div>';
    });
  }
  h += '</div>';
  if (tip) h += '<div class="callout ok"><b>Memory tip:</b> ' + esc(tip) + '</div>';
  return h;
}

function completeGrammarTopic(chId, topicId, nextTopicId) {
  const key = chId + ':' + topicId;
  if (!store.data.topicsDone[key]) { store.data.topicsDone[key] = Date.now(); store.addXP(5); }
  const ch = CHAPTERS[chId];
  const allDone = grammarTopicsOf(ch).every(t => store.data.topicsDone[chId + ':' + t.id]);
  if (allDone && !store.data.completed[chId]) {
    store.data.completed[chId] = { score: 5, at: Date.now() };
    store.addXP(10);
    celebrate();
    toast('Chapter complete! +10 XP');
  } else {
    toast('Topic complete! +5 XP');
  }
  store.save();
  if (nextTopicId) openGrammarChapter(chId, nextTopicId);
  else render();
}

function renderTopicQuiz(ch, t) {
  const key = ch.id + ':' + t.id;
  if (!state.topicQuiz || state.topicQuiz.key !== key) {
    state.topicQuiz = { key, idx: 0, score: 0, picked: null, finished: false };
  }
  const qz = state.topicQuiz, total = t.questions.length;
  let h = '<div class="card"><h3>Quick Check (' + total + ' questions)</h3>';
  if (qz.finished) {
    const pass = qz.score >= Math.ceil(total / 2);
    h += '<div class="callout ' + (pass ? 'ok' : '') + '"><b>Score: ' + qz.score + ' / ' + total + '</b> — ' +
      (pass ? 'Well done! You can finish this topic below.' : 'Review the grammar rule and try again.') + '</div>' +
      '<button class="btn ghost sm" onclick="state.topicQuiz=null;render()">Retry Quiz</button></div>';
    return h;
  }
  const q = t.questions[qz.idx];
  h += '<p class="muted mb">Question ' + (qz.idx + 1) + ' of ' + total + ' · Score: ' + qz.score + '</p>' +
    '<div class="row mb"><b class="grow">' + esc(q.q) + '</b>' + speakBtn(q.q) + '</div>';
  q.options.forEach((opt, oi) => {
    let cls = 'opt';
    if (qz.picked !== null) cls += oi === q.answer ? ' correct' : (oi === qz.picked ? ' wrong' : ' dim');
    h += '<button class="' + cls + '" ' + (qz.picked !== null ? 'disabled' : '') + ' onclick="answerTopicQuiz(' + oi + ')"><span class="opt-k">' + optLetter(oi) + '</span>' + esc(opt) + '</button>';
  });
  if (qz.picked !== null) {
    h += '<div class="fb ' + (qz.picked === q.answer ? 'good' : 'bad') + '"><b>' + (qz.picked === q.answer ? 'Correct! ' : 'Not quite. ') + '</b>' + esc(q.why) + '</div>' +
      '<button class="btn primary mt" onclick="nextTopicQuiz()">' + (qz.idx === total - 1 ? 'See Result →' : 'Next Question →') + '</button>';
  }
  return h + '</div>';
}
function answerTopicQuiz(oi) {
  const qz = state.topicQuiz; if (!qz || qz.picked !== null) return;
  const [chId, tId] = qz.key.split(':');
  const t = CHAPTERS[chId].topics.find(x => x.id === tId);
  qz.picked = oi;
  if (oi === t.questions[qz.idx].answer) {
    qz.score++;
    if (!store.data.topicsDone[qz.key]) store.addXP(2);
  }
  render();
}
function nextTopicQuiz() {
  const qz = state.topicQuiz; if (!qz) return;
  const [chId, tId] = qz.key.split(':');
  const t = CHAPTERS[chId].topics.find(x => x.id === tId);
  qz.picked = null; qz.idx++;
  if (qz.idx >= t.questions.length) qz.finished = true;
  render();
}

/* ================= 2. SPOKEN SECTION (Level + Pflege -> Chapter -> Dialogue & Mic) ================= */
function setSpokenLevel(lv) { state.spokenLv = lv; render(); }

function viewSpoken() {
  const levels = ['A0', 'A1', 'A2', 'B1', 'B2', 'C1', 'Pflege'];
  let h = '<p class="eyebrow">Section 2 · Listening &amp; Speaking</p><h1>Spoken German</h1>' +
    '<p class="sub">Real-life dialogues, pronunciation audio, and live microphone voice checks — organized level-wise.</p>' +
    '<div class="seg" role="tablist">' + levels.map(lv =>
      '<button class="' + (state.spokenLv === lv ? 'active' : '') + '" onclick="setSpokenLevel(\'' + lv + '\')">' + lv + '</button>'
    ).join('') + '</div>';

  if (state.spokenLv === 'Pflege') return h + viewPflegeSpoken();

  const chs = chapterList(state.spokenLv);
  const doneCount = chs.filter(c => store.data.spokenDone[c.id]).length;
  h += '<div class="row mb"><h2 style="margin:0" class="grow">' + state.spokenLv + ' Spoken Chapters</h2><span class="muted">' + doneCount + '/' + chs.length + ' practised</span></div>' +
    '<div class="ch-list">';
  chs.forEach(ch => {
    const done = !!store.data.spokenDone[ch.id];
    const lineCount = (ch.dialogue || []).length;
    h += '<button class="ch-item ' + (done ? 'done' : '') + '" onclick="go(\'schapter/' + ch.id + '\')">' +
      '<span class="ch-badge">' + (done ? '✓' : ch.n) + '</span>' +
      '<span class="grow"><span class="ch-title">' + esc(ch.title) + '</span>' +
      '<span class="ch-meta">' + lineCount + '-line dialogue · speak &amp; mic check</span></span>' +
      '<span class="ch-pct">→</span></button>';
  });
  return h + '</div>';
}

function viewSpokenChapter(chId) {
  const ch = CHAPTERS[chId];
  if (!ch) return '<p class="muted">Spoken chapter not found.</p>';
  const done = !!store.data.spokenDone[ch.id];
  let h = '<div class="lesson-head"><button class="btn ghost sm" onclick="go(\'spoken\')">← ' + ch.level + ' Spoken</button>' +
    '<span class="muted">' + ch.level + ' · Chapter ' + ch.n + '</span></div>' +
    '<h1>' + esc(ch.title) + '</h1><p class="sub">Listen, repeat out loud, and test your pronunciation with the microphone.</p>';

  h += '<div class="seg">' +
    '<button class="' + (state.spokenTab === 'dialogue' ? 'active' : '') + '" onclick="state.spokenTab=\'dialogue\';render()">1. Dialogue</button>' +
    '<button class="' + (state.spokenTab === 'speak' ? 'active' : '') + '" onclick="state.spokenTab=\'speak\';render()">2. Speak &amp; Mic</button>' +
    '<button class="' + (state.spokenTab === 'extra' ? 'active' : '') + '" onclick="state.spokenTab=\'extra\';render()">3. Q&amp;A Drill</button></div>';

  if (state.spokenTab === 'dialogue') {
    h += '<div class="card"><div class="btn-row mb">' +
      '<button class="btn primary sm" onclick="speakChapterDialogue(\'' + ch.id + '\',false)">Play All</button>' +
      '<button class="btn ghost sm" onclick="speakChapterDialogue(\'' + ch.id + '\',true)">Loop</button>' +
      '<button class="btn ghost sm" onclick="stopSpeak()">Stop</button></div>';
    (ch.dialogue || []).forEach(d => {
      h += '<div class="v-row"><div class="who ' + (d.who === 'B' ? 'b' : '') + '">' + d.who + '</div>' +
        '<div class="grow"><div class="v-de">' + esc(d.de) + '</div><div class="v-ph">' + esc(d.ph) + '</div><div class="v-en">' + esc(d.en) + '</div></div>' +
        speakBtn(d.de) + '</div>';
    });
    h += '</div>';
  } else if (state.spokenTab === 'speak') {
    const models = ch.speak ? (Array.isArray(ch.speak.model) ? ch.speak.model : [ch.speak.model]) : [];
    h += '<div class="card"><h3>Speak &amp; Check Pronunciation</h3>' +
      '<p class="muted mb">Tap Speaker to hear, then tap Mic and speak the sentence in German.</p>';
    models.forEach((line, i) => {
      const slot = 'sp-' + ch.id + '-' + i;
      h += '<div class="v-row"><div class="grow"><div class="v-de">' + esc(line) + '</div></div><div class="actions">' + speakBtn(line) + micBtn(line, slot) + '</div></div><div id="' + slot + '"></div>';
    });
    if (ch.speak && ch.speak.prompt) h += '<div class="callout gold mt"><b>Your speaking task:</b> ' + esc(ch.speak.prompt) + '</div>';
    h += '</div>';
  } else {
    h += '<div class="card"><h3>Spoken Q&amp;A Practice</h3>';
    (ch.extra || []).forEach((ex, i) => {
      const slot = 'ex-' + ch.id + '-' + i;
      h += '<div class="v-row"><div class="grow"><div class="v-de">' + esc(ex.q) + '</div><div class="v-en">Answer: ' + esc(ex.a) + '</div></div><div class="actions">' + speakBtn(ex.a) + micBtn(ex.a, slot) + '</div></div><div id="' + slot + '"></div>';
    });
    h += '</div>';
  }

  h += '<div class="btn-row mt">' +
    '<button class="btn ' + (done ? 'soft-ok' : 'primary') + '" onclick="markSpokenDone(\'' + ch.id + '\')">' + (done ? 'Practised ✓' : 'Mark Spoken Done (+5 XP)') + '</button>' +
    '<button class="btn ghost" onclick="openGrammarChapter(\'' + ch.id + '\')">Open Grammar →</button></div>';
  return h;
}
function speakChapterDialogue(chId, loop) {
  const ch = CHAPTERS[chId]; if (!ch || !ch.dialogue) return;
  speakLines(ch.dialogue.map(d => d.de), loop);
}
function markSpokenDone(chId) {
  if (!store.data.spokenDone[chId]) { store.data.spokenDone[chId] = Date.now(); store.addXP(5); toast('Spoken chapter done! +5 XP'); }
  store.save(); render();
}

/* ---- Pflege (Nursing Spoken & Audio) inside Spoken Section ---- */
function viewPflegeSpoken() {
  const n = NURSING;
  let h = '<div class="chips">' +
    '<button class="chip ' + (state.pflegeTab === 'phrases' ? 'active' : '') + '" onclick="state.pflegeTab=\'phrases\';render()">Patient Phrases (' + n.phrases.length + ')</button>' +
    '<button class="chip ' + (state.pflegeTab === 'dialogues' ? 'active' : '') + '" onclick="state.pflegeTab=\'dialogues\';render()">Ward Dialogues (2)</button>' +
    '<button class="chip ' + (state.pflegeTab === 'words' ? 'active' : '') + '" onclick="state.pflegeTab=\'words\';render()">Hospital Words (' + n.words.length + ')</button>' +
    '<button class="chip ' + (state.pflegeTab === 'quiz' ? 'active' : '') + '" onclick="state.pflegeTab=\'quiz\';render()">Pflege Quiz</button>' +
    '<button class="chip ' + (state.pflegeTab === 'podcast' ? 'active' : '') + '" onclick="state.pflegeTab=\'podcast\';render()">Day 1 Podcast</button></div>';

  if (state.pflegeTab === 'phrases') {
    h += '<div class="card"><h3>Patient Phrases (Always Formal "Sie")</h3>';
    n.phrases.forEach((p, i) => {
      const slot = 'nph-' + i;
      h += '<div class="v-row"><div class="grow"><div class="v-de">' + esc(p.de) + '</div><div class="v-ph">' + esc(p.ph) + '</div><div class="v-en">' + esc(p.en) + '</div></div><div class="actions">' + speakBtn(p.de) + micBtn(p.de, slot) + '</div></div><div id="' + slot + '"></div>';
    });
    h += '</div>';
  } else if (state.pflegeTab === 'dialogues') {
    [['Morning Round', 'dialogue'], ['Shift Handover (Schichtübergabe)', 'handoverDialogue']].forEach(([title, key]) => {
      const list = n[key] || [];
      h += '<div class="card"><div class="row mb"><h3 class="grow" style="margin:0">' + title + '</h3>' +
        '<button class="btn primary sm" onclick="speakNursing(\'' + key + '\',false)">Play</button>' +
        '<button class="btn ghost sm" onclick="stopSpeak()">Stop</button></div>';
      list.forEach(d => {
        h += '<div class="v-row"><div class="who ' + (d.who === 'B' ? 'b' : '') + '">' + d.who + '</div>' +
          '<div class="grow"><div class="v-de">' + esc(d.de) + '</div><div class="v-ph">' + esc(d.ph) + '</div><div class="v-en">' + esc(d.en) + '</div></div>' + speakBtn(d.de) + '</div>';
      });
      h += '</div>';
    });
  } else if (state.pflegeTab === 'words') {
    h += '<div class="card"><div class="row mb"><h3 class="grow" style="margin:0">Hospital Vocabulary</h3>' +
      '<button class="btn ghost sm" onclick="addNursingToCards()">+ Save All to Cards</button></div>';
    n.words.forEach(v => {
      h += '<div class="v-row"><div class="grow"><div class="v-de">' + artBadge(v.art) + esc(v.de) +
        (v.pl ? ' <span class="muted">· die ' + esc(v.pl) + '</span>' : '') + '</div><div class="v-ph">' + esc(v.ph) + '</div><div class="v-en">' + esc(v.en) + '</div></div>' + speakBtn(v.art + ' ' + v.de) + '</div>';
    });
    h += '</div>';
  } else if (state.pflegeTab === 'quiz') {
    h += '<div class="card"><h3>Pflege Quick Check</h3>';
    (n.quiz || []).forEach((q, qi) => {
      const picked = state.nursingQuiz.answers[qi];
      h += '<div class="mb"><p><b>' + (qi + 1) + '.</b> ' + esc(q.q) + '</p>';
      q.options.forEach((opt, oi) => {
        let cls = 'opt';
        if (picked !== undefined) cls += oi === q.answer ? ' correct' : (oi === picked ? ' wrong' : ' dim');
        h += '<button class="' + cls + '" ' + (picked !== undefined ? 'disabled' : '') + ' onclick="answerNursingQuiz(' + qi + ',' + oi + ')"><span class="opt-k">' + optLetter(oi) + '</span>' + esc(opt) + '</button>';
      });
      if (picked !== undefined) h += '<div class="fb ' + (picked === q.answer ? 'good' : 'bad') + '">' + esc(q.why) + '</div>';
      h += '</div>';
    });
    h += '</div>';
  } else {
    const p = PODCAST;
    h += '<div class="card"><h3>' + esc(p.title) + ' (' + esc(p.duration) + ')</h3><p class="sub">' + esc(p.desc) + '</p>' +
      '<audio controls preload="metadata" src="' + escAttr(p.file) + '"></audio></div><div class="card"><h3>Key Lines</h3>';
    p.highlights.forEach(l => {
      h += '<div class="v-row"><div class="grow"><div class="v-de">' + esc(l.de) + '</div><div class="v-ph">' + esc(l.ph) + '</div><div class="v-en">' + esc(l.en) + '</div></div>' + speakBtn(l.de) + '</div>';
    });
    h += '</div>';
  }
  return h;
}
function speakNursing(key, loop) { speakLines((NURSING[key] || []).map(d => d.de), loop); }
function answerNursingQuiz(qi, oi) {
  if (state.nursingQuiz.answers[qi] !== undefined) return;
  state.nursingQuiz.answers[qi] = oi;
  if (oi === NURSING.quiz[qi].answer) { state.nursingQuiz.score++; store.addXP(2); }
  render();
}

/* ================= 3. PRACTICE SECTION (Flashcards · Drill/Typing · Mock Exams) ================= */
function viewPractice() {
  let h = '<p class="eyebrow">Section 3 · Active Recall</p><h1>Daily Practice</h1>' +
    '<div class="seg">' +
    '<button class="' + (state.practiceTab === 'cards' ? 'active' : '') + '" onclick="state.practiceTab=\'cards\';state.cardQueue=buildCardQueue(state.cardFilter);state.cardIdx=0;state.cardFlipped=false;render()">Flashcards</button>' +
    '<button class="' + (state.practiceTab === 'drill' ? 'active' : '') + '" onclick="state.practiceTab=\'drill\';render()">Vocab &amp; Typing</button>' +
    '<button class="' + (state.practiceTab === 'mock' ? 'active' : '') + '" onclick="state.practiceTab=\'mock\';render()">Mock Exams</button></div>';

  if (state.practiceTab === 'cards') return h + viewCardsInner();
  if (state.practiceTab === 'drill') return h + viewTrainerInner();
  return h + viewMockInner();
}

/* ---- Flashcards (SRS) ---- */
function dueCards() { const now = Date.now(); return allVocab().filter(v => { const c = store.data.cards[v.key]; return c && c.due <= now; }); }
function buildCardQueue(filter) {
  const now = Date.now();
  let items = allVocab();
  if (filter === 'due') items = items.filter(v => { const c = store.data.cards[v.key]; return c && c.due <= now; });
  else if (filter === 'weak') items = items.filter(v => { const c = store.data.cards[v.key]; return c && c.again >= 2; });
  else if (filter !== 'all') items = items.filter(v => v.level === filter);
  items.sort((a, b) => ((store.data.cards[b.key]?.again || 0) - (store.data.cards[a.key]?.again || 0)) || ((store.data.cards[a.key]?.due || 0) - (store.data.cards[b.key]?.due || 0)));
  return items.slice(0, 30);
}
function setCardFilter(f) { state.cardFilter = f; state.cardIdx = 0; state.cardFlipped = false; state.cardQueue = buildCardQueue(f); render(); }
function viewCardsInner() {
  const filters = [['due', 'Due (' + dueCards().length + ')'], ['weak', 'Weak'], ['A0', 'A0'], ['A1', 'A1'], ['A2', 'A2'], ['B1', 'B1'], ['B2', 'B2'], ['C1', 'C1'], ['Pflege', 'Pflege']];
  let h = '<div class="chips">' + filters.map(([id, lbl]) => '<button class="chip ' + (state.cardFilter === id ? 'active' : '') + '" onclick="setCardFilter(\'' + id + '\')">' + lbl + '</button>').join('') + '</div>';
  const q = state.cardQueue;
  if (!q.length) {
    return h + '<div class="card"><p class="sub" style="margin:0">No cards due in this filter. Pick a level chip above (like A1) or save words from any Grammar chapter.</p></div>';
  }
  const card = q[state.cardIdx];
  const fullDe = (card.art ? card.art + ' ' : '') + card.de;
  h += '<div class="fc-stage"><div class="fc-inner ' + (state.cardFlipped ? 'flipped' : '') + '" data-flip>' +
    '<div class="fc-face"><div class="muted">' + esc(card.level) + ' · Card ' + (state.cardIdx + 1) + ' of ' + q.length + '</div>' +
    '<div class="fc-word">' + artBadge(card.art) + esc(card.de) + '</div>' +
    '<div class="v-ph">' + esc(card.ph) + '</div>' + speakBtn(fullDe) +
    '<div class="muted mt">Tap to flip · Swipe ← Again / → Good</div></div>' +
    '<div class="fc-face fc-back"><div class="muted">English Meaning</div>' +
    '<div class="fc-back-word">' + esc(card.en) + '</div>' +
    '<div class="v-de">' + artBadge(card.art) + esc(card.de) + '</div>' +
    (card.pl ? '<div class="muted">plural: die ' + esc(card.pl) + '</div>' : '') +
    speakBtn(fullDe) + '</div></div></div>' +
    '<div class="btn-row">' +
    '<button class="btn soft-bad" onclick="gradeCard(0)">Again</button>' +
    '<button class="btn primary" onclick="gradeCard(1)">Good</button>' +
    '<button class="btn soft-ok" onclick="gradeCard(2)">Easy</button></div>';
  return h;
}
function gradeCard(g) {
  const card = state.cardQueue[state.cardIdx]; if (!card) return;
  const now = Date.now(), c = store.data.cards[card.key] || { ivl: 0, due: 0, again: 0 }, steps = [1, 3, 7, 14, 30, 60];
  if (g === 0) { c.ivl = 0; c.due = now + 6e5; c.again++; }
  else if (g === 1) { const i = steps.indexOf(c.ivl); c.ivl = i < 0 ? 1 : steps[Math.min(i + 1, steps.length - 1)]; c.due = now + c.ivl * 864e5; }
  else { c.ivl = c.ivl ? Math.min(c.ivl * 2, 90) : 3; c.due = now + c.ivl * 864e5; }
  store.data.cards[card.key] = c; store.addXP(1); store.save();
  state.cardFlipped = false; state.cardIdx++;
  if (state.cardIdx >= state.cardQueue.length) { toast('Session complete!'); state.cardQueue = buildCardQueue(state.cardFilter); state.cardIdx = 0; }
  render();
}
function addChapterToCards(chId) {
  const ch = CHAPTERS[chId]; let added = 0;
  (ch.vocab || []).forEach((v, i) => { const k = chId + ':' + i; if (!store.data.cards[k]) { store.data.cards[k] = { ivl: 0, due: 0, again: 0 }; added++; } });
  store.save(); toast(added ? added + ' words saved to Flashcards.' : 'Already in Flashcards.');
}
function addNursingToCards() {
  let added = 0;
  NURSING.words.forEach((v, i) => { const k = 'nursing:' + i; if (!store.data.cards[k]) { store.data.cards[k] = { ivl: 0, due: 0, again: 0 }; added++; } });
  store.save(); toast(added ? added + ' nursing words saved.' : 'Already in Flashcards.');
}

/* ---- Vocab & Typing Drill ---- */
function startTrainer(mode) {
  const saved = allVocab().filter(v => store.data.cards[v.key]);
  const raw = saved.length >= 10 ? saved : allVocab();
  const seen = new Set(), pool = raw.filter(v => { const k = v.de.trim().toLowerCase(); if (seen.has(k)) return false; seen.add(k); return true; });
  const qs = [...pool].sort(() => Math.random() - 0.5).slice(0, 10).map(item => {
    if (mode === 'type-de') return { item, options: [], answer: 0, mode };
    const used = new Set([(mode === 'de-en' ? item.en : item.de).trim().toLowerCase()]);
    const wrongs = [];
    for (const c of [...pool].sort(() => Math.random() - 0.5)) {
      if (wrongs.length >= 3) break;
      const txt = (mode === 'de-en' ? c.en : c.de).trim().toLowerCase();
      if (!used.has(txt)) { used.add(txt); wrongs.push(c); }
    }
    const opts = mode === 'de-en' ? [item.en, ...wrongs.map(w => w.en)] : [item.de, ...wrongs.map(w => w.de)];
    const ord = opts.map((_, i) => i).sort(() => Math.random() - 0.5);
    return { item, options: ord.map(i => opts[i]), answer: ord.indexOf(0), mode };
  });
  state.trainer = { mode, qs, idx: 0, score: 0, picked: null, typed: '', typedOk: null, finished: false };
  render();
}
function insertUmlaut(ch) {
  const inp = document.getElementById('typeInput'); if (!inp) return;
  const s = inp.selectionStart || inp.value.length, e = inp.selectionEnd || inp.value.length;
  inp.value = inp.value.slice(0, s) + ch + inp.value.slice(e); inp.focus(); inp.setSelectionRange(s + 1, s + 1);
}
function checkTypedTrainer() {
  const t = state.trainer; if (!t || t.picked !== null) return;
  const val = (document.getElementById('typeInput')?.value || '').trim();
  if (!val) { toast('Type your German answer first.'); return; }
  const q = t.qs[t.idx], full = normalizeDe((q.item.art ? q.item.art + ' ' : '') + q.item.de), bare = normalizeDe(q.item.de), u = normalizeDe(val);
  t.typed = val; t.typedOk = (u === full || u === bare); t.picked = t.typedOk ? 1 : 0;
  if (t.typedOk) { t.score++; store.addXP(2); }
  render();
}
function viewTrainerInner() {
  const t = state.trainer;
  let h = '<div class="btn-row mb">' +
    '<button class="btn sm ' + (t && t.mode === 'de-en' ? 'primary' : 'ghost') + '" onclick="startTrainer(\'de-en\')">DE → EN</button>' +
    '<button class="btn sm ' + (t && t.mode === 'en-de' ? 'primary' : 'ghost') + '" onclick="startTrainer(\'en-de\')">EN → DE</button>' +
    '<button class="btn sm ' + (t && t.mode === 'type-de' ? 'primary' : 'ghost') + '" onclick="startTrainer(\'type-de\')">Type German</button></div>';
  if (!t) return h + '<div class="card"><p class="sub" style="margin:0">Pick a mode above to start a 10-question drill. Best score: <b>' + (store.data.trainerBest || 0) + '/10</b>.</p></div>';
  if (t.finished) {
    store.data.trainerBest = Math.max(store.data.trainerBest || 0, t.score); store.save();
    return h + '<div class="card"><div class="callout ' + (t.score >= 7 ? 'ok' : '') + '"><b>Score: ' + t.score + ' / 10</b></div><button class="btn primary" onclick="startTrainer(\'' + t.mode + '\')">Play Again →</button></div>';
  }
  const q = t.qs[t.idx], fullDe = (q.item.art ? q.item.art + ' ' : '') + q.item.de;
  h += '<div class="card"><div class="muted mb">Question ' + (t.idx + 1) + ' of 10 · Score: ' + t.score + '</div>';
  if (q.mode === 'type-de') {
    h += '<h2 style="margin:0 0 10px">' + esc(q.item.en) + '</h2>';
    if (t.picked === null) {
      h += '<input id="typeInput" class="input" placeholder="Type in German…" autocomplete="off" onkeydown="if(event.key===\'Enter\')checkTypedTrainer()" autofocus>' +
        '<div class="umlauts">' + ['ä', 'ö', 'ü', 'ß', 'Ä', 'Ö', 'Ü'].map(c => '<button type="button" onclick="insertUmlaut(\'' + c + '\')">' + c + '</button>').join('') + '</div>' +
        '<button class="btn primary" onclick="checkTypedTrainer()">Check Answer</button>';
    } else {
      h += '<div class="fb ' + (t.typedOk ? 'good' : 'bad') + '"><b>' + (t.typedOk ? 'Correct! ' : 'Expected: ' + esc(fullDe) + ' · ') + '</b>' + esc(q.item.ph) + ' ' + speakBtn(fullDe) + '</div>' +
        '<button class="btn primary mt" onclick="nextTrainer()">' + (t.idx === 9 ? 'Finish →' : 'Next →') + '</button>';
    }
    return h + '</div>';
  }
  h += '<div class="row mb"><h2 style="margin:0" class="grow">' + (q.mode === 'de-en' ? esc(fullDe) : esc(q.item.en)) + '</h2>' + (q.mode === 'de-en' ? speakBtn(fullDe) : '') + '</div>';
  q.options.forEach((opt, oi) => {
    let cls = 'opt';
    if (t.picked !== null) cls += oi === q.answer ? ' correct' : (oi === t.picked ? ' wrong' : ' dim');
    h += '<button class="' + cls + '" ' + (t.picked !== null ? 'disabled' : '') + ' onclick="answerTrainer(' + oi + ')"><span class="opt-k">' + optLetter(oi) + '</span>' + esc(opt) + '</button>';
  });
  if (t.picked !== null) {
    h += '<div class="fb ' + (t.picked === q.answer ? 'good' : 'bad') + '"><b>' + esc(fullDe) + '</b> — ' + esc(q.item.en) + ' (' + esc(q.item.ph) + ')</div>' +
      '<button class="btn primary mt" onclick="nextTrainer()">' + (t.idx === 9 ? 'Finish →' : 'Next →') + '</button>';
  }
  return h + '</div>';
}
function answerTrainer(oi) { const t = state.trainer; if (!t || t.picked !== null) return; t.picked = oi; if (oi === t.qs[t.idx].answer) { t.score++; store.addXP(2); } render(); }
function nextTrainer() { const t = state.trainer; if (!t) return; t.picked = null; t.typed = ''; t.typedOk = null; t.idx++; if (t.idx >= 10) { t.finished = true; store.addXP(5); } render(); }

/* ---- Mock Exams (A1–C1) ---- */
function selectMockLv(lv) { state.mockLv = lv; if (state.mock && state.mock.level !== lv) { clearInterval(startMockTimer._t); startMockTimer._t = null; state.mock = null; } render(); }
function startMock(lv) {
  const src = mockFor(lv);
  state.mockLv = lv;
  state.mock = { level: lv, qs: [...src.questions], idx: 0, answers: {}, score: 0, remaining: src.time || 1200, running: true, finished: false };
  render(); startMockTimer();
}
function viewMockInner() {
  let h = '<div class="chips">' + LEVELS.map(lv => '<button class="chip ' + (state.mockLv === lv.id ? 'active' : '') + '" onclick="selectMockLv(\'' + lv.id + '\')">' + lv.id + '</button>').join('') + '</div>';
  const m = state.mock;
  if (!m || m.level !== state.mockLv) {
    const src = mockFor(state.mockLv);
    const best = mockBest(state.mockLv);
    const qCount = src.questions.length;
    const mins = Math.round((src.time || 1200) / 60);
    return h + '<div class="card"><h3>' + state.mockLv + ' Practice Mock Exam</h3>' +
      '<p class="sub">' + qCount + ' questions · ' + mins + ' minutes · Pass at 60%. You can go back and change answers before submitting.</p>' +
      '<p class="muted mb">Best score: <b>' + (best !== null && best !== undefined ? best + '/100' : 'Not taken yet') + '</b></p>' +
      '<button class="btn primary" onclick="startMock(\'' + state.mockLv + '\')">Start ' + state.mockLv + ' Mock Exam →</button></div>';
  }
  if (m.finished) {
    const pct = Math.round(m.score / m.qs.length * 100);
    h += '<div class="card"><div class="callout ' + (pct >= 60 ? 'ok' : '') + '"><b>' + m.level + ' Result: ' + pct + '/100 (' + m.score + '/' + m.qs.length + ')</b> — ' + (pct >= 60 ? 'Passed!' : 'Keep practising (60% to pass).') + '</div>' +
      '<button class="btn primary mb" onclick="startMock(\'' + m.level + '\')">Retake ' + m.level + ' Mock</button>';
    m.qs.forEach((q, i) => {
      const p = m.answers[i], ok = p === q.answer;
      h += '<div class="v-row"><div class="grow"><b>' + (i + 1) + '. ' + esc(q.q) + '</b><div class="' + (ok ? 'v-en' : 'v-ph') + '">Your answer: ' + esc(q.options[p] ?? '—') + (ok ? ' ✓' : ' · Correct: ' + esc(q.options[q.answer])) + '</div></div></div>';
    });
    return h + '</div>';
  }
  const q = m.qs[m.idx], ansCount = Object.keys(m.answers).length, pick = m.answers[m.idx];
  const mm = Math.floor(m.remaining / 60), ss = String(m.remaining % 60).padStart(2, '0');
  h += '<div class="card"><div class="row mb"><span class="timer ' + (m.remaining <= 120 ? 'low' : '') + '">' + mm + ':' + ss + '</span><span class="muted grow" style="text-align:right">Q ' + (m.idx + 1) + '/' + m.qs.length + ' · ' + ansCount + ' answered</span></div>' +
    '<div class="row mb"><b class="grow">' + esc(q.q) + '</b>' + speakBtn(q.q) + '</div>';
  q.options.forEach((opt, oi) => {
    h += '<button class="opt ' + (pick === oi ? 'selected' : '') + '" onclick="answerMock(' + oi + ')"><span class="opt-k">' + optLetter(oi) + '</span>' + esc(opt) + '</button>';
  });
  h += '<div class="btn-row mt"><button class="btn ghost sm" ' + (m.idx === 0 ? 'disabled' : '') + ' onclick="moveMock(-1)">← Previous</button>' +
    (m.idx < m.qs.length - 1 ? '<button class="btn sm" onclick="moveMock(1)">Next →</button>' : '<button class="btn primary sm" onclick="submitMock()">Submit Exam ✓</button>') +
    '</div></div>';
  return h;
}
function answerMock(oi) { const m = state.mock; if (!m || m.finished) return; m.answers[m.idx] = oi; if (m.idx < m.qs.length - 1) m.idx++; render(); }
function moveMock(d) { const m = state.mock; if (!m || m.finished) return; m.idx = Math.max(0, Math.min(m.qs.length - 1, m.idx + d)); render(); }
function submitMock() { finishMock(); render(); }
function finishMock() {
  const m = state.mock; if (!m || m.finished) return;
  clearInterval(startMockTimer._t); startMockTimer._t = null;
  m.running = false; m.finished = true;
  m.score = m.qs.reduce((a, q, i) => a + (m.answers[i] === q.answer ? 1 : 0), 0);
  const pct = Math.round(m.score / m.qs.length * 100);
  store.data.mockBests[m.level] = Math.max(store.data.mockBests[m.level] || 0, pct);
  if (m.level === 'A1') store.data.mockBest = store.data.mockBests.A1;
  store.addXP(20); store.save();
  if (pct >= 60) celebrate();
  toast(pct >= 60 ? 'Mock passed! +20 XP' : 'Mock submitted. +20 XP');
}
function startMockTimer() {
  clearInterval(startMockTimer._t);
  startMockTimer._t = setInterval(() => {
    const m = state.mock; if (!m || !m.running) { clearInterval(startMockTimer._t); startMockTimer._t = null; return; }
    m.remaining--;
    const el = document.querySelector('.timer');
    if (el) { el.textContent = Math.floor(m.remaining / 60) + ':' + String(m.remaining % 60).padStart(2, '0'); if (m.remaining <= 120) el.classList.add('low'); }
    if (m.remaining <= 0) { finishMock(); render(); }
  }, 1000);
}

/* ================= Word Search & Profile/Progress ================= */
function viewSearch() {
  const levels = ['all', 'A0', 'A1', 'A2', 'B1', 'B2', 'C1', 'Pflege'];
  return '<p class="eyebrow">Dictionary</p><h1>Word Search</h1>' +
    '<input class="input" placeholder="Search German or English word…" value="' + escAttr(state.searchQ) + '" oninput="state.searchQ=this.value;state.searchShown=120;renderSearchList()" autofocus>' +
    '<div class="chips">' + levels.map(lv => '<button class="chip ' + (state.searchLv === lv ? 'active' : '') + '" onclick="state.searchLv=\'' + lv + '\';state.searchShown=120;render()">' + (lv === 'all' ? 'All' : lv) + '</button>').join('') + '</div>' +
    '<div id="searchList">' + searchListHTML() + '</div>';
}
function searchListHTML() {
  const q = (state.searchQ || '').trim().toLowerCase();
  let items = allVocab();
  if (state.searchLv !== 'all') items = items.filter(v => v.level === state.searchLv);
  if (q) items = items.filter(v => v.de.toLowerCase().includes(q) || v.en.toLowerCase().includes(q));
  if (!items.length) return '<p class="muted">No matching words found.</p>';
  const shown = Math.min(state.searchShown, items.length);
  let h = '<div class="muted mb">Showing ' + shown + ' of ' + items.length + ' words</div><div class="card">';
  items.slice(0, shown).forEach(v => {
    const say = (v.art ? v.art + ' ' : '') + v.de;
    const saved = !!store.data.cards[v.key];
    h += '<div class="v-row"><div class="grow"><div class="v-de">' + artBadge(v.art) + esc(v.de) + '</div>' +
      '<div class="v-en">' + esc(v.en) + ' · <span class="muted">' + esc(v.level) + '</span></div></div>' +
      '<div class="actions"><button class="act-btn" onclick="saveOneWord(\'' + escAttr(v.key) + '\')" aria-label="Save to flashcards">' + (saved ? IC.check : IC.plus) + '</button>' + speakBtn(say) + '</div></div>';
  });
  if (items.length > shown) h += '<button class="btn ghost mt" onclick="state.searchShown+=120;renderSearchList()">Load More</button>';
  return h + '</div>';
}
function renderSearchList() { const el = document.getElementById('searchList'); if (el) el.innerHTML = searchListHTML(); }
function saveOneWord(key) {
  if (!store.data.cards[key]) { store.data.cards[key] = { ivl: 0, due: 0, again: 0 }; store.save(); toast('Saved to Flashcards.'); renderSearchList(); }
  else toast('Already in Flashcards.');
}

function viewProfile() {
  const d = store.data;
  const gDone = Object.keys(d.completed).length;
  const sDone = Object.keys(d.spokenDone).length;
  const totalChs = Object.keys(CHAPTERS).length;
  let h = '<p class="eyebrow">Overview</p><h1>Progress &amp; Backup</h1>' +
    '<div class="stats-grid">' +
    '<div class="stat-box"><b>' + d.xp + '</b><span>XP</span></div>' +
    '<div class="stat-box"><b>' + d.streak + '</b><span>Streak</span></div>' +
    '<div class="stat-box"><b>' + gDone + '/' + totalChs + '</b><span>Grammar</span></div>' +
    '<div class="stat-box"><b>' + sDone + '/' + totalChs + '</b><span>Spoken</span></div></div>' + weekStripHTML();

  h += '<div class="card"><h3>Level Progress &amp; Mock Scores</h3>';
  LEVELS.forEach(lv => {
    const chs = chapterList(lv.id);
    const done = chs.filter(c => d.completed[c.id]).length;
    const pct = Math.round(done / chs.length * 100);
    const mb = mockBest(lv.id);
    h += '<div class="v-row"><div class="grow"><b>' + lv.id + ' — ' + esc(lv.name.split('—')[1] || lv.name) + '</b>' +
      '<div class="muted">' + done + '/' + chs.length + ' chapters · Mock: ' + (mb !== null && mb !== undefined ? mb + '/100' : '—') + '</div>' +
      '<div class="bar"><i style="width:' + pct + '%"></i></div></div><b>' + pct + '%</b></div>';
  });
  h += '</div>';

  h += '<div class="card"><h3>Backup &amp; Device Data</h3><p class="sub">All progress stays privately on your device (no login, no tracking). Export JSON to back up.</p>' +
    '<div class="btn-row"><button class="btn primary sm" onclick="exportProgress()">Export JSON</button>' +
    '<button class="btn ghost sm" onclick="document.getElementById(\'importFile\').click()">Import JSON</button>' +
    '<button class="btn soft-bad sm" onclick="if(confirm(\'Reset all progress?\')){localStorage.removeItem(store.key);location.reload();}">Reset</button></div></div>';

  h += '<p class="muted" style="text-align:center;margin-top:16px">Deutsch Lernen · Built by Ashutosh Kumar · Free forever, no ads, no tracking.</p>';
  return h;
}
function exportProgress() {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([JSON.stringify(store.data, null, 2)], { type: 'application/json' }));
  a.download = 'german-learning-progress.json'; a.click(); toast('Progress exported.');
}
function importProgressFile(input) {
  const file = input.files[0]; if (!file) return;
  const r = new FileReader();
  r.onload = () => {
    try {
      const data = JSON.parse(r.result); if (typeof data.xp !== 'number') throw new Error();
      store.data = Object.assign(store.fresh(), data); store.save(); toast('Progress imported!'); render();
    } catch (e) { toast('Invalid backup file.'); }
  };
  r.readAsText(file);
}

/* ================= Init ================= */
Speech.init();
store.load();
applyTheme(store.data.theme || 'dark');
applyTextSize(!!store.data.largeText);
state.cardQueue = buildCardQueue('due');
if (!location.hash) location.hash = '#/grammar';
render();
if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
  navigator.serviceWorker.register('./sw.js').catch(() => {});
}
