/* ============================================================
   Deutsch Lernen — curriculum data
   English + German only. All content is ORIGINAL, written for
   this app. Structure mirrors Netzwerk neu (A1–B1), Sicher!
   aktuell (B2) and Aspekte neu (C1) — topics and grammar order
   only, never copied text. Every German sentence was checked
   for correct standard German.
   ============================================================ */

const LEVELS = [
  { id:'A1', name:'A1 — Beginner', tag:'Start here', status:'complete', full:12, total:12,
    desc:'From zero: letters and sounds, numbers, greetings, introductions, people, city, food, time, home, work, health, weather and travel — in tiny 2–4 minute topics.',
    goal:'You can introduce yourself, ask simple questions and handle everyday situations.',
    vocab:'~510 words', hours:'80–200 hours', book:'Netzwerk neu A1' },
  { id:'A2', name:'A2 — Elementary', tag:'Complete', status:'complete', full:12, total:12,
    desc:'Talk about the past, family, shopping, travel and health — in tiny 2–4 minute topics.',
    goal:'You can talk about your past and plans, and handle routine tasks.',
    vocab:'~878 words', hours:'150–400 hours total', book:'Netzwerk neu A2' },
  { id:'B1', name:'B1 — Intermediate', tag:'Visa level · 3 full chapters', status:'partial', full:3, total:12,
    desc:'The level you need for the Ausbildung visa. Opinions, plans, reasons — in connected sentences.',
    goal:'You can deal with most situations in Germany and explain your opinions.',
    vocab:'~2,000–3,000 words (Goethe wordlist ~2,400)', hours:'350–650 hours total', book:'Netzwerk neu B1' },
  { id:'B2', name:'B2 — Upper Intermediate', tag:'Job level · 3 full chapters', status:'partial', full:3, total:12,
    desc:'The level employers and the nursing licence need. Fluent discussion, reports, arguments.',
    goal:'You can discuss complex topics and work in German, including nursing (telc Pflege).',
    vocab:'~3,000–6,000 words', hours:'600–900 hours total', book:'Sicher! aktuell B2' },
  { id:'C1', name:'C1 — Advanced', tag:'Stretch goal · 3 full chapters', status:'partial', full:3, total:12,
    desc:'Demanding texts, implicit meaning, flexible and precise German for study and work.',
    goal:'You can use German flexibly for academic and professional purposes.',
    vocab:'~5,000–8,000 words', hours:'800–1,200 hours total', book:'Aspekte neu C1' },
];

/* Chapter shape (full):
   id, n, level, title, concept, time, sounds?, dialogue[], vocab[],
   grammar{title, plain, rule, examples[]}, quiz[], speak{prompt, model},
   recap[], tip, extra[{q,a}], next
   Syllabus chapter shape: id, n, level, title, concept, time, syllabus:true,
   learn[], grammar{title, plain}, vocab[] (core words), next
*/

const CHAPTERS = {};

/* ================= A1 ================= */

CHAPTERS['A1-1'] = {
  id:'A1-1',
  n:1,
  level:'A1',
  title:'Letters & Sounds',
  time:'18 min',
  concept:'Learn the 26 German letters, the special letters Ä Ö Ü ß, and how German sounds work — from absolute zero.',
  sounds:[
    {
      de:'A, E, I, O, U',
      en:'Vater = father, Bett = bed',
      ph:'Short and clear, like in English'
    },
    {
      de:'Ä',
      en:'Mädchen = girl',
      ph:'Say "eh" with slightly rounded lips'
    },
    {
      de:'Ö',
      en:'schön = nice, beautiful',
      ph:'Say "e" with round lips'
    },
    {
      de:'Ü',
      en:'Tür = door',
      ph:'Say "ee" with round lips'
    },
    {
      de:'ß',
      en:'Straße = street',
      ph:'Say "ss", never "z"'
    },
    {
      de:'J',
      en:'ja = yes',
      ph:'Sounds like Y'
    },
    {
      de:'V',
      en:'Vater = father',
      ph:'Sounds like F'
    },
    {
      de:'W',
      en:'Wasser = water',
      ph:'Sounds like V'
    },
    {
      de:'Z',
      en:'Zeit = time',
      ph:'Sounds like TS'
    },
    {
      de:'EI',
      en:'mein = my',
      ph:'Sounds like "my"'
    },
    {
      de:'AU',
      en:'Haus = house',
      ph:'Sounds like "ow"'
    },
    {
      de:'IE',
      en:'Liebe = love',
      ph:'Sounds like "ee"'
    },
    {
      de:'CH',
      en:'ich = I',
      ph:'Soft, like a cat hissing'
    },
    {
      de:'SCH',
      en:'Schule = school',
      ph:'Sounds like "sh"'
    },
    {
      de:'R',
      en:'rot = red',
      ph:'Soft, in the throat'
    },
    {
      de:'S',
      en:'Sonne = sun',
      ph:'Sounds like "z" before a vowel'
    }
  ],
  dialogue:[
    {
      who:'A',
      de:'Wie schreibt man deinen Namen?',
      en:'How do you spell your name?',
      ph:'vee SHRAIPT mahn DAI-nen NAH-men'
    },
    {
      who:'B',
      de:'A-N-N-A. Anna.',
      en:'A-N-N-A. Anna.',
      ph:'ah - enn - enn - ah. AH-nah'
    },
    {
      who:'A',
      de:'Und dein Nachname?',
      en:'And your last name?',
      ph:'oont dine NAHKH-nah-me'
    },
    {
      who:'B',
      de:'S-C-H-M-I-D-T. Schmidt.',
      en:'S-C-H-M-I-D-T. Schmidt.',
      ph:'ess - tsay - hah - emm - ee - day - tay. shmit'
    },
    {
      who:'A',
      de:'Danke! Ich buchstabiere: B-E-N. Ben.',
      en:'Thank you! I spell: B-E-N. Ben.',
      ph:'DAHN-ke! ish book-shtah-BEE-re: bay - ay - enn. ben'
    },
    {
      who:'B',
      de:'Sehr gut! Willkommen in Deutschland!',
      en:'Very good! Welcome to Germany!',
      ph:'zair goot! vil-KOM-men in DOYCH-lahnt'
    }
  ],
  vocab:[
    {
      de:'A',
      art:'',
      pl:'',
      en:'letter A — Apfel (apple)',
      ph:'ah'
    },
    {
      de:'B',
      art:'',
      pl:'',
      en:'letter B — Brot (bread)',
      ph:'beh'
    },
    {
      de:'C',
      art:'',
      pl:'',
      en:'letter C — Café (café)',
      ph:'tseh'
    },
    {
      de:'D',
      art:'',
      pl:'',
      en:'letter D — Danke (thank you)',
      ph:'deh'
    },
    {
      de:'E',
      art:'',
      pl:'',
      en:'letter E — Essen (food)',
      ph:'eh'
    },
    {
      de:'F',
      art:'',
      pl:'',
      en:'letter F — Frau (woman)',
      ph:'eff'
    },
    {
      de:'G',
      art:'',
      pl:'',
      en:'letter G — gut (good)',
      ph:'geh'
    },
    {
      de:'H',
      art:'',
      pl:'',
      en:'letter H — Hallo (hello)',
      ph:'hah'
    },
    {
      de:'I',
      art:'',
      pl:'',
      en:'letter I — ich (I)',
      ph:'eeh'
    },
    {
      de:'J',
      art:'',
      pl:'',
      en:'letter J — ja (yes)',
      ph:'yott'
    },
    {
      de:'K',
      art:'',
      pl:'',
      en:'letter K — Kind (child)',
      ph:'kah'
    },
    {
      de:'L',
      art:'',
      pl:'',
      en:'letter L — Liebe (love)',
      ph:'ell'
    },
    {
      de:'M',
      art:'',
      pl:'',
      en:'letter M — Mann (man)',
      ph:'emm'
    },
    {
      de:'N',
      art:'',
      pl:'',
      en:'letter N — nein (no)',
      ph:'enn'
    },
    {
      de:'O',
      art:'',
      pl:'',
      en:'letter O — Oma (grandmother)',
      ph:'oh'
    },
    {
      de:'P',
      art:'',
      pl:'',
      en:'letter P — Park (park)',
      ph:'peh'
    },
    {
      de:'Q',
      art:'',
      pl:'',
      en:'letter Q — Quelle (source)',
      ph:'koo'
    },
    {
      de:'R',
      art:'',
      pl:'',
      en:'letter R — rot (red)',
      ph:'err'
    },
    {
      de:'S',
      art:'',
      pl:'',
      en:'letter S — Sonne (sun)',
      ph:'ess'
    },
    {
      de:'T',
      art:'',
      pl:'',
      en:'letter T — Tag (day)',
      ph:'teh'
    },
    {
      de:'U',
      art:'',
      pl:'',
      en:'letter U — und (and)',
      ph:'ooh'
    },
    {
      de:'V',
      art:'',
      pl:'',
      en:'letter V — Vater (father)',
      ph:'fau'
    },
    {
      de:'W',
      art:'',
      pl:'',
      en:'letter W — Wasser (water)',
      ph:'veh'
    },
    {
      de:'X',
      art:'',
      pl:'',
      en:'letter X — Taxi (taxi)',
      ph:'iks'
    },
    {
      de:'Y',
      art:'',
      pl:'',
      en:'letter Y — Yoga (yoga)',
      ph:'uepsilon'
    },
    {
      de:'Z',
      art:'',
      pl:'',
      en:'letter Z — Zeit (time)',
      ph:'tsett'
    },
    {
      de:'Buchstabe',
      art:'der',
      pl:'Buchstaben',
      en:'letter (of the alphabet)',
      ph:'BOOKH-shtah-be'
    },
    {
      de:'Wort',
      art:'das',
      pl:'Wörter',
      en:'word',
      ph:'vort'
    },
    {
      de:'Name',
      art:'der',
      pl:'Namen',
      en:'name',
      ph:'NAH-me'
    },
    {
      de:'Nachname',
      art:'der',
      pl:'Nachnamen',
      en:'last name, surname',
      ph:'NAHKH-nah-me'
    },
    {
      de:'buchstabieren',
      art:'',
      pl:'',
      en:'to spell (letters)',
      ph:'book-shtah-BEE-ren'
    },
    {
      de:'schreiben',
      art:'',
      pl:'',
      en:'to write',
      ph:'SHRAI-ben'
    }
  ],
  grammar:{
    title:'The alphabet & German sounds',
    plain:'German has the same 26 letters as English, and most sound as they are written. Four special letters: Ä, Ö, Ü and ß. Three golden rules: (1) W = V, V = F, J = Y. (2) Every noun starts with a capital letter. (3) What is written is spoken — almost no silent letters.',
    rule:'A = ah · B = beh · C = tseh · D = deh · E = eh · F = eff · G = geh · H = hah · I = eeh · J = yott · K = kah · L = ell · M = emm · N = enn · O = oh · P = peh · Q = koo · R = err · S = ess · T = teh · U = ooh · V = fau · W = veh · X = iks · Y = uepsilon · Z = tsett',
    examples:[
      {
        de:'Wasser',
        en:'water — W sounds like V',
        ph:'VAH-ser'
      },
      {
        de:'Vater',
        en:'father — V sounds like F',
        ph:'FAH-ter'
      },
      {
        de:'Straße',
        en:'street — ß sounds like ss',
        ph:'SHTRAH-se'
      }
    ]
  },
  quiz:[
    {q:'Which letter sounds like "Y" in German?', options:['J', 'W', 'V', 'Z'], answer:0,
     why:'J sounds like Y: ja = yes.'},
    {q:'How do you pronounce the letter "Z"?', options:['tsett', 'tseh', 'zee', 'zett'], answer:0,
     why:'Z = tsett, and it sounds like TS: Zeit = time.'},
    {q:'What does "ß" sound like?', options:['z', 's', 'ss', 'sh'], answer:2,
     why:'ß sounds like "ss": Straße = street.'},
    {q:'Which letters make the sound "my"?', options:['EI', 'AU', 'IE', 'EU'], answer:0,
     why:'EI sounds like "my": mein = my.'},
    {q:'Fill in: "Ich buchstabiere meinen Namen: A-___-N-A."', options:['M', 'N', 'B', 'E'], answer:1,
     why:'Anna is spelled A-N-N-A.'}
  ],
  speak:{
    prompt:'Say the alphabet A–Z out loud, 2 times. Then spell your name, letter by letter.',
    model:['A, B, C, D, E, F, G, H.', 'Mein Name ist Anna.', 'Ich buchstabiere: A-N-N-A.']
  },
  recap:[
    'German has 26 letters, the same as English. A = ah, B = beh, Z = tsett.',
    'Special letters: Ä, Ö, Ü and ß (ß sounds like ss).',
    'Tricky sounds: J = Y, V = F, W = V, Z = TS.',
    'Every noun starts with a capital letter, and words sound as they are written.'
  ],
  tip:'Memory tip: say every letter OUT LOUD 3 times. Reading silently does not train your mouth — speaking does.',
  extra:[
    {
      q:'Spell "Anna" out loud.',
      a:'A-N-N-A. Anna.'
    },
    {
      q:'Spell "Schmidt" out loud.',
      a:'S-C-H-M-I-D-T. Schmidt.'
    },
    {
      q:'What is "ß" called?',
      a:'Eszett or scharfes S. It sounds like "ss" — Straße.'
    }
  ],
  topics:[
    {
      id:'t1',
      title:'Alphabet A–M',
      time:'3 min',
      kind:'words',
      vocab:[
        {
          de:'A',
          art:'',
          pl:'',
          en:'letter A — Apfel (apple)',
          ph:'ah'
        },
        {
          de:'B',
          art:'',
          pl:'',
          en:'letter B — Brot (bread)',
          ph:'beh'
        },
        {
          de:'C',
          art:'',
          pl:'',
          en:'letter C — Café (café)',
          ph:'tseh'
        },
        {
          de:'D',
          art:'',
          pl:'',
          en:'letter D — Danke (thank you)',
          ph:'deh'
        },
        {
          de:'E',
          art:'',
          pl:'',
          en:'letter E — Essen (food)',
          ph:'eh'
        },
        {
          de:'F',
          art:'',
          pl:'',
          en:'letter F — Frau (woman)',
          ph:'eff'
        },
        {
          de:'G',
          art:'',
          pl:'',
          en:'letter G — gut (good)',
          ph:'geh'
        },
        {
          de:'H',
          art:'',
          pl:'',
          en:'letter H — Hallo (hello)',
          ph:'hah'
        },
        {
          de:'I',
          art:'',
          pl:'',
          en:'letter I — ich (I)',
          ph:'eeh'
        },
        {
          de:'J',
          art:'',
          pl:'',
          en:'letter J — ja (yes)',
          ph:'yott'
        },
        {
          de:'K',
          art:'',
          pl:'',
          en:'letter K — Kind (child)',
          ph:'kah'
        },
        {
          de:'L',
          art:'',
          pl:'',
          en:'letter L — Liebe (love)',
          ph:'ell'
        },
        {
          de:'M',
          art:'',
          pl:'',
          en:'letter M — Mann (man)',
          ph:'emm'
        }
      ]
    },
    {
      id:'t2',
      title:'Alphabet N–Z & spelling words',
      time:'3 min',
      kind:'words',
      vocab:[
        {
          de:'N',
          art:'',
          pl:'',
          en:'letter N — nein (no)',
          ph:'enn'
        },
        {
          de:'O',
          art:'',
          pl:'',
          en:'letter O — Oma (grandmother)',
          ph:'oh'
        },
        {
          de:'P',
          art:'',
          pl:'',
          en:'letter P — Park (park)',
          ph:'peh'
        },
        {
          de:'Q',
          art:'',
          pl:'',
          en:'letter Q — Quelle (source)',
          ph:'koo'
        },
        {
          de:'R',
          art:'',
          pl:'',
          en:'letter R — rot (red)',
          ph:'err'
        },
        {
          de:'S',
          art:'',
          pl:'',
          en:'letter S — Sonne (sun)',
          ph:'ess'
        },
        {
          de:'T',
          art:'',
          pl:'',
          en:'letter T — Tag (day)',
          ph:'teh'
        },
        {
          de:'U',
          art:'',
          pl:'',
          en:'letter U — und (and)',
          ph:'ooh'
        },
        {
          de:'V',
          art:'',
          pl:'',
          en:'letter V — Vater (father)',
          ph:'fau'
        },
        {
          de:'W',
          art:'',
          pl:'',
          en:'letter W — Wasser (water)',
          ph:'veh'
        },
        {
          de:'X',
          art:'',
          pl:'',
          en:'letter X — Taxi (taxi)',
          ph:'iks'
        },
        {
          de:'Y',
          art:'',
          pl:'',
          en:'letter Y — Yoga (yoga)',
          ph:'uepsilon'
        },
        {
          de:'Z',
          art:'',
          pl:'',
          en:'letter Z — Zeit (time)',
          ph:'tsett'
        },
        {
          de:'Buchstabe',
          art:'der',
          pl:'Buchstaben',
          en:'letter (of the alphabet)',
          ph:'BOOKH-shtah-be'
        },
        {
          de:'Wort',
          art:'das',
          pl:'Wörter',
          en:'word',
          ph:'vort'
        },
        {
          de:'Name',
          art:'der',
          pl:'Namen',
          en:'name',
          ph:'NAH-me'
        },
        {
          de:'Nachname',
          art:'der',
          pl:'Nachnamen',
          en:'last name, surname',
          ph:'NAHKH-nah-me'
        },
        {
          de:'buchstabieren',
          art:'',
          pl:'',
          en:'to spell (letters)',
          ph:'book-shtah-BEE-ren'
        },
        {
          de:'schreiben',
          art:'',
          pl:'',
          en:'to write',
          ph:'SHRAI-ben'
        }
      ]
    },
    {
      id:'t3',
      title:'Sounds to learn first',
      time:'4 min',
      kind:'sounds',
      sounds:[
        {
          de:'A, E, I, O, U',
          en:'Vater = father, Bett = bed',
          ph:'Short and clear, like in English'
        },
        {
          de:'Ä',
          en:'Mädchen = girl',
          ph:'Say "eh" with slightly rounded lips'
        },
        {
          de:'Ö',
          en:'schön = nice, beautiful',
          ph:'Say "e" with round lips'
        },
        {
          de:'Ü',
          en:'Tür = door',
          ph:'Say "ee" with round lips'
        },
        {
          de:'ß',
          en:'Straße = street',
          ph:'Say "ss", never "z"'
        },
        {
          de:'J',
          en:'ja = yes',
          ph:'Sounds like Y'
        },
        {
          de:'V',
          en:'Vater = father',
          ph:'Sounds like F'
        },
        {
          de:'W',
          en:'Wasser = water',
          ph:'Sounds like V'
        },
        {
          de:'Z',
          en:'Zeit = time',
          ph:'Sounds like TS'
        },
        {
          de:'EI',
          en:'mein = my',
          ph:'Sounds like "my"'
        },
        {
          de:'AU',
          en:'Haus = house',
          ph:'Sounds like "ow"'
        },
        {
          de:'IE',
          en:'Liebe = love',
          ph:'Sounds like "ee"'
        },
        {
          de:'CH',
          en:'ich = I',
          ph:'Soft, like a cat hissing'
        },
        {
          de:'SCH',
          en:'Schule = school',
          ph:'Sounds like "sh"'
        },
        {
          de:'R',
          en:'rot = red',
          ph:'Soft, in the throat'
        },
        {
          de:'S',
          en:'Sonne = sun',
          ph:'Sounds like "z" before a vowel'
        }
      ],
      grammar:{
        title:'The alphabet & German sounds',
        plain:'German has the same 26 letters as English, and most sound as they are written. Four special letters: Ä, Ö, Ü and ß. Three golden rules: (1) W = V, V = F, J = Y. (2) Every noun starts with a capital letter. (3) What is written is spoken — almost no silent letters.',
        rule:'A = ah · B = beh · C = tseh · D = deh · E = eh · F = eff · G = geh · H = hah · I = eeh · J = yott · K = kah · L = ell · M = emm · N = enn · O = oh · P = peh · Q = koo · R = err · S = ess · T = teh · U = ooh · V = fau · W = veh · X = iks · Y = uepsilon · Z = tsett',
        examples:[
          {
            de:'Wasser',
            en:'water — W sounds like V',
            ph:'VAH-ser'
          },
          {
            de:'Vater',
            en:'father — V sounds like F',
            ph:'FAH-ter'
          },
          {
            de:'Straße',
            en:'street — ß sounds like ss',
            ph:'SHTRAH-se'
          }
        ]
      }
    },
    {
      id:'t4',
      title:'Spell your name',
      time:'3 min',
      kind:'dialogue',
      lines:[
        {
          who:'A',
          de:'Wie schreibt man deinen Namen?',
          en:'How do you spell your name?',
          ph:'vee SHRAIPT mahn DAI-nen NAH-men'
        },
        {
          who:'B',
          de:'A-N-N-A. Anna.',
          en:'A-N-N-A. Anna.',
          ph:'ah - enn - enn - ah. AH-nah'
        },
        {
          who:'A',
          de:'Und dein Nachname?',
          en:'And your last name?',
          ph:'oont dine NAHKH-nah-me'
        },
        {
          who:'B',
          de:'S-C-H-M-I-D-T. Schmidt.',
          en:'S-C-H-M-I-D-T. Schmidt.',
          ph:'ess - tsay - hah - emm - ee - day - tay. shmit'
        },
        {
          who:'A',
          de:'Danke! Ich buchstabiere: B-E-N. Ben.',
          en:'Thank you! I spell: B-E-N. Ben.',
          ph:'DAHN-ke! ish book-shtah-BEE-re: bay - ay - enn. ben'
        },
        {
          who:'B',
          de:'Sehr gut! Willkommen in Deutschland!',
          en:'Very good! Welcome to Germany!',
          ph:'zair goot! vil-KOM-men in DOYCH-lahnt'
        }
      ],
      speak:{
        prompt:'Say the alphabet A–Z out loud, 2 times. Then spell your name, letter by letter.',
        model:['A, B, C, D, E, F, G, H.', 'Mein Name ist Anna.', 'Ich buchstabiere: A-N-N-A.']
      }
    },
    {
      id:'t5',
      title:'Quiz: letters',
      time:'3 min',
      kind:'quiz',
      questions:[
        {q:'Which letter sounds like "Y" in German?', options:['J', 'W', 'V', 'Z'], answer:0,
         why:'J sounds like Y: ja = yes.'},
        {q:'How do you pronounce the letter "Z"?', options:['tsett', 'tseh', 'zee', 'zett'], answer:0,
         why:'Z = tsett, and it sounds like TS: Zeit = time.'},
        {q:'What does "ß" sound like?', options:['z', 's', 'ss', 'sh'], answer:2,
         why:'ß sounds like "ss": Straße = street.'}
      ]
    },
    {
      id:'t6',
      title:'Quiz: sounds & spelling',
      time:'2 min',
      kind:'quiz',
      questions:[
        {q:'Which letters make the sound "my"?', options:['EI', 'AU', 'IE', 'EU'], answer:0,
         why:'EI sounds like "my": mein = my.'},
        {q:'Fill in: "Ich buchstabiere meinen Namen: A-___-N-A."', options:['M', 'N', 'B', 'E'], answer:1,
         why:'Anna is spelled A-N-N-A.'}
      ]
    }
  ],
  next:'Next: Chapter 2 — Numbers',
};

CHAPTERS['A1-2'] = {
  id:'A1-2',
  n:2,
  level:'A1',
  title:'Numbers',
  time:'17 min',
  concept:'Count from 0 to 100, say your age, and talk about prices and phone numbers.',
  dialogue:[
    {
      who:'A',
      de:'Wie alt bist du?',
      en:'How old are you?',
      ph:'vee ahlt bist doo'
    },
    {
      who:'B',
      de:'Ich bin zwanzig Jahre alt. Und du?',
      en:'I am twenty years old. And you?',
      ph:'ish bin TSVAHN-tsish YAH-re ahlt. oont doo'
    },
    {
      who:'A',
      de:'Ich bin einundzwanzig. Wie ist deine Telefonnummer?',
      en:'I am twenty-one. What is your phone number?',
      ph:'ish bin INE-oont-TSVAHN-tsish. vee ist DAI-ne te-le-FOHN-noo-mer'
    },
    {
      who:'B',
      de:'Meine Nummer ist 0176 1234.',
      en:'My number is 0176 1234.',
      ph:'MAI-ne NOO-mer ist nool-ine-zee-ben-ine, ines-tsvai-drai-feer'
    },
    {
      who:'A',
      de:'Danke! Und was kostet das Brot?',
      en:'Thank you! And how much is the bread?',
      ph:'DAHN-ke! oont vahs KOS-tet dahs broht'
    },
    {
      who:'B',
      de:'Das Brot kostet zwei Euro fünfzig.',
      en:'The bread costs two euros fifty.',
      ph:'dahs broht KOS-tet tsvai OY-ro FUENF-tsish'
    }
  ],
  vocab:[
    {
      de:'null',
      art:'',
      pl:'',
      en:'zero',
      ph:'nool'
    },
    {
      de:'eins',
      art:'',
      pl:'',
      en:'one',
      ph:'ains'
    },
    {
      de:'zwei',
      art:'',
      pl:'',
      en:'two',
      ph:'tsvai'
    },
    {
      de:'drei',
      art:'',
      pl:'',
      en:'three',
      ph:'drai'
    },
    {
      de:'vier',
      art:'',
      pl:'',
      en:'four',
      ph:'feer'
    },
    {
      de:'fünf',
      art:'',
      pl:'',
      en:'five',
      ph:'fuenf'
    },
    {
      de:'sechs',
      art:'',
      pl:'',
      en:'six',
      ph:'zeks'
    },
    {
      de:'sieben',
      art:'',
      pl:'',
      en:'seven',
      ph:'ZEE-ben'
    },
    {
      de:'acht',
      art:'',
      pl:'',
      en:'eight',
      ph:'ahkht'
    },
    {
      de:'neun',
      art:'',
      pl:'',
      en:'nine',
      ph:'noin'
    },
    {
      de:'zehn',
      art:'',
      pl:'',
      en:'ten',
      ph:'tsayn'
    },
    {
      de:'elf',
      art:'',
      pl:'',
      en:'eleven',
      ph:'elf'
    },
    {
      de:'zwölf',
      art:'',
      pl:'',
      en:'twelve',
      ph:'tsvoerlf'
    },
    {
      de:'dreizehn',
      art:'',
      pl:'',
      en:'thirteen',
      ph:'DRAI-tsayn'
    },
    {
      de:'vierzehn',
      art:'',
      pl:'',
      en:'fourteen',
      ph:'FEER-tsayn'
    },
    {
      de:'fünfzehn',
      art:'',
      pl:'',
      en:'fifteen',
      ph:'FUENF-tsayn'
    },
    {
      de:'sechzehn',
      art:'',
      pl:'',
      en:'sixteen',
      ph:'ZEKH-tsayn'
    },
    {
      de:'siebzehn',
      art:'',
      pl:'',
      en:'seventeen',
      ph:'ZEEB-tsayn'
    },
    {
      de:'achtzehn',
      art:'',
      pl:'',
      en:'eighteen',
      ph:'AHKHT-tsayn'
    },
    {
      de:'neunzehn',
      art:'',
      pl:'',
      en:'nineteen',
      ph:'NOIN-tsayn'
    },
    {
      de:'zwanzig',
      art:'',
      pl:'',
      en:'twenty',
      ph:'TSVAHN-tsish'
    },
    {
      de:'dreißig',
      art:'',
      pl:'',
      en:'thirty',
      ph:'DRAI-sish'
    },
    {
      de:'vierzig',
      art:'',
      pl:'',
      en:'forty',
      ph:'FEER-tsish'
    },
    {
      de:'fünfzig',
      art:'',
      pl:'',
      en:'fifty',
      ph:'FUENF-tsish'
    },
    {
      de:'sechzig',
      art:'',
      pl:'',
      en:'sixty',
      ph:'ZEKH-tsish'
    },
    {
      de:'siebzig',
      art:'',
      pl:'',
      en:'seventy',
      ph:'ZEEB-tsish'
    },
    {
      de:'achtzig',
      art:'',
      pl:'',
      en:'eighty',
      ph:'AHKHT-tsish'
    },
    {
      de:'neunzig',
      art:'',
      pl:'',
      en:'ninety',
      ph:'NOIN-tsish'
    },
    {
      de:'hundert',
      art:'',
      pl:'',
      en:'one hundred',
      ph:'HOON-dert'
    },
    {
      de:'tausend',
      art:'',
      pl:'',
      en:'one thousand',
      ph:'TOW-zent'
    },
    {
      de:'Wie alt',
      art:'',
      pl:'',
      en:'how old',
      ph:'vee ahlt'
    },
    {
      de:'Jahre alt',
      art:'',
      pl:'',
      en:'years old',
      ph:'YAH-re ahlt'
    },
    {
      de:'Telefonnummer',
      art:'die',
      pl:'Telefonnummern',
      en:'phone number',
      ph:'te-le-FOHN-noo-mer'
    },
    {
      de:'Nummer',
      art:'die',
      pl:'Nummern',
      en:'number',
      ph:'NOO-mer'
    },
    {
      de:'Preis',
      art:'der',
      pl:'Preise',
      en:'price',
      ph:'pries'
    },
    {
      de:'Euro',
      art:'der',
      pl:'Euros',
      en:'euro',
      ph:'OY-ro'
    },
    {
      de:'Cent',
      art:'der',
      pl:'Cents',
      en:'cent',
      ph:'sent'
    },
    {
      de:'kosten',
      art:'',
      pl:'',
      en:'to cost',
      ph:'KOS-ten'
    },
    {
      de:'Jahr',
      art:'das',
      pl:'Jahre',
      en:'year',
      ph:'yahr'
    },
    {
      de:'Handynummer',
      art:'die',
      pl:'Handynummern',
      en:'mobile number',
      ph:'HEN-dee-noo-mer'
    }
  ],
  grammar:{
    title:'Numbers 0–100 + age and prices',
    plain:'Numbers 0 to 12 are all different — learn them by heart. Numbers 13 to 19 are easy: just add -zehn (ten). Only 16 (sechzehn) and 17 (siebzehn) lose a letter. Numbers 21 to 99 turn around: einundzwanzig = one-and-twenty. Age: "Ich bin zwanzig Jahre alt." Prices: "Das Brot kostet zwei Euro fünfzig."',
    rule:'13–19: drei + zehn = dreizehn · 21–99: ein + und + zwanzig = einundzwanzig · Wie alt bist du? — Ich bin zwanzig Jahre alt. · Was kostet das? — Zwei Euro fünfzig.',
    examples:[
      {
        de:'Ich bin zwanzig Jahre alt.',
        en:'I am twenty years old.',
        ph:'ish bin TSVAHN-tsish YAH-re ahlt'
      },
      {
        de:'Das Brot kostet zwei Euro fünfzig.',
        en:'The bread costs two euros fifty.',
        ph:'dahs broht KOS-tet tsvai OY-ro FUENF-tsish'
      },
      {
        de:'Die Nummer ist 0176 1234.',
        en:'The number is 0176 1234.',
        ph:'dee NOO-mer ist nool-ine-zee-ben-ine, ines-tsvai-drai-feer'
      }
    ]
  },
  quiz:[
    {q:'What number is "dreizehn"?', options:['3', '13', '30', '12'], answer:1,
     why:'dreizehn = drei + zehn = 13.'},
    {q:'How do you say 21 in German?', options:['zwanzigeins', 'einundzwanzig', 'einzwanzig', 'zwanzig eins'], answer:1,
     why:'21 = ein-und-zwanzig: one-and-twenty.'},
    {q:'Fill in: "Ich bin ___ Jahre alt." (I am 20 years old.)', options:['zwanzig', 'zwanzige', 'zwanzigs', 'zwanzigsten'], answer:0,
     why:'"Ich bin zwanzig Jahre alt" = I am twenty years old.'},
    {q:'What does "Das kostet zwei Euro" mean?', options:['That is two euros', 'That costs two euros', 'Two euros, please', 'I have two euros'], answer:1,
     why:'kosten = to cost. "Das kostet ..." = That costs ...'},
    {q:'Which number is "neunzig"?', options:['9', '19', '90', '900'], answer:2,
     why:'neunzig = 90. neun = 9, neunzehn = 19.'}
  ],
  speak:{
    prompt:'Say your age and your phone number out loud in German, digit by digit. Then say three prices: "Das kostet ... Euro."',
    model:['Ich bin zwanzig Jahre alt.', 'Meine Nummer ist 0176 1234.', 'Das Brot kostet zwei Euro fünfzig.']
  },
  recap:[
    '0–12: learn by heart. 13–19: number + -zehn.',
    '21–99 turn around: einundzwanzig = one-and-twenty.',
    '"Ich bin ... Jahre alt" = I am ... years old.',
    'Prices: "Was kostet das?" — "Das kostet zwei Euro."'
  ],
  tip:'Memory tip: count out loud everywhere — stairs, plates, minutes. Numbers only stick when you say them.',
  extra:[
    {
      q:'Count backwards from 20 to 0.',
      a:'zwanzig, neunzehn, achtzehn ... drei, zwei, eins, null.'
    },
    {
      q:'Say "47" in German.',
      a:'siebenundvierzig. (Seven-and-forty.)'
    },
    {
      q:'How do you ask for a price?',
      a:'Was kostet das? — How much does that cost?'
    }
  ],
  topics:[
    {
      id:'t1',
      title:'Numbers 0–20',
      time:'3 min',
      kind:'words',
      vocab:[
        {
          de:'null',
          art:'',
          pl:'',
          en:'zero',
          ph:'nool'
        },
        {
          de:'eins',
          art:'',
          pl:'',
          en:'one',
          ph:'ains'
        },
        {
          de:'zwei',
          art:'',
          pl:'',
          en:'two',
          ph:'tsvai'
        },
        {
          de:'drei',
          art:'',
          pl:'',
          en:'three',
          ph:'drai'
        },
        {
          de:'vier',
          art:'',
          pl:'',
          en:'four',
          ph:'feer'
        },
        {
          de:'fünf',
          art:'',
          pl:'',
          en:'five',
          ph:'fuenf'
        },
        {
          de:'sechs',
          art:'',
          pl:'',
          en:'six',
          ph:'zeks'
        },
        {
          de:'sieben',
          art:'',
          pl:'',
          en:'seven',
          ph:'ZEE-ben'
        },
        {
          de:'acht',
          art:'',
          pl:'',
          en:'eight',
          ph:'ahkht'
        },
        {
          de:'neun',
          art:'',
          pl:'',
          en:'nine',
          ph:'noin'
        },
        {
          de:'zehn',
          art:'',
          pl:'',
          en:'ten',
          ph:'tsayn'
        },
        {
          de:'elf',
          art:'',
          pl:'',
          en:'eleven',
          ph:'elf'
        },
        {
          de:'zwölf',
          art:'',
          pl:'',
          en:'twelve',
          ph:'tsvoerlf'
        },
        {
          de:'dreizehn',
          art:'',
          pl:'',
          en:'thirteen',
          ph:'DRAI-tsayn'
        },
        {
          de:'vierzehn',
          art:'',
          pl:'',
          en:'fourteen',
          ph:'FEER-tsayn'
        },
        {
          de:'fünfzehn',
          art:'',
          pl:'',
          en:'fifteen',
          ph:'FUENF-tsayn'
        },
        {
          de:'sechzehn',
          art:'',
          pl:'',
          en:'sixteen',
          ph:'ZEKH-tsayn'
        },
        {
          de:'siebzehn',
          art:'',
          pl:'',
          en:'seventeen',
          ph:'ZEEB-tsayn'
        },
        {
          de:'achtzehn',
          art:'',
          pl:'',
          en:'eighteen',
          ph:'AHKHT-tsayn'
        },
        {
          de:'neunzehn',
          art:'',
          pl:'',
          en:'nineteen',
          ph:'NOIN-tsayn'
        },
        {
          de:'zwanzig',
          art:'',
          pl:'',
          en:'twenty',
          ph:'TSVAHN-tsish'
        }
      ]
    },
    {
      id:'t2',
      title:'Numbers 21–100, age & prices',
      time:'3 min',
      kind:'words',
      vocab:[
        {
          de:'dreißig',
          art:'',
          pl:'',
          en:'thirty',
          ph:'DRAI-sish'
        },
        {
          de:'vierzig',
          art:'',
          pl:'',
          en:'forty',
          ph:'FEER-tsish'
        },
        {
          de:'fünfzig',
          art:'',
          pl:'',
          en:'fifty',
          ph:'FUENF-tsish'
        },
        {
          de:'sechzig',
          art:'',
          pl:'',
          en:'sixty',
          ph:'ZEKH-tsish'
        },
        {
          de:'siebzig',
          art:'',
          pl:'',
          en:'seventy',
          ph:'ZEEB-tsish'
        },
        {
          de:'achtzig',
          art:'',
          pl:'',
          en:'eighty',
          ph:'AHKHT-tsish'
        },
        {
          de:'neunzig',
          art:'',
          pl:'',
          en:'ninety',
          ph:'NOIN-tsish'
        },
        {
          de:'hundert',
          art:'',
          pl:'',
          en:'one hundred',
          ph:'HOON-dert'
        },
        {
          de:'tausend',
          art:'',
          pl:'',
          en:'one thousand',
          ph:'TOW-zent'
        },
        {
          de:'Wie alt',
          art:'',
          pl:'',
          en:'how old',
          ph:'vee ahlt'
        },
        {
          de:'Jahre alt',
          art:'',
          pl:'',
          en:'years old',
          ph:'YAH-re ahlt'
        },
        {
          de:'Telefonnummer',
          art:'die',
          pl:'Telefonnummern',
          en:'phone number',
          ph:'te-le-FOHN-noo-mer'
        },
        {
          de:'Nummer',
          art:'die',
          pl:'Nummern',
          en:'number',
          ph:'NOO-mer'
        },
        {
          de:'Preis',
          art:'der',
          pl:'Preise',
          en:'price',
          ph:'pries'
        },
        {
          de:'Euro',
          art:'der',
          pl:'Euros',
          en:'euro',
          ph:'OY-ro'
        },
        {
          de:'Cent',
          art:'der',
          pl:'Cents',
          en:'cent',
          ph:'sent'
        },
        {
          de:'kosten',
          art:'',
          pl:'',
          en:'to cost',
          ph:'KOS-ten'
        },
        {
          de:'Jahr',
          art:'das',
          pl:'Jahre',
          en:'year',
          ph:'yahr'
        },
        {
          de:'Handynummer',
          art:'die',
          pl:'Handynummern',
          en:'mobile number',
          ph:'HEN-dee-noo-mer'
        }
      ]
    },
    {
      id:'t3',
      title:'Counting & prices',
      time:'3 min',
      kind:'grammar',
      grammar:{
        title:'Numbers 0–100 + age and prices',
        plain:'Numbers 0 to 12 are all different — learn them by heart. Numbers 13 to 19 are easy: just add -zehn (ten). Only 16 (sechzehn) and 17 (siebzehn) lose a letter. Numbers 21 to 99 turn around: einundzwanzig = one-and-twenty. Age: "Ich bin zwanzig Jahre alt." Prices: "Das Brot kostet zwei Euro fünfzig."',
        rule:'13–19: drei + zehn = dreizehn · 21–99: ein + und + zwanzig = einundzwanzig · Wie alt bist du? — Ich bin zwanzig Jahre alt. · Was kostet das? — Zwei Euro fünfzig.',
        examples:[
          {
            de:'Ich bin zwanzig Jahre alt.',
            en:'I am twenty years old.',
            ph:'ish bin TSVAHN-tsish YAH-re ahlt'
          },
          {
            de:'Das Brot kostet zwei Euro fünfzig.',
            en:'The bread costs two euros fifty.',
            ph:'dahs broht KOS-tet tsvai OY-ro FUENF-tsish'
          },
          {
            de:'Die Nummer ist 0176 1234.',
            en:'The number is 0176 1234.',
            ph:'dee NOO-mer ist nool-ine-zee-ben-ine, ines-tsvai-drai-feer'
          }
        ]
      }
    },
    {
      id:'t4',
      title:'Age & phone numbers',
      time:'3 min',
      kind:'dialogue',
      lines:[
        {
          who:'A',
          de:'Wie alt bist du?',
          en:'How old are you?',
          ph:'vee ahlt bist doo'
        },
        {
          who:'B',
          de:'Ich bin zwanzig Jahre alt. Und du?',
          en:'I am twenty years old. And you?',
          ph:'ish bin TSVAHN-tsish YAH-re ahlt. oont doo'
        },
        {
          who:'A',
          de:'Ich bin einundzwanzig. Wie ist deine Telefonnummer?',
          en:'I am twenty-one. What is your phone number?',
          ph:'ish bin INE-oont-TSVAHN-tsish. vee ist DAI-ne te-le-FOHN-noo-mer'
        },
        {
          who:'B',
          de:'Meine Nummer ist 0176 1234.',
          en:'My number is 0176 1234.',
          ph:'MAI-ne NOO-mer ist nool-ine-zee-ben-ine, ines-tsvai-drai-feer'
        },
        {
          who:'A',
          de:'Danke! Und was kostet das Brot?',
          en:'Thank you! And how much is the bread?',
          ph:'DAHN-ke! oont vahs KOS-tet dahs broht'
        },
        {
          who:'B',
          de:'Das Brot kostet zwei Euro fünfzig.',
          en:'The bread costs two euros fifty.',
          ph:'dahs broht KOS-tet tsvai OY-ro FUENF-tsish'
        }
      ],
      speak:{
        prompt:'Say your age and your phone number out loud in German, digit by digit. Then say three prices: "Das kostet ... Euro."',
        model:['Ich bin zwanzig Jahre alt.', 'Meine Nummer ist 0176 1234.', 'Das Brot kostet zwei Euro fünfzig.']
      }
    },
    {
      id:'t5',
      title:'Quiz: numbers',
      time:'3 min',
      kind:'quiz',
      questions:[
        {q:'What number is "dreizehn"?', options:['3', '13', '30', '12'], answer:1,
         why:'dreizehn = drei + zehn = 13.'},
        {q:'How do you say 21 in German?', options:['zwanzigeins', 'einundzwanzig', 'einzwanzig', 'zwanzig eins'], answer:1,
         why:'21 = ein-und-zwanzig: one-and-twenty.'},
        {q:'Fill in: "Ich bin ___ Jahre alt." (I am 20 years old.)', options:['zwanzig', 'zwanzige', 'zwanzigs', 'zwanzigsten'], answer:0,
         why:'"Ich bin zwanzig Jahre alt" = I am twenty years old.'}
      ]
    },
    {
      id:'t6',
      title:'Quiz: age & prices',
      time:'2 min',
      kind:'quiz',
      questions:[
        {q:'What does "Das kostet zwei Euro" mean?', options:['That is two euros', 'That costs two euros', 'Two euros, please', 'I have two euros'], answer:1,
         why:'kosten = to cost. "Das kostet ..." = That costs ...'},
        {q:'Which number is "neunzig"?', options:['9', '19', '90', '900'], answer:2,
         why:'neunzig = 90. neun = 9, neunzehn = 19.'}
      ]
    }
  ],
  next:'Next: Chapter 3 — Greetings & Introductions',
};

CHAPTERS['A1-3'] = {
  id:'A1-3',
  n:3,
  level:'A1',
  title:'Greetings & Introductions',
  time:'17 min',
  concept:'Say hello, introduce yourself, and use the verb sein.',
  dialogue:[
    {
      who:'A',
      de:'Guten Tag! Ich heiße Anna.',
      en:'Good day! My name is Anna.',
      ph:'GOO-ten TAHK! ish HAI-se AH-nah'
    },
    {
      who:'B',
      de:'Hallo, Anna! Ich heiße Ben.',
      en:'Hello, Anna! My name is Ben.',
      ph:'HA-lo, AH-nah! ish HAI-se ben'
    },
    {
      who:'A',
      de:'Wie geht es dir?',
      en:'How are you? (informal)',
      ph:'vee GAYT es deer'
    },
    {
      who:'B',
      de:'Mir geht es gut, danke. Und dir?',
      en:'I am fine, thank you. And you?',
      ph:'meer GAYT es goot, DAHN-ke. oont deer'
    },
    {
      who:'A',
      de:'Auch gut, danke. Woher kommst du?',
      en:'Also fine, thank you. Where do you come from?',
      ph:'owkh goot, DAHN-ke. VO-hair KOMMST doo'
    },
    {
      who:'B',
      de:'Ich komme aus Deutschland.',
      en:'I come from Germany.',
      ph:'ish KOM-me owss DOYCH-lahnt'
    }
  ],
  vocab:[
    {
      de:'Hallo',
      art:'',
      pl:'',
      en:'Hello',
      ph:'HA-lo'
    },
    {
      de:'Guten Tag',
      art:'',
      pl:'',
      en:'Good day (formal, daytime)',
      ph:'GOO-ten TAHK'
    },
    {
      de:'Guten Morgen',
      art:'',
      pl:'',
      en:'Good morning',
      ph:'GOO-ten MOR-gen'
    },
    {
      de:'Guten Abend',
      art:'',
      pl:'',
      en:'Good evening',
      ph:'GOO-ten AH-bent'
    },
    {
      de:'Gute Nacht',
      art:'',
      pl:'',
      en:'Good night',
      ph:'GOO-te NAKHT'
    },
    {
      de:'Tschüss',
      art:'',
      pl:'',
      en:'Bye (informal)',
      ph:'chues'
    },
    {
      de:'Auf Wiedersehen',
      art:'',
      pl:'',
      en:'Goodbye (formal)',
      ph:'owf VEE-der-zay-en'
    },
    {
      de:'danke',
      art:'',
      pl:'',
      en:'thank you',
      ph:'DAHN-ke'
    },
    {
      de:'bitte',
      art:'',
      pl:'',
      en:'please / you are welcome',
      ph:'BIT-te'
    },
    {
      de:'Entschuldigung',
      art:'',
      pl:'',
      en:'excuse me / sorry',
      ph:'ent-SHOOL-dee-gung'
    },
    {
      de:'Mann',
      art:'der',
      pl:'Männer',
      en:'man',
      ph:'mahn'
    },
    {
      de:'Frau',
      art:'die',
      pl:'Frauen',
      en:'woman',
      ph:'frow'
    },
    {
      de:'Kind',
      art:'das',
      pl:'Kinder',
      en:'child',
      ph:'kint'
    },
    {
      de:'ich',
      art:'',
      pl:'',
      en:'I',
      ph:'ish'
    },
    {
      de:'du',
      art:'',
      pl:'',
      en:'you (informal)',
      ph:'doo'
    },
    {
      de:'Sie',
      art:'',
      pl:'',
      en:'you (formal, capital S)',
      ph:'zee'
    },
    {
      de:'ja',
      art:'',
      pl:'',
      en:'yes',
      ph:'yah'
    },
    {
      de:'nein',
      art:'',
      pl:'',
      en:'no',
      ph:'nine'
    },
    {
      de:'Sehr gut',
      art:'',
      pl:'',
      en:'very good',
      ph:'zair goot'
    },
    {
      de:'Es geht',
      art:'',
      pl:'',
      en:'so-so, OK',
      ph:'es gayt'
    },
    {
      de:'Nicht so gut',
      art:'',
      pl:'',
      en:'not so good',
      ph:'nikht zoh goot'
    },
    {
      de:'Und dir?',
      art:'',
      pl:'',
      en:'And you? (informal)',
      ph:'oont deer'
    },
    {
      de:'Und Ihnen?',
      art:'',
      pl:'',
      en:'And you? (formal)',
      ph:'oont EE-nen'
    },
    {
      de:'Willkommen',
      art:'',
      pl:'',
      en:'welcome',
      ph:'vil-KOM-men'
    },
    {
      de:'gut',
      art:'',
      pl:'',
      en:'good',
      ph:'goot'
    },
    {
      de:'oder',
      art:'',
      pl:'',
      en:'or',
      ph:'OH-der'
    },
    {
      de:'aber',
      art:'',
      pl:'',
      en:'but',
      ph:'AH-ber'
    },
    {
      de:'und',
      art:'',
      pl:'',
      en:'and',
      ph:'oont'
    },
    {
      de:'er',
      art:'',
      pl:'',
      en:'he',
      ph:'air'
    },
    {
      de:'sie',
      art:'',
      pl:'',
      en:'she / they',
      ph:'zee'
    },
    {
      de:'es',
      art:'',
      pl:'',
      en:'it',
      ph:'es'
    },
    {
      de:'wir',
      art:'',
      pl:'',
      en:'we',
      ph:'veer'
    },
    {
      de:'ihr',
      art:'',
      pl:'',
      en:'you all (informal)',
      ph:'eer'
    },
    {
      de:'Ich verstehe',
      art:'',
      pl:'',
      en:'I understand',
      ph:'ish fair-SHTAY-e'
    },
    {
      de:'Ich verstehe nicht',
      art:'',
      pl:'',
      en:'I do not understand',
      ph:'ish fair-SHTAY-e nikht'
    },
    {
      de:'Langsam, bitte',
      art:'',
      pl:'',
      en:'Slowly, please',
      ph:'LAHNG-zahm BIT-te'
    },
    {
      de:'noch einmal, bitte',
      art:'',
      pl:'',
      en:'Once more, please',
      ph:'nokh INE-mahl BIT-te'
    },
    {
      de:'Wie bitte?',
      art:'',
      pl:'',
      en:'Pardon? / What did you say?',
      ph:'vee BIT-te'
    },
    {
      de:'kein Problem',
      art:'',
      pl:'',
      en:'no problem',
      ph:'kine pro-BLAYM'
    },
    {
      de:'alles klar',
      art:'',
      pl:'',
      en:'all clear / understood',
      ph:'AH-les klahr'
    },
    {
      de:'vielleicht',
      art:'',
      pl:'',
      en:'maybe',
      ph:'fee-LAISHT'
    }
  ],
  grammar:{
    title:'The verb "sein" — to be',
    plain:'In English we say "I am, you are, he is". German does the same — the verb changes with the person. A "personal pronoun" is just the word for the person: I, you, he, she, we, they.',
    rule:'ich bin (I am) · du bist (you are) · er / sie / es ist (he / she / it is) · wir sind (we are) · ihr seid (you all are) · sie / Sie sind (they are / you are, formal)',
    examples:[
      {
        de:'Ich bin Anna.',
        en:'I am Anna.',
        ph:'ish bin AH-nah'
      },
      {
        de:'Du bist mein Freund.',
        en:'You are my friend.',
        ph:'doo bist mine FROYNT'
      },
      {
        de:'Sie sind freundlich.',
        en:'You are kind. (formal)',
        ph:'zee zint FROYNT-lish'
      }
    ]
  },
  quiz:[
    {q:'How do you say "good morning" in German?', options:['Guten Morgen', 'Guten Abend', 'Gute Nacht', 'Tschüss'], answer:0,
     why:'Morgen means "morning". Say Guten Morgen before 12 o\'clock. Guten Abend is for the evening.'},
    {q:'What does "Ich heiße Anna" mean?', options:['I am Anna', 'My name is Anna', 'I come from Anna', 'Anna is my friend'], answer:1,
     why:'heißen means "to be called". Ich heiße Anna = "My name is Anna".'},
    {q:'Which word is the FORMAL "you"?', options:['du', 'Sie', 'ich', 'wir'], answer:1,
     why:'Sie with a capital S is for strangers, older people and patients. In a hospital, always use Sie.'},
    {q:'What does "Wie geht es dir?" mean?', options:['How are you?', 'Where are you?', 'What is your name?', 'Goodbye!'], answer:0,
     why:'"Wie geht es dir?" = "How are you?" (informal). Answer: "Mir geht es gut, danke."'},
    {q:'Fill in: "Ich ___ Anna."', options:['bin', 'bist', 'ist', 'sind'], answer:0,
     why:'"ich" always goes with "bin". Ich bin = I am.'}
  ],
  speak:{
    prompt:'Say your 5-line introduction out loud, 3 times. Tap the speaker to hear each line, then repeat it.',
    model:[
      'Hallo! Ich heiße Anna.',
      'Ich komme aus Indien.',
      'Ich wohne in Gopalganj.',
      'Ich lerne Deutsch.',
      'Ich möchte Krankenpfleger werden.'
    ]
  },
  recap:[
    'Greetings change with the time of day: Guten Morgen, Guten Tag, Guten Abend, Gute Nacht.',
    'sein: ich bin, du bist, er/sie ist, wir sind, ihr seid, sie/Sie sind.',
    'Use Sie (formal) for strangers, seniors and patients — du is only for friends and family.',
    '"Wie geht es dir?" = How are you? Answer: "Mir geht es gut, danke."'
  ],
  tip:'Memory tip: say every German word OUT LOUD 3 times. Reading silently does not train your mouth — speaking does.',
  extra:[
    {
      q:'Say "good evening" in German.',
      a:'Guten Abend. (GOO-ten AH-bent)'
    },
    {
      q:'How do you answer "Wie geht es dir?"',
      a:'Mir geht es gut, danke. — I am fine, thank you.'
    },
    {
      q:'Say "I am from India."',
      a:'Ich komme aus Indien. (ish KOM-me owss IN-dee-en)'
    },
    {
      q:'Formal introduction — Frau Weber:',
      a:'Guten Tag! Wie heißen Sie? — Ich heiße Frau Weber. Woher kommen Sie? — Ich komme aus Indien.'
    },
    {
      q:'Ask "What is your name?" (formal) and answer.',
      a:'Wie heißen Sie? — Ich heiße [your name].'
    }
  ],
  topics:[
    {
      id:'t1',
      title:'Say hello',
      time:'3 min',
      kind:'words',
      vocab:[
        {
          de:'Hallo',
          art:'',
          pl:'',
          en:'Hello',
          ph:'HA-lo'
        },
        {
          de:'Guten Tag',
          art:'',
          pl:'',
          en:'Good day (formal, daytime)',
          ph:'GOO-ten TAHK'
        },
        {
          de:'Guten Morgen',
          art:'',
          pl:'',
          en:'Good morning',
          ph:'GOO-ten MOR-gen'
        },
        {
          de:'Guten Abend',
          art:'',
          pl:'',
          en:'Good evening',
          ph:'GOO-ten AH-bent'
        },
        {
          de:'Gute Nacht',
          art:'',
          pl:'',
          en:'Good night',
          ph:'GOO-te NAKHT'
        },
        {
          de:'Tschüss',
          art:'',
          pl:'',
          en:'Bye (informal)',
          ph:'chues'
        },
        {
          de:'Auf Wiedersehen',
          art:'',
          pl:'',
          en:'Goodbye (formal)',
          ph:'owf VEE-der-zay-en'
        },
        {
          de:'danke',
          art:'',
          pl:'',
          en:'thank you',
          ph:'DAHN-ke'
        },
        {
          de:'bitte',
          art:'',
          pl:'',
          en:'please / you are welcome',
          ph:'BIT-te'
        },
        {
          de:'Entschuldigung',
          art:'',
          pl:'',
          en:'excuse me / sorry',
          ph:'ent-SHOOL-dee-gung'
        },
        {
          de:'Mann',
          art:'der',
          pl:'Männer',
          en:'man',
          ph:'mahn'
        },
        {
          de:'Frau',
          art:'die',
          pl:'Frauen',
          en:'woman',
          ph:'frow'
        },
        {
          de:'Kind',
          art:'das',
          pl:'Kinder',
          en:'child',
          ph:'kint'
        },
        {
          de:'ich',
          art:'',
          pl:'',
          en:'I',
          ph:'ish'
        },
        {
          de:'du',
          art:'',
          pl:'',
          en:'you (informal)',
          ph:'doo'
        },
        {
          de:'Sie',
          art:'',
          pl:'',
          en:'you (formal, capital S)',
          ph:'zee'
        }
      ]
    },
    {
      id:'t2',
      title:'Answers & little words',
      time:'3 min',
      kind:'words',
      vocab:[
        {
          de:'ja',
          art:'',
          pl:'',
          en:'yes',
          ph:'yah'
        },
        {
          de:'nein',
          art:'',
          pl:'',
          en:'no',
          ph:'nine'
        },
        {
          de:'Sehr gut',
          art:'',
          pl:'',
          en:'very good',
          ph:'zair goot'
        },
        {
          de:'Es geht',
          art:'',
          pl:'',
          en:'so-so, OK',
          ph:'es gayt'
        },
        {
          de:'Nicht so gut',
          art:'',
          pl:'',
          en:'not so good',
          ph:'nikht zoh goot'
        },
        {
          de:'Und dir?',
          art:'',
          pl:'',
          en:'And you? (informal)',
          ph:'oont deer'
        },
        {
          de:'Und Ihnen?',
          art:'',
          pl:'',
          en:'And you? (formal)',
          ph:'oont EE-nen'
        },
        {
          de:'Willkommen',
          art:'',
          pl:'',
          en:'welcome',
          ph:'vil-KOM-men'
        },
        {
          de:'gut',
          art:'',
          pl:'',
          en:'good',
          ph:'goot'
        },
        {
          de:'oder',
          art:'',
          pl:'',
          en:'or',
          ph:'OH-der'
        },
        {
          de:'aber',
          art:'',
          pl:'',
          en:'but',
          ph:'AH-ber'
        },
        {
          de:'und',
          art:'',
          pl:'',
          en:'and',
          ph:'oont'
        },
        {
          de:'er',
          art:'',
          pl:'',
          en:'he',
          ph:'air'
        },
        {
          de:'sie',
          art:'',
          pl:'',
          en:'she / they',
          ph:'zee'
        },
        {
          de:'es',
          art:'',
          pl:'',
          en:'it',
          ph:'es'
        },
        {
          de:'wir',
          art:'',
          pl:'',
          en:'we',
          ph:'veer'
        },
        {
          de:'ihr',
          art:'',
          pl:'',
          en:'you all (informal)',
          ph:'eer'
        },
        {
          de:'Ich verstehe',
          art:'',
          pl:'',
          en:'I understand',
          ph:'ish fair-SHTAY-e'
        },
        {
          de:'Ich verstehe nicht',
          art:'',
          pl:'',
          en:'I do not understand',
          ph:'ish fair-SHTAY-e nikht'
        },
        {
          de:'Langsam, bitte',
          art:'',
          pl:'',
          en:'Slowly, please',
          ph:'LAHNG-zahm BIT-te'
        },
        {
          de:'noch einmal, bitte',
          art:'',
          pl:'',
          en:'Once more, please',
          ph:'nokh INE-mahl BIT-te'
        },
        {
          de:'Wie bitte?',
          art:'',
          pl:'',
          en:'Pardon? / What did you say?',
          ph:'vee BIT-te'
        },
        {
          de:'kein Problem',
          art:'',
          pl:'',
          en:'no problem',
          ph:'kine pro-BLAYM'
        },
        {
          de:'alles klar',
          art:'',
          pl:'',
          en:'all clear / understood',
          ph:'AH-les klahr'
        },
        {
          de:'vielleicht',
          art:'',
          pl:'',
          en:'maybe',
          ph:'fee-LAISHT'
        }
      ]
    },
    {
      id:'t3',
      title:'The verb "sein" — to be',
      time:'3 min',
      kind:'grammar',
      grammar:{
        title:'The verb "sein" — to be',
        plain:'In English we say "I am, you are, he is". German does the same — the verb changes with the person. A "personal pronoun" is just the word for the person: I, you, he, she, we, they.',
        rule:'ich bin (I am) · du bist (you are) · er / sie / es ist (he / she / it is) · wir sind (we are) · ihr seid (you all are) · sie / Sie sind (they are / you are, formal)',
        examples:[
          {
            de:'Ich bin Anna.',
            en:'I am Anna.',
            ph:'ish bin AH-nah'
          },
          {
            de:'Du bist mein Freund.',
            en:'You are my friend.',
            ph:'doo bist mine FROYNT'
          },
          {
            de:'Sie sind freundlich.',
            en:'You are kind. (formal)',
            ph:'zee zint FROYNT-lish'
          }
        ]
      }
    },
    {
      id:'t4',
      title:'First meeting',
      time:'3 min',
      kind:'dialogue',
      lines:[
        {
          who:'A',
          de:'Guten Tag! Ich heiße Anna.',
          en:'Good day! My name is Anna.',
          ph:'GOO-ten TAHK! ish HAI-se AH-nah'
        },
        {
          who:'B',
          de:'Hallo, Anna! Ich heiße Ben.',
          en:'Hello, Anna! My name is Ben.',
          ph:'HA-lo, AH-nah! ish HAI-se ben'
        },
        {
          who:'A',
          de:'Wie geht es dir?',
          en:'How are you? (informal)',
          ph:'vee GAYT es deer'
        },
        {
          who:'B',
          de:'Mir geht es gut, danke. Und dir?',
          en:'I am fine, thank you. And you?',
          ph:'meer GAYT es goot, DAHN-ke. oont deer'
        },
        {
          who:'A',
          de:'Auch gut, danke. Woher kommst du?',
          en:'Also fine, thank you. Where do you come from?',
          ph:'owkh goot, DAHN-ke. VO-hair KOMMST doo'
        },
        {
          who:'B',
          de:'Ich komme aus Deutschland.',
          en:'I come from Germany.',
          ph:'ish KOM-me owss DOYCH-lahnt'
        }
      ],
      speak:{
        prompt:'Say your 5-line introduction out loud, 3 times. Tap the speaker to hear each line, then repeat it.',
        model:[
          'Hallo! Ich heiße Anna.',
          'Ich komme aus Indien.',
          'Ich wohne in Gopalganj.',
          'Ich lerne Deutsch.',
          'Ich möchte Krankenpfleger werden.'
        ]
      }
    },
    {
      id:'t5',
      title:'Quiz: greetings',
      time:'3 min',
      kind:'quiz',
      questions:[
        {q:'How do you say "good morning" in German?', options:['Guten Morgen', 'Guten Abend', 'Gute Nacht', 'Tschüss'], answer:0,
         why:'Morgen means "morning". Say Guten Morgen before 12 o\'clock. Guten Abend is for the evening.'},
        {q:'What does "Ich heiße Anna" mean?', options:['I am Anna', 'My name is Anna', 'I come from Anna', 'Anna is my friend'], answer:1,
         why:'heißen means "to be called". Ich heiße Anna = "My name is Anna".'},
        {q:'Which word is the FORMAL "you"?', options:['du', 'Sie', 'ich', 'wir'], answer:1,
         why:'Sie with a capital S is for strangers, older people and patients. In a hospital, always use Sie.'}
      ]
    },
    {
      id:'t6',
      title:'Quiz: sein & introductions',
      time:'2 min',
      kind:'quiz',
      questions:[
        {q:'What does "Wie geht es dir?" mean?', options:['How are you?', 'Where are you?', 'What is your name?', 'Goodbye!'], answer:0,
         why:'"Wie geht es dir?" = "How are you?" (informal). Answer: "Mir geht es gut, danke."'},
        {q:'Fill in: "Ich ___ Anna."', options:['bin', 'bist', 'ist', 'sind'], answer:0,
         why:'"ich" always goes with "bin". Ich bin = I am.'}
      ]
    }
  ],
  next:'Next: Chapter 4 — People & Countries',
};

CHAPTERS['A1-4'] = {
  id:'A1-4',
  n:4,
  level:'A1',
  title:'People & Countries',
  time:'17 min',
  concept:'Talk about people, where they come from, and which languages they speak.',
  dialogue:[
    {
      who:'A',
      de:'Das ist mein Freund Tom.',
      en:'This is my friend Tom.',
      ph:'dahs ist mine FROYNT tom'
    },
    {
      who:'B',
      de:'Hallo! Ich bin Tom. Ich komme aus England.',
      en:'Hello! I am Tom. I come from England.',
      ph:'HA-lo! ish bin tom. ish KOM-me owss ENG-lahnt'
    },
    {
      who:'A',
      de:'Ich komme aus Indien. Ich spreche Hindi und Englisch.',
      en:'I come from India. I speak Hindi and English.',
      ph:'ish KOM-me owss IN-dee-en. ish SHPREH-khe HIN-dee oont ENG-lish'
    },
    {
      who:'B',
      de:'Sprichst du Deutsch?',
      en:'Do you speak German?',
      ph:'shprikhst doo doych'
    },
    {
      who:'A',
      de:'Ja, ein bisschen. Ich lerne Deutsch.',
      en:'Yes, a little. I am learning German.',
      ph:'yah, ine BISS-khen. ish LER-ne doych'
    },
    {
      who:'B',
      de:'Ich auch! Wir lernen zusammen.',
      en:'Me too! We learn together.',
      ph:'ish owkh! veer LER-nen tsoo-ZAH-men'
    }
  ],
  vocab:[
    {
      de:'Freund',
      art:'der',
      pl:'Freunde',
      en:'friend (male)',
      ph:'froynt'
    },
    {
      de:'Freundin',
      art:'die',
      pl:'Freundinnen',
      en:'friend (female)',
      ph:'FROYNT-in'
    },
    {
      de:'Kollege',
      art:'der',
      pl:'Kollegen',
      en:'colleague (male)',
      ph:'ko-LAY-ge'
    },
    {
      de:'Kollegin',
      art:'die',
      pl:'Kolleginnen',
      en:'colleague (female)',
      ph:'ko-LAY-gin'
    },
    {
      de:'England',
      art:'',
      pl:'',
      en:'England',
      ph:'ENG-lahnt'
    },
    {
      de:'Frankreich',
      art:'',
      pl:'',
      en:'France',
      ph:'FRAHNK-raish'
    },
    {
      de:'Spanien',
      art:'',
      pl:'',
      en:'Spain',
      ph:'SHPAH-nee-en'
    },
    {
      de:'Italien',
      art:'',
      pl:'',
      en:'Italy',
      ph:'ee-TAH-lee-en'
    },
    {
      de:'Türkei',
      art:'die',
      pl:'',
      en:'Turkey',
      ph:'TUER-kai'
    },
    {
      de:'Sprache',
      art:'die',
      pl:'Sprachen',
      en:'language',
      ph:'SHPRAH-khe'
    },
    {
      de:'sprechen',
      art:'',
      pl:'',
      en:'to speak',
      ph:'SHPREH-khen'
    },
    {
      de:'lernen',
      art:'',
      pl:'',
      en:'to learn',
      ph:'LER-nen'
    },
    {
      de:'wohnen',
      art:'',
      pl:'',
      en:'to live (in a place)',
      ph:'VOH-nen'
    },
    {
      de:'kommen',
      art:'',
      pl:'',
      en:'to come',
      ph:'KOM-men'
    },
    {
      de:'auch',
      art:'',
      pl:'',
      en:'also, too',
      ph:'owkh'
    },
    {
      de:'zusammen',
      art:'',
      pl:'',
      en:'together',
      ph:'tsoo-ZAH-men'
    },
    {
      de:'Vater',
      art:'der',
      pl:'Väter',
      en:'father',
      ph:'FAH-ter'
    },
    {
      de:'Mutter',
      art:'die',
      pl:'Mütter',
      en:'mother',
      ph:'MOOT-ter'
    },
    {
      de:'Bruder',
      art:'der',
      pl:'Brüder',
      en:'brother',
      ph:'BROO-der'
    },
    {
      de:'Schwester',
      art:'die',
      pl:'Schwestern',
      en:'sister',
      ph:'SHVES-ter'
    },
    {
      de:'Sohn',
      art:'der',
      pl:'Söhne',
      en:'son',
      ph:'zohn'
    },
    {
      de:'Tochter',
      art:'die',
      pl:'Töchter',
      en:'daughter',
      ph:'TOKH-ter'
    },
    {
      de:'Eltern',
      art:'die',
      pl:'',
      en:'parents',
      ph:'EL-tern'
    },
    {
      de:'Großvater',
      art:'der',
      pl:'Großväter',
      en:'grandfather',
      ph:'GROHSS-fah-ter'
    },
    {
      de:'Großmutter',
      art:'die',
      pl:'Großmütter',
      en:'grandmother',
      ph:'GROHSS-moot-ter'
    },
    {
      de:'Familie',
      art:'die',
      pl:'Familien',
      en:'family',
      ph:'fah-MEE-lee-e'
    },
    {
      de:'Baby',
      art:'das',
      pl:'Babys',
      en:'baby',
      ph:'BAY-bee'
    },
    {
      de:'wer',
      art:'',
      pl:'',
      en:'who',
      ph:'vair'
    },
    {
      de:'was',
      art:'',
      pl:'',
      en:'what',
      ph:'vahs'
    },
    {
      de:'wo',
      art:'',
      pl:'',
      en:'where',
      ph:'voh'
    },
    {
      de:'woher',
      art:'',
      pl:'',
      en:'where from',
      ph:'vo-HAIR'
    },
    {
      de:'wann',
      art:'',
      pl:'',
      en:'when',
      ph:'vahn'
    },
    {
      de:'wie',
      art:'',
      pl:'',
      en:'how',
      ph:'vee'
    },
    {
      de:'warum',
      art:'',
      pl:'',
      en:'why',
      ph:'vah-ROOM'
    },
    {
      de:'wie viel',
      art:'',
      pl:'',
      en:'how much / how many',
      ph:'vee feel'
    },
    {
      de:'wie alt',
      art:'',
      pl:'',
      en:'how old',
      ph:'vee ahlt'
    },
    {
      de:'Deutschland',
      art:'',
      pl:'',
      en:'Germany',
      ph:'DOYCH-lahnt'
    },
    {
      de:'Indien',
      art:'',
      pl:'',
      en:'India',
      ph:'IN-dee-en'
    },
    {
      de:'Nepal',
      art:'',
      pl:'',
      en:'Nepal',
      ph:'nay-PAHL'
    },
    {
      de:'Österreich',
      art:'',
      pl:'',
      en:'Austria',
      ph:'ER-ster-raish'
    },
    {
      de:'Schweiz',
      art:'die',
      pl:'',
      en:'Switzerland',
      ph:'shvites'
    },
    {
      de:'Amerika',
      art:'',
      pl:'',
      en:'America',
      ph:'ah-MAY-ree-kah'
    },
    {
      de:'China',
      art:'',
      pl:'',
      en:'China',
      ph:'KHEE-nah'
    },
    {
      de:'Japan',
      art:'',
      pl:'',
      en:'Japan',
      ph:'yah-PAHN'
    },
    {
      de:'Deutsch',
      art:'das',
      pl:'',
      en:'German (language)',
      ph:'doych'
    },
    {
      de:'Englisch',
      art:'das',
      pl:'',
      en:'English',
      ph:'ENG-lish'
    },
    {
      de:'Hindi',
      art:'das',
      pl:'',
      en:'Hindi',
      ph:'HIN-dee'
    },
    {
      de:'Französisch',
      art:'das',
      pl:'',
      en:'French',
      ph:'frahn-TSER-zish'
    },
    {
      de:'Spanisch',
      art:'das',
      pl:'',
      en:'Spanish',
      ph:'SHPAH-nish'
    },
    {
      de:'alt',
      art:'',
      pl:'',
      en:'old',
      ph:'ahlt'
    },
    {
      de:'jung',
      art:'',
      pl:'',
      en:'young',
      ph:'yoong'
    }
  ],
  grammar:{
    title:'Present tense — regular verbs',
    plain:'A "verb" is an action word: to live, to learn, to speak. In German the verb changes its ending for each person. "Conjugation" is just the name for this change. Question words start your questions: wer (who), was (what), wo (where), woher (where from), wann (when), wie (how), warum (why), wie viel (how much / how many), wie alt (how old). Possessive words: mein Freund, meine Freundin — mein before masculine and neuter nouns, meine before feminine nouns. (The full rule is in Chapter 8.)',
    rule:'Take the verb stem (wohn-) and add: ich wohn-e · du wohn-st · er/sie wohn-t · wir wohn-en · ihr wohn-t · sie wohn-en. The verb is always in 2nd place: "Ich lerne Deutsch."',
    examples:[
      {
        de:'Ich wohne in Gopalganj.',
        en:'I live in Gopalganj.',
        ph:'ish VOH-ne in go-PAHL-gahnj'
      },
      {
        de:'Du sprichst Deutsch.',
        en:'You speak German.',
        ph:'doo shprikhst doych'
      },
      {
        de:'Wir lernen zusammen.',
        en:'We learn together.',
        ph:'veer LER-nen tsoo-ZAH-men'
      }
    ]
  },
  quiz:[
    {q:'Which form goes with "du"?', options:['wohne', 'wohnst', 'wohnt', 'wohnen'], answer:1,
     why:'"du" takes -st: du wohnst. "ich" takes -e: ich wohne.'},
    {q:'Fill in: "Ich ___ Deutsch."', options:['lerne', 'lernst', 'lernt', 'lernen'], answer:0,
     why:'"ich" takes -e: ich lerne = I learn.'},
    {q:'Fill in: "Wir ___ zusammen."', options:['lerne', 'lernst', 'lernt', 'lernen'], answer:3,
     why:'"wir" takes -en: wir lernen = we learn.'},
    {q:'What is "die Sprache"?', options:['the language', 'the country', 'the friend', 'the city'], answer:0,
     why:'die Sprache = the language. Deutsch, Englisch and Hindi are Sprachen.'},
    {q:'"Ich komme aus Indien." means...', options:['I live in India', 'I come from India', 'I speak Indian', 'I am India'], answer:1,
     why:'kommen = to come. "aus" = from. Ich komme aus Indien = I come from India.'}
  ],
  speak:{
    prompt:'Introduce a friend out loud: "Das ist mein Freund / meine Freundin ... Er/Sie kommt aus ... Er/Sie spricht ..."',
    model:[
      'Das ist mein Freund Tom.',
      'Er kommt aus England.',
      'Er spricht Englisch und ein bisschen Deutsch.',
      'Wir lernen zusammen.'
    ]
  },
  recap:[
    'Regular verbs: stem + -e, -st, -t, -en, -t, -en.',
    'The verb is always in 2nd place in a normal sentence.',
    '"sprechen" is special: du sprichst, er spricht (e becomes i).',
    '"Ich komme aus ..." = I come from ... "Ich spreche ..." = I speak ...'
  ],
  tip:'Memory tip: sing the endings as a little song — e, st, t, en, t, en. Say it with wohnen, lernen, kommen.',
  extra:[
    {
      q:'Conjugate "lernen" for du and wir.',
      a:'du lernst, wir lernen.'
    },
    {
      q:'Say "We learn together."',
      a:'Wir lernen zusammen.'
    },
    {
      q:'Say "She speaks Hindi."',
      a:'Sie spricht Hindi. (zee shprikht HIN-dee)'
    },
    {
      q:'Ask "How old are you?" and answer "I am twenty years old."',
      a:'Wie alt bist du? — Ich bin zwanzig Jahre alt.'
    }
  ],
  topics:[
    {
      id:'t1',
      title:'People & family',
      time:'3 min',
      kind:'words',
      vocab:[
        {
          de:'Freund',
          art:'der',
          pl:'Freunde',
          en:'friend (male)',
          ph:'froynt'
        },
        {
          de:'Freundin',
          art:'die',
          pl:'Freundinnen',
          en:'friend (female)',
          ph:'FROYNT-in'
        },
        {
          de:'Kollege',
          art:'der',
          pl:'Kollegen',
          en:'colleague (male)',
          ph:'ko-LAY-ge'
        },
        {
          de:'Kollegin',
          art:'die',
          pl:'Kolleginnen',
          en:'colleague (female)',
          ph:'ko-LAY-gin'
        },
        {
          de:'England',
          art:'',
          pl:'',
          en:'England',
          ph:'ENG-lahnt'
        },
        {
          de:'Frankreich',
          art:'',
          pl:'',
          en:'France',
          ph:'FRAHNK-raish'
        },
        {
          de:'Spanien',
          art:'',
          pl:'',
          en:'Spain',
          ph:'SHPAH-nee-en'
        },
        {
          de:'Italien',
          art:'',
          pl:'',
          en:'Italy',
          ph:'ee-TAH-lee-en'
        },
        {
          de:'Türkei',
          art:'die',
          pl:'',
          en:'Turkey',
          ph:'TUER-kai'
        },
        {
          de:'Sprache',
          art:'die',
          pl:'Sprachen',
          en:'language',
          ph:'SHPRAH-khe'
        },
        {
          de:'sprechen',
          art:'',
          pl:'',
          en:'to speak',
          ph:'SHPREH-khen'
        },
        {
          de:'lernen',
          art:'',
          pl:'',
          en:'to learn',
          ph:'LER-nen'
        },
        {
          de:'wohnen',
          art:'',
          pl:'',
          en:'to live (in a place)',
          ph:'VOH-nen'
        },
        {
          de:'kommen',
          art:'',
          pl:'',
          en:'to come',
          ph:'KOM-men'
        },
        {
          de:'auch',
          art:'',
          pl:'',
          en:'also, too',
          ph:'owkh'
        },
        {
          de:'zusammen',
          art:'',
          pl:'',
          en:'together',
          ph:'tsoo-ZAH-men'
        },
        {
          de:'Vater',
          art:'der',
          pl:'Väter',
          en:'father',
          ph:'FAH-ter'
        },
        {
          de:'Mutter',
          art:'die',
          pl:'Mütter',
          en:'mother',
          ph:'MOOT-ter'
        },
        {
          de:'Bruder',
          art:'der',
          pl:'Brüder',
          en:'brother',
          ph:'BROO-der'
        },
        {
          de:'Schwester',
          art:'die',
          pl:'Schwestern',
          en:'sister',
          ph:'SHVES-ter'
        },
        {
          de:'Sohn',
          art:'der',
          pl:'Söhne',
          en:'son',
          ph:'zohn'
        },
        {
          de:'Tochter',
          art:'die',
          pl:'Töchter',
          en:'daughter',
          ph:'TOKH-ter'
        },
        {
          de:'Eltern',
          art:'die',
          pl:'',
          en:'parents',
          ph:'EL-tern'
        },
        {
          de:'Großvater',
          art:'der',
          pl:'Großväter',
          en:'grandfather',
          ph:'GROHSS-fah-ter'
        },
        {
          de:'Großmutter',
          art:'die',
          pl:'Großmütter',
          en:'grandmother',
          ph:'GROHSS-moot-ter'
        },
        {
          de:'Familie',
          art:'die',
          pl:'Familien',
          en:'family',
          ph:'fah-MEE-lee-e'
        },
        {
          de:'Baby',
          art:'das',
          pl:'Babys',
          en:'baby',
          ph:'BAY-bee'
        }
      ]
    },
    {
      id:'t2',
      title:'Countries, languages & questions',
      time:'3 min',
      kind:'words',
      vocab:[
        {
          de:'wer',
          art:'',
          pl:'',
          en:'who',
          ph:'vair'
        },
        {
          de:'was',
          art:'',
          pl:'',
          en:'what',
          ph:'vahs'
        },
        {
          de:'wo',
          art:'',
          pl:'',
          en:'where',
          ph:'voh'
        },
        {
          de:'woher',
          art:'',
          pl:'',
          en:'where from',
          ph:'vo-HAIR'
        },
        {
          de:'wann',
          art:'',
          pl:'',
          en:'when',
          ph:'vahn'
        },
        {
          de:'wie',
          art:'',
          pl:'',
          en:'how',
          ph:'vee'
        },
        {
          de:'warum',
          art:'',
          pl:'',
          en:'why',
          ph:'vah-ROOM'
        },
        {
          de:'wie viel',
          art:'',
          pl:'',
          en:'how much / how many',
          ph:'vee feel'
        },
        {
          de:'wie alt',
          art:'',
          pl:'',
          en:'how old',
          ph:'vee ahlt'
        },
        {
          de:'Deutschland',
          art:'',
          pl:'',
          en:'Germany',
          ph:'DOYCH-lahnt'
        },
        {
          de:'Indien',
          art:'',
          pl:'',
          en:'India',
          ph:'IN-dee-en'
        },
        {
          de:'Nepal',
          art:'',
          pl:'',
          en:'Nepal',
          ph:'nay-PAHL'
        },
        {
          de:'Österreich',
          art:'',
          pl:'',
          en:'Austria',
          ph:'ER-ster-raish'
        },
        {
          de:'Schweiz',
          art:'die',
          pl:'',
          en:'Switzerland',
          ph:'shvites'
        },
        {
          de:'Amerika',
          art:'',
          pl:'',
          en:'America',
          ph:'ah-MAY-ree-kah'
        },
        {
          de:'China',
          art:'',
          pl:'',
          en:'China',
          ph:'KHEE-nah'
        },
        {
          de:'Japan',
          art:'',
          pl:'',
          en:'Japan',
          ph:'yah-PAHN'
        },
        {
          de:'Deutsch',
          art:'das',
          pl:'',
          en:'German (language)',
          ph:'doych'
        },
        {
          de:'Englisch',
          art:'das',
          pl:'',
          en:'English',
          ph:'ENG-lish'
        },
        {
          de:'Hindi',
          art:'das',
          pl:'',
          en:'Hindi',
          ph:'HIN-dee'
        },
        {
          de:'Französisch',
          art:'das',
          pl:'',
          en:'French',
          ph:'frahn-TSER-zish'
        },
        {
          de:'Spanisch',
          art:'das',
          pl:'',
          en:'Spanish',
          ph:'SHPAH-nish'
        },
        {
          de:'alt',
          art:'',
          pl:'',
          en:'old',
          ph:'ahlt'
        },
        {
          de:'jung',
          art:'',
          pl:'',
          en:'young',
          ph:'yoong'
        }
      ]
    },
    {
      id:'t3',
      title:'Present tense — regular verbs',
      time:'3 min',
      kind:'grammar',
      grammar:{
        title:'Present tense — regular verbs',
        plain:'A "verb" is an action word: to live, to learn, to speak. In German the verb changes its ending for each person. "Conjugation" is just the name for this change. Question words start your questions: wer (who), was (what), wo (where), woher (where from), wann (when), wie (how), warum (why), wie viel (how much / how many), wie alt (how old). Possessive words: mein Freund, meine Freundin — mein before masculine and neuter nouns, meine before feminine nouns. (The full rule is in Chapter 8.)',
        rule:'Take the verb stem (wohn-) and add: ich wohn-e · du wohn-st · er/sie wohn-t · wir wohn-en · ihr wohn-t · sie wohn-en. The verb is always in 2nd place: "Ich lerne Deutsch."',
        examples:[
          {
            de:'Ich wohne in Gopalganj.',
            en:'I live in Gopalganj.',
            ph:'ish VOH-ne in go-PAHL-gahnj'
          },
          {
            de:'Du sprichst Deutsch.',
            en:'You speak German.',
            ph:'doo shprikhst doych'
          },
          {
            de:'Wir lernen zusammen.',
            en:'We learn together.',
            ph:'veer LER-nen tsoo-ZAH-men'
          }
        ]
      }
    },
    {
      id:'t4',
      title:'This is my friend',
      time:'3 min',
      kind:'dialogue',
      lines:[
        {
          who:'A',
          de:'Das ist mein Freund Tom.',
          en:'This is my friend Tom.',
          ph:'dahs ist mine FROYNT tom'
        },
        {
          who:'B',
          de:'Hallo! Ich bin Tom. Ich komme aus England.',
          en:'Hello! I am Tom. I come from England.',
          ph:'HA-lo! ish bin tom. ish KOM-me owss ENG-lahnt'
        },
        {
          who:'A',
          de:'Ich komme aus Indien. Ich spreche Hindi und Englisch.',
          en:'I come from India. I speak Hindi and English.',
          ph:'ish KOM-me owss IN-dee-en. ish SHPREH-khe HIN-dee oont ENG-lish'
        },
        {
          who:'B',
          de:'Sprichst du Deutsch?',
          en:'Do you speak German?',
          ph:'shprikhst doo doych'
        },
        {
          who:'A',
          de:'Ja, ein bisschen. Ich lerne Deutsch.',
          en:'Yes, a little. I am learning German.',
          ph:'yah, ine BISS-khen. ish LER-ne doych'
        },
        {
          who:'B',
          de:'Ich auch! Wir lernen zusammen.',
          en:'Me too! We learn together.',
          ph:'ish owkh! veer LER-nen tsoo-ZAH-men'
        }
      ],
      speak:{
        prompt:'Introduce a friend out loud: "Das ist mein Freund / meine Freundin ... Er/Sie kommt aus ... Er/Sie spricht ..."',
        model:[
          'Das ist mein Freund Tom.',
          'Er kommt aus England.',
          'Er spricht Englisch und ein bisschen Deutsch.',
          'Wir lernen zusammen.'
        ]
      }
    },
    {
      id:'t5',
      title:'Quiz: verbs',
      time:'3 min',
      kind:'quiz',
      questions:[
        {q:'Which form goes with "du"?', options:['wohne', 'wohnst', 'wohnt', 'wohnen'], answer:1,
         why:'"du" takes -st: du wohnst. "ich" takes -e: ich wohne.'},
        {q:'Fill in: "Ich ___ Deutsch."', options:['lerne', 'lernst', 'lernt', 'lernen'], answer:0,
         why:'"ich" takes -e: ich lerne = I learn.'},
        {q:'Fill in: "Wir ___ zusammen."', options:['lerne', 'lernst', 'lernt', 'lernen'], answer:3,
         why:'"wir" takes -en: wir lernen = we learn.'}
      ]
    },
    {
      id:'t6',
      title:'Quiz: people & countries',
      time:'2 min',
      kind:'quiz',
      questions:[
        {q:'What is "die Sprache"?', options:['the language', 'the country', 'the friend', 'the city'], answer:0,
         why:'die Sprache = the language. Deutsch, Englisch and Hindi are Sprachen.'},
        {q:'"Ich komme aus Indien." means...', options:['I live in India', 'I come from India', 'I speak Indian', 'I am India'], answer:1,
         why:'kommen = to come. "aus" = from. Ich komme aus Indien = I come from India.'}
      ]
    }
  ],
  next:'Next: Chapter 5 — In the City',
};

CHAPTERS['A1-5'] = {
  id:'A1-5',
  n:5,
  level:'A1',
  title:'In the City',
  time:'17 min',
  concept:'Ask where places are and give simple directions.',
  dialogue:[
    {
      who:'A',
      de:'Entschuldigung! Wo ist der Bahnhof?',
      en:'Excuse me! Where is the train station?',
      ph:'ent-SHOOL-dee-gung! voh ist dair BAHN-hohf'
    },
    {
      who:'B',
      de:'Der Bahnhof ist da links. Gehen Sie geradeaus, dann links.',
      en:'The station is over there on the left. Go straight ahead, then left.',
      ph:'dair BAHN-hohf ist dah links. GAY-en zee geh-RAH-de-owss, dahn links'
    },
    {
      who:'A',
      de:'Ist es weit von hier?',
      en:'Is it far from here?',
      ph:'ist es vite fon heer'
    },
    {
      who:'B',
      de:'Nein, nur fünf Minuten zu Fuß.',
      en:'No, only five minutes on foot.',
      ph:'nine, noor fuenf mee-NOO-ten tsoo fooss'
    },
    {
      who:'A',
      de:'Danke schön!',
      en:'Thank you very much!',
      ph:'DAHN-ke shern'
    },
    {
      who:'B',
      de:'Gern geschehen!',
      en:'You are welcome!',
      ph:'gairn geh-SHAY-en'
    }
  ],
  vocab:[
    {
      de:'Bahnhof',
      art:'der',
      pl:'Bahnhöfe',
      en:'train station',
      ph:'BAHN-hohf'
    },
    {
      de:'Straße',
      art:'die',
      pl:'Straßen',
      en:'street',
      ph:'SHTRAH-se'
    },
    {
      de:'Park',
      art:'der',
      pl:'Parks',
      en:'park',
      ph:'pahrk'
    },
    {
      de:'Bank',
      art:'die',
      pl:'Banken',
      en:'bank',
      ph:'bahnk'
    },
    {
      de:'Hotel',
      art:'das',
      pl:'Hotels',
      en:'hotel',
      ph:'ho-TEL'
    },
    {
      de:'Restaurant',
      art:'das',
      pl:'Restaurants',
      en:'restaurant',
      ph:'res-to-RAHNG'
    },
    {
      de:'Krankenhaus',
      art:'das',
      pl:'Krankenhäuser',
      en:'hospital',
      ph:'KRAHN-ken-hows'
    },
    {
      de:'Apotheke',
      art:'die',
      pl:'Apotheken',
      en:'pharmacy',
      ph:'ah-po-TAY-ke'
    },
    {
      de:'Supermarkt',
      art:'der',
      pl:'Supermärkte',
      en:'supermarket',
      ph:'ZOO-per-mahrkt'
    },
    {
      de:'Schule',
      art:'die',
      pl:'Schulen',
      en:'school',
      ph:'SHOO-le'
    },
    {
      de:'links',
      art:'',
      pl:'',
      en:'left',
      ph:'links'
    },
    {
      de:'rechts',
      art:'',
      pl:'',
      en:'right',
      ph:'rekhts'
    },
    {
      de:'geradeaus',
      art:'',
      pl:'',
      en:'straight ahead',
      ph:'geh-RAH-de-owss'
    },
    {
      de:'hier',
      art:'',
      pl:'',
      en:'here',
      ph:'heer'
    },
    {
      de:'dort',
      art:'',
      pl:'',
      en:'there',
      ph:'dort'
    },
    {
      de:'Minute',
      art:'die',
      pl:'Minuten',
      en:'minute',
      ph:'mee-NOO-te'
    },
    {
      de:'Post',
      art:'die',
      pl:'',
      en:'post office',
      ph:'post'
    },
    {
      de:'Museum',
      art:'das',
      pl:'Museen',
      en:'museum',
      ph:'moo-ZAY-um'
    },
    {
      de:'Theater',
      art:'das',
      pl:'Theater',
      en:'theatre',
      ph:'tay-AH-ter'
    },
    {
      de:'Bibliothek',
      art:'die',
      pl:'Bibliotheken',
      en:'library',
      ph:'bib-lee-o-TAYK'
    },
    {
      de:'Markt',
      art:'der',
      pl:'Märkte',
      en:'market',
      ph:'mahrkt'
    },
    {
      de:'Kirche',
      art:'die',
      pl:'Kirchen',
      en:'church',
      ph:'KEER-khe'
    },
    {
      de:'Rathaus',
      art:'das',
      pl:'Rathäuser',
      en:'town hall',
      ph:'RAHT-hows'
    },
    {
      de:'U-Bahn',
      art:'die',
      pl:'U-Bahnen',
      en:'underground, metro',
      ph:'OO-bahn'
    },
    {
      de:'Bushaltestelle',
      art:'die',
      pl:'Bushaltestellen',
      en:'bus stop',
      ph:'BOOS-hahl-te-shtel-le'
    },
    {
      de:'Brücke',
      art:'die',
      pl:'Brücken',
      en:'bridge',
      ph:'BRUE-ke'
    },
    {
      de:'Platz',
      art:'der',
      pl:'Plätze',
      en:'square, place',
      ph:'plahts'
    },
    {
      de:'kein',
      art:'',
      pl:'',
      en:'no, not a',
      ph:'kine'
    },
    {
      de:'Zentrum',
      art:'das',
      pl:'Zentren',
      en:'city centre',
      ph:'TSEN-troom'
    },
    {
      de:'Stadt',
      art:'die',
      pl:'Städte',
      en:'city, town',
      ph:'shtaht'
    },
    {
      de:'Ecke',
      art:'die',
      pl:'Ecken',
      en:'corner',
      ph:'EK-ke'
    },
    {
      de:'Ampel',
      art:'die',
      pl:'Ampeln',
      en:'traffic light',
      ph:'AHM-pel'
    },
    {
      de:'Taxi',
      art:'das',
      pl:'Taxis',
      en:'taxi',
      ph:'TAHK-see'
    },
    {
      de:'Polizei',
      art:'die',
      pl:'',
      en:'police',
      ph:'po-lee-TSAI'
    },
    {
      de:'Feuerwehr',
      art:'die',
      pl:'',
      en:'fire brigade',
      ph:'FOY-er-vair'
    },
    {
      de:'Notruf',
      art:'der',
      pl:'Notrufe',
      en:'emergency call',
      ph:'NOHT-roof'
    },
    {
      de:'Hilfe',
      art:'die',
      pl:'',
      en:'help',
      ph:'HIL-fe'
    }
  ],
  grammar:{
    title:'der, die, das — and ein, eine, ein',
    plain:'Every German noun has a gender: masculine (der), feminine (die) or neuter (das). There is no rule you can guess from — you must learn each noun WITH its article. "ein" means "a/an": ein Bahnhof, eine Straße, ein Hotel. "kein" means "no / not a" — the opposite of "ein": kein Bahnhof, keine Straße. Say "Ich habe keine Zeit" for "I have no time."',
    rule:'der Mann, die Frau, das Kind. Ask: "Wo ist der Bahnhof?" (Where is the station?) — "Wo" means "where". Answer: "Der Bahnhof ist da links." · kein Bahnhof (no station) · keine Straße (no street).',
    examples:[
      {
        de:'Wo ist der Bahnhof?',
        en:'Where is the train station?',
        ph:'voh ist dair BAHN-hohf'
      },
      {
        de:'Wo ist die Apotheke?',
        en:'Where is the pharmacy?',
        ph:'voh ist dee ah-po-TAY-ke'
      },
      {
        de:'Wo ist das Hotel?',
        en:'Where is the hotel?',
        ph:'voh ist dahs ho-TEL'
      },
      {
        de:'Hier ist kein Park.',
        en:'There is no park here.',
        ph:'heer ist kine pahrk'
      }
    ]
  },
  quiz:[
    {q:'What is the article of "Bahnhof"?', options:['der', 'die', 'das', 'ein'], answer:0,
     why:'der Bahnhof — Bahnhof is masculine. Learn it as one word: "der Bahnhof".'},
    {q:'Fill in: "Wo ist ___ Apotheke?"', options:['der', 'die', 'das', 'den'], answer:1,
     why:'die Apotheke — Apotheke is feminine, so the article is "die".'},
    {q:'What does "links" mean?', options:['right', 'left', 'straight', 'far'], answer:1,
     why:'links = left, rechts = right. "Da links" = over there on the left.'},
    {q:'"Fünf Minuten zu Fuß" means...', options:['five minutes by car', 'five minutes on foot', 'five minutes by train', 'five minutes away'], answer:1,
     why:'"zu Fuß" = on foot. Fünf Minuten zu Fuß = five minutes on foot.'},
    {q:'What is the plural of "der Park"?', options:['die Parks', 'die Parken', 'die Pärke', 'die Parke'], answer:0,
     why:'der Park → die Parks. Many short words just add -s in the plural.'}
  ],
  speak:{
    prompt:'Ask for 3 places in your town out loud: "Wo ist der Bahnhof? Wo ist die Apotheke? Wo ist das Hotel?"',
    model:[
      'Entschuldigung! Wo ist der Bahnhof?',
      'Der Bahnhof ist da links.',
      'Gehen Sie geradeaus, dann links.',
      'Danke schön!'
    ]
  },
  recap:[
    'Every noun has der, die or das. Always learn the article with the word.',
    '"Wo ist ...?" asks where something is.',
    'Directions: links (left), rechts (right), geradeaus (straight ahead).',
    '"Gern geschehen!" = You are welcome!'
  ],
  tip:'Memory tip: never learn a noun alone. Say "der Bahnhof, die Straße, das Hotel" — article + word, always together.',
  extra:[
    {
      q:'Say "Where is the hospital?"',
      a:'Wo ist das Krankenhaus?'
    },
    {
      q:'Say "Go straight ahead."',
      a:'Gehen Sie geradeaus.'
    },
    {
      q:'What is "die Bank"?',
      a:'The bank. Plural: die Banken.'
    }
  ],
  topics:[
    {
      id:'t1',
      title:'Places in the city',
      time:'3 min',
      kind:'words',
      vocab:[
        {
          de:'Bahnhof',
          art:'der',
          pl:'Bahnhöfe',
          en:'train station',
          ph:'BAHN-hohf'
        },
        {
          de:'Straße',
          art:'die',
          pl:'Straßen',
          en:'street',
          ph:'SHTRAH-se'
        },
        {
          de:'Park',
          art:'der',
          pl:'Parks',
          en:'park',
          ph:'pahrk'
        },
        {
          de:'Bank',
          art:'die',
          pl:'Banken',
          en:'bank',
          ph:'bahnk'
        },
        {
          de:'Hotel',
          art:'das',
          pl:'Hotels',
          en:'hotel',
          ph:'ho-TEL'
        },
        {
          de:'Restaurant',
          art:'das',
          pl:'Restaurants',
          en:'restaurant',
          ph:'res-to-RAHNG'
        },
        {
          de:'Krankenhaus',
          art:'das',
          pl:'Krankenhäuser',
          en:'hospital',
          ph:'KRAHN-ken-hows'
        },
        {
          de:'Apotheke',
          art:'die',
          pl:'Apotheken',
          en:'pharmacy',
          ph:'ah-po-TAY-ke'
        },
        {
          de:'Supermarkt',
          art:'der',
          pl:'Supermärkte',
          en:'supermarket',
          ph:'ZOO-per-mahrkt'
        },
        {
          de:'Schule',
          art:'die',
          pl:'Schulen',
          en:'school',
          ph:'SHOO-le'
        },
        {
          de:'links',
          art:'',
          pl:'',
          en:'left',
          ph:'links'
        },
        {
          de:'rechts',
          art:'',
          pl:'',
          en:'right',
          ph:'rekhts'
        },
        {
          de:'geradeaus',
          art:'',
          pl:'',
          en:'straight ahead',
          ph:'geh-RAH-de-owss'
        },
        {
          de:'hier',
          art:'',
          pl:'',
          en:'here',
          ph:'heer'
        },
        {
          de:'dort',
          art:'',
          pl:'',
          en:'there',
          ph:'dort'
        },
        {
          de:'Minute',
          art:'die',
          pl:'Minuten',
          en:'minute',
          ph:'mee-NOO-te'
        }
      ]
    },
    {
      id:'t2',
      title:'More places & "kein"',
      time:'3 min',
      kind:'words',
      vocab:[
        {
          de:'Post',
          art:'die',
          pl:'',
          en:'post office',
          ph:'post'
        },
        {
          de:'Museum',
          art:'das',
          pl:'Museen',
          en:'museum',
          ph:'moo-ZAY-um'
        },
        {
          de:'Theater',
          art:'das',
          pl:'Theater',
          en:'theatre',
          ph:'tay-AH-ter'
        },
        {
          de:'Bibliothek',
          art:'die',
          pl:'Bibliotheken',
          en:'library',
          ph:'bib-lee-o-TAYK'
        },
        {
          de:'Markt',
          art:'der',
          pl:'Märkte',
          en:'market',
          ph:'mahrkt'
        },
        {
          de:'Kirche',
          art:'die',
          pl:'Kirchen',
          en:'church',
          ph:'KEER-khe'
        },
        {
          de:'Rathaus',
          art:'das',
          pl:'Rathäuser',
          en:'town hall',
          ph:'RAHT-hows'
        },
        {
          de:'U-Bahn',
          art:'die',
          pl:'U-Bahnen',
          en:'underground, metro',
          ph:'OO-bahn'
        },
        {
          de:'Bushaltestelle',
          art:'die',
          pl:'Bushaltestellen',
          en:'bus stop',
          ph:'BOOS-hahl-te-shtel-le'
        },
        {
          de:'Brücke',
          art:'die',
          pl:'Brücken',
          en:'bridge',
          ph:'BRUE-ke'
        },
        {
          de:'Platz',
          art:'der',
          pl:'Plätze',
          en:'square, place',
          ph:'plahts'
        },
        {
          de:'kein',
          art:'',
          pl:'',
          en:'no, not a',
          ph:'kine'
        },
        {
          de:'Zentrum',
          art:'das',
          pl:'Zentren',
          en:'city centre',
          ph:'TSEN-troom'
        },
        {
          de:'Stadt',
          art:'die',
          pl:'Städte',
          en:'city, town',
          ph:'shtaht'
        },
        {
          de:'Ecke',
          art:'die',
          pl:'Ecken',
          en:'corner',
          ph:'EK-ke'
        },
        {
          de:'Ampel',
          art:'die',
          pl:'Ampeln',
          en:'traffic light',
          ph:'AHM-pel'
        },
        {
          de:'Taxi',
          art:'das',
          pl:'Taxis',
          en:'taxi',
          ph:'TAHK-see'
        },
        {
          de:'Polizei',
          art:'die',
          pl:'',
          en:'police',
          ph:'po-lee-TSAI'
        },
        {
          de:'Feuerwehr',
          art:'die',
          pl:'',
          en:'fire brigade',
          ph:'FOY-er-vair'
        },
        {
          de:'Notruf',
          art:'der',
          pl:'Notrufe',
          en:'emergency call',
          ph:'NOHT-roof'
        },
        {
          de:'Hilfe',
          art:'die',
          pl:'',
          en:'help',
          ph:'HIL-fe'
        }
      ]
    },
    {
      id:'t3',
      title:'der, die, das — and ein, eine, ein',
      time:'3 min',
      kind:'grammar',
      grammar:{
        title:'der, die, das — and ein, eine, ein',
        plain:'Every German noun has a gender: masculine (der), feminine (die) or neuter (das). There is no rule you can guess from — you must learn each noun WITH its article. "ein" means "a/an": ein Bahnhof, eine Straße, ein Hotel. "kein" means "no / not a" — the opposite of "ein": kein Bahnhof, keine Straße. Say "Ich habe keine Zeit" for "I have no time."',
        rule:'der Mann, die Frau, das Kind. Ask: "Wo ist der Bahnhof?" (Where is the station?) — "Wo" means "where". Answer: "Der Bahnhof ist da links." · kein Bahnhof (no station) · keine Straße (no street).',
        examples:[
          {
            de:'Wo ist der Bahnhof?',
            en:'Where is the train station?',
            ph:'voh ist dair BAHN-hohf'
          },
          {
            de:'Wo ist die Apotheke?',
            en:'Where is the pharmacy?',
            ph:'voh ist dee ah-po-TAY-ke'
          },
          {
            de:'Wo ist das Hotel?',
            en:'Where is the hotel?',
            ph:'voh ist dahs ho-TEL'
          },
          {
            de:'Hier ist kein Park.',
            en:'There is no park here.',
            ph:'heer ist kine pahrk'
          }
        ]
      }
    },
    {
      id:'t4',
      title:'Where is the station?',
      time:'3 min',
      kind:'dialogue',
      lines:[
        {
          who:'A',
          de:'Entschuldigung! Wo ist der Bahnhof?',
          en:'Excuse me! Where is the train station?',
          ph:'ent-SHOOL-dee-gung! voh ist dair BAHN-hohf'
        },
        {
          who:'B',
          de:'Der Bahnhof ist da links. Gehen Sie geradeaus, dann links.',
          en:'The station is over there on the left. Go straight ahead, then left.',
          ph:'dair BAHN-hohf ist dah links. GAY-en zee geh-RAH-de-owss, dahn links'
        },
        {
          who:'A',
          de:'Ist es weit von hier?',
          en:'Is it far from here?',
          ph:'ist es vite fon heer'
        },
        {
          who:'B',
          de:'Nein, nur fünf Minuten zu Fuß.',
          en:'No, only five minutes on foot.',
          ph:'nine, noor fuenf mee-NOO-ten tsoo fooss'
        },
        {
          who:'A',
          de:'Danke schön!',
          en:'Thank you very much!',
          ph:'DAHN-ke shern'
        },
        {
          who:'B',
          de:'Gern geschehen!',
          en:'You are welcome!',
          ph:'gairn geh-SHAY-en'
        }
      ],
      speak:{
        prompt:'Ask for 3 places in your town out loud: "Wo ist der Bahnhof? Wo ist die Apotheke? Wo ist das Hotel?"',
        model:[
          'Entschuldigung! Wo ist der Bahnhof?',
          'Der Bahnhof ist da links.',
          'Gehen Sie geradeaus, dann links.',
          'Danke schön!'
        ]
      }
    },
    {
      id:'t5',
      title:'Quiz: articles',
      time:'3 min',
      kind:'quiz',
      questions:[
        {q:'What is the article of "Bahnhof"?', options:['der', 'die', 'das', 'ein'], answer:0,
         why:'der Bahnhof — Bahnhof is masculine. Learn it as one word: "der Bahnhof".'},
        {q:'Fill in: "Wo ist ___ Apotheke?"', options:['der', 'die', 'das', 'den'], answer:1,
         why:'die Apotheke — Apotheke is feminine, so the article is "die".'},
        {q:'What does "links" mean?', options:['right', 'left', 'straight', 'far'], answer:1,
         why:'links = left, rechts = right. "Da links" = over there on the left.'}
      ]
    },
    {
      id:'t6',
      title:'Quiz: places & directions',
      time:'2 min',
      kind:'quiz',
      questions:[
        {q:'"Fünf Minuten zu Fuß" means...', options:['five minutes by car', 'five minutes on foot', 'five minutes by train', 'five minutes away'], answer:1,
         why:'"zu Fuß" = on foot. Fünf Minuten zu Fuß = five minutes on foot.'},
        {q:'What is the plural of "der Park"?', options:['die Parks', 'die Parken', 'die Pärke', 'die Parke'], answer:0,
         why:'der Park → die Parks. Many short words just add -s in the plural.'}
      ]
    }
  ],
  next:'Next: Chapter 6 — Food, Clothes & Shopping',
};

CHAPTERS['A1-6'] = {
  id:'A1-6',
  n:6,
  level:'A1',
  title:'Food, Clothes & Shopping',
  time:'18 min',
  concept:'Buy food, order in a restaurant, buy clothes, and talk about prices.',
  dialogue:[
    {
      who:'A',
      de:'Guten Tag! Was möchten Sie?',
      en:'Good day! What would you like?',
      ph:'GOO-ten TAHK! vahs MERKH-ten zee'
    },
    {
      who:'B',
      de:'Ich möchte ein Kilo Äpfel, bitte.',
      en:'I would like a kilo of apples, please.',
      ph:'ish MERKH-te ine KEE-lo EP-fel, BIT-te'
    },
    {
      who:'A',
      de:'Sonst noch etwas?',
      en:'Anything else?',
      ph:'zonst nokh ET-vahs'
    },
    {
      who:'B',
      de:'Ja, zwei Brote und eine Flasche Wasser.',
      en:'Yes, two loaves of bread and a bottle of water.',
      ph:'yah, tsvai BROH-te oont AI-ne FLAH-she VAH-ser'
    },
    {
      who:'A',
      de:'Das macht acht Euro fünfzig, bitte.',
      en:'That is eight euros fifty, please.',
      ph:'dahs mahkht ahkht OY-ro fuenf-tsish, BIT-te'
    },
    {
      who:'B',
      de:'Hier, bitte. Danke!',
      en:'Here you are. Thank you!',
      ph:'heer, BIT-te. DAHN-ke'
    }
  ],
  vocab:[
    {
      de:'Brot',
      art:'das',
      pl:'Brote',
      en:'bread',
      ph:'broht'
    },
    {
      de:'Apfel',
      art:'der',
      pl:'Äpfel',
      en:'apple',
      ph:'EP-fel'
    },
    {
      de:'Wasser',
      art:'das',
      pl:'',
      en:'water',
      ph:'VAH-ser'
    },
    {
      de:'Milch',
      art:'die',
      pl:'',
      en:'milk',
      ph:'milkh'
    },
    {
      de:'Kaffee',
      art:'der',
      pl:'',
      en:'coffee',
      ph:'kah-FAY'
    },
    {
      de:'Tee',
      art:'der',
      pl:'',
      en:'tea',
      ph:'tay'
    },
    {
      de:'Ei',
      art:'das',
      pl:'Eier',
      en:'egg',
      ph:'ai'
    },
    {
      de:'Käse',
      art:'der',
      pl:'',
      en:'cheese',
      ph:'KAY-ze'
    },
    {
      de:'Kartoffel',
      art:'die',
      pl:'Kartoffeln',
      en:'potato',
      ph:'kahr-TOF-fel'
    },
    {
      de:'Fleisch',
      art:'das',
      pl:'',
      en:'meat',
      ph:'flaish'
    },
    {
      de:'Gemüse',
      art:'das',
      pl:'',
      en:'vegetables',
      ph:'geh-MUE-ze'
    },
    {
      de:'Obst',
      art:'das',
      pl:'',
      en:'fruit',
      ph:'ohpst'
    },
    {
      de:'Euro',
      art:'der',
      pl:'Euros',
      en:'euro',
      ph:'OY-ro'
    },
    {
      de:'Flasche',
      art:'die',
      pl:'Flaschen',
      en:'bottle',
      ph:'FLAH-she'
    },
    {
      de:'möchten',
      art:'',
      pl:'',
      en:'would like',
      ph:'MERKH-ten'
    },
    {
      de:'kosten',
      art:'',
      pl:'',
      en:'to cost',
      ph:'KOS-ten'
    },
    {
      de:'kaufen',
      art:'',
      pl:'',
      en:'to buy',
      ph:'KOW-fen'
    },
    {
      de:'lecker',
      art:'',
      pl:'',
      en:'tasty, delicious',
      ph:'LEK-ker'
    },
    {
      de:'teuer',
      art:'',
      pl:'',
      en:'expensive',
      ph:'TOY-er'
    },
    {
      de:'billig',
      art:'',
      pl:'',
      en:'cheap',
      ph:'BIL-lish'
    },
    {
      de:'Reis',
      art:'der',
      pl:'',
      en:'rice',
      ph:'rice'
    },
    {
      de:'Nudeln',
      art:'die',
      pl:'',
      en:'noodles, pasta',
      ph:'NOO-deln'
    },
    {
      de:'Salat',
      art:'der',
      pl:'Salate',
      en:'salad',
      ph:'zah-LAHT'
    },
    {
      de:'Suppe',
      art:'die',
      pl:'Suppen',
      en:'soup',
      ph:'ZUP-pe'
    },
    {
      de:'Fisch',
      art:'der',
      pl:'Fische',
      en:'fish',
      ph:'fish'
    },
    {
      de:'Zucker',
      art:'der',
      pl:'',
      en:'sugar',
      ph:'TSUK-ker'
    },
    {
      de:'Salz',
      art:'das',
      pl:'',
      en:'salt',
      ph:'zahlts'
    },
    {
      de:'Butter',
      art:'die',
      pl:'',
      en:'butter',
      ph:'BOOT-ter'
    },
    {
      de:'Saft',
      art:'der',
      pl:'Säfte',
      en:'juice',
      ph:'zahft'
    },
    {
      de:'Bier',
      art:'das',
      pl:'Biere',
      en:'beer',
      ph:'beer'
    },
    {
      de:'Wein',
      art:'der',
      pl:'Weine',
      en:'wine',
      ph:'vine'
    },
    {
      de:'Kuchen',
      art:'der',
      pl:'Kuchen',
      en:'cake',
      ph:'KOO-khen'
    },
    {
      de:'Eis',
      art:'das',
      pl:'',
      en:'ice cream',
      ph:'ice'
    },
    {
      de:'Frühstück',
      art:'das',
      pl:'Frühstücke',
      en:'breakfast',
      ph:'FRUE-shtuek'
    },
    {
      de:'Mittagessen',
      art:'das',
      pl:'Mittagessen',
      en:'lunch',
      ph:'MIT-tahg-es-sen'
    },
    {
      de:'Abendessen',
      art:'das',
      pl:'Abendessen',
      en:'dinner',
      ph:'AH-bent-es-sen'
    },
    {
      de:'Hunger',
      art:'der',
      pl:'',
      en:'hunger',
      ph:'HOONG-er'
    },
    {
      de:'Durst',
      art:'der',
      pl:'',
      en:'thirst',
      ph:'doorst'
    },
    {
      de:'Teller',
      art:'der',
      pl:'Teller',
      en:'plate',
      ph:'TEL-ler'
    },
    {
      de:'Glas',
      art:'das',
      pl:'Gläser',
      en:'glass',
      ph:'glahs'
    },
    {
      de:'Essen',
      art:'das',
      pl:'',
      en:'food',
      ph:'ES-sen'
    },
    {
      de:'schlecht',
      art:'',
      pl:'',
      en:'bad',
      ph:'shlekht'
    },
    {
      de:'viel',
      art:'',
      pl:'',
      en:'much, a lot',
      ph:'feel'
    },
    {
      de:'wenig',
      art:'',
      pl:'',
      en:'little, few',
      ph:'VAY-nish'
    },
    {
      de:'Jacke',
      art:'die',
      pl:'Jacken',
      en:'jacket',
      ph:'YAH-ke'
    },
    {
      de:'Hemd',
      art:'das',
      pl:'Hemden',
      en:'shirt',
      ph:'hemt'
    },
    {
      de:'Hose',
      art:'die',
      pl:'Hosen',
      en:'trousers, pants',
      ph:'HOH-ze'
    },
    {
      de:'Kleid',
      art:'das',
      pl:'Kleider',
      en:'dress',
      ph:'klite'
    },
    {
      de:'Schuh',
      art:'der',
      pl:'Schuhe',
      en:'shoe',
      ph:'shoo'
    },
    {
      de:'Rock',
      art:'der',
      pl:'Röcke',
      en:'skirt',
      ph:'rok'
    },
    {
      de:'Mütze',
      art:'die',
      pl:'Mützen',
      en:'cap, hat',
      ph:'MUET-se'
    },
    {
      de:'Mantel',
      art:'der',
      pl:'Mäntel',
      en:'coat',
      ph:'MAHN-tel'
    },
    {
      de:'rot',
      art:'',
      pl:'',
      en:'red',
      ph:'roht'
    },
    {
      de:'blau',
      art:'',
      pl:'',
      en:'blue',
      ph:'blow'
    },
    {
      de:'grün',
      art:'',
      pl:'',
      en:'green',
      ph:'gruen'
    },
    {
      de:'gelb',
      art:'',
      pl:'',
      en:'yellow',
      ph:'gelp'
    },
    {
      de:'schwarz',
      art:'',
      pl:'',
      en:'black',
      ph:'shvahrts'
    },
    {
      de:'weiß',
      art:'',
      pl:'',
      en:'white',
      ph:'vice'
    },
    {
      de:'Größe',
      art:'die',
      pl:'Größen',
      en:'size',
      ph:'GRER-se'
    },
    {
      de:'anprobieren',
      art:'',
      pl:'',
      en:'to try on',
      ph:'AHN-pro-bee-ren'
    },
    {
      de:'suchen',
      art:'',
      pl:'',
      en:'to look for',
      ph:'ZOO-khen'
    },
    {
      de:'nehmen',
      art:'',
      pl:'',
      en:'to take',
      ph:'NAY-men'
    },
    {
      de:'Farbe',
      art:'die',
      pl:'Farben',
      en:'colour',
      ph:'FAHR-be'
    },
    {
      de:'Rabatt',
      art:'der',
      pl:'Rabatte',
      en:'discount',
      ph:'rah-BAHT'
    },
    {
      de:'Kasse',
      art:'die',
      pl:'Kassen',
      en:'cash desk, till',
      ph:'KAH-se'
    },
    {
      de:'richtig',
      art:'',
      pl:'',
      en:'right, correct',
      ph:'RIKH-tish'
    },
    {
      de:'falsch',
      art:'',
      pl:'',
      en:'wrong',
      ph:'fahlsh'
    },
    {
      de:'leider',
      art:'',
      pl:'',
      en:'unfortunately',
      ph:'LAI-der'
    },
    {
      de:'wirklich',
      art:'',
      pl:'',
      en:'really',
      ph:'VEERK-lish'
    }
  ],
  grammar:{
    title:'The accusative — the "what" case',
    plain:'In a sentence there is a doer and a thing acted on. "Nominative" = the doer (who?). "Accusative" = the thing acted on (what?). When a masculine noun is the thing acted on, its article changes: der → den, ein → einen. die and das never change. Comparing prices: billig → billiger (cheaper), gut → besser (better), with "als" (than): "Die blaue Jacke ist billiger als die rote."',
    rule:'Ich möchte einen Apfel. (der Apfel → einen Apfel) · Ich kaufe das Brot. (das stays das) · Ich trinke die Milch. (die stays die)',
    examples:[
      {
        de:'Ich möchte einen Kaffee.',
        en:'I would like a coffee.',
        ph:'ish MERKH-te AI-nen kah-FAY'
      },
      {
        de:'Ich esse das Brot.',
        en:'I eat the bread.',
        ph:'ish ES-se dahs broht'
      },
      {
        de:'Ich kaufe eine Flasche Wasser.',
        en:'I buy a bottle of water.',
        ph:'ish KOW-fe AI-ne FLAH-she VAH-ser'
      },
      {
        de:'Die blaue Jacke ist billiger als die rote.',
        en:'The blue jacket is cheaper than the red one.',
        ph:'dee BLOW-e YAH-ke ist BIL-li-ger ahls dee ROH-te'
      }
    ]
  },
  quiz:[
    {q:'Fill in: "Ich möchte ___ Apfel."', options:['ein', 'einen', 'einer', 'einem'], answer:1,
     why:'Apfel is masculine (der Apfel) and it is the thing you want, so ein → einen.'},
    {q:'Fill in: "Ich kaufe ___ Brot."', options:['der', 'den', 'das', 'dem'], answer:2,
     why:'Brot is neuter (das Brot) and das never changes in the accusative.'},
    {q:'What is the comparative of "gut"?', options:['guter', 'besser', 'best', 'mehr gut'], answer:1,
     why:'gut is irregular: gut → besser → am besten. Learn it as one special word.'},
    {q:'"Das macht acht Euro" means...', options:['That is eight euros', 'That makes eight euros', 'Eight euros, please', 'Eight euros are too much'], answer:1,
     why:'"Das macht ..." is how Germans say the total price: "That comes to eight euros."'},
    {q:'What does "teuer" mean?', options:['cheap', 'tasty', 'expensive', 'fresh'], answer:2,
     why:'teuer = expensive. The opposite is billig = cheap.'}
  ],
  speak:{
    prompt:'Order food out loud: "Ich möchte ... bitte." Then say the price: "Das macht ... Euro."',
    model:[
      'Guten Tag! Was möchten Sie?',
      'Ich möchte ein Kilo Äpfel, bitte.',
      'Das macht acht Euro fünfzig, bitte.',
      'Hier, bitte. Danke!'
    ]
  },
  recap:[
    'Food words: das Brot, der Apfel, die Milch, der Kaffee, das Wasser.',
    'Accusative: only masculine changes — der → den, ein → einen.',
    '"Ich möchte ..." = I would like ... — the polite way to order.',
    'Clothes: die Jacke, das Hemd, die Hose — colours: rot, blau, grün.',
    'Comparative: billiger (cheaper), besser (better) — "billiger als ..." = cheaper than ...'
  ],
  tip:'Memory tip: the accusative trick — only masculine changes. der → den, ein → einen. die and das never change. That is the whole rule!',
  extra:[
    {
      q:'Say "I would like a coffee."',
      a:'Ich möchte einen Kaffee.'
    },
    {
      q:'Say "I eat the bread."',
      a:'Ich esse das Brot.'
    },
    {
      q:'What does "Was kostet das?" mean?',
      a:'"How much does that cost?" — Was kostet das Brot?'
    },
    {
      q:'In a clothes shop:',
      a:'Kann ich Ihnen helfen? — Ja, ich suche eine Jacke. Was kostet die rote Jacke? — Die Jacke kostet 49 Euro. — Die nehme ich. Danke!'
    }
  ],
  topics:[
    {
      id:'t1',
      title:'Food words',
      time:'3 min',
      kind:'words',
      vocab:[
        {
          de:'Brot',
          art:'das',
          pl:'Brote',
          en:'bread',
          ph:'broht'
        },
        {
          de:'Apfel',
          art:'der',
          pl:'Äpfel',
          en:'apple',
          ph:'EP-fel'
        },
        {
          de:'Wasser',
          art:'das',
          pl:'',
          en:'water',
          ph:'VAH-ser'
        },
        {
          de:'Milch',
          art:'die',
          pl:'',
          en:'milk',
          ph:'milkh'
        },
        {
          de:'Kaffee',
          art:'der',
          pl:'',
          en:'coffee',
          ph:'kah-FAY'
        },
        {
          de:'Tee',
          art:'der',
          pl:'',
          en:'tea',
          ph:'tay'
        },
        {
          de:'Ei',
          art:'das',
          pl:'Eier',
          en:'egg',
          ph:'ai'
        },
        {
          de:'Käse',
          art:'der',
          pl:'',
          en:'cheese',
          ph:'KAY-ze'
        },
        {
          de:'Kartoffel',
          art:'die',
          pl:'Kartoffeln',
          en:'potato',
          ph:'kahr-TOF-fel'
        },
        {
          de:'Fleisch',
          art:'das',
          pl:'',
          en:'meat',
          ph:'flaish'
        },
        {
          de:'Gemüse',
          art:'das',
          pl:'',
          en:'vegetables',
          ph:'geh-MUE-ze'
        },
        {
          de:'Obst',
          art:'das',
          pl:'',
          en:'fruit',
          ph:'ohpst'
        },
        {
          de:'Euro',
          art:'der',
          pl:'Euros',
          en:'euro',
          ph:'OY-ro'
        },
        {
          de:'Flasche',
          art:'die',
          pl:'Flaschen',
          en:'bottle',
          ph:'FLAH-she'
        },
        {
          de:'möchten',
          art:'',
          pl:'',
          en:'would like',
          ph:'MERKH-ten'
        },
        {
          de:'kosten',
          art:'',
          pl:'',
          en:'to cost',
          ph:'KOS-ten'
        },
        {
          de:'kaufen',
          art:'',
          pl:'',
          en:'to buy',
          ph:'KOW-fen'
        },
        {
          de:'lecker',
          art:'',
          pl:'',
          en:'tasty, delicious',
          ph:'LEK-ker'
        },
        {
          de:'teuer',
          art:'',
          pl:'',
          en:'expensive',
          ph:'TOY-er'
        },
        {
          de:'billig',
          art:'',
          pl:'',
          en:'cheap',
          ph:'BIL-lish'
        }
      ]
    },
    {
      id:'t2',
      title:'More food & meals',
      time:'3 min',
      kind:'words',
      vocab:[
        {
          de:'Reis',
          art:'der',
          pl:'',
          en:'rice',
          ph:'rice'
        },
        {
          de:'Nudeln',
          art:'die',
          pl:'',
          en:'noodles, pasta',
          ph:'NOO-deln'
        },
        {
          de:'Salat',
          art:'der',
          pl:'Salate',
          en:'salad',
          ph:'zah-LAHT'
        },
        {
          de:'Suppe',
          art:'die',
          pl:'Suppen',
          en:'soup',
          ph:'ZUP-pe'
        },
        {
          de:'Fisch',
          art:'der',
          pl:'Fische',
          en:'fish',
          ph:'fish'
        },
        {
          de:'Zucker',
          art:'der',
          pl:'',
          en:'sugar',
          ph:'TSUK-ker'
        },
        {
          de:'Salz',
          art:'das',
          pl:'',
          en:'salt',
          ph:'zahlts'
        },
        {
          de:'Butter',
          art:'die',
          pl:'',
          en:'butter',
          ph:'BOOT-ter'
        },
        {
          de:'Saft',
          art:'der',
          pl:'Säfte',
          en:'juice',
          ph:'zahft'
        },
        {
          de:'Bier',
          art:'das',
          pl:'Biere',
          en:'beer',
          ph:'beer'
        },
        {
          de:'Wein',
          art:'der',
          pl:'Weine',
          en:'wine',
          ph:'vine'
        },
        {
          de:'Kuchen',
          art:'der',
          pl:'Kuchen',
          en:'cake',
          ph:'KOO-khen'
        },
        {
          de:'Eis',
          art:'das',
          pl:'',
          en:'ice cream',
          ph:'ice'
        },
        {
          de:'Frühstück',
          art:'das',
          pl:'Frühstücke',
          en:'breakfast',
          ph:'FRUE-shtuek'
        },
        {
          de:'Mittagessen',
          art:'das',
          pl:'Mittagessen',
          en:'lunch',
          ph:'MIT-tahg-es-sen'
        },
        {
          de:'Abendessen',
          art:'das',
          pl:'Abendessen',
          en:'dinner',
          ph:'AH-bent-es-sen'
        },
        {
          de:'Hunger',
          art:'der',
          pl:'',
          en:'hunger',
          ph:'HOONG-er'
        },
        {
          de:'Durst',
          art:'der',
          pl:'',
          en:'thirst',
          ph:'doorst'
        },
        {
          de:'Teller',
          art:'der',
          pl:'Teller',
          en:'plate',
          ph:'TEL-ler'
        },
        {
          de:'Glas',
          art:'das',
          pl:'Gläser',
          en:'glass',
          ph:'glahs'
        },
        {
          de:'Essen',
          art:'das',
          pl:'',
          en:'food',
          ph:'ES-sen'
        },
        {
          de:'schlecht',
          art:'',
          pl:'',
          en:'bad',
          ph:'shlekht'
        },
        {
          de:'viel',
          art:'',
          pl:'',
          en:'much, a lot',
          ph:'feel'
        },
        {
          de:'wenig',
          art:'',
          pl:'',
          en:'little, few',
          ph:'VAY-nish'
        }
      ]
    },
    {
      id:'t3',
      title:'Clothes, colours & shopping',
      time:'3 min',
      kind:'words',
      vocab:[
        {
          de:'Jacke',
          art:'die',
          pl:'Jacken',
          en:'jacket',
          ph:'YAH-ke'
        },
        {
          de:'Hemd',
          art:'das',
          pl:'Hemden',
          en:'shirt',
          ph:'hemt'
        },
        {
          de:'Hose',
          art:'die',
          pl:'Hosen',
          en:'trousers, pants',
          ph:'HOH-ze'
        },
        {
          de:'Kleid',
          art:'das',
          pl:'Kleider',
          en:'dress',
          ph:'klite'
        },
        {
          de:'Schuh',
          art:'der',
          pl:'Schuhe',
          en:'shoe',
          ph:'shoo'
        },
        {
          de:'Rock',
          art:'der',
          pl:'Röcke',
          en:'skirt',
          ph:'rok'
        },
        {
          de:'Mütze',
          art:'die',
          pl:'Mützen',
          en:'cap, hat',
          ph:'MUET-se'
        },
        {
          de:'Mantel',
          art:'der',
          pl:'Mäntel',
          en:'coat',
          ph:'MAHN-tel'
        },
        {
          de:'rot',
          art:'',
          pl:'',
          en:'red',
          ph:'roht'
        },
        {
          de:'blau',
          art:'',
          pl:'',
          en:'blue',
          ph:'blow'
        },
        {
          de:'grün',
          art:'',
          pl:'',
          en:'green',
          ph:'gruen'
        },
        {
          de:'gelb',
          art:'',
          pl:'',
          en:'yellow',
          ph:'gelp'
        },
        {
          de:'schwarz',
          art:'',
          pl:'',
          en:'black',
          ph:'shvahrts'
        },
        {
          de:'weiß',
          art:'',
          pl:'',
          en:'white',
          ph:'vice'
        },
        {
          de:'Größe',
          art:'die',
          pl:'Größen',
          en:'size',
          ph:'GRER-se'
        },
        {
          de:'anprobieren',
          art:'',
          pl:'',
          en:'to try on',
          ph:'AHN-pro-bee-ren'
        },
        {
          de:'suchen',
          art:'',
          pl:'',
          en:'to look for',
          ph:'ZOO-khen'
        },
        {
          de:'nehmen',
          art:'',
          pl:'',
          en:'to take',
          ph:'NAY-men'
        },
        {
          de:'Farbe',
          art:'die',
          pl:'Farben',
          en:'colour',
          ph:'FAHR-be'
        },
        {
          de:'Rabatt',
          art:'der',
          pl:'Rabatte',
          en:'discount',
          ph:'rah-BAHT'
        },
        {
          de:'Kasse',
          art:'die',
          pl:'Kassen',
          en:'cash desk, till',
          ph:'KAH-se'
        },
        {
          de:'richtig',
          art:'',
          pl:'',
          en:'right, correct',
          ph:'RIKH-tish'
        },
        {
          de:'falsch',
          art:'',
          pl:'',
          en:'wrong',
          ph:'fahlsh'
        },
        {
          de:'leider',
          art:'',
          pl:'',
          en:'unfortunately',
          ph:'LAI-der'
        },
        {
          de:'wirklich',
          art:'',
          pl:'',
          en:'really',
          ph:'VEERK-lish'
        }
      ]
    },
    {
      id:'t4',
      title:'At the market',
      time:'3 min',
      kind:'dialogue',
      lines:[
        {
          who:'A',
          de:'Guten Tag! Was möchten Sie?',
          en:'Good day! What would you like?',
          ph:'GOO-ten TAHK! vahs MERKH-ten zee'
        },
        {
          who:'B',
          de:'Ich möchte ein Kilo Äpfel, bitte.',
          en:'I would like a kilo of apples, please.',
          ph:'ish MERKH-te ine KEE-lo EP-fel, BIT-te'
        },
        {
          who:'A',
          de:'Sonst noch etwas?',
          en:'Anything else?',
          ph:'zonst nokh ET-vahs'
        },
        {
          who:'B',
          de:'Ja, zwei Brote und eine Flasche Wasser.',
          en:'Yes, two loaves of bread and a bottle of water.',
          ph:'yah, tsvai BROH-te oont AI-ne FLAH-she VAH-ser'
        },
        {
          who:'A',
          de:'Das macht acht Euro fünfzig, bitte.',
          en:'That is eight euros fifty, please.',
          ph:'dahs mahkht ahkht OY-ro fuenf-tsish, BIT-te'
        },
        {
          who:'B',
          de:'Hier, bitte. Danke!',
          en:'Here you are. Thank you!',
          ph:'heer, BIT-te. DAHN-ke'
        }
      ],
      speak:{
        prompt:'Order food out loud: "Ich möchte ... bitte." Then say the price: "Das macht ... Euro."',
        model:[
          'Guten Tag! Was möchten Sie?',
          'Ich möchte ein Kilo Äpfel, bitte.',
          'Das macht acht Euro fünfzig, bitte.',
          'Hier, bitte. Danke!'
        ]
      }
    },
    {
      id:'t5',
      title:'The accusative — the "what" case',
      time:'3 min',
      kind:'grammar',
      grammar:{
        title:'The accusative — the "what" case',
        plain:'In a sentence there is a doer and a thing acted on. "Nominative" = the doer (who?). "Accusative" = the thing acted on (what?). When a masculine noun is the thing acted on, its article changes: der → den, ein → einen. die and das never change. Comparing prices: billig → billiger (cheaper), gut → besser (better), with "als" (than): "Die blaue Jacke ist billiger als die rote."',
        rule:'Ich möchte einen Apfel. (der Apfel → einen Apfel) · Ich kaufe das Brot. (das stays das) · Ich trinke die Milch. (die stays die)',
        examples:[
          {
            de:'Ich möchte einen Kaffee.',
            en:'I would like a coffee.',
            ph:'ish MERKH-te AI-nen kah-FAY'
          },
          {
            de:'Ich esse das Brot.',
            en:'I eat the bread.',
            ph:'ish ES-se dahs broht'
          },
          {
            de:'Ich kaufe eine Flasche Wasser.',
            en:'I buy a bottle of water.',
            ph:'ish KOW-fe AI-ne FLAH-she VAH-ser'
          },
          {
            de:'Die blaue Jacke ist billiger als die rote.',
            en:'The blue jacket is cheaper than the red one.',
            ph:'dee BLOW-e YAH-ke ist BIL-li-ger ahls dee ROH-te'
          }
        ]
      }
    },
    {
      id:'t6',
      title:'Quiz: food, clothes & prices',
      time:'3 min',
      kind:'quiz',
      questions:[
        {q:'Fill in: "Ich möchte ___ Apfel."', options:['ein', 'einen', 'einer', 'einem'], answer:1,
         why:'Apfel is masculine (der Apfel) and it is the thing you want, so ein → einen.'},
        {q:'Fill in: "Ich kaufe ___ Brot."', options:['der', 'den', 'das', 'dem'], answer:2,
         why:'Brot is neuter (das Brot) and das never changes in the accusative.'},
        {q:'What is the comparative of "gut"?', options:['guter', 'besser', 'best', 'mehr gut'], answer:1,
         why:'gut is irregular: gut → besser → am besten. Learn it as one special word.'},
        {q:'"Das macht acht Euro" means...', options:['That is eight euros', 'That makes eight euros', 'Eight euros, please', 'Eight euros are too much'], answer:1,
         why:'"Das macht ..." is how Germans say the total price: "That comes to eight euros."'},
        {q:'What does "teuer" mean?', options:['cheap', 'tasty', 'expensive', 'fresh'], answer:2,
         why:'teuer = expensive. The opposite is billig = cheap.'}
      ]
    }
  ],
  next:'Next: Chapter 7 — My Day',
};

CHAPTERS['A1-7'] = {
  id:'A1-7',
  n:7,
  level:'A1',
  title:'My Day',
  time:'17 min',
  concept:'Talk about your daily routine and tell the time.',
  dialogue:[
    {
      who:'A',
      de:'Wann stehst du auf?',
      en:'When do you get up?',
      ph:'vahn SHTAYST doo owf'
    },
    {
      who:'B',
      de:'Ich stehe um sechs Uhr auf. Und du?',
      en:'I get up at six o\'clock. And you?',
      ph:'ish SHTAY-e oom zeks oor owf. oont doo'
    },
    {
      who:'A',
      de:'Ich stehe um sieben Uhr auf. Dann frühstücke ich.',
      en:'I get up at seven o\'clock. Then I have breakfast.',
      ph:'ish SHTAY-e oom ZEE-ben oor owf. dahn FRUE-shtue-ke ish'
    },
    {
      who:'B',
      de:'Was machst du am Nachmittag?',
      en:'What do you do in the afternoon?',
      ph:'vahs mahkst doo ahm NAHKH-mit-tahk'
    },
    {
      who:'A',
      de:'Ich arbeite und abends lerne ich Deutsch.',
      en:'I work, and in the evening I learn German.',
      ph:'ish AHR-bai-te oont AH-bents LER-ne ish doych'
    },
    {
      who:'B',
      de:'Ich auch! Wir lernen zusammen.',
      en:'Me too! We learn together.',
      ph:'ish owkh! veer LER-nen tsoo-ZAH-men'
    }
  ],
  vocab:[
    {
      de:'Morgen',
      art:'der',
      pl:'Morgen',
      en:'morning',
      ph:'MOR-gen'
    },
    {
      de:'Mittag',
      art:'der',
      pl:'Mittage',
      en:'midday, noon',
      ph:'MIT-tahk'
    },
    {
      de:'Abend',
      art:'der',
      pl:'Abende',
      en:'evening',
      ph:'AH-bent'
    },
    {
      de:'Nacht',
      art:'die',
      pl:'Nächte',
      en:'night',
      ph:'nahkht'
    },
    {
      de:'Uhr',
      art:'die',
      pl:'Uhren',
      en:'o\'clock, clock',
      ph:'oor'
    },
    {
      de:'Stunde',
      art:'die',
      pl:'Stunden',
      en:'hour',
      ph:'SHTOON-de'
    },
    {
      de:'Tag',
      art:'der',
      pl:'Tage',
      en:'day',
      ph:'tahk'
    },
    {
      de:'Woche',
      art:'die',
      pl:'Wochen',
      en:'week',
      ph:'VOKH-e'
    },
    {
      de:'Montag',
      art:'der',
      pl:'',
      en:'Monday',
      ph:'MON-tahk'
    },
    {
      de:'Dienstag',
      art:'der',
      pl:'',
      en:'Tuesday',
      ph:'DEENS-tahk'
    },
    {
      de:'Mittwoch',
      art:'der',
      pl:'',
      en:'Wednesday',
      ph:'MIT-vokh'
    },
    {
      de:'Donnerstag',
      art:'der',
      pl:'',
      en:'Thursday',
      ph:'DON-ners-tahk'
    },
    {
      de:'Freitag',
      art:'der',
      pl:'',
      en:'Friday',
      ph:'FRAI-tahk'
    },
    {
      de:'Samstag',
      art:'der',
      pl:'',
      en:'Saturday',
      ph:'ZAHMS-tahk'
    },
    {
      de:'Sonntag',
      art:'der',
      pl:'',
      en:'Sunday',
      ph:'ZON-tahk'
    },
    {
      de:'aufstehen',
      art:'',
      pl:'',
      en:'to get up',
      ph:'OWF-shtay-en'
    },
    {
      de:'frühstücken',
      art:'',
      pl:'',
      en:'to have breakfast',
      ph:'FRUE-shtue-ken'
    },
    {
      de:'arbeiten',
      art:'',
      pl:'',
      en:'to work',
      ph:'AHR-bai-ten'
    },
    {
      de:'schlafen',
      art:'',
      pl:'',
      en:'to sleep',
      ph:'SHLAH-fen'
    },
    {
      de:'kochen',
      art:'',
      pl:'',
      en:'to cook',
      ph:'KOKH-en'
    },
    {
      de:'morgens',
      art:'',
      pl:'',
      en:'in the morning',
      ph:'MOR-gens'
    },
    {
      de:'mittags',
      art:'',
      pl:'',
      en:'at midday',
      ph:'MIT-tahgs'
    },
    {
      de:'abends',
      art:'',
      pl:'',
      en:'in the evening',
      ph:'AH-bents'
    },
    {
      de:'nachts',
      art:'',
      pl:'',
      en:'at night',
      ph:'nahkhts'
    },
    {
      de:'spät',
      art:'',
      pl:'',
      en:'late',
      ph:'shpayt'
    },
    {
      de:'früh',
      art:'',
      pl:'',
      en:'early',
      ph:'frue'
    },
    {
      de:'pünktlich',
      art:'',
      pl:'',
      en:'on time',
      ph:'PUENKT-lish'
    },
    {
      de:'Sekunde',
      art:'die',
      pl:'Sekunden',
      en:'second',
      ph:'ze-KOON-de'
    },
    {
      de:'Monat',
      art:'der',
      pl:'Monate',
      en:'month',
      ph:'MOH-naht'
    },
    {
      de:'jetzt',
      art:'',
      pl:'',
      en:'now',
      ph:'yetst'
    },
    {
      de:'später',
      art:'',
      pl:'',
      en:'later',
      ph:'SHPAY-ter'
    },
    {
      de:'oft',
      art:'',
      pl:'',
      en:'often',
      ph:'oft'
    },
    {
      de:'manchmal',
      art:'',
      pl:'',
      en:'sometimes',
      ph:'MAHNkh-mahl'
    },
    {
      de:'nie',
      art:'',
      pl:'',
      en:'never',
      ph:'nee'
    },
    {
      de:'immer',
      art:'',
      pl:'',
      en:'always',
      ph:'IM-mer'
    },
    {
      de:'schon',
      art:'',
      pl:'',
      en:'already',
      ph:'shohn'
    },
    {
      de:'noch',
      art:'',
      pl:'',
      en:'still, yet',
      ph:'nokh'
    },
    {
      de:'heute',
      art:'',
      pl:'',
      en:'today',
      ph:'HOY-te'
    },
    {
      de:'morgen',
      art:'',
      pl:'',
      en:'tomorrow',
      ph:'MOR-gen'
    },
    {
      de:'Wecker',
      art:'der',
      pl:'Wecker',
      en:'alarm clock',
      ph:'VEK-ker'
    },
    {
      de:'duschen',
      art:'',
      pl:'',
      en:'to shower',
      ph:'DOO-shen'
    },
    {
      de:'anziehen',
      art:'',
      pl:'',
      en:'to get dressed',
      ph:'AHN-tsee-en'
    }
  ],
  grammar:{
    title:'Telling the time + separable verbs',
    plain:'Time: "Es ist sechs Uhr" = It is six o\'clock. "halb sieben" = half past six (literally "half seven" — German counts forward to the next hour). "Viertel nach sechs" = quarter past six. A "separable verb" is a verb that splits in two: aufstehen → "Ich stehe um sechs Uhr auf." The prefix (auf) goes to the end.',
    rule:'Es ist ... Uhr. · halb + next hour = half past · Ich stehe auf. Du stehst auf. Er steht auf. Wir stehen auf.',
    examples:[
      {
        de:'Es ist halb acht.',
        en:'It is half past seven.',
        ph:'es ist hahlp ahkht'
      },
      {
        de:'Ich stehe um sechs Uhr auf.',
        en:'I get up at six o\'clock.',
        ph:'ish SHTAY-e oom zeks oor owf'
      },
      {
        de:'Am Montag arbeite ich.',
        en:'On Monday I work.',
        ph:'ahm MON-tahk AHR-bai-te ish'
      },
      {
        de:'Es ist einundzwanzig Uhr.',
        en:'It is nine o\'clock in the evening (21:00).',
        ph:'es ist INE-oont-TSVAHN-tsish oor'
      }
    ]
  },
  quiz:[
    {q:'What does "Es ist halb acht" mean?', options:['It is eight o\'clock', 'It is half past seven', 'It is half past eight', 'It is seven o\'clock'], answer:1,
     why:'"halb acht" = half past seven. German says "half to eight" — it counts forward to the next hour.'},
    {q:'Fill in: "Ich stehe um sechs Uhr ___."', options:['auf', 'aufstehe', 'aufstehen', 'aufsteht'], answer:0,
     why:'aufstehen is separable: the prefix "auf" goes to the end. Ich stehe ... auf.'},
    {q:'What is "am Montag"?', options:['on Monday', 'in the morning', 'at noon', 'every day'], answer:0,
     why:'Days of the week use "am": am Montag = on Monday, am Freitag = on Friday.'},
    {q:'"Ich frühstücke um sieben Uhr." means...', options:['I sleep at seven', 'I have breakfast at seven', 'I work at seven', 'I cook at seven'], answer:1,
     why:'frühstücken = to have breakfast. Ich frühstücke = I have breakfast.'},
    {q:'Which word means "evening"?', options:['Morgen', 'Mittag', 'Abend', 'Nacht'], answer:2,
     why:'der Abend = evening. der Morgen = morning, die Nacht = night.'}
  ],
  speak:{
    prompt:'Describe your day out loud in 4 sentences: "Ich stehe um ... Uhr auf. Dann ... Am Abend ..."',
    model:[
      'Ich stehe um sechs Uhr auf.',
      'Dann frühstücke ich.',
      'Am Nachmittag arbeite ich.',
      'Abends lerne ich Deutsch.'
    ]
  },
  recap:[
    'Time: Es ist sechs Uhr. halb acht = half past seven.',
    'Separable verbs split: aufstehen → Ich stehe ... auf.',
    'Days: am Montag, am Dienstag ... am Sonntag.',
    'Routine verbs: aufstehen, frühstücken, arbeiten, schlafen, kochen.'
  ],
  tip:'Memory tip: "halb" is a trap! halb acht = 7:30, not 8:30. Think: half of the way TO eight.',
  extra:[
    {
      q:'Say "It is half past six."',
      a:'Es ist halb sieben.'
    },
    {
      q:'Say "I get up at 7 o\'clock."',
      a:'Ich stehe um sieben Uhr auf.'
    },
    {
      q:'What does "am Freitag" mean?',
      a:'On Friday.'
    }
  ],
  topics:[
    {
      id:'t1',
      title:'Days & times of day',
      time:'3 min',
      kind:'words',
      vocab:[
        {
          de:'Morgen',
          art:'der',
          pl:'Morgen',
          en:'morning',
          ph:'MOR-gen'
        },
        {
          de:'Mittag',
          art:'der',
          pl:'Mittage',
          en:'midday, noon',
          ph:'MIT-tahk'
        },
        {
          de:'Abend',
          art:'der',
          pl:'Abende',
          en:'evening',
          ph:'AH-bent'
        },
        {
          de:'Nacht',
          art:'die',
          pl:'Nächte',
          en:'night',
          ph:'nahkht'
        },
        {
          de:'Uhr',
          art:'die',
          pl:'Uhren',
          en:'o\'clock, clock',
          ph:'oor'
        },
        {
          de:'Stunde',
          art:'die',
          pl:'Stunden',
          en:'hour',
          ph:'SHTOON-de'
        },
        {
          de:'Tag',
          art:'der',
          pl:'Tage',
          en:'day',
          ph:'tahk'
        },
        {
          de:'Woche',
          art:'die',
          pl:'Wochen',
          en:'week',
          ph:'VOKH-e'
        },
        {
          de:'Montag',
          art:'der',
          pl:'',
          en:'Monday',
          ph:'MON-tahk'
        },
        {
          de:'Dienstag',
          art:'der',
          pl:'',
          en:'Tuesday',
          ph:'DEENS-tahk'
        },
        {
          de:'Mittwoch',
          art:'der',
          pl:'',
          en:'Wednesday',
          ph:'MIT-vokh'
        },
        {
          de:'Donnerstag',
          art:'der',
          pl:'',
          en:'Thursday',
          ph:'DON-ners-tahk'
        },
        {
          de:'Freitag',
          art:'der',
          pl:'',
          en:'Friday',
          ph:'FRAI-tahk'
        },
        {
          de:'Samstag',
          art:'der',
          pl:'',
          en:'Saturday',
          ph:'ZAHMS-tahk'
        },
        {
          de:'Sonntag',
          art:'der',
          pl:'',
          en:'Sunday',
          ph:'ZON-tahk'
        },
        {
          de:'aufstehen',
          art:'',
          pl:'',
          en:'to get up',
          ph:'OWF-shtay-en'
        },
        {
          de:'frühstücken',
          art:'',
          pl:'',
          en:'to have breakfast',
          ph:'FRUE-shtue-ken'
        },
        {
          de:'arbeiten',
          art:'',
          pl:'',
          en:'to work',
          ph:'AHR-bai-ten'
        },
        {
          de:'schlafen',
          art:'',
          pl:'',
          en:'to sleep',
          ph:'SHLAH-fen'
        },
        {
          de:'kochen',
          art:'',
          pl:'',
          en:'to cook',
          ph:'KOKH-en'
        }
      ]
    },
    {
      id:'t2',
      title:'More time words',
      time:'3 min',
      kind:'words',
      vocab:[
        {
          de:'morgens',
          art:'',
          pl:'',
          en:'in the morning',
          ph:'MOR-gens'
        },
        {
          de:'mittags',
          art:'',
          pl:'',
          en:'at midday',
          ph:'MIT-tahgs'
        },
        {
          de:'abends',
          art:'',
          pl:'',
          en:'in the evening',
          ph:'AH-bents'
        },
        {
          de:'nachts',
          art:'',
          pl:'',
          en:'at night',
          ph:'nahkhts'
        },
        {
          de:'spät',
          art:'',
          pl:'',
          en:'late',
          ph:'shpayt'
        },
        {
          de:'früh',
          art:'',
          pl:'',
          en:'early',
          ph:'frue'
        },
        {
          de:'pünktlich',
          art:'',
          pl:'',
          en:'on time',
          ph:'PUENKT-lish'
        },
        {
          de:'Sekunde',
          art:'die',
          pl:'Sekunden',
          en:'second',
          ph:'ze-KOON-de'
        },
        {
          de:'Monat',
          art:'der',
          pl:'Monate',
          en:'month',
          ph:'MOH-naht'
        },
        {
          de:'jetzt',
          art:'',
          pl:'',
          en:'now',
          ph:'yetst'
        },
        {
          de:'später',
          art:'',
          pl:'',
          en:'later',
          ph:'SHPAY-ter'
        },
        {
          de:'oft',
          art:'',
          pl:'',
          en:'often',
          ph:'oft'
        },
        {
          de:'manchmal',
          art:'',
          pl:'',
          en:'sometimes',
          ph:'MAHNkh-mahl'
        },
        {
          de:'nie',
          art:'',
          pl:'',
          en:'never',
          ph:'nee'
        },
        {
          de:'immer',
          art:'',
          pl:'',
          en:'always',
          ph:'IM-mer'
        },
        {
          de:'schon',
          art:'',
          pl:'',
          en:'already',
          ph:'shohn'
        },
        {
          de:'noch',
          art:'',
          pl:'',
          en:'still, yet',
          ph:'nokh'
        },
        {
          de:'heute',
          art:'',
          pl:'',
          en:'today',
          ph:'HOY-te'
        },
        {
          de:'morgen',
          art:'',
          pl:'',
          en:'tomorrow',
          ph:'MOR-gen'
        },
        {
          de:'Wecker',
          art:'der',
          pl:'Wecker',
          en:'alarm clock',
          ph:'VEK-ker'
        },
        {
          de:'duschen',
          art:'',
          pl:'',
          en:'to shower',
          ph:'DOO-shen'
        },
        {
          de:'anziehen',
          art:'',
          pl:'',
          en:'to get dressed',
          ph:'AHN-tsee-en'
        }
      ]
    },
    {
      id:'t3',
      title:'Telling the time + separable verbs',
      time:'3 min',
      kind:'grammar',
      grammar:{
        title:'Telling the time + separable verbs',
        plain:'Time: "Es ist sechs Uhr" = It is six o\'clock. "halb sieben" = half past six (literally "half seven" — German counts forward to the next hour). "Viertel nach sechs" = quarter past six. A "separable verb" is a verb that splits in two: aufstehen → "Ich stehe um sechs Uhr auf." The prefix (auf) goes to the end.',
        rule:'Es ist ... Uhr. · halb + next hour = half past · Ich stehe auf. Du stehst auf. Er steht auf. Wir stehen auf.',
        examples:[
          {
            de:'Es ist halb acht.',
            en:'It is half past seven.',
            ph:'es ist hahlp ahkht'
          },
          {
            de:'Ich stehe um sechs Uhr auf.',
            en:'I get up at six o\'clock.',
            ph:'ish SHTAY-e oom zeks oor owf'
          },
          {
            de:'Am Montag arbeite ich.',
            en:'On Monday I work.',
            ph:'ahm MON-tahk AHR-bai-te ish'
          },
          {
            de:'Es ist einundzwanzig Uhr.',
            en:'It is nine o\'clock in the evening (21:00).',
            ph:'es ist INE-oont-TSVAHN-tsish oor'
          }
        ]
      }
    },
    {
      id:'t4',
      title:'My daily routine',
      time:'3 min',
      kind:'dialogue',
      lines:[
        {
          who:'A',
          de:'Wann stehst du auf?',
          en:'When do you get up?',
          ph:'vahn SHTAYST doo owf'
        },
        {
          who:'B',
          de:'Ich stehe um sechs Uhr auf. Und du?',
          en:'I get up at six o\'clock. And you?',
          ph:'ish SHTAY-e oom zeks oor owf. oont doo'
        },
        {
          who:'A',
          de:'Ich stehe um sieben Uhr auf. Dann frühstücke ich.',
          en:'I get up at seven o\'clock. Then I have breakfast.',
          ph:'ish SHTAY-e oom ZEE-ben oor owf. dahn FRUE-shtue-ke ish'
        },
        {
          who:'B',
          de:'Was machst du am Nachmittag?',
          en:'What do you do in the afternoon?',
          ph:'vahs mahkst doo ahm NAHKH-mit-tahk'
        },
        {
          who:'A',
          de:'Ich arbeite und abends lerne ich Deutsch.',
          en:'I work, and in the evening I learn German.',
          ph:'ish AHR-bai-te oont AH-bents LER-ne ish doych'
        },
        {
          who:'B',
          de:'Ich auch! Wir lernen zusammen.',
          en:'Me too! We learn together.',
          ph:'ish owkh! veer LER-nen tsoo-ZAH-men'
        }
      ],
      speak:{
        prompt:'Describe your day out loud in 4 sentences: "Ich stehe um ... Uhr auf. Dann ... Am Abend ..."',
        model:[
          'Ich stehe um sechs Uhr auf.',
          'Dann frühstücke ich.',
          'Am Nachmittag arbeite ich.',
          'Abends lerne ich Deutsch.'
        ]
      }
    },
    {
      id:'t5',
      title:'Quiz: time',
      time:'3 min',
      kind:'quiz',
      questions:[
        {q:'What does "Es ist halb acht" mean?', options:['It is eight o\'clock', 'It is half past seven', 'It is half past eight', 'It is seven o\'clock'], answer:1,
         why:'"halb acht" = half past seven. German says "half to eight" — it counts forward to the next hour.'},
        {q:'Fill in: "Ich stehe um sechs Uhr ___."', options:['auf', 'aufstehe', 'aufstehen', 'aufsteht'], answer:0,
         why:'aufstehen is separable: the prefix "auf" goes to the end. Ich stehe ... auf.'},
        {q:'What is "am Montag"?', options:['on Monday', 'in the morning', 'at noon', 'every day'], answer:0,
         why:'Days of the week use "am": am Montag = on Monday, am Freitag = on Friday.'}
      ]
    },
    {
      id:'t6',
      title:'Quiz: my day',
      time:'2 min',
      kind:'quiz',
      questions:[
        {q:'"Ich frühstücke um sieben Uhr." means...', options:['I sleep at seven', 'I have breakfast at seven', 'I work at seven', 'I cook at seven'], answer:1,
         why:'frühstücken = to have breakfast. Ich frühstücke = I have breakfast.'},
        {q:'Which word means "evening"?', options:['Morgen', 'Mittag', 'Abend', 'Nacht'], answer:2,
         why:'der Abend = evening. der Morgen = morning, die Nacht = night.'}
      ]
    }
  ],
  next:'Next: Chapter 8 — Free Time & Invitations',
};

CHAPTERS['A1-8'] = {
  id:'A1-8',
  n:8,
  level:'A1',
  title:'Free Time & Invitations',
  time:'17 min',
  concept:'Talk about hobbies, make plans with friends, and invite people by phone.',
  dialogue:[
    {
      who:'A',
      de:'Hallo, Anna? Hier ist Ben.',
      en:'Hello, Anna? This is Ben.',
      ph:'HA-lo, AH-nah? heer ist ben'
    },
    {
      who:'B',
      de:'Hallo, Ben! Wie geht es dir?',
      en:'Hello, Ben! How are you?',
      ph:'HA-lo, ben! vee GAYT es deer'
    },
    {
      who:'A',
      de:'Gut, danke. Hast du am Samstag Zeit?',
      en:'Good, thanks. Do you have time on Saturday?',
      ph:'goot, DAHN-ke. hahst doo ahm ZAHMS-tahk tsait'
    },
    {
      who:'B',
      de:'Ja, am Samstag habe ich Zeit. Was machen wir?',
      en:'Yes, on Saturday I have time. What shall we do?',
      ph:'yah, ahm ZAHMS-tahk HAH-be ish tsait. vahs MAH-khen veer'
    },
    {
      who:'A',
      de:'Wir gehen ins Kino. Ich lade dich ein!',
      en:'We go to the cinema. I invite you!',
      ph:'veer GAY-en ins KEE-no. ish LAH-de dish ine'
    },
    {
      who:'B',
      de:'Gute Idee! Treffen wir uns um halb acht vor dem Kino?',
      en:'Good idea! Shall we meet at half past seven in front of the cinema?',
      ph:'GOO-te ee-DAY! TREF-fen veer oons oom hahlp ahkht for daym KEE-no'
    }
  ],
  vocab:[
    {
      de:'Kino',
      art:'das',
      pl:'Kinos',
      en:'cinema',
      ph:'KEE-no'
    },
    {
      de:'Film',
      art:'der',
      pl:'Filme',
      en:'film, movie',
      ph:'film'
    },
    {
      de:'Schwimmbad',
      art:'das',
      pl:'Schwimmbäder',
      en:'swimming pool',
      ph:'SHVIM-baht'
    },
    {
      de:'Sport',
      art:'der',
      pl:'',
      en:'sport',
      ph:'shport'
    },
    {
      de:'Buch',
      art:'das',
      pl:'Bücher',
      en:'book',
      ph:'bookh'
    },
    {
      de:'Musik',
      art:'die',
      pl:'',
      en:'music',
      ph:'moo-ZEEK'
    },
    {
      de:'Konzert',
      art:'das',
      pl:'Konzerte',
      en:'concert',
      ph:'kon-TSERT'
    },
    {
      de:'Wochenende',
      art:'das',
      pl:'Wochenenden',
      en:'weekend',
      ph:'VOKH-en-en-de'
    },
    {
      de:'Zeit',
      art:'die',
      pl:'',
      en:'time',
      ph:'tsait'
    },
    {
      de:'spielen',
      art:'',
      pl:'',
      en:'to play',
      ph:'SHPEE-len'
    },
    {
      de:'lesen',
      art:'',
      pl:'',
      en:'to read',
      ph:'LAY-zen'
    },
    {
      de:'schwimmen',
      art:'',
      pl:'',
      en:'to swim',
      ph:'SHVIM-men'
    },
    {
      de:'laufen',
      art:'',
      pl:'',
      en:'to run, to walk',
      ph:'LOW-fen'
    },
    {
      de:'tanzen',
      art:'',
      pl:'',
      en:'to dance',
      ph:'TAHN-tsen'
    },
    {
      de:'singen',
      art:'',
      pl:'',
      en:'to sing',
      ph:'ZING-en'
    },
    {
      de:'gern',
      art:'',
      pl:'',
      en:'gladly, with pleasure',
      ph:'gairn'
    },
    {
      de:'frei',
      art:'',
      pl:'',
      en:'free (time), free (not busy)',
      ph:'frai'
    },
    {
      de:'Idee',
      art:'die',
      pl:'Ideen',
      en:'idea',
      ph:'ee-DAY'
    },
    {
      de:'Fernsehen',
      art:'das',
      pl:'',
      en:'television, watching TV',
      ph:'FAIRN-zay-en'
    },
    {
      de:'Computer',
      art:'der',
      pl:'Computer',
      en:'computer',
      ph:'kom-PYOO-ter'
    },
    {
      de:'Internet',
      art:'das',
      pl:'',
      en:'internet',
      ph:'IN-ter-net'
    },
    {
      de:'Schach',
      art:'das',
      pl:'',
      en:'chess',
      ph:'shahkh'
    },
    {
      de:'Hobby',
      art:'das',
      pl:'Hobbys',
      en:'hobby',
      ph:'HOB-bee'
    },
    {
      de:'Spaziergang',
      art:'der',
      pl:'Spaziergänge',
      en:'walk, stroll',
      ph:'shpah-TSEER-gahng'
    },
    {
      de:'Besuch',
      art:'der',
      pl:'Besuche',
      en:'visit',
      ph:'beh-ZOOKH'
    },
    {
      de:'Fest',
      art:'das',
      pl:'Feste',
      en:'party, festival',
      ph:'fest'
    },
    {
      de:'schnell',
      art:'',
      pl:'',
      en:'fast, quick',
      ph:'shnel'
    },
    {
      de:'langsam',
      art:'',
      pl:'',
      en:'slow',
      ph:'LAHNG-zahm'
    },
    {
      de:'Telefon',
      art:'das',
      pl:'Telefone',
      en:'telephone',
      ph:'te-le-FOHN'
    },
    {
      de:'E-Mail',
      art:'die',
      pl:'E-Mails',
      en:'email',
      ph:'EE-mayl'
    },
    {
      de:'Nachricht',
      art:'die',
      pl:'Nachrichten',
      en:'message',
      ph:'NAHKH-rikht'
    },
    {
      de:'Geburtstag',
      art:'der',
      pl:'Geburtstage',
      en:'birthday',
      ph:'geh-BOORTS-tahk'
    },
    {
      de:'Einladung',
      art:'die',
      pl:'Einladungen',
      en:'invitation',
      ph:'INE-lah-dung'
    },
    {
      de:'Nummer',
      art:'die',
      pl:'Nummern',
      en:'number',
      ph:'NOO-mer'
    },
    {
      de:'Adresse',
      art:'die',
      pl:'Adressen',
      en:'address',
      ph:'ah-DRES-se'
    },
    {
      de:'Party',
      art:'die',
      pl:'Partys',
      en:'party',
      ph:'PAHR-tee'
    },
    {
      de:'Gast',
      art:'der',
      pl:'Gäste',
      en:'guest',
      ph:'gahst'
    },
    {
      de:'anrufen',
      art:'',
      pl:'',
      en:'to phone, to call',
      ph:'AHN-roo-fen'
    },
    {
      de:'einladen',
      art:'',
      pl:'',
      en:'to invite',
      ph:'INE-lah-den'
    },
    {
      de:'schreiben',
      art:'',
      pl:'',
      en:'to write',
      ph:'SHRAI-ben'
    },
    {
      de:'antworten',
      art:'',
      pl:'',
      en:'to answer',
      ph:'AHNT-vor-ten'
    },
    {
      de:'mitbringen',
      art:'',
      pl:'',
      en:'to bring along',
      ph:'MIT-bring-en'
    },
    {
      de:'Januar',
      art:'der',
      pl:'',
      en:'January',
      ph:'YAH-noo-ahr'
    },
    {
      de:'Februar',
      art:'der',
      pl:'',
      en:'February',
      ph:'FAY-broo-ahr'
    },
    {
      de:'März',
      art:'der',
      pl:'',
      en:'March',
      ph:'mairts'
    },
    {
      de:'April',
      art:'der',
      pl:'',
      en:'April',
      ph:'ah-PRIL'
    },
    {
      de:'Mai',
      art:'der',
      pl:'',
      en:'May',
      ph:'mai'
    },
    {
      de:'Juni',
      art:'der',
      pl:'',
      en:'June',
      ph:'YOO-nee'
    },
    {
      de:'Juli',
      art:'der',
      pl:'',
      en:'July',
      ph:'YOO-lee'
    },
    {
      de:'August',
      art:'der',
      pl:'',
      en:'August',
      ph:'ow-GOOST'
    },
    {
      de:'September',
      art:'der',
      pl:'',
      en:'September',
      ph:'zep-TEM-ber'
    },
    {
      de:'Oktober',
      art:'der',
      pl:'',
      en:'October',
      ph:'ok-TOH-ber'
    },
    {
      de:'November',
      art:'der',
      pl:'',
      en:'November',
      ph:'no-VEM-ber'
    },
    {
      de:'Dezember',
      art:'der',
      pl:'',
      en:'December',
      ph:'day-TSEM-ber'
    }
  ],
  grammar:{
    title:'Modal verbs — können, wollen, müssen',
    plain:'"Modal verbs" are helper verbs: can, want to, must. They change the meaning of the main verb. In German, the modal verb is in 2nd place and the main verb goes to the END as an infinitive: "Ich kann gut schwimmen." Possessive words: mein/meine, dein/deine — mein before der/das nouns, meine before die/plural nouns. You met them in Chapter 4: "Das ist mein Freund."',
    rule:'können (can): ich kann, du kannst, er kann, wir können, ihr könnt, sie können · wollen (want): ich will, du willst, er will, wir wollen · müssen (must): ich muss, du musst, er muss, wir müssen',
    examples:[
      {
        de:'Ich kann gut schwimmen.',
        en:'I can swim well.',
        ph:'ish kahn goot SHVIM-men'
      },
      {
        de:'Wir wollen ins Kino gehen.',
        en:'We want to go to the cinema.',
        ph:'veer VOL-len ins KEE-no GAY-en'
      },
      {
        de:'Ich muss am Samstag arbeiten.',
        en:'I must work on Saturday.',
        ph:'ish mooss ahm ZAHMS-tahk AHR-bai-ten'
      },
      {
        de:'Das ist meine Freundin.',
        en:'This is my friend (female).',
        ph:'dahs ist MAI-ne FROYNT-in'
      }
    ]
  },
  quiz:[
    {q:'Fill in: "Ich ___ gut schwimmen."', options:['kann', 'kannst', 'können', 'kannst du'], answer:0,
     why:'"ich" takes "kann". Ich kann = I can.'},
    {q:'"Wir wollen ins Kino gehen." means...', options:[
      'We go to the cinema',
      'We want to go to the cinema',
      'We can go to the cinema',
      'We must go to the cinema'
    ], answer:1,
     why:'wollen = to want. "Wir wollen ... gehen" = We want to go.'},
    {q:'Where does the main verb go with a modal verb?', options:['2nd place', '1st place', 'At the end', 'It disappears'], answer:2,
     why:'With a modal verb, the main verb goes to the END: "Ich kann gut schwimmen."'},
    {q:'What does "Ich lade dich ein" mean?', options:['I call you', 'I invite you', 'I write to you', 'I visit you'], answer:1,
     why:'einladen = to invite. "Ich lade dich ein" = I invite you.'},
    {q:'Which verb means "to phone"?', options:['schreiben', 'antworten', 'anrufen', 'einladen'], answer:2,
     why:'anrufen = to phone. It is separable: "Ich rufe dich an."'}
  ],
  speak:{
    prompt:'Invite a friend out loud: "Hallo! Hier ist [name]. Hast du am Samstag Zeit? Wir gehen ins Kino."',
    model:[
      'Hallo, Anna? Hier ist Ben.',
      'Hast du am Samstag Zeit?',
      'Wir gehen ins Kino.',
      'Treffen wir uns um halb acht vor dem Kino?'
    ]
  },
  recap:[
    'Modal verbs: können (can), wollen (want), müssen (must).',
    'Modal verb in 2nd place, main verb at the END.',
    'Possessives: mein/meine, dein/deine.',
    'Months: Januar, Februar, März ... Dezember. "Mein Geburtstag ist im Mai."',
    'Phone start: "Hallo, Anna? Hier ist Ben."'
  ],
  tip:'Memory tip: "gern" is your friend — "Ich lese gern" (I like reading), "Ja, gern!" (Yes, gladly!). Use it everywhere. Months are easy: Januar, Februar, März — say your birthday month in German today.',
  extra:[
    {
      q:'Say "I can swim well."',
      a:'Ich kann gut schwimmen.'
    },
    {
      q:'Say "We want to go to the cinema."',
      a:'Wir wollen ins Kino gehen.'
    },
    {
      q:'What does "Ich habe keine Zeit" mean?',
      a:'I have no time.'
    },
    {
      q:'Say "I invite you to my birthday."',
      a:'Ich lade dich zum Geburtstag ein.'
    },
    {
      q:'Say "I call you."',
      a:'Ich rufe dich an.'
    }
  ],
  topics:[
    {
      id:'t1',
      title:'Free time & hobbies',
      time:'3 min',
      kind:'words',
      vocab:[
        {
          de:'Kino',
          art:'das',
          pl:'Kinos',
          en:'cinema',
          ph:'KEE-no'
        },
        {
          de:'Film',
          art:'der',
          pl:'Filme',
          en:'film, movie',
          ph:'film'
        },
        {
          de:'Schwimmbad',
          art:'das',
          pl:'Schwimmbäder',
          en:'swimming pool',
          ph:'SHVIM-baht'
        },
        {
          de:'Sport',
          art:'der',
          pl:'',
          en:'sport',
          ph:'shport'
        },
        {
          de:'Buch',
          art:'das',
          pl:'Bücher',
          en:'book',
          ph:'bookh'
        },
        {
          de:'Musik',
          art:'die',
          pl:'',
          en:'music',
          ph:'moo-ZEEK'
        },
        {
          de:'Konzert',
          art:'das',
          pl:'Konzerte',
          en:'concert',
          ph:'kon-TSERT'
        },
        {
          de:'Wochenende',
          art:'das',
          pl:'Wochenenden',
          en:'weekend',
          ph:'VOKH-en-en-de'
        },
        {
          de:'Zeit',
          art:'die',
          pl:'',
          en:'time',
          ph:'tsait'
        },
        {
          de:'spielen',
          art:'',
          pl:'',
          en:'to play',
          ph:'SHPEE-len'
        },
        {
          de:'lesen',
          art:'',
          pl:'',
          en:'to read',
          ph:'LAY-zen'
        },
        {
          de:'schwimmen',
          art:'',
          pl:'',
          en:'to swim',
          ph:'SHVIM-men'
        },
        {
          de:'laufen',
          art:'',
          pl:'',
          en:'to run, to walk',
          ph:'LOW-fen'
        },
        {
          de:'tanzen',
          art:'',
          pl:'',
          en:'to dance',
          ph:'TAHN-tsen'
        },
        {
          de:'singen',
          art:'',
          pl:'',
          en:'to sing',
          ph:'ZING-en'
        },
        {
          de:'gern',
          art:'',
          pl:'',
          en:'gladly, with pleasure',
          ph:'gairn'
        },
        {
          de:'frei',
          art:'',
          pl:'',
          en:'free (time), free (not busy)',
          ph:'frai'
        },
        {
          de:'Idee',
          art:'die',
          pl:'Ideen',
          en:'idea',
          ph:'ee-DAY'
        },
        {
          de:'Fernsehen',
          art:'das',
          pl:'',
          en:'television, watching TV',
          ph:'FAIRN-zay-en'
        },
        {
          de:'Computer',
          art:'der',
          pl:'Computer',
          en:'computer',
          ph:'kom-PYOO-ter'
        },
        {
          de:'Internet',
          art:'das',
          pl:'',
          en:'internet',
          ph:'IN-ter-net'
        },
        {
          de:'Schach',
          art:'das',
          pl:'',
          en:'chess',
          ph:'shahkh'
        },
        {
          de:'Hobby',
          art:'das',
          pl:'Hobbys',
          en:'hobby',
          ph:'HOB-bee'
        },
        {
          de:'Spaziergang',
          art:'der',
          pl:'Spaziergänge',
          en:'walk, stroll',
          ph:'shpah-TSEER-gahng'
        },
        {
          de:'Besuch',
          art:'der',
          pl:'Besuche',
          en:'visit',
          ph:'beh-ZOOKH'
        },
        {
          de:'Fest',
          art:'das',
          pl:'Feste',
          en:'party, festival',
          ph:'fest'
        },
        {
          de:'schnell',
          art:'',
          pl:'',
          en:'fast, quick',
          ph:'shnel'
        },
        {
          de:'langsam',
          art:'',
          pl:'',
          en:'slow',
          ph:'LAHNG-zahm'
        }
      ]
    },
    {
      id:'t2',
      title:'Phone, invitations & months',
      time:'3 min',
      kind:'words',
      vocab:[
        {
          de:'Telefon',
          art:'das',
          pl:'Telefone',
          en:'telephone',
          ph:'te-le-FOHN'
        },
        {
          de:'E-Mail',
          art:'die',
          pl:'E-Mails',
          en:'email',
          ph:'EE-mayl'
        },
        {
          de:'Nachricht',
          art:'die',
          pl:'Nachrichten',
          en:'message',
          ph:'NAHKH-rikht'
        },
        {
          de:'Geburtstag',
          art:'der',
          pl:'Geburtstage',
          en:'birthday',
          ph:'geh-BOORTS-tahk'
        },
        {
          de:'Einladung',
          art:'die',
          pl:'Einladungen',
          en:'invitation',
          ph:'INE-lah-dung'
        },
        {
          de:'Nummer',
          art:'die',
          pl:'Nummern',
          en:'number',
          ph:'NOO-mer'
        },
        {
          de:'Adresse',
          art:'die',
          pl:'Adressen',
          en:'address',
          ph:'ah-DRES-se'
        },
        {
          de:'Party',
          art:'die',
          pl:'Partys',
          en:'party',
          ph:'PAHR-tee'
        },
        {
          de:'Gast',
          art:'der',
          pl:'Gäste',
          en:'guest',
          ph:'gahst'
        },
        {
          de:'anrufen',
          art:'',
          pl:'',
          en:'to phone, to call',
          ph:'AHN-roo-fen'
        },
        {
          de:'einladen',
          art:'',
          pl:'',
          en:'to invite',
          ph:'INE-lah-den'
        },
        {
          de:'schreiben',
          art:'',
          pl:'',
          en:'to write',
          ph:'SHRAI-ben'
        },
        {
          de:'antworten',
          art:'',
          pl:'',
          en:'to answer',
          ph:'AHNT-vor-ten'
        },
        {
          de:'mitbringen',
          art:'',
          pl:'',
          en:'to bring along',
          ph:'MIT-bring-en'
        },
        {
          de:'Januar',
          art:'der',
          pl:'',
          en:'January',
          ph:'YAH-noo-ahr'
        },
        {
          de:'Februar',
          art:'der',
          pl:'',
          en:'February',
          ph:'FAY-broo-ahr'
        },
        {
          de:'März',
          art:'der',
          pl:'',
          en:'March',
          ph:'mairts'
        },
        {
          de:'April',
          art:'der',
          pl:'',
          en:'April',
          ph:'ah-PRIL'
        },
        {
          de:'Mai',
          art:'der',
          pl:'',
          en:'May',
          ph:'mai'
        },
        {
          de:'Juni',
          art:'der',
          pl:'',
          en:'June',
          ph:'YOO-nee'
        },
        {
          de:'Juli',
          art:'der',
          pl:'',
          en:'July',
          ph:'YOO-lee'
        },
        {
          de:'August',
          art:'der',
          pl:'',
          en:'August',
          ph:'ow-GOOST'
        },
        {
          de:'September',
          art:'der',
          pl:'',
          en:'September',
          ph:'zep-TEM-ber'
        },
        {
          de:'Oktober',
          art:'der',
          pl:'',
          en:'October',
          ph:'ok-TOH-ber'
        },
        {
          de:'November',
          art:'der',
          pl:'',
          en:'November',
          ph:'no-VEM-ber'
        },
        {
          de:'Dezember',
          art:'der',
          pl:'',
          en:'December',
          ph:'day-TSEM-ber'
        }
      ]
    },
    {
      id:'t3',
      title:'Modal verbs — können, wollen, müssen',
      time:'3 min',
      kind:'grammar',
      grammar:{
        title:'Modal verbs — können, wollen, müssen',
        plain:'"Modal verbs" are helper verbs: can, want to, must. They change the meaning of the main verb. In German, the modal verb is in 2nd place and the main verb goes to the END as an infinitive: "Ich kann gut schwimmen." Possessive words: mein/meine, dein/deine — mein before der/das nouns, meine before die/plural nouns. You met them in Chapter 4: "Das ist mein Freund."',
        rule:'können (can): ich kann, du kannst, er kann, wir können, ihr könnt, sie können · wollen (want): ich will, du willst, er will, wir wollen · müssen (must): ich muss, du musst, er muss, wir müssen',
        examples:[
          {
            de:'Ich kann gut schwimmen.',
            en:'I can swim well.',
            ph:'ish kahn goot SHVIM-men'
          },
          {
            de:'Wir wollen ins Kino gehen.',
            en:'We want to go to the cinema.',
            ph:'veer VOL-len ins KEE-no GAY-en'
          },
          {
            de:'Ich muss am Samstag arbeiten.',
            en:'I must work on Saturday.',
            ph:'ish mooss ahm ZAHMS-tahk AHR-bai-ten'
          },
          {
            de:'Das ist meine Freundin.',
            en:'This is my friend (female).',
            ph:'dahs ist MAI-ne FROYNT-in'
          }
        ]
      }
    },
    {
      id:'t4',
      title:'A phone invitation',
      time:'3 min',
      kind:'dialogue',
      lines:[
        {
          who:'A',
          de:'Hallo, Anna? Hier ist Ben.',
          en:'Hello, Anna? This is Ben.',
          ph:'HA-lo, AH-nah? heer ist ben'
        },
        {
          who:'B',
          de:'Hallo, Ben! Wie geht es dir?',
          en:'Hello, Ben! How are you?',
          ph:'HA-lo, ben! vee GAYT es deer'
        },
        {
          who:'A',
          de:'Gut, danke. Hast du am Samstag Zeit?',
          en:'Good, thanks. Do you have time on Saturday?',
          ph:'goot, DAHN-ke. hahst doo ahm ZAHMS-tahk tsait'
        },
        {
          who:'B',
          de:'Ja, am Samstag habe ich Zeit. Was machen wir?',
          en:'Yes, on Saturday I have time. What shall we do?',
          ph:'yah, ahm ZAHMS-tahk HAH-be ish tsait. vahs MAH-khen veer'
        },
        {
          who:'A',
          de:'Wir gehen ins Kino. Ich lade dich ein!',
          en:'We go to the cinema. I invite you!',
          ph:'veer GAY-en ins KEE-no. ish LAH-de dish ine'
        },
        {
          who:'B',
          de:'Gute Idee! Treffen wir uns um halb acht vor dem Kino?',
          en:'Good idea! Shall we meet at half past seven in front of the cinema?',
          ph:'GOO-te ee-DAY! TREF-fen veer oons oom hahlp ahkht for daym KEE-no'
        }
      ],
      speak:{
        prompt:'Invite a friend out loud: "Hallo! Hier ist [name]. Hast du am Samstag Zeit? Wir gehen ins Kino."',
        model:[
          'Hallo, Anna? Hier ist Ben.',
          'Hast du am Samstag Zeit?',
          'Wir gehen ins Kino.',
          'Treffen wir uns um halb acht vor dem Kino?'
        ]
      }
    },
    {
      id:'t5',
      title:'Quiz: free time',
      time:'3 min',
      kind:'quiz',
      questions:[
        {q:'Fill in: "Ich ___ gut schwimmen."', options:['kann', 'kannst', 'können', 'kannst du'], answer:0,
         why:'"ich" takes "kann". Ich kann = I can.'},
        {q:'"Wir wollen ins Kino gehen." means...', options:[
          'We go to the cinema',
          'We want to go to the cinema',
          'We can go to the cinema',
          'We must go to the cinema'
        ], answer:1,
         why:'wollen = to want. "Wir wollen ... gehen" = We want to go.'},
        {q:'Where does the main verb go with a modal verb?', options:['2nd place', '1st place', 'At the end', 'It disappears'], answer:2,
         why:'With a modal verb, the main verb goes to the END: "Ich kann gut schwimmen."'}
      ]
    },
    {
      id:'t6',
      title:'Quiz: invitations',
      time:'2 min',
      kind:'quiz',
      questions:[
        {q:'What does "Ich lade dich ein" mean?', options:['I call you', 'I invite you', 'I write to you', 'I visit you'], answer:1,
         why:'einladen = to invite. "Ich lade dich ein" = I invite you.'},
        {q:'Which verb means "to phone"?', options:['schreiben', 'antworten', 'anrufen', 'einladen'], answer:2,
         why:'anrufen = to phone. It is separable: "Ich rufe dich an."'}
      ]
    }
  ],
  next:'Next: Chapter 9 — My Home',
};

CHAPTERS['A1-9'] = {
  id:'A1-9',
  n:9,
  level:'A1',
  title:'My Home',
  time:'17 min',
  concept:'Describe your flat, rooms and furniture.',
  dialogue:[
    {
      who:'A',
      de:'Meine Wohnung ist klein, aber schön. Sie hat zwei Zimmer.',
      en:'My flat is small, but nice. It has two rooms.',
      ph:'MAI-ne VOH-nung ist kline, AH-ber shern. zee haht tsvai TSIM-mer'
    },
    {
      who:'B',
      de:'Wo ist die Küche?',
      en:'Where is the kitchen?',
      ph:'voh ist dee KUE-khe'
    },
    {
      who:'A',
      de:'Die Küche ist links. Das Bad ist rechts.',
      en:'The kitchen is on the left. The bathroom is on the right.',
      ph:'dee KUE-khe ist links. dahs baht ist rekhts'
    },
    {
      who:'B',
      de:'Der Tisch steht im Wohnzimmer?',
      en:'The table is in the living room?',
      ph:'dair tish shtayt im VOHN-tsim-mer'
    },
    {
      who:'A',
      de:'Ja, der Tisch steht im Wohnzimmer und das Bett steht im Schlafzimmer.',
      en:'Yes, the table is in the living room and the bed is in the bedroom.',
      ph:'yah, dair tish shtayt im VOHN-tsim-mer oont dahs bet shtayt im SHLAHF-tsim-mer'
    },
    {
      who:'B',
      de:'Schön! Ich wohne in einem Haus.',
      en:'Nice! I live in a house.',
      ph:'shern! ish VOH-ne in AI-nem hows'
    }
  ],
  vocab:[
    {
      de:'Wohnung',
      art:'die',
      pl:'Wohnungen',
      en:'flat, apartment',
      ph:'VOH-nung'
    },
    {
      de:'Zimmer',
      art:'das',
      pl:'Zimmer',
      en:'room',
      ph:'TSIM-mer'
    },
    {
      de:'Küche',
      art:'die',
      pl:'Küchen',
      en:'kitchen',
      ph:'KUE-khe'
    },
    {
      de:'Bad',
      art:'das',
      pl:'Bäder',
      en:'bathroom',
      ph:'baht'
    },
    {
      de:'Wohnzimmer',
      art:'das',
      pl:'Wohnzimmer',
      en:'living room',
      ph:'VOHN-tsim-mer'
    },
    {
      de:'Schlafzimmer',
      art:'das',
      pl:'Schlafzimmer',
      en:'bedroom',
      ph:'SHLAHF-tsim-mer'
    },
    {
      de:'Tisch',
      art:'der',
      pl:'Tische',
      en:'table',
      ph:'tish'
    },
    {
      de:'Stuhl',
      art:'der',
      pl:'Stühle',
      en:'chair',
      ph:'shtool'
    },
    {
      de:'Bett',
      art:'das',
      pl:'Betten',
      en:'bed',
      ph:'bet'
    },
    {
      de:'Sofa',
      art:'das',
      pl:'Sofas',
      en:'sofa',
      ph:'ZOH-fah'
    },
    {
      de:'Schrank',
      art:'der',
      pl:'Schränke',
      en:'cupboard, wardrobe',
      ph:'shrahnk'
    },
    {
      de:'Lampe',
      art:'die',
      pl:'Lampen',
      en:'lamp',
      ph:'LAHM-pe'
    },
    {
      de:'klein',
      art:'',
      pl:'',
      en:'small',
      ph:'kline'
    },
    {
      de:'groß',
      art:'',
      pl:'',
      en:'big',
      ph:'grohss'
    },
    {
      de:'schön',
      art:'',
      pl:'',
      en:'nice, beautiful',
      ph:'shern'
    },
    {
      de:'neu',
      art:'',
      pl:'',
      en:'new',
      ph:'noy'
    },
    {
      de:'alt',
      art:'',
      pl:'',
      en:'old',
      ph:'ahlt'
    },
    {
      de:'hell',
      art:'',
      pl:'',
      en:'bright',
      ph:'hel'
    },
    {
      de:'dunkel',
      art:'',
      pl:'',
      en:'dark',
      ph:'DOON-kel'
    },
    {
      de:'stehen',
      art:'',
      pl:'',
      en:'to stand',
      ph:'SHTAY-en'
    },
    {
      de:'Haus',
      art:'das',
      pl:'Häuser',
      en:'house',
      ph:'hows'
    },
    {
      de:'Badezimmer',
      art:'das',
      pl:'Badezimmer',
      en:'bathroom',
      ph:'BAH-de-tsim-mer'
    },
    {
      de:'Kinderzimmer',
      art:'das',
      pl:'Kinderzimmer',
      en:'children\'s room',
      ph:'KIN-der-tsim-mer'
    },
    {
      de:'Arbeitszimmer',
      art:'das',
      pl:'Arbeitszimmer',
      en:'study, work room',
      ph:'AHR-baits-tsim-mer'
    },
    {
      de:'Möbel',
      art:'die',
      pl:'',
      en:'furniture',
      ph:'MER-bel'
    },
    {
      de:'Bild',
      art:'das',
      pl:'Bilder',
      en:'picture',
      ph:'bilt'
    },
    {
      de:'Schlüssel',
      art:'der',
      pl:'Schlüssel',
      en:'key',
      ph:'SHLUES-sel'
    },
    {
      de:'Miete',
      art:'die',
      pl:'Mieten',
      en:'rent',
      ph:'MEE-te'
    },
    {
      de:'Nachbar',
      art:'der',
      pl:'Nachbarn',
      en:'neighbour (male)',
      ph:'NAHKH-bahr'
    },
    {
      de:'Nachbarin',
      art:'die',
      pl:'Nachbarinnen',
      en:'neighbour (female)',
      ph:'NAHKH-bah-rin'
    },
    {
      de:'haben',
      art:'',
      pl:'',
      en:'to have',
      ph:'HAH-ben'
    },
    {
      de:'Fenster',
      art:'das',
      pl:'Fenster',
      en:'window',
      ph:'FENS-ter'
    },
    {
      de:'Tür',
      art:'die',
      pl:'Türen',
      en:'door',
      ph:'tuer'
    },
    {
      de:'Treppe',
      art:'die',
      pl:'Treppen',
      en:'stairs',
      ph:'TREP-pe'
    },
    {
      de:'Balkon',
      art:'der',
      pl:'Balkone',
      en:'balcony',
      ph:'bahl-KOHN'
    },
    {
      de:'Garten',
      art:'der',
      pl:'Gärten',
      en:'garden',
      ph:'GAHR-ten'
    },
    {
      de:'Keller',
      art:'der',
      pl:'Keller',
      en:'basement, cellar',
      ph:'KEL-ler'
    }
  ],
  grammar:{
    title:'Where? — in, auf, neben, unter (fixed phrases)',
    plain:'To say WHERE something is, German uses small words: in (in), auf (on), neben (next to), unter (under), vor (in front of), hinter (behind). At A1, just learn the ready phrases: "im Wohnzimmer" = in the living room, "auf dem Tisch" = on the table. (The full rule — the dative case — comes in A2.) "haben" means "to have": ich habe, du hast, er/sie hat, wir haben, ihr habt, sie/Sie haben. "Meine Wohnung hat zwei Zimmer" = My flat has two rooms.',
    rule:'Wo ist ...? → in der Küche (in the kitchen) · auf dem Tisch (on the table) · neben dem Bett (next to the bed) · Das Zimmer ist groß. (adjectives after "ist" never change)',
    examples:[
      {
        de:'Der Tisch steht im Wohnzimmer.',
        en:'The table is in the living room.',
        ph:'dair tish shtayt im VOHN-tsim-mer'
      },
      {
        de:'Das Bett steht im Schlafzimmer.',
        en:'The bed is in the bedroom.',
        ph:'dahs bet shtayt im SHLAHF-tsim-mer'
      },
      {
        de:'Die Wohnung ist klein, aber schön.',
        en:'The flat is small, but nice.',
        ph:'dee VOH-nung ist kline, AH-ber shern'
      }
    ]
  },
  quiz:[
    {q:'What is "die Küche"?', options:['the bathroom', 'the kitchen', 'the bedroom', 'the living room'], answer:1,
     why:'die Küche = the kitchen. das Bad = the bathroom, das Schlafzimmer = the bedroom.'},
    {q:'Fill in: "Der Tisch steht ___ Wohnzimmer."', options:['in', 'im', 'auf', 'an'], answer:1,
     why:'"im" = in dem. Der Tisch steht im Wohnzimmer = The table is in the living room.'},
    {q:'What does "Die Wohnung ist klein" mean?', options:['The flat is big', 'The flat is small', 'The flat is new', 'The flat is dark'], answer:1,
     why:'klein = small. groß = big, neu = new, dunkel = dark.'},
    {q:'What is the plural of "der Stuhl"?', options:['die Stuhle', 'die Stühle', 'die Stuhls', 'die Stühler'], answer:1,
     why:'der Stuhl → die Stühle. The vowel changes: u → ü.'},
    {q:'"Meine Wohnung hat zwei Zimmer." means...', options:['My flat is two rooms', 'My flat has two rooms', 'My flat is in two rooms', 'I have two flats'], answer:1,
     why:'"haben" = to have. Meine Wohnung hat zwei Zimmer = My flat has two rooms.'}
  ],
  speak:{
    prompt:'Describe your home out loud in 4 sentences: "Meine Wohnung ist ... Sie hat ... Der Tisch steht ..."',
    model:[
      'Meine Wohnung ist klein, aber schön.',
      'Sie hat zwei Zimmer.',
      'Die Küche ist links.',
      'Das Bett steht im Schlafzimmer.'
    ]
  },
  recap:[
    'Rooms: die Küche, das Bad, das Wohnzimmer, das Schlafzimmer.',
    'Furniture: der Tisch, der Stuhl, das Bett, das Sofa, der Schrank.',
    '"im" = in the: im Wohnzimmer, im Schlafzimmer.',
    'Adjectives after "ist" never change: Das Zimmer ist groß.'
  ],
  tip:'Memory tip: walk through your home and name everything in German — "der Tisch, der Stuhl, das Bett". Your home is your classroom.',
  extra:[
    {
      q:'Say "The kitchen is on the left."',
      a:'Die Küche ist links.'
    },
    {
      q:'Say "The bed is in the bedroom."',
      a:'Das Bett steht im Schlafzimmer.'
    },
    {
      q:'What does "hell" mean?',
      a:'Bright. The opposite is "dunkel" (dark).'
    }
  ],
  topics:[
    {
      id:'t1',
      title:'Rooms & furniture',
      time:'3 min',
      kind:'words',
      vocab:[
        {
          de:'Wohnung',
          art:'die',
          pl:'Wohnungen',
          en:'flat, apartment',
          ph:'VOH-nung'
        },
        {
          de:'Zimmer',
          art:'das',
          pl:'Zimmer',
          en:'room',
          ph:'TSIM-mer'
        },
        {
          de:'Küche',
          art:'die',
          pl:'Küchen',
          en:'kitchen',
          ph:'KUE-khe'
        },
        {
          de:'Bad',
          art:'das',
          pl:'Bäder',
          en:'bathroom',
          ph:'baht'
        },
        {
          de:'Wohnzimmer',
          art:'das',
          pl:'Wohnzimmer',
          en:'living room',
          ph:'VOHN-tsim-mer'
        },
        {
          de:'Schlafzimmer',
          art:'das',
          pl:'Schlafzimmer',
          en:'bedroom',
          ph:'SHLAHF-tsim-mer'
        },
        {
          de:'Tisch',
          art:'der',
          pl:'Tische',
          en:'table',
          ph:'tish'
        },
        {
          de:'Stuhl',
          art:'der',
          pl:'Stühle',
          en:'chair',
          ph:'shtool'
        },
        {
          de:'Bett',
          art:'das',
          pl:'Betten',
          en:'bed',
          ph:'bet'
        },
        {
          de:'Sofa',
          art:'das',
          pl:'Sofas',
          en:'sofa',
          ph:'ZOH-fah'
        },
        {
          de:'Schrank',
          art:'der',
          pl:'Schränke',
          en:'cupboard, wardrobe',
          ph:'shrahnk'
        },
        {
          de:'Lampe',
          art:'die',
          pl:'Lampen',
          en:'lamp',
          ph:'LAHM-pe'
        },
        {
          de:'klein',
          art:'',
          pl:'',
          en:'small',
          ph:'kline'
        },
        {
          de:'groß',
          art:'',
          pl:'',
          en:'big',
          ph:'grohss'
        },
        {
          de:'schön',
          art:'',
          pl:'',
          en:'nice, beautiful',
          ph:'shern'
        },
        {
          de:'neu',
          art:'',
          pl:'',
          en:'new',
          ph:'noy'
        },
        {
          de:'alt',
          art:'',
          pl:'',
          en:'old',
          ph:'ahlt'
        },
        {
          de:'hell',
          art:'',
          pl:'',
          en:'bright',
          ph:'hel'
        },
        {
          de:'dunkel',
          art:'',
          pl:'',
          en:'dark',
          ph:'DOON-kel'
        },
        {
          de:'stehen',
          art:'',
          pl:'',
          en:'to stand',
          ph:'SHTAY-en'
        }
      ]
    },
    {
      id:'t2',
      title:'More home words',
      time:'3 min',
      kind:'words',
      vocab:[
        {
          de:'Haus',
          art:'das',
          pl:'Häuser',
          en:'house',
          ph:'hows'
        },
        {
          de:'Badezimmer',
          art:'das',
          pl:'Badezimmer',
          en:'bathroom',
          ph:'BAH-de-tsim-mer'
        },
        {
          de:'Kinderzimmer',
          art:'das',
          pl:'Kinderzimmer',
          en:'children\'s room',
          ph:'KIN-der-tsim-mer'
        },
        {
          de:'Arbeitszimmer',
          art:'das',
          pl:'Arbeitszimmer',
          en:'study, work room',
          ph:'AHR-baits-tsim-mer'
        },
        {
          de:'Möbel',
          art:'die',
          pl:'',
          en:'furniture',
          ph:'MER-bel'
        },
        {
          de:'Bild',
          art:'das',
          pl:'Bilder',
          en:'picture',
          ph:'bilt'
        },
        {
          de:'Schlüssel',
          art:'der',
          pl:'Schlüssel',
          en:'key',
          ph:'SHLUES-sel'
        },
        {
          de:'Miete',
          art:'die',
          pl:'Mieten',
          en:'rent',
          ph:'MEE-te'
        },
        {
          de:'Nachbar',
          art:'der',
          pl:'Nachbarn',
          en:'neighbour (male)',
          ph:'NAHKH-bahr'
        },
        {
          de:'Nachbarin',
          art:'die',
          pl:'Nachbarinnen',
          en:'neighbour (female)',
          ph:'NAHKH-bah-rin'
        },
        {
          de:'haben',
          art:'',
          pl:'',
          en:'to have',
          ph:'HAH-ben'
        },
        {
          de:'Fenster',
          art:'das',
          pl:'Fenster',
          en:'window',
          ph:'FENS-ter'
        },
        {
          de:'Tür',
          art:'die',
          pl:'Türen',
          en:'door',
          ph:'tuer'
        },
        {
          de:'Treppe',
          art:'die',
          pl:'Treppen',
          en:'stairs',
          ph:'TREP-pe'
        },
        {
          de:'Balkon',
          art:'der',
          pl:'Balkone',
          en:'balcony',
          ph:'bahl-KOHN'
        },
        {
          de:'Garten',
          art:'der',
          pl:'Gärten',
          en:'garden',
          ph:'GAHR-ten'
        },
        {
          de:'Keller',
          art:'der',
          pl:'Keller',
          en:'basement, cellar',
          ph:'KEL-ler'
        }
      ]
    },
    {
      id:'t3',
      title:'Where? — in, auf, neben, unter',
      time:'3 min',
      kind:'grammar',
      grammar:{
        title:'Where? — in, auf, neben, unter (fixed phrases)',
        plain:'To say WHERE something is, German uses small words: in (in), auf (on), neben (next to), unter (under), vor (in front of), hinter (behind). At A1, just learn the ready phrases: "im Wohnzimmer" = in the living room, "auf dem Tisch" = on the table. (The full rule — the dative case — comes in A2.) "haben" means "to have": ich habe, du hast, er/sie hat, wir haben, ihr habt, sie/Sie haben. "Meine Wohnung hat zwei Zimmer" = My flat has two rooms.',
        rule:'Wo ist ...? → in der Küche (in the kitchen) · auf dem Tisch (on the table) · neben dem Bett (next to the bed) · Das Zimmer ist groß. (adjectives after "ist" never change)',
        examples:[
          {
            de:'Der Tisch steht im Wohnzimmer.',
            en:'The table is in the living room.',
            ph:'dair tish shtayt im VOHN-tsim-mer'
          },
          {
            de:'Das Bett steht im Schlafzimmer.',
            en:'The bed is in the bedroom.',
            ph:'dahs bet shtayt im SHLAHF-tsim-mer'
          },
          {
            de:'Die Wohnung ist klein, aber schön.',
            en:'The flat is small, but nice.',
            ph:'dee VOH-nung ist kline, AH-ber shern'
          }
        ]
      }
    },
    {
      id:'t4',
      title:'My flat',
      time:'3 min',
      kind:'dialogue',
      lines:[
        {
          who:'A',
          de:'Meine Wohnung ist klein, aber schön. Sie hat zwei Zimmer.',
          en:'My flat is small, but nice. It has two rooms.',
          ph:'MAI-ne VOH-nung ist kline, AH-ber shern. zee haht tsvai TSIM-mer'
        },
        {
          who:'B',
          de:'Wo ist die Küche?',
          en:'Where is the kitchen?',
          ph:'voh ist dee KUE-khe'
        },
        {
          who:'A',
          de:'Die Küche ist links. Das Bad ist rechts.',
          en:'The kitchen is on the left. The bathroom is on the right.',
          ph:'dee KUE-khe ist links. dahs baht ist rekhts'
        },
        {
          who:'B',
          de:'Der Tisch steht im Wohnzimmer?',
          en:'The table is in the living room?',
          ph:'dair tish shtayt im VOHN-tsim-mer'
        },
        {
          who:'A',
          de:'Ja, der Tisch steht im Wohnzimmer und das Bett steht im Schlafzimmer.',
          en:'Yes, the table is in the living room and the bed is in the bedroom.',
          ph:'yah, dair tish shtayt im VOHN-tsim-mer oont dahs bet shtayt im SHLAHF-tsim-mer'
        },
        {
          who:'B',
          de:'Schön! Ich wohne in einem Haus.',
          en:'Nice! I live in a house.',
          ph:'shern! ish VOH-ne in AI-nem hows'
        }
      ],
      speak:{
        prompt:'Describe your home out loud in 4 sentences: "Meine Wohnung ist ... Sie hat ... Der Tisch steht ..."',
        model:[
          'Meine Wohnung ist klein, aber schön.',
          'Sie hat zwei Zimmer.',
          'Die Küche ist links.',
          'Das Bett steht im Schlafzimmer.'
        ]
      }
    },
    {
      id:'t5',
      title:'Quiz: home',
      time:'3 min',
      kind:'quiz',
      questions:[
        {q:'What is "die Küche"?', options:['the bathroom', 'the kitchen', 'the bedroom', 'the living room'], answer:1,
         why:'die Küche = the kitchen. das Bad = the bathroom, das Schlafzimmer = the bedroom.'},
        {q:'Fill in: "Der Tisch steht ___ Wohnzimmer."', options:['in', 'im', 'auf', 'an'], answer:1,
         why:'"im" = in dem. Der Tisch steht im Wohnzimmer = The table is in the living room.'},
        {q:'What does "Die Wohnung ist klein" mean?', options:['The flat is big', 'The flat is small', 'The flat is new', 'The flat is dark'], answer:1,
         why:'klein = small. groß = big, neu = new, dunkel = dark.'}
      ]
    },
    {
      id:'t6',
      title:'Quiz: rooms & furniture',
      time:'2 min',
      kind:'quiz',
      questions:[
        {q:'What is the plural of "der Stuhl"?', options:['die Stuhle', 'die Stühle', 'die Stuhls', 'die Stühler'], answer:1,
         why:'der Stuhl → die Stühle. The vowel changes: u → ü.'},
        {q:'"Meine Wohnung hat zwei Zimmer." means...', options:['My flat is two rooms', 'My flat has two rooms', 'My flat is in two rooms', 'I have two flats'], answer:1,
         why:'"haben" = to have. Meine Wohnung hat zwei Zimmer = My flat has two rooms.'}
      ]
    }
  ],
  next:'Next: Chapter 10 — Work',
};

CHAPTERS['A1-10'] = {
  id:'A1-10',
  n:10,
  level:'A1',
  title:'Work',
  time:'17 min',
  concept:'Talk about jobs, workplaces and working hours.',
  dialogue:[
    {
      who:'A',
      de:'Was bist du von Beruf?',
      en:'What is your job?',
      ph:'vahs bist doo fon beh-ROOF'
    },
    {
      who:'B',
      de:'Ich bin Krankenpfleger. Und du?',
      en:'I am a nurse (male). And you?',
      ph:'ish bin KRAHN-ken-pflay-ger. oont doo'
    },
    {
      who:'A',
      de:'Ich bin Lehrerin. Ich arbeite in einer Schule.',
      en:'I am a teacher (female). I work in a school.',
      ph:'ish bin LAY-re-rin. ish AHR-bai-te in AI-ner SHOO-le'
    },
    {
      who:'B',
      de:'Ich arbeite in einem Krankenhaus. Die Arbeit ist interessant, aber anstrengend.',
      en:'I work in a hospital. The work is interesting, but tiring.',
      ph:'ish AHR-bai-te in AI-nem KRAHN-ken-hows. dee AHR-bait ist in-te-res-SAHNT, AH-ber AHN-shtreng-ent'
    },
    {
      who:'A',
      de:'Wann arbeitest du?',
      en:'When do you work?',
      ph:'vahn AHR-bai-test doo'
    },
    {
      who:'B',
      de:'Ich arbeite von Montag bis Freitag, von acht bis vier Uhr.',
      en:'I work from Monday to Friday, from eight to four o\'clock.',
      ph:'ish AHR-bai-te fon MON-tahk bis FRAI-tahk, fon ahkht bis feer oor'
    }
  ],
  vocab:[
    {
      de:'Pflegefachmann',
      art:'der',
      pl:'Pflegefachmänner',
      en:'nurse (male, qualified)',
      ph:'PFLAY-geh-fahkh-mahn'
    },
    {
      de:'Pflegefachfrau',
      art:'die',
      pl:'Pflegefachfrauen',
      en:'nurse (female, qualified)',
      ph:'PFLAY-geh-fahkh-frow'
    },
    {
      de:'Krankenpfleger',
      art:'der',
      pl:'Krankenpfleger',
      en:'nurse (male, older word)',
      ph:'KRAHN-ken-pflay-ger'
    },
    {
      de:'Lehrer',
      art:'der',
      pl:'Lehrer',
      en:'teacher (male)',
      ph:'LAY-rer'
    },
    {
      de:'Lehrerin',
      art:'die',
      pl:'Lehrerinnen',
      en:'teacher (female)',
      ph:'LAY-re-rin'
    },
    {
      de:'Arzt',
      art:'der',
      pl:'Ärzte',
      en:'doctor (male)',
      ph:'ahrtst'
    },
    {
      de:'Ärztin',
      art:'die',
      pl:'Ärztinnen',
      en:'doctor (female)',
      ph:'ERTS-tin'
    },
    {
      de:'Koch',
      art:'der',
      pl:'Köche',
      en:'cook (male)',
      ph:'kokh'
    },
    {
      de:'Köchin',
      art:'die',
      pl:'Köchinnen',
      en:'cook (female)',
      ph:'KER-khin'
    },
    {
      de:'Fahrer',
      art:'der',
      pl:'Fahrer',
      en:'driver',
      ph:'FAH-rer'
    },
    {
      de:'Verkäuferin',
      art:'die',
      pl:'Verkäuferinnen',
      en:'saleswoman',
      ph:'fair-KOY-fe-rin'
    },
    {
      de:'Ingenieur',
      art:'der',
      pl:'Ingenieure',
      en:'engineer',
      ph:'in-zhe-nee-YOOR'
    },
    {
      de:'Beruf',
      art:'der',
      pl:'Berufe',
      en:'job, profession',
      ph:'beh-ROOF'
    },
    {
      de:'Arbeit',
      art:'die',
      pl:'',
      en:'work',
      ph:'AHR-bait'
    },
    {
      de:'Büro',
      art:'das',
      pl:'Büros',
      en:'office',
      ph:'bue-ROH'
    },
    {
      de:'Fabrik',
      art:'die',
      pl:'Fabriken',
      en:'factory',
      ph:'fah-BREEK'
    },
    {
      de:'interessant',
      art:'',
      pl:'',
      en:'interesting',
      ph:'in-te-res-SAHNT'
    },
    {
      de:'anstrengend',
      art:'',
      pl:'',
      en:'tiring, exhausting',
      ph:'AHN-shtreng-ent'
    },
    {
      de:'Feierabend',
      art:'der',
      pl:'',
      en:'end of the working day',
      ph:'FAI-er-ah-bent'
    },
    {
      de:'Pflege',
      art:'die',
      pl:'',
      en:'care, nursing',
      ph:'PFLAY-geh'
    },
    {
      de:'Gehalt',
      art:'das',
      pl:'Gehälter',
      en:'salary',
      ph:'geh-HAHLT'
    },
    {
      de:'Pause',
      art:'die',
      pl:'Pausen',
      en:'break',
      ph:'POW-ze'
    },
    {
      de:'Schicht',
      art:'die',
      pl:'Schichten',
      en:'shift',
      ph:'shikht'
    },
    {
      de:'Bewerbung',
      art:'die',
      pl:'Bewerbungen',
      en:'application',
      ph:'beh-VAIR-bung'
    },
    {
      de:'Lebenslauf',
      art:'der',
      pl:'Lebensläufe',
      en:'CV, resume',
      ph:'LAY-bens-lowf'
    },
    {
      de:'Stelle',
      art:'die',
      pl:'Stellen',
      en:'job, position',
      ph:'SHTEL-le'
    },
    {
      de:'Firma',
      art:'die',
      pl:'Firmen',
      en:'company',
      ph:'FEER-mah'
    },
    {
      de:'Überstunden',
      art:'die',
      pl:'',
      en:'overtime',
      ph:'UE-ber-shtoon-den'
    },
    {
      de:'Praxis',
      art:'die',
      pl:'Praxen',
      en:'practice, training placement',
      ph:'PRAHK-sis'
    },
    {
      de:'Chef',
      art:'der',
      pl:'Chefs',
      en:'boss',
      ph:'shef'
    },
    {
      de:'Vollzeit',
      art:'die',
      pl:'',
      en:'full-time',
      ph:'FOL-tsite'
    },
    {
      de:'Teilzeit',
      art:'die',
      pl:'',
      en:'part-time',
      ph:'TILE-tsite'
    }
  ],
  grammar:{
    title:'Modal verbs 2 — müssen, sollen, dürfen',
    plain:'You already know können (can) and wollen (want). Three more helpers: müssen (must), sollen (should), dürfen (may / are allowed to). Same rule as before: the modal verb is in 2nd place, the main verb goes to the END.',
    rule:'müssen: ich muss, du musst, er muss, wir müssen · sollen: ich soll, du sollst, er soll, wir sollen · dürfen: ich darf, du darfst, er darf, wir dürfen',
    examples:[
      {
        de:'Ich muss am Samstag arbeiten.',
        en:'I must work on Saturday.',
        ph:'ish mooss ahm ZAHMS-tahk AHR-bai-ten'
      },
      {
        de:'Du sollst viel Wasser trinken.',
        en:'You should drink a lot of water.',
        ph:'doo zolst feel VAH-ser TRING-ken'
      },
      {
        de:'Hier darf man nicht rauchen.',
        en:'You may not smoke here.',
        ph:'heer dahrf mahn nikht ROW-khen'
      }
    ]
  },
  quiz:[
    {q:'Fill in: "Ich ___ am Samstag arbeiten."', options:['muss', 'musst', 'müssen', 'müsst'], answer:0,
     why:'"ich" takes "muss". Ich muss = I must.'},
    {q:'"Was bist du von Beruf?" means...', options:['Where do you work?', 'What is your job?', 'When do you work?', 'Do you like your job?'], answer:1,
     why:'"von Beruf" = by profession. "Was bist du von Beruf?" = What is your job?'},
    {q:'What is "die Lehrerin"?', options:['the teacher (female)', 'the doctor (female)', 'the nurse (female)', 'the cook (female)'], answer:0,
     why:'die Lehrerin = the teacher (female). der Lehrer = the teacher (male).'},
    {q:'"Ich arbeite von acht bis vier Uhr." means...', options:[
      'I work at eight o\'clock',
      'I work from eight to four o\'clock',
      'I work eight hours',
      'I work four days a week'
    ], answer:1,
     why:'"von ... bis ..." = from ... to ... Von acht bis vier Uhr = from eight to four o\'clock.'},
    {q:'Which word means "interesting"?', options:['anstrengend', 'interessant', 'billig', 'teuer'], answer:1,
     why:'interessant = interesting. anstrengend = tiring.'}
  ],
  speak:{
    prompt:'Say your job out loud: "Ich bin ... von Beruf. Ich arbeite in ..."',
    model:[
      'Ich bin Krankenpfleger von Beruf.',
      'Ich arbeite in einem Krankenhaus.',
      'Die Arbeit ist interessant, aber anstrengend.'
    ]
  },
  recap:[
    'Jobs: der Lehrer, die Lehrerin, der Arzt, die Ärztin, der Pflegefachmann.',
    '"Was bist du von Beruf?" = What is your job?',
    'müssen (must), sollen (should), dürfen (may).',
    '"von ... bis ..." = from ... to ... (time).'
  ],
  tip:'Memory tip: job words come in pairs — Lehrer/Lehrerin, Arzt/Ärztin, Koch/Köchin. Learn both forms together.',
  extra:[
    {
      q:'Say "I must work on Saturday."',
      a:'Ich muss am Samstag arbeiten.'
    },
    {
      q:'Say "You should drink a lot of water."',
      a:'Du sollst viel Wasser trinken.'
    },
    {
      q:'What does "von Beruf" mean?',
      a:'By profession — "Was bist du von Beruf?" = What is your job?'
    }
  ],
  topics:[
    {
      id:'t1',
      title:'Jobs',
      time:'3 min',
      kind:'words',
      vocab:[
        {
          de:'Pflegefachmann',
          art:'der',
          pl:'Pflegefachmänner',
          en:'nurse (male, qualified)',
          ph:'PFLAY-geh-fahkh-mahn'
        },
        {
          de:'Pflegefachfrau',
          art:'die',
          pl:'Pflegefachfrauen',
          en:'nurse (female, qualified)',
          ph:'PFLAY-geh-fahkh-frow'
        },
        {
          de:'Krankenpfleger',
          art:'der',
          pl:'Krankenpfleger',
          en:'nurse (male, older word)',
          ph:'KRAHN-ken-pflay-ger'
        },
        {
          de:'Lehrer',
          art:'der',
          pl:'Lehrer',
          en:'teacher (male)',
          ph:'LAY-rer'
        },
        {
          de:'Lehrerin',
          art:'die',
          pl:'Lehrerinnen',
          en:'teacher (female)',
          ph:'LAY-re-rin'
        },
        {
          de:'Arzt',
          art:'der',
          pl:'Ärzte',
          en:'doctor (male)',
          ph:'ahrtst'
        },
        {
          de:'Ärztin',
          art:'die',
          pl:'Ärztinnen',
          en:'doctor (female)',
          ph:'ERTS-tin'
        },
        {
          de:'Koch',
          art:'der',
          pl:'Köche',
          en:'cook (male)',
          ph:'kokh'
        },
        {
          de:'Köchin',
          art:'die',
          pl:'Köchinnen',
          en:'cook (female)',
          ph:'KER-khin'
        },
        {
          de:'Fahrer',
          art:'der',
          pl:'Fahrer',
          en:'driver',
          ph:'FAH-rer'
        },
        {
          de:'Verkäuferin',
          art:'die',
          pl:'Verkäuferinnen',
          en:'saleswoman',
          ph:'fair-KOY-fe-rin'
        },
        {
          de:'Ingenieur',
          art:'der',
          pl:'Ingenieure',
          en:'engineer',
          ph:'in-zhe-nee-YOOR'
        },
        {
          de:'Beruf',
          art:'der',
          pl:'Berufe',
          en:'job, profession',
          ph:'beh-ROOF'
        },
        {
          de:'Arbeit',
          art:'die',
          pl:'',
          en:'work',
          ph:'AHR-bait'
        },
        {
          de:'Büro',
          art:'das',
          pl:'Büros',
          en:'office',
          ph:'bue-ROH'
        },
        {
          de:'Fabrik',
          art:'die',
          pl:'Fabriken',
          en:'factory',
          ph:'fah-BREEK'
        },
        {
          de:'interessant',
          art:'',
          pl:'',
          en:'interesting',
          ph:'in-te-res-SAHNT'
        },
        {
          de:'anstrengend',
          art:'',
          pl:'',
          en:'tiring, exhausting',
          ph:'AHN-shtreng-ent'
        },
        {
          de:'Feierabend',
          art:'der',
          pl:'',
          en:'end of the working day',
          ph:'FAI-er-ah-bent'
        }
      ]
    },
    {
      id:'t2',
      title:'More work words',
      time:'3 min',
      kind:'words',
      vocab:[
        {
          de:'Pflege',
          art:'die',
          pl:'',
          en:'care, nursing',
          ph:'PFLAY-geh'
        },
        {
          de:'Gehalt',
          art:'das',
          pl:'Gehälter',
          en:'salary',
          ph:'geh-HAHLT'
        },
        {
          de:'Pause',
          art:'die',
          pl:'Pausen',
          en:'break',
          ph:'POW-ze'
        },
        {
          de:'Schicht',
          art:'die',
          pl:'Schichten',
          en:'shift',
          ph:'shikht'
        },
        {
          de:'Bewerbung',
          art:'die',
          pl:'Bewerbungen',
          en:'application',
          ph:'beh-VAIR-bung'
        },
        {
          de:'Lebenslauf',
          art:'der',
          pl:'Lebensläufe',
          en:'CV, resume',
          ph:'LAY-bens-lowf'
        },
        {
          de:'Stelle',
          art:'die',
          pl:'Stellen',
          en:'job, position',
          ph:'SHTEL-le'
        },
        {
          de:'Firma',
          art:'die',
          pl:'Firmen',
          en:'company',
          ph:'FEER-mah'
        },
        {
          de:'Überstunden',
          art:'die',
          pl:'',
          en:'overtime',
          ph:'UE-ber-shtoon-den'
        },
        {
          de:'Praxis',
          art:'die',
          pl:'Praxen',
          en:'practice, training placement',
          ph:'PRAHK-sis'
        },
        {
          de:'Chef',
          art:'der',
          pl:'Chefs',
          en:'boss',
          ph:'shef'
        },
        {
          de:'Vollzeit',
          art:'die',
          pl:'',
          en:'full-time',
          ph:'FOL-tsite'
        },
        {
          de:'Teilzeit',
          art:'die',
          pl:'',
          en:'part-time',
          ph:'TILE-tsite'
        }
      ]
    },
    {
      id:'t3',
      title:'Modal verbs 2 — müssen, sollen, dürfen',
      time:'3 min',
      kind:'grammar',
      grammar:{
        title:'Modal verbs 2 — müssen, sollen, dürfen',
        plain:'You already know können (can) and wollen (want). Three more helpers: müssen (must), sollen (should), dürfen (may / are allowed to). Same rule as before: the modal verb is in 2nd place, the main verb goes to the END.',
        rule:'müssen: ich muss, du musst, er muss, wir müssen · sollen: ich soll, du sollst, er soll, wir sollen · dürfen: ich darf, du darfst, er darf, wir dürfen',
        examples:[
          {
            de:'Ich muss am Samstag arbeiten.',
            en:'I must work on Saturday.',
            ph:'ish mooss ahm ZAHMS-tahk AHR-bai-ten'
          },
          {
            de:'Du sollst viel Wasser trinken.',
            en:'You should drink a lot of water.',
            ph:'doo zolst feel VAH-ser TRING-ken'
          },
          {
            de:'Hier darf man nicht rauchen.',
            en:'You may not smoke here.',
            ph:'heer dahrf mahn nikht ROW-khen'
          }
        ]
      }
    },
    {
      id:'t4',
      title:'What is your job?',
      time:'3 min',
      kind:'dialogue',
      lines:[
        {
          who:'A',
          de:'Was bist du von Beruf?',
          en:'What is your job?',
          ph:'vahs bist doo fon beh-ROOF'
        },
        {
          who:'B',
          de:'Ich bin Krankenpfleger. Und du?',
          en:'I am a nurse (male). And you?',
          ph:'ish bin KRAHN-ken-pflay-ger. oont doo'
        },
        {
          who:'A',
          de:'Ich bin Lehrerin. Ich arbeite in einer Schule.',
          en:'I am a teacher (female). I work in a school.',
          ph:'ish bin LAY-re-rin. ish AHR-bai-te in AI-ner SHOO-le'
        },
        {
          who:'B',
          de:'Ich arbeite in einem Krankenhaus. Die Arbeit ist interessant, aber anstrengend.',
          en:'I work in a hospital. The work is interesting, but tiring.',
          ph:'ish AHR-bai-te in AI-nem KRAHN-ken-hows. dee AHR-bait ist in-te-res-SAHNT, AH-ber AHN-shtreng-ent'
        },
        {
          who:'A',
          de:'Wann arbeitest du?',
          en:'When do you work?',
          ph:'vahn AHR-bai-test doo'
        },
        {
          who:'B',
          de:'Ich arbeite von Montag bis Freitag, von acht bis vier Uhr.',
          en:'I work from Monday to Friday, from eight to four o\'clock.',
          ph:'ish AHR-bai-te fon MON-tahk bis FRAI-tahk, fon ahkht bis feer oor'
        }
      ],
      speak:{
        prompt:'Say your job out loud: "Ich bin ... von Beruf. Ich arbeite in ..."',
        model:[
          'Ich bin Krankenpfleger von Beruf.',
          'Ich arbeite in einem Krankenhaus.',
          'Die Arbeit ist interessant, aber anstrengend.'
        ]
      }
    },
    {
      id:'t5',
      title:'Quiz: jobs',
      time:'3 min',
      kind:'quiz',
      questions:[
        {q:'Fill in: "Ich ___ am Samstag arbeiten."', options:['muss', 'musst', 'müssen', 'müsst'], answer:0,
         why:'"ich" takes "muss". Ich muss = I must.'},
        {q:'"Was bist du von Beruf?" means...', options:['Where do you work?', 'What is your job?', 'When do you work?', 'Do you like your job?'], answer:1,
         why:'"von Beruf" = by profession. "Was bist du von Beruf?" = What is your job?'},
        {q:'What is "die Lehrerin"?', options:['the teacher (female)', 'the doctor (female)', 'the nurse (female)', 'the cook (female)'], answer:0,
         why:'die Lehrerin = the teacher (female). der Lehrer = the teacher (male).'}
      ]
    },
    {
      id:'t6',
      title:'Quiz: work & modal verbs',
      time:'2 min',
      kind:'quiz',
      questions:[
        {q:'"Ich arbeite von acht bis vier Uhr." means...', options:[
          'I work at eight o\'clock',
          'I work from eight to four o\'clock',
          'I work eight hours',
          'I work four days a week'
        ], answer:1,
         why:'"von ... bis ..." = from ... to ... Von acht bis vier Uhr = from eight to four o\'clock.'},
        {q:'Which word means "interesting"?', options:['anstrengend', 'interessant', 'billig', 'teuer'], answer:1,
         why:'interessant = interesting. anstrengend = tiring.'}
      ]
    }
  ],
  next:'Next: Chapter 11 — Health & Body',
};

CHAPTERS['A1-11'] = {
  id:'A1-11',
  n:11,
  level:'A1',
  title:'Health & Body',
  time:'17 min',
  concept:'Talk about your body, pain, and a visit to the doctor.',
  dialogue:[
    {
      who:'A',
      de:'Guten Tag, Frau Doktor! Ich habe Kopfschmerzen.',
      en:'Good day, Doctor! I have a headache.',
      ph:'GOO-ten TAHK, frow DOK-tor! ish HAH-be KOPF-shmair-tsen'
    },
    {
      who:'B',
      de:'Seit wann haben Sie Schmerzen?',
      en:'Since when have you had pain?',
      ph:'zite vahn HAH-ben zee SHMAIR-tsen'
    },
    {
      who:'A',
      de:'Seit gestern. Und ich habe auch Fieber.',
      en:'Since yesterday. And I also have a fever.',
      ph:'zite GES-tern. oont ish HAH-be owkh FEE-ber'
    },
    {
      who:'B',
      de:'Sie müssen viel Wasser trinken und sich ausruhen.',
      en:'You must drink a lot of water and rest.',
      ph:'zee MUES-sen feel VAH-ser TRING-ken oont zish OWS-roo-en'
    },
    {
      who:'A',
      de:'Danke, Frau Doktor. Auf Wiedersehen!',
      en:'Thank you, Doctor. Goodbye!',
      ph:'DAHN-ke, frow DOK-tor. owf VEE-der-zay-en'
    },
    {
      who:'B',
      de:'Kommen Sie in drei Tagen wieder.',
      en:'Come back in three days.',
      ph:'KOM-men zee in drai TAH-gen VEE-der'
    }
  ],
  vocab:[
    {
      de:'Kopf',
      art:'der',
      pl:'Köpfe',
      en:'head',
      ph:'kopf'
    },
    {
      de:'Arm',
      art:'der',
      pl:'Arme',
      en:'arm',
      ph:'ahrm'
    },
    {
      de:'Bein',
      art:'das',
      pl:'Beine',
      en:'leg',
      ph:'bine'
    },
    {
      de:'Hand',
      art:'die',
      pl:'Hände',
      en:'hand',
      ph:'hahnt'
    },
    {
      de:'Fuß',
      art:'der',
      pl:'Füße',
      en:'foot',
      ph:'fooss'
    },
    {
      de:'Auge',
      art:'das',
      pl:'Augen',
      en:'eye',
      ph:'OW-ge'
    },
    {
      de:'Ohr',
      art:'das',
      pl:'Ohren',
      en:'ear',
      ph:'ohr'
    },
    {
      de:'Mund',
      art:'der',
      pl:'',
      en:'mouth',
      ph:'moont'
    },
    {
      de:'Nase',
      art:'die',
      pl:'Nasen',
      en:'nose',
      ph:'NAH-ze'
    },
    {
      de:'Bauch',
      art:'der',
      pl:'Bäuche',
      en:'belly, stomach',
      ph:'bowkh'
    },
    {
      de:'Rücken',
      art:'der',
      pl:'',
      en:'back',
      ph:'RUE-ken'
    },
    {
      de:'Zahn',
      art:'der',
      pl:'Zähne',
      en:'tooth',
      ph:'tsahn'
    },
    {
      de:'Schmerz',
      art:'der',
      pl:'Schmerzen',
      en:'pain',
      ph:'shmairts'
    },
    {
      de:'Fieber',
      art:'das',
      pl:'',
      en:'fever',
      ph:'FEE-ber'
    },
    {
      de:'Medizin',
      art:'die',
      pl:'',
      en:'medicine',
      ph:'me-dee-TSEEN'
    },
    {
      de:'krank',
      art:'',
      pl:'',
      en:'ill, sick',
      ph:'krahnk'
    },
    {
      de:'gesund',
      art:'',
      pl:'',
      en:'healthy',
      ph:'geh-ZOONT'
    },
    {
      de:'müde',
      art:'',
      pl:'',
      en:'tired',
      ph:'MUE-de'
    },
    {
      de:'Körper',
      art:'der',
      pl:'Körper',
      en:'body',
      ph:'KOER-per'
    },
    {
      de:'Behandlung',
      art:'die',
      pl:'Behandlungen',
      en:'treatment',
      ph:'beh-HAHNT-lung'
    },
    {
      de:'Untersuchung',
      art:'die',
      pl:'Untersuchungen',
      en:'examination, check-up',
      ph:'oon-ter-ZOO-khung'
    },
    {
      de:'Arzttermin',
      art:'der',
      pl:'Arzttermine',
      en:'doctor\'s appointment',
      ph:'AHRTST-tair-meen'
    },
    {
      de:'Wartezimmer',
      art:'das',
      pl:'Wartezimmer',
      en:'waiting room',
      ph:'VAHR-te-tsim-mer'
    },
    {
      de:'Sprechstunde',
      art:'die',
      pl:'Sprechstunden',
      en:'consultation hours',
      ph:'SHPREKH-shtoon-de'
    },
    {
      de:'Krankheit',
      art:'die',
      pl:'Krankheiten',
      en:'illness',
      ph:'KRAHNK-hite'
    },
    {
      de:'Vitamin',
      art:'das',
      pl:'Vitamine',
      en:'vitamin',
      ph:'vee-tah-MEEN'
    },
    {
      de:'Ruhe',
      art:'die',
      pl:'',
      en:'rest, quiet',
      ph:'ROO-e'
    },
    {
      de:'Schlaf',
      art:'der',
      pl:'',
      en:'sleep',
      ph:'shlahf'
    },
    {
      de:'Gesundheit',
      art:'die',
      pl:'',
      en:'health',
      ph:'geh-ZOONT-hite'
    },
    {
      de:'Patient',
      art:'der',
      pl:'Patienten',
      en:'patient (male)',
      ph:'pah-tsee-ENT'
    },
    {
      de:'Husten',
      art:'der',
      pl:'',
      en:'cough',
      ph:'HOOS-ten'
    },
    {
      de:'Schnupfen',
      art:'der',
      pl:'',
      en:'cold (sniffles)',
      ph:'SHNOOP-fen'
    },
    {
      de:'Kopfschmerzen',
      art:'die',
      pl:'',
      en:'headache',
      ph:'KOPF-shmair-tsen'
    },
    {
      de:'Bauchschmerzen',
      art:'die',
      pl:'',
      en:'stomach ache',
      ph:'BOWKH-shmair-tsen'
    },
    {
      de:'Tablette',
      art:'die',
      pl:'Tabletten',
      en:'pill, tablet',
      ph:'tah-BLET-te'
    },
    {
      de:'Rezept',
      art:'das',
      pl:'Rezepte',
      en:'prescription',
      ph:'ray-TSEPT'
    }
  ],
  grammar:{
    title:'The imperative — giving instructions',
    plain:'The "imperative" is how you tell someone to do something. For "du" (one friend): take the verb stem — "Trink viel Wasser!" (Drink a lot of water!). For "Sie" (formal): use the Sie-form — "Trinken Sie viel Wasser!"',
    rule:'du-form: Trink! (drink!) · Komm! (come!) · Hör zu! (listen!) · Sie-form: Trinken Sie! · Kommen Sie! · Hören Sie zu!',
    examples:[
      {
        de:'Trink viel Wasser!',
        en:'Drink a lot of water! (to a friend)',
        ph:'tringk feel VAH-ser'
      },
      {
        de:'Trinken Sie viel Wasser!',
        en:'Drink a lot of water! (formal)',
        ph:'TRING-ken zee feel VAH-ser'
      },
      {
        de:'Ruhen Sie sich aus!',
        en:'Rest! (formal)',
        ph:'ROO-en zee zish ows'
      }
    ]
  },
  quiz:[
    {q:'"Ich habe Kopfschmerzen." means...', options:['I have a stomach ache', 'I have a headache', 'I have a fever', 'I have a cold'], answer:1,
     why:'der Kopf = head. Kopfschmerzen = headache. Bauchschmerzen = stomach ache.'},
    {q:'Fill in the imperative: "___ viel Wasser!" (to a friend)', options:['Trinken', 'Trink', 'Trinkt', 'Trinke'], answer:1,
     why:'For "du", use the verb stem: Trink! "Trinken Sie" is the formal form.'},
    {q:'"Seit gestern" means...', options:['until yesterday', 'since yesterday', 'after yesterday', 'before yesterday'], answer:1,
     why:'"seit" = since. Seit gestern = since yesterday.'},
    {q:'What is "das Auge"?', options:['the ear', 'the eye', 'the nose', 'the mouth'], answer:1,
     why:'das Auge = the eye. das Ohr = the ear, die Nase = the nose, der Mund = the mouth.'},
    {q:'What does "Ich bin krank" mean?', options:['I am tired', 'I am healthy', 'I am ill', 'I am cold'], answer:2,
     why:'krank = ill. gesund = healthy. müde = tired.'}
  ],
  speak:{
    prompt:'Play the patient out loud: "Ich habe Kopfschmerzen. Seit gestern. Und ich habe auch Fieber."',
    model:['Guten Tag, Frau Doktor!', 'Ich habe Bauchschmerzen.', 'Seit heute Morgen.', 'Ich bin sehr müde.']
  },
  recap:[
    'Body: der Kopf, der Arm, das Bein, die Hand, der Fuß, das Auge, das Ohr.',
    '"Ich habe Kopfschmerzen." = I have a headache.',
    'Imperative: Trink! (friend) / Trinken Sie! (formal).',
    '"seit" = since: Seit gestern = since yesterday.'
  ],
  tip:'Memory tip: body words are your first nursing words. Point at each part and say it in German — der Kopf, der Arm, das Bein...',
  extra:[
    {
      q:'Say "Drink a lot of water!" (formal)',
      a:'Trinken Sie viel Wasser!'
    },
    {
      q:'Say "I have a stomach ache."',
      a:'Ich habe Bauchschmerzen.'
    },
    {
      q:'What does "Gute Besserung!" mean?',
      a:'Get well soon!'
    },
    {
      q:'At the hospital — morning:',
      a:'Guten Morgen! Wie geht es Ihnen? — Gut, danke. Und Ihnen? — Auch gut, danke!'
    }
  ],
  topics:[
    {
      id:'t1',
      title:'Body',
      time:'3 min',
      kind:'words',
      vocab:[
        {
          de:'Kopf',
          art:'der',
          pl:'Köpfe',
          en:'head',
          ph:'kopf'
        },
        {
          de:'Arm',
          art:'der',
          pl:'Arme',
          en:'arm',
          ph:'ahrm'
        },
        {
          de:'Bein',
          art:'das',
          pl:'Beine',
          en:'leg',
          ph:'bine'
        },
        {
          de:'Hand',
          art:'die',
          pl:'Hände',
          en:'hand',
          ph:'hahnt'
        },
        {
          de:'Fuß',
          art:'der',
          pl:'Füße',
          en:'foot',
          ph:'fooss'
        },
        {
          de:'Auge',
          art:'das',
          pl:'Augen',
          en:'eye',
          ph:'OW-ge'
        },
        {
          de:'Ohr',
          art:'das',
          pl:'Ohren',
          en:'ear',
          ph:'ohr'
        },
        {
          de:'Mund',
          art:'der',
          pl:'',
          en:'mouth',
          ph:'moont'
        },
        {
          de:'Nase',
          art:'die',
          pl:'Nasen',
          en:'nose',
          ph:'NAH-ze'
        },
        {
          de:'Bauch',
          art:'der',
          pl:'Bäuche',
          en:'belly, stomach',
          ph:'bowkh'
        },
        {
          de:'Rücken',
          art:'der',
          pl:'',
          en:'back',
          ph:'RUE-ken'
        },
        {
          de:'Zahn',
          art:'der',
          pl:'Zähne',
          en:'tooth',
          ph:'tsahn'
        },
        {
          de:'Schmerz',
          art:'der',
          pl:'Schmerzen',
          en:'pain',
          ph:'shmairts'
        },
        {
          de:'Fieber',
          art:'das',
          pl:'',
          en:'fever',
          ph:'FEE-ber'
        },
        {
          de:'Medizin',
          art:'die',
          pl:'',
          en:'medicine',
          ph:'me-dee-TSEEN'
        },
        {
          de:'krank',
          art:'',
          pl:'',
          en:'ill, sick',
          ph:'krahnk'
        },
        {
          de:'gesund',
          art:'',
          pl:'',
          en:'healthy',
          ph:'geh-ZOONT'
        },
        {
          de:'müde',
          art:'',
          pl:'',
          en:'tired',
          ph:'MUE-de'
        }
      ]
    },
    {
      id:'t2',
      title:'Health & the doctor',
      time:'3 min',
      kind:'words',
      vocab:[
        {
          de:'Körper',
          art:'der',
          pl:'Körper',
          en:'body',
          ph:'KOER-per'
        },
        {
          de:'Behandlung',
          art:'die',
          pl:'Behandlungen',
          en:'treatment',
          ph:'beh-HAHNT-lung'
        },
        {
          de:'Untersuchung',
          art:'die',
          pl:'Untersuchungen',
          en:'examination, check-up',
          ph:'oon-ter-ZOO-khung'
        },
        {
          de:'Arzttermin',
          art:'der',
          pl:'Arzttermine',
          en:'doctor\'s appointment',
          ph:'AHRTST-tair-meen'
        },
        {
          de:'Wartezimmer',
          art:'das',
          pl:'Wartezimmer',
          en:'waiting room',
          ph:'VAHR-te-tsim-mer'
        },
        {
          de:'Sprechstunde',
          art:'die',
          pl:'Sprechstunden',
          en:'consultation hours',
          ph:'SHPREKH-shtoon-de'
        },
        {
          de:'Krankheit',
          art:'die',
          pl:'Krankheiten',
          en:'illness',
          ph:'KRAHNK-hite'
        },
        {
          de:'Vitamin',
          art:'das',
          pl:'Vitamine',
          en:'vitamin',
          ph:'vee-tah-MEEN'
        },
        {
          de:'Ruhe',
          art:'die',
          pl:'',
          en:'rest, quiet',
          ph:'ROO-e'
        },
        {
          de:'Schlaf',
          art:'der',
          pl:'',
          en:'sleep',
          ph:'shlahf'
        },
        {
          de:'Gesundheit',
          art:'die',
          pl:'',
          en:'health',
          ph:'geh-ZOONT-hite'
        },
        {
          de:'Patient',
          art:'der',
          pl:'Patienten',
          en:'patient (male)',
          ph:'pah-tsee-ENT'
        },
        {
          de:'Husten',
          art:'der',
          pl:'',
          en:'cough',
          ph:'HOOS-ten'
        },
        {
          de:'Schnupfen',
          art:'der',
          pl:'',
          en:'cold (sniffles)',
          ph:'SHNOOP-fen'
        },
        {
          de:'Kopfschmerzen',
          art:'die',
          pl:'',
          en:'headache',
          ph:'KOPF-shmair-tsen'
        },
        {
          de:'Bauchschmerzen',
          art:'die',
          pl:'',
          en:'stomach ache',
          ph:'BOWKH-shmair-tsen'
        },
        {
          de:'Tablette',
          art:'die',
          pl:'Tabletten',
          en:'pill, tablet',
          ph:'tah-BLET-te'
        },
        {
          de:'Rezept',
          art:'das',
          pl:'Rezepte',
          en:'prescription',
          ph:'ray-TSEPT'
        }
      ]
    },
    {
      id:'t3',
      title:'The imperative — giving instructions',
      time:'3 min',
      kind:'grammar',
      grammar:{
        title:'The imperative — giving instructions',
        plain:'The "imperative" is how you tell someone to do something. For "du" (one friend): take the verb stem — "Trink viel Wasser!" (Drink a lot of water!). For "Sie" (formal): use the Sie-form — "Trinken Sie viel Wasser!"',
        rule:'du-form: Trink! (drink!) · Komm! (come!) · Hör zu! (listen!) · Sie-form: Trinken Sie! · Kommen Sie! · Hören Sie zu!',
        examples:[
          {
            de:'Trink viel Wasser!',
            en:'Drink a lot of water! (to a friend)',
            ph:'tringk feel VAH-ser'
          },
          {
            de:'Trinken Sie viel Wasser!',
            en:'Drink a lot of water! (formal)',
            ph:'TRING-ken zee feel VAH-ser'
          },
          {
            de:'Ruhen Sie sich aus!',
            en:'Rest! (formal)',
            ph:'ROO-en zee zish ows'
          }
        ]
      }
    },
    {
      id:'t4',
      title:'At the doctor',
      time:'3 min',
      kind:'dialogue',
      lines:[
        {
          who:'A',
          de:'Guten Tag, Frau Doktor! Ich habe Kopfschmerzen.',
          en:'Good day, Doctor! I have a headache.',
          ph:'GOO-ten TAHK, frow DOK-tor! ish HAH-be KOPF-shmair-tsen'
        },
        {
          who:'B',
          de:'Seit wann haben Sie Schmerzen?',
          en:'Since when have you had pain?',
          ph:'zite vahn HAH-ben zee SHMAIR-tsen'
        },
        {
          who:'A',
          de:'Seit gestern. Und ich habe auch Fieber.',
          en:'Since yesterday. And I also have a fever.',
          ph:'zite GES-tern. oont ish HAH-be owkh FEE-ber'
        },
        {
          who:'B',
          de:'Sie müssen viel Wasser trinken und sich ausruhen.',
          en:'You must drink a lot of water and rest.',
          ph:'zee MUES-sen feel VAH-ser TRING-ken oont zish OWS-roo-en'
        },
        {
          who:'A',
          de:'Danke, Frau Doktor. Auf Wiedersehen!',
          en:'Thank you, Doctor. Goodbye!',
          ph:'DAHN-ke, frow DOK-tor. owf VEE-der-zay-en'
        },
        {
          who:'B',
          de:'Kommen Sie in drei Tagen wieder.',
          en:'Come back in three days.',
          ph:'KOM-men zee in drai TAH-gen VEE-der'
        }
      ],
      speak:{
        prompt:'Play the patient out loud: "Ich habe Kopfschmerzen. Seit gestern. Und ich habe auch Fieber."',
        model:['Guten Tag, Frau Doktor!', 'Ich habe Bauchschmerzen.', 'Seit heute Morgen.', 'Ich bin sehr müde.']
      }
    },
    {
      id:'t5',
      title:'Quiz: body',
      time:'3 min',
      kind:'quiz',
      questions:[
        {q:'"Ich habe Kopfschmerzen." means...', options:['I have a stomach ache', 'I have a headache', 'I have a fever', 'I have a cold'], answer:1,
         why:'der Kopf = head. Kopfschmerzen = headache. Bauchschmerzen = stomach ache.'},
        {q:'Fill in the imperative: "___ viel Wasser!" (to a friend)', options:['Trinken', 'Trink', 'Trinkt', 'Trinke'], answer:1,
         why:'For "du", use the verb stem: Trink! "Trinken Sie" is the formal form.'},
        {q:'"Seit gestern" means...', options:['until yesterday', 'since yesterday', 'after yesterday', 'before yesterday'], answer:1,
         why:'"seit" = since. Seit gestern = since yesterday.'}
      ]
    },
    {
      id:'t6',
      title:'Quiz: health & doctor',
      time:'2 min',
      kind:'quiz',
      questions:[
        {q:'What is "das Auge"?', options:['the ear', 'the eye', 'the nose', 'the mouth'], answer:1,
         why:'das Auge = the eye. das Ohr = the ear, die Nase = the nose, der Mund = the mouth.'},
        {q:'What does "Ich bin krank" mean?', options:['I am tired', 'I am healthy', 'I am ill', 'I am cold'], answer:2,
         why:'krank = ill. gesund = healthy. müde = tired.'}
      ]
    }
  ],
  next:'Next: Chapter 12 — Travel, Weather & Holiday',
};

CHAPTERS['A1-12'] = {
  id:'A1-12',
  n:12,
  level:'A1',
  title:'Travel, Weather & Holiday',
  time:'17 min',
  concept:'Plan a trip, talk about the weather, and enjoy your holiday.',
  dialogue:[
    {
      who:'A',
      de:'Wohin fährst du im Urlaub?',
      en:'Where are you travelling to on holiday?',
      ph:'vo-HIN FAIRST doo im OOR-lowp'
    },
    {
      who:'B',
      de:'Ich fahre nach Indien. Ich fliege am Montag.',
      en:'I am travelling to India. I fly on Monday.',
      ph:'ish FAH-re nahkh IN-dee-en. ish FLEE-ge ahm MON-tahk'
    },
    {
      who:'A',
      de:'Wie lange bleibst du dort?',
      en:'How long are you staying there?',
      ph:'vee LAHNG-e blaipst doo dort'
    },
    {
      who:'B',
      de:'Zwei Wochen. Ich besuche meine Familie.',
      en:'Two weeks. I am visiting my family.',
      ph:'tsvai VOKH-en. ish beh-ZOO-khe MAI-ne fah-MEE-lee-e'
    },
    {
      who:'A',
      de:'Das ist schön! Ich fahre nach Italien. Ich fahre mit dem Zug.',
      en:'That is nice! I am travelling to Italy. I am going by train.',
      ph:'dahs ist shern! ish FAH-re nahkh ee-TAH-lee-en. ish FAH-re mit daym tsook'
    },
    {
      who:'B',
      de:'Gute Reise!',
      en:'Have a good trip!',
      ph:'GOO-te RAI-ze'
    }
  ],
  vocab:[
    {
      de:'Urlaub',
      art:'der',
      pl:'',
      en:'holiday, vacation',
      ph:'OOR-lowp'
    },
    {
      de:'Reise',
      art:'die',
      pl:'Reisen',
      en:'trip, journey',
      ph:'RAI-ze'
    },
    {
      de:'Zug',
      art:'der',
      pl:'Züge',
      en:'train',
      ph:'tsook'
    },
    {
      de:'Flugzeug',
      art:'das',
      pl:'Flugzeuge',
      en:'airplane',
      ph:'FLOOK-tsoyk'
    },
    {
      de:'Auto',
      art:'das',
      pl:'Autos',
      en:'car',
      ph:'OW-to'
    },
    {
      de:'Bus',
      art:'der',
      pl:'Busse',
      en:'bus',
      ph:'booss'
    },
    {
      de:'Schiff',
      art:'das',
      pl:'Schiffe',
      en:'ship',
      ph:'shif'
    },
    {
      de:'Hotel',
      art:'das',
      pl:'Hotels',
      en:'hotel',
      ph:'ho-TEL'
    },
    {
      de:'Pass',
      art:'der',
      pl:'Pässe',
      en:'passport',
      ph:'pahss'
    },
    {
      de:'Koffer',
      art:'der',
      pl:'Koffer',
      en:'suitcase',
      ph:'KOF-fer'
    },
    {
      de:'Karte',
      art:'die',
      pl:'Karten',
      en:'ticket, card, map',
      ph:'KAHR-te'
    },
    {
      de:'Strand',
      art:'der',
      pl:'Strände',
      en:'beach',
      ph:'shtrahnt'
    },
    {
      de:'Meer',
      art:'das',
      pl:'Meere',
      en:'sea',
      ph:'mair'
    },
    {
      de:'Berg',
      art:'der',
      pl:'Berge',
      en:'mountain',
      ph:'bairk'
    },
    {
      de:'Dorf',
      art:'das',
      pl:'Dörfer',
      en:'village',
      ph:'dorf'
    },
    {
      de:'fahren',
      art:'',
      pl:'',
      en:'to drive, to travel (by vehicle)',
      ph:'FAH-ren'
    },
    {
      de:'fliegen',
      art:'',
      pl:'',
      en:'to fly',
      ph:'FLEE-gen'
    },
    {
      de:'bleiben',
      art:'',
      pl:'',
      en:'to stay',
      ph:'BLAI-ben'
    },
    {
      de:'besuchen',
      art:'',
      pl:'',
      en:'to visit',
      ph:'beh-ZOO-khen'
    },
    {
      de:'packen',
      art:'',
      pl:'',
      en:'to pack',
      ph:'PAH-ken'
    },
    {
      de:'Wetter',
      art:'das',
      pl:'',
      en:'weather',
      ph:'VET-ter'
    },
    {
      de:'Regen',
      art:'der',
      pl:'',
      en:'rain',
      ph:'RAY-gen'
    },
    {
      de:'Sonne',
      art:'die',
      pl:'',
      en:'sun',
      ph:'ZON-ne'
    },
    {
      de:'Schnee',
      art:'der',
      pl:'',
      en:'snow',
      ph:'shnay'
    },
    {
      de:'Wind',
      art:'der',
      pl:'',
      en:'wind',
      ph:'vint'
    },
    {
      de:'kalt',
      art:'',
      pl:'',
      en:'cold',
      ph:'kahlt'
    },
    {
      de:'warm',
      art:'',
      pl:'',
      en:'warm',
      ph:'vahrm'
    },
    {
      de:'heiß',
      art:'',
      pl:'',
      en:'hot',
      ph:'hice'
    },
    {
      de:'Frühling',
      art:'der',
      pl:'',
      en:'spring',
      ph:'FRUE-ling'
    },
    {
      de:'Sommer',
      art:'der',
      pl:'',
      en:'summer',
      ph:'ZOM-mer'
    },
    {
      de:'Herbst',
      art:'der',
      pl:'',
      en:'autumn',
      ph:'hairpst'
    },
    {
      de:'Winter',
      art:'der',
      pl:'',
      en:'winter',
      ph:'VIN-ter'
    },
    {
      de:'Abflug',
      art:'der',
      pl:'Abflüge',
      en:'departure (flight)',
      ph:'AHP-flook'
    },
    {
      de:'Reisepass',
      art:'der',
      pl:'Reisepässe',
      en:'passport',
      ph:'RAI-ze-pahs'
    },
    {
      de:'Visum',
      art:'das',
      pl:'Visa',
      en:'visa',
      ph:'VEE-zoom'
    },
    {
      de:'Zoll',
      art:'der',
      pl:'',
      en:'customs',
      ph:'tsol'
    },
    {
      de:'Grenze',
      art:'die',
      pl:'Grenzen',
      en:'border',
      ph:'GREN-tse'
    },
    {
      de:'Fähre',
      art:'die',
      pl:'Fähren',
      en:'ferry',
      ph:'FAY-re'
    },
    {
      de:'Ferien',
      art:'die',
      pl:'',
      en:'holidays',
      ph:'FAY-ree-en'
    },
    {
      de:'Andenken',
      art:'das',
      pl:'Andenken',
      en:'souvenir',
      ph:'AHN-deng-ken'
    },
    {
      de:'Fahrkarte',
      art:'die',
      pl:'Fahrkarten',
      en:'ticket',
      ph:'FAHR-kahr-te'
    },
    {
      de:'Abfahrt',
      art:'die',
      pl:'Abfahrten',
      en:'departure',
      ph:'AHP-fahrt'
    },
    {
      de:'Ankunft',
      art:'die',
      pl:'Ankünfte',
      en:'arrival',
      ph:'AHN-koonft'
    },
    {
      de:'Flughafen',
      art:'der',
      pl:'Flughäfen',
      en:'airport',
      ph:'FLOOK-hah-fen'
    },
    {
      de:'Gepäck',
      art:'das',
      pl:'',
      en:'luggage',
      ph:'geh-PEK'
    }
  ],
  grammar:{
    title:'nach or in? — travelling to places',
    plain:'"Wohin?" means "where to?" For most countries and cities, use "nach": nach Indien, nach Berlin, nach Italien. For countries with "die" (die Türkei, die Schweiz) use "in": in die Türkei. For "how" you travel, use "mit": mit dem Zug (by train), mit dem Auto (by car). Weather: "Wie ist das Wetter?" — "Es ist sonnig." "Es regnet." (It is raining.) "Es schneit." (It is snowing.)',
    rule:'nach + country/city (no article): nach Indien, nach Berlin · in die Türkei, in die Schweiz · mit dem Zug / mit dem Auto / mit dem Bus',
    examples:[
      {
        de:'Ich fahre nach Indien.',
        en:'I am travelling to India.',
        ph:'ish FAH-re nahkh IN-dee-en'
      },
      {
        de:'Ich fahre in die Türkei.',
        en:'I am travelling to Turkey.',
        ph:'ish FAH-re in dee TUER-kai'
      },
      {
        de:'Ich fahre mit dem Zug.',
        en:'I am going by train.',
        ph:'ish FAH-re mit daym tsook'
      }
    ]
  },
  quiz:[
    {q:'Fill in: "Ich fahre ___ Indien."', options:['in', 'nach', 'zu', 'an'], answer:1,
     why:'Countries without an article take "nach": nach Indien, nach Italien, nach Deutschland.'},
    {q:'Fill in: "Ich fahre ___ Türkei."', options:['nach', 'in die', 'zu', 'an die'], answer:1,
     why:'Die Türkei has "die", so: in die Türkei. Most countries take "nach".'},
    {q:'"Ich fahre mit dem Zug." means...', options:['I drive a train', 'I am going by train', 'I buy a train ticket', 'I wait for the train'], answer:1,
     why:'"mit dem Zug" = by train. "mit" = with/by (transport).'},
    {q:'What does "Gute Reise!" mean?', options:['Good morning!', 'Have a good trip!', 'Welcome back!', 'Safe at home!'], answer:1,
     why:'"Gute Reise!" = Have a good trip! Say it when someone travels.'},
    {q:'What is "der Koffer"?', options:['the ticket', 'the passport', 'the suitcase', 'the map'], answer:2,
     why:'der Koffer = the suitcase. der Pass = the passport, die Karte = the ticket/card.'}
  ],
  speak:{
    prompt:'Plan a trip out loud: "Ich fahre nach ... Ich fliege am ... Ich bleibe ... Wochen."',
    model:[
      'Ich fahre nach Italien.',
      'Ich fliege am Montag.',
      'Ich bleibe zwei Wochen.',
      'Ich besuche meine Familie.'
    ]
  },
  recap:[
    'Travel: der Zug, das Flugzeug, das Auto, der Bus, das Hotel, der Pass, der Koffer.',
    '"nach" + country/city: nach Indien, nach Berlin. "in die Türkei".',
    '"mit dem Zug" = by train. "mit dem Auto" = by car.',
    'Weather: Es ist kalt / warm / heiß. Es regnet. Es schneit.',
    'You finished A1! Take the A1 mock test next.'
  ],
  tip:'Memory tip: you now know about 510 A1 words. Read this chapter\'s dialogue out loud once more — it should feel easy. That is real progress.',
  extra:[
    {
      q:'Say "I am travelling to Italy."',
      a:'Ich fahre nach Italien.'
    },
    {
      q:'Say "I am going by train."',
      a:'Ich fahre mit dem Zug.'
    },
    {
      q:'Say "Have a good trip!"',
      a:'Gute Reise!'
    },
    {
      q:'Ask about the weather.',
      a:'Wie ist das Wetter? — Es ist heute sonnig.'
    }
  ],
  topics:[
    {
      id:'t1',
      title:'Travel words',
      time:'3 min',
      kind:'words',
      vocab:[
        {
          de:'Urlaub',
          art:'der',
          pl:'',
          en:'holiday, vacation',
          ph:'OOR-lowp'
        },
        {
          de:'Reise',
          art:'die',
          pl:'Reisen',
          en:'trip, journey',
          ph:'RAI-ze'
        },
        {
          de:'Zug',
          art:'der',
          pl:'Züge',
          en:'train',
          ph:'tsook'
        },
        {
          de:'Flugzeug',
          art:'das',
          pl:'Flugzeuge',
          en:'airplane',
          ph:'FLOOK-tsoyk'
        },
        {
          de:'Auto',
          art:'das',
          pl:'Autos',
          en:'car',
          ph:'OW-to'
        },
        {
          de:'Bus',
          art:'der',
          pl:'Busse',
          en:'bus',
          ph:'booss'
        },
        {
          de:'Schiff',
          art:'das',
          pl:'Schiffe',
          en:'ship',
          ph:'shif'
        },
        {
          de:'Hotel',
          art:'das',
          pl:'Hotels',
          en:'hotel',
          ph:'ho-TEL'
        },
        {
          de:'Pass',
          art:'der',
          pl:'Pässe',
          en:'passport',
          ph:'pahss'
        },
        {
          de:'Koffer',
          art:'der',
          pl:'Koffer',
          en:'suitcase',
          ph:'KOF-fer'
        },
        {
          de:'Karte',
          art:'die',
          pl:'Karten',
          en:'ticket, card, map',
          ph:'KAHR-te'
        },
        {
          de:'Strand',
          art:'der',
          pl:'Strände',
          en:'beach',
          ph:'shtrahnt'
        },
        {
          de:'Meer',
          art:'das',
          pl:'Meere',
          en:'sea',
          ph:'mair'
        },
        {
          de:'Berg',
          art:'der',
          pl:'Berge',
          en:'mountain',
          ph:'bairk'
        },
        {
          de:'Dorf',
          art:'das',
          pl:'Dörfer',
          en:'village',
          ph:'dorf'
        },
        {
          de:'fahren',
          art:'',
          pl:'',
          en:'to drive, to travel (by vehicle)',
          ph:'FAH-ren'
        },
        {
          de:'fliegen',
          art:'',
          pl:'',
          en:'to fly',
          ph:'FLEE-gen'
        },
        {
          de:'bleiben',
          art:'',
          pl:'',
          en:'to stay',
          ph:'BLAI-ben'
        },
        {
          de:'besuchen',
          art:'',
          pl:'',
          en:'to visit',
          ph:'beh-ZOO-khen'
        },
        {
          de:'packen',
          art:'',
          pl:'',
          en:'to pack',
          ph:'PAH-ken'
        }
      ]
    },
    {
      id:'t2',
      title:'Weather, seasons & holidays',
      time:'3 min',
      kind:'words',
      vocab:[
        {
          de:'Wetter',
          art:'das',
          pl:'',
          en:'weather',
          ph:'VET-ter'
        },
        {
          de:'Regen',
          art:'der',
          pl:'',
          en:'rain',
          ph:'RAY-gen'
        },
        {
          de:'Sonne',
          art:'die',
          pl:'',
          en:'sun',
          ph:'ZON-ne'
        },
        {
          de:'Schnee',
          art:'der',
          pl:'',
          en:'snow',
          ph:'shnay'
        },
        {
          de:'Wind',
          art:'der',
          pl:'',
          en:'wind',
          ph:'vint'
        },
        {
          de:'kalt',
          art:'',
          pl:'',
          en:'cold',
          ph:'kahlt'
        },
        {
          de:'warm',
          art:'',
          pl:'',
          en:'warm',
          ph:'vahrm'
        },
        {
          de:'heiß',
          art:'',
          pl:'',
          en:'hot',
          ph:'hice'
        },
        {
          de:'Frühling',
          art:'der',
          pl:'',
          en:'spring',
          ph:'FRUE-ling'
        },
        {
          de:'Sommer',
          art:'der',
          pl:'',
          en:'summer',
          ph:'ZOM-mer'
        },
        {
          de:'Herbst',
          art:'der',
          pl:'',
          en:'autumn',
          ph:'hairpst'
        },
        {
          de:'Winter',
          art:'der',
          pl:'',
          en:'winter',
          ph:'VIN-ter'
        },
        {
          de:'Abflug',
          art:'der',
          pl:'Abflüge',
          en:'departure (flight)',
          ph:'AHP-flook'
        },
        {
          de:'Reisepass',
          art:'der',
          pl:'Reisepässe',
          en:'passport',
          ph:'RAI-ze-pahs'
        },
        {
          de:'Visum',
          art:'das',
          pl:'Visa',
          en:'visa',
          ph:'VEE-zoom'
        },
        {
          de:'Zoll',
          art:'der',
          pl:'',
          en:'customs',
          ph:'tsol'
        },
        {
          de:'Grenze',
          art:'die',
          pl:'Grenzen',
          en:'border',
          ph:'GREN-tse'
        },
        {
          de:'Fähre',
          art:'die',
          pl:'Fähren',
          en:'ferry',
          ph:'FAY-re'
        },
        {
          de:'Ferien',
          art:'die',
          pl:'',
          en:'holidays',
          ph:'FAY-ree-en'
        },
        {
          de:'Andenken',
          art:'das',
          pl:'Andenken',
          en:'souvenir',
          ph:'AHN-deng-ken'
        },
        {
          de:'Fahrkarte',
          art:'die',
          pl:'Fahrkarten',
          en:'ticket',
          ph:'FAHR-kahr-te'
        },
        {
          de:'Abfahrt',
          art:'die',
          pl:'Abfahrten',
          en:'departure',
          ph:'AHP-fahrt'
        },
        {
          de:'Ankunft',
          art:'die',
          pl:'Ankünfte',
          en:'arrival',
          ph:'AHN-koonft'
        },
        {
          de:'Flughafen',
          art:'der',
          pl:'Flughäfen',
          en:'airport',
          ph:'FLOOK-hah-fen'
        },
        {
          de:'Gepäck',
          art:'das',
          pl:'',
          en:'luggage',
          ph:'geh-PEK'
        }
      ]
    },
    {
      id:'t3',
      title:'nach or in? — travelling to places',
      time:'3 min',
      kind:'grammar',
      grammar:{
        title:'nach or in? — travelling to places',
        plain:'"Wohin?" means "where to?" For most countries and cities, use "nach": nach Indien, nach Berlin, nach Italien. For countries with "die" (die Türkei, die Schweiz) use "in": in die Türkei. For "how" you travel, use "mit": mit dem Zug (by train), mit dem Auto (by car). Weather: "Wie ist das Wetter?" — "Es ist sonnig." "Es regnet." (It is raining.) "Es schneit." (It is snowing.)',
        rule:'nach + country/city (no article): nach Indien, nach Berlin · in die Türkei, in die Schweiz · mit dem Zug / mit dem Auto / mit dem Bus',
        examples:[
          {
            de:'Ich fahre nach Indien.',
            en:'I am travelling to India.',
            ph:'ish FAH-re nahkh IN-dee-en'
          },
          {
            de:'Ich fahre in die Türkei.',
            en:'I am travelling to Turkey.',
            ph:'ish FAH-re in dee TUER-kai'
          },
          {
            de:'Ich fahre mit dem Zug.',
            en:'I am going by train.',
            ph:'ish FAH-re mit daym tsook'
          }
        ]
      }
    },
    {
      id:'t4',
      title:'Planning a trip',
      time:'3 min',
      kind:'dialogue',
      lines:[
        {
          who:'A',
          de:'Wohin fährst du im Urlaub?',
          en:'Where are you travelling to on holiday?',
          ph:'vo-HIN FAIRST doo im OOR-lowp'
        },
        {
          who:'B',
          de:'Ich fahre nach Indien. Ich fliege am Montag.',
          en:'I am travelling to India. I fly on Monday.',
          ph:'ish FAH-re nahkh IN-dee-en. ish FLEE-ge ahm MON-tahk'
        },
        {
          who:'A',
          de:'Wie lange bleibst du dort?',
          en:'How long are you staying there?',
          ph:'vee LAHNG-e blaipst doo dort'
        },
        {
          who:'B',
          de:'Zwei Wochen. Ich besuche meine Familie.',
          en:'Two weeks. I am visiting my family.',
          ph:'tsvai VOKH-en. ish beh-ZOO-khe MAI-ne fah-MEE-lee-e'
        },
        {
          who:'A',
          de:'Das ist schön! Ich fahre nach Italien. Ich fahre mit dem Zug.',
          en:'That is nice! I am travelling to Italy. I am going by train.',
          ph:'dahs ist shern! ish FAH-re nahkh ee-TAH-lee-en. ish FAH-re mit daym tsook'
        },
        {
          who:'B',
          de:'Gute Reise!',
          en:'Have a good trip!',
          ph:'GOO-te RAI-ze'
        }
      ],
      speak:{
        prompt:'Plan a trip out loud: "Ich fahre nach ... Ich fliege am ... Ich bleibe ... Wochen."',
        model:[
          'Ich fahre nach Italien.',
          'Ich fliege am Montag.',
          'Ich bleibe zwei Wochen.',
          'Ich besuche meine Familie.'
        ]
      }
    },
    {
      id:'t5',
      title:'Quiz: travel',
      time:'3 min',
      kind:'quiz',
      questions:[
        {q:'Fill in: "Ich fahre ___ Indien."', options:['in', 'nach', 'zu', 'an'], answer:1,
         why:'Countries without an article take "nach": nach Indien, nach Italien, nach Deutschland.'},
        {q:'Fill in: "Ich fahre ___ Türkei."', options:['nach', 'in die', 'zu', 'an die'], answer:1,
         why:'Die Türkei has "die", so: in die Türkei. Most countries take "nach".'},
        {q:'"Ich fahre mit dem Zug." means...', options:['I drive a train', 'I am going by train', 'I buy a train ticket', 'I wait for the train'], answer:1,
         why:'"mit dem Zug" = by train. "mit" = with/by (transport).'}
      ]
    },
    {
      id:'t6',
      title:'Quiz: weather & holidays',
      time:'2 min',
      kind:'quiz',
      questions:[
        {q:'What does "Gute Reise!" mean?', options:['Good morning!', 'Have a good trip!', 'Welcome back!', 'Safe at home!'], answer:1,
         why:'"Gute Reise!" = Have a good trip! Say it when someone travels.'},
        {q:'What is "der Koffer"?', options:['the ticket', 'the passport', 'the suitcase', 'the map'], answer:2,
         why:'der Koffer = the suitcase. der Pass = the passport, die Karte = the ticket/card.'}
      ]
    }
  ],
  next:'Next: Take the A1 Mock Test',
};

/* A1 mock test — Goethe-style, practice only (not an official certificate) */
const MOCK_A1 = {
  title:'A1 Mock Test', sub:'Goethe-style practice test · 20 questions · 20 minutes · Pass: 12/20 (60%)',
  time:20*60,
  questions:[
    {q:'Which letter sounds like "Y" in German?', options:['J', 'W', 'V', 'Z'], answer:0,
     why:'J sounds like Y: ja = yes.'},
    {q:'What is "einundzwanzig"?', options:['12', '21', '22', '20'], answer:1,
     why:'einundzwanzig = one-and-twenty = 21.'},
    {q:'"Wie heißt du?" means...', options:['How are you?', 'What is your name?', 'Where do you live?', 'How old are you?'], answer:1,
     why:'"Wie heißt du?" = What is your name? Answer: "Ich heiße ..."'},
    {q:'Fill in: "Wir ___ Deutsch."', options:['lerne', 'lernst', 'lernt', 'lernen'], answer:3,
     why:'"wir" takes -en: wir lernen = we learn.'},
    {q:'What does "die Sprache" mean?', options:['the country', 'the language', 'the school', 'the city'], answer:1,
     why:'die Sprache = the language. Deutsch, Englisch and Hindi are Sprachen.'},
    {q:'What is the article of "Straße"?', options:['der', 'die', 'das', 'den'], answer:1,
     why:'die Straße — Straße is feminine. Learn it as one word: "die Straße".'},
    {q:'Fill in: "Hier ist ___ Park."', options:['kein', 'keine', 'ein', 'einen'], answer:0,
     why:'Park is masculine (der Park), so "kein Park". "keine" is for feminine nouns.'},
    {q:'"Ich möchte einen Kaffee." — "einen" is used because...', options:['Kaffee is feminine', 'Kaffee is masculine and accusative', 'Kaffee is plural', 'Kaffee is neuter'], answer:1,
     why:'Kaffee is masculine (der Kaffee) and it is the thing you want, so ein → einen.'},
    {q:'What is "Es ist halb acht"?', options:['8:00', '7:30', '8:30', '7:00'], answer:1,
     why:'"halb acht" = half past seven. German counts forward to the next hour.'},
    {q:'Fill in: "Ich stehe um sechs Uhr ___." (aufstehen)', options:['auf', 'aufstehe', 'aufstehen', 'aufsteht'], answer:0,
     why:'aufstehen is separable: the prefix "auf" goes to the end. Ich stehe ... auf.'},
    {q:'"Ich kann gut schwimmen." means...', options:['I want to swim', 'I must swim', 'I can swim well', 'I like swimming'], answer:2,
     why:'können = can. "Ich kann gut schwimmen" = I can swim well.'},
    {q:'Fill in: "Das ist ___ Freundin."', options:['mein', 'meine', 'meiner', 'meinen'], answer:1,
     why:'Freundin is feminine (die Freundin), so "meine".'},
    {q:'What does "anrufen" mean?', options:['to write', 'to invite', 'to phone', 'to visit'], answer:2,
     why:'anrufen = to phone. It is separable: "Ich rufe dich an."'},
    {q:'Fill in: "Der Tisch steht ___ Wohnzimmer."', options:['in', 'im', 'auf', 'an'], answer:1,
     why:'"im" = in dem. Der Tisch steht im Wohnzimmer = The table is in the living room.'},
    {q:'"Was bist du von Beruf?" means...', options:['Where do you work?', 'What is your job?', 'When do you work?', 'Do you like work?'], answer:1,
     why:'"von Beruf" = by profession. "Was bist du von Beruf?" = What is your job?'},
    {q:'Fill in: "Ich ___ am Samstag arbeiten."', options:['muss', 'musst', 'müssen', 'müsst'], answer:0,
     why:'"ich" takes "muss". Ich muss = I must.'},
    {q:'What is the comparative of "gut"?', options:['guter', 'besser', 'best', 'mehr gut'], answer:1,
     why:'gut is irregular: gut → besser → am besten.'},
    {q:'"Trinken Sie viel Wasser!" is...', options:['a question', 'an imperative (formal)', 'a wish', 'a statement'], answer:1,
     why:'"Trinken Sie ..." is the formal imperative: a polite instruction.'},
    {q:'What is "der Kopf"?', options:['the arm', 'the head', 'the leg', 'the hand'], answer:1,
     why:'der Kopf = the head. Kopfschmerzen = headache.'},
    {q:'Fill in: "Ich fahre ___ Italien."', options:['in', 'nach', 'zu', 'an'], answer:1,
     why:'Countries without an article take "nach": nach Indien, nach Italien, nach Deutschland.'}
  ],
};

/* ================= A2 ================= */

const MOCK_A2 = {
  title:'A2 Mock Test',
  time:1200,
  questions:[
    {q:'Fill in: "Ich habe Deutsch ___."', options:['gelernt', 'lernen', 'lernte', 'gelernen'], answer:0,
     why:'Perfekt: haben + Partizip II. lernen → gelernt.'},
    {q:'What is the Partizip II of "essen"?', options:['gegessen', 'geessen', 'essend', 'gegesset'], answer:0,
     why:'essen → gegessen. "Ich habe Pizza gegessen."'},
    {q:'Fill in: "___ schmeckt die Suppe."', options:['Ich', 'Mir', 'Mich', 'Mein'], answer:1,
     why:'Dative: "Mir schmeckt die Suppe." — to me.'},
    {q:'Fill in: "Ich möchte mit ___ Auto fahren."', options:['der', 'den', 'dem', 'das'], answer:2,
     why:'"mit" always takes the dative: mit dem Auto.'},
    {q:'Fill in: "Ich ___ in Italien."', options:['bin', 'war', 'hatte', 'habe'], answer:1,
     why:'Stories use "war": "Ich war in Italien."'},
    {q:'What is the past of "haben" for "wir"?', options:['wir haben', 'wir hatten', 'wir waren', 'wir haben gehabt'], answer:1,
     why:'haben → hatten: "Wir hatten ein schönes Hotel."'},
    {q:'What is the superlative of "billig"?', options:['billiger', 'am billigsten', 'billigster', 'mehr billig'], answer:1,
     why:'Superlative: am billigsten — "Das ist die billigste Jacke."'},
    {q:'Fill in: "Ich möchte ein ___ Kleid." (red)', options:['rote', 'rotes', 'roter', 'rot'], answer:1,
     why:'"ein" + neuter noun takes -es: ein rotes Kleid.'},
    {q:'Fill in: "Das Bild hängt ___ Wand."', options:['an der', 'an die', 'an dem', 'in der'], answer:0,
     why:'"Wo?" → dative: an der Wand.'},
    {q:'Fill in: "Ich hänge das Bild ___ Wand."', options:['an der', 'an die', 'an dem', 'in der'], answer:1,
     why:'"Wohin?" → accusative: an die Wand.'},
    {q:'Fill in: "Ich ___ letzte Nacht nicht schlafen." (could)', options:['kann', 'konnte', 'können', 'gekonnt'], answer:1,
     why:'können → konnte. "Ich konnte nicht schlafen."'},
    {q:'Fill in: "Ich fühle ___ nicht gut."', options:['mich', 'dich', 'sich', 'mir'], answer:0,
     why:'Reflexive for "ich" is "mich": Ich fühle mich nicht gut.'},
    {q:'Fill in: "Ich lerne Deutsch, ___ ich in Deutschland arbeiten will."', options:['dass', 'weil', 'wenn', 'als'], answer:1,
     why:'"weil" = because. The verb "will" goes to the end.'},
    {q:'Fill in: "Ich weiß, ___ du Deutsch lernst."', options:['weil', 'dass', 'wenn', 'als'], answer:1,
     why:'"dass" = that. "Ich weiß, dass du Deutsch lernst."'},
    {q:'Fill in: "Ich habe Lust, Fußball ___ spielen."', options:['zu', 'nach', 'um', 'mit'], answer:0,
     why:'"Lust haben" takes "zu" + infinitive: Lust zu spielen.'},
    {q:'Fill in: "Ich bin nach Berlin ___."', options:['gefahren', 'gefahr', 'gefahren ist', 'fahren'], answer:0,
     why:'Movement → "sein" + Partizip II: Ich bin gefahren.'},
    {q:'What is the Partizip II of "ankommen"?', options:['angekommen', 'geankommen', 'ankommt', 'angekomm'], answer:0,
     why:'Separable verbs put "ge-" in the middle: an-ge-kommen.'},
    {q:'Fill in: "Ich lese die Nachrichten ___ Internet."', options:['in der', 'im', 'am', 'auf dem'], answer:1,
     why:'"im Internet" — learn it as a fixed phrase.'},
    {q:'Fill in: "___ Woche habe ich Geburtstag gefeiert."', options:['Nächste', 'Letzte', 'Diese', 'Jede'], answer:1,
     why:'letzte Woche = last week. nächste Woche = next week.'},
    {q:'Fill in: "___ ich klein war, wohnte ich in einem Dorf."', options:['Wenn', 'Als', 'Weil', 'Dass'], answer:1,
     why:'"als" = when, one past event: "Als ich klein war ..."'}
  ]
};

CHAPTERS['A2-1'] = {
  id:'A2-1',
  n:1,
  level:'A2',
  title:'Family & My Weekend',
  time:'17 min',
  concept:'Talk about the past: what you did last weekend.',
  dialogue:[
    {
      who:'A',
      de:'Was hast du am Wochenende gemacht?',
      en:'What did you do at the weekend?',
      ph:'vahs hahst doo ahm VOKH-en-en-de geh-MAHKHT'
    },
    {
      who:'B',
      de:'Ich habe meine Familie besucht. Wir haben zusammen gegessen.',
      en:'I visited my family. We ate together.',
      ph:'ish HAH-be MAI-ne fah-MEE-lee-e beh-ZOOKHT. veer HAH-ben tsoo-ZAH-men geh-GES-sen'
    },
    {
      who:'A',
      de:'Was habt ihr gegessen?',
      en:'What did you eat?',
      ph:'vahs hahpt eer geh-GES-sen'
    },
    {
      who:'B',
      de:'Wir haben Pizza gegessen und einen Film gesehen.',
      en:'We ate pizza and watched a film.',
      ph:'veer HAH-ben PEET-sah geh-GES-sen oont AI-nen film geh-ZAY-en'
    },
    {
      who:'A',
      de:'Das klingt gut! Ich habe zu Hause gearbeitet.',
      en:'That sounds good! I worked at home.',
      ph:'dahs klingt goot! ish HAH-be tsoo HOW-ze geh-AHR-bai-tet'
    },
    {
      who:'B',
      de:'Nächstes Wochenende gehen wir zusammen ins Kino.',
      en:'Next weekend we go to the cinema together.',
      ph:'NEKHS-tes VOKH-en-en-de GAY-en veer tsoo-ZAH-men ins KEE-no'
    }
  ],
  vocab:[
    {
      de:'Vater',
      art:'der',
      pl:'Väter',
      en:'father',
      ph:'FAH-ter'
    },
    {
      de:'Mutter',
      art:'die',
      pl:'Mütter',
      en:'mother',
      ph:'MOOT-ter'
    },
    {
      de:'Bruder',
      art:'der',
      pl:'Brüder',
      en:'brother',
      ph:'BROO-der'
    },
    {
      de:'Schwester',
      art:'die',
      pl:'Schwestern',
      en:'sister',
      ph:'SHVES-ter'
    },
    {
      de:'Sohn',
      art:'der',
      pl:'Söhne',
      en:'son',
      ph:'zohn'
    },
    {
      de:'Tochter',
      art:'die',
      pl:'Töchter',
      en:'daughter',
      ph:'TOKH-ter'
    },
    {
      de:'Großvater',
      art:'der',
      pl:'Großväter',
      en:'grandfather',
      ph:'GROHSS-fah-ter'
    },
    {
      de:'Großmutter',
      art:'die',
      pl:'Großmütter',
      en:'grandmother',
      ph:'GROHSS-moot-ter'
    },
    {
      de:'Wochenende',
      art:'das',
      pl:'Wochenenden',
      en:'weekend',
      ph:'VOKH-en-en-de'
    },
    {
      de:'gemacht',
      art:'',
      pl:'',
      en:'done (past of machen)',
      ph:'geh-MAHKHT'
    },
    {
      de:'besucht',
      art:'',
      pl:'',
      en:'visited (past of besuchen)',
      ph:'beh-ZOOKHT'
    },
    {
      de:'gegessen',
      art:'',
      pl:'',
      en:'eaten (past of essen)',
      ph:'geh-GES-sen'
    },
    {
      de:'gesehen',
      art:'',
      pl:'',
      en:'seen (past of sehen)',
      ph:'geh-ZAY-en'
    },
    {
      de:'gearbeitet',
      art:'',
      pl:'',
      en:'worked (past of arbeiten)',
      ph:'geh-AHR-bai-tet'
    },
    {
      de:'gekocht',
      art:'',
      pl:'',
      en:'cooked (past of kochen)',
      ph:'geh-KOKHT'
    },
    {
      de:'gespielt',
      art:'',
      pl:'',
      en:'played (past of spielen)',
      ph:'geh-SHPEELT'
    },
    {
      de:'gestern',
      art:'',
      pl:'',
      en:'yesterday',
      ph:'GES-tern'
    },
    {
      de:'zu Hause',
      art:'',
      pl:'',
      en:'at home',
      ph:'tsoo HOW-ze'
    },
    {
      de:'Onkel',
      art:'der',
      pl:'Onkel',
      en:'uncle',
      ph:'ON-kel'
    },
    {
      de:'Tante',
      art:'die',
      pl:'Tanten',
      en:'aunt',
      ph:'TAHN-te'
    },
    {
      de:'Cousin',
      art:'der',
      pl:'Cousins',
      en:'cousin (male)',
      ph:'koo-ZAN'
    },
    {
      de:'Cousine',
      art:'die',
      pl:'Cousinen',
      en:'cousin (female)',
      ph:'koo-ZEE-ne'
    },
    {
      de:'Baby',
      art:'das',
      pl:'Babys',
      en:'baby',
      ph:'BAY-bee'
    },
    {
      de:'Familie',
      art:'die',
      pl:'Familien',
      en:'family',
      ph:'fah-MEE-lee-e'
    },
    {
      de:'heiraten',
      art:'',
      pl:'',
      en:'to marry, to get married',
      ph:'HAI-rah-ten'
    },
    {
      de:'geboren',
      art:'',
      pl:'',
      en:'born',
      ph:'ge-BOH-ren'
    },
    {
      de:'eingeladen',
      art:'',
      pl:'',
      en:'invited (past of einladen)',
      ph:'INE-ge-lah-den'
    },
    {
      de:'Party',
      art:'die',
      pl:'Partys',
      en:'party',
      ph:'PAHR-tee'
    },
    {
      de:'Geschenk',
      art:'das',
      pl:'Geschenke',
      en:'gift, present',
      ph:'ge-SHENK'
    },
    {
      de:'grillen',
      art:'',
      pl:'',
      en:'to barbecue, to grill',
      ph:'GRIL-len'
    },
    {
      de:'spazieren',
      art:'',
      pl:'',
      en:'to go for a walk',
      ph:'shpah-TSEE-ren'
    },
    {
      de:'fernsehen',
      art:'',
      pl:'',
      en:'to watch TV',
      ph:'FAIRN-zay-en'
    },
    {
      de:'aufstehen',
      art:'',
      pl:'',
      en:'to get up',
      ph:'OWF-shtay-en'
    },
    {
      de:'schlafen',
      art:'',
      pl:'',
      en:'to sleep',
      ph:'SHLAH-fen'
    },
    {
      de:'lesen',
      art:'',
      pl:'',
      en:'to read',
      ph:'LAY-zen'
    },
    {
      de:'backen',
      art:'',
      pl:'',
      en:'to bake',
      ph:'BAH-ken'
    },
    {
      de:'putzen',
      art:'',
      pl:'',
      en:'to clean',
      ph:'POOT-sen'
    },
    {
      de:'einkaufen',
      art:'',
      pl:'',
      en:'to go shopping',
      ph:'INE-kow-fen'
    },
    {
      de:'helfen',
      art:'',
      pl:'',
      en:'to help',
      ph:'HEL-fen'
    },
    {
      de:'gelernt',
      art:'',
      pl:'',
      en:'learned (past of lernen)',
      ph:'ge-LAIRNT'
    }
  ],
  grammar:{
    title:'Perfekt — talking about the past',
    plain:'To talk about the past, German uses the Perfekt: "haben" + a past form called "Partizip II". For regular verbs: ge- + stem + -t → gelernt, gearbeitet, gekocht. The Partizip II goes to the END of the sentence.',
    rule:'Ich habe gelernt. Du hast gelernt. Er hat gelernt. Wir haben gelernt. · Some verbs have no "ge-": besuchen → besucht, fotografieren → fotografiert.',
    examples:[
      {
        de:'Ich habe gestern viel gelernt.',
        en:'I learned a lot yesterday.',
        ph:'ish HAH-be GES-tern feel geh-LERNT'
      },
      {
        de:'Wir haben Pizza gegessen.',
        en:'We ate pizza.',
        ph:'veer HAH-ben PEET-sah geh-GES-sen'
      },
      {
        de:'Ich habe meine Familie besucht.',
        en:'I visited my family.',
        ph:'ish HAH-be MAI-ne fah-MEE-lee-e beh-ZOOKHT'
      }
    ]
  },
  quiz:[
    {q:'Fill in: "Ich habe Deutsch ___."', options:['gelernt', 'lernen', 'lernte', 'lernt'], answer:0,
     why:'Perfekt = haben + Partizip II. lernen → gelernt: "Ich habe Deutsch gelernt."'},
    {q:'Fill in: "Ich habe einen Film ___."', options:['sehen', 'gesehen', 'geseht', 'sehe'], answer:1,
     why:'sehen → gesehen. "Ich habe einen Film gesehen" = I watched a film.'},
    {q:'What does "Was hast du gemacht?" mean?', options:['What are you doing?', 'What did you do?', 'What will you do?', 'What do you make?'], answer:1,
     why:'"gemacht" is the past of "machen". "Was hast du gemacht?" = What did you do?'},
    {q:'What is the Partizip II of "besuchen"?', options:['besucht', 'gebesucht', 'besuchen', 'besuchte'], answer:0,
     why:'Verbs with "be-" have NO "ge-": besuchen → besucht.'},
    {q:'Fill in: "Wir haben zusammen ___."', options:['essen', 'gegessen', 'geessen', 'isst'], answer:1,
     why:'essen → gegessen. "Wir haben zusammen gegessen" = We ate together.'}
  ],
  speak:{
    prompt:'Tell about your weekend out loud in 3 sentences: "Am Wochenende habe ich ... Ich habe ... gegessen/gespielt."',
    model:[
      'Am Wochenende habe ich meine Familie besucht.',
      'Wir haben zusammen gegessen.',
      'Ich habe einen Film gesehen.'
    ]
  },
  recap:[
    'Perfekt = haben + Partizip II (at the END).',
    'Regular: ge- + stem + -t → gelernt, gearbeitet, gekocht.',
    'No "ge-" for be-/ver-/er- verbs: besucht, verkauft, erzählt.',
    'Family: der Vater, die Mutter, der Bruder, die Schwester.'
  ],
  tip:'Memory tip: learn the Partizip II WITH the verb — "lernen, gelernt", "essen, gegessen". Always as a pair.',
  extra:[
    {
      q:'Say "I learned a lot yesterday."',
      a:'Ich habe gestern viel gelernt.'
    },
    {
      q:'Say "We watched a film."',
      a:'Wir haben einen Film gesehen.'
    },
    {
      q:'What is the Partizip II of "kochen"?',
      a:'gekocht — "Ich habe gekocht."'
    }
  ],
  topics:[
    {
      id:'t1',
      title:'Family words',
      time:'3 min',
      kind:'words',
      vocab:[
        {
          de:'Vater',
          art:'der',
          pl:'Väter',
          en:'father',
          ph:'FAH-ter'
        },
        {
          de:'Mutter',
          art:'die',
          pl:'Mütter',
          en:'mother',
          ph:'MOOT-ter'
        },
        {
          de:'Bruder',
          art:'der',
          pl:'Brüder',
          en:'brother',
          ph:'BROO-der'
        },
        {
          de:'Schwester',
          art:'die',
          pl:'Schwestern',
          en:'sister',
          ph:'SHVES-ter'
        },
        {
          de:'Sohn',
          art:'der',
          pl:'Söhne',
          en:'son',
          ph:'zohn'
        },
        {
          de:'Tochter',
          art:'die',
          pl:'Töchter',
          en:'daughter',
          ph:'TOKH-ter'
        },
        {
          de:'Großvater',
          art:'der',
          pl:'Großväter',
          en:'grandfather',
          ph:'GROHSS-fah-ter'
        },
        {
          de:'Großmutter',
          art:'die',
          pl:'Großmütter',
          en:'grandmother',
          ph:'GROHSS-moot-ter'
        },
        {
          de:'Wochenende',
          art:'das',
          pl:'Wochenenden',
          en:'weekend',
          ph:'VOKH-en-en-de'
        },
        {
          de:'gemacht',
          art:'',
          pl:'',
          en:'done (past of machen)',
          ph:'geh-MAHKHT'
        },
        {
          de:'besucht',
          art:'',
          pl:'',
          en:'visited (past of besuchen)',
          ph:'beh-ZOOKHT'
        },
        {
          de:'gegessen',
          art:'',
          pl:'',
          en:'eaten (past of essen)',
          ph:'geh-GES-sen'
        },
        {
          de:'gesehen',
          art:'',
          pl:'',
          en:'seen (past of sehen)',
          ph:'geh-ZAY-en'
        },
        {
          de:'gearbeitet',
          art:'',
          pl:'',
          en:'worked (past of arbeiten)',
          ph:'geh-AHR-bai-tet'
        },
        {
          de:'gekocht',
          art:'',
          pl:'',
          en:'cooked (past of kochen)',
          ph:'geh-KOKHT'
        },
        {
          de:'gespielt',
          art:'',
          pl:'',
          en:'played (past of spielen)',
          ph:'geh-SHPEELT'
        },
        {
          de:'gestern',
          art:'',
          pl:'',
          en:'yesterday',
          ph:'GES-tern'
        },
        {
          de:'zu Hause',
          art:'',
          pl:'',
          en:'at home',
          ph:'tsoo HOW-ze'
        },
        {
          de:'Onkel',
          art:'der',
          pl:'Onkel',
          en:'uncle',
          ph:'ON-kel'
        },
        {
          de:'Tante',
          art:'die',
          pl:'Tanten',
          en:'aunt',
          ph:'TAHN-te'
        }
      ]
    },
    {
      id:'t2',
      title:'Family & weekend words',
      time:'3 min',
      kind:'words',
      vocab:[
        {
          de:'Cousin',
          art:'der',
          pl:'Cousins',
          en:'cousin (male)',
          ph:'koo-ZAN'
        },
        {
          de:'Cousine',
          art:'die',
          pl:'Cousinen',
          en:'cousin (female)',
          ph:'koo-ZEE-ne'
        },
        {
          de:'Baby',
          art:'das',
          pl:'Babys',
          en:'baby',
          ph:'BAY-bee'
        },
        {
          de:'Familie',
          art:'die',
          pl:'Familien',
          en:'family',
          ph:'fah-MEE-lee-e'
        },
        {
          de:'heiraten',
          art:'',
          pl:'',
          en:'to marry, to get married',
          ph:'HAI-rah-ten'
        },
        {
          de:'geboren',
          art:'',
          pl:'',
          en:'born',
          ph:'ge-BOH-ren'
        },
        {
          de:'eingeladen',
          art:'',
          pl:'',
          en:'invited (past of einladen)',
          ph:'INE-ge-lah-den'
        },
        {
          de:'Party',
          art:'die',
          pl:'Partys',
          en:'party',
          ph:'PAHR-tee'
        },
        {
          de:'Geschenk',
          art:'das',
          pl:'Geschenke',
          en:'gift, present',
          ph:'ge-SHENK'
        },
        {
          de:'grillen',
          art:'',
          pl:'',
          en:'to barbecue, to grill',
          ph:'GRIL-len'
        },
        {
          de:'spazieren',
          art:'',
          pl:'',
          en:'to go for a walk',
          ph:'shpah-TSEE-ren'
        },
        {
          de:'fernsehen',
          art:'',
          pl:'',
          en:'to watch TV',
          ph:'FAIRN-zay-en'
        },
        {
          de:'aufstehen',
          art:'',
          pl:'',
          en:'to get up',
          ph:'OWF-shtay-en'
        },
        {
          de:'schlafen',
          art:'',
          pl:'',
          en:'to sleep',
          ph:'SHLAH-fen'
        },
        {
          de:'lesen',
          art:'',
          pl:'',
          en:'to read',
          ph:'LAY-zen'
        },
        {
          de:'backen',
          art:'',
          pl:'',
          en:'to bake',
          ph:'BAH-ken'
        },
        {
          de:'putzen',
          art:'',
          pl:'',
          en:'to clean',
          ph:'POOT-sen'
        },
        {
          de:'einkaufen',
          art:'',
          pl:'',
          en:'to go shopping',
          ph:'INE-kow-fen'
        },
        {
          de:'helfen',
          art:'',
          pl:'',
          en:'to help',
          ph:'HEL-fen'
        },
        {
          de:'gelernt',
          art:'',
          pl:'',
          en:'learned (past of lernen)',
          ph:'ge-LAIRNT'
        }
      ]
    },
    {
      id:'t3',
      title:'Dialogue: What did you do?',
      time:'3 min',
      kind:'dialogue',
      lines:[
        {
          who:'A',
          de:'Was hast du am Wochenende gemacht?',
          en:'What did you do at the weekend?',
          ph:'vahs hahst doo ahm VOKH-en-en-de geh-MAHKHT'
        },
        {
          who:'B',
          de:'Ich habe meine Familie besucht. Wir haben zusammen gegessen.',
          en:'I visited my family. We ate together.',
          ph:'ish HAH-be MAI-ne fah-MEE-lee-e beh-ZOOKHT. veer HAH-ben tsoo-ZAH-men geh-GES-sen'
        },
        {
          who:'A',
          de:'Was habt ihr gegessen?',
          en:'What did you eat?',
          ph:'vahs hahpt eer geh-GES-sen'
        },
        {
          who:'B',
          de:'Wir haben Pizza gegessen und einen Film gesehen.',
          en:'We ate pizza and watched a film.',
          ph:'veer HAH-ben PEET-sah geh-GES-sen oont AI-nen film geh-ZAY-en'
        },
        {
          who:'A',
          de:'Das klingt gut! Ich habe zu Hause gearbeitet.',
          en:'That sounds good! I worked at home.',
          ph:'dahs klingt goot! ish HAH-be tsoo HOW-ze geh-AHR-bai-tet'
        },
        {
          who:'B',
          de:'Nächstes Wochenende gehen wir zusammen ins Kino.',
          en:'Next weekend we go to the cinema together.',
          ph:'NEKHS-tes VOKH-en-en-de GAY-en veer tsoo-ZAH-men ins KEE-no'
        }
      ],
      speak:{
        prompt:'Tell about your weekend out loud in 3 sentences: "Am Wochenende habe ich ... Ich habe ... gegessen/gespielt."',
        model:[
          'Am Wochenende habe ich meine Familie besucht.',
          'Wir haben zusammen gegessen.',
          'Ich habe einen Film gesehen.'
        ]
      }
    },
    {
      id:'t4',
      title:'Grammar: Perfekt with "haben"',
      time:'3 min',
      kind:'grammar',
      grammar:{
        title:'Perfekt — talking about the past',
        plain:'To talk about the past, German uses the Perfekt: "haben" + a past form called "Partizip II". For regular verbs: ge- + stem + -t → gelernt, gearbeitet, gekocht. The Partizip II goes to the END of the sentence.',
        rule:'Ich habe gelernt. Du hast gelernt. Er hat gelernt. Wir haben gelernt. · Some verbs have no "ge-": besuchen → besucht, fotografieren → fotografiert.',
        examples:[
          {
            de:'Ich habe gestern viel gelernt.',
            en:'I learned a lot yesterday.',
            ph:'ish HAH-be GES-tern feel geh-LERNT'
          },
          {
            de:'Wir haben Pizza gegessen.',
            en:'We ate pizza.',
            ph:'veer HAH-ben PEET-sah geh-GES-sen'
          },
          {
            de:'Ich habe meine Familie besucht.',
            en:'I visited my family.',
            ph:'ish HAH-be MAI-ne fah-MEE-lee-e beh-ZOOKHT'
          }
        ]
      }
    },
    {
      id:'t5',
      title:'Quiz: Perfekt',
      time:'3 min',
      kind:'quiz',
      questions:[
        {q:'Fill in: "Ich habe Deutsch ___."', options:['gelernt', 'lernen', 'lernte', 'lernt'], answer:0,
         why:'Perfekt = haben + Partizip II. lernen → gelernt: "Ich habe Deutsch gelernt."'},
        {q:'Fill in: "Ich habe einen Film ___."', options:['sehen', 'gesehen', 'geseht', 'sehe'], answer:1,
         why:'sehen → gesehen. "Ich habe einen Film gesehen" = I watched a film.'},
        {q:'What does "Was hast du gemacht?" mean?', options:['What are you doing?', 'What did you do?', 'What will you do?', 'What do you make?'], answer:1,
         why:'"gemacht" is the past of "machen". "Was hast du gemacht?" = What did you do?'}
      ]
    },
    {
      id:'t6',
      title:'Quiz: family & weekend',
      time:'2 min',
      kind:'quiz',
      questions:[
        {q:'What is the Partizip II of "besuchen"?', options:['besucht', 'gebesucht', 'besuchen', 'besuchte'], answer:0,
         why:'Verbs with "be-" have NO "ge-": besuchen → besucht.'},
        {q:'Fill in: "Wir haben zusammen ___."', options:['essen', 'gegessen', 'geessen', 'isst'], answer:1,
         why:'essen → gegessen. "Wir haben zusammen gegessen" = We ate together.'}
      ]
    }
  ],
  next:'Next: Chapter 2 — In the Restaurant',
};

CHAPTERS['A2-2'] = {
  id:'A2-2',
  n:2,
  level:'A2',
  title:'In the Restaurant',
  time:'17 min',
  concept:'Order food, pay the bill, and use the dative case.',
  dialogue:[
    {
      who:'A',
      de:'Guten Abend! Einen Tisch für zwei Personen, bitte.',
      en:'Good evening! A table for two people, please.',
      ph:'GOO-ten AH-bent! AI-nen tish fuer tsvai pair-ZOH-nen, BIT-te'
    },
    {
      who:'B',
      de:'Gern. Hier ist die Speisekarte.',
      en:'With pleasure. Here is the menu.',
      ph:'gairn. heer ist dee SHPY-ze-kahr-te'
    },
    {
      who:'A',
      de:'Ich möchte das Schnitzel. Und du?',
      en:'I would like the schnitzel. And you?',
      ph:'ish MERKH-te dahs SHNIT-sel. oont doo'
    },
    {
      who:'B',
      de:'Ich nehme die Suppe. Mir schmeckt die Suppe sehr gut.',
      en:'I will take the soup. The soup tastes very good to me.',
      ph:'ish NAY-me dee ZUP-pe. meer shmekt dee ZUP-pe zair goot'
    },
    {
      who:'A',
      de:'Die Rechnung, bitte!',
      en:'The bill, please!',
      ph:'dee REKH-nung, BIT-te'
    },
    {
      who:'B',
      de:'Das macht 32 Euro. Kann ich mit Karte zahlen?',
      en:'That is 32 euros. Can I pay by card?',
      ph:'dahs mahkht TSVAI-oont-DRAI-sish OY-ro. kahn ish mit KAHR-te TSAH-len'
    }
  ],
  vocab:[
    {
      de:'Speisekarte',
      art:'die',
      pl:'Speisekarten',
      en:'menu',
      ph:'SHPY-ze-kahr-te'
    },
    {
      de:'Schnitzel',
      art:'das',
      pl:'Schnitzel',
      en:'schnitzel (breaded meat)',
      ph:'SHNIT-sel'
    },
    {
      de:'Suppe',
      art:'die',
      pl:'Suppen',
      en:'soup',
      ph:'ZUP-pe'
    },
    {
      de:'Rechnung',
      art:'die',
      pl:'Rechnungen',
      en:'bill',
      ph:'REKH-nung'
    },
    {
      de:'Karte',
      art:'die',
      pl:'Karten',
      en:'card',
      ph:'KAHR-te'
    },
    {
      de:'Trinkgeld',
      art:'das',
      pl:'',
      en:'tip (money)',
      ph:'TRING-gelt'
    },
    {
      de:'Vorspeise',
      art:'die',
      pl:'Vorspeisen',
      en:'starter',
      ph:'FOR-shpy-ze'
    },
    {
      de:'Hauptgericht',
      art:'das',
      pl:'Hauptgerichte',
      en:'main course',
      ph:'HOWPT-geh-rikht'
    },
    {
      de:'Nachtisch',
      art:'der',
      pl:'Nachtische',
      en:'dessert',
      ph:'NAHKH-tish'
    },
    {
      de:'Kellner',
      art:'der',
      pl:'Kellner',
      en:'waiter',
      ph:'KEL-ner'
    },
    {
      de:'Kellnerin',
      art:'die',
      pl:'Kellnerinnen',
      en:'waitress',
      ph:'KEL-ne-rin'
    },
    {
      de:'schmecken',
      art:'',
      pl:'',
      en:'to taste (good/bad)',
      ph:'SHMEK-ken'
    },
    {
      de:'zahlen',
      art:'',
      pl:'',
      en:'to pay',
      ph:'TSAH-len'
    },
    {
      de:'bestellen',
      art:'',
      pl:'',
      en:'to order',
      ph:'beh-SHTEL-len'
    },
    {
      de:'probieren',
      art:'',
      pl:'',
      en:'to try, to taste',
      ph:'pro-BEE-ren'
    },
    {
      de:'hungrig',
      art:'',
      pl:'',
      en:'hungry',
      ph:'HOONG-rish'
    },
    {
      de:'durstig',
      art:'',
      pl:'',
      en:'thirsty',
      ph:'DOORST-ish'
    },
    {
      de:'Menü',
      art:'das',
      pl:'Menüs',
      en:'menu (set meal)',
      ph:'me-NUE'
    },
    {
      de:'Bier',
      art:'das',
      pl:'Biere',
      en:'beer',
      ph:'beer'
    },
    {
      de:'Wein',
      art:'der',
      pl:'Weine',
      en:'wine',
      ph:'vine'
    },
    {
      de:'Saft',
      art:'der',
      pl:'Säfte',
      en:'juice',
      ph:'zahft'
    },
    {
      de:'Pommes',
      art:'die',
      pl:'',
      en:'french fries',
      ph:'POM-mes'
    },
    {
      de:'Salat',
      art:'der',
      pl:'Salate',
      en:'salad',
      ph:'zah-LAHT'
    },
    {
      de:'Eis',
      art:'das',
      pl:'',
      en:'ice cream',
      ph:'ice'
    },
    {
      de:'Kuchen',
      art:'der',
      pl:'Kuchen',
      en:'cake',
      ph:'KOO-khen'
    },
    {
      de:'Frühstück',
      art:'das',
      pl:'',
      en:'breakfast',
      ph:'FRUE-shtuek'
    },
    {
      de:'Mittagessen',
      art:'das',
      pl:'',
      en:'lunch',
      ph:'MIT-tahks-es-sen'
    },
    {
      de:'Abendessen',
      art:'das',
      pl:'',
      en:'dinner, evening meal',
      ph:'AH-bent-es-sen'
    },
    {
      de:'bezahlen',
      art:'',
      pl:'',
      en:'to pay',
      ph:'be-TSAH-len'
    },
    {
      de:'kosten',
      art:'',
      pl:'',
      en:'to cost',
      ph:'KOS-ten'
    },
    {
      de:'lecker',
      art:'',
      pl:'',
      en:'delicious, tasty',
      ph:'LEK-ker'
    },
    {
      de:'satt',
      art:'',
      pl:'',
      en:'full (after eating)',
      ph:'zaht'
    },
    {
      de:'reservieren',
      art:'',
      pl:'',
      en:'to reserve, to book',
      ph:'re-zer-VEE-ren'
    },
    {
      de:'Gast',
      art:'der',
      pl:'Gäste',
      en:'guest',
      ph:'gahst'
    },
    {
      de:'vegetarisch',
      art:'',
      pl:'',
      en:'vegetarian',
      ph:'ve-ge-TAH-rish'
    },
    {
      de:'scharf',
      art:'',
      pl:'',
      en:'spicy, hot',
      ph:'shahrf'
    },
    {
      de:'süß',
      art:'',
      pl:'',
      en:'sweet',
      ph:'zues'
    },
    {
      de:'salzig',
      art:'',
      pl:'',
      en:'salty',
      ph:'ZAHL-tsish'
    },
    {
      de:'Gabel',
      art:'die',
      pl:'Gabeln',
      en:'fork',
      ph:'GAH-bel'
    },
    {
      de:'Teller',
      art:'der',
      pl:'Teller',
      en:'plate',
      ph:'TEL-ler'
    }
  ],
  grammar:{
    title:'The dative — "to me", "to you"',
    plain:'A new case: the "dative" answers "to whom?" or "for whom?". "mir" = to me, "dir" = to you, "ihm" = to him, "ihr" = to her, "uns" = to us, "ihnen" = to them. You need it for "Mir schmeckt die Suppe" (the soup tastes good TO ME) and after "mit" (with): "mit dem Auto".',
    rule:'mir (to me) · dir (to you) · ihm (to him) · ihr (to her) · uns (to us) · euch (to you all) · ihnen (to them) · "mit" + dative: mit dem Zug, mit der Karte',
    examples:[
      {
        de:'Mir schmeckt die Suppe sehr gut.',
        en:'The soup tastes very good to me.',
        ph:'meer shmekt dee ZUP-pe zair goot'
      },
      {
        de:'Kannst du mir helfen?',
        en:'Can you help me?',
        ph:'kahnst doo meer HEL-fen'
      },
      {
        de:'Ich fahre mit dem Auto.',
        en:'I go by car.',
        ph:'ish FAH-re mit daym OW-to'
      }
    ]
  },
  quiz:[
    {q:'Fill in: "___ schmeckt die Suppe."', options:['Ich', 'Mir', 'Mich', 'Mein'], answer:1,
     why:'"schmecken" needs the dative: "Mir schmeckt die Suppe" = The soup tastes good to me.'},
    {q:'Fill in: "Kannst du ___ helfen?"', options:['ich', 'mir', 'mich', 'mein'], answer:1,
     why:'"helfen" takes the dative: "Kannst du mir helfen?" = Can you help me?'},
    {q:'What is "die Rechnung"?', options:['the menu', 'the bill', 'the tip', 'the order'], answer:1,
     why:'die Rechnung = the bill. die Speisekarte = the menu, das Trinkgeld = the tip.'},
    {q:'Fill in: "Ich möchte mit Karte ___."', options:['zahlen', 'zahlt', 'zahlst', 'gezahlt'], answer:0,
     why:'"Ich möchte ... zahlen" = I would like to pay. "mit Karte" = by card.'},
    {q:'In "Mir geht es gut", "mir" is...', options:['nominative', 'accusative', 'dative', 'genitive'], answer:2,
     why:'"mir" is the dative of "ich". "Mir geht es gut" = I am fine (literally: to me it goes well).'}
  ],
  speak:{
    prompt:'Order in a restaurant out loud: "Ich möchte das Schnitzel. Die Rechnung, bitte!"',
    model:[
      'Guten Abend! Einen Tisch für zwei Personen, bitte.',
      'Ich möchte die Suppe.',
      'Die Rechnung, bitte! Kann ich mit Karte zahlen?'
    ]
  },
  recap:[
    'Dative pronouns: mir, dir, ihm, ihr, uns, euch, ihnen.',
    '"Mir schmeckt ..." = ... tastes good to me.',
    '"mit" always takes the dative: mit dem Auto, mit der Karte.',
    'Restaurant: die Speisekarte, die Rechnung, das Trinkgeld.'
  ],
  tip:'Memory tip: "Mir geht es gut" — you have known the dative since A1! "mir" was dative all along.',
  extra:[
    {
      q:'Say "The soup tastes good to me."',
      a:'Mir schmeckt die Suppe gut.'
    },
    {
      q:'Say "Can you help me?"',
      a:'Kannst du mir helfen?'
    },
    {
      q:'What does "Ich nehme die Suppe" mean?',
      a:'I will take the soup. ("nehmen" = to take)'
    }
  ],
  topics:[
    {
      id:'t1',
      title:'Food & drink words',
      time:'3 min',
      kind:'words',
      vocab:[
        {
          de:'Speisekarte',
          art:'die',
          pl:'Speisekarten',
          en:'menu',
          ph:'SHPY-ze-kahr-te'
        },
        {
          de:'Schnitzel',
          art:'das',
          pl:'Schnitzel',
          en:'schnitzel (breaded meat)',
          ph:'SHNIT-sel'
        },
        {
          de:'Suppe',
          art:'die',
          pl:'Suppen',
          en:'soup',
          ph:'ZUP-pe'
        },
        {
          de:'Rechnung',
          art:'die',
          pl:'Rechnungen',
          en:'bill',
          ph:'REKH-nung'
        },
        {
          de:'Karte',
          art:'die',
          pl:'Karten',
          en:'card',
          ph:'KAHR-te'
        },
        {
          de:'Trinkgeld',
          art:'das',
          pl:'',
          en:'tip (money)',
          ph:'TRING-gelt'
        },
        {
          de:'Vorspeise',
          art:'die',
          pl:'Vorspeisen',
          en:'starter',
          ph:'FOR-shpy-ze'
        },
        {
          de:'Hauptgericht',
          art:'das',
          pl:'Hauptgerichte',
          en:'main course',
          ph:'HOWPT-geh-rikht'
        },
        {
          de:'Nachtisch',
          art:'der',
          pl:'Nachtische',
          en:'dessert',
          ph:'NAHKH-tish'
        },
        {
          de:'Kellner',
          art:'der',
          pl:'Kellner',
          en:'waiter',
          ph:'KEL-ner'
        },
        {
          de:'Kellnerin',
          art:'die',
          pl:'Kellnerinnen',
          en:'waitress',
          ph:'KEL-ne-rin'
        },
        {
          de:'schmecken',
          art:'',
          pl:'',
          en:'to taste (good/bad)',
          ph:'SHMEK-ken'
        },
        {
          de:'zahlen',
          art:'',
          pl:'',
          en:'to pay',
          ph:'TSAH-len'
        },
        {
          de:'bestellen',
          art:'',
          pl:'',
          en:'to order',
          ph:'beh-SHTEL-len'
        },
        {
          de:'probieren',
          art:'',
          pl:'',
          en:'to try, to taste',
          ph:'pro-BEE-ren'
        },
        {
          de:'hungrig',
          art:'',
          pl:'',
          en:'hungry',
          ph:'HOONG-rish'
        },
        {
          de:'durstig',
          art:'',
          pl:'',
          en:'thirsty',
          ph:'DOORST-ish'
        },
        {
          de:'Menü',
          art:'das',
          pl:'Menüs',
          en:'menu (set meal)',
          ph:'me-NUE'
        },
        {
          de:'Bier',
          art:'das',
          pl:'Biere',
          en:'beer',
          ph:'beer'
        },
        {
          de:'Wein',
          art:'der',
          pl:'Weine',
          en:'wine',
          ph:'vine'
        }
      ]
    },
    {
      id:'t2',
      title:'At the table words',
      time:'3 min',
      kind:'words',
      vocab:[
        {
          de:'Saft',
          art:'der',
          pl:'Säfte',
          en:'juice',
          ph:'zahft'
        },
        {
          de:'Pommes',
          art:'die',
          pl:'',
          en:'french fries',
          ph:'POM-mes'
        },
        {
          de:'Salat',
          art:'der',
          pl:'Salate',
          en:'salad',
          ph:'zah-LAHT'
        },
        {
          de:'Eis',
          art:'das',
          pl:'',
          en:'ice cream',
          ph:'ice'
        },
        {
          de:'Kuchen',
          art:'der',
          pl:'Kuchen',
          en:'cake',
          ph:'KOO-khen'
        },
        {
          de:'Frühstück',
          art:'das',
          pl:'',
          en:'breakfast',
          ph:'FRUE-shtuek'
        },
        {
          de:'Mittagessen',
          art:'das',
          pl:'',
          en:'lunch',
          ph:'MIT-tahks-es-sen'
        },
        {
          de:'Abendessen',
          art:'das',
          pl:'',
          en:'dinner, evening meal',
          ph:'AH-bent-es-sen'
        },
        {
          de:'bezahlen',
          art:'',
          pl:'',
          en:'to pay',
          ph:'be-TSAH-len'
        },
        {
          de:'kosten',
          art:'',
          pl:'',
          en:'to cost',
          ph:'KOS-ten'
        },
        {
          de:'lecker',
          art:'',
          pl:'',
          en:'delicious, tasty',
          ph:'LEK-ker'
        },
        {
          de:'satt',
          art:'',
          pl:'',
          en:'full (after eating)',
          ph:'zaht'
        },
        {
          de:'reservieren',
          art:'',
          pl:'',
          en:'to reserve, to book',
          ph:'re-zer-VEE-ren'
        },
        {
          de:'Gast',
          art:'der',
          pl:'Gäste',
          en:'guest',
          ph:'gahst'
        },
        {
          de:'vegetarisch',
          art:'',
          pl:'',
          en:'vegetarian',
          ph:'ve-ge-TAH-rish'
        },
        {
          de:'scharf',
          art:'',
          pl:'',
          en:'spicy, hot',
          ph:'shahrf'
        },
        {
          de:'süß',
          art:'',
          pl:'',
          en:'sweet',
          ph:'zues'
        },
        {
          de:'salzig',
          art:'',
          pl:'',
          en:'salty',
          ph:'ZAHL-tsish'
        },
        {
          de:'Gabel',
          art:'die',
          pl:'Gabeln',
          en:'fork',
          ph:'GAH-bel'
        },
        {
          de:'Teller',
          art:'der',
          pl:'Teller',
          en:'plate',
          ph:'TEL-ler'
        }
      ]
    },
    {
      id:'t3',
      title:'Dialogue: Ordering food',
      time:'3 min',
      kind:'dialogue',
      lines:[
        {
          who:'A',
          de:'Guten Abend! Einen Tisch für zwei Personen, bitte.',
          en:'Good evening! A table for two people, please.',
          ph:'GOO-ten AH-bent! AI-nen tish fuer tsvai pair-ZOH-nen, BIT-te'
        },
        {
          who:'B',
          de:'Gern. Hier ist die Speisekarte.',
          en:'With pleasure. Here is the menu.',
          ph:'gairn. heer ist dee SHPY-ze-kahr-te'
        },
        {
          who:'A',
          de:'Ich möchte das Schnitzel. Und du?',
          en:'I would like the schnitzel. And you?',
          ph:'ish MERKH-te dahs SHNIT-sel. oont doo'
        },
        {
          who:'B',
          de:'Ich nehme die Suppe. Mir schmeckt die Suppe sehr gut.',
          en:'I will take the soup. The soup tastes very good to me.',
          ph:'ish NAY-me dee ZUP-pe. meer shmekt dee ZUP-pe zair goot'
        },
        {
          who:'A',
          de:'Die Rechnung, bitte!',
          en:'The bill, please!',
          ph:'dee REKH-nung, BIT-te'
        },
        {
          who:'B',
          de:'Das macht 32 Euro. Kann ich mit Karte zahlen?',
          en:'That is 32 euros. Can I pay by card?',
          ph:'dahs mahkht TSVAI-oont-DRAI-sish OY-ro. kahn ish mit KAHR-te TSAH-len'
        }
      ],
      speak:{
        prompt:'Order in a restaurant out loud: "Ich möchte das Schnitzel. Die Rechnung, bitte!"',
        model:[
          'Guten Abend! Einen Tisch für zwei Personen, bitte.',
          'Ich möchte die Suppe.',
          'Die Rechnung, bitte! Kann ich mit Karte zahlen?'
        ]
      }
    },
    {
      id:'t4',
      title:'Grammar: The dative',
      time:'3 min',
      kind:'grammar',
      grammar:{
        title:'The dative — "to me", "to you"',
        plain:'A new case: the "dative" answers "to whom?" or "for whom?". "mir" = to me, "dir" = to you, "ihm" = to him, "ihr" = to her, "uns" = to us, "ihnen" = to them. You need it for "Mir schmeckt die Suppe" (the soup tastes good TO ME) and after "mit" (with): "mit dem Auto".',
        rule:'mir (to me) · dir (to you) · ihm (to him) · ihr (to her) · uns (to us) · euch (to you all) · ihnen (to them) · "mit" + dative: mit dem Zug, mit der Karte',
        examples:[
          {
            de:'Mir schmeckt die Suppe sehr gut.',
            en:'The soup tastes very good to me.',
            ph:'meer shmekt dee ZUP-pe zair goot'
          },
          {
            de:'Kannst du mir helfen?',
            en:'Can you help me?',
            ph:'kahnst doo meer HEL-fen'
          },
          {
            de:'Ich fahre mit dem Auto.',
            en:'I go by car.',
            ph:'ish FAH-re mit daym OW-to'
          }
        ]
      }
    },
    {
      id:'t5',
      title:'Quiz: dative',
      time:'3 min',
      kind:'quiz',
      questions:[
        {q:'Fill in: "___ schmeckt die Suppe."', options:['Ich', 'Mir', 'Mich', 'Mein'], answer:1,
         why:'"schmecken" needs the dative: "Mir schmeckt die Suppe" = The soup tastes good to me.'},
        {q:'Fill in: "Kannst du ___ helfen?"', options:['ich', 'mir', 'mich', 'mein'], answer:1,
         why:'"helfen" takes the dative: "Kannst du mir helfen?" = Can you help me?'},
        {q:'What is "die Rechnung"?', options:['the menu', 'the bill', 'the tip', 'the order'], answer:1,
         why:'die Rechnung = the bill. die Speisekarte = the menu, das Trinkgeld = the tip.'}
      ]
    },
    {
      id:'t6',
      title:'Quiz: in the restaurant',
      time:'2 min',
      kind:'quiz',
      questions:[
        {q:'Fill in: "Ich möchte mit Karte ___."', options:['zahlen', 'zahlt', 'zahlst', 'gezahlt'], answer:0,
         why:'"Ich möchte ... zahlen" = I would like to pay. "mit Karte" = by card.'},
        {q:'In "Mir geht es gut", "mir" is...', options:['nominative', 'accusative', 'dative', 'genitive'], answer:2,
         why:'"mir" is the dative of "ich". "Mir geht es gut" = I am fine (literally: to me it goes well).'}
      ]
    }
  ],
  next:'Next: Chapter 3 — A Holiday Story',
};

CHAPTERS['A2-3'] = {
  id:'A2-3',
  n:3,
  level:'A2',
  title:'A Holiday Story',
  time:'17 min',
  concept:'Tell a story about the past with "war" and "hatte".',
  dialogue:[
    {
      who:'A',
      de:'Wo warst du im Urlaub?',
      en:'Where were you on holiday?',
      ph:'voh vahrst doo im OOR-lowp'
    },
    {
      who:'B',
      de:'Ich war in Italien. Das Wetter war sehr schön.',
      en:'I was in Italy. The weather was very nice.',
      ph:'ish vahr in ee-TAH-lee-en. dahs VET-ter vahr zair shern'
    },
    {
      who:'A',
      de:'Hattest du eine gute Reise?',
      en:'Did you have a good trip?',
      ph:'HAH-test doo AI-ne GOO-te RAI-ze'
    },
    {
      who:'B',
      de:'Ja, die Reise war super. Wir hatten ein schönes Hotel.',
      en:'Yes, the trip was great. We had a nice hotel.',
      ph:'yah, dee RAI-ze vahr ZOO-per. veer HAH-ten ine SHER-nes ho-TEL'
    },
    {
      who:'A',
      de:'Was hast du gemacht?',
      en:'What did you do?',
      ph:'vahs hahst doo geh-MAHKHT'
    },
    {
      who:'B',
      de:'Ich war am Strand und ich habe viel fotografiert.',
      en:'I was at the beach and I took many photos.',
      ph:'ish vahr ahm shtrahnt oont ish HAH-be feel foh-toh-grah-FEERT'
    }
  ],
  vocab:[
    {
      de:'Strand',
      art:'der',
      pl:'Strände',
      en:'beach',
      ph:'shtrahnt'
    },
    {
      de:'Wetter',
      art:'das',
      pl:'',
      en:'weather',
      ph:'VET-ter'
    },
    {
      de:'Reise',
      art:'die',
      pl:'Reisen',
      en:'trip',
      ph:'RAI-ze'
    },
    {
      de:'Foto',
      art:'das',
      pl:'Fotos',
      en:'photo',
      ph:'FOH-to'
    },
    {
      de:'Kamera',
      art:'die',
      pl:'Kameras',
      en:'camera',
      ph:'KAH-me-rah'
    },
    {
      de:'Ferien',
      art:'die',
      pl:'',
      en:'holidays (school/work)',
      ph:'FAY-ree-en'
    },
    {
      de:'See',
      art:'der',
      pl:'Seen',
      en:'lake',
      ph:'zay'
    },
    {
      de:'Fluss',
      art:'der',
      pl:'Flüsse',
      en:'river',
      ph:'flooss'
    },
    {
      de:'Insel',
      art:'die',
      pl:'Inseln',
      en:'island',
      ph:'IN-zel'
    },
    {
      de:'Wald',
      art:'der',
      pl:'Wälder',
      en:'forest',
      ph:'vahlt'
    },
    {
      de:'fotografieren',
      art:'',
      pl:'',
      en:'to take photos',
      ph:'foh-toh-grah-FEE-ren'
    },
    {
      de:'war',
      art:'',
      pl:'',
      en:'was (past of sein)',
      ph:'vahr'
    },
    {
      de:'hatte',
      art:'',
      pl:'',
      en:'had (past of haben)',
      ph:'HAH-te'
    },
    {
      de:'toll',
      art:'',
      pl:'',
      en:'great, fantastic',
      ph:'tol'
    },
    {
      de:'super',
      art:'',
      pl:'',
      en:'great, super',
      ph:'ZOO-per'
    },
    {
      de:'nächstes Jahr',
      art:'',
      pl:'',
      en:'next year',
      ph:'NEKHS-tes yahr'
    },
    {
      de:'Hotel',
      art:'das',
      pl:'Hotels',
      en:'hotel',
      ph:'ho-TEL'
    },
    {
      de:'Zimmer',
      art:'das',
      pl:'Zimmer',
      en:'room',
      ph:'TSIM-mer'
    },
    {
      de:'Stadt',
      art:'die',
      pl:'Städte',
      en:'city, town',
      ph:'shtaht'
    },
    {
      de:'Land',
      art:'das',
      pl:'Länder',
      en:'country, land',
      ph:'lahnt'
    },
    {
      de:'Leute',
      art:'die',
      pl:'',
      en:'people',
      ph:'LOY-te'
    },
    {
      de:'Koffer',
      art:'der',
      pl:'Koffer',
      en:'suitcase',
      ph:'KOF-fer'
    },
    {
      de:'Pass',
      art:'der',
      pl:'Pässe',
      en:'passport',
      ph:'pahs'
    },
    {
      de:'Urlaub',
      art:'der',
      pl:'',
      en:'holiday, vacation',
      ph:'OOR-lowp'
    },
    {
      de:'Bahnhof',
      art:'der',
      pl:'Bahnhöfe',
      en:'train station',
      ph:'BAHN-hohf'
    },
    {
      de:'Flughafen',
      art:'der',
      pl:'Flughäfen',
      en:'airport',
      ph:'FLOOK-hah-fen'
    },
    {
      de:'Ticket',
      art:'das',
      pl:'Tickets',
      en:'ticket',
      ph:'TIK-ket'
    },
    {
      de:'wandern',
      art:'',
      pl:'',
      en:'to hike',
      ph:'VAHN-dern'
    },
    {
      de:'schwimmen',
      art:'',
      pl:'',
      en:'to swim',
      ph:'SHVIM-men'
    },
    {
      de:'sonnen',
      art:'',
      pl:'',
      en:'to sunbathe',
      ph:'ZON-nen'
    },
    {
      de:'entspannen',
      art:'',
      pl:'',
      en:'to relax',
      ph:'ent-SHPAH-nen'
    },
    {
      de:'besichtigen',
      art:'',
      pl:'',
      en:'to visit, to look around',
      ph:'be-ZIKH-ti-gen'
    },
    {
      de:'Sehenswürdigkeit',
      art:'die',
      pl:'Sehenswürdigkeiten',
      en:'sight, attraction',
      ph:'ZAY-ens-vuer-dish-kait'
    },
    {
      de:'Museum',
      art:'das',
      pl:'Museen',
      en:'museum',
      ph:'moo-ZAY-um'
    },
    {
      de:'Meer',
      art:'das',
      pl:'Meere',
      en:'sea',
      ph:'mair'
    },
    {
      de:'Sonne',
      art:'die',
      pl:'',
      en:'sun',
      ph:'ZON-ne'
    },
    {
      de:'Regen',
      art:'der',
      pl:'',
      en:'rain',
      ph:'RAY-gen'
    },
    {
      de:'Schnee',
      art:'der',
      pl:'',
      en:'snow',
      ph:'shnay'
    },
    {
      de:'warm',
      art:'',
      pl:'',
      en:'warm',
      ph:'vahrm'
    },
    {
      de:'schön',
      art:'',
      pl:'',
      en:'beautiful, nice',
      ph:'shoen'
    }
  ],
  grammar:{
    title:'Past of sein and haben — war and hatte',
    plain:'For "sein" (to be) and "haben" (to have), Germans do NOT use the Perfekt in stories — they use a simple past form: "war" (was) and "hatte" (had). You need these two words in almost every story.',
    rule:'sein: ich war, du warst, er war, wir waren, ihr wart, sie waren · haben: ich hatte, du hattest, er hatte, wir hatten, ihr hattet, sie hatten',
    examples:[
      {
        de:'Ich war in Italien.',
        en:'I was in Italy.',
        ph:'ish vahr in ee-TAH-lee-en'
      },
      {
        de:'Wir hatten ein schönes Hotel.',
        en:'We had a nice hotel.',
        ph:'veer HAH-ten ine SHER-nes ho-TEL'
      },
      {
        de:'Das Wetter war sehr schön.',
        en:'The weather was very nice.',
        ph:'dahs VET-ter vahr zair shern'
      }
    ]
  },
  quiz:[
    {q:'Fill in: "Ich ___ in Italien."', options:['bin', 'war', 'habe', 'hatte'], answer:1,
     why:'"war" is the past of "sein". "Ich war in Italien" = I was in Italy.'},
    {q:'Fill in: "Wir ___ ein schönes Hotel."', options:['haben', 'hatten', 'waren', 'sind'], answer:1,
     why:'"hatten" is the past of "haben". "Wir hatten ein Hotel" = We had a hotel.'},
    {q:'"Wo warst du?" means...', options:['Where are you?', 'Where were you?', 'Where will you be?', 'Where do you live?'], answer:1,
     why:'"warst" is the past of "bist". "Wo warst du?" = Where were you?'},
    {q:'What is the past of "haben" for "ich"?', options:['habe', 'hatte', 'hat', 'gehabt'], answer:1,
     why:'ich hatte = I had. Use "hatte" in stories, not "habe gehabt".'},
    {q:'"Das Wetter war schön." — "war" is the past of...', options:['haben', 'werden', 'sein', 'fahren'], answer:2,
     why:'"war" is the past of "sein" (to be). "Das Wetter war schön" = The weather was nice.'}
  ],
  speak:{
    prompt:'Tell a holiday story out loud in 3 sentences: "Ich war in ... Das Wetter war ... Wir hatten ..."',
    model:[
      'Ich war in Italien.',
      'Das Wetter war sehr schön.',
      'Wir hatten ein schönes Hotel.',
      'Ich war am Strand.'
    ]
  },
  recap:[
    'Past of sein: ich war, du warst, er war, wir waren.',
    'Past of haben: ich hatte, du hattest, er hatte, wir hatten.',
    'Use war/hatte in stories — not the Perfekt.',
    'Travel: der Strand, die Insel, der See, der Fluss, der Wald.'
  ],
  tip:'Memory tip: "war" and "hatte" are the two most useful past words in German. Learn them by heart — you will use them every day.',
  extra:[
    {
      q:'Say "I was in Italy."',
      a:'Ich war in Italien.'
    },
    {
      q:'Say "We had a nice hotel."',
      a:'Wir hatten ein schönes Hotel.'
    },
    {
      q:'What is the past of "sein" for "wir"?',
      a:'wir waren — "Wir waren am Strand."'
    }
  ],
  topics:[
    {
      id:'t1',
      title:'Travel words',
      time:'3 min',
      kind:'words',
      vocab:[
        {
          de:'Strand',
          art:'der',
          pl:'Strände',
          en:'beach',
          ph:'shtrahnt'
        },
        {
          de:'Wetter',
          art:'das',
          pl:'',
          en:'weather',
          ph:'VET-ter'
        },
        {
          de:'Reise',
          art:'die',
          pl:'Reisen',
          en:'trip',
          ph:'RAI-ze'
        },
        {
          de:'Foto',
          art:'das',
          pl:'Fotos',
          en:'photo',
          ph:'FOH-to'
        },
        {
          de:'Kamera',
          art:'die',
          pl:'Kameras',
          en:'camera',
          ph:'KAH-me-rah'
        },
        {
          de:'Ferien',
          art:'die',
          pl:'',
          en:'holidays (school/work)',
          ph:'FAY-ree-en'
        },
        {
          de:'See',
          art:'der',
          pl:'Seen',
          en:'lake',
          ph:'zay'
        },
        {
          de:'Fluss',
          art:'der',
          pl:'Flüsse',
          en:'river',
          ph:'flooss'
        },
        {
          de:'Insel',
          art:'die',
          pl:'Inseln',
          en:'island',
          ph:'IN-zel'
        },
        {
          de:'Wald',
          art:'der',
          pl:'Wälder',
          en:'forest',
          ph:'vahlt'
        },
        {
          de:'fotografieren',
          art:'',
          pl:'',
          en:'to take photos',
          ph:'foh-toh-grah-FEE-ren'
        },
        {
          de:'war',
          art:'',
          pl:'',
          en:'was (past of sein)',
          ph:'vahr'
        },
        {
          de:'hatte',
          art:'',
          pl:'',
          en:'had (past of haben)',
          ph:'HAH-te'
        },
        {
          de:'toll',
          art:'',
          pl:'',
          en:'great, fantastic',
          ph:'tol'
        },
        {
          de:'super',
          art:'',
          pl:'',
          en:'great, super',
          ph:'ZOO-per'
        },
        {
          de:'nächstes Jahr',
          art:'',
          pl:'',
          en:'next year',
          ph:'NEKHS-tes yahr'
        },
        {
          de:'Hotel',
          art:'das',
          pl:'Hotels',
          en:'hotel',
          ph:'ho-TEL'
        },
        {
          de:'Zimmer',
          art:'das',
          pl:'Zimmer',
          en:'room',
          ph:'TSIM-mer'
        },
        {
          de:'Stadt',
          art:'die',
          pl:'Städte',
          en:'city, town',
          ph:'shtaht'
        },
        {
          de:'Land',
          art:'das',
          pl:'Länder',
          en:'country, land',
          ph:'lahnt'
        }
      ]
    },
    {
      id:'t2',
      title:'Holiday words',
      time:'3 min',
      kind:'words',
      vocab:[
        {
          de:'Leute',
          art:'die',
          pl:'',
          en:'people',
          ph:'LOY-te'
        },
        {
          de:'Koffer',
          art:'der',
          pl:'Koffer',
          en:'suitcase',
          ph:'KOF-fer'
        },
        {
          de:'Pass',
          art:'der',
          pl:'Pässe',
          en:'passport',
          ph:'pahs'
        },
        {
          de:'Urlaub',
          art:'der',
          pl:'',
          en:'holiday, vacation',
          ph:'OOR-lowp'
        },
        {
          de:'Bahnhof',
          art:'der',
          pl:'Bahnhöfe',
          en:'train station',
          ph:'BAHN-hohf'
        },
        {
          de:'Flughafen',
          art:'der',
          pl:'Flughäfen',
          en:'airport',
          ph:'FLOOK-hah-fen'
        },
        {
          de:'Ticket',
          art:'das',
          pl:'Tickets',
          en:'ticket',
          ph:'TIK-ket'
        },
        {
          de:'wandern',
          art:'',
          pl:'',
          en:'to hike',
          ph:'VAHN-dern'
        },
        {
          de:'schwimmen',
          art:'',
          pl:'',
          en:'to swim',
          ph:'SHVIM-men'
        },
        {
          de:'sonnen',
          art:'',
          pl:'',
          en:'to sunbathe',
          ph:'ZON-nen'
        },
        {
          de:'entspannen',
          art:'',
          pl:'',
          en:'to relax',
          ph:'ent-SHPAH-nen'
        },
        {
          de:'besichtigen',
          art:'',
          pl:'',
          en:'to visit, to look around',
          ph:'be-ZIKH-ti-gen'
        },
        {
          de:'Sehenswürdigkeit',
          art:'die',
          pl:'Sehenswürdigkeiten',
          en:'sight, attraction',
          ph:'ZAY-ens-vuer-dish-kait'
        },
        {
          de:'Museum',
          art:'das',
          pl:'Museen',
          en:'museum',
          ph:'moo-ZAY-um'
        },
        {
          de:'Meer',
          art:'das',
          pl:'Meere',
          en:'sea',
          ph:'mair'
        },
        {
          de:'Sonne',
          art:'die',
          pl:'',
          en:'sun',
          ph:'ZON-ne'
        },
        {
          de:'Regen',
          art:'der',
          pl:'',
          en:'rain',
          ph:'RAY-gen'
        },
        {
          de:'Schnee',
          art:'der',
          pl:'',
          en:'snow',
          ph:'shnay'
        },
        {
          de:'warm',
          art:'',
          pl:'',
          en:'warm',
          ph:'vahrm'
        },
        {
          de:'schön',
          art:'',
          pl:'',
          en:'beautiful, nice',
          ph:'shoen'
        }
      ]
    },
    {
      id:'t3',
      title:'Dialogue: Where were you?',
      time:'3 min',
      kind:'dialogue',
      lines:[
        {
          who:'A',
          de:'Wo warst du im Urlaub?',
          en:'Where were you on holiday?',
          ph:'voh vahrst doo im OOR-lowp'
        },
        {
          who:'B',
          de:'Ich war in Italien. Das Wetter war sehr schön.',
          en:'I was in Italy. The weather was very nice.',
          ph:'ish vahr in ee-TAH-lee-en. dahs VET-ter vahr zair shern'
        },
        {
          who:'A',
          de:'Hattest du eine gute Reise?',
          en:'Did you have a good trip?',
          ph:'HAH-test doo AI-ne GOO-te RAI-ze'
        },
        {
          who:'B',
          de:'Ja, die Reise war super. Wir hatten ein schönes Hotel.',
          en:'Yes, the trip was great. We had a nice hotel.',
          ph:'yah, dee RAI-ze vahr ZOO-per. veer HAH-ten ine SHER-nes ho-TEL'
        },
        {
          who:'A',
          de:'Was hast du gemacht?',
          en:'What did you do?',
          ph:'vahs hahst doo geh-MAHKHT'
        },
        {
          who:'B',
          de:'Ich war am Strand und ich habe viel fotografiert.',
          en:'I was at the beach and I took many photos.',
          ph:'ish vahr ahm shtrahnt oont ish HAH-be feel foh-toh-grah-FEERT'
        }
      ],
      speak:{
        prompt:'Tell a holiday story out loud in 3 sentences: "Ich war in ... Das Wetter war ... Wir hatten ..."',
        model:[
          'Ich war in Italien.',
          'Das Wetter war sehr schön.',
          'Wir hatten ein schönes Hotel.',
          'Ich war am Strand.'
        ]
      }
    },
    {
      id:'t4',
      title:'Grammar: "war" and "hatte"',
      time:'3 min',
      kind:'grammar',
      grammar:{
        title:'Past of sein and haben — war and hatte',
        plain:'For "sein" (to be) and "haben" (to have), Germans do NOT use the Perfekt in stories — they use a simple past form: "war" (was) and "hatte" (had). You need these two words in almost every story.',
        rule:'sein: ich war, du warst, er war, wir waren, ihr wart, sie waren · haben: ich hatte, du hattest, er hatte, wir hatten, ihr hattet, sie hatten',
        examples:[
          {
            de:'Ich war in Italien.',
            en:'I was in Italy.',
            ph:'ish vahr in ee-TAH-lee-en'
          },
          {
            de:'Wir hatten ein schönes Hotel.',
            en:'We had a nice hotel.',
            ph:'veer HAH-ten ine SHER-nes ho-TEL'
          },
          {
            de:'Das Wetter war sehr schön.',
            en:'The weather was very nice.',
            ph:'dahs VET-ter vahr zair shern'
          }
        ]
      }
    },
    {
      id:'t5',
      title:'Quiz: war & hatte',
      time:'3 min',
      kind:'quiz',
      questions:[
        {q:'Fill in: "Ich ___ in Italien."', options:['bin', 'war', 'habe', 'hatte'], answer:1,
         why:'"war" is the past of "sein". "Ich war in Italien" = I was in Italy.'},
        {q:'Fill in: "Wir ___ ein schönes Hotel."', options:['haben', 'hatten', 'waren', 'sind'], answer:1,
         why:'"hatten" is the past of "haben". "Wir hatten ein Hotel" = We had a hotel.'},
        {q:'"Wo warst du?" means...', options:['Where are you?', 'Where were you?', 'Where will you be?', 'Where do you live?'], answer:1,
         why:'"warst" is the past of "bist". "Wo warst du?" = Where were you?'}
      ]
    },
    {
      id:'t6',
      title:'Quiz: on holiday',
      time:'2 min',
      kind:'quiz',
      questions:[
        {q:'What is the past of "haben" for "ich"?', options:['habe', 'hatte', 'hat', 'gehabt'], answer:1,
         why:'ich hatte = I had. Use "hatte" in stories, not "habe gehabt".'},
        {q:'"Das Wetter war schön." — "war" is the past of...', options:['haben', 'werden', 'sein', 'fahren'], answer:2,
         why:'"war" is the past of "sein" (to be). "Das Wetter war schön" = The weather was nice.'}
      ]
    }
  ],
  next:'Next: Chapter 4 — Shopping & Clothes',
};

CHAPTERS['A2-4'] = {
  id:'A2-4',
  n:4,
  level:'A2',
  title:'Shopping & Clothes',
  time:'17 min',
  concept:'Try on clothes, talk about sizes, and compare prices — with comparatives, superlatives and adjective endings.',
  dialogue:[
    {
      who:'A',
      de:'Guten Tag! Ich suche eine rote Bluse.',
      en:'Good day! I am looking for a red blouse.',
      ph:'GOO-ten TAHK! ish ZOO-khe INE ROH-te BLOO-ze'
    },
    {
      who:'B',
      de:'Welche Größe haben Sie?',
      en:'What size are you?',
      ph:'VEL-khe GROO-se HAH-ben zee'
    },
    {
      who:'A',
      de:'Größe 38, bitte.',
      en:'Size 38, please.',
      ph:'GROO-se ahkht-oont-DRAI-sish, BIT-te'
    },
    {
      who:'B',
      de:'Die Umkleidekabine ist dort. Sie können die Bluse anprobieren.',
      en:'The changing room is over there. You can try on the blouse.',
      ph:'dee OOM-klai-de-kah-BEE-ne ist dort. zee KOEN-nen dee BLOO-ze AHN-pro-bee-ren'
    },
    {
      who:'A',
      de:'Die Bluse passt gut. Was kostet sie?',
      en:'The blouse fits well. How much is it?',
      ph:'dee BLOO-ze pahst goot. vahs KOS-tet zee'
    },
    {
      who:'B',
      de:'Sie kostet 29 Euro 99. Möchten Sie mit Karte zahlen?',
      en:'It costs 29 euros 99. Would you like to pay by card?',
      ph:'zee KOS-tet NOIN-oont-TSVAHN-tsish OY-ro NOIN-oont-NOIN-tsish. MOEKH-ten zee mit KAHR-te TSAH-len'
    }
  ],
  vocab:[
    {
      de:'Hemd',
      art:'das',
      pl:'Hemden',
      en:'shirt',
      ph:'hemt'
    },
    {
      de:'Hose',
      art:'die',
      pl:'Hosen',
      en:'trousers, pants',
      ph:'HOH-ze'
    },
    {
      de:'Rock',
      art:'der',
      pl:'Röcke',
      en:'skirt',
      ph:'rok'
    },
    {
      de:'Bluse',
      art:'die',
      pl:'Blusen',
      en:'blouse',
      ph:'BLOO-ze'
    },
    {
      de:'Mantel',
      art:'der',
      pl:'Mäntel',
      en:'coat',
      ph:'MAHN-tel'
    },
    {
      de:'Anzug',
      art:'der',
      pl:'Anzüge',
      en:'suit',
      ph:'AHN-tsook'
    },
    {
      de:'Kleid',
      art:'das',
      pl:'Kleider',
      en:'dress',
      ph:'klite'
    },
    {
      de:'Schuh',
      art:'der',
      pl:'Schuhe',
      en:'shoe',
      ph:'shoo'
    },
    {
      de:'Socke',
      art:'die',
      pl:'Socken',
      en:'sock',
      ph:'ZOK-ke'
    },
    {
      de:'Hut',
      art:'der',
      pl:'Hüte',
      en:'hat',
      ph:'hoot'
    },
    {
      de:'Mütze',
      art:'die',
      pl:'Mützen',
      en:'cap, beanie',
      ph:'MUET-se'
    },
    {
      de:'Schal',
      art:'der',
      pl:'Schals',
      en:'scarf',
      ph:'shahl'
    },
    {
      de:'Tasche',
      art:'die',
      pl:'Taschen',
      en:'bag',
      ph:'TAH-she'
    },
    {
      de:'Gürtel',
      art:'der',
      pl:'Gürtel',
      en:'belt',
      ph:'GUER-tel'
    },
    {
      de:'Brille',
      art:'die',
      pl:'Brillen',
      en:'glasses',
      ph:'BRIL-le'
    },
    {
      de:'Verkäufer',
      art:'der',
      pl:'Verkäufer',
      en:'salesman',
      ph:'fair-KOY-fer'
    },
    {
      de:'Verkäuferin',
      art:'die',
      pl:'Verkäuferinnen',
      en:'saleswoman',
      ph:'fair-KOY-fe-rin'
    },
    {
      de:'Umkleidekabine',
      art:'die',
      pl:'Umkleidekabinen',
      en:'changing room',
      ph:'OOM-klai-de-kah-BEE-ne'
    },
    {
      de:'Quittung',
      art:'die',
      pl:'Quittungen',
      en:'receipt',
      ph:'KVIT-toong'
    },
    {
      de:'Kreditkarte',
      art:'die',
      pl:'Kreditkarten',
      en:'credit card',
      ph:'kre-DEET-kahr-te'
    },
    {
      de:'bar',
      art:'',
      pl:'',
      en:'in cash',
      ph:'bahr'
    },
    {
      de:'rot',
      art:'',
      pl:'',
      en:'red',
      ph:'roht'
    },
    {
      de:'blau',
      art:'',
      pl:'',
      en:'blue',
      ph:'blau'
    },
    {
      de:'grün',
      art:'',
      pl:'',
      en:'green',
      ph:'gruen'
    },
    {
      de:'gelb',
      art:'',
      pl:'',
      en:'yellow',
      ph:'gelp'
    },
    {
      de:'schwarz',
      art:'',
      pl:'',
      en:'black',
      ph:'shvahrts'
    },
    {
      de:'weiß',
      art:'',
      pl:'',
      en:'white',
      ph:'vice'
    },
    {
      de:'grau',
      art:'',
      pl:'',
      en:'grey',
      ph:'grau'
    },
    {
      de:'braun',
      art:'',
      pl:'',
      en:'brown',
      ph:'braun'
    },
    {
      de:'rosa',
      art:'',
      pl:'',
      en:'pink',
      ph:'ROH-zah'
    },
    {
      de:'bunt',
      art:'',
      pl:'',
      en:'colourful',
      ph:'boont'
    },
    {
      de:'hell',
      art:'',
      pl:'',
      en:'light (colour)',
      ph:'hel'
    },
    {
      de:'dunkel',
      art:'',
      pl:'',
      en:'dark (colour)',
      ph:'DOON-kel'
    },
    {
      de:'kurz',
      art:'',
      pl:'',
      en:'short',
      ph:'koorts'
    },
    {
      de:'lang',
      art:'',
      pl:'',
      en:'long',
      ph:'lahng'
    },
    {
      de:'eng',
      art:'',
      pl:'',
      en:'tight',
      ph:'eng'
    },
    {
      de:'weit',
      art:'',
      pl:'',
      en:'wide, loose',
      ph:'vite'
    },
    {
      de:'bequem',
      art:'',
      pl:'',
      en:'comfortable',
      ph:'be-KVAYM'
    },
    {
      de:'modern',
      art:'',
      pl:'',
      en:'modern',
      ph:'mo-DAIRN'
    },
    {
      de:'tragen',
      art:'',
      pl:'',
      en:'to wear',
      ph:'TRAH-gen'
    },
    {
      de:'aussehen',
      art:'',
      pl:'',
      en:'to look (like)',
      ph:'OWS-zay-en'
    },
    {
      de:'gefallen',
      art:'',
      pl:'',
      en:'to like, to please',
      ph:'ge-FAH-len'
    },
    {
      de:'Größe',
      art:'die',
      pl:'Größen',
      en:'size',
      ph:'GROO-se'
    },
    {
      de:'anprobieren',
      art:'',
      pl:'',
      en:'to try on',
      ph:'AHN-pro-bee-ren'
    },
    {
      de:'passen',
      art:'',
      pl:'',
      en:'to fit',
      ph:'PAH-sen'
    },
    {
      de:'stehen',
      art:'',
      pl:'',
      en:'to suit (clothes)',
      ph:'SHTAY-en'
    },
    {
      de:'Preis',
      art:'der',
      pl:'Preise',
      en:'price',
      ph:'price'
    },
    {
      de:'Kasse',
      art:'die',
      pl:'Kassen',
      en:'checkout, cash desk',
      ph:'KAH-se'
    },
    {
      de:'Rabatt',
      art:'der',
      pl:'Rabatte',
      en:'discount',
      ph:'rah-BAHT'
    },
    {
      de:'umtauschen',
      art:'',
      pl:'',
      en:'to exchange',
      ph:'OOM-tow-shen'
    }
  ],
  grammar:{
    title:'Comparative, superlative & adjective endings',
    plain:'You know the comparative: billiger = cheaper. The superlative is "the cheapest": am billigsten — "Das ist die billigste Jacke." Adjectives before a noun also take endings: "ein rotes Kleid" (a red dress), "der rote Rock" (the red skirt). Learn the ending WITH the phrase.',
    rule:'billig → billiger → am billigsten · gut → besser → am besten · ein + -es: ein rotes Kleid · der/die/das + -e: der rote Rock, die rote Bluse, das rote Hemd',
    examples:[
      {
        de:'Diese Jacke ist billiger als die rote.',
        en:'This jacket is cheaper than the red one.',
        ph:'DEE-ze YAH-ke ist BIL-li-ger ahls dee ROH-te'
      },
      {
        de:'Das ist die billigste Jacke im Geschäft.',
        en:'That is the cheapest jacket in the shop.',
        ph:'dahs ist dee BIL-lish-ste YAH-ke im ge-SHEFT'
      },
      {
        de:'Ich möchte ein rotes Kleid.',
        en:'I would like a red dress.',
        ph:'ish MOEKH-te ine ROH-tes klite'
      }
    ]
  },
  quiz:[
    {q:'What is the superlative of "billig"?', options:['billiger', 'am billigsten', 'billigster', 'mehr billig'], answer:1,
     why:'The superlative is "am billigsten": "Das ist die billigste Jacke."'},
    {q:'Fill in: "Ich möchte ein ___ Kleid." (red)', options:['rote', 'rotes', 'roter', 'rot'], answer:1,
     why:'"ein" + neuter noun takes -es: ein rotes Kleid.'},
    {q:'Fill in: "___ Jacke ist die billigste." (the)', options:['Der', 'Die', 'Das', 'Den'], answer:1,
     why:'"die billigste Jacke" — Jacke is feminine, so "die".'},
    {q:'"gut → besser → ...?"', options:['am gutesten', 'am besten', 'bester', 'mehr gut'], answer:1,
     why:'gut is irregular: gut → besser → am besten.'},
    {q:'What does "anprobieren" mean?', options:['to buy', 'to try on', 'to pay', 'to exchange'], answer:1,
     why:'anprobieren = to try on: "Ich möchte die Bluse anprobieren."'}
  ],
  speak:{
    prompt:'Say out loud: "Ich suche eine rote Bluse in Größe 38. Die Bluse passt gut."',
    model:[
      'Ich suche eine rote Bluse.',
      'Welche Größe haben Sie?',
      'Die Bluse passt gut.',
      'Ich möchte mit Karte zahlen.'
    ]
  },
  recap:[
    'Comparative: billig → billiger. Superlative: am billigsten.',
    'gut → besser → am besten (irregular — learn it by heart).',
    'Adjective endings: ein rotes Kleid, der rote Rock, die rote Bluse.',
    'Shopping: die Größe, anprobieren, passen, der Preis, die Kasse, der Rabatt.'
  ],
  tip:'Memory tip: always learn clothes WITH the colour and the ending — "ein rotes Kleid", "der blaue Mantel". The ending sticks to the phrase.',
  extra:[
    {
      q:'Say "This jacket is cheaper than the red one."',
      a:'Diese Jacke ist billiger als die rote.'
    },
    {
      q:'Say "I would like a red dress."',
      a:'Ich möchte ein rotes Kleid.'
    },
    {
      q:'What is the superlative of "teuer"?',
      a:'am teuersten — "Das ist das teuerste Kleid."'
    }
  ],
  topics:[
    {
      id:'t1',
      title:'Clothes words',
      time:'3 min',
      kind:'words',
      vocab:[
        {
          de:'Hemd',
          art:'das',
          pl:'Hemden',
          en:'shirt',
          ph:'hemt'
        },
        {
          de:'Hose',
          art:'die',
          pl:'Hosen',
          en:'trousers, pants',
          ph:'HOH-ze'
        },
        {
          de:'Rock',
          art:'der',
          pl:'Röcke',
          en:'skirt',
          ph:'rok'
        },
        {
          de:'Bluse',
          art:'die',
          pl:'Blusen',
          en:'blouse',
          ph:'BLOO-ze'
        },
        {
          de:'Mantel',
          art:'der',
          pl:'Mäntel',
          en:'coat',
          ph:'MAHN-tel'
        },
        {
          de:'Anzug',
          art:'der',
          pl:'Anzüge',
          en:'suit',
          ph:'AHN-tsook'
        },
        {
          de:'Kleid',
          art:'das',
          pl:'Kleider',
          en:'dress',
          ph:'klite'
        },
        {
          de:'Schuh',
          art:'der',
          pl:'Schuhe',
          en:'shoe',
          ph:'shoo'
        },
        {
          de:'Socke',
          art:'die',
          pl:'Socken',
          en:'sock',
          ph:'ZOK-ke'
        },
        {
          de:'Hut',
          art:'der',
          pl:'Hüte',
          en:'hat',
          ph:'hoot'
        },
        {
          de:'Mütze',
          art:'die',
          pl:'Mützen',
          en:'cap, beanie',
          ph:'MUET-se'
        },
        {
          de:'Schal',
          art:'der',
          pl:'Schals',
          en:'scarf',
          ph:'shahl'
        },
        {
          de:'Tasche',
          art:'die',
          pl:'Taschen',
          en:'bag',
          ph:'TAH-she'
        },
        {
          de:'Gürtel',
          art:'der',
          pl:'Gürtel',
          en:'belt',
          ph:'GUER-tel'
        },
        {
          de:'Brille',
          art:'die',
          pl:'Brillen',
          en:'glasses',
          ph:'BRIL-le'
        },
        {
          de:'Verkäufer',
          art:'der',
          pl:'Verkäufer',
          en:'salesman',
          ph:'fair-KOY-fer'
        },
        {
          de:'Verkäuferin',
          art:'die',
          pl:'Verkäuferinnen',
          en:'saleswoman',
          ph:'fair-KOY-fe-rin'
        },
        {
          de:'Umkleidekabine',
          art:'die',
          pl:'Umkleidekabinen',
          en:'changing room',
          ph:'OOM-klai-de-kah-BEE-ne'
        },
        {
          de:'Quittung',
          art:'die',
          pl:'Quittungen',
          en:'receipt',
          ph:'KVIT-toong'
        },
        {
          de:'Kreditkarte',
          art:'die',
          pl:'Kreditkarten',
          en:'credit card',
          ph:'kre-DEET-kahr-te'
        }
      ]
    },
    {
      id:'t2',
      title:'Colours & shopping words',
      time:'3 min',
      kind:'words',
      vocab:[
        {
          de:'bar',
          art:'',
          pl:'',
          en:'in cash',
          ph:'bahr'
        },
        {
          de:'rot',
          art:'',
          pl:'',
          en:'red',
          ph:'roht'
        },
        {
          de:'blau',
          art:'',
          pl:'',
          en:'blue',
          ph:'blau'
        },
        {
          de:'grün',
          art:'',
          pl:'',
          en:'green',
          ph:'gruen'
        },
        {
          de:'gelb',
          art:'',
          pl:'',
          en:'yellow',
          ph:'gelp'
        },
        {
          de:'schwarz',
          art:'',
          pl:'',
          en:'black',
          ph:'shvahrts'
        },
        {
          de:'weiß',
          art:'',
          pl:'',
          en:'white',
          ph:'vice'
        },
        {
          de:'grau',
          art:'',
          pl:'',
          en:'grey',
          ph:'grau'
        },
        {
          de:'braun',
          art:'',
          pl:'',
          en:'brown',
          ph:'braun'
        },
        {
          de:'rosa',
          art:'',
          pl:'',
          en:'pink',
          ph:'ROH-zah'
        },
        {
          de:'bunt',
          art:'',
          pl:'',
          en:'colourful',
          ph:'boont'
        },
        {
          de:'hell',
          art:'',
          pl:'',
          en:'light (colour)',
          ph:'hel'
        },
        {
          de:'dunkel',
          art:'',
          pl:'',
          en:'dark (colour)',
          ph:'DOON-kel'
        },
        {
          de:'kurz',
          art:'',
          pl:'',
          en:'short',
          ph:'koorts'
        },
        {
          de:'lang',
          art:'',
          pl:'',
          en:'long',
          ph:'lahng'
        },
        {
          de:'eng',
          art:'',
          pl:'',
          en:'tight',
          ph:'eng'
        },
        {
          de:'weit',
          art:'',
          pl:'',
          en:'wide, loose',
          ph:'vite'
        },
        {
          de:'bequem',
          art:'',
          pl:'',
          en:'comfortable',
          ph:'be-KVAYM'
        },
        {
          de:'modern',
          art:'',
          pl:'',
          en:'modern',
          ph:'mo-DAIRN'
        },
        {
          de:'tragen',
          art:'',
          pl:'',
          en:'to wear',
          ph:'TRAH-gen'
        },
        {
          de:'aussehen',
          art:'',
          pl:'',
          en:'to look (like)',
          ph:'OWS-zay-en'
        },
        {
          de:'gefallen',
          art:'',
          pl:'',
          en:'to like, to please',
          ph:'ge-FAH-len'
        },
        {
          de:'Größe',
          art:'die',
          pl:'Größen',
          en:'size',
          ph:'GROO-se'
        },
        {
          de:'anprobieren',
          art:'',
          pl:'',
          en:'to try on',
          ph:'AHN-pro-bee-ren'
        },
        {
          de:'passen',
          art:'',
          pl:'',
          en:'to fit',
          ph:'PAH-sen'
        },
        {
          de:'stehen',
          art:'',
          pl:'',
          en:'to suit (clothes)',
          ph:'SHTAY-en'
        },
        {
          de:'Preis',
          art:'der',
          pl:'Preise',
          en:'price',
          ph:'price'
        },
        {
          de:'Kasse',
          art:'die',
          pl:'Kassen',
          en:'checkout, cash desk',
          ph:'KAH-se'
        },
        {
          de:'Rabatt',
          art:'der',
          pl:'Rabatte',
          en:'discount',
          ph:'rah-BAHT'
        },
        {
          de:'umtauschen',
          art:'',
          pl:'',
          en:'to exchange',
          ph:'OOM-tow-shen'
        }
      ]
    },
    {
      id:'t3',
      title:'Dialogue: At the clothes shop',
      time:'3 min',
      kind:'dialogue',
      lines:[
        {
          who:'A',
          de:'Guten Tag! Ich suche eine rote Bluse.',
          en:'Good day! I am looking for a red blouse.',
          ph:'GOO-ten TAHK! ish ZOO-khe INE ROH-te BLOO-ze'
        },
        {
          who:'B',
          de:'Welche Größe haben Sie?',
          en:'What size are you?',
          ph:'VEL-khe GROO-se HAH-ben zee'
        },
        {
          who:'A',
          de:'Größe 38, bitte.',
          en:'Size 38, please.',
          ph:'GROO-se ahkht-oont-DRAI-sish, BIT-te'
        },
        {
          who:'B',
          de:'Die Umkleidekabine ist dort. Sie können die Bluse anprobieren.',
          en:'The changing room is over there. You can try on the blouse.',
          ph:'dee OOM-klai-de-kah-BEE-ne ist dort. zee KOEN-nen dee BLOO-ze AHN-pro-bee-ren'
        },
        {
          who:'A',
          de:'Die Bluse passt gut. Was kostet sie?',
          en:'The blouse fits well. How much is it?',
          ph:'dee BLOO-ze pahst goot. vahs KOS-tet zee'
        },
        {
          who:'B',
          de:'Sie kostet 29 Euro 99. Möchten Sie mit Karte zahlen?',
          en:'It costs 29 euros 99. Would you like to pay by card?',
          ph:'zee KOS-tet NOIN-oont-TSVAHN-tsish OY-ro NOIN-oont-NOIN-tsish. MOEKH-ten zee mit KAHR-te TSAH-len'
        }
      ],
      speak:{
        prompt:'Say out loud: "Ich suche eine rote Bluse in Größe 38. Die Bluse passt gut."',
        model:[
          'Ich suche eine rote Bluse.',
          'Welche Größe haben Sie?',
          'Die Bluse passt gut.',
          'Ich möchte mit Karte zahlen.'
        ]
      }
    },
    {
      id:'t4',
      title:'Grammar: Comparative & superlative',
      time:'3 min',
      kind:'grammar',
      grammar:{
        title:'Comparative, superlative & adjective endings',
        plain:'You know the comparative: billiger = cheaper. The superlative is "the cheapest": am billigsten — "Das ist die billigste Jacke." Adjectives before a noun also take endings: "ein rotes Kleid" (a red dress), "der rote Rock" (the red skirt). Learn the ending WITH the phrase.',
        rule:'billig → billiger → am billigsten · gut → besser → am besten · ein + -es: ein rotes Kleid · der/die/das + -e: der rote Rock, die rote Bluse, das rote Hemd',
        examples:[
          {
            de:'Diese Jacke ist billiger als die rote.',
            en:'This jacket is cheaper than the red one.',
            ph:'DEE-ze YAH-ke ist BIL-li-ger ahls dee ROH-te'
          },
          {
            de:'Das ist die billigste Jacke im Geschäft.',
            en:'That is the cheapest jacket in the shop.',
            ph:'dahs ist dee BIL-lish-ste YAH-ke im ge-SHEFT'
          },
          {
            de:'Ich möchte ein rotes Kleid.',
            en:'I would like a red dress.',
            ph:'ish MOEKH-te ine ROH-tes klite'
          }
        ]
      }
    },
    {
      id:'t5',
      title:'Quiz: comparatives',
      time:'3 min',
      kind:'quiz',
      questions:[
        {q:'What is the superlative of "billig"?', options:['billiger', 'am billigsten', 'billigster', 'mehr billig'], answer:1,
         why:'The superlative is "am billigsten": "Das ist die billigste Jacke."'},
        {q:'Fill in: "Ich möchte ein ___ Kleid." (red)', options:['rote', 'rotes', 'roter', 'rot'], answer:1,
         why:'"ein" + neuter noun takes -es: ein rotes Kleid.'},
        {q:'Fill in: "___ Jacke ist die billigste." (the)', options:['Der', 'Die', 'Das', 'Den'], answer:1,
         why:'"die billigste Jacke" — Jacke is feminine, so "die".'}
      ]
    },
    {
      id:'t6',
      title:'Quiz: clothes & prices',
      time:'2 min',
      kind:'quiz',
      questions:[
        {q:'"gut → besser → ...?"', options:['am gutesten', 'am besten', 'bester', 'mehr gut'], answer:1,
         why:'gut is irregular: gut → besser → am besten.'},
        {q:'What does "anprobieren" mean?', options:['to buy', 'to try on', 'to pay', 'to exchange'], answer:1,
         why:'anprobieren = to try on: "Ich möchte die Bluse anprobieren."'}
      ]
    }
  ],
  next:'Next: Chapter 5 — At Home & Furniture',
};

CHAPTERS['A2-5'] = {
  id:'A2-5',
  n:5,
  level:'A2',
  title:'At Home & Furniture',
  time:'17 min',
  concept:'Describe a flat in detail, say where things are, and talk about moving house — with two-way prepositions.',
  dialogue:[
    {
      who:'A',
      de:'Wo ist der Teppich?',
      en:'Where is the carpet?',
      ph:'voh ist dair TEP-pish'
    },
    {
      who:'B',
      de:'Der Teppich liegt im Wohnzimmer.',
      en:'The carpet is in the living room.',
      ph:'dair TEP-pish leekt im VOHN-tsim-mer'
    },
    {
      who:'A',
      de:'Und wo hängt das Bild?',
      en:'And where does the picture hang?',
      ph:'oont voh hengt dahs bilt'
    },
    {
      who:'B',
      de:'Das Bild hängt an der Wand, über dem Sofa.',
      en:'The picture hangs on the wall, above the sofa.',
      ph:'dahs bilt hengt ahn dair vahnt, UE-ber daym ZOH-fah'
    },
    {
      who:'A',
      de:'Ich stelle die Lampe neben das Bett.',
      en:'I am putting the lamp next to the bed.',
      ph:'ish SHTEL-le dee LAHM-pe NAY-ben dahs bet'
    },
    {
      who:'B',
      de:'Gut! Die Wohnung ist jetzt schön eingerichtet.',
      en:'Good! The flat is nicely furnished now.',
      ph:'goot! dee VOHN-noong ist yetst shoen INE-ge-rikh-tet'
    }
  ],
  vocab:[
    {
      de:'Bild',
      art:'das',
      pl:'Bilder',
      en:'picture, photo',
      ph:'bilt'
    },
    {
      de:'Lampe',
      art:'die',
      pl:'Lampen',
      en:'lamp',
      ph:'LAHM-pe'
    },
    {
      de:'Balkon',
      art:'der',
      pl:'Balkone',
      en:'balcony',
      ph:'bahl-KOHN'
    },
    {
      de:'Garten',
      art:'der',
      pl:'Gärten',
      en:'garden',
      ph:'GAHR-ten'
    },
    {
      de:'Tür',
      art:'die',
      pl:'Türen',
      en:'door',
      ph:'tuer'
    },
    {
      de:'Fenster',
      art:'das',
      pl:'Fenster',
      en:'window',
      ph:'FENS-ter'
    },
    {
      de:'Wand',
      art:'die',
      pl:'Wände',
      en:'wall',
      ph:'vahnt'
    },
    {
      de:'Boden',
      art:'der',
      pl:'Böden',
      en:'floor',
      ph:'BOH-den'
    },
    {
      de:'Decke',
      art:'die',
      pl:'Decken',
      en:'ceiling',
      ph:'DEK-ke'
    },
    {
      de:'Keller',
      art:'der',
      pl:'Keller',
      en:'cellar, basement',
      ph:'KEL-ler'
    },
    {
      de:'Dachboden',
      art:'der',
      pl:'Dachböden',
      en:'attic',
      ph:'DAHKH-boh-den'
    },
    {
      de:'Flur',
      art:'der',
      pl:'Flure',
      en:'hallway',
      ph:'floor'
    },
    {
      de:'Treppe',
      art:'die',
      pl:'Treppen',
      en:'stairs',
      ph:'TREP-pe'
    },
    {
      de:'Aufzug',
      art:'der',
      pl:'Aufzüge',
      en:'lift, elevator',
      ph:'OWF-tsook'
    },
    {
      de:'Heizung',
      art:'die',
      pl:'Heizungen',
      en:'heating',
      ph:'HAI-tsoong'
    },
    {
      de:'Herd',
      art:'der',
      pl:'Herde',
      en:'stove, cooker',
      ph:'hairt'
    },
    {
      de:'Kühlschrank',
      art:'der',
      pl:'Kühlschränke',
      en:'fridge',
      ph:'KUEL-shrahnk'
    },
    {
      de:'Waschmaschine',
      art:'die',
      pl:'Waschmaschinen',
      en:'washing machine',
      ph:'VAHSH-mah-shee-ne'
    },
    {
      de:'Spiegel',
      art:'der',
      pl:'Spiegel',
      en:'mirror',
      ph:'SHPEE-gel'
    },
    {
      de:'Dusche',
      art:'die',
      pl:'Duschen',
      en:'shower',
      ph:'DOO-she'
    },
    {
      de:'Badewanne',
      art:'die',
      pl:'Badewannen',
      en:'bathtub',
      ph:'BAH-de-vah-ne'
    },
    {
      de:'Handtuch',
      art:'das',
      pl:'Handtücher',
      en:'towel',
      ph:'HAHNT-tookh'
    },
    {
      de:'Kissen',
      art:'das',
      pl:'Kissen',
      en:'pillow',
      ph:'KIS-sen'
    },
    {
      de:'Pflanze',
      art:'die',
      pl:'Pflanzen',
      en:'plant',
      ph:'PFLAHN-tse'
    },
    {
      de:'hängen',
      art:'',
      pl:'',
      en:'to hang',
      ph:'HENG-en'
    },
    {
      de:'stellen',
      art:'',
      pl:'',
      en:'to put, to place (upright)',
      ph:'SHTEL-len'
    },
    {
      de:'legen',
      art:'',
      pl:'',
      en:'to put, to lay (flat)',
      ph:'LAY-gen'
    },
    {
      de:'sitzen',
      art:'',
      pl:'',
      en:'to sit',
      ph:'ZIT-sen'
    },
    {
      de:'liegen',
      art:'',
      pl:'',
      en:'to lie',
      ph:'LEE-gen'
    },
    {
      de:'Umzug',
      art:'der',
      pl:'Umzüge',
      en:'move (house)',
      ph:'OOM-tsook'
    },
    {
      de:'Adresse',
      art:'die',
      pl:'Adressen',
      en:'address',
      ph:'ah-DRES-se'
    },
    {
      de:'Stockwerk',
      art:'das',
      pl:'Stockwerke',
      en:'floor, storey',
      ph:'SHTOK-vairk'
    },
    {
      de:'neben',
      art:'',
      pl:'',
      en:'next to, beside',
      ph:'NAY-ben'
    },
    {
      de:'unter',
      art:'',
      pl:'',
      en:'under',
      ph:'OON-ter'
    },
    {
      de:'über',
      art:'',
      pl:'',
      en:'above, over',
      ph:'UE-ber'
    },
    {
      de:'vor',
      art:'',
      pl:'',
      en:'in front of',
      ph:'fohr'
    },
    {
      de:'hinter',
      art:'',
      pl:'',
      en:'behind',
      ph:'HIN-ter'
    },
    {
      de:'zwischen',
      art:'',
      pl:'',
      en:'between',
      ph:'TSVISH-en'
    },
    {
      de:'Regal',
      art:'das',
      pl:'Regale',
      en:'shelf',
      ph:'re-GAHL'
    },
    {
      de:'Teppich',
      art:'der',
      pl:'Teppiche',
      en:'carpet',
      ph:'TEP-pish'
    },
    {
      de:'Gardine',
      art:'die',
      pl:'Gardinen',
      en:'curtain',
      ph:'gahr-DEE-ne'
    },
    {
      de:'umziehen',
      art:'',
      pl:'',
      en:'to move house',
      ph:'OOM-tsee-en'
    },
    {
      de:'Miete',
      art:'die',
      pl:'Mieten',
      en:'rent',
      ph:'MEE-te'
    },
    {
      de:'Nachbar',
      art:'der',
      pl:'Nachbarn',
      en:'neighbour (male)',
      ph:'NAHKH-bahr'
    },
    {
      de:'Nachbarin',
      art:'die',
      pl:'Nachbarinnen',
      en:'neighbour (female)',
      ph:'NAHKH-bah-rin'
    },
    {
      de:'einrichten',
      art:'',
      pl:'',
      en:'to furnish',
      ph:'INE-rikh-ten'
    }
  ],
  grammar:{
    title:'Two-way prepositions — in, auf, an, unter, über, vor, hinter, neben, zwischen',
    plain:'These 9 prepositions take the dative for "where?" (position) and the accusative for "where to?" (movement). "Das Bild hängt an der Wand." (dative — where?) vs "Ich hänge das Bild an die Wand." (accusative — where to?) Ask "Wo?" → dative. Ask "Wohin?" → accusative.',
    rule:'Wo? (position) = dative: an der Wand, im Wohnzimmer · Wohin? (movement) = accusative: an die Wand, ins Wohnzimmer',
    examples:[
      {
        de:'Das Bild hängt an der Wand.',
        en:'The picture hangs on the wall. (Wo? → dative)',
        ph:'dahs bilt hengt ahn dair vahnt'
      },
      {
        de:'Ich hänge das Bild an die Wand.',
        en:'I am hanging the picture on the wall. (Wohin? → accusative)',
        ph:'ish HENG-e dahs bilt ahn dee vahnt'
      },
      {
        de:'Der Teppich liegt im Wohnzimmer.',
        en:'The carpet is in the living room.',
        ph:'dair TEP-pish leekt im VOHN-tsim-mer'
      }
    ]
  },
  quiz:[
    {q:'Fill in: "Das Bild hängt ___ Wand."', options:['an der', 'an die', 'an dem', 'an das'], answer:0,
     why:'"Wo?" → dative: an der Wand. The picture is already there.'},
    {q:'Fill in: "Ich hänge das Bild ___ Wand."', options:['an der', 'an die', 'an dem', 'in der'], answer:1,
     why:'"Wohin?" → accusative: an die Wand. You are moving it there.'},
    {q:'"Der Teppich liegt ___ Wohnzimmer."', options:['im', 'in das', 'ins', 'am'], answer:0,
     why:'"im" = in dem. Wo? → dative: im Wohnzimmer.'},
    {q:'Which preposition means "between"?', options:['neben', 'zwischen', 'hinter', 'unter'], answer:1,
     why:'zwischen = between. neben = next to, hinter = behind, unter = under.'},
    {q:'What does "umziehen" mean?', options:['to clean', 'to move house', 'to paint', 'to repair'], answer:1,
     why:'umziehen = to move house. "Ich ziehe nächste Woche um."'}
  ],
  speak:{
    prompt:'Describe your room out loud: "Das Bild hängt an der Wand. Der Teppich liegt im Wohnzimmer."',
    model:[
      'Das Bild hängt an der Wand.',
      'Ich stelle die Lampe neben das Bett.',
      'Der Teppich liegt im Wohnzimmer.'
    ]
  },
  recap:[
    'Two-way prepositions: an, auf, in, unter, über, vor, hinter, neben, zwischen.',
    'Wo? (position) = dative: an der Wand, im Wohnzimmer.',
    'Wohin? (movement) = accusative: an die Wand, ins Wohnzimmer.',
    'Home: der Teppich, das Bild, die Lampe, der Balkon, die Miete.'
  ],
  tip:'Memory tip: ask "Wo?" or "Wohin?" before you choose the case. "Wo ist es?" → dative. "Wohin geht es?" → accusative.',
  extra:[
    {
      q:'Say "The picture hangs on the wall."',
      a:'Das Bild hängt an der Wand.'
    },
    {
      q:'Say "I put the lamp next to the bed."',
      a:'Ich stelle die Lampe neben das Bett.'
    },
    {
      q:'What does "zwischen" mean?',
      a:'between — "Das Bild hängt zwischen den Fenstern."'
    }
  ],
  topics:[
    {
      id:'t1',
      title:'Rooms & furniture words',
      time:'3 min',
      kind:'words',
      vocab:[
        {
          de:'Bild',
          art:'das',
          pl:'Bilder',
          en:'picture, photo',
          ph:'bilt'
        },
        {
          de:'Lampe',
          art:'die',
          pl:'Lampen',
          en:'lamp',
          ph:'LAHM-pe'
        },
        {
          de:'Balkon',
          art:'der',
          pl:'Balkone',
          en:'balcony',
          ph:'bahl-KOHN'
        },
        {
          de:'Garten',
          art:'der',
          pl:'Gärten',
          en:'garden',
          ph:'GAHR-ten'
        },
        {
          de:'Tür',
          art:'die',
          pl:'Türen',
          en:'door',
          ph:'tuer'
        },
        {
          de:'Fenster',
          art:'das',
          pl:'Fenster',
          en:'window',
          ph:'FENS-ter'
        },
        {
          de:'Wand',
          art:'die',
          pl:'Wände',
          en:'wall',
          ph:'vahnt'
        },
        {
          de:'Boden',
          art:'der',
          pl:'Böden',
          en:'floor',
          ph:'BOH-den'
        },
        {
          de:'Decke',
          art:'die',
          pl:'Decken',
          en:'ceiling',
          ph:'DEK-ke'
        },
        {
          de:'Keller',
          art:'der',
          pl:'Keller',
          en:'cellar, basement',
          ph:'KEL-ler'
        },
        {
          de:'Dachboden',
          art:'der',
          pl:'Dachböden',
          en:'attic',
          ph:'DAHKH-boh-den'
        },
        {
          de:'Flur',
          art:'der',
          pl:'Flure',
          en:'hallway',
          ph:'floor'
        },
        {
          de:'Treppe',
          art:'die',
          pl:'Treppen',
          en:'stairs',
          ph:'TREP-pe'
        },
        {
          de:'Aufzug',
          art:'der',
          pl:'Aufzüge',
          en:'lift, elevator',
          ph:'OWF-tsook'
        },
        {
          de:'Heizung',
          art:'die',
          pl:'Heizungen',
          en:'heating',
          ph:'HAI-tsoong'
        },
        {
          de:'Herd',
          art:'der',
          pl:'Herde',
          en:'stove, cooker',
          ph:'hairt'
        },
        {
          de:'Kühlschrank',
          art:'der',
          pl:'Kühlschränke',
          en:'fridge',
          ph:'KUEL-shrahnk'
        },
        {
          de:'Waschmaschine',
          art:'die',
          pl:'Waschmaschinen',
          en:'washing machine',
          ph:'VAHSH-mah-shee-ne'
        },
        {
          de:'Spiegel',
          art:'der',
          pl:'Spiegel',
          en:'mirror',
          ph:'SHPEE-gel'
        },
        {
          de:'Dusche',
          art:'die',
          pl:'Duschen',
          en:'shower',
          ph:'DOO-she'
        },
        {
          de:'Badewanne',
          art:'die',
          pl:'Badewannen',
          en:'bathtub',
          ph:'BAH-de-vah-ne'
        },
        {
          de:'Handtuch',
          art:'das',
          pl:'Handtücher',
          en:'towel',
          ph:'HAHNT-tookh'
        },
        {
          de:'Kissen',
          art:'das',
          pl:'Kissen',
          en:'pillow',
          ph:'KIS-sen'
        }
      ]
    },
    {
      id:'t2',
      title:'Position words',
      time:'3 min',
      kind:'words',
      vocab:[
        {
          de:'Pflanze',
          art:'die',
          pl:'Pflanzen',
          en:'plant',
          ph:'PFLAHN-tse'
        },
        {
          de:'hängen',
          art:'',
          pl:'',
          en:'to hang',
          ph:'HENG-en'
        },
        {
          de:'stellen',
          art:'',
          pl:'',
          en:'to put, to place (upright)',
          ph:'SHTEL-len'
        },
        {
          de:'legen',
          art:'',
          pl:'',
          en:'to put, to lay (flat)',
          ph:'LAY-gen'
        },
        {
          de:'sitzen',
          art:'',
          pl:'',
          en:'to sit',
          ph:'ZIT-sen'
        },
        {
          de:'liegen',
          art:'',
          pl:'',
          en:'to lie',
          ph:'LEE-gen'
        },
        {
          de:'Umzug',
          art:'der',
          pl:'Umzüge',
          en:'move (house)',
          ph:'OOM-tsook'
        },
        {
          de:'Adresse',
          art:'die',
          pl:'Adressen',
          en:'address',
          ph:'ah-DRES-se'
        },
        {
          de:'Stockwerk',
          art:'das',
          pl:'Stockwerke',
          en:'floor, storey',
          ph:'SHTOK-vairk'
        },
        {
          de:'neben',
          art:'',
          pl:'',
          en:'next to, beside',
          ph:'NAY-ben'
        },
        {
          de:'unter',
          art:'',
          pl:'',
          en:'under',
          ph:'OON-ter'
        },
        {
          de:'über',
          art:'',
          pl:'',
          en:'above, over',
          ph:'UE-ber'
        },
        {
          de:'vor',
          art:'',
          pl:'',
          en:'in front of',
          ph:'fohr'
        },
        {
          de:'hinter',
          art:'',
          pl:'',
          en:'behind',
          ph:'HIN-ter'
        },
        {
          de:'zwischen',
          art:'',
          pl:'',
          en:'between',
          ph:'TSVISH-en'
        },
        {
          de:'Regal',
          art:'das',
          pl:'Regale',
          en:'shelf',
          ph:'re-GAHL'
        },
        {
          de:'Teppich',
          art:'der',
          pl:'Teppiche',
          en:'carpet',
          ph:'TEP-pish'
        },
        {
          de:'Gardine',
          art:'die',
          pl:'Gardinen',
          en:'curtain',
          ph:'gahr-DEE-ne'
        },
        {
          de:'umziehen',
          art:'',
          pl:'',
          en:'to move house',
          ph:'OOM-tsee-en'
        },
        {
          de:'Miete',
          art:'die',
          pl:'Mieten',
          en:'rent',
          ph:'MEE-te'
        },
        {
          de:'Nachbar',
          art:'der',
          pl:'Nachbarn',
          en:'neighbour (male)',
          ph:'NAHKH-bahr'
        },
        {
          de:'Nachbarin',
          art:'die',
          pl:'Nachbarinnen',
          en:'neighbour (female)',
          ph:'NAHKH-bah-rin'
        },
        {
          de:'einrichten',
          art:'',
          pl:'',
          en:'to furnish',
          ph:'INE-rikh-ten'
        }
      ]
    },
    {
      id:'t3',
      title:'Dialogue: Where is it?',
      time:'3 min',
      kind:'dialogue',
      lines:[
        {
          who:'A',
          de:'Wo ist der Teppich?',
          en:'Where is the carpet?',
          ph:'voh ist dair TEP-pish'
        },
        {
          who:'B',
          de:'Der Teppich liegt im Wohnzimmer.',
          en:'The carpet is in the living room.',
          ph:'dair TEP-pish leekt im VOHN-tsim-mer'
        },
        {
          who:'A',
          de:'Und wo hängt das Bild?',
          en:'And where does the picture hang?',
          ph:'oont voh hengt dahs bilt'
        },
        {
          who:'B',
          de:'Das Bild hängt an der Wand, über dem Sofa.',
          en:'The picture hangs on the wall, above the sofa.',
          ph:'dahs bilt hengt ahn dair vahnt, UE-ber daym ZOH-fah'
        },
        {
          who:'A',
          de:'Ich stelle die Lampe neben das Bett.',
          en:'I am putting the lamp next to the bed.',
          ph:'ish SHTEL-le dee LAHM-pe NAY-ben dahs bet'
        },
        {
          who:'B',
          de:'Gut! Die Wohnung ist jetzt schön eingerichtet.',
          en:'Good! The flat is nicely furnished now.',
          ph:'goot! dee VOHN-noong ist yetst shoen INE-ge-rikh-tet'
        }
      ],
      speak:{
        prompt:'Describe your room out loud: "Das Bild hängt an der Wand. Der Teppich liegt im Wohnzimmer."',
        model:[
          'Das Bild hängt an der Wand.',
          'Ich stelle die Lampe neben das Bett.',
          'Der Teppich liegt im Wohnzimmer.'
        ]
      }
    },
    {
      id:'t4',
      title:'Grammar: Two-way prepositions',
      time:'3 min',
      kind:'grammar',
      grammar:{
        title:'Two-way prepositions — in, auf, an, unter, über, vor, hinter, neben, zwischen',
        plain:'These 9 prepositions take the dative for "where?" (position) and the accusative for "where to?" (movement). "Das Bild hängt an der Wand." (dative — where?) vs "Ich hänge das Bild an die Wand." (accusative — where to?) Ask "Wo?" → dative. Ask "Wohin?" → accusative.',
        rule:'Wo? (position) = dative: an der Wand, im Wohnzimmer · Wohin? (movement) = accusative: an die Wand, ins Wohnzimmer',
        examples:[
          {
            de:'Das Bild hängt an der Wand.',
            en:'The picture hangs on the wall. (Wo? → dative)',
            ph:'dahs bilt hengt ahn dair vahnt'
          },
          {
            de:'Ich hänge das Bild an die Wand.',
            en:'I am hanging the picture on the wall. (Wohin? → accusative)',
            ph:'ish HENG-e dahs bilt ahn dee vahnt'
          },
          {
            de:'Der Teppich liegt im Wohnzimmer.',
            en:'The carpet is in the living room.',
            ph:'dair TEP-pish leekt im VOHN-tsim-mer'
          }
        ]
      }
    },
    {
      id:'t5',
      title:'Quiz: Wo or Wohin?',
      time:'3 min',
      kind:'quiz',
      questions:[
        {q:'Fill in: "Das Bild hängt ___ Wand."', options:['an der', 'an die', 'an dem', 'an das'], answer:0,
         why:'"Wo?" → dative: an der Wand. The picture is already there.'},
        {q:'Fill in: "Ich hänge das Bild ___ Wand."', options:['an der', 'an die', 'an dem', 'in der'], answer:1,
         why:'"Wohin?" → accusative: an die Wand. You are moving it there.'},
        {q:'"Der Teppich liegt ___ Wohnzimmer."', options:['im', 'in das', 'ins', 'am'], answer:0,
         why:'"im" = in dem. Wo? → dative: im Wohnzimmer.'}
      ]
    },
    {
      id:'t6',
      title:'Quiz: at home',
      time:'2 min',
      kind:'quiz',
      questions:[
        {q:'Which preposition means "between"?', options:['neben', 'zwischen', 'hinter', 'unter'], answer:1,
         why:'zwischen = between. neben = next to, hinter = behind, unter = under.'},
        {q:'What does "umziehen" mean?', options:['to clean', 'to move house', 'to paint', 'to repair'], answer:1,
         why:'umziehen = to move house. "Ich ziehe nächste Woche um."'}
      ]
    }
  ],
  next:'Next: Chapter 6 — Health & At the Doctor',
};

CHAPTERS['A2-6'] = {
  id:'A2-6',
  n:6,
  level:'A2',
  title:'Health & At the Doctor',
  time:'17 min',
  concept:'Make a doctor\'s appointment, describe symptoms, and talk about feeling unwell — with the past of modal verbs and reflexive verbs.',
  dialogue:[
    {
      who:'A',
      de:'Guten Tag, Praxis Dr. Schmidt. Wie kann ich Ihnen helfen?',
      en:'Good day, Dr. Schmidt\'s practice. How can I help you?',
      ph:'GOO-ten TAHK, PRAHK-sis DOK-tor shmit. vee kahn ish EE-nen HEL-fen'
    },
    {
      who:'B',
      de:'Guten Tag, ich möchte einen Termin machen. Ich habe Fieber und Husten.',
      en:'Good day, I would like to make an appointment. I have a fever and a cough.',
      ph:'GOO-ten TAHK, ish MOEKH-te INE-en tair-MEEN MAH-khen. ish HAH-be FEE-ber oont HOOS-ten'
    },
    {
      who:'A',
      de:'Können Sie morgen um 10 Uhr kommen?',
      en:'Can you come tomorrow at 10 o\'clock?',
      ph:'KOEN-nen zee MOR-gen oom tsayn oor KOM-men'
    },
    {
      who:'B',
      de:'Ja, das geht. Ich konnte letzte Nacht nicht schlafen.',
      en:'Yes, that works. I could not sleep last night.',
      ph:'yah, dahs gayt. ish KONT-te LETS-te nahkht nikht SHLAH-fen'
    },
    {
      who:'A',
      de:'Kommen Sie morgen. Bringen Sie bitte Ihre Krankenkassenkarte mit.',
      en:'Come tomorrow. Please bring your health insurance card.',
      ph:'KOM-men zee MOR-gen. BRING-en zee BIT-te EE-re KRAHN-ken-kahs-sen-kahr-te mit'
    },
    {
      who:'B',
      de:'Danke! Auf Wiederhören.',
      en:'Thank you! Goodbye (on the phone).',
      ph:'DAHN-ke! owf VEE-der-hoe-ren'
    }
  ],
  vocab:[
    {
      de:'Schnupfen',
      art:'der',
      pl:'',
      en:'cold (runny nose)',
      ph:'SHNOOP-fen'
    },
    {
      de:'Grippe',
      art:'die',
      pl:'Grippen',
      en:'flu',
      ph:'GRIP-pe'
    },
    {
      de:'Erkältung',
      art:'die',
      pl:'Erkältungen',
      en:'cold, chill',
      ph:'air-KEL-toong'
    },
    {
      de:'Kopfschmerzen',
      art:'die',
      pl:'',
      en:'headache',
      ph:'KOPF-shmair-tsen'
    },
    {
      de:'Bauchschmerzen',
      art:'die',
      pl:'',
      en:'stomach ache',
      ph:'BOWKH-shmair-tsen'
    },
    {
      de:'Zahnschmerz',
      art:'der',
      pl:'Zahnschmerzen',
      en:'toothache',
      ph:'TSAHN-shmairts'
    },
    {
      de:'Fieber',
      art:'das',
      pl:'',
      en:'fever',
      ph:'FEE-ber'
    },
    {
      de:'Tablette',
      art:'die',
      pl:'Tabletten',
      en:'tablet, pill',
      ph:'tah-BLET-te'
    },
    {
      de:'Medizin',
      art:'die',
      pl:'Medizinen',
      en:'medicine',
      ph:'me-dee-TSEEN'
    },
    {
      de:'Tropfen',
      art:'der',
      pl:'Tropfen',
      en:'drop (medicine)',
      ph:'TROP-fen'
    },
    {
      de:'Verband',
      art:'der',
      pl:'Verbände',
      en:'bandage',
      ph:'fair-BAHNT'
    },
    {
      de:'Pflaster',
      art:'das',
      pl:'Pflaster',
      en:'plaster, band-aid',
      ph:'PFLAHS-ter'
    },
    {
      de:'Behandlung',
      art:'die',
      pl:'Behandlungen',
      en:'treatment',
      ph:'be-HAHNT-loong'
    },
    {
      de:'Arzttermin',
      art:'der',
      pl:'Arzttermine',
      en:'doctor\'s appointment',
      ph:'AHRTST-tair-meen'
    },
    {
      de:'Ärztin',
      art:'die',
      pl:'Ärztinnen',
      en:'doctor (female)',
      ph:'AIRTS-tin'
    },
    {
      de:'Apotheker',
      art:'der',
      pl:'Apotheker',
      en:'pharmacist',
      ph:'ah-po-TAY-ker'
    },
    {
      de:'sich fühlen',
      art:'',
      pl:'',
      en:'to feel (well/unwell)',
      ph:'zikh FUE-len'
    },
    {
      de:'sich ausruhen',
      art:'',
      pl:'',
      en:'to rest',
      ph:'zikh OWS-roo-en'
    },
    {
      de:'sich erholen',
      art:'',
      pl:'',
      en:'to recover',
      ph:'zikh air-HOH-len'
    },
    {
      de:'sich erkälten',
      art:'',
      pl:'',
      en:'to catch a cold',
      ph:'zikh air-KEL-ten'
    },
    {
      de:'weh tun',
      art:'',
      pl:'',
      en:'to hurt, to ache',
      ph:'vay toon'
    },
    {
      de:'Krankheit',
      art:'die',
      pl:'Krankheiten',
      en:'illness, disease',
      ph:'KRAHNK-hite'
    },
    {
      de:'Notfall',
      art:'der',
      pl:'Notfälle',
      en:'emergency',
      ph:'NOHT-fahl'
    },
    {
      de:'Krankenwagen',
      art:'der',
      pl:'Krankenwagen',
      en:'ambulance',
      ph:'KRAHN-ken-vah-gen'
    },
    {
      de:'Notaufnahme',
      art:'die',
      pl:'Notaufnahmen',
      en:'emergency room',
      ph:'NOHT-owf-nah-me'
    },
    {
      de:'Wartezimmer',
      art:'das',
      pl:'Wartezimmer',
      en:'waiting room',
      ph:'VAHR-te-tsim-mer'
    },
    {
      de:'Sprechstunde',
      art:'die',
      pl:'Sprechstunden',
      en:'consultation hours',
      ph:'SHPREKH-shtoon-de'
    },
    {
      de:'Untersuchung',
      art:'die',
      pl:'Untersuchungen',
      en:'examination',
      ph:'oon-ter-ZOO-khoong'
    },
    {
      de:'Puls',
      art:'der',
      pl:'Pulse',
      en:'pulse',
      ph:'pools'
    },
    {
      de:'Temperatur',
      art:'die',
      pl:'Temperaturen',
      en:'temperature',
      ph:'tem-pe-rah-TOOR'
    },
    {
      de:'messen',
      art:'',
      pl:'',
      en:'to measure',
      ph:'MES-sen'
    },
    {
      de:'einnehmen',
      art:'',
      pl:'',
      en:'to take (medicine)',
      ph:'INE-nay-men'
    },
    {
      de:'Allergie',
      art:'die',
      pl:'Allergien',
      en:'allergy',
      ph:'ah-lair-GEE'
    },
    {
      de:'Impfung',
      art:'die',
      pl:'Impfungen',
      en:'vaccination',
      ph:'IMP-foong'
    },
    {
      de:'impfen',
      art:'',
      pl:'',
      en:'to vaccinate',
      ph:'IMP-fen'
    },
    {
      de:'Impfpass',
      art:'der',
      pl:'Impfpässe',
      en:'vaccination card',
      ph:'IMPF-pahs'
    },
    {
      de:'Versicherung',
      art:'die',
      pl:'Versicherungen',
      en:'insurance',
      ph:'fair-ZIKH-e-roong'
    },
    {
      de:'versichert',
      art:'',
      pl:'',
      en:'insured',
      ph:'fair-ZIKH-ert'
    },
    {
      de:'Termin',
      art:'der',
      pl:'Termine',
      en:'appointment',
      ph:'tair-MEEN'
    },
    {
      de:'Praxis',
      art:'die',
      pl:'Praxen',
      en:'doctor\'s office',
      ph:'PRAHK-sis'
    },
    {
      de:'Krankenkasse',
      art:'die',
      pl:'Krankenkassen',
      en:'health insurance',
      ph:'KRAHN-ken-kah-se'
    },
    {
      de:'Rezept',
      art:'das',
      pl:'Rezepte',
      en:'prescription',
      ph:'reh-TSEPT'
    },
    {
      de:'Hals',
      art:'der',
      pl:'Hälse',
      en:'throat, neck',
      ph:'hahls'
    },
    {
      de:'husten',
      art:'',
      pl:'',
      en:'to cough',
      ph:'HOOS-ten'
    },
    {
      de:'niesen',
      art:'',
      pl:'',
      en:'to sneeze',
      ph:'NEE-zen'
    },
    {
      de:'Husten',
      art:'der',
      pl:'',
      en:'cough',
      ph:'HOOS-ten'
    }
  ],
  grammar:{
    title:'Past of modal verbs — and reflexive verbs',
    plain:'Modal verbs also have a simple past: können → konnte (could), müssen → musste (had to), wollen → wollte (wanted). "Ich konnte nicht schlafen." = I could not sleep. And at the doctor you need reflexive verbs: "Ich fühle mich nicht gut." — "sich" changes with the person: ich fühle mich, du fühlst dich, er fühlt sich, wir fühlen uns.',
    rule:'können → konnte · müssen → musste · wollen → wollte · reflexive: mich, dich, sich, uns, euch, sich',
    examples:[
      {
        de:'Ich konnte letzte Nacht nicht schlafen.',
        en:'I could not sleep last night.',
        ph:'ish KONT-te LETS-te nahkht nikht SHLAH-fen'
      },
      {
        de:'Ich musste zum Arzt gehen.',
        en:'I had to go to the doctor.',
        ph:'ish MOOS-te tsoom ahrtst GAY-en'
      },
      {
        de:'Ich fühle mich nicht gut.',
        en:'I do not feel well.',
        ph:'ish FUE-le mikh nikht goot'
      }
    ]
  },
  quiz:[
    {q:'Fill in: "Ich ___ letzte Nacht nicht schlafen." (could)', options:['kann', 'konnte', 'können', 'gekonnt'], answer:1,
     why:'können → konnte. "Ich konnte nicht schlafen."'},
    {q:'Fill in: "Ich ___ zum Arzt gehen." (had to)', options:['muss', 'musste', 'müssen', 'gemusst'], answer:1,
     why:'müssen → musste. "Ich musste zum Arzt gehen."'},
    {q:'Fill in: "Ich fühle ___ nicht gut."', options:['mich', 'dich', 'sich', 'mir'], answer:0,
     why:'Reflexive for "ich" is "mich": Ich fühle mich nicht gut.'},
    {q:'What does "Ich habe Fieber" mean?', options:['I have a cold', 'I have a fever', 'I have a cough', 'I have a headache'], answer:1,
     why:'Fieber = fever. Husten = cough, Kopfschmerzen = headache.'},
    {q:'What is "das Rezept"?', options:['the appointment', 'the prescription', 'the insurance', 'the pharmacy'], answer:1,
     why:'das Rezept = the prescription. der Termin = the appointment.'}
  ],
  speak:{
    prompt:'Say out loud: "Ich möchte einen Termin machen. Ich habe Fieber und Husten."',
    model:[
      'Ich möchte einen Termin machen.',
      'Ich habe Fieber und Husten.',
      'Ich konnte letzte Nacht nicht schlafen.',
      'Ich fühle mich nicht gut.'
    ]
  },
  recap:[
    'Modal past: können → konnte, müssen → musste, wollen → wollte.',
    'Reflexive: ich fühle mich, du fühlst dich, er fühlt sich.',
    'Doctor words: der Termin, die Praxis, die Krankenkasse, das Rezept.',
    'Symptoms: das Fieber, der Husten, der Schnupfen, die Kopfschmerzen.'
  ],
  tip:'Memory tip: at the doctor, start with "Ich fühle mich nicht gut." and "Ich habe ..." — then name the symptom: Fieber, Husten, Kopfschmerzen.',
  extra:[
    {
      q:'Say "I could not sleep last night."',
      a:'Ich konnte letzte Nacht nicht schlafen.'
    },
    {
      q:'Say "I do not feel well."',
      a:'Ich fühle mich nicht gut.'
    },
    {
      q:'What is the past of "wollen" for "ich"?',
      a:'ich wollte — "Ich wollte zum Arzt gehen."'
    }
  ],
  topics:[
    {
      id:'t1',
      title:'Symptom words',
      time:'3 min',
      kind:'words',
      vocab:[
        {
          de:'Schnupfen',
          art:'der',
          pl:'',
          en:'cold (runny nose)',
          ph:'SHNOOP-fen'
        },
        {
          de:'Grippe',
          art:'die',
          pl:'Grippen',
          en:'flu',
          ph:'GRIP-pe'
        },
        {
          de:'Erkältung',
          art:'die',
          pl:'Erkältungen',
          en:'cold, chill',
          ph:'air-KEL-toong'
        },
        {
          de:'Kopfschmerzen',
          art:'die',
          pl:'',
          en:'headache',
          ph:'KOPF-shmair-tsen'
        },
        {
          de:'Bauchschmerzen',
          art:'die',
          pl:'',
          en:'stomach ache',
          ph:'BOWKH-shmair-tsen'
        },
        {
          de:'Zahnschmerz',
          art:'der',
          pl:'Zahnschmerzen',
          en:'toothache',
          ph:'TSAHN-shmairts'
        },
        {
          de:'Fieber',
          art:'das',
          pl:'',
          en:'fever',
          ph:'FEE-ber'
        },
        {
          de:'Tablette',
          art:'die',
          pl:'Tabletten',
          en:'tablet, pill',
          ph:'tah-BLET-te'
        },
        {
          de:'Medizin',
          art:'die',
          pl:'Medizinen',
          en:'medicine',
          ph:'me-dee-TSEEN'
        },
        {
          de:'Tropfen',
          art:'der',
          pl:'Tropfen',
          en:'drop (medicine)',
          ph:'TROP-fen'
        },
        {
          de:'Verband',
          art:'der',
          pl:'Verbände',
          en:'bandage',
          ph:'fair-BAHNT'
        },
        {
          de:'Pflaster',
          art:'das',
          pl:'Pflaster',
          en:'plaster, band-aid',
          ph:'PFLAHS-ter'
        },
        {
          de:'Behandlung',
          art:'die',
          pl:'Behandlungen',
          en:'treatment',
          ph:'be-HAHNT-loong'
        },
        {
          de:'Arzttermin',
          art:'der',
          pl:'Arzttermine',
          en:'doctor\'s appointment',
          ph:'AHRTST-tair-meen'
        },
        {
          de:'Ärztin',
          art:'die',
          pl:'Ärztinnen',
          en:'doctor (female)',
          ph:'AIRTS-tin'
        },
        {
          de:'Apotheker',
          art:'der',
          pl:'Apotheker',
          en:'pharmacist',
          ph:'ah-po-TAY-ker'
        },
        {
          de:'sich fühlen',
          art:'',
          pl:'',
          en:'to feel (well/unwell)',
          ph:'zikh FUE-len'
        },
        {
          de:'sich ausruhen',
          art:'',
          pl:'',
          en:'to rest',
          ph:'zikh OWS-roo-en'
        },
        {
          de:'sich erholen',
          art:'',
          pl:'',
          en:'to recover',
          ph:'zikh air-HOH-len'
        },
        {
          de:'sich erkälten',
          art:'',
          pl:'',
          en:'to catch a cold',
          ph:'zikh air-KEL-ten'
        },
        {
          de:'weh tun',
          art:'',
          pl:'',
          en:'to hurt, to ache',
          ph:'vay toon'
        },
        {
          de:'Krankheit',
          art:'die',
          pl:'Krankheiten',
          en:'illness, disease',
          ph:'KRAHNK-hite'
        }
      ]
    },
    {
      id:'t2',
      title:'Doctor words',
      time:'3 min',
      kind:'words',
      vocab:[
        {
          de:'Notfall',
          art:'der',
          pl:'Notfälle',
          en:'emergency',
          ph:'NOHT-fahl'
        },
        {
          de:'Krankenwagen',
          art:'der',
          pl:'Krankenwagen',
          en:'ambulance',
          ph:'KRAHN-ken-vah-gen'
        },
        {
          de:'Notaufnahme',
          art:'die',
          pl:'Notaufnahmen',
          en:'emergency room',
          ph:'NOHT-owf-nah-me'
        },
        {
          de:'Wartezimmer',
          art:'das',
          pl:'Wartezimmer',
          en:'waiting room',
          ph:'VAHR-te-tsim-mer'
        },
        {
          de:'Sprechstunde',
          art:'die',
          pl:'Sprechstunden',
          en:'consultation hours',
          ph:'SHPREKH-shtoon-de'
        },
        {
          de:'Untersuchung',
          art:'die',
          pl:'Untersuchungen',
          en:'examination',
          ph:'oon-ter-ZOO-khoong'
        },
        {
          de:'Puls',
          art:'der',
          pl:'Pulse',
          en:'pulse',
          ph:'pools'
        },
        {
          de:'Temperatur',
          art:'die',
          pl:'Temperaturen',
          en:'temperature',
          ph:'tem-pe-rah-TOOR'
        },
        {
          de:'messen',
          art:'',
          pl:'',
          en:'to measure',
          ph:'MES-sen'
        },
        {
          de:'einnehmen',
          art:'',
          pl:'',
          en:'to take (medicine)',
          ph:'INE-nay-men'
        },
        {
          de:'Allergie',
          art:'die',
          pl:'Allergien',
          en:'allergy',
          ph:'ah-lair-GEE'
        },
        {
          de:'Impfung',
          art:'die',
          pl:'Impfungen',
          en:'vaccination',
          ph:'IMP-foong'
        },
        {
          de:'impfen',
          art:'',
          pl:'',
          en:'to vaccinate',
          ph:'IMP-fen'
        },
        {
          de:'Impfpass',
          art:'der',
          pl:'Impfpässe',
          en:'vaccination card',
          ph:'IMPF-pahs'
        },
        {
          de:'Versicherung',
          art:'die',
          pl:'Versicherungen',
          en:'insurance',
          ph:'fair-ZIKH-e-roong'
        },
        {
          de:'versichert',
          art:'',
          pl:'',
          en:'insured',
          ph:'fair-ZIKH-ert'
        },
        {
          de:'Termin',
          art:'der',
          pl:'Termine',
          en:'appointment',
          ph:'tair-MEEN'
        },
        {
          de:'Praxis',
          art:'die',
          pl:'Praxen',
          en:'doctor\'s office',
          ph:'PRAHK-sis'
        },
        {
          de:'Krankenkasse',
          art:'die',
          pl:'Krankenkassen',
          en:'health insurance',
          ph:'KRAHN-ken-kah-se'
        },
        {
          de:'Rezept',
          art:'das',
          pl:'Rezepte',
          en:'prescription',
          ph:'reh-TSEPT'
        },
        {
          de:'Hals',
          art:'der',
          pl:'Hälse',
          en:'throat, neck',
          ph:'hahls'
        },
        {
          de:'husten',
          art:'',
          pl:'',
          en:'to cough',
          ph:'HOOS-ten'
        },
        {
          de:'niesen',
          art:'',
          pl:'',
          en:'to sneeze',
          ph:'NEE-zen'
        },
        {
          de:'Husten',
          art:'der',
          pl:'',
          en:'cough',
          ph:'HOOS-ten'
        }
      ]
    },
    {
      id:'t3',
      title:'Dialogue: At the doctor',
      time:'3 min',
      kind:'dialogue',
      lines:[
        {
          who:'A',
          de:'Guten Tag, Praxis Dr. Schmidt. Wie kann ich Ihnen helfen?',
          en:'Good day, Dr. Schmidt\'s practice. How can I help you?',
          ph:'GOO-ten TAHK, PRAHK-sis DOK-tor shmit. vee kahn ish EE-nen HEL-fen'
        },
        {
          who:'B',
          de:'Guten Tag, ich möchte einen Termin machen. Ich habe Fieber und Husten.',
          en:'Good day, I would like to make an appointment. I have a fever and a cough.',
          ph:'GOO-ten TAHK, ish MOEKH-te INE-en tair-MEEN MAH-khen. ish HAH-be FEE-ber oont HOOS-ten'
        },
        {
          who:'A',
          de:'Können Sie morgen um 10 Uhr kommen?',
          en:'Can you come tomorrow at 10 o\'clock?',
          ph:'KOEN-nen zee MOR-gen oom tsayn oor KOM-men'
        },
        {
          who:'B',
          de:'Ja, das geht. Ich konnte letzte Nacht nicht schlafen.',
          en:'Yes, that works. I could not sleep last night.',
          ph:'yah, dahs gayt. ish KONT-te LETS-te nahkht nikht SHLAH-fen'
        },
        {
          who:'A',
          de:'Kommen Sie morgen. Bringen Sie bitte Ihre Krankenkassenkarte mit.',
          en:'Come tomorrow. Please bring your health insurance card.',
          ph:'KOM-men zee MOR-gen. BRING-en zee BIT-te EE-re KRAHN-ken-kahs-sen-kahr-te mit'
        },
        {
          who:'B',
          de:'Danke! Auf Wiederhören.',
          en:'Thank you! Goodbye (on the phone).',
          ph:'DAHN-ke! owf VEE-der-hoe-ren'
        }
      ],
      speak:{
        prompt:'Say out loud: "Ich möchte einen Termin machen. Ich habe Fieber und Husten."',
        model:[
          'Ich möchte einen Termin machen.',
          'Ich habe Fieber und Husten.',
          'Ich konnte letzte Nacht nicht schlafen.',
          'Ich fühle mich nicht gut.'
        ]
      }
    },
    {
      id:'t4',
      title:'Grammar: Modal past & reflexive verbs',
      time:'3 min',
      kind:'grammar',
      grammar:{
        title:'Past of modal verbs — and reflexive verbs',
        plain:'Modal verbs also have a simple past: können → konnte (could), müssen → musste (had to), wollen → wollte (wanted). "Ich konnte nicht schlafen." = I could not sleep. And at the doctor you need reflexive verbs: "Ich fühle mich nicht gut." — "sich" changes with the person: ich fühle mich, du fühlst dich, er fühlt sich, wir fühlen uns.',
        rule:'können → konnte · müssen → musste · wollen → wollte · reflexive: mich, dich, sich, uns, euch, sich',
        examples:[
          {
            de:'Ich konnte letzte Nacht nicht schlafen.',
            en:'I could not sleep last night.',
            ph:'ish KONT-te LETS-te nahkht nikht SHLAH-fen'
          },
          {
            de:'Ich musste zum Arzt gehen.',
            en:'I had to go to the doctor.',
            ph:'ish MOOS-te tsoom ahrtst GAY-en'
          },
          {
            de:'Ich fühle mich nicht gut.',
            en:'I do not feel well.',
            ph:'ish FUE-le mikh nikht goot'
          }
        ]
      }
    },
    {
      id:'t5',
      title:'Quiz: konnte, musste, wollte',
      time:'3 min',
      kind:'quiz',
      questions:[
        {q:'Fill in: "Ich ___ letzte Nacht nicht schlafen." (could)', options:['kann', 'konnte', 'können', 'gekonnt'], answer:1,
         why:'können → konnte. "Ich konnte nicht schlafen."'},
        {q:'Fill in: "Ich ___ zum Arzt gehen." (had to)', options:['muss', 'musste', 'müssen', 'gemusst'], answer:1,
         why:'müssen → musste. "Ich musste zum Arzt gehen."'},
        {q:'Fill in: "Ich fühle ___ nicht gut."', options:['mich', 'dich', 'sich', 'mir'], answer:0,
         why:'Reflexive for "ich" is "mich": Ich fühle mich nicht gut.'}
      ]
    },
    {
      id:'t6',
      title:'Quiz: at the doctor',
      time:'2 min',
      kind:'quiz',
      questions:[
        {q:'What does "Ich habe Fieber" mean?', options:['I have a cold', 'I have a fever', 'I have a cough', 'I have a headache'], answer:1,
         why:'Fieber = fever. Husten = cough, Kopfschmerzen = headache.'},
        {q:'What is "das Rezept"?', options:['the appointment', 'the prescription', 'the insurance', 'the pharmacy'], answer:1,
         why:'das Rezept = the prescription. der Termin = the appointment.'}
      ]
    }
  ],
  next:'Next: Chapter 7 — Work & Professions',
};

CHAPTERS['A2-7'] = {
  id:'A2-7',
  n:7,
  level:'A2',
  title:'Work & Professions',
  time:'17 min',
  concept:'Talk about jobs, applications and job interviews — with the connectors "weil" and "dass".',
  dialogue:[
    {
      who:'A',
      de:'Guten Tag, ich bin Frau Müller. Bitte setzen Sie sich.',
      en:'Good day, I am Mrs. Müller. Please sit down.',
      ph:'GOO-ten TAHK, ish bin frow MUE-ler. BIT-te ZET-sen zee zikh'
    },
    {
      who:'B',
      de:'Danke. Ich habe mich um die Stelle als Krankenpfleger beworben.',
      en:'Thank you. I applied for the job as a male nurse.',
      ph:'DAHN-ke. ish HAH-be mikh oom dee SHTEL-le ahls KRAHN-ken-pflay-ger be-VOR-ben'
    },
    {
      who:'A',
      de:'Warum möchten Sie in Deutschland arbeiten?',
      en:'Why do you want to work in Germany?',
      ph:'vah-ROOM MOEKH-ten zee in DOYCH-lahnt AHR-bai-ten'
    },
    {
      who:'B',
      de:'Ich lerne Deutsch, weil ich hier eine Ausbildung machen will.',
      en:'I am learning German because I want to do training here.',
      ph:'ish LAIR-ne doych, vile ish heer INE-ow-BIL-doong MAH-khen vil'
    },
    {
      who:'A',
      de:'Was können Sie gut?',
      en:'What are you good at?',
      ph:'vahs KOEN-nen zee goot'
    },
    {
      who:'B',
      de:'Ich kann gut mit Menschen arbeiten. Ich lerne schnell.',
      en:'I am good at working with people. I learn fast.',
      ph:'ish kahn goot mit MEN-shen AHR-bai-ten. ish LAIR-ne shnel'
    }
  ],
  vocab:[
    {
      de:'Job',
      art:'der',
      pl:'Jobs',
      en:'job',
      ph:'job'
    },
    {
      de:'Arbeitsplatz',
      art:'der',
      pl:'Arbeitsplätze',
      en:'workplace',
      ph:'AHR-baits-plahts'
    },
    {
      de:'Firma',
      art:'die',
      pl:'Firmen',
      en:'company',
      ph:'FEER-mah'
    },
    {
      de:'Büro',
      art:'das',
      pl:'Büros',
      en:'office',
      ph:'bue-ROH'
    },
    {
      de:'Fabrik',
      art:'die',
      pl:'Fabriken',
      en:'factory',
      ph:'fah-BREEK'
    },
    {
      de:'Schule',
      art:'die',
      pl:'Schulen',
      en:'school',
      ph:'SHOO-le'
    },
    {
      de:'Bank',
      art:'die',
      pl:'Banken',
      en:'bank',
      ph:'bahnk'
    },
    {
      de:'Geschäft',
      art:'das',
      pl:'Geschäfte',
      en:'shop, business',
      ph:'ge-SHEFT'
    },
    {
      de:'Laden',
      art:'der',
      pl:'Läden',
      en:'shop, store',
      ph:'LAH-den'
    },
    {
      de:'Kunde',
      art:'der',
      pl:'Kunden',
      en:'customer (male)',
      ph:'KOON-de'
    },
    {
      de:'Kundin',
      art:'die',
      pl:'Kundinnen',
      en:'customer (female)',
      ph:'KOON-din'
    },
    {
      de:'Kollege',
      art:'der',
      pl:'Kollegen',
      en:'colleague (male)',
      ph:'kol-LAY-ge'
    },
    {
      de:'Kollegin',
      art:'die',
      pl:'Kolleginnen',
      en:'colleague (female)',
      ph:'kol-LAY-gin'
    },
    {
      de:'Mitarbeiter',
      art:'der',
      pl:'Mitarbeiter',
      en:'employee (male)',
      ph:'MIT-ahr-bai-ter'
    },
    {
      de:'Mitarbeiterin',
      art:'die',
      pl:'Mitarbeiterinnen',
      en:'employee (female)',
      ph:'MIT-ahr-bai-te-rin'
    },
    {
      de:'Arbeiter',
      art:'der',
      pl:'Arbeiter',
      en:'worker (male)',
      ph:'AHR-bai-ter'
    },
    {
      de:'Lohn',
      art:'der',
      pl:'Löhne',
      en:'wage',
      ph:'lohn'
    },
    {
      de:'Einkommen',
      art:'das',
      pl:'Einkommen',
      en:'income',
      ph:'INE-kom-men'
    },
    {
      de:'Steuer',
      art:'die',
      pl:'Steuern',
      en:'tax',
      ph:'SHTOY-er'
    },
    {
      de:'Rente',
      art:'die',
      pl:'Renten',
      en:'pension',
      ph:'REN-te'
    },
    {
      de:'Pause',
      art:'die',
      pl:'Pausen',
      en:'break',
      ph:'POW-ze'
    },
    {
      de:'Überstunden',
      art:'die',
      pl:'',
      en:'overtime',
      ph:'UE-ber-shtoon-den'
    },
    {
      de:'Vertrag',
      art:'der',
      pl:'Verträge',
      en:'contract',
      ph:'fair-TRAHK'
    },
    {
      de:'unterschreiben',
      art:'',
      pl:'',
      en:'to sign',
      ph:'oon-ter-SHRAI-ben'
    },
    {
      de:'Unterschrift',
      art:'die',
      pl:'Unterschriften',
      en:'signature',
      ph:'oon-ter-shrift'
    },
    {
      de:'sich bewerben',
      art:'',
      pl:'',
      en:'to apply (for a job)',
      ph:'zikh be-VAIR-ben'
    },
    {
      de:'kündigen',
      art:'',
      pl:'',
      en:'to quit, to give notice',
      ph:'KUEN-di-gen'
    },
    {
      de:'Kündigung',
      art:'die',
      pl:'Kündigungen',
      en:'notice, termination',
      ph:'KUEN-di-goong'
    },
    {
      de:'arbeitslos',
      art:'',
      pl:'',
      en:'unemployed',
      ph:'AHR-baits-lohs'
    },
    {
      de:'anfangen',
      art:'',
      pl:'',
      en:'to start, to begin',
      ph:'AHN-fahng-en'
    },
    {
      de:'aufhören',
      art:'',
      pl:'',
      en:'to stop',
      ph:'OWF-hoe-ren'
    },
    {
      de:'Feierabend',
      art:'der',
      pl:'',
      en:'end of the working day',
      ph:'FAI-er-ah-bent'
    },
    {
      de:'Mittagspause',
      art:'die',
      pl:'Mittagspausen',
      en:'lunch break',
      ph:'MIT-tahks-pow-ze'
    },
    {
      de:'Teamleiter',
      art:'der',
      pl:'Teamleiter',
      en:'team leader',
      ph:'TEEM-lai-ter'
    },
    {
      de:'Azubi',
      art:'der',
      pl:'Azubis',
      en:'trainee, apprentice',
      ph:'ah-TSOO-bee'
    },
    {
      de:'Praktikant',
      art:'der',
      pl:'Praktikanten',
      en:'intern (male)',
      ph:'prahk-ti-KAHNT'
    },
    {
      de:'Praktikantin',
      art:'die',
      pl:'Praktikantinnen',
      en:'intern (female)',
      ph:'prahk-ti-KAHN-tin'
    },
    {
      de:'Bewerbung',
      art:'die',
      pl:'Bewerbungen',
      en:'application',
      ph:'beh-VAIR-boong'
    },
    {
      de:'Lebenslauf',
      art:'der',
      pl:'Lebensläufe',
      en:'CV, résumé',
      ph:'LAY-bens-lowf'
    },
    {
      de:'Vorstellungsgespräch',
      art:'das',
      pl:'Vorstellungsgespräche',
      en:'job interview',
      ph:'FOR-shtel-loongs-geh-shpraykh'
    },
    {
      de:'Stelle',
      art:'die',
      pl:'Stellen',
      en:'position, job',
      ph:'SHTEL-le'
    },
    {
      de:'verdienen',
      art:'',
      pl:'',
      en:'to earn',
      ph:'fair-DEE-nen'
    },
    {
      de:'Ausbildung',
      art:'die',
      pl:'Ausbildungen',
      en:'training, apprenticeship',
      ph:'OWS-bil-doong'
    },
    {
      de:'Chef',
      art:'der',
      pl:'Chefs',
      en:'boss',
      ph:'shef'
    },
    {
      de:'Gehalt',
      art:'das',
      pl:'Gehälter',
      en:'salary',
      ph:'ge-HAHLT'
    }
  ],
  grammar:{
    title:'Connectors — weil and dass',
    plain:'"weil" (because) and "dass" (that) start a subordinate clause — and the verb goes to the END: "Ich lerne Deutsch, weil ich in Deutschland arbeiten will." "Ich weiß, dass du Deutsch lernst." Learn the pattern: connector + ... + verb at the end.',
    rule:'weil/dass + subject + ... + verb LAST: "Ich lerne Deutsch, weil ich arbeiten will." · "Ich weiß, dass du lernst."',
    examples:[
      {
        de:'Ich lerne Deutsch, weil ich in Deutschland arbeiten will.',
        en:'I am learning German because I want to work in Germany.',
        ph:'ish LAIR-ne doych, vile ish in DOYCH-lahnt AHR-bai-ten vil'
      },
      {
        de:'Ich weiß, dass du Deutsch lernst.',
        en:'I know that you are learning German.',
        ph:'ish vice, dahs doo doych lairnst'
      },
      {
        de:'Ich habe mich beworben, weil ich eine Ausbildung machen will.',
        en:'I applied because I want to do training.',
        ph:'ish HAH-be mikh be-VOR-ben, vile ish INE-ow-BIL-doong MAH-khen vil'
      }
    ]
  },
  quiz:[
    {q:'Fill in: "Ich lerne Deutsch, ___ ich in Deutschland arbeiten will."', options:['weil', 'dass', 'wenn', 'aber'], answer:0,
     why:'"weil" = because. The verb "will" goes to the end.'},
    {q:'Fill in: "Ich weiß, ___ du Deutsch lernst."', options:['weil', 'dass', 'wenn', 'oder'], answer:1,
     why:'"dass" = that. "Ich weiß, dass du Deutsch lernst."'},
    {q:'Where does the verb go after "weil"?', options:['2nd place', '1st place', 'At the end', 'It disappears'], answer:2,
     why:'After "weil" and "dass", the verb goes to the END of the clause.'},
    {q:'What does "sich bewerben" mean?', options:['to work', 'to apply (for a job)', 'to earn', 'to quit'], answer:1,
     why:'sich bewerben = to apply. "Ich habe mich um die Stelle beworben."'},
    {q:'What is "der Lebenslauf"?', options:['the contract', 'the CV, résumé', 'the salary', 'the boss'], answer:1,
     why:'der Lebenslauf = the CV. der Vertrag = the contract, das Gehalt = the salary.'}
  ],
  speak:{
    prompt:'Say out loud: "Ich lerne Deutsch, weil ich in Deutschland arbeiten will."',
    model:[
      'Ich lerne Deutsch, weil ich in Deutschland arbeiten will.',
      'Ich weiß, dass du Deutsch lernst.',
      'Ich habe mich um die Stelle beworben.'
    ]
  },
  recap:[
    'weil = because, dass = that — the verb goes to the END.',
    '"Ich lerne Deutsch, weil ich arbeiten will."',
    '"Ich weiß, dass du Deutsch lernst."',
    'Work: die Bewerbung, der Lebenslauf, das Vorstellungsgespräch, das Gehalt.'
  ],
  tip:'Memory tip: in a "weil" sentence, put the verb last and check it: "Ich lerne Deutsch, weil ich ... will." Say it out loud 3 times.',
  extra:[
    {
      q:'Say "I learn German because I want to work in Germany."',
      a:'Ich lerne Deutsch, weil ich in Deutschland arbeiten will.'
    },
    {
      q:'Say "I know that you learn German."',
      a:'Ich weiß, dass du Deutsch lernst.'
    },
    {
      q:'What does "kündigen" mean?',
      a:'to quit, to give notice — "Ich möchte kündigen."'
    }
  ],
  topics:[
    {
      id:'t1',
      title:'Work words',
      time:'3 min',
      kind:'words',
      vocab:[
        {
          de:'Job',
          art:'der',
          pl:'Jobs',
          en:'job',
          ph:'job'
        },
        {
          de:'Arbeitsplatz',
          art:'der',
          pl:'Arbeitsplätze',
          en:'workplace',
          ph:'AHR-baits-plahts'
        },
        {
          de:'Firma',
          art:'die',
          pl:'Firmen',
          en:'company',
          ph:'FEER-mah'
        },
        {
          de:'Büro',
          art:'das',
          pl:'Büros',
          en:'office',
          ph:'bue-ROH'
        },
        {
          de:'Fabrik',
          art:'die',
          pl:'Fabriken',
          en:'factory',
          ph:'fah-BREEK'
        },
        {
          de:'Schule',
          art:'die',
          pl:'Schulen',
          en:'school',
          ph:'SHOO-le'
        },
        {
          de:'Bank',
          art:'die',
          pl:'Banken',
          en:'bank',
          ph:'bahnk'
        },
        {
          de:'Geschäft',
          art:'das',
          pl:'Geschäfte',
          en:'shop, business',
          ph:'ge-SHEFT'
        },
        {
          de:'Laden',
          art:'der',
          pl:'Läden',
          en:'shop, store',
          ph:'LAH-den'
        },
        {
          de:'Kunde',
          art:'der',
          pl:'Kunden',
          en:'customer (male)',
          ph:'KOON-de'
        },
        {
          de:'Kundin',
          art:'die',
          pl:'Kundinnen',
          en:'customer (female)',
          ph:'KOON-din'
        },
        {
          de:'Kollege',
          art:'der',
          pl:'Kollegen',
          en:'colleague (male)',
          ph:'kol-LAY-ge'
        },
        {
          de:'Kollegin',
          art:'die',
          pl:'Kolleginnen',
          en:'colleague (female)',
          ph:'kol-LAY-gin'
        },
        {
          de:'Mitarbeiter',
          art:'der',
          pl:'Mitarbeiter',
          en:'employee (male)',
          ph:'MIT-ahr-bai-ter'
        },
        {
          de:'Mitarbeiterin',
          art:'die',
          pl:'Mitarbeiterinnen',
          en:'employee (female)',
          ph:'MIT-ahr-bai-te-rin'
        },
        {
          de:'Arbeiter',
          art:'der',
          pl:'Arbeiter',
          en:'worker (male)',
          ph:'AHR-bai-ter'
        },
        {
          de:'Lohn',
          art:'der',
          pl:'Löhne',
          en:'wage',
          ph:'lohn'
        },
        {
          de:'Einkommen',
          art:'das',
          pl:'Einkommen',
          en:'income',
          ph:'INE-kom-men'
        },
        {
          de:'Steuer',
          art:'die',
          pl:'Steuern',
          en:'tax',
          ph:'SHTOY-er'
        },
        {
          de:'Rente',
          art:'die',
          pl:'Renten',
          en:'pension',
          ph:'REN-te'
        },
        {
          de:'Pause',
          art:'die',
          pl:'Pausen',
          en:'break',
          ph:'POW-ze'
        },
        {
          de:'Überstunden',
          art:'die',
          pl:'',
          en:'overtime',
          ph:'UE-ber-shtoon-den'
        }
      ]
    },
    {
      id:'t2',
      title:'Job words',
      time:'3 min',
      kind:'words',
      vocab:[
        {
          de:'Vertrag',
          art:'der',
          pl:'Verträge',
          en:'contract',
          ph:'fair-TRAHK'
        },
        {
          de:'unterschreiben',
          art:'',
          pl:'',
          en:'to sign',
          ph:'oon-ter-SHRAI-ben'
        },
        {
          de:'Unterschrift',
          art:'die',
          pl:'Unterschriften',
          en:'signature',
          ph:'oon-ter-shrift'
        },
        {
          de:'sich bewerben',
          art:'',
          pl:'',
          en:'to apply (for a job)',
          ph:'zikh be-VAIR-ben'
        },
        {
          de:'kündigen',
          art:'',
          pl:'',
          en:'to quit, to give notice',
          ph:'KUEN-di-gen'
        },
        {
          de:'Kündigung',
          art:'die',
          pl:'Kündigungen',
          en:'notice, termination',
          ph:'KUEN-di-goong'
        },
        {
          de:'arbeitslos',
          art:'',
          pl:'',
          en:'unemployed',
          ph:'AHR-baits-lohs'
        },
        {
          de:'anfangen',
          art:'',
          pl:'',
          en:'to start, to begin',
          ph:'AHN-fahng-en'
        },
        {
          de:'aufhören',
          art:'',
          pl:'',
          en:'to stop',
          ph:'OWF-hoe-ren'
        },
        {
          de:'Feierabend',
          art:'der',
          pl:'',
          en:'end of the working day',
          ph:'FAI-er-ah-bent'
        },
        {
          de:'Mittagspause',
          art:'die',
          pl:'Mittagspausen',
          en:'lunch break',
          ph:'MIT-tahks-pow-ze'
        },
        {
          de:'Teamleiter',
          art:'der',
          pl:'Teamleiter',
          en:'team leader',
          ph:'TEEM-lai-ter'
        },
        {
          de:'Azubi',
          art:'der',
          pl:'Azubis',
          en:'trainee, apprentice',
          ph:'ah-TSOO-bee'
        },
        {
          de:'Praktikant',
          art:'der',
          pl:'Praktikanten',
          en:'intern (male)',
          ph:'prahk-ti-KAHNT'
        },
        {
          de:'Praktikantin',
          art:'die',
          pl:'Praktikantinnen',
          en:'intern (female)',
          ph:'prahk-ti-KAHN-tin'
        },
        {
          de:'Bewerbung',
          art:'die',
          pl:'Bewerbungen',
          en:'application',
          ph:'beh-VAIR-boong'
        },
        {
          de:'Lebenslauf',
          art:'der',
          pl:'Lebensläufe',
          en:'CV, résumé',
          ph:'LAY-bens-lowf'
        },
        {
          de:'Vorstellungsgespräch',
          art:'das',
          pl:'Vorstellungsgespräche',
          en:'job interview',
          ph:'FOR-shtel-loongs-geh-shpraykh'
        },
        {
          de:'Stelle',
          art:'die',
          pl:'Stellen',
          en:'position, job',
          ph:'SHTEL-le'
        },
        {
          de:'verdienen',
          art:'',
          pl:'',
          en:'to earn',
          ph:'fair-DEE-nen'
        },
        {
          de:'Ausbildung',
          art:'die',
          pl:'Ausbildungen',
          en:'training, apprenticeship',
          ph:'OWS-bil-doong'
        },
        {
          de:'Chef',
          art:'der',
          pl:'Chefs',
          en:'boss',
          ph:'shef'
        },
        {
          de:'Gehalt',
          art:'das',
          pl:'Gehälter',
          en:'salary',
          ph:'ge-HAHLT'
        }
      ]
    },
    {
      id:'t3',
      title:'Dialogue: Job interview',
      time:'3 min',
      kind:'dialogue',
      lines:[
        {
          who:'A',
          de:'Guten Tag, ich bin Frau Müller. Bitte setzen Sie sich.',
          en:'Good day, I am Mrs. Müller. Please sit down.',
          ph:'GOO-ten TAHK, ish bin frow MUE-ler. BIT-te ZET-sen zee zikh'
        },
        {
          who:'B',
          de:'Danke. Ich habe mich um die Stelle als Krankenpfleger beworben.',
          en:'Thank you. I applied for the job as a male nurse.',
          ph:'DAHN-ke. ish HAH-be mikh oom dee SHTEL-le ahls KRAHN-ken-pflay-ger be-VOR-ben'
        },
        {
          who:'A',
          de:'Warum möchten Sie in Deutschland arbeiten?',
          en:'Why do you want to work in Germany?',
          ph:'vah-ROOM MOEKH-ten zee in DOYCH-lahnt AHR-bai-ten'
        },
        {
          who:'B',
          de:'Ich lerne Deutsch, weil ich hier eine Ausbildung machen will.',
          en:'I am learning German because I want to do training here.',
          ph:'ish LAIR-ne doych, vile ish heer INE-ow-BIL-doong MAH-khen vil'
        },
        {
          who:'A',
          de:'Was können Sie gut?',
          en:'What are you good at?',
          ph:'vahs KOEN-nen zee goot'
        },
        {
          who:'B',
          de:'Ich kann gut mit Menschen arbeiten. Ich lerne schnell.',
          en:'I am good at working with people. I learn fast.',
          ph:'ish kahn goot mit MEN-shen AHR-bai-ten. ish LAIR-ne shnel'
        }
      ],
      speak:{
        prompt:'Say out loud: "Ich lerne Deutsch, weil ich in Deutschland arbeiten will."',
        model:[
          'Ich lerne Deutsch, weil ich in Deutschland arbeiten will.',
          'Ich weiß, dass du Deutsch lernst.',
          'Ich habe mich um die Stelle beworben.'
        ]
      }
    },
    {
      id:'t4',
      title:'Grammar: "weil" and "dass"',
      time:'3 min',
      kind:'grammar',
      grammar:{
        title:'Connectors — weil and dass',
        plain:'"weil" (because) and "dass" (that) start a subordinate clause — and the verb goes to the END: "Ich lerne Deutsch, weil ich in Deutschland arbeiten will." "Ich weiß, dass du Deutsch lernst." Learn the pattern: connector + ... + verb at the end.',
        rule:'weil/dass + subject + ... + verb LAST: "Ich lerne Deutsch, weil ich arbeiten will." · "Ich weiß, dass du lernst."',
        examples:[
          {
            de:'Ich lerne Deutsch, weil ich in Deutschland arbeiten will.',
            en:'I am learning German because I want to work in Germany.',
            ph:'ish LAIR-ne doych, vile ish in DOYCH-lahnt AHR-bai-ten vil'
          },
          {
            de:'Ich weiß, dass du Deutsch lernst.',
            en:'I know that you are learning German.',
            ph:'ish vice, dahs doo doych lairnst'
          },
          {
            de:'Ich habe mich beworben, weil ich eine Ausbildung machen will.',
            en:'I applied because I want to do training.',
            ph:'ish HAH-be mikh be-VOR-ben, vile ish INE-ow-BIL-doong MAH-khen vil'
          }
        ]
      }
    },
    {
      id:'t5',
      title:'Quiz: connectors',
      time:'3 min',
      kind:'quiz',
      questions:[
        {q:'Fill in: "Ich lerne Deutsch, ___ ich in Deutschland arbeiten will."', options:['weil', 'dass', 'wenn', 'aber'], answer:0,
         why:'"weil" = because. The verb "will" goes to the end.'},
        {q:'Fill in: "Ich weiß, ___ du Deutsch lernst."', options:['weil', 'dass', 'wenn', 'oder'], answer:1,
         why:'"dass" = that. "Ich weiß, dass du Deutsch lernst."'},
        {q:'Where does the verb go after "weil"?', options:['2nd place', '1st place', 'At the end', 'It disappears'], answer:2,
         why:'After "weil" and "dass", the verb goes to the END of the clause.'}
      ]
    },
    {
      id:'t6',
      title:'Quiz: work & jobs',
      time:'2 min',
      kind:'quiz',
      questions:[
        {q:'What does "sich bewerben" mean?', options:['to work', 'to apply (for a job)', 'to earn', 'to quit'], answer:1,
         why:'sich bewerben = to apply. "Ich habe mich um die Stelle beworben."'},
        {q:'What is "der Lebenslauf"?', options:['the contract', 'the CV, résumé', 'the salary', 'the boss'], answer:1,
         why:'der Lebenslauf = the CV. der Vertrag = the contract, das Gehalt = the salary.'}
      ]
    }
  ],
  next:'Next: Chapter 8 — Free Time & Hobbies',
};

CHAPTERS['A2-8'] = {
  id:'A2-8',
  n:8,
  level:'A2',
  title:'Free Time & Hobbies',
  time:'17 min',
  concept:'Talk about hobbies, sports and clubs — with "zu" + infinitive.',
  dialogue:[
    {
      who:'A',
      de:'Was machst du am Wochenende?',
      en:'What are you doing at the weekend?',
      ph:'vahs mahkhst doo ahm VOKH-en-en-de'
    },
    {
      who:'B',
      de:'Ich spiele Fußball im Verein. Kommst du mit?',
      en:'I play football in a club. Are you coming along?',
      ph:'ish SHPEE-le FOOS-bahl im fair-INE. komst doo mit'
    },
    {
      who:'A',
      de:'Gern! Ich habe Lust, Fußball zu spielen.',
      en:'Gladly! I feel like playing football.',
      ph:'gairn! ish HAH-be loost, FOOS-bahl tsoo SHPEE-len'
    },
    {
      who:'B',
      de:'Super! Wir trainieren am Samstag um 10 Uhr.',
      en:'Great! We train on Saturday at 10 o\'clock.',
      ph:'ZOO-per! veer trai-NEE-ren ahm ZAHMS-tahk oom tsayn oor'
    },
    {
      who:'A',
      de:'Ich freue mich, dich zu sehen.',
      en:'I am happy to see you.',
      ph:'ish FROY-e mikh, dikh tsoo ZAY-en'
    },
    {
      who:'B',
      de:'Bis Samstag!',
      en:'See you Saturday!',
      ph:'bis ZAHMS-tahk'
    }
  ],
  vocab:[
    {
      de:'Sport',
      art:'der',
      pl:'',
      en:'sport',
      ph:'shport'
    },
    {
      de:'Tennis',
      art:'das',
      pl:'',
      en:'tennis',
      ph:'TEN-nis'
    },
    {
      de:'tanzen',
      art:'',
      pl:'',
      en:'to dance',
      ph:'TAHN-tsen'
    },
    {
      de:'singen',
      art:'',
      pl:'',
      en:'to sing',
      ph:'ZING-en'
    },
    {
      de:'malen',
      art:'',
      pl:'',
      en:'to paint',
      ph:'MAH-len'
    },
    {
      de:'reisen',
      art:'',
      pl:'',
      en:'to travel',
      ph:'RAI-zen'
    },
    {
      de:'spielen',
      art:'',
      pl:'',
      en:'to play',
      ph:'SHPEE-len'
    },
    {
      de:'Spiel',
      art:'das',
      pl:'Spiele',
      en:'game',
      ph:'shpeel'
    },
    {
      de:'Musik',
      art:'die',
      pl:'',
      en:'music',
      ph:'moo-ZEEK'
    },
    {
      de:'Theater',
      art:'das',
      pl:'Theater',
      en:'theatre',
      ph:'tay-AH-ter'
    },
    {
      de:'Konzert',
      art:'das',
      pl:'Konzerte',
      en:'concert',
      ph:'kon-TSAIRT'
    },
    {
      de:'Film',
      art:'der',
      pl:'Filme',
      en:'film, movie',
      ph:'film'
    },
    {
      de:'Buch',
      art:'das',
      pl:'Bücher',
      en:'book',
      ph:'bookh'
    },
    {
      de:'Instrument',
      art:'das',
      pl:'Instrumente',
      en:'instrument',
      ph:'in-stroo-MENT'
    },
    {
      de:'Gitarre',
      art:'die',
      pl:'Gitarren',
      en:'guitar',
      ph:'gi-TAHR-re'
    },
    {
      de:'Klavier',
      art:'das',
      pl:'Klaviere',
      en:'piano',
      ph:'klah-VEER'
    },
    {
      de:'Sportverein',
      art:'der',
      pl:'Sportvereine',
      en:'sports club',
      ph:'SHPORT-fair-ine'
    },
    {
      de:'Mitgliedschaft',
      art:'die',
      pl:'Mitgliedschaften',
      en:'membership',
      ph:'MIT-gleed-shahft'
    },
    {
      de:'Mitglied',
      art:'das',
      pl:'Mitglieder',
      en:'member',
      ph:'MIT-gleed'
    },
    {
      de:'trainieren',
      art:'',
      pl:'',
      en:'to train',
      ph:'trai-NEE-ren'
    },
    {
      de:'Trainer',
      art:'der',
      pl:'Trainer',
      en:'trainer, coach (male)',
      ph:'TRAI-ner'
    },
    {
      de:'Trainerin',
      art:'die',
      pl:'Trainerinnen',
      en:'trainer, coach (female)',
      ph:'TRAI-ne-rin'
    },
    {
      de:'Training',
      art:'das',
      pl:'Trainings',
      en:'training, practice',
      ph:'TRAI-ning'
    },
    {
      de:'Mannschaft',
      art:'die',
      pl:'Mannschaften',
      en:'team',
      ph:'MAHN-shahft'
    },
    {
      de:'gewinnen',
      art:'',
      pl:'',
      en:'to win',
      ph:'ge-VIN-nen'
    },
    {
      de:'verlieren',
      art:'',
      pl:'',
      en:'to lose',
      ph:'fair-LEE-ren'
    },
    {
      de:'Zuschauer',
      art:'der',
      pl:'Zuschauer',
      en:'spectator (male)',
      ph:'TSOO-show-er'
    },
    {
      de:'Zuschauerin',
      art:'die',
      pl:'Zuschauerinnen',
      en:'spectator (female)',
      ph:'TSOO-show-e-rin'
    },
    {
      de:'Eintritt',
      art:'der',
      pl:'',
      en:'admission, entry',
      ph:'INE-trit'
    },
    {
      de:'Eintrittskarte',
      art:'die',
      pl:'Eintrittskarten',
      en:'admission ticket',
      ph:'INE-trits-kahr-te'
    },
    {
      de:'Ausflug',
      art:'der',
      pl:'Ausflüge',
      en:'trip, outing',
      ph:'OWS-flook'
    },
    {
      de:'Picknick',
      art:'das',
      pl:'Picknicks',
      en:'picnic',
      ph:'PIK-nik'
    },
    {
      de:'Grill',
      art:'der',
      pl:'Grills',
      en:'barbecue grill',
      ph:'gril'
    },
    {
      de:'Lagerfeuer',
      art:'das',
      pl:'Lagerfeuer',
      en:'campfire',
      ph:'LAH-ger-foy-er'
    },
    {
      de:'Natur',
      art:'die',
      pl:'',
      en:'nature',
      ph:'nah-TOOR'
    },
    {
      de:'Berg',
      art:'der',
      pl:'Berge',
      en:'mountain',
      ph:'bairk'
    },
    {
      de:'Hobby',
      art:'das',
      pl:'Hobbys',
      en:'hobby',
      ph:'HOB-bee'
    },
    {
      de:'Fahrrad',
      art:'das',
      pl:'Fahrräder',
      en:'bicycle',
      ph:'FAHR-raht'
    },
    {
      de:'wandern',
      art:'',
      pl:'',
      en:'to hike',
      ph:'VAHN-dern'
    },
    {
      de:'angeln',
      art:'',
      pl:'',
      en:'to fish',
      ph:'AHNG-eln'
    },
    {
      de:'Verein',
      art:'der',
      pl:'Vereine',
      en:'club, association',
      ph:'fair-INE'
    },
    {
      de:'Kurs',
      art:'der',
      pl:'Kurse',
      en:'course',
      ph:'koors'
    },
    {
      de:'Freizeit',
      art:'die',
      pl:'',
      en:'free time, leisure',
      ph:'FRAI-tsite'
    },
    {
      de:'Lust',
      art:'die',
      pl:'',
      en:'desire, liking',
      ph:'loost'
    }
  ],
  grammar:{
    title:'"zu" + infinitive',
    plain:'After some verbs, the infinitive comes with "zu": "Ich habe Lust zu schwimmen." (I feel like swimming.) "Ich freue mich, dich zu sehen." (I am happy to see you.) The "zu" goes before the infinitive, at the end.',
    rule:'Lust haben + zu + infinitive · sich freuen + zu + infinitive · "zu" always sits right before the infinitive, at the end',
    examples:[
      {
        de:'Ich habe Lust, Fußball zu spielen.',
        en:'I feel like playing football.',
        ph:'ish HAH-be loost, FOOS-bahl tsoo SHPEE-len'
      },
      {
        de:'Ich freue mich, dich zu sehen.',
        en:'I am happy to see you.',
        ph:'ish FROY-e mikh, dikh tsoo ZAY-en'
      },
      {
        de:'Es ist schön, hier zu sein.',
        en:'It is nice to be here.',
        ph:'es ist shoen, heer tsoo zine'
      }
    ]
  },
  quiz:[
    {q:'Fill in: "Ich habe Lust, Fußball ___ spielen."', options:['zu', 'nach', 'um', 'mit'], answer:0,
     why:'"Lust haben" takes "zu" + infinitive: Lust zu spielen.'},
    {q:'Fill in: "Ich freue mich, dich ___ sehen."', options:['zu', 'nach', 'um', 'mit'], answer:0,
     why:'"sich freuen" takes "zu" + infinitive: dich zu sehen.'},
    {q:'Where does "zu" go?', options:['Before the verb', 'Right before the infinitive, at the end', 'After the subject', 'At the start'], answer:1,
     why:'"zu" sits right before the infinitive, at the end of the sentence.'},
    {q:'What does "gewinnen" mean?', options:['to lose', 'to win', 'to train', 'to play'], answer:1,
     why:'gewinnen = to win. verlieren = to lose.'},
    {q:'What is "die Mannschaft"?', options:['the trainer', 'the team', 'the club', 'the game'], answer:1,
     why:'die Mannschaft = the team. der Trainer = the trainer, der Verein = the club.'}
  ],
  speak:{
    prompt:'Say out loud: "Ich habe Lust, Fußball zu spielen. Ich freue mich, dich zu sehen."',
    model:[
      'Ich habe Lust, Fußball zu spielen.',
      'Ich freue mich, dich zu sehen.',
      'Was machst du am Wochenende?'
    ]
  },
  recap:[
    '"zu" + infinitive: Ich habe Lust zu schwimmen.',
    '"Ich freue mich, dich zu sehen."',
    '"zu" sits right before the infinitive, at the end.',
    'Hobbies: der Sport, das Hobby, der Verein, die Mannschaft, das Training.'
  ],
  tip:'Memory tip: learn "Lust haben" and "sich freuen" as fixed phrases with "zu": "Ich habe Lust zu ..." — then just add any verb.',
  extra:[
    {
      q:'Say "I feel like playing football."',
      a:'Ich habe Lust, Fußball zu spielen.'
    },
    {
      q:'Say "I am happy to see you."',
      a:'Ich freue mich, dich zu sehen.'
    },
    {
      q:'What does "trainieren" mean?',
      a:'to train — "Wir trainieren am Samstag."'
    }
  ],
  topics:[
    {
      id:'t1',
      title:'Hobby words',
      time:'3 min',
      kind:'words',
      vocab:[
        {
          de:'Sport',
          art:'der',
          pl:'',
          en:'sport',
          ph:'shport'
        },
        {
          de:'Tennis',
          art:'das',
          pl:'',
          en:'tennis',
          ph:'TEN-nis'
        },
        {
          de:'tanzen',
          art:'',
          pl:'',
          en:'to dance',
          ph:'TAHN-tsen'
        },
        {
          de:'singen',
          art:'',
          pl:'',
          en:'to sing',
          ph:'ZING-en'
        },
        {
          de:'malen',
          art:'',
          pl:'',
          en:'to paint',
          ph:'MAH-len'
        },
        {
          de:'reisen',
          art:'',
          pl:'',
          en:'to travel',
          ph:'RAI-zen'
        },
        {
          de:'spielen',
          art:'',
          pl:'',
          en:'to play',
          ph:'SHPEE-len'
        },
        {
          de:'Spiel',
          art:'das',
          pl:'Spiele',
          en:'game',
          ph:'shpeel'
        },
        {
          de:'Musik',
          art:'die',
          pl:'',
          en:'music',
          ph:'moo-ZEEK'
        },
        {
          de:'Theater',
          art:'das',
          pl:'Theater',
          en:'theatre',
          ph:'tay-AH-ter'
        },
        {
          de:'Konzert',
          art:'das',
          pl:'Konzerte',
          en:'concert',
          ph:'kon-TSAIRT'
        },
        {
          de:'Film',
          art:'der',
          pl:'Filme',
          en:'film, movie',
          ph:'film'
        },
        {
          de:'Buch',
          art:'das',
          pl:'Bücher',
          en:'book',
          ph:'bookh'
        },
        {
          de:'Instrument',
          art:'das',
          pl:'Instrumente',
          en:'instrument',
          ph:'in-stroo-MENT'
        },
        {
          de:'Gitarre',
          art:'die',
          pl:'Gitarren',
          en:'guitar',
          ph:'gi-TAHR-re'
        },
        {
          de:'Klavier',
          art:'das',
          pl:'Klaviere',
          en:'piano',
          ph:'klah-VEER'
        },
        {
          de:'Sportverein',
          art:'der',
          pl:'Sportvereine',
          en:'sports club',
          ph:'SHPORT-fair-ine'
        },
        {
          de:'Mitgliedschaft',
          art:'die',
          pl:'Mitgliedschaften',
          en:'membership',
          ph:'MIT-gleed-shahft'
        },
        {
          de:'Mitglied',
          art:'das',
          pl:'Mitglieder',
          en:'member',
          ph:'MIT-gleed'
        },
        {
          de:'trainieren',
          art:'',
          pl:'',
          en:'to train',
          ph:'trai-NEE-ren'
        },
        {
          de:'Trainer',
          art:'der',
          pl:'Trainer',
          en:'trainer, coach (male)',
          ph:'TRAI-ner'
        },
        {
          de:'Trainerin',
          art:'die',
          pl:'Trainerinnen',
          en:'trainer, coach (female)',
          ph:'TRAI-ne-rin'
        }
      ]
    },
    {
      id:'t2',
      title:'Sports & club words',
      time:'3 min',
      kind:'words',
      vocab:[
        {
          de:'Training',
          art:'das',
          pl:'Trainings',
          en:'training, practice',
          ph:'TRAI-ning'
        },
        {
          de:'Mannschaft',
          art:'die',
          pl:'Mannschaften',
          en:'team',
          ph:'MAHN-shahft'
        },
        {
          de:'gewinnen',
          art:'',
          pl:'',
          en:'to win',
          ph:'ge-VIN-nen'
        },
        {
          de:'verlieren',
          art:'',
          pl:'',
          en:'to lose',
          ph:'fair-LEE-ren'
        },
        {
          de:'Zuschauer',
          art:'der',
          pl:'Zuschauer',
          en:'spectator (male)',
          ph:'TSOO-show-er'
        },
        {
          de:'Zuschauerin',
          art:'die',
          pl:'Zuschauerinnen',
          en:'spectator (female)',
          ph:'TSOO-show-e-rin'
        },
        {
          de:'Eintritt',
          art:'der',
          pl:'',
          en:'admission, entry',
          ph:'INE-trit'
        },
        {
          de:'Eintrittskarte',
          art:'die',
          pl:'Eintrittskarten',
          en:'admission ticket',
          ph:'INE-trits-kahr-te'
        },
        {
          de:'Ausflug',
          art:'der',
          pl:'Ausflüge',
          en:'trip, outing',
          ph:'OWS-flook'
        },
        {
          de:'Picknick',
          art:'das',
          pl:'Picknicks',
          en:'picnic',
          ph:'PIK-nik'
        },
        {
          de:'Grill',
          art:'der',
          pl:'Grills',
          en:'barbecue grill',
          ph:'gril'
        },
        {
          de:'Lagerfeuer',
          art:'das',
          pl:'Lagerfeuer',
          en:'campfire',
          ph:'LAH-ger-foy-er'
        },
        {
          de:'Natur',
          art:'die',
          pl:'',
          en:'nature',
          ph:'nah-TOOR'
        },
        {
          de:'Berg',
          art:'der',
          pl:'Berge',
          en:'mountain',
          ph:'bairk'
        },
        {
          de:'Hobby',
          art:'das',
          pl:'Hobbys',
          en:'hobby',
          ph:'HOB-bee'
        },
        {
          de:'Fahrrad',
          art:'das',
          pl:'Fahrräder',
          en:'bicycle',
          ph:'FAHR-raht'
        },
        {
          de:'wandern',
          art:'',
          pl:'',
          en:'to hike',
          ph:'VAHN-dern'
        },
        {
          de:'angeln',
          art:'',
          pl:'',
          en:'to fish',
          ph:'AHNG-eln'
        },
        {
          de:'Verein',
          art:'der',
          pl:'Vereine',
          en:'club, association',
          ph:'fair-INE'
        },
        {
          de:'Kurs',
          art:'der',
          pl:'Kurse',
          en:'course',
          ph:'koors'
        },
        {
          de:'Freizeit',
          art:'die',
          pl:'',
          en:'free time, leisure',
          ph:'FRAI-tsite'
        },
        {
          de:'Lust',
          art:'die',
          pl:'',
          en:'desire, liking',
          ph:'loost'
        }
      ]
    },
    {
      id:'t3',
      title:'Dialogue: At the weekend',
      time:'3 min',
      kind:'dialogue',
      lines:[
        {
          who:'A',
          de:'Was machst du am Wochenende?',
          en:'What are you doing at the weekend?',
          ph:'vahs mahkhst doo ahm VOKH-en-en-de'
        },
        {
          who:'B',
          de:'Ich spiele Fußball im Verein. Kommst du mit?',
          en:'I play football in a club. Are you coming along?',
          ph:'ish SHPEE-le FOOS-bahl im fair-INE. komst doo mit'
        },
        {
          who:'A',
          de:'Gern! Ich habe Lust, Fußball zu spielen.',
          en:'Gladly! I feel like playing football.',
          ph:'gairn! ish HAH-be loost, FOOS-bahl tsoo SHPEE-len'
        },
        {
          who:'B',
          de:'Super! Wir trainieren am Samstag um 10 Uhr.',
          en:'Great! We train on Saturday at 10 o\'clock.',
          ph:'ZOO-per! veer trai-NEE-ren ahm ZAHMS-tahk oom tsayn oor'
        },
        {
          who:'A',
          de:'Ich freue mich, dich zu sehen.',
          en:'I am happy to see you.',
          ph:'ish FROY-e mikh, dikh tsoo ZAY-en'
        },
        {
          who:'B',
          de:'Bis Samstag!',
          en:'See you Saturday!',
          ph:'bis ZAHMS-tahk'
        }
      ],
      speak:{
        prompt:'Say out loud: "Ich habe Lust, Fußball zu spielen. Ich freue mich, dich zu sehen."',
        model:[
          'Ich habe Lust, Fußball zu spielen.',
          'Ich freue mich, dich zu sehen.',
          'Was machst du am Wochenende?'
        ]
      }
    },
    {
      id:'t4',
      title:'Grammar: "zu" + infinitive',
      time:'3 min',
      kind:'grammar',
      grammar:{
        title:'"zu" + infinitive',
        plain:'After some verbs, the infinitive comes with "zu": "Ich habe Lust zu schwimmen." (I feel like swimming.) "Ich freue mich, dich zu sehen." (I am happy to see you.) The "zu" goes before the infinitive, at the end.',
        rule:'Lust haben + zu + infinitive · sich freuen + zu + infinitive · "zu" always sits right before the infinitive, at the end',
        examples:[
          {
            de:'Ich habe Lust, Fußball zu spielen.',
            en:'I feel like playing football.',
            ph:'ish HAH-be loost, FOOS-bahl tsoo SHPEE-len'
          },
          {
            de:'Ich freue mich, dich zu sehen.',
            en:'I am happy to see you.',
            ph:'ish FROY-e mikh, dikh tsoo ZAY-en'
          },
          {
            de:'Es ist schön, hier zu sein.',
            en:'It is nice to be here.',
            ph:'es ist shoen, heer tsoo zine'
          }
        ]
      }
    },
    {
      id:'t5',
      title:'Quiz: "zu" + infinitive',
      time:'3 min',
      kind:'quiz',
      questions:[
        {q:'Fill in: "Ich habe Lust, Fußball ___ spielen."', options:['zu', 'nach', 'um', 'mit'], answer:0,
         why:'"Lust haben" takes "zu" + infinitive: Lust zu spielen.'},
        {q:'Fill in: "Ich freue mich, dich ___ sehen."', options:['zu', 'nach', 'um', 'mit'], answer:0,
         why:'"sich freuen" takes "zu" + infinitive: dich zu sehen.'},
        {q:'Where does "zu" go?', options:['Before the verb', 'Right before the infinitive, at the end', 'After the subject', 'At the start'], answer:1,
         why:'"zu" sits right before the infinitive, at the end of the sentence.'}
      ]
    },
    {
      id:'t6',
      title:'Quiz: free time',
      time:'2 min',
      kind:'quiz',
      questions:[
        {q:'What does "gewinnen" mean?', options:['to lose', 'to win', 'to train', 'to play'], answer:1,
         why:'gewinnen = to win. verlieren = to lose.'},
        {q:'What is "die Mannschaft"?', options:['the trainer', 'the team', 'the club', 'the game'], answer:1,
         why:'die Mannschaft = the team. der Trainer = the trainer, der Verein = the club.'}
      ]
    }
  ],
  next:'Next: Chapter 9 — Travel & Transport',
};

CHAPTERS['A2-9'] = {
  id:'A2-9',
  n:9,
  level:'A2',
  title:'Travel & Transport',
  time:'17 min',
  concept:'Buy tickets, read timetables, and change trains — with Perfekt with "sein" and separable verbs.',
  dialogue:[
    {
      who:'A',
      de:'Entschuldigung, wann fährt der Zug nach Berlin ab?',
      en:'Excuse me, when does the train to Berlin leave?',
      ph:'ent-SHOOL-di-goong, vahn fairt dair tsook nahkh bair-LEEN ahp'
    },
    {
      who:'B',
      de:'Der Zug fährt um 14 Uhr 30 von Gleis 5 ab.',
      en:'The train leaves at 2:30 pm from platform 5.',
      ph:'dair tsook fairt oom FEER-tsayn oor DRAI-sish fon glise fuenf ahp'
    },
    {
      who:'A',
      de:'Muss ich umsteigen?',
      en:'Do I have to change trains?',
      ph:'moos ish OOM-shtai-gen'
    },
    {
      who:'B',
      de:'Nein, der Zug fährt direkt. Sie kommen um 17 Uhr an.',
      en:'No, the train goes direct. You arrive at 5 pm.',
      ph:'nine, dair tsook fairt di-REKT. zee KOM-men oom ZEEB-tsayn oor ahn'
    },
    {
      who:'A',
      de:'Was kostet eine Fahrkarte?',
      en:'How much is a ticket?',
      ph:'vahs KOS-tet INE-FAHR-kahr-te'
    },
    {
      who:'B',
      de:'Eine Fahrkarte kostet 49 Euro. Der Zug hat heute 20 Minuten Verspätung.',
      en:'A ticket costs 49 euros. The train is 20 minutes late today.',
      ph:'INE-FAHR-kahr-te KOS-tet NOIN-oont-FEER-tsish OY-ro. dair tsook haht HOY-te TSVAHN-tsish mi-NOO-ten fair-SHPAY-toong'
    }
  ],
  vocab:[
    {
      de:'U-Bahn',
      art:'die',
      pl:'U-Bahnen',
      en:'underground, metro',
      ph:'OO-bahn'
    },
    {
      de:'S-Bahn',
      art:'die',
      pl:'S-Bahnen',
      en:'suburban train',
      ph:'ES-bahn'
    },
    {
      de:'Straßenbahn',
      art:'die',
      pl:'Straßenbahnen',
      en:'tram',
      ph:'SHTRAH-sen-bahn'
    },
    {
      de:'Taxi',
      art:'das',
      pl:'Taxis',
      en:'taxi',
      ph:'TAHK-see'
    },
    {
      de:'Auto',
      art:'das',
      pl:'Autos',
      en:'car',
      ph:'OW-toh'
    },
    {
      de:'Motorrad',
      art:'das',
      pl:'Motorräder',
      en:'motorbike',
      ph:'moh-toh-RAHT'
    },
    {
      de:'Flugzeug',
      art:'das',
      pl:'Flugzeuge',
      en:'airplane',
      ph:'FLOOK-tsoyk'
    },
    {
      de:'Abfahrt',
      art:'die',
      pl:'Abfahrten',
      en:'departure',
      ph:'AHP-fahrt'
    },
    {
      de:'Ankunft',
      art:'die',
      pl:'Ankünfte',
      en:'arrival',
      ph:'AHN-koonft'
    },
    {
      de:'Rucksack',
      art:'der',
      pl:'Rucksäcke',
      en:'backpack',
      ph:'ROOK-zahk'
    },
    {
      de:'Fahrgast',
      art:'der',
      pl:'Fahrgäste',
      en:'passenger',
      ph:'FAHR-gahst'
    },
    {
      de:'Schaffner',
      art:'der',
      pl:'Schaffner',
      en:'conductor',
      ph:'SHAHF-ner'
    },
    {
      de:'Fahrschein',
      art:'der',
      pl:'Fahrscheine',
      en:'ticket',
      ph:'FAHR-shine'
    },
    {
      de:'Monatskarte',
      art:'die',
      pl:'Monatskarten',
      en:'monthly ticket',
      ph:'MOH-nahts-kahr-te'
    },
    {
      de:'Gleis',
      art:'das',
      pl:'Gleise',
      en:'platform, track',
      ph:'glice'
    },
    {
      de:'Ausgang',
      art:'der',
      pl:'Ausgänge',
      en:'exit',
      ph:'OWS-gahng'
    },
    {
      de:'Eingang',
      art:'der',
      pl:'Eingänge',
      en:'entrance',
      ph:'INE-gahng'
    },
    {
      de:'Information',
      art:'die',
      pl:'Informationen',
      en:'information',
      ph:'in-for-mah-TSEE-ohn'
    },
    {
      de:'Ansage',
      art:'die',
      pl:'Ansagen',
      en:'announcement',
      ph:'AHN-zah-ge'
    },
    {
      de:'Durchsage',
      art:'die',
      pl:'Durchsagen',
      en:'announcement (PA)',
      ph:'DOORKH-zah-ge'
    },
    {
      de:'pünktlich',
      art:'',
      pl:'',
      en:'on time',
      ph:'PUENKT-likh'
    },
    {
      de:'Stau',
      art:'der',
      pl:'Staus',
      en:'traffic jam',
      ph:'shtau'
    },
    {
      de:'Verkehr',
      art:'der',
      pl:'',
      en:'traffic',
      ph:'fair-KAIR'
    },
    {
      de:'Ampel',
      art:'die',
      pl:'Ampeln',
      en:'traffic light',
      ph:'AHM-pel'
    },
    {
      de:'Kreuzung',
      art:'die',
      pl:'Kreuzungen',
      en:'crossroads',
      ph:'KROY-tsoong'
    },
    {
      de:'Brücke',
      art:'die',
      pl:'Brücken',
      en:'bridge',
      ph:'BRUEK-ke'
    },
    {
      de:'Tunnel',
      art:'der',
      pl:'Tunnel',
      en:'tunnel',
      ph:'TOO-nel'
    },
    {
      de:'fliegen',
      art:'',
      pl:'',
      en:'to fly',
      ph:'FLEE-gen'
    },
    {
      de:'steigen',
      art:'',
      pl:'',
      en:'to climb, to get on',
      ph:'SHTAI-gen'
    },
    {
      de:'einsteigen',
      art:'',
      pl:'',
      en:'to get in/on',
      ph:'INE-shtai-gen'
    },
    {
      de:'aussteigen',
      art:'',
      pl:'',
      en:'to get out/off',
      ph:'OWS-shtai-gen'
    },
    {
      de:'losfahren',
      art:'',
      pl:'',
      en:'to set off, to leave',
      ph:'LOHS-fah-ren'
    },
    {
      de:'wegfahren',
      art:'',
      pl:'',
      en:'to drive away',
      ph:'VEK-fah-ren'
    },
    {
      de:'mitfahren',
      art:'',
      pl:'',
      en:'to ride along',
      ph:'MIT-fah-ren'
    },
    {
      de:'buchen',
      art:'',
      pl:'',
      en:'to book',
      ph:'BOO-khen'
    },
    {
      de:'Fahrpreis',
      art:'der',
      pl:'Fahrpreise',
      en:'fare',
      ph:'FAHR-price'
    },
    {
      de:'Ermäßigung',
      art:'die',
      pl:'Ermäßigungen',
      en:'reduction, discount',
      ph:'air-MAY-si-goong'
    },
    {
      de:'Studentenausweis',
      art:'der',
      pl:'Studentenausweise',
      en:'student ID',
      ph:'shtoo-DEN-ten-ows-vice'
    },
    {
      de:'Fahrplan',
      art:'der',
      pl:'Fahrpläne',
      en:'timetable',
      ph:'FAHR-plahn'
    },
    {
      de:'Fahrkarte',
      art:'die',
      pl:'Fahrkarten',
      en:'ticket',
      ph:'FAHR-kahr-te'
    },
    {
      de:'Bahnsteig',
      art:'der',
      pl:'Bahnsteige',
      en:'platform',
      ph:'BAHN-shtaik'
    },
    {
      de:'umsteigen',
      art:'',
      pl:'',
      en:'to change (trains)',
      ph:'OOM-shtai-gen'
    },
    {
      de:'Verspätung',
      art:'die',
      pl:'Verspätungen',
      en:'delay',
      ph:'fair-SHPAY-toong'
    },
    {
      de:'ankommen',
      art:'',
      pl:'',
      en:'to arrive',
      ph:'AHN-kom-men'
    },
    {
      de:'abfahren',
      art:'',
      pl:'',
      en:'to depart',
      ph:'AHP-fah-ren'
    },
    {
      de:'Haltestelle',
      art:'die',
      pl:'Haltestellen',
      en:'stop, station',
      ph:'HAHL-te-shtel-le'
    }
  ],
  grammar:{
    title:'Perfekt with "sein" — and separable verbs',
    plain:'Most verbs use "haben" in the Perfekt — but verbs of movement and change use "sein": "Ich bin nach Berlin gefahren." "Ich bin um 8 Uhr angekommen." Separable verbs put "ge-" in the MIDDLE: ankommen → angekommen, aufstehen → aufgestanden, einkaufen → eingekauft.',
    rule:'sein + Partizip II for movement/change: ich bin gefahren, angekommen · separable: an-ge-kommen, auf-ge-standen, ein-ge-kauft',
    examples:[
      {
        de:'Ich bin nach Berlin gefahren.',
        en:'I travelled to Berlin.',
        ph:'ish bin nahkh bair-LEEN ge-FAH-ren'
      },
      {
        de:'Ich bin um 8 Uhr angekommen.',
        en:'I arrived at 8 o\'clock.',
        ph:'ish bin oom ahkht oor AHN-ge-kom-men'
      },
      {
        de:'Ich bin heute früh aufgestanden.',
        en:'I got up early today.',
        ph:'ish bin HOY-te frue OWF-ge-shtahn-den'
      }
    ]
  },
  quiz:[
    {q:'Fill in: "Ich bin nach Berlin ___."', options:['gefahren', 'gefahr', 'gefahren ist', 'fahren'], answer:0,
     why:'Movement → "sein" + Partizip II: Ich bin gefahren.'},
    {q:'Fill in: "Ich bin um 8 Uhr ___."', options:['angekommen', 'angekomm', 'gekommen an', 'ankommen'], answer:0,
     why:'ankommen → angekommen. The "ge-" goes in the middle.'},
    {q:'What is the Partizip II of "aufstehen"?', options:['aufgestanden', 'aufgestehen', 'gestanden auf', 'aufstehen'], answer:0,
     why:'aufstehen → aufgestanden: "Ich bin früh aufgestanden."'},
    {q:'Which verb takes "sein" in the Perfekt?', options:['lernen', 'fahren', 'kochen', 'arbeiten'], answer:1,
     why:'Verbs of movement take "sein": fahren, gehen, kommen, ankommen.'},
    {q:'What does "umsteigen" mean?', options:['to arrive', 'to depart', 'to change (trains)', 'to wait'], answer:2,
     why:'umsteigen = to change trains. "Muss ich umsteigen?"'}
  ],
  speak:{
    prompt:'Say out loud: "Ich bin nach Berlin gefahren. Ich bin um 8 Uhr angekommen."',
    model:['Ich bin nach Berlin gefahren.', 'Ich bin um 8 Uhr angekommen.', 'Der Zug fährt um 14 Uhr 30 ab.']
  },
  recap:[
    'Movement/change verbs take "sein": ich bin gefahren, angekommen.',
    'Separable verbs: "ge-" goes in the middle — angekommen, aufgestanden.',
    'At the station: der Fahrplan, die Fahrkarte, der Bahnsteig, das Gleis.',
    'Ask: "Wann fährt der Zug ab?" — "Muss ich umsteigen?"'
  ],
  tip:'Memory tip: if the verb moves you (fahren, gehen, kommen, ankommen, aufstehen), use "sein". If it stays in one place (lernen, kochen, arbeiten), use "haben".',
  extra:[
    {
      q:'Say "I travelled to Berlin."',
      a:'Ich bin nach Berlin gefahren.'
    },
    {
      q:'Say "I arrived at 8 o\'clock."',
      a:'Ich bin um 8 Uhr angekommen.'
    },
    {
      q:'What is the Partizip II of "einkaufen"?',
      a:'eingekauft — "Ich habe eingekauft."'
    }
  ],
  topics:[
    {
      id:'t1',
      title:'Transport words',
      time:'3 min',
      kind:'words',
      vocab:[
        {
          de:'U-Bahn',
          art:'die',
          pl:'U-Bahnen',
          en:'underground, metro',
          ph:'OO-bahn'
        },
        {
          de:'S-Bahn',
          art:'die',
          pl:'S-Bahnen',
          en:'suburban train',
          ph:'ES-bahn'
        },
        {
          de:'Straßenbahn',
          art:'die',
          pl:'Straßenbahnen',
          en:'tram',
          ph:'SHTRAH-sen-bahn'
        },
        {
          de:'Taxi',
          art:'das',
          pl:'Taxis',
          en:'taxi',
          ph:'TAHK-see'
        },
        {
          de:'Auto',
          art:'das',
          pl:'Autos',
          en:'car',
          ph:'OW-toh'
        },
        {
          de:'Motorrad',
          art:'das',
          pl:'Motorräder',
          en:'motorbike',
          ph:'moh-toh-RAHT'
        },
        {
          de:'Flugzeug',
          art:'das',
          pl:'Flugzeuge',
          en:'airplane',
          ph:'FLOOK-tsoyk'
        },
        {
          de:'Abfahrt',
          art:'die',
          pl:'Abfahrten',
          en:'departure',
          ph:'AHP-fahrt'
        },
        {
          de:'Ankunft',
          art:'die',
          pl:'Ankünfte',
          en:'arrival',
          ph:'AHN-koonft'
        },
        {
          de:'Rucksack',
          art:'der',
          pl:'Rucksäcke',
          en:'backpack',
          ph:'ROOK-zahk'
        },
        {
          de:'Fahrgast',
          art:'der',
          pl:'Fahrgäste',
          en:'passenger',
          ph:'FAHR-gahst'
        },
        {
          de:'Schaffner',
          art:'der',
          pl:'Schaffner',
          en:'conductor',
          ph:'SHAHF-ner'
        },
        {
          de:'Fahrschein',
          art:'der',
          pl:'Fahrscheine',
          en:'ticket',
          ph:'FAHR-shine'
        },
        {
          de:'Monatskarte',
          art:'die',
          pl:'Monatskarten',
          en:'monthly ticket',
          ph:'MOH-nahts-kahr-te'
        },
        {
          de:'Gleis',
          art:'das',
          pl:'Gleise',
          en:'platform, track',
          ph:'glice'
        },
        {
          de:'Ausgang',
          art:'der',
          pl:'Ausgänge',
          en:'exit',
          ph:'OWS-gahng'
        },
        {
          de:'Eingang',
          art:'der',
          pl:'Eingänge',
          en:'entrance',
          ph:'INE-gahng'
        },
        {
          de:'Information',
          art:'die',
          pl:'Informationen',
          en:'information',
          ph:'in-for-mah-TSEE-ohn'
        },
        {
          de:'Ansage',
          art:'die',
          pl:'Ansagen',
          en:'announcement',
          ph:'AHN-zah-ge'
        },
        {
          de:'Durchsage',
          art:'die',
          pl:'Durchsagen',
          en:'announcement (PA)',
          ph:'DOORKH-zah-ge'
        },
        {
          de:'pünktlich',
          art:'',
          pl:'',
          en:'on time',
          ph:'PUENKT-likh'
        },
        {
          de:'Stau',
          art:'der',
          pl:'Staus',
          en:'traffic jam',
          ph:'shtau'
        }
      ]
    },
    {
      id:'t2',
      title:'At the station words',
      time:'3 min',
      kind:'words',
      vocab:[
        {
          de:'Verkehr',
          art:'der',
          pl:'',
          en:'traffic',
          ph:'fair-KAIR'
        },
        {
          de:'Ampel',
          art:'die',
          pl:'Ampeln',
          en:'traffic light',
          ph:'AHM-pel'
        },
        {
          de:'Kreuzung',
          art:'die',
          pl:'Kreuzungen',
          en:'crossroads',
          ph:'KROY-tsoong'
        },
        {
          de:'Brücke',
          art:'die',
          pl:'Brücken',
          en:'bridge',
          ph:'BRUEK-ke'
        },
        {
          de:'Tunnel',
          art:'der',
          pl:'Tunnel',
          en:'tunnel',
          ph:'TOO-nel'
        },
        {
          de:'fliegen',
          art:'',
          pl:'',
          en:'to fly',
          ph:'FLEE-gen'
        },
        {
          de:'steigen',
          art:'',
          pl:'',
          en:'to climb, to get on',
          ph:'SHTAI-gen'
        },
        {
          de:'einsteigen',
          art:'',
          pl:'',
          en:'to get in/on',
          ph:'INE-shtai-gen'
        },
        {
          de:'aussteigen',
          art:'',
          pl:'',
          en:'to get out/off',
          ph:'OWS-shtai-gen'
        },
        {
          de:'losfahren',
          art:'',
          pl:'',
          en:'to set off, to leave',
          ph:'LOHS-fah-ren'
        },
        {
          de:'wegfahren',
          art:'',
          pl:'',
          en:'to drive away',
          ph:'VEK-fah-ren'
        },
        {
          de:'mitfahren',
          art:'',
          pl:'',
          en:'to ride along',
          ph:'MIT-fah-ren'
        },
        {
          de:'buchen',
          art:'',
          pl:'',
          en:'to book',
          ph:'BOO-khen'
        },
        {
          de:'Fahrpreis',
          art:'der',
          pl:'Fahrpreise',
          en:'fare',
          ph:'FAHR-price'
        },
        {
          de:'Ermäßigung',
          art:'die',
          pl:'Ermäßigungen',
          en:'reduction, discount',
          ph:'air-MAY-si-goong'
        },
        {
          de:'Studentenausweis',
          art:'der',
          pl:'Studentenausweise',
          en:'student ID',
          ph:'shtoo-DEN-ten-ows-vice'
        },
        {
          de:'Fahrplan',
          art:'der',
          pl:'Fahrpläne',
          en:'timetable',
          ph:'FAHR-plahn'
        },
        {
          de:'Fahrkarte',
          art:'die',
          pl:'Fahrkarten',
          en:'ticket',
          ph:'FAHR-kahr-te'
        },
        {
          de:'Bahnsteig',
          art:'der',
          pl:'Bahnsteige',
          en:'platform',
          ph:'BAHN-shtaik'
        },
        {
          de:'umsteigen',
          art:'',
          pl:'',
          en:'to change (trains)',
          ph:'OOM-shtai-gen'
        },
        {
          de:'Verspätung',
          art:'die',
          pl:'Verspätungen',
          en:'delay',
          ph:'fair-SHPAY-toong'
        },
        {
          de:'ankommen',
          art:'',
          pl:'',
          en:'to arrive',
          ph:'AHN-kom-men'
        },
        {
          de:'abfahren',
          art:'',
          pl:'',
          en:'to depart',
          ph:'AHP-fah-ren'
        },
        {
          de:'Haltestelle',
          art:'die',
          pl:'Haltestellen',
          en:'stop, station',
          ph:'HAHL-te-shtel-le'
        }
      ]
    },
    {
      id:'t3',
      title:'Dialogue: At the station',
      time:'3 min',
      kind:'dialogue',
      lines:[
        {
          who:'A',
          de:'Entschuldigung, wann fährt der Zug nach Berlin ab?',
          en:'Excuse me, when does the train to Berlin leave?',
          ph:'ent-SHOOL-di-goong, vahn fairt dair tsook nahkh bair-LEEN ahp'
        },
        {
          who:'B',
          de:'Der Zug fährt um 14 Uhr 30 von Gleis 5 ab.',
          en:'The train leaves at 2:30 pm from platform 5.',
          ph:'dair tsook fairt oom FEER-tsayn oor DRAI-sish fon glise fuenf ahp'
        },
        {
          who:'A',
          de:'Muss ich umsteigen?',
          en:'Do I have to change trains?',
          ph:'moos ish OOM-shtai-gen'
        },
        {
          who:'B',
          de:'Nein, der Zug fährt direkt. Sie kommen um 17 Uhr an.',
          en:'No, the train goes direct. You arrive at 5 pm.',
          ph:'nine, dair tsook fairt di-REKT. zee KOM-men oom ZEEB-tsayn oor ahn'
        },
        {
          who:'A',
          de:'Was kostet eine Fahrkarte?',
          en:'How much is a ticket?',
          ph:'vahs KOS-tet INE-FAHR-kahr-te'
        },
        {
          who:'B',
          de:'Eine Fahrkarte kostet 49 Euro. Der Zug hat heute 20 Minuten Verspätung.',
          en:'A ticket costs 49 euros. The train is 20 minutes late today.',
          ph:'INE-FAHR-kahr-te KOS-tet NOIN-oont-FEER-tsish OY-ro. dair tsook haht HOY-te TSVAHN-tsish mi-NOO-ten fair-SHPAY-toong'
        }
      ],
      speak:{
        prompt:'Say out loud: "Ich bin nach Berlin gefahren. Ich bin um 8 Uhr angekommen."',
        model:['Ich bin nach Berlin gefahren.', 'Ich bin um 8 Uhr angekommen.', 'Der Zug fährt um 14 Uhr 30 ab.']
      }
    },
    {
      id:'t4',
      title:'Grammar: Perfekt with "sein"',
      time:'3 min',
      kind:'grammar',
      grammar:{
        title:'Perfekt with "sein" — and separable verbs',
        plain:'Most verbs use "haben" in the Perfekt — but verbs of movement and change use "sein": "Ich bin nach Berlin gefahren." "Ich bin um 8 Uhr angekommen." Separable verbs put "ge-" in the MIDDLE: ankommen → angekommen, aufstehen → aufgestanden, einkaufen → eingekauft.',
        rule:'sein + Partizip II for movement/change: ich bin gefahren, angekommen · separable: an-ge-kommen, auf-ge-standen, ein-ge-kauft',
        examples:[
          {
            de:'Ich bin nach Berlin gefahren.',
            en:'I travelled to Berlin.',
            ph:'ish bin nahkh bair-LEEN ge-FAH-ren'
          },
          {
            de:'Ich bin um 8 Uhr angekommen.',
            en:'I arrived at 8 o\'clock.',
            ph:'ish bin oom ahkht oor AHN-ge-kom-men'
          },
          {
            de:'Ich bin heute früh aufgestanden.',
            en:'I got up early today.',
            ph:'ish bin HOY-te frue OWF-ge-shtahn-den'
          }
        ]
      }
    },
    {
      id:'t5',
      title:'Quiz: sein or haben?',
      time:'3 min',
      kind:'quiz',
      questions:[
        {q:'Fill in: "Ich bin nach Berlin ___."', options:['gefahren', 'gefahr', 'gefahren ist', 'fahren'], answer:0,
         why:'Movement → "sein" + Partizip II: Ich bin gefahren.'},
        {q:'Fill in: "Ich bin um 8 Uhr ___."', options:['angekommen', 'angekomm', 'gekommen an', 'ankommen'], answer:0,
         why:'ankommen → angekommen. The "ge-" goes in the middle.'},
        {q:'What is the Partizip II of "aufstehen"?', options:['aufgestanden', 'aufgestehen', 'gestanden auf', 'aufstehen'], answer:0,
         why:'aufstehen → aufgestanden: "Ich bin früh aufgestanden."'}
      ]
    },
    {
      id:'t6',
      title:'Quiz: travel',
      time:'2 min',
      kind:'quiz',
      questions:[
        {q:'Which verb takes "sein" in the Perfekt?', options:['lernen', 'fahren', 'kochen', 'arbeiten'], answer:1,
         why:'Verbs of movement take "sein": fahren, gehen, kommen, ankommen.'},
        {q:'What does "umsteigen" mean?', options:['to arrive', 'to depart', 'to change (trains)', 'to wait'], answer:2,
         why:'umsteigen = to change trains. "Muss ich umsteigen?"'}
      ]
    }
  ],
  next:'Next: Chapter 10 — Media & Communication',
};

CHAPTERS['A2-10'] = {
  id:'A2-10',
  n:10,
  level:'A2',
  title:'Media & Communication',
  time:'17 min',
  concept:'Talk about news, phones and the internet — with the fixed prepositions for media.',
  dialogue:[
    {
      who:'A',
      de:'Was liest du da?',
      en:'What are you reading there?',
      ph:'vahs leest doo dah'
    },
    {
      who:'B',
      de:'Ich lese die Nachrichten im Internet.',
      en:'I am reading the news on the internet.',
      ph:'ish LAY-ze dee NAHKH-rikh-ten im in-tair-NET'
    },
    {
      who:'A',
      de:'Ich schaue lieber fern. Heute Abend gibt es eine gute Dokumentation.',
      en:'I prefer watching TV. Tonight there is a good documentary.',
      ph:'ish SHOW-e LEE-ber fairn. HOY-te AH-bent geept es INE-goo-te do-koo-men-tah-TSEE-ohn'
    },
    {
      who:'B',
      de:'Ich höre lieber einen Podcast. Ich folge einem deutschen Podcast.',
      en:'I prefer listening to a podcast. I follow a German podcast.',
      ph:'ish HOE-re LEE-ber INE-en POD-kahst. ish FOL-ge INE-em DOY-chen POD-kahst'
    },
    {
      who:'A',
      de:'Ich poste jeden Tag ein Foto. Hast du mein Foto gesehen?',
      en:'I post a photo every day. Have you seen my photo?',
      ph:'ish POS-te YAY-den tahk ine FOH-toh. hahst doo mine FOH-toh ge-ZAY-en'
    },
    {
      who:'B',
      de:'Ja, ich habe es geliked!',
      en:'Yes, I liked it!',
      ph:'yah, ish HAH-be es ge-LIKED'
    }
  ],
  vocab:[
    {
      de:'Schlagzeile',
      art:'die',
      pl:'Schlagzeilen',
      en:'headline',
      ph:'SHLAHK-tsai-le'
    },
    {
      de:'Artikel',
      art:'der',
      pl:'Artikel',
      en:'article',
      ph:'ahr-TIK-kel'
    },
    {
      de:'Sendung',
      art:'die',
      pl:'Sendungen',
      en:'programme, show',
      ph:'ZEN-doong'
    },
    {
      de:'Sender',
      art:'der',
      pl:'Sender',
      en:'channel, broadcaster',
      ph:'ZEN-der'
    },
    {
      de:'Programm',
      art:'das',
      pl:'Programme',
      en:'programme',
      ph:'pro-GRAHM'
    },
    {
      de:'Werbung',
      art:'die',
      pl:'',
      en:'advertising',
      ph:'VAIR-boong'
    },
    {
      de:'Bericht',
      art:'der',
      pl:'Berichte',
      en:'report',
      ph:'be-RIKHT'
    },
    {
      de:'Reportage',
      art:'die',
      pl:'Reportagen',
      en:'reportage, feature',
      ph:'re-por-TAH-zhe'
    },
    {
      de:'Moderator',
      art:'der',
      pl:'Moderatoren',
      en:'presenter (male)',
      ph:'mo-de-rah-TOR'
    },
    {
      de:'Moderatorin',
      art:'die',
      pl:'Moderatorinnen',
      en:'presenter (female)',
      ph:'mo-de-rah-TOH-rin'
    },
    {
      de:'Folge',
      art:'die',
      pl:'Folgen',
      en:'episode',
      ph:'FOL-ge'
    },
    {
      de:'Serie',
      art:'die',
      pl:'Serien',
      en:'series',
      ph:'ZAY-ree-e'
    },
    {
      de:'Dokumentation',
      art:'die',
      pl:'Dokumentationen',
      en:'documentary',
      ph:'do-koo-men-tah-TSEE-ohn'
    },
    {
      de:'Podcast',
      art:'der',
      pl:'Podcasts',
      en:'podcast',
      ph:'POD-kahst'
    },
    {
      de:'Video',
      art:'das',
      pl:'Videos',
      en:'video',
      ph:'VEE-de-oh'
    },
    {
      de:'Bildschirm',
      art:'der',
      pl:'Bildschirme',
      en:'screen',
      ph:'BILT-sheerm'
    },
    {
      de:'Tastatur',
      art:'die',
      pl:'Tastaturen',
      en:'keyboard',
      ph:'tahs-tah-TOOR'
    },
    {
      de:'Passwort',
      art:'das',
      pl:'Passwörter',
      en:'password',
      ph:'PAHS-vort'
    },
    {
      de:'App',
      art:'die',
      pl:'Apps',
      en:'app',
      ph:'ap'
    },
    {
      de:'Smartphone',
      art:'das',
      pl:'Smartphones',
      en:'smartphone',
      ph:'SMAHRT-fohn'
    },
    {
      de:'Tablet',
      art:'das',
      pl:'Tablets',
      en:'tablet',
      ph:'TAB-let'
    },
    {
      de:'Laptop',
      art:'der',
      pl:'Laptops',
      en:'laptop',
      ph:'LAP-top'
    },
    {
      de:'Kommentar',
      art:'der',
      pl:'Kommentare',
      en:'comment',
      ph:'kom-men-TAHR'
    },
    {
      de:'liken',
      art:'',
      pl:'',
      en:'to like (online)',
      ph:'LAI-ken'
    },
    {
      de:'teilen',
      art:'',
      pl:'',
      en:'to share',
      ph:'TAI-len'
    },
    {
      de:'posten',
      art:'',
      pl:'',
      en:'to post',
      ph:'POS-ten'
    },
    {
      de:'folgen',
      art:'',
      pl:'',
      en:'to follow',
      ph:'FOL-gen'
    },
    {
      de:'abonnieren',
      art:'',
      pl:'',
      en:'to subscribe',
      ph:'ah-bon-NEE-ren'
    },
    {
      de:'herunterladen',
      art:'',
      pl:'',
      en:'to download',
      ph:'hair-OON-ter-lah-den'
    },
    {
      de:'hochladen',
      art:'',
      pl:'',
      en:'to upload',
      ph:'HOHKH-lah-den'
    },
    {
      de:'online',
      art:'',
      pl:'',
      en:'online',
      ph:'ON-line'
    },
    {
      de:'offline',
      art:'',
      pl:'',
      en:'offline',
      ph:'OFF-line'
    },
    {
      de:'digital',
      art:'',
      pl:'',
      en:'digital',
      ph:'di-gi-TAHL'
    },
    {
      de:'sehen',
      art:'',
      pl:'',
      en:'to see',
      ph:'ZAY-en'
    },
    {
      de:'schauen',
      art:'',
      pl:'',
      en:'to watch, to look',
      ph:'SHOW-en'
    },
    {
      de:'gucken',
      art:'',
      pl:'',
      en:'to look (colloquial)',
      ph:'GOO-ken'
    },
    {
      de:'Fernseher',
      art:'der',
      pl:'Fernseher',
      en:'TV set',
      ph:'FAIRN-zay-er'
    },
    {
      de:'Radio',
      art:'das',
      pl:'Radios',
      en:'radio',
      ph:'RAH-dee-oh'
    },
    {
      de:'Zeitung',
      art:'die',
      pl:'Zeitungen',
      en:'newspaper',
      ph:'TSAI-toong'
    },
    {
      de:'Zeitschrift',
      art:'die',
      pl:'Zeitschriften',
      en:'magazine',
      ph:'TSAIT-shrift'
    },
    {
      de:'Nachricht',
      art:'die',
      pl:'Nachrichten',
      en:'news, message',
      ph:'NAHKH-rikht'
    },
    {
      de:'Handy',
      art:'das',
      pl:'Handys',
      en:'mobile phone',
      ph:'HEN-dee'
    },
    {
      de:'Internet',
      art:'das',
      pl:'',
      en:'internet',
      ph:'in-tair-NET'
    },
    {
      de:'Computer',
      art:'der',
      pl:'Computer',
      en:'computer',
      ph:'kom-PYOO-ter'
    },
    {
      de:'E-Mail',
      art:'die',
      pl:'E-Mails',
      en:'email',
      ph:'EE-mayl'
    },
    {
      de:'surfen',
      art:'',
      pl:'',
      en:'to surf the web',
      ph:'ZOOR-fen'
    }
  ],
  grammar:{
    title:'Prepositions for media — in, auf, bei',
    plain:'"in der Zeitung" (in the newspaper), "im Internet" (on the internet), "am Handy" (on the phone). Media words take fixed prepositions — learn them as phrases, not as rules.',
    rule:'in der Zeitung · im Internet · am Handy · im Fernsehen · im Radio',
    examples:[
      {
        de:'Ich lese die Nachrichten in der Zeitung.',
        en:'I read the news in the newspaper.',
        ph:'ish LAY-ze dee NAHKH-rikh-ten in dair TSAI-toong'
      },
      {
        de:'Ich sehe einen Film im Internet.',
        en:'I watch a film on the internet.',
        ph:'ish ZAY-e INE-en film im in-tair-NET'
      },
      {
        de:'Ich bin am Handy.',
        en:'I am on the phone.',
        ph:'ish bin ahm HEN-dee'
      }
    ]
  },
  quiz:[
    {q:'Fill in: "Ich lese die Nachrichten ___ Internet."', options:['in der', 'im', 'am', 'auf dem'], answer:1,
     why:'"im Internet" — learn it as a fixed phrase.'},
    {q:'Fill in: "Ich bin ___ Handy."', options:['in der', 'im', 'am', 'auf dem'], answer:2,
     why:'"am Handy" — on the phone.'},
    {q:'Fill in: "Ich lese die Nachrichten ___ Zeitung."', options:['in der', 'im', 'am', 'auf der'], answer:0,
     why:'"in der Zeitung" — in the newspaper.'},
    {q:'What does "herunterladen" mean?', options:['to upload', 'to download', 'to post', 'to follow'], answer:1,
     why:'herunterladen = to download. hochladen = to upload.'},
    {q:'What is "die Schlagzeile"?', options:['the article', 'the headline', 'the programme', 'the channel'], answer:1,
     why:'die Schlagzeile = the headline. der Artikel = the article.'}
  ],
  speak:{
    prompt:'Say out loud: "Ich lese die Nachrichten im Internet. Ich folge einem deutschen Podcast."',
    model:[
      'Ich lese die Nachrichten im Internet.',
      'Ich schaue eine Dokumentation im Fernsehen.',
      'Ich folge einem deutschen Podcast.'
    ]
  },
  recap:[
    'Media phrases: in der Zeitung, im Internet, am Handy, im Fernsehen.',
    'Learn media prepositions as fixed phrases.',
    'Verbs: liken, teilen, posten, folgen, abonnieren.',
    'Media: die Schlagzeile, der Artikel, die Sendung, der Podcast.'
  ],
  tip:'Memory tip: never translate media prepositions word by word. Learn the whole phrase: "im Internet", "in der Zeitung", "am Handy".',
  extra:[
    {
      q:'Say "I read the news on the internet."',
      a:'Ich lese die Nachrichten im Internet.'
    },
    {
      q:'Say "I am on the phone."',
      a:'Ich bin am Handy.'
    },
    {
      q:'What does "hochladen" mean?',
      a:'to upload — "Ich lade ein Foto hoch."'
    }
  ],
  topics:[
    {
      id:'t1',
      title:'Media words',
      time:'3 min',
      kind:'words',
      vocab:[
        {
          de:'Schlagzeile',
          art:'die',
          pl:'Schlagzeilen',
          en:'headline',
          ph:'SHLAHK-tsai-le'
        },
        {
          de:'Artikel',
          art:'der',
          pl:'Artikel',
          en:'article',
          ph:'ahr-TIK-kel'
        },
        {
          de:'Sendung',
          art:'die',
          pl:'Sendungen',
          en:'programme, show',
          ph:'ZEN-doong'
        },
        {
          de:'Sender',
          art:'der',
          pl:'Sender',
          en:'channel, broadcaster',
          ph:'ZEN-der'
        },
        {
          de:'Programm',
          art:'das',
          pl:'Programme',
          en:'programme',
          ph:'pro-GRAHM'
        },
        {
          de:'Werbung',
          art:'die',
          pl:'',
          en:'advertising',
          ph:'VAIR-boong'
        },
        {
          de:'Bericht',
          art:'der',
          pl:'Berichte',
          en:'report',
          ph:'be-RIKHT'
        },
        {
          de:'Reportage',
          art:'die',
          pl:'Reportagen',
          en:'reportage, feature',
          ph:'re-por-TAH-zhe'
        },
        {
          de:'Moderator',
          art:'der',
          pl:'Moderatoren',
          en:'presenter (male)',
          ph:'mo-de-rah-TOR'
        },
        {
          de:'Moderatorin',
          art:'die',
          pl:'Moderatorinnen',
          en:'presenter (female)',
          ph:'mo-de-rah-TOH-rin'
        },
        {
          de:'Folge',
          art:'die',
          pl:'Folgen',
          en:'episode',
          ph:'FOL-ge'
        },
        {
          de:'Serie',
          art:'die',
          pl:'Serien',
          en:'series',
          ph:'ZAY-ree-e'
        },
        {
          de:'Dokumentation',
          art:'die',
          pl:'Dokumentationen',
          en:'documentary',
          ph:'do-koo-men-tah-TSEE-ohn'
        },
        {
          de:'Podcast',
          art:'der',
          pl:'Podcasts',
          en:'podcast',
          ph:'POD-kahst'
        },
        {
          de:'Video',
          art:'das',
          pl:'Videos',
          en:'video',
          ph:'VEE-de-oh'
        },
        {
          de:'Bildschirm',
          art:'der',
          pl:'Bildschirme',
          en:'screen',
          ph:'BILT-sheerm'
        },
        {
          de:'Tastatur',
          art:'die',
          pl:'Tastaturen',
          en:'keyboard',
          ph:'tahs-tah-TOOR'
        },
        {
          de:'Passwort',
          art:'das',
          pl:'Passwörter',
          en:'password',
          ph:'PAHS-vort'
        },
        {
          de:'App',
          art:'die',
          pl:'Apps',
          en:'app',
          ph:'ap'
        },
        {
          de:'Smartphone',
          art:'das',
          pl:'Smartphones',
          en:'smartphone',
          ph:'SMAHRT-fohn'
        },
        {
          de:'Tablet',
          art:'das',
          pl:'Tablets',
          en:'tablet',
          ph:'TAB-let'
        },
        {
          de:'Laptop',
          art:'der',
          pl:'Laptops',
          en:'laptop',
          ph:'LAP-top'
        }
      ]
    },
    {
      id:'t2',
      title:'Phone & internet words',
      time:'3 min',
      kind:'words',
      vocab:[
        {
          de:'Kommentar',
          art:'der',
          pl:'Kommentare',
          en:'comment',
          ph:'kom-men-TAHR'
        },
        {
          de:'liken',
          art:'',
          pl:'',
          en:'to like (online)',
          ph:'LAI-ken'
        },
        {
          de:'teilen',
          art:'',
          pl:'',
          en:'to share',
          ph:'TAI-len'
        },
        {
          de:'posten',
          art:'',
          pl:'',
          en:'to post',
          ph:'POS-ten'
        },
        {
          de:'folgen',
          art:'',
          pl:'',
          en:'to follow',
          ph:'FOL-gen'
        },
        {
          de:'abonnieren',
          art:'',
          pl:'',
          en:'to subscribe',
          ph:'ah-bon-NEE-ren'
        },
        {
          de:'herunterladen',
          art:'',
          pl:'',
          en:'to download',
          ph:'hair-OON-ter-lah-den'
        },
        {
          de:'hochladen',
          art:'',
          pl:'',
          en:'to upload',
          ph:'HOHKH-lah-den'
        },
        {
          de:'online',
          art:'',
          pl:'',
          en:'online',
          ph:'ON-line'
        },
        {
          de:'offline',
          art:'',
          pl:'',
          en:'offline',
          ph:'OFF-line'
        },
        {
          de:'digital',
          art:'',
          pl:'',
          en:'digital',
          ph:'di-gi-TAHL'
        },
        {
          de:'sehen',
          art:'',
          pl:'',
          en:'to see',
          ph:'ZAY-en'
        },
        {
          de:'schauen',
          art:'',
          pl:'',
          en:'to watch, to look',
          ph:'SHOW-en'
        },
        {
          de:'gucken',
          art:'',
          pl:'',
          en:'to look (colloquial)',
          ph:'GOO-ken'
        },
        {
          de:'Fernseher',
          art:'der',
          pl:'Fernseher',
          en:'TV set',
          ph:'FAIRN-zay-er'
        },
        {
          de:'Radio',
          art:'das',
          pl:'Radios',
          en:'radio',
          ph:'RAH-dee-oh'
        },
        {
          de:'Zeitung',
          art:'die',
          pl:'Zeitungen',
          en:'newspaper',
          ph:'TSAI-toong'
        },
        {
          de:'Zeitschrift',
          art:'die',
          pl:'Zeitschriften',
          en:'magazine',
          ph:'TSAIT-shrift'
        },
        {
          de:'Nachricht',
          art:'die',
          pl:'Nachrichten',
          en:'news, message',
          ph:'NAHKH-rikht'
        },
        {
          de:'Handy',
          art:'das',
          pl:'Handys',
          en:'mobile phone',
          ph:'HEN-dee'
        },
        {
          de:'Internet',
          art:'das',
          pl:'',
          en:'internet',
          ph:'in-tair-NET'
        },
        {
          de:'Computer',
          art:'der',
          pl:'Computer',
          en:'computer',
          ph:'kom-PYOO-ter'
        },
        {
          de:'E-Mail',
          art:'die',
          pl:'E-Mails',
          en:'email',
          ph:'EE-mayl'
        },
        {
          de:'surfen',
          art:'',
          pl:'',
          en:'to surf the web',
          ph:'ZOOR-fen'
        }
      ]
    },
    {
      id:'t3',
      title:'Dialogue: News & phones',
      time:'3 min',
      kind:'dialogue',
      lines:[
        {
          who:'A',
          de:'Was liest du da?',
          en:'What are you reading there?',
          ph:'vahs leest doo dah'
        },
        {
          who:'B',
          de:'Ich lese die Nachrichten im Internet.',
          en:'I am reading the news on the internet.',
          ph:'ish LAY-ze dee NAHKH-rikh-ten im in-tair-NET'
        },
        {
          who:'A',
          de:'Ich schaue lieber fern. Heute Abend gibt es eine gute Dokumentation.',
          en:'I prefer watching TV. Tonight there is a good documentary.',
          ph:'ish SHOW-e LEE-ber fairn. HOY-te AH-bent geept es INE-goo-te do-koo-men-tah-TSEE-ohn'
        },
        {
          who:'B',
          de:'Ich höre lieber einen Podcast. Ich folge einem deutschen Podcast.',
          en:'I prefer listening to a podcast. I follow a German podcast.',
          ph:'ish HOE-re LEE-ber INE-en POD-kahst. ish FOL-ge INE-em DOY-chen POD-kahst'
        },
        {
          who:'A',
          de:'Ich poste jeden Tag ein Foto. Hast du mein Foto gesehen?',
          en:'I post a photo every day. Have you seen my photo?',
          ph:'ish POS-te YAY-den tahk ine FOH-toh. hahst doo mine FOH-toh ge-ZAY-en'
        },
        {
          who:'B',
          de:'Ja, ich habe es geliked!',
          en:'Yes, I liked it!',
          ph:'yah, ish HAH-be es ge-LIKED'
        }
      ],
      speak:{
        prompt:'Say out loud: "Ich lese die Nachrichten im Internet. Ich folge einem deutschen Podcast."',
        model:[
          'Ich lese die Nachrichten im Internet.',
          'Ich schaue eine Dokumentation im Fernsehen.',
          'Ich folge einem deutschen Podcast.'
        ]
      }
    },
    {
      id:'t4',
      title:'Grammar: Media prepositions',
      time:'3 min',
      kind:'grammar',
      grammar:{
        title:'Prepositions for media — in, auf, bei',
        plain:'"in der Zeitung" (in the newspaper), "im Internet" (on the internet), "am Handy" (on the phone). Media words take fixed prepositions — learn them as phrases, not as rules.',
        rule:'in der Zeitung · im Internet · am Handy · im Fernsehen · im Radio',
        examples:[
          {
            de:'Ich lese die Nachrichten in der Zeitung.',
            en:'I read the news in the newspaper.',
            ph:'ish LAY-ze dee NAHKH-rikh-ten in dair TSAI-toong'
          },
          {
            de:'Ich sehe einen Film im Internet.',
            en:'I watch a film on the internet.',
            ph:'ish ZAY-e INE-en film im in-tair-NET'
          },
          {
            de:'Ich bin am Handy.',
            en:'I am on the phone.',
            ph:'ish bin ahm HEN-dee'
          }
        ]
      }
    },
    {
      id:'t5',
      title:'Quiz: in, im, am',
      time:'3 min',
      kind:'quiz',
      questions:[
        {q:'Fill in: "Ich lese die Nachrichten ___ Internet."', options:['in der', 'im', 'am', 'auf dem'], answer:1,
         why:'"im Internet" — learn it as a fixed phrase.'},
        {q:'Fill in: "Ich bin ___ Handy."', options:['in der', 'im', 'am', 'auf dem'], answer:2,
         why:'"am Handy" — on the phone.'},
        {q:'Fill in: "Ich lese die Nachrichten ___ Zeitung."', options:['in der', 'im', 'am', 'auf der'], answer:0,
         why:'"in der Zeitung" — in the newspaper.'}
      ]
    },
    {
      id:'t6',
      title:'Quiz: media',
      time:'2 min',
      kind:'quiz',
      questions:[
        {q:'What does "herunterladen" mean?', options:['to upload', 'to download', 'to post', 'to follow'], answer:1,
         why:'herunterladen = to download. hochladen = to upload.'},
        {q:'What is "die Schlagzeile"?', options:['the article', 'the headline', 'the programme', 'the channel'], answer:1,
         why:'die Schlagzeile = the headline. der Artikel = the article.'}
      ]
    }
  ],
  next:'Next: Chapter 11 — Celebrations & Traditions',
};

CHAPTERS['A2-11'] = {
  id:'A2-11',
  n:11,
  level:'A2',
  title:'Celebrations & Traditions',
  time:'17 min',
  concept:'Talk about festivals, birthdays and traditions — with time expressions and "wenn" vs "als".',
  dialogue:[
    {
      who:'A',
      de:'Alles Gute zum Geburtstag!',
      en:'Happy birthday!',
      ph:'AHL-les GOO-te tsoom ge-BOORTS-tahk'
    },
    {
      who:'B',
      de:'Danke! Letzte Woche habe ich meinen Geburtstag gefeiert.',
      en:'Thank you! Last week I celebrated my birthday.',
      ph:'DAHN-ke! LETS-te VOKH-e HAH-be ish MINE-en ge-BOORTS-tahk ge-FAI-ert'
    },
    {
      who:'A',
      de:'Was hast du gemacht?',
      en:'What did you do?',
      ph:'vahs hahst doo ge-MAHKHT'
    },
    {
      who:'B',
      de:'Wir haben zu Hause gefeiert. Es gab Kuchen und Sekt.',
      en:'We celebrated at home. There was cake and sparkling wine.',
      ph:'veer HAH-ben tsoo HOW-ze ge-FAI-ert. es gahp KOO-khen oont zekt'
    },
    {
      who:'A',
      de:'Als ich klein war, hat meine Mutter immer einen Kuchen gebacken.',
      en:'When I was little, my mother always baked a cake.',
      ph:'ahls ish kline vahr, haht MINE-e MOOT-ter IM-mer INE-en KOO-khen ge-BAH-ken'
    },
    {
      who:'B',
      de:'Schön! Nächstes Jahr feiern wir zusammen.',
      en:'Nice! Next year we will celebrate together.',
      ph:'shoen! NAYKHS-tes yahr FAI-ern veer tsoo-ZAHM-men'
    }
  ],
  vocab:[
    {
      de:'Neujahr',
      art:'das',
      pl:'',
      en:'New Year',
      ph:'NOY-yahr'
    },
    {
      de:'Silvester',
      art:'der',
      pl:'',
      en:'New Year\'s Eve',
      ph:'zil-VES-ter'
    },
    {
      de:'Karneval',
      art:'der',
      pl:'',
      en:'carnival',
      ph:'kahr-ne-VAHL'
    },
    {
      de:'Advent',
      art:'der',
      pl:'',
      en:'Advent',
      ph:'ahd-VENT'
    },
    {
      de:'Adventskalender',
      art:'der',
      pl:'Adventskalender',
      en:'Advent calendar',
      ph:'ahd-VENTS-kah-len-der'
    },
    {
      de:'Kerze',
      art:'die',
      pl:'Kerzen',
      en:'candle',
      ph:'KAIRT-se'
    },
    {
      de:'Weihnachtsbaum',
      art:'der',
      pl:'Weihnachtsbäume',
      en:'Christmas tree',
      ph:'VAI-nahks-baum'
    },
    {
      de:'Weihnachtsmarkt',
      art:'der',
      pl:'Weihnachtsmärkte',
      en:'Christmas market',
      ph:'VAI-nahks-mahrkt'
    },
    {
      de:'Nikolaus',
      art:'der',
      pl:'',
      en:'St. Nicholas',
      ph:'nee-ko-LAH-oos'
    },
    {
      de:'Osterhase',
      art:'der',
      pl:'Osterhasen',
      en:'Easter bunny',
      ph:'OHS-ter-hah-ze'
    },
    {
      de:'Osterei',
      art:'das',
      pl:'Ostereier',
      en:'Easter egg',
      ph:'OHS-ter-ai'
    },
    {
      de:'Schokolade',
      art:'die',
      pl:'',
      en:'chocolate',
      ph:'sho-ko-LAH-de'
    },
    {
      de:'Torte',
      art:'die',
      pl:'Torten',
      en:'cake, torte',
      ph:'TOR-te'
    },
    {
      de:'Einladung',
      art:'die',
      pl:'Einladungen',
      en:'invitation',
      ph:'INE-lah-doong'
    },
    {
      de:'Gäste',
      art:'die',
      pl:'',
      en:'guests',
      ph:'GAYS-te'
    },
    {
      de:'Toast',
      art:'der',
      pl:'Toasts',
      en:'toast (drink)',
      ph:'tohst'
    },
    {
      de:'anstoßen',
      art:'',
      pl:'',
      en:'to toast, to clink glasses',
      ph:'AHN-shtoh-sen'
    },
    {
      de:'Sekt',
      art:'der',
      pl:'',
      en:'sparkling wine',
      ph:'zekt'
    },
    {
      de:'Feuerwerk',
      art:'das',
      pl:'',
      en:'fireworks',
      ph:'FOY-er-vairk'
    },
    {
      de:'Dekoration',
      art:'die',
      pl:'Dekorationen',
      en:'decoration',
      ph:'de-ko-rah-TSEE-ohn'
    },
    {
      de:'schmücken',
      art:'',
      pl:'',
      en:'to decorate',
      ph:'SHMUEK-ken'
    },
    {
      de:'Brauch',
      art:'der',
      pl:'Bräuche',
      en:'custom, tradition',
      ph:'browkh'
    },
    {
      de:'Feier',
      art:'die',
      pl:'Feiern',
      en:'party, celebration',
      ph:'FAI-er'
    },
    {
      de:'Hochzeit',
      art:'die',
      pl:'Hochzeiten',
      en:'wedding',
      ph:'HOKH-tsite'
    },
    {
      de:'Jubiläum',
      art:'das',
      pl:'Jubiläen',
      en:'anniversary, jubilee',
      ph:'yoo-bi-LAY-um'
    },
    {
      de:'Jahrestag',
      art:'der',
      pl:'Jahrestage',
      en:'anniversary (day)',
      ph:'YAH-res-tahk'
    },
    {
      de:'Feiertag',
      art:'der',
      pl:'Feiertage',
      en:'public holiday',
      ph:'FAI-er-tahk'
    },
    {
      de:'letzte Woche',
      art:'',
      pl:'',
      en:'last week',
      ph:'LETS-te VOKH-e'
    },
    {
      de:'vor einem Jahr',
      art:'',
      pl:'',
      en:'a year ago',
      ph:'fohr INE-em yahr'
    },
    {
      de:'gestern Abend',
      art:'',
      pl:'',
      en:'yesterday evening',
      ph:'GES-tern AH-bent'
    },
    {
      de:'morgen früh',
      art:'',
      pl:'',
      en:'tomorrow morning',
      ph:'MOR-gen frue'
    },
    {
      de:'nächste Woche',
      art:'',
      pl:'',
      en:'next week',
      ph:'NAYKHS-te VOKH-e'
    },
    {
      de:'vor zwei Tagen',
      art:'',
      pl:'',
      en:'two days ago',
      ph:'fohr tsvai TAH-gen'
    },
    {
      de:'letzten Monat',
      art:'',
      pl:'',
      en:'last month',
      ph:'LETS-ten MOH-naht'
    },
    {
      de:'letztes Jahr',
      art:'',
      pl:'',
      en:'last year',
      ph:'LETS-tes yahr'
    },
    {
      de:'vor einer Woche',
      art:'',
      pl:'',
      en:'a week ago',
      ph:'fohr INE-er VOKH-e'
    },
    {
      de:'als',
      art:'',
      pl:'',
      en:'when (one past event)',
      ph:'ahls'
    },
    {
      de:'wenn',
      art:'',
      pl:'',
      en:'when (repeated) / if',
      ph:'ven'
    },
    {
      de:'Fest',
      art:'das',
      pl:'Feste',
      en:'festival, celebration',
      ph:'fest'
    },
    {
      de:'Weihnachten',
      art:'',
      pl:'',
      en:'Christmas',
      ph:'VAI-nahkh-ten'
    },
    {
      de:'Ostern',
      art:'',
      pl:'',
      en:'Easter',
      ph:'OHS-tern'
    },
    {
      de:'Geburtstag',
      art:'der',
      pl:'Geburtstage',
      en:'birthday',
      ph:'ge-BOORTS-tahk'
    },
    {
      de:'feiern',
      art:'',
      pl:'',
      en:'to celebrate',
      ph:'FAI-ern'
    },
    {
      de:'Geschenk',
      art:'das',
      pl:'Geschenke',
      en:'gift, present',
      ph:'ge-SHENK'
    },
    {
      de:'gratulieren',
      art:'',
      pl:'',
      en:'to congratulate',
      ph:'grah-too-LEE-ren'
    },
    {
      de:'Tradition',
      art:'die',
      pl:'Traditionen',
      en:'tradition',
      ph:'trah-dee-TSEE-ohn'
    }
  ],
  grammar:{
    title:'Time expressions — and "wenn" vs "als"',
    plain:'"letzte Woche" (last week), "vor einem Jahr" (a year ago), "gestern Abend" (yesterday evening). Use them with the Perfekt: "Letzte Woche habe ich Geburtstag gefeiert." And: "als" = when (ONE past event): "Als ich klein war ..." — "wenn" = when (repeated) or if: "Wenn ich Zeit habe, besuche ich meine Familie."',
    rule:'letzte Woche · vor einem Jahr · gestern Abend · als + one past event · wenn + repeated / if',
    examples:[
      {
        de:'Letzte Woche habe ich Geburtstag gefeiert.',
        en:'Last week I celebrated my birthday.',
        ph:'LETS-te VOKH-e HAH-be ish ge-BOORTS-tahk ge-FAI-ert'
      },
      {
        de:'Als ich klein war, wohnte ich in einem Dorf.',
        en:'When I was little, I lived in a village.',
        ph:'ahls ish kline vahr, VOHN-te ish in INE-em dorf'
      },
      {
        de:'Wenn ich Zeit habe, besuche ich meine Familie.',
        en:'When I have time, I visit my family.',
        ph:'ven ish tsite HAH-be, be-ZOO-khe ish MINE-e fah-MEE-lee-e'
      }
    ]
  },
  quiz:[
    {q:'Fill in: "___ ich klein war, wohnte ich in einem Dorf."', options:['Wenn', 'Als', 'Weil', 'Dass'], answer:1,
     why:'"als" = when, one past event: "Als ich klein war ..."'},
    {q:'Fill in: "___ ich Zeit habe, besuche ich meine Familie."', options:['Als', 'Wenn', 'Weil', 'Dass'], answer:1,
     why:'"wenn" = when (repeated) / if: "Wenn ich Zeit habe ..."'},
    {q:'"Letzte Woche habe ich Geburtstag gefeiert." — "letzte Woche" means...', options:['next week', 'last week', 'this week', 'every week'], answer:1,
     why:'letzte Woche = last week. nächste Woche = next week.'},
    {q:'What does "vor einem Jahr" mean?', options:['next year', 'last year', 'a year ago', 'every year'], answer:2,
     why:'vor einem Jahr = a year ago. letztes Jahr = last year.'},
    {q:'What does "gratulieren" mean?', options:['to celebrate', 'to congratulate', 'to invite', 'to decorate'], answer:1,
     why:'gratulieren = to congratulate. "Ich gratuliere dir zum Geburtstag!"'}
  ],
  speak:{
    prompt:'Say out loud: "Letzte Woche habe ich Geburtstag gefeiert. Als ich klein war, wohnte ich in einem Dorf."',
    model:[
      'Letzte Woche habe ich Geburtstag gefeiert.',
      'Als ich klein war, wohnte ich in einem Dorf.',
      'Wenn ich Zeit habe, besuche ich meine Familie.'
    ]
  },
  recap:[
    'Time: letzte Woche, vor einem Jahr, gestern Abend, nächste Woche.',
    '"als" = when, one past event. "wenn" = when (repeated) / if.',
    'Use time expressions with the Perfekt.',
    'Celebrations: das Fest, der Geburtstag, Weihnachten, Ostern.'
  ],
  tip:'Memory tip: "als" is for ONE moment in the past ("Als ich klein war ..."). "wenn" is for repeats ("Wenn ich Zeit habe ..."). One moment = als.',
  extra:[
    {
      q:'Say "Last week I celebrated my birthday."',
      a:'Letzte Woche habe ich Geburtstag gefeiert.'
    },
    {
      q:'Say "When I was little, I lived in a village."',
      a:'Als ich klein war, wohnte ich in einem Dorf.'
    },
    {
      q:'What does "anstoßen" mean?',
      a:'to toast, to clink glasses — "Wir stoßen auf dich an!"'
    }
  ],
  topics:[
    {
      id:'t1',
      title:'Festival words',
      time:'3 min',
      kind:'words',
      vocab:[
        {
          de:'Neujahr',
          art:'das',
          pl:'',
          en:'New Year',
          ph:'NOY-yahr'
        },
        {
          de:'Silvester',
          art:'der',
          pl:'',
          en:'New Year\'s Eve',
          ph:'zil-VES-ter'
        },
        {
          de:'Karneval',
          art:'der',
          pl:'',
          en:'carnival',
          ph:'kahr-ne-VAHL'
        },
        {
          de:'Advent',
          art:'der',
          pl:'',
          en:'Advent',
          ph:'ahd-VENT'
        },
        {
          de:'Adventskalender',
          art:'der',
          pl:'Adventskalender',
          en:'Advent calendar',
          ph:'ahd-VENTS-kah-len-der'
        },
        {
          de:'Kerze',
          art:'die',
          pl:'Kerzen',
          en:'candle',
          ph:'KAIRT-se'
        },
        {
          de:'Weihnachtsbaum',
          art:'der',
          pl:'Weihnachtsbäume',
          en:'Christmas tree',
          ph:'VAI-nahks-baum'
        },
        {
          de:'Weihnachtsmarkt',
          art:'der',
          pl:'Weihnachtsmärkte',
          en:'Christmas market',
          ph:'VAI-nahks-mahrkt'
        },
        {
          de:'Nikolaus',
          art:'der',
          pl:'',
          en:'St. Nicholas',
          ph:'nee-ko-LAH-oos'
        },
        {
          de:'Osterhase',
          art:'der',
          pl:'Osterhasen',
          en:'Easter bunny',
          ph:'OHS-ter-hah-ze'
        },
        {
          de:'Osterei',
          art:'das',
          pl:'Ostereier',
          en:'Easter egg',
          ph:'OHS-ter-ai'
        },
        {
          de:'Schokolade',
          art:'die',
          pl:'',
          en:'chocolate',
          ph:'sho-ko-LAH-de'
        },
        {
          de:'Torte',
          art:'die',
          pl:'Torten',
          en:'cake, torte',
          ph:'TOR-te'
        },
        {
          de:'Einladung',
          art:'die',
          pl:'Einladungen',
          en:'invitation',
          ph:'INE-lah-doong'
        },
        {
          de:'Gäste',
          art:'die',
          pl:'',
          en:'guests',
          ph:'GAYS-te'
        },
        {
          de:'Toast',
          art:'der',
          pl:'Toasts',
          en:'toast (drink)',
          ph:'tohst'
        },
        {
          de:'anstoßen',
          art:'',
          pl:'',
          en:'to toast, to clink glasses',
          ph:'AHN-shtoh-sen'
        },
        {
          de:'Sekt',
          art:'der',
          pl:'',
          en:'sparkling wine',
          ph:'zekt'
        },
        {
          de:'Feuerwerk',
          art:'das',
          pl:'',
          en:'fireworks',
          ph:'FOY-er-vairk'
        },
        {
          de:'Dekoration',
          art:'die',
          pl:'Dekorationen',
          en:'decoration',
          ph:'de-ko-rah-TSEE-ohn'
        },
        {
          de:'schmücken',
          art:'',
          pl:'',
          en:'to decorate',
          ph:'SHMUEK-ken'
        },
        {
          de:'Brauch',
          art:'der',
          pl:'Bräuche',
          en:'custom, tradition',
          ph:'browkh'
        }
      ]
    },
    {
      id:'t2',
      title:'Time & celebration words',
      time:'3 min',
      kind:'words',
      vocab:[
        {
          de:'Feier',
          art:'die',
          pl:'Feiern',
          en:'party, celebration',
          ph:'FAI-er'
        },
        {
          de:'Hochzeit',
          art:'die',
          pl:'Hochzeiten',
          en:'wedding',
          ph:'HOKH-tsite'
        },
        {
          de:'Jubiläum',
          art:'das',
          pl:'Jubiläen',
          en:'anniversary, jubilee',
          ph:'yoo-bi-LAY-um'
        },
        {
          de:'Jahrestag',
          art:'der',
          pl:'Jahrestage',
          en:'anniversary (day)',
          ph:'YAH-res-tahk'
        },
        {
          de:'Feiertag',
          art:'der',
          pl:'Feiertage',
          en:'public holiday',
          ph:'FAI-er-tahk'
        },
        {
          de:'letzte Woche',
          art:'',
          pl:'',
          en:'last week',
          ph:'LETS-te VOKH-e'
        },
        {
          de:'vor einem Jahr',
          art:'',
          pl:'',
          en:'a year ago',
          ph:'fohr INE-em yahr'
        },
        {
          de:'gestern Abend',
          art:'',
          pl:'',
          en:'yesterday evening',
          ph:'GES-tern AH-bent'
        },
        {
          de:'morgen früh',
          art:'',
          pl:'',
          en:'tomorrow morning',
          ph:'MOR-gen frue'
        },
        {
          de:'nächste Woche',
          art:'',
          pl:'',
          en:'next week',
          ph:'NAYKHS-te VOKH-e'
        },
        {
          de:'vor zwei Tagen',
          art:'',
          pl:'',
          en:'two days ago',
          ph:'fohr tsvai TAH-gen'
        },
        {
          de:'letzten Monat',
          art:'',
          pl:'',
          en:'last month',
          ph:'LETS-ten MOH-naht'
        },
        {
          de:'letztes Jahr',
          art:'',
          pl:'',
          en:'last year',
          ph:'LETS-tes yahr'
        },
        {
          de:'vor einer Woche',
          art:'',
          pl:'',
          en:'a week ago',
          ph:'fohr INE-er VOKH-e'
        },
        {
          de:'als',
          art:'',
          pl:'',
          en:'when (one past event)',
          ph:'ahls'
        },
        {
          de:'wenn',
          art:'',
          pl:'',
          en:'when (repeated) / if',
          ph:'ven'
        },
        {
          de:'Fest',
          art:'das',
          pl:'Feste',
          en:'festival, celebration',
          ph:'fest'
        },
        {
          de:'Weihnachten',
          art:'',
          pl:'',
          en:'Christmas',
          ph:'VAI-nahkh-ten'
        },
        {
          de:'Ostern',
          art:'',
          pl:'',
          en:'Easter',
          ph:'OHS-tern'
        },
        {
          de:'Geburtstag',
          art:'der',
          pl:'Geburtstage',
          en:'birthday',
          ph:'ge-BOORTS-tahk'
        },
        {
          de:'feiern',
          art:'',
          pl:'',
          en:'to celebrate',
          ph:'FAI-ern'
        },
        {
          de:'Geschenk',
          art:'das',
          pl:'Geschenke',
          en:'gift, present',
          ph:'ge-SHENK'
        },
        {
          de:'gratulieren',
          art:'',
          pl:'',
          en:'to congratulate',
          ph:'grah-too-LEE-ren'
        },
        {
          de:'Tradition',
          art:'die',
          pl:'Traditionen',
          en:'tradition',
          ph:'trah-dee-TSEE-ohn'
        }
      ]
    },
    {
      id:'t3',
      title:'Dialogue: Happy birthday!',
      time:'3 min',
      kind:'dialogue',
      lines:[
        {
          who:'A',
          de:'Alles Gute zum Geburtstag!',
          en:'Happy birthday!',
          ph:'AHL-les GOO-te tsoom ge-BOORTS-tahk'
        },
        {
          who:'B',
          de:'Danke! Letzte Woche habe ich meinen Geburtstag gefeiert.',
          en:'Thank you! Last week I celebrated my birthday.',
          ph:'DAHN-ke! LETS-te VOKH-e HAH-be ish MINE-en ge-BOORTS-tahk ge-FAI-ert'
        },
        {
          who:'A',
          de:'Was hast du gemacht?',
          en:'What did you do?',
          ph:'vahs hahst doo ge-MAHKHT'
        },
        {
          who:'B',
          de:'Wir haben zu Hause gefeiert. Es gab Kuchen und Sekt.',
          en:'We celebrated at home. There was cake and sparkling wine.',
          ph:'veer HAH-ben tsoo HOW-ze ge-FAI-ert. es gahp KOO-khen oont zekt'
        },
        {
          who:'A',
          de:'Als ich klein war, hat meine Mutter immer einen Kuchen gebacken.',
          en:'When I was little, my mother always baked a cake.',
          ph:'ahls ish kline vahr, haht MINE-e MOOT-ter IM-mer INE-en KOO-khen ge-BAH-ken'
        },
        {
          who:'B',
          de:'Schön! Nächstes Jahr feiern wir zusammen.',
          en:'Nice! Next year we will celebrate together.',
          ph:'shoen! NAYKHS-tes yahr FAI-ern veer tsoo-ZAHM-men'
        }
      ],
      speak:{
        prompt:'Say out loud: "Letzte Woche habe ich Geburtstag gefeiert. Als ich klein war, wohnte ich in einem Dorf."',
        model:[
          'Letzte Woche habe ich Geburtstag gefeiert.',
          'Als ich klein war, wohnte ich in einem Dorf.',
          'Wenn ich Zeit habe, besuche ich meine Familie.'
        ]
      }
    },
    {
      id:'t4',
      title:'Grammar: "wenn" vs "als"',
      time:'3 min',
      kind:'grammar',
      grammar:{
        title:'Time expressions — and "wenn" vs "als"',
        plain:'"letzte Woche" (last week), "vor einem Jahr" (a year ago), "gestern Abend" (yesterday evening). Use them with the Perfekt: "Letzte Woche habe ich Geburtstag gefeiert." And: "als" = when (ONE past event): "Als ich klein war ..." — "wenn" = when (repeated) or if: "Wenn ich Zeit habe, besuche ich meine Familie."',
        rule:'letzte Woche · vor einem Jahr · gestern Abend · als + one past event · wenn + repeated / if',
        examples:[
          {
            de:'Letzte Woche habe ich Geburtstag gefeiert.',
            en:'Last week I celebrated my birthday.',
            ph:'LETS-te VOKH-e HAH-be ish ge-BOORTS-tahk ge-FAI-ert'
          },
          {
            de:'Als ich klein war, wohnte ich in einem Dorf.',
            en:'When I was little, I lived in a village.',
            ph:'ahls ish kline vahr, VOHN-te ish in INE-em dorf'
          },
          {
            de:'Wenn ich Zeit habe, besuche ich meine Familie.',
            en:'When I have time, I visit my family.',
            ph:'ven ish tsite HAH-be, be-ZOO-khe ish MINE-e fah-MEE-lee-e'
          }
        ]
      }
    },
    {
      id:'t5',
      title:'Quiz: als & wenn',
      time:'3 min',
      kind:'quiz',
      questions:[
        {q:'Fill in: "___ ich klein war, wohnte ich in einem Dorf."', options:['Wenn', 'Als', 'Weil', 'Dass'], answer:1,
         why:'"als" = when, one past event: "Als ich klein war ..."'},
        {q:'Fill in: "___ ich Zeit habe, besuche ich meine Familie."', options:['Als', 'Wenn', 'Weil', 'Dass'], answer:1,
         why:'"wenn" = when (repeated) / if: "Wenn ich Zeit habe ..."'},
        {q:'"Letzte Woche habe ich Geburtstag gefeiert." — "letzte Woche" means...', options:['next week', 'last week', 'this week', 'every week'], answer:1,
         why:'letzte Woche = last week. nächste Woche = next week.'}
      ]
    },
    {
      id:'t6',
      title:'Quiz: celebrations',
      time:'2 min',
      kind:'quiz',
      questions:[
        {q:'What does "vor einem Jahr" mean?', options:['next year', 'last year', 'a year ago', 'every year'], answer:2,
         why:'vor einem Jahr = a year ago. letztes Jahr = last year.'},
        {q:'What does "gratulieren" mean?', options:['to celebrate', 'to congratulate', 'to invite', 'to decorate'], answer:1,
         why:'gratulieren = to congratulate. "Ich gratuliere dir zum Geburtstag!"'}
      ]
    }
  ],
  next:'Next: Chapter 12 — Review & A2 Mock',
};

CHAPTERS['A2-12'] = {
  id:'A2-12',
  n:12,
  level:'A2',
  title:'Review & A2 Mock',
  time:'17 min',
  concept:'Review all of A2 and test yourself, Goethe-style — Perfekt, dative, war/hatte and the connectors.',
  dialogue:[
    {
      who:'A',
      de:'Was hast du in A2 gelernt?',
      en:'What did you learn in A2?',
      ph:'vahs hahst doo in ah-tsvai ge-LAIRNT'
    },
    {
      who:'B',
      de:'Ich habe das Perfekt gelernt: Ich habe gelernt, ich bin gefahren.',
      en:'I learned the Perfekt: I have learned, I have travelled.',
      ph:'ish HAH-be dahs pair-FEKT ge-LAIRNT: ish HAH-be ge-LAIRNT, ish bin ge-FAH-ren'
    },
    {
      who:'A',
      de:'Und was war schwer?',
      en:'And what was difficult?',
      ph:'oont vahs vahr shvair'
    },
    {
      who:'B',
      de:'Der Dativ war schwer. Aber jetzt kann ich sagen: Mir geht es gut!',
      en:'The dative was difficult. But now I can say: I am fine!',
      ph:'dair dah-TEEF vahr shvair. AH-ber yetst kahn ish ZAH-gen: meer gayt es goot'
    },
    {
      who:'A',
      de:'Was machst du als Nächstes?',
      en:'What are you doing next?',
      ph:'vahs mahkhst doo ahls NAYKHS-tes'
    },
    {
      who:'B',
      de:'Ich mache den A2-Mock-Test. Dann fange ich mit B1 an!',
      en:'I am taking the A2 mock test. Then I start B1!',
      ph:'ish MAH-khe dayn ah-tsvai MOK-test. dahn FAHNG-e ish mit bay-INE ahn'
    }
  ],
  vocab:[
    {
      de:'Aufgabe',
      art:'die',
      pl:'Aufgaben',
      en:'task, exercise',
      ph:'OWF-gah-be'
    },
    {
      de:'Lösung',
      art:'die',
      pl:'Lösungen',
      en:'solution',
      ph:'LOE-zoong'
    },
    {
      de:'Antwort',
      art:'die',
      pl:'Antworten',
      en:'answer',
      ph:'AHNT-vort'
    },
    {
      de:'Frage',
      art:'die',
      pl:'Fragen',
      en:'question',
      ph:'FRAH-ge'
    },
    {
      de:'Tipp',
      art:'der',
      pl:'Tipps',
      en:'tip',
      ph:'tip'
    },
    {
      de:'Beispiel',
      art:'das',
      pl:'Beispiele',
      en:'example',
      ph:'BAI-shpeel'
    },
    {
      de:'Text',
      art:'der',
      pl:'Texte',
      en:'text',
      ph:'tekst'
    },
    {
      de:'Kapitel',
      art:'das',
      pl:'Kapitel',
      en:'chapter',
      ph:'kah-PEE-tel'
    },
    {
      de:'Lektion',
      art:'die',
      pl:'Lektionen',
      en:'lesson',
      ph:'lek-TSEE-ohn'
    },
    {
      de:'Hausaufgabe',
      art:'die',
      pl:'Hausaufgaben',
      en:'homework',
      ph:'HOWS-owf-gah-be'
    },
    {
      de:'Test',
      art:'der',
      pl:'Tests',
      en:'test',
      ph:'test'
    },
    {
      de:'Note',
      art:'die',
      pl:'Noten',
      en:'mark, grade',
      ph:'NOH-te'
    },
    {
      de:'Ergebnis',
      art:'das',
      pl:'Ergebnisse',
      en:'result',
      ph:'air-GAYB-nis'
    },
    {
      de:'Fortschritt',
      art:'der',
      pl:'Fortschritte',
      en:'progress',
      ph:'FORT-shrit'
    },
    {
      de:'Ziel',
      art:'das',
      pl:'Ziele',
      en:'goal',
      ph:'tseel'
    },
    {
      de:'Erfolg',
      art:'der',
      pl:'Erfolge',
      en:'success',
      ph:'air-FOLK'
    },
    {
      de:'Motivation',
      art:'die',
      pl:'',
      en:'motivation',
      ph:'mo-tee-vah-TSEE-ohn'
    },
    {
      de:'Lernplan',
      art:'der',
      pl:'Lernpläne',
      en:'study plan',
      ph:'LAIRN-plahn'
    },
    {
      de:'Wiederholung',
      art:'die',
      pl:'Wiederholungen',
      en:'revision, repetition',
      ph:'VEE-der-hoh-loong'
    },
    {
      de:'Grammatik',
      art:'die',
      pl:'',
      en:'grammar',
      ph:'grah-MAH-tik'
    },
    {
      de:'Wortschatz',
      art:'der',
      pl:'',
      en:'vocabulary',
      ph:'VORT-shahts'
    },
    {
      de:'Zertifikat',
      art:'das',
      pl:'Zertifikate',
      en:'certificate',
      ph:'tsair-tee-fi-KAHT'
    },
    {
      de:'Prüfung',
      art:'die',
      pl:'Prüfungen',
      en:'exam',
      ph:'PRUE-foong'
    },
    {
      de:'bestehen',
      art:'',
      pl:'',
      en:'to pass (an exam)',
      ph:'be-SHTAY-en'
    },
    {
      de:'wiederholen',
      art:'',
      pl:'',
      en:'to repeat, to review',
      ph:'VEE-der-hoh-len'
    },
    {
      de:'Fehler',
      art:'der',
      pl:'Fehler',
      en:'mistake',
      ph:'FAY-ler'
    },
    {
      de:'üben',
      art:'',
      pl:'',
      en:'to practise',
      ph:'UE-ben'
    },
    {
      de:'Regel',
      art:'die',
      pl:'Regeln',
      en:'rule',
      ph:'RAY-gel'
    },
    {
      de:'Satz',
      art:'der',
      pl:'Sätze',
      en:'sentence',
      ph:'zahts'
    },
    {
      de:'Übung',
      art:'die',
      pl:'Übungen',
      en:'exercise',
      ph:'UE-boong'
    }
  ],
  grammar:{
    title:'A2 review — the three big steps',
    plain:'A2 gave you three big tools: (1) Perfekt — "Ich habe gelernt." (2) Dative — "Mir geht es gut." (3) war/hatte — "Ich war in Italien." Plus: weil/dass (verb at the end), "zu" + infinitive, and Perfekt with "sein". If you can use all of these, you are ready for B1.',
    rule:'(1) Perfekt — Ich habe gelernt. (2) Dativ — Mir geht es gut. (3) war/hatte — Ich war in Italien. (4) weil/dass — verb at the end.',
    examples:[
      {
        de:'Ich habe viel gelernt und ich bin nach Berlin gefahren.',
        en:'I learned a lot and I travelled to Berlin.',
        ph:'ish HAH-be feel ge-LAIRNT oont ish bin nahkh bair-LEEN ge-FAH-ren'
      },
      {
        de:'Mir geht es gut, weil ich Deutsch lerne.',
        en:'I am fine because I am learning German.',
        ph:'meer gayt es goot, vile ish doych LAIR-ne'
      },
      {
        de:'Ich war in Italien und ich hatte ein schönes Hotel.',
        en:'I was in Italy and I had a nice hotel.',
        ph:'ish vahr in i-TAH-lee-en oont ish HAHT-te ine SHOEN-es ho-TEL'
      }
    ]
  },
  quiz:[
    {q:'Fill in: "Ich habe Deutsch ___."', options:['gelernt', 'lernen', 'lernte', 'gelernen'], answer:0,
     why:'Perfekt: haben + Partizip II. lernen → gelernt.'},
    {q:'Fill in: "___ schmeckt die Suppe."', options:['Ich', 'Mir', 'Mich', 'Mein'], answer:1,
     why:'Dative: "Mir schmeckt die Suppe." — the soup tastes good TO ME.'},
    {q:'Fill in: "Ich ___ in Italien."', options:['bin', 'war', 'hatte', 'habe'], answer:1,
     why:'Stories use "war": "Ich war in Italien."'},
    {q:'Fill in: "Ich lerne Deutsch, ___ ich in Deutschland arbeiten will."', options:['dass', 'weil', 'wenn', 'als'], answer:1,
     why:'"weil" = because. The verb "will" goes to the end.'},
    {q:'Fill in: "Ich bin nach Berlin ___."', options:['gefahren', 'gefahr', 'gefahren ist', 'fahren'], answer:0,
     why:'Movement → "sein": Ich bin gefahren.'}
  ],
  speak:{
    prompt:'Say out loud: "Ich habe das Perfekt gelernt. Mir geht es gut. Ich war in Italien."',
    model:[
      'Ich habe das Perfekt gelernt.',
      'Mir geht es gut.',
      'Ich war in Italien.',
      'Ich mache jetzt den A2-Mock-Test.'
    ]
  },
  recap:[
    'Perfekt = haben/sein + Partizip II (at the END).',
    'Dative: mir, dir, ihm, ihr, uns, euch, ihnen.',
    'war/hatte for stories. weil/dass — verb at the end.',
    'You are ready for B1 when all four feel easy.'
  ],
  tip:'Memory tip: before B1, say these four sentences out loud every day: "Ich habe gelernt." "Mir geht es gut." "Ich war in Italien." "Ich lerne Deutsch, weil ich arbeiten will."',
  extra:[
    {
      q:'Say "I have learned a lot."',
      a:'Ich habe viel gelernt.'
    },
    {
      q:'Say "I am fine because I learn German."',
      a:'Mir geht es gut, weil ich Deutsch lerne.'
    },
    {
      q:'What are the three big A2 tools?',
      a:'Perfekt, Dativ, war/hatte — plus weil/dass and Perfekt with sein.'
    }
  ],
  topics:[
    {
      id:'t1',
      title:'Review words',
      time:'3 min',
      kind:'words',
      vocab:[
        {
          de:'Aufgabe',
          art:'die',
          pl:'Aufgaben',
          en:'task, exercise',
          ph:'OWF-gah-be'
        },
        {
          de:'Lösung',
          art:'die',
          pl:'Lösungen',
          en:'solution',
          ph:'LOE-zoong'
        },
        {
          de:'Antwort',
          art:'die',
          pl:'Antworten',
          en:'answer',
          ph:'AHNT-vort'
        },
        {
          de:'Frage',
          art:'die',
          pl:'Fragen',
          en:'question',
          ph:'FRAH-ge'
        },
        {
          de:'Tipp',
          art:'der',
          pl:'Tipps',
          en:'tip',
          ph:'tip'
        },
        {
          de:'Beispiel',
          art:'das',
          pl:'Beispiele',
          en:'example',
          ph:'BAI-shpeel'
        },
        {
          de:'Text',
          art:'der',
          pl:'Texte',
          en:'text',
          ph:'tekst'
        },
        {
          de:'Kapitel',
          art:'das',
          pl:'Kapitel',
          en:'chapter',
          ph:'kah-PEE-tel'
        },
        {
          de:'Lektion',
          art:'die',
          pl:'Lektionen',
          en:'lesson',
          ph:'lek-TSEE-ohn'
        },
        {
          de:'Hausaufgabe',
          art:'die',
          pl:'Hausaufgaben',
          en:'homework',
          ph:'HOWS-owf-gah-be'
        },
        {
          de:'Test',
          art:'der',
          pl:'Tests',
          en:'test',
          ph:'test'
        },
        {
          de:'Note',
          art:'die',
          pl:'Noten',
          en:'mark, grade',
          ph:'NOH-te'
        },
        {
          de:'Ergebnis',
          art:'das',
          pl:'Ergebnisse',
          en:'result',
          ph:'air-GAYB-nis'
        },
        {
          de:'Fortschritt',
          art:'der',
          pl:'Fortschritte',
          en:'progress',
          ph:'FORT-shrit'
        },
        {
          de:'Ziel',
          art:'das',
          pl:'Ziele',
          en:'goal',
          ph:'tseel'
        }
      ]
    },
    {
      id:'t2',
      title:'Exam words',
      time:'3 min',
      kind:'words',
      vocab:[
        {
          de:'Erfolg',
          art:'der',
          pl:'Erfolge',
          en:'success',
          ph:'air-FOLK'
        },
        {
          de:'Motivation',
          art:'die',
          pl:'',
          en:'motivation',
          ph:'mo-tee-vah-TSEE-ohn'
        },
        {
          de:'Lernplan',
          art:'der',
          pl:'Lernpläne',
          en:'study plan',
          ph:'LAIRN-plahn'
        },
        {
          de:'Wiederholung',
          art:'die',
          pl:'Wiederholungen',
          en:'revision, repetition',
          ph:'VEE-der-hoh-loong'
        },
        {
          de:'Grammatik',
          art:'die',
          pl:'',
          en:'grammar',
          ph:'grah-MAH-tik'
        },
        {
          de:'Wortschatz',
          art:'der',
          pl:'',
          en:'vocabulary',
          ph:'VORT-shahts'
        },
        {
          de:'Zertifikat',
          art:'das',
          pl:'Zertifikate',
          en:'certificate',
          ph:'tsair-tee-fi-KAHT'
        },
        {
          de:'Prüfung',
          art:'die',
          pl:'Prüfungen',
          en:'exam',
          ph:'PRUE-foong'
        },
        {
          de:'bestehen',
          art:'',
          pl:'',
          en:'to pass (an exam)',
          ph:'be-SHTAY-en'
        },
        {
          de:'wiederholen',
          art:'',
          pl:'',
          en:'to repeat, to review',
          ph:'VEE-der-hoh-len'
        },
        {
          de:'Fehler',
          art:'der',
          pl:'Fehler',
          en:'mistake',
          ph:'FAY-ler'
        },
        {
          de:'üben',
          art:'',
          pl:'',
          en:'to practise',
          ph:'UE-ben'
        },
        {
          de:'Regel',
          art:'die',
          pl:'Regeln',
          en:'rule',
          ph:'RAY-gel'
        },
        {
          de:'Satz',
          art:'der',
          pl:'Sätze',
          en:'sentence',
          ph:'zahts'
        },
        {
          de:'Übung',
          art:'die',
          pl:'Übungen',
          en:'exercise',
          ph:'UE-boong'
        }
      ]
    },
    {
      id:'t3',
      title:'Dialogue: What did you learn?',
      time:'3 min',
      kind:'dialogue',
      lines:[
        {
          who:'A',
          de:'Was hast du in A2 gelernt?',
          en:'What did you learn in A2?',
          ph:'vahs hahst doo in ah-tsvai ge-LAIRNT'
        },
        {
          who:'B',
          de:'Ich habe das Perfekt gelernt: Ich habe gelernt, ich bin gefahren.',
          en:'I learned the Perfekt: I have learned, I have travelled.',
          ph:'ish HAH-be dahs pair-FEKT ge-LAIRNT: ish HAH-be ge-LAIRNT, ish bin ge-FAH-ren'
        },
        {
          who:'A',
          de:'Und was war schwer?',
          en:'And what was difficult?',
          ph:'oont vahs vahr shvair'
        },
        {
          who:'B',
          de:'Der Dativ war schwer. Aber jetzt kann ich sagen: Mir geht es gut!',
          en:'The dative was difficult. But now I can say: I am fine!',
          ph:'dair dah-TEEF vahr shvair. AH-ber yetst kahn ish ZAH-gen: meer gayt es goot'
        },
        {
          who:'A',
          de:'Was machst du als Nächstes?',
          en:'What are you doing next?',
          ph:'vahs mahkhst doo ahls NAYKHS-tes'
        },
        {
          who:'B',
          de:'Ich mache den A2-Mock-Test. Dann fange ich mit B1 an!',
          en:'I am taking the A2 mock test. Then I start B1!',
          ph:'ish MAH-khe dayn ah-tsvai MOK-test. dahn FAHNG-e ish mit bay-INE ahn'
        }
      ],
      speak:{
        prompt:'Say out loud: "Ich habe das Perfekt gelernt. Mir geht es gut. Ich war in Italien."',
        model:[
          'Ich habe das Perfekt gelernt.',
          'Mir geht es gut.',
          'Ich war in Italien.',
          'Ich mache jetzt den A2-Mock-Test.'
        ]
      }
    },
    {
      id:'t4',
      title:'Grammar: A2 review',
      time:'3 min',
      kind:'grammar',
      grammar:{
        title:'A2 review — the three big steps',
        plain:'A2 gave you three big tools: (1) Perfekt — "Ich habe gelernt." (2) Dative — "Mir geht es gut." (3) war/hatte — "Ich war in Italien." Plus: weil/dass (verb at the end), "zu" + infinitive, and Perfekt with "sein". If you can use all of these, you are ready for B1.',
        rule:'(1) Perfekt — Ich habe gelernt. (2) Dativ — Mir geht es gut. (3) war/hatte — Ich war in Italien. (4) weil/dass — verb at the end.',
        examples:[
          {
            de:'Ich habe viel gelernt und ich bin nach Berlin gefahren.',
            en:'I learned a lot and I travelled to Berlin.',
            ph:'ish HAH-be feel ge-LAIRNT oont ish bin nahkh bair-LEEN ge-FAH-ren'
          },
          {
            de:'Mir geht es gut, weil ich Deutsch lerne.',
            en:'I am fine because I am learning German.',
            ph:'meer gayt es goot, vile ish doych LAIR-ne'
          },
          {
            de:'Ich war in Italien und ich hatte ein schönes Hotel.',
            en:'I was in Italy and I had a nice hotel.',
            ph:'ish vahr in i-TAH-lee-en oont ish HAHT-te ine SHOEN-es ho-TEL'
          }
        ]
      }
    },
    {
      id:'t5',
      title:'Quiz: A2 review',
      time:'3 min',
      kind:'quiz',
      questions:[
        {q:'Fill in: "Ich habe Deutsch ___."', options:['gelernt', 'lernen', 'lernte', 'gelernen'], answer:0,
         why:'Perfekt: haben + Partizip II. lernen → gelernt.'},
        {q:'Fill in: "___ schmeckt die Suppe."', options:['Ich', 'Mir', 'Mich', 'Mein'], answer:1,
         why:'Dative: "Mir schmeckt die Suppe." — the soup tastes good TO ME.'},
        {q:'Fill in: "Ich ___ in Italien."', options:['bin', 'war', 'hatte', 'habe'], answer:1,
         why:'Stories use "war": "Ich war in Italien."'}
      ]
    },
    {
      id:'t6',
      title:'Quiz: ready for B1?',
      time:'2 min',
      kind:'quiz',
      questions:[
        {q:'Fill in: "Ich lerne Deutsch, ___ ich in Deutschland arbeiten will."', options:['dass', 'weil', 'wenn', 'als'], answer:1,
         why:'"weil" = because. The verb "will" goes to the end.'},
        {q:'Fill in: "Ich bin nach Berlin ___."', options:['gefahren', 'gefahr', 'gefahren ist', 'fahren'], answer:0,
         why:'Movement → "sein": Ich bin gefahren.'}
      ]
    }
  ],
  next:'Next: B1 — Intermediate (visa level)',
};

CHAPTERS['B1-1'] = {
  id:'B1-1', n:1, level:'B1', title:'Work & Career', time:'10 min',
  concept:'Give reasons with "weil" and "dass" — the key to B1.',
  dialogue:[
    {who:'A', de:'Warum lernst du Deutsch?', en:'Why are you learning German?', ph:'vah-ROOM LERNST doo doych'},
    {who:'B', de:'Ich lerne Deutsch, weil ich in Deutschland arbeiten will.', en:'I am learning German because I want to work in Germany.', ph:'ish LER-ne doych, vile ish in DOYCH-lahnt AHR-bai-ten vil'},
    {who:'A', de:'Was willst du arbeiten?', en:'What do you want to work as?', ph:'vahs vilst doo AHR-bai-ten'},
    {who:'B', de:'Ich will Krankenpfleger werden, weil ich Menschen helfen möchte.', en:'I want to become a nurse because I would like to help people.', ph:'ish vil KRAHN-ken-pflay-ger VAIR-den, vile ish MEN-shen HEL-fen MERKH-te'},
    {who:'A', de:'Das ist schön. Ich glaube, dass du das gut machst.', en:'That is nice. I believe that you will do that well.', ph:'dahs ist shern. ish GLOW-be, dahss doo dahs goot mahkst'},
    {who:'B', de:'Danke! Ich hoffe, dass ich bald nach Deutschland komme.', en:'Thank you! I hope that I will come to Germany soon.', ph:'DAHN-ke! ish HOF-fe, dahss ish bahlt nahkh DOYCH-lahnt KOM-me'},
  ],
  vocab:[
    {de:'Beruf', art:'der', pl:'Berufe', en:'job, profession', ph:'beh-ROOF'},
    {de:'Karriere', art:'die', pl:'Karrieren', en:'career', ph:'kah-ree-AY-re'},
    {de:'Bewerbung', art:'die', pl:'Bewerbungen', en:'application', ph:'beh-VER-bung'},
    {de:'Lebenslauf', art:'der', pl:'Lebensläufe', en:'CV, résumé', ph:'LAY-bens-lowf'},
    {de:'Erfahrung', art:'die', pl:'Erfahrungen', en:'experience', ph:'air-FAH-rung'},
    {de:'Fähigkeit', art:'die', pl:'Fähigkeiten', en:'skill, ability', ph:'FAY-ish-kait'},
    {de:'Verantwortung', art:'die', pl:'', en:'responsibility', ph:'fair-AHNT-vor-tung'},
    {de:'Abteilung', art:'die', pl:'Abteilungen', en:'department', ph:'ahp-TAI-lung'},
    {de:'Schicht', art:'die', pl:'Schichten', en:'shift (work)', ph:'shikht'},
    {de:'Vertrag', art:'der', pl:'Verträge', en:'contract', ph:'fair-TRAHK'},
    {de:'Gehalt', art:'das', pl:'Gehälter', en:'salary', ph:'geh-HAHLT'},
    {de:'verdienen', art:'', pl:'', en:'to earn', ph:'fair-DEE-nen'},
    {de:'sich bewerben', art:'', pl:'', en:'to apply (for a job)', ph:'zish beh-VER-ben'},
    {de:'glauben', art:'', pl:'', en:'to believe', ph:'GLOW-ben'},
    {de:'hoffen', art:'', pl:'', en:'to hope', ph:'HOF-fen'},
    {de:'helfen', art:'', pl:'', en:'to help', ph:'HEL-fen'},
    {de:'Menschen', art:'die', pl:'', en:'people', ph:'MEN-shen'},
  ],
  grammar:{
    title:'Subordinate clauses — weil and dass',
    plain:'"weil" means "because" and "dass" means "that". They start a second part of the sentence — and the verb goes to the END of that part. This is the biggest B1 step: from short sentences to real connected German.',
    rule:'Ich lerne Deutsch, weil ich in Deutschland arbeiten WILL. (verb at the end) · Ich glaube, dass du das gut MACHST. · Ich hoffe, dass ich bald KOMME.',
    examples:[
      {de:'Ich lerne Deutsch, weil ich in Deutschland arbeiten will.', en:'I am learning German because I want to work in Germany.', ph:'ish LER-ne doych, vile ish in DOYCH-lahnt AHR-bai-ten vil'},
      {de:'Ich glaube, dass das richtig ist.', en:'I believe that that is right.', ph:'ish GLOW-be, dahss dahs RIKH-tish ist'},
      {de:'Ich freue mich, weil ich bald nach Deutschland komme.', en:'I am happy because I am coming to Germany soon.', ph:'ish FROY-e mish, vile ish bahlt nahkh DOYCH-lahnt KOM-me'},
    ],
  },
  quiz:[
    {q:'Fill in: "Ich lerne Deutsch, ___ ich in Deutschland arbeiten will."', options:['dass','weil','wenn','aber'], answer:1,
     why:'"weil" = because. It gives the reason: I learn German BECAUSE I want to work in Germany.'},
    {q:'In a "weil" clause, where does the verb go?', options:['2nd place','1st place','At the end','It disappears'], answer:2,
     why:'In a subordinate clause the verb goes to the END: "..., weil ich arbeiten WILL."'},
    {q:'Fill in: "Ich glaube, ___ du das gut machst."', options:['weil','wenn','dass','denn'], answer:2,
     why:'"dass" = that. "Ich glaube, dass ..." = I believe that ...'},
    {q:'What is "die Erfahrung"?', options:['the salary','the experience','the contract','the department'], answer:1,
     why:'die Erfahrung = experience. das Gehalt = salary, der Vertrag = contract.'},
    {q:'"Ich hoffe, dass ich bald komme." means...', options:['I know that I come soon','I hope that I come soon','I think that I come soon','I want that I come soon'], answer:1,
     why:'hoffen = to hope. "Ich hoffe, dass ..." = I hope that ...'},
  ],
  speak:{ prompt:'Give a reason out loud: "Ich lerne Deutsch, weil ..." Say 3 reasons.',
    model:['Ich lerne Deutsch, weil ich in Deutschland arbeiten will.', 'Ich will Krankenpfleger werden, weil ich Menschen helfen möchte.', 'Ich hoffe, dass ich bald nach Deutschland komme.'] },
  recap:[
    '"weil" = because, "dass" = that.',
    'In a subordinate clause, the verb goes to the END.',
    'Use weil/dass to give reasons and opinions — this is B1 German.',
    'Work words: die Bewerbung, der Lebenslauf, die Erfahrung, das Gehalt.',
  ],
  tip:'Memory tip: every time you say "because" in English, try "weil" in German — and push the verb to the end. It feels strange for one week, then it becomes automatic.',
  extra:[
    {q:'Say "I learn German because I want to work in Germany."', a:'Ich lerne Deutsch, weil ich in Deutschland arbeiten will.'},
    {q:'Say "I believe that that is right."', a:'Ich glaube, dass das richtig ist.'},
    {q:'What does "sich bewerben" mean?', a:'To apply (for a job). "Ich bewerbe mich um eine Stelle."'},
  ],
  next:'Next: Chapter 2 — Health & Appointments',
};

CHAPTERS['B1-2'] = {
  id:'B1-2', n:2, level:'B1', title:'Health & Appointments', time:'10 min',
  concept:'Be polite with Konjunktiv II: "Ich hätte gern ..."',
  dialogue:[
    {who:'A', de:'Guten Tag! Ich hätte gern einen Termin bei Frau Doktor Schmidt.', en:'Good day! I would like an appointment with Dr Schmidt.', ph:'GOO-ten TAHK! ish HET-te gairn AI-nen tair-MEEN bai frow DOK-tor shmit'},
    {who:'B', de:'Wann hätten Sie gern einen Termin?', en:'When would you like an appointment?', ph:'vahn HET-ten zee gairn AI-nen tair-MEEN'},
    {who:'A', de:'Morgen Vormittag wäre gut. Könnten Sie mir helfen?', en:'Tomorrow morning would be good. Could you help me?', ph:'MOR-gen FOR-mit-tahk VAY-re goot. KOEN-ten zee meer HEL-fen'},
    {who:'B', de:'Ja, natürlich. Würden Sie bitte Ihre Karte geben?', en:'Yes, of course. Would you please give me your card?', ph:'yah, nah-TUER-lish. VUIR-den zee BIT-te EE-re KAHR-te GAY-ben'},
    {who:'A', de:'Hier ist sie. Vielen Dank!', en:'Here it is. Thank you very much!', ph:'heer ist zee. FEE-len dahnk'},
    {who:'B', de:'Gern geschehen. Bis morgen!', en:'You are welcome. See you tomorrow!', ph:'gairn geh-SHAY-en. bis MOR-gen'},
  ],
  vocab:[
    {de:'Termin', art:'der', pl:'Termine', en:'appointment', ph:'tair-MEEN'},
    {de:'Praxis', art:'die', pl:'Praxen', en:'doctor\'s office', ph:'PRAHK-sis'},
    {de:'Krankenkasse', art:'die', pl:'Krankenkassen', en:'health insurance', ph:'KRAHN-ken-kah-se'},
    {de:'Rezept', art:'das', pl:'Rezepte', en:'prescription', ph:'reh-TSEPT'},
    {de:'Versichertenkarte', art:'die', pl:'Versichertenkarten', en:'insurance card', ph:'fair-ZIKH-er-ten-kahr-te'},
    {de:'Behandlung', art:'die', pl:'Behandlungen', en:'treatment', ph:'beh-HAHNT-lung'},
    {de:'Untersuchung', art:'die', pl:'Untersuchungen', en:'examination', ph:'oon-ter-ZOO-khung'},
    {de:'Spritze', art:'die', pl:'Spritzen', en:'injection', ph:'SHPRIT-se'},
    {de:'Tablette', art:'die', pl:'Tabletten', en:'tablet', ph:'tah-BLET-te'},
    {de:'Blutdruck', art:'der', pl:'', en:'blood pressure', ph:'BLOOT-drook'},
    {de:'Puls', art:'der', pl:'', en:'pulse', ph:'pools'},
    {de:'Temperatur', art:'die', pl:'Temperaturen', en:'temperature', ph:'tem-pe-rah-TOOR'},
    {de:'Notfall', art:'der', pl:'Notfälle', en:'emergency', ph:'NOHT-fahl'},
    {de:'Gesundheit', art:'die', pl:'', en:'health', ph:'geh-ZOONT-hite'},
    {de:'Vormittag', art:'der', pl:'', en:'morning (before noon)', ph:'FOR-mit-tahk'},
  ],
  grammar:{
    title:'Konjunktiv II — polite wishes',
    plain:'To be polite in German, use the "Konjunktiv II" — a softer form of the verb. "Ich hätte gern ..." = I would like ... "Könnten Sie ...?" = Could you ...? "Ich würde gern ..." = I would like to ... You already use it when you say "Ich möchte" (from mögen).',
    rule:'haben → ich hätte · sein → ich wäre · können → ich könnte · werden → ich würde + infinitive: Ich würde gern kommen.',
    examples:[
      {de:'Ich hätte gern einen Termin.', en:'I would like an appointment.', ph:'ish HET-te gairn AI-nen tair-MEEN'},
      {de:'Könnten Sie mir helfen?', en:'Could you help me?', ph:'KOEN-ten zee meer HEL-fen'},
      {de:'Ich würde gern einen Termin machen.', en:'I would like to make an appointment.', ph:'ish VUIR-de gairn AI-nen tair-MEEN MAH-khen'},
    ],
  },
  quiz:[
    {q:'Fill in: "Ich ___ gern einen Termin."', options:['habe','hätte','hatte','haben'], answer:1,
     why:'"hätte" is the polite form of "haben". "Ich hätte gern ..." = I would like ...'},
    {q:'Fill in: "___ Sie mir helfen?"', options:['Können','Könnten','Kann','Könnt'], answer:1,
     why:'"Könnten Sie ...?" is the polite way to ask: "Could you help me?"'},
    {q:'"Ich würde gern ..." means...', options:['I must ...','I would like to ...','I will ...','I should ...'], answer:1,
     why:'"würde + infinitive" = would. "Ich würde gern kommen" = I would like to come.'},
    {q:'What is "das Rezept"?', options:['the treatment','the prescription','the injection','the examination'], answer:1,
     why:'das Rezept = the prescription. die Behandlung = the treatment, die Spritze = the injection.'},
    {q:'"Morgen Vormittag wäre gut." — "wäre" is the Konjunktiv II of...', options:['haben','werden','sein','können'], answer:2,
     why:'"wäre" comes from "sein" (to be). "Es wäre gut" = It would be good.'},
  ],
  speak:{ prompt:'Make an appointment out loud, politely: "Ich hätte gern einen Termin. Morgen Vormittag wäre gut."',
    model:['Guten Tag!', 'Ich hätte gern einen Termin bei Frau Doktor Schmidt.', 'Morgen Vormittag wäre gut.', 'Könnten Sie mir helfen?'] },
  recap:[
    'Polite German: Ich hätte gern ... / Könnten Sie ...? / Ich würde gern ...',
    'hätte (have), wäre (be), könnte (can), würde + infinitive (would).',
    'Health words: der Termin, das Rezept, die Behandlung, der Blutdruck.',
    'In a hospital, polite forms are essential — use them with every patient.',
  ],
  tip:'Memory tip: "Ich hätte gern ..." is the magic phrase for polite German. Use it for appointments, orders and wishes.',
  extra:[
    {q:'Say "I would like an appointment."', a:'Ich hätte gern einen Termin.'},
    {q:'Say "Could you help me?"', a:'Könnten Sie mir helfen?'},
    {q:'What does "Vormittag" mean?', a:'The morning (before noon). "Morgen Vormittag" = tomorrow morning.'},
  ],
  next:'Next: Chapter 3 — Media & Communication',
};

CHAPTERS['B1-3'] = {
  id:'B1-3', n:3, level:'B1', title:'Media & Communication', time:'10 min',
  concept:'Talk about TV, news and the internet — with the passive voice.',
  dialogue:[
    {who:'A', de:'Was wird heute im Fernsehen gezeigt?', en:'What is shown on TV today?', ph:'vahs virt HOY-te im FAIRN-zay-en geh-TSAIKT'},
    {who:'B', de:'Heute wird ein Film über Deutschland gezeigt.', en:'Today a film about Germany is shown.', ph:'HOY-te virt ine film UE-ber DOYCH-lahnt geh-TSAIKT'},
    {who:'A', de:'Wird der Film auf Deutsch gezeigt?', en:'Is the film shown in German?', ph:'virt dair film owf doych geh-TSAIKT'},
    {who:'B', de:'Ja, der Film wird auf Deutsch gezeigt, mit Untertiteln.', en:'Yes, the film is shown in German, with subtitles.', ph:'yah, dair film virt owf doych geh-TSAIKT, mit OON-ter-tee-teln'},
    {who:'A', de:'Das ist gut. So wird Deutsch gelernt!', en:'That is good. That is how German is learned!', ph:'dahs ist goot. zoh virt doych geh-LERNT'},
    {who:'B', de:'Genau! Und die Nachrichten werden jeden Tag gesendet.', en:'Exactly! And the news is broadcast every day.', ph:'geh-NOW! oont dee NAHKH-rikh-ten VAIR-den YAY-den tahk geh-ZEN-det'},
  ],
  vocab:[
    {de:'Fernsehen', art:'das', pl:'', en:'television', ph:'FAIRN-zay-en'},
    {de:'Nachricht', art:'die', pl:'Nachrichten', en:'news (item), message', ph:'NAHKH-rikht'},
    {de:'Zeitung', art:'die', pl:'Zeitungen', en:'newspaper', ph:'TSAI-tung'},
    {de:'Sendung', art:'die', pl:'Sendungen', en:'programme, broadcast', ph:'ZEN-dung'},
    {de:'Untertitel', art:'der', pl:'Untertitel', en:'subtitle', ph:'OON-ter-tee-tel'},
    {de:'Werbung', art:'die', pl:'', en:'advertising', ph:'VAIR-bung'},
    {de:'Radio', art:'das', pl:'Radios', en:'radio', ph:'RAH-dee-o'},
    {de:'Internet', art:'das', pl:'', en:'internet', ph:'IN-ter-net'},
    {de:'Website', art:'die', pl:'Websites', en:'website', ph:'VEP-site'},
    {de:'Artikel', art:'der', pl:'Artikel', en:'article', ph:'ahr-TEE-kel'},
    {de:'Schlagzeile', art:'die', pl:'Schlagzeilen', en:'headline', ph:'SHLAHKH-tsai-le'},
    {de:'senden', art:'', pl:'', en:'to broadcast, to send', ph:'ZEN-den'},
    {de:'zeigen', art:'', pl:'', en:'to show', ph:'TSAI-gen'},
    {de:'berichten', art:'', pl:'', en:'to report', ph:'beh-RIKH-ten'},
    {de:'Meinung', art:'die', pl:'Meinungen', en:'opinion', ph:'MAI-nung'},
    {de:'aktuell', art:'', pl:'', en:'current, up to date', ph:'ahk-too-EL'},
  ],
  grammar:{
    title:'The passive — "wird + Partizip II"',
    plain:'The "passive" is used when the doer is not important — only the action matters. "Der Film wird gezeigt." = The film is shown (we do not say WHO shows it). Form: werden + Partizip II. "wird" changes with the person: ich werde, du wirst, er wird, wir werden.',
    rule:'Der Film wird gezeigt. · Die Nachrichten werden gesendet. · Das Brot wird gebacken. · Deutsch wird in Deutschland gesprochen.',
    examples:[
      {de:'Der Film wird auf Deutsch gezeigt.', en:'The film is shown in German.', ph:'dair film virt owf doych geh-TSAIKT'},
      {de:'Die Zeitung wird jeden Tag gelesen.', en:'The newspaper is read every day.', ph:'dee TSAI-tung virt YAY-den tahk geh-LAY-zen'},
      {de:'Deutsch wird in Deutschland gesprochen.', en:'German is spoken in Germany.', ph:'doych virt in DOYCH-lahnt geh-SHPROKH-en'},
    ],
  },
  quiz:[
    {q:'Fill in: "Der Film wird ___."', options:['zeigen','gezeigt','zeigt','zeigte'], answer:1,
     why:'Passive = werden + Partizip II. zeigen → gezeigt: "Der Film wird gezeigt."'},
    {q:'The passive is formed with "werden" + ...', options:['infinitive','Partizip II','present tense','adjective'], answer:1,
     why:'werden + Partizip II: wird gezeigt, wird gelesen, wird gesprochen.'},
    {q:'Fill in: "Die Nachrichten werden ___."', options:['senden','gesendet','sendet','gesandt'], answer:1,
     why:'senden → gesendet. "Die Nachrichten werden gesendet" = The news is broadcast.'},
    {q:'Fill in: "Deutsch wird in Deutschland ___."', options:['sprechen','gesprochen','spricht','gespricht'], answer:1,
     why:'sprechen → gesprochen. "Deutsch wird gesprochen" = German is spoken.'},
    {q:'What is "der Untertitel"?', options:['the headline','the subtitle','the article','the programme'], answer:1,
     why:'der Untertitel = the subtitle. die Schlagzeile = the headline, der Artikel = the article.'},
  ],
  speak:{ prompt:'Talk about media out loud: "Der Film wird auf Deutsch gezeigt. Die Nachrichten werden jeden Tag gesendet."',
    model:['Was wird heute im Fernsehen gezeigt?', 'Heute wird ein Film über Deutschland gezeigt.', 'Der Film wird auf Deutsch gezeigt, mit Untertiteln.'] },
  recap:[
    'Passive: werden + Partizip II — "Der Film wird gezeigt."',
    'Use the passive when the doer is not important.',
    'Media words: das Fernsehen, die Nachrichten, die Zeitung, der Untertitel.',
    'B1 is the visa level — you are more than halfway to B2!',
  ],
  tip:'Memory tip: passive = "wird + -t/-en word at the end". Spot it in the news: "wird gezeigt", "wird berichtet", "wird gesendet".',
  extra:[
    {q:'Say "The film is shown in German."', a:'Der Film wird auf Deutsch gezeigt.'},
    {q:'Say "German is spoken in Germany."', a:'Deutsch wird in Deutschland gesprochen.'},
    {q:'What does "die Meinung" mean?', a:'Opinion. "Meiner Meinung nach ..." = In my opinion ...'},
  ],
  next:'Next: Chapter 4 — Environment & Climate (syllabus)',
};

/* ---- B1 syllabus chapters 4–12 ---- */
CHAPTERS['B1-4'] = { id:'B1-4', n:4, level:'B1', title:'Environment & Climate', time:'10 min', syllabus:true,
  concept:'Talk about the environment, climate and recycling.',
  learn:['Discuss climate and the environment','Give opinions with "meiner Meinung nach"','Talk about recycling and energy'],
  grammar:{ title:'Relative clauses — der, die, das',
    plain:'A relative clause describes a noun: "Das ist der Mann, der in Berlin wohnt." (That is the man who lives in Berlin.) The relative pronoun matches the noun: der Mann → der, die Frau → die, das Kind → das. The verb goes to the end.' },
  vocab:[
    {de:'Umwelt', art:'die', pl:'', en:'environment', ph:'OOM-velt'},
    {de:'Klima', art:'das', pl:'', en:'climate', ph:'KLEE-mah'},
    {de:'Müll', art:'der', pl:'', en:'waste, rubbish', ph:'muel'},
    {de:'recyceln', art:'', pl:'', en:'to recycle', ph:'reh-SAI-keln'},
    {de:'Energie', art:'die', pl:'Energien', en:'energy', ph:'en-air-GHEE'},
    {de:'Strom', art:'der', pl:'', en:'electricity', ph:'shtrohm'},
    {de:'sparen', art:'', pl:'', en:'to save', ph:'SHPAH-ren'},
    {de:'Natur', art:'die', pl:'', en:'nature', ph:'nah-TOOR'},
  ], next:'Next: Chapter 5 — Travel & Holidays (syllabus)' };

CHAPTERS['B1-5'] = { id:'B1-5', n:5, level:'B1', title:'Travel & Holidays', time:'10 min', syllabus:true,
  concept:'Book accommodation and tell travel stories in the past.',
  learn:['Book a hotel and ask about rooms','Tell a travel story in the Präteritum','Describe sights and excursions'],
  grammar:{ title:'Präteritum — the narrative past',
    plain:'Stories and books use the Präteritum (simple past): "Ich ging nach Berlin." (I went to Berlin.) "Es war ein schöner Tag." Common verbs: gehen → ging, fahren → fuhr, kommen → kam, sehen → sah, sein → war, haben → hatte.' },
  vocab:[
    {de:'Unterkunft', art:'die', pl:'Unterkünfte', en:'accommodation', ph:'OON-ter-koonft'},
    {de:'buchen', art:'', pl:'', en:'to book', ph:'BOO-khen'},
    {de:'Reservierung', art:'die', pl:'Reservierungen', en:'reservation', ph:'reh-zair-VEE-rung'},
    {de:'Sehenswürdigkeit', art:'die', pl:'Sehenswürdigkeiten', en:'sight, attraction', ph:'ZAY-ens-vuer-dish-kait'},
    {de:'Reiseführer', art:'der', pl:'Reiseführer', en:'guidebook', ph:'RAI-ze-fue-rer'},
    {de:'Ausflug', art:'der', pl:'Ausflüge', en:'excursion, day trip', ph:'OWS-flook'},
    {de:'übernachten', art:'', pl:'', en:'to stay overnight', ph:'ue-ber-NAHKH-ten'},
    {de:'Jugendherberge', art:'die', pl:'Jugendherbergen', en:'youth hostel', ph:'YOO-gent-hair-bair-ge'},
  ], next:'Next: Chapter 6 — Education & Learning (syllabus)' };

CHAPTERS['B1-6'] = { id:'B1-6', n:6, level:'B1', title:'Education & Learning', time:'10 min', syllabus:true,
  concept:'Talk about school, university and exams.',
  learn:['Talk about your education','Describe exams and results','Discuss learning methods'],
  grammar:{ title:'Adjective endings — the basics',
    plain:'Adjectives before a noun change their ending: "der neue Kurs" (the new course), "ein neuer Kurs" (a new course), "das neue Buch". The ending depends on the article and the case. At B1, learn the nominative patterns first: der → -e, ein → -er (masculine), eine → -e (feminine).' },
  vocab:[
    {de:'Universität', art:'die', pl:'Universitäten', en:'university', ph:'oo-nee-vair-zee-TAYT'},
    {de:'Kurs', art:'der', pl:'Kurse', en:'course', ph:'koors'},
    {de:'Zeugnis', art:'das', pl:'Zeugnisse', en:'certificate, report', ph:'TSOYK-nis'},
    {de:'Abschluss', art:'der', pl:'Abschlüsse', en:'qualification, degree', ph:'AHP-shlooss'},
    {de:'studieren', art:'', pl:'', en:'to study (at university)', ph:'shtoo-DEE-ren'},
    {de:'Note', art:'die', pl:'Noten', en:'grade, mark', ph:'NOH-te'},
    {de:'Schuljahr', art:'das', pl:'Schuljahre', en:'school year', ph:'SHOOL-yahr'},
    {de:'Hausaufgabe', art:'die', pl:'Hausaufgaben', en:'homework', ph:'HOWS-owf-gah-be'},
  ], next:'Next: Chapter 7 — Family & Relationships (syllabus)' };

CHAPTERS['B1-7'] = { id:'B1-7', n:7, level:'B1', title:'Family & Relationships', time:'10 min', syllabus:true,
  concept:'Talk about relationships, weddings and family life.',
  learn:['Talk about relationships and marriage','Describe family celebrations','Express feelings and opinions'],
  grammar:{ title:'Two-part connectors — sowohl…als auch, entweder…oder',
    plain:'Two-part connectors join two ideas: "sowohl … als auch" (both … and), "entweder … oder" (either … or), "weder … noch" (neither … nor). "Ich spreche sowohl Deutsch als auch Englisch." (I speak both German and English.)' },
  vocab:[
    {de:'Beziehung', art:'die', pl:'Beziehungen', en:'relationship', ph:'beh-TSEE-ung'},
    {de:'heiraten', art:'', pl:'', en:'to marry', ph:'HAI-rah-ten'},
    {de:'Hochzeit', art:'die', pl:'Hochzeiten', en:'wedding', ph:'HOKH-tsait'},
    {de:'Scheidung', art:'die', pl:'Scheidungen', en:'divorce', ph:'SHI-dung'},
    {de:'verliebt', art:'', pl:'', en:'in love', ph:'fair-LEEPT'},
    {de:'verlobt', art:'', pl:'', en:'engaged', ph:'fair-LOHPT'},
    {de:'Trennung', art:'die', pl:'Trennungen', en:'separation', ph:'TREN-nung'},
    {de:'zusammenleben', art:'', pl:'', en:'to live together', ph:'tsoo-ZAH-men-lay-ben'},
  ], next:'Next: Chapter 8 — Money & Shopping (syllabus)' };

CHAPTERS['B1-8'] = { id:'B1-8', n:8, level:'B1', title:'Money & Shopping', time:'10 min', syllabus:true,
  concept:'Talk about money, banks and spending.',
  learn:['Talk about your bank account','Discuss prices and saving','Understand bills and contracts'],
  grammar:{ title:'Genitive — "of" in German',
    plain:'The genitive shows possession: "das Auto meines Vaters" (my father\'s car). Masculine/neuter nouns add -s/-es: des Mannes, des Kindes. Feminine and plural: der Frau, der Kinder. In everyday speech, "von" is also common: "das Auto von meinem Vater".' },
  vocab:[
    {de:'Konto', art:'das', pl:'Konten', en:'account', ph:'KON-to'},
    {de:'überweisen', art:'', pl:'', en:'to transfer (money)', ph:'ue-ber-VAI-zen'},
    {de:'sparen', art:'', pl:'', en:'to save', ph:'SHPAH-ren'},
    {de:'ausgeben', art:'', pl:'', en:'to spend', ph:'OWS-gay-ben'},
    {de:'leihen', art:'', pl:'', en:'to lend, to borrow', ph:'LAI-en'},
    {de:'Steuer', art:'die', pl:'Steuern', en:'tax', ph:'SHTOY-er'},
    {de:'Zins', art:'der', pl:'Zinsen', en:'interest', ph:'tsins'},
    {de:'Rechnung', art:'die', pl:'Rechnungen', en:'bill, invoice', ph:'REKH-nung'},
  ], next:'Next: Chapter 9 — Housing & Living (syllabus)' };

CHAPTERS['B1-9'] = { id:'B1-9', n:9, level:'B1', title:'Housing & Living', time:'10 min', syllabus:true,
  concept:'Rent a flat, talk to the landlord, and move house.',
  learn:['Search for a flat and read ads','Talk about the deposit and the contract','Cancel a contract politely'],
  grammar:{ title:'Relative clauses — den, dem, der (accusative & dative)',
    plain:'Relative pronouns change with the case: "Der Mann, den ich kenne, ..." (the man whom I know — accusative), "Die Frau, der ich helfe, ..." (the woman whom I help — dative). The verb still goes to the end.' },
  vocab:[
    {de:'Vermieter', art:'der', pl:'Vermieter', en:'landlord', ph:'fair-MEE-ter'},
    {de:'Kaution', art:'die', pl:'Kautionen', en:'deposit', ph:'kow-TSEE-ohn'},
    {de:'Umzug', art:'der', pl:'Umzüge', en:'move (house)', ph:'OOM-tsook'},
    {de:'WG', art:'die', pl:'WGs', en:'shared flat', ph:'vay-gay'},
    {de:'möbliert', art:'', pl:'', en:'furnished', ph:'mer-BLEERT'},
    {de:'Nebenkosten', art:'die', pl:'', en:'additional costs', ph:'NAY-ben-kos-ten'},
    {de:'kündigen', art:'', pl:'', en:'to cancel, to terminate', ph:'KUEN-dee-gen'},
    {de:'Mietvertrag', art:'der', pl:'Mietverträge', en:'rental contract', ph:'MEET-fair-trahk'},
  ], next:'Next: Chapter 10 — Health & Fitness (syllabus)' };

CHAPTERS['B1-10'] = { id:'B1-10', n:10, level:'B1', title:'Health & Fitness', time:'10 min', syllabus:true,
  concept:'Talk about fitness, food and a healthy life.',
  learn:['Talk about sport and training','Discuss food and diets','Give health advice'],
  grammar:{ title:'Konjunktiv II — wishes and hypotheticals',
    plain:'"Wenn ich Zeit hätte, würde ich mehr Sport machen." (If I had time, I would do more sport.) Konjunktiv II with "wenn" (if) talks about things that are not real — wishes and dreams.' },
  vocab:[
    {de:'Fitnessstudio', art:'das', pl:'Fitnessstudios', en:'gym', ph:'FIT-nes-shtoo-dee-o'},
    {de:'trainieren', art:'', pl:'', en:'to train', ph:'trai-NEE-ren'},
    {de:'Ernährung', art:'die', pl:'', en:'nutrition', ph:'air-NAY-rung'},
    {de:'Diät', art:'die', pl:'Diäten', en:'diet', ph:'dee-AYT'},
    {de:'Gewicht', art:'das', pl:'', en:'weight', ph:'geh-VIKHT'},
    {de:'abnehmen', art:'', pl:'', en:'to lose weight', ph:'AHP-nay-men'},
    {de:'zunehmen', art:'', pl:'', en:'to gain weight', ph:'TSOO-nay-men'},
    {de:'Sportart', art:'die', pl:'Sportarten', en:'sport (type)', ph:'SHPORT-ahrt'},
  ], next:'Next: Chapter 11 — Work & Future Plans (syllabus)' };

CHAPTERS['B1-11'] = { id:'B1-11', n:11, level:'B1', title:'Work & Future Plans', time:'10 min', syllabus:true,
  concept:'Talk about your future, goals and dreams.',
  learn:['Talk about future plans','Set goals and explain them','Discuss dreams and ambitions'],
  grammar:{ title:'Future with "werden"',
    plain:'"Ich werde in Deutschland arbeiten." (I will work in Germany.) Form: werden + infinitive at the end. "werden": ich werde, du wirst, er wird, wir werden.' },
  vocab:[
    {de:'Zukunft', art:'die', pl:'', en:'future', ph:'TSOO-koonft'},
    {de:'Plan', art:'der', pl:'Pläne', en:'plan', ph:'plahn'},
    {de:'Ziel', art:'das', pl:'Ziele', en:'goal', ph:'tseel'},
    {de:'erreichen', art:'', pl:'', en:'to reach, to achieve', ph:'air-RAI-khen'},
    {de:'entscheiden', art:'', pl:'', en:'to decide', ph:'ent-SHAI-den'},
    {de:'Entscheidung', art:'die', pl:'Entscheidungen', en:'decision', ph:'ent-SHAI-dung'},
    {de:'Traum', art:'der', pl:'Träume', en:'dream', ph:'trowm'},
    {de:'erfolgreich', art:'', pl:'', en:'successful', ph:'air-FOLK-raish'},
  ], next:'Next: Chapter 12 — Review & B1 Mock (syllabus)' };

CHAPTERS['B1-12'] = { id:'B1-12', n:12, level:'B1', title:'Review & B1 Mock (Goethe)', time:'12 min', syllabus:true,
  concept:'Review all of B1 and test yourself, Goethe-style.',
  learn:['Review weil/dass, Konjunktiv II, passive and genitive','Practise all B1 topics in one test','See your score per module — pass is 60% per module'],
  grammar:{ title:'B1 review — the four big steps',
    plain:'B1 gave you four big tools: (1) weil/dass clauses — verb at the end. (2) Konjunktiv II — Ich hätte gern ... (3) Passive — wird + Partizip II. (4) Genitive — das Auto meines Vaters. The Goethe B1 exam has 4 modules (Lesen, Hören, Schreiben, Sprechen), each 100 points, pass 60 per module.' },
  vocab:[
    {de:'Vorbereitung', art:'die', pl:'Vorbereitungen', en:'preparation', ph:'FOR-bai-rai-tung'},
    {de:'Modell', art:'das', pl:'Modelle', en:'model', ph:'mo-DEL'},
    {de:'Test', art:'der', pl:'Tests', en:'test', ph:'test'},
    {de:'Aufgabe', art:'die', pl:'Aufgaben', en:'task', ph:'OWF-gah-be'},
    {de:'Lösung', art:'die', pl:'Lösungen', en:'solution', ph:'LER-zung'},
    {de:'Bewertung', art:'die', pl:'Bewertungen', en:'assessment', ph:'beh-VAIR-tung'},
    {de:'bestehen', art:'', pl:'', en:'to pass (an exam)', ph:'beh-SHTAY-en'},
    {de:'Prüfung', art:'die', pl:'Prüfungen', en:'exam', ph:'PRUE-fung'},
  ], next:'Next: B2 — Upper Intermediate (job level)' };

/* ================= B2 ================= */

CHAPTERS['B2-1'] = {
  id:'B2-1', n:1, level:'B2', title:'Work & Career', time:'10 min',
  concept:'Report what others say — Konjunktiv I.',
  dialogue:[
    {who:'A', de:'Was hat der Chef gesagt?', en:'What did the boss say?', ph:'vahs haht dair shef geh-ZAHKT'},
    {who:'B', de:'Er hat gesagt, er sei mit der Arbeit zufrieden.', en:'He said that he is satisfied with the work.', ph:'air haht geh-ZAHKT, air zai mit dair AHR-bait tsoo-FREE-den'},
    {who:'A', de:'Wirklich? Er sagt, wir sollen schneller arbeiten?', en:'Really? He says we should work faster?', ph:'VIRK-lish? air zahkt, veer ZOL-len SHNEL-ler AHR-bai-ten'},
    {who:'B', de:'Er sagt, die neue Schicht beginne um sechs Uhr.', en:'He says the new shift starts at six o\'clock.', ph:'air zahkt, dee NOY-e shikht beh-GIN-ne oom zeks oor'},
    {who:'A', de:'Und was sagt die Kollegin?', en:'And what does the colleague say?', ph:'oont vahs zahkt dee kol-LAY-gin'},
    {who:'B', de:'Sie sagt, sie habe schon alles vorbereitet.', en:'She says she has already prepared everything.', ph:'zee zahkt, zee HAH-be shohn AHL-les FOR-bai-rai-tet'},
  ],
  vocab:[
    {de:'Besprechung', art:'die', pl:'Besprechungen', en:'meeting', ph:'beh-SHPREH-khung'},
    {de:'Sitzung', art:'die', pl:'Sitzungen', en:'meeting, session', ph:'ZIT-tsung'},
    {de:'Vorschlag', art:'der', pl:'Vorschläge', en:'suggestion', ph:'FOR-shlahk'},
    {de:'Entscheidung', art:'die', pl:'Entscheidungen', en:'decision', ph:'ent-SHAI-dung'},
    {de:'Abteilung', art:'die', pl:'Abteilungen', en:'department', ph:'ahp-TAI-lung'},
    {de:'Geschäftsführung', art:'die', pl:'', en:'management', ph:'geh-SHEFTS-fue-rung'},
    {de:'Umsatz', art:'der', pl:'Umsätze', en:'turnover, revenue', ph:'OOM-zahts'},
    {de:'Konkurrenz', art:'die', pl:'', en:'competition', ph:'kon-koo-RENTS'},
    {de:'Strategie', art:'die', pl:'Strategien', en:'strategy', ph:'shtrah-teh-GHEE'},
    {de:'Gewinn', art:'der', pl:'Gewinne', en:'profit', ph:'geh-VIN'},
    {de:'Verlust', art:'der', pl:'Verluste', en:'loss', ph:'fair-LOOST'},
    {de:'Leistung', art:'die', pl:'Leistungen', en:'performance', ph:'LAI-stung'},
    {de:'zufrieden', art:'', pl:'', en:'satisfied', ph:'tsoo-FREE-den'},
    {de:'unzufrieden', art:'', pl:'', en:'dissatisfied', ph:'oon-tsoo-FREE-den'},
    {de:'pünktlich', art:'', pl:'', en:'on time', ph:'PUENKT-lish'},
    {de:'vorschlagen', art:'', pl:'', en:'to suggest', ph:'FOR-shlah-gen'},
    {de:'berichten', art:'', pl:'', en:'to report', ph:'beh-RIKH-ten'},
  ],
  grammar:{
    title:'Konjunktiv I — reported speech',
    plain:'When you report what someone said, German uses the "Konjunktiv I": "Er sagt, er sei krank." (He says he is ill.) It shows that these are HIS words, not yours. Forms: sein → sei, haben → habe, werden → werde; most verbs: stem + -e (er beginne, sie komme).',
    rule:'Er sagt, er sei zufrieden. · Sie sagt, sie habe keine Zeit. · Der Chef sagt, die Schicht beginne um sechs Uhr. · "man" → "man sage"',
    examples:[
      {de:'Er sagt, er sei mit der Arbeit zufrieden.', en:'He says he is satisfied with the work.', ph:'air zahkt, air zai mit dair AHR-bait tsoo-FREE-den'},
      {de:'Sie sagt, sie habe schon alles vorbereitet.', en:'She says she has already prepared everything.', ph:'zee zahkt, zee HAH-be shohn AHL-les FOR-bai-rai-tet'},
      {de:'Der Arzt sagt, der Patient müsse viel trinken.', en:'The doctor says the patient must drink a lot.', ph:'dair ahrtst zahkt, dair pah-TSEE-ent MUES-se feel TRING-ken'},
    ],
  },
  quiz:[
    {q:'Fill in: "Er sagt, er ___ zufrieden."', options:['ist','sei','wäre','war'], answer:1,
     why:'"sei" is Konjunktiv I of "sein". Reported speech uses Konjunktiv I: "Er sagt, er sei zufrieden."'},
    {q:'Konjunktiv I is used for...', options:['wishes','reported speech','the future','orders'], answer:1,
     why:'Konjunktiv I reports what others say: "Sie sagt, sie habe keine Zeit."'},
    {q:'Fill in: "Sie sagt, sie ___ keine Zeit."', options:['hat','habe','hätte','hatte'], answer:1,
     why:'"habe" is Konjunktiv I of "haben". "Sie sagt, sie habe keine Zeit."'},
    {q:'"Die Schicht beginne um sechs Uhr." — "beginne" is Konjunktiv I of...', options:['beginnen','sein','haben','werden'], answer:0,
     why:'beginnen → beginne. The 3rd person singular Konjunktiv I adds -e to the stem.'},
    {q:'What is "die Besprechung"?', options:['the decision','the meeting','the suggestion','the department'], answer:1,
     why:'die Besprechung = the meeting. der Vorschlag = the suggestion, die Abteilung = the department.'},
  ],
  speak:{ prompt:'Report what someone said out loud: "Er sagt, er sei ... Sie sagt, sie habe ..."',
    model:['Der Chef sagt, er sei mit der Arbeit zufrieden.', 'Die Kollegin sagt, sie habe schon alles vorbereitet.'] },
  recap:[
    'Konjunktiv I = reported speech: "Er sagt, er sei ..."',
    'sei (be), habe (have), werde (will) — most verbs add -e.',
    'It shows the words belong to someone else, not to you.',
    'Work words: die Besprechung, der Vorschlag, die Entscheidung, der Umsatz.',
  ],
  tip:'Memory tip: in newspapers and meetings, Konjunktiv I is everywhere. Listen for "sei", "habe", "werde" — they signal reported speech.',
  extra:[
    {q:'Say "He says he is satisfied."', a:'Er sagt, er sei zufrieden.'},
    {q:'Say "She says she has no time."', a:'Sie sagt, sie habe keine Zeit.'},
    {q:'What does "zufrieden" mean?', a:'Satisfied. The opposite is "unzufrieden".'},
  ],
  next:'Next: Chapter 2 — Society & Environment',
};

CHAPTERS['B2-2'] = {
  id:'B2-2', n:2, level:'B2', title:'Society & Environment', time:'10 min',
  concept:'Passive voice in full — and its elegant substitutes.',
  dialogue:[
    {who:'A', de:'Die Umwelt muss geschützt werden.', en:'The environment must be protected.', ph:'dee OOM-velt mooss geh-SHUETST VAIR-den'},
    {who:'B', de:'Ja, viel Plastik kann recycelt werden.', en:'Yes, a lot of plastic can be recycled.', ph:'yah, feel PLAHS-tik kahn reh-SAI-kelt VAIR-den'},
    {who:'A', de:'Das Problem lässt sich nicht so einfach lösen.', en:'The problem cannot be solved so easily.', ph:'dahs pro-BLAYM LESST zish nikht zoh INE-fahkh LER-zen'},
    {who:'B', de:'Aber es ist viel zu tun. Die Luft ist zu verbessern.', en:'But there is a lot to do. The air is to be improved.', ph:'AH-ber es ist feel tsoo toon. dee looft ist tsoo fair-BES-sern'},
    {who:'A', de:'Richtig. Und die Energie muss gespart werden.', en:'Right. And energy must be saved.', ph:'RIKH-tish. oont dee en-air-GHEE mooss geh-SHPAHRT VAIR-den'},
    {who:'B', de:'Jeder kann etwas tun. Das ist zu schaffen!', en:'Everyone can do something. That can be done!', ph:'YAY-der kahn ET-vahs toon. dahs ist tsoo SHAHF-fen'},
  ],
  vocab:[
    {de:'Umwelt', art:'die', pl:'', en:'environment', ph:'OOM-velt'},
    {de:'Luft', art:'die', pl:'', en:'air', ph:'looft'},
    {de:'Wald', art:'der', pl:'Wälder', en:'forest', ph:'vahlt'},
    {de:'Klima', art:'das', pl:'', en:'climate', ph:'KLEE-mah'},
    {de:'Verschmutzung', art:'die', pl:'', en:'pollution', ph:'fair-SHMOOT-tsung'},
    {de:'Abfall', art:'der', pl:'Abfälle', en:'waste', ph:'AHP-fahl'},
    {de:'recyceln', art:'', pl:'', en:'to recycle', ph:'reh-SAI-keln'},
    {de:'schützen', art:'', pl:'', en:'to protect', ph:'SHUET-sen'},
    {de:'sparen', art:'', pl:'', en:'to save', ph:'SHPAH-ren'},
    {de:'verbessern', art:'', pl:'', en:'to improve', ph:'fair-BES-sern'},
    {de:'lösen', art:'', pl:'', en:'to solve', ph:'LER-zen'},
    {de:'schaffen', art:'', pl:'', en:'to manage, to achieve', ph:'SHAHF-fen'},
    {de:'Problem', art:'das', pl:'Probleme', en:'problem', ph:'pro-BLAYM'},
    {de:'Lösung', art:'die', pl:'Lösungen', en:'solution', ph:'LER-zung'},
    {de:'Folge', art:'die', pl:'Folgen', en:'consequence', ph:'FOL-ge'},
    {de:'Maßnahme', art:'die', pl:'Maßnahmen', en:'measure', ph:'MAHSS-nah-me'},
  ],
  grammar:{
    title:'Passive substitutes — "sich lassen" and "sein + zu"',
    plain:'Native speakers often avoid the long passive. Two elegant shortcuts: (1) "sich lassen + infinitive" = can be done: "Das Problem lässt sich lösen." (2) "sein + zu + infinitive" = is to be done / can be done: "Das ist zu schaffen." Both are very common in formal German.',
    rule:'Das Problem lässt sich lösen. (The problem can be solved.) · Das ist zu schaffen. (That can be done.) · Die Umwelt muss geschützt werden. (passive with modal verb)',
    examples:[
      {de:'Das Problem lässt sich nicht so einfach lösen.', en:'The problem cannot be solved so easily.', ph:'dahs pro-BLAYM LESST zish nikht zoh INE-fahkh LER-zen'},
      {de:'Die Luft ist zu verbessern.', en:'The air is to be improved.', ph:'dee looft ist tsoo fair-BES-sern'},
      {de:'Die Energie muss gespart werden.', en:'Energy must be saved.', ph:'dee en-air-GHEE mooss geh-SHPAHRT VAIR-den'},
    ],
  },
  quiz:[
    {q:'Fill in: "Das Problem lässt sich ___."', options:['lösen','gelöst','löst','lösbar'], answer:0,
     why:'"sich lassen + infinitive": "Das Problem lässt sich lösen."'},
    {q:'Fill in: "Das ist zu ___."', options:['schaffen','geschafft','schafft','schaffbar'], answer:0,
     why:'"sein + zu + infinitive": "Das ist zu schaffen." = That can be done.'},
    {q:'Fill in: "Die Umwelt muss ___ werden."', options:['schützen','geschützt','schützt','schutz'], answer:1,
     why:'Passive with a modal verb: "muss geschützt werden" = must be protected.'},
    {q:'"sich lassen + infinitive" means...', options:['to let go','can be done','to allow','to leave'], answer:1,
     why:'"Das lässt sich machen" = That can be done. It is a passive substitute.'},
    {q:'What is "die Verschmutzung"?', options:['the solution','the pollution','the climate','the waste'], answer:1,
     why:'die Verschmutzung = pollution. der Abfall = waste, das Klima = climate.'},
  ],
  speak:{ prompt:'Discuss the environment out loud: "Die Umwelt muss geschützt werden. Das Problem lässt sich lösen."',
    model:['Die Umwelt muss geschützt werden.', 'Viel Plastik kann recycelt werden.', 'Das Problem lässt sich nicht so einfach lösen.', 'Aber jeder kann etwas tun.'] },
  recap:[
    'Passive with modal verbs: muss/kann + Partizip II + werden.',
    '"sich lassen + infinitive" = can be done.',
    '"sein + zu + infinitive" = is to be done / can be done.',
    'Environment words: die Umwelt, die Verschmutzung, der Abfall, die Maßnahme.',
  ],
  tip:'Memory tip: "lässt sich" is your B2 superpower — "Das lässt sich machen", "Das lässt sich ändern", "Das lässt sich nicht vermeiden". Use it in every discussion.',
  extra:[
    {q:'Say "The problem can be solved."', a:'Das Problem lässt sich lösen.'},
    {q:'Say "That can be done."', a:'Das ist zu schaffen.'},
    {q:'What does "schützen" mean?', a:'To protect. "Die Umwelt schützen" = to protect the environment.'},
  ],
  next:'Next: Chapter 3 — Health & Nursing',
};

CHAPTERS['B2-3'] = {
  id:'B2-3', n:3, level:'B2', title:'Health & Nursing', time:'10 min',
  concept:'Relative clauses in all cases — the language of nursing reports.',
  dialogue:[
    {who:'A', de:'Der Patient, den ich heute betreue, hat starke Schmerzen.', en:'The patient whom I am caring for today has severe pain.', ph:'dair pah-TSEE-ent, dayn ish HOY-te beh-TROY-e, haht SHTAHR-ke SHMAIR-tsen'},
    {who:'B', de:'Der Arzt, dem ich berichtet habe, kommt gleich.', en:'The doctor to whom I reported is coming soon.', ph:'dair ahrtst, daym ish beh-RIKH-tet HAH-be, komt glaish'},
    {who:'A', de:'Die Patientin, deren Blutdruck zu hoch ist, braucht Ruhe.', en:'The patient (female) whose blood pressure is too high needs rest.', ph:'dee pah-TSEE-en-tin, DAY-ren BLOOT-drook tsoo hohkh ist, browkht ROO-e'},
    {who:'B', de:'Die Medikamente, die der Arzt verschrieben hat, sind im Schrank.', en:'The medicines that the doctor prescribed are in the cupboard.', ph:'dee meh-dee-kah-MEN-te, dee dair ahrtst fair-SHREE-ben haht, zint im shrahnk'},
    {who:'A', de:'Die Schwester, mit der ich zusammenarbeite, ist sehr erfahren.', en:'The nurse with whom I work together is very experienced.', ph:'dee SHVES-ter, mit dair ish tsoo-ZAH-men-ahr-bai-te, ist zair air-FAH-ren'},
    {who:'B', de:'Gut. Die Pflege, die wir leisten, ist sehr wichtig.', en:'Good. The care that we provide is very important.', ph:'goot. dee PFLAY-ge, dee veer LAI-sten, ist zair VIKH-tish'},
  ],
  vocab:[
    {de:'Patient', art:'der', pl:'Patienten', en:'patient (male)', ph:'pah-TSEE-ent'},
    {de:'Patientin', art:'die', pl:'Patientinnen', en:'patient (female)', ph:'pah-TSEE-en-tin'},
    {de:'betreuen', art:'', pl:'', en:'to care for', ph:'beh-TROY-en'},
    {de:'Schmerz', art:'der', pl:'Schmerzen', en:'pain', ph:'shmairts'},
    {de:'Blutdruck', art:'der', pl:'', en:'blood pressure', ph:'BLOOT-drook'},
    {de:'Medikament', art:'das', pl:'Medikamente', en:'medicine, drug', ph:'meh-dee-kah-MENT'},
    {de:'verschreiben', art:'', pl:'', en:'to prescribe', ph:'fair-SHRAI-ben'},
    {de:'Pflege', art:'die', pl:'', en:'care, nursing', ph:'PFLAY-ge'},
    {de:'leisten', art:'', pl:'', en:'to provide, to perform', ph:'LAI-sten'},
    {de:'erfahren', art:'', pl:'', en:'experienced', ph:'air-FAH-ren'},
    {de:'Dienst', art:'der', pl:'Dienste', en:'shift, duty', ph:'deenst'},
    {de:'Übergabe', art:'die', pl:'Übergaben', en:'handover', ph:'ue-ber-GAH-be'},
    {de:'Station', art:'die', pl:'Stationen', en:'ward', ph:'shtah-TSEE-ohn'},
    {de:'Dokumentation', art:'die', pl:'', en:'documentation', ph:'do-koo-men-tah-TSEE-ohn'},
    {de:'Verband', art:'der', pl:'Verbände', en:'bandage', ph:'fair-BAHNT'},
    {de:'Wunde', art:'die', pl:'Wunden', en:'wound', ph:'VOON-de'},
  ],
  grammar:{
    title:'Relative clauses — all cases',
    plain:'A relative clause describes a noun. The relative pronoun changes with the case: nominative der/die/das, accusative den/die/das, dative dem/der/dem, genitive dessen/deren. The verb goes to the end. In nursing reports, you use these sentences all day.',
    rule:'Der Patient, DEN ich betreue, ... (accusative) · Der Arzt, DEM ich berichtet habe, ... (dative) · Die Patientin, DEREN Blutdruck zu hoch ist, ... (genitive) · Die Medikamente, DIE der Arzt verschrieben hat, ... (plural)',
    examples:[
      {de:'Der Patient, den ich heute betreue, hat starke Schmerzen.', en:'The patient whom I am caring for today has severe pain.', ph:'dair pah-TSEE-ent, dayn ish HOY-te beh-TROY-e, haht SHTAHR-ke SHMAIR-tsen'},
      {de:'Der Arzt, dem ich berichtet habe, kommt gleich.', en:'The doctor to whom I reported is coming soon.', ph:'dair ahrtst, daym ish beh-RIKH-tet HAH-be, komt glaish'},
      {de:'Die Patientin, deren Blutdruck zu hoch ist, braucht Ruhe.', en:'The patient whose blood pressure is too high needs rest.', ph:'dee pah-TSEE-en-tin, DAY-ren BLOOT-drook tsoo hohkh ist, browkht ROO-e'},
    ],
  },
  quiz:[
    {q:'Fill in: "Der Patient, ___ ich betreue, hat Schmerzen."', options:['der','den','dem','dessen'], answer:1,
     why:'"den" is the accusative relative pronoun for a masculine noun: "den ich betreue" (whom I care for).'},
    {q:'Fill in: "Die Frau, ___ ich helfe, ist krank."', options:['die','den','der','dem'], answer:2,
     why:'"helfen" takes the dative, so the relative pronoun is "der" (dative feminine).'},
    {q:'Fill in: "Die Patientin, ___ Blutdruck zu hoch ist, braucht Ruhe."', options:['deren','dessen','die','der'], answer:0,
     why:'"deren" is the genitive relative pronoun (feminine): "deren Blutdruck" = whose blood pressure.'},
    {q:'Fill in: "Die Medikamente, ___ der Arzt verschrieben hat, sind im Schrank."', options:['den','die','der','dem'], answer:1,
     why:'"die" is the plural relative pronoun here (accusative plural): "die der Arzt verschrieben hat".'},
    {q:'What does "betreuen" mean?', options:['to visit','to care for','to examine','to treat'], answer:1,
     why:'betreuen = to care for (a patient). behandeln = to treat, untersuchen = to examine.'},
  ],
  speak:{ prompt:'Give a handover out loud: "Der Patient, den ich betreue, hat starke Schmerzen. Die Medikamente, die der Arzt verschrieben hat, sind im Schrank."',
    model:['Der Patient, den ich heute betreue, hat starke Schmerzen.', 'Der Arzt, dem ich berichtet habe, kommt gleich.', 'Die Patientin, deren Blutdruck zu hoch ist, braucht Ruhe.'] },
  recap:[
    'Relative pronouns: der/den/dem/dessen (masculine), die/die/der/deren (feminine), das/das/dem/dessen (neuter).',
    'The verb goes to the END of the relative clause.',
    'Nursing words: betreuen, die Übergabe, die Dokumentation, der Verband.',
    'This is telc Pflege language — handovers are built from these sentences.',
  ],
  tip:'Memory tip: in a handover, start with the patient: "Der Patient, den ich betreue, ..." — then add the facts. One sentence, all the information.',
  extra:[
    {q:'Say "The patient whom I care for has severe pain."', a:'Der Patient, den ich betreue, hat starke Schmerzen.'},
    {q:'Say "The medicines that the doctor prescribed are in the cupboard."', a:'Die Medikamente, die der Arzt verschrieben hat, sind im Schrank.'},
    {q:'What does "die Übergabe" mean?', a:'The handover (between shifts).'},
  ],
  next:'Next: Chapter 4 — Travel & Leisure (syllabus)',
};

/* ---- B2 syllabus chapters 4–12 ---- */
CHAPTERS['B2-4'] = { id:'B2-4', n:4, level:'B2', title:'Travel & Leisure', time:'10 min', syllabus:true,
  concept:'Talk about holidays, relaxation and adventures.',
  learn:['Describe holidays and leisure in detail','Use Konjunktiv II for wishes and dreams','Compare travel experiences'],
  grammar:{ title:'Konjunktiv II — full (wishes & hypotheticals)',
    plain:'"Wenn ich mehr Zeit hätte, würde ich mehr reisen." (If I had more time, I would travel more.) Konjunktiv II with "wenn" talks about unreal situations. Form: Präteritum stem + umlaut + -e (hätte, wäre, könnte, würde + infinitive).' },
  vocab:[
    {de:'Erholung', art:'die', pl:'', en:'relaxation, recovery', ph:'air-HOH-lung'},
    {de:'Sehenswürdigkeit', art:'die', pl:'Sehenswürdigkeiten', en:'sight, attraction', ph:'ZAY-ens-vuer-dish-kait'},
    {de:'Reiseleiter', art:'der', pl:'Reiseleiter', en:'tour guide', ph:'RAI-ze-lai-ter'},
    {de:'Abenteuer', art:'das', pl:'Abenteuer', en:'adventure', ph:'AH-ben-toy-er'},
    {de:'entspannen', art:'', pl:'', en:'to relax', ph:'ent-SHPAH-nen'},
    {de:'Kreuzfahrt', art:'die', pl:'Kreuzfahrten', en:'cruise', ph:'KROYTS-fahrt'},
    {de:'Campingplatz', art:'der', pl:'Campingplätze', en:'campsite', ph:'KEM-ping-plahts'},
    {de:'Aussicht', art:'die', pl:'', en:'view', ph:'OWS-zikht'},
  ], next:'Next: Chapter 5 — Media & Technology (syllabus)' };

CHAPTERS['B2-5'] = { id:'B2-5', n:5, level:'B2', title:'Media & Technology', time:'10 min', syllabus:true,
  concept:'Talk about digitalisation, AI and data protection.',
  learn:['Discuss technology and its effects','Use nominal style (nouns instead of verbs)','Argue about data protection'],
  grammar:{ title:'Nominalisation — nouns instead of verbs',
    plain:'Formal German prefers nouns: "die Behandlung des Patienten" (the treatment of the patient) instead of "den Patienten behandeln" (to treat the patient). Build nouns from verbs: behandeln → die Behandlung, entscheiden → die Entscheidung.' },
  vocab:[
    {de:'Digitalisierung', art:'die', pl:'', en:'digitalisation', ph:'dee-gee-tah-lee-ZEE-rung'},
    {de:'Künstliche Intelligenz', art:'die', pl:'', en:'artificial intelligence', ph:'KUENST-li-khe in-tel-lee-GENTS'},
    {de:'Smartphone', art:'das', pl:'Smartphones', en:'smartphone', ph:'SMAHRT-fohn'},
    {de:'App', art:'die', pl:'Apps', en:'app', ph:'ahp'},
    {de:'Daten', art:'die', pl:'', en:'data', ph:'DAH-ten'},
    {de:'Datenschutz', art:'der', pl:'', en:'data protection', ph:'DAH-ten-shoots'},
    {de:'Sicherheit', art:'die', pl:'', en:'security, safety', ph:'ZIKH-er-hite'},
    {de:'programmieren', art:'', pl:'', en:'to program', ph:'pro-grah-MEE-ren'},
  ], next:'Next: Chapter 6 — Education & Science (syllabus)' };

CHAPTERS['B2-6'] = { id:'B2-6', n:6, level:'B2', title:'Education & Science', time:'10 min', syllabus:true,
  concept:'Read and discuss research, studies and science.',
  learn:['Summarise a study or an article','Use participles as adjectives','Present results and conclusions'],
  grammar:{ title:'Participial attributes — Partizip I/II as adjectives',
    plain:'"die in Berlin lebenden Menschen" (the people living in Berlin), "das gestern gelesene Buch" (the book read yesterday). Partizip I (lebend) = active, ongoing; Partizip II (gelesen) = passive, finished. The participle goes BEFORE the noun, with an adjective ending.' },
  vocab:[
    {de:'Forschung', art:'die', pl:'', en:'research', ph:'FOR-shung'},
    {de:'Wissenschaft', art:'die', pl:'', en:'science', ph:'VIS-sen-shahft'},
    {de:'Studie', art:'die', pl:'Studien', en:'study', ph:'SHTOO-dee-e'},
    {de:'Experiment', art:'das', pl:'Experimente', en:'experiment', ph:'ex-pe-ree-MENT'},
    {de:'These', art:'die', pl:'Thesen', en:'thesis', ph:'TAY-ze'},
    {de:'beweisen', art:'', pl:'', en:'to prove', ph:'beh-VAI-zen'},
    {de:'Erkenntnis', art:'die', pl:'Erkenntnisse', en:'finding, insight', ph:'air-KENT-nis'},
    {de:'veröffentlichen', art:'', pl:'', en:'to publish', ph:'fair-OEF-fent-li-khen'},
  ], next:'Next: Chapter 7 — Politics & Society (syllabus)' };

CHAPTERS['B2-7'] = { id:'B2-7', n:7, level:'B2', title:'Politics & Society', time:'10 min', syllabus:true,
  concept:'Discuss politics, democracy and social issues.',
  learn:['Talk about elections and laws','Give balanced arguments for and against','Use advanced connectors'],
  grammar:{ title:'Advanced connectors — obwohl, trotzdem, je…desto',
    plain:'"obwohl" (although): "Obwohl es regnet, gehen wir spazieren." "trotzdem" (nevertheless): "Es regnet, trotzdem gehen wir spazieren." "je … desto" (the … the …): "Je mehr man lernt, desto besser spricht man." (The more you learn, the better you speak.)' },
  vocab:[
    {de:'Politik', art:'die', pl:'', en:'politics', ph:'po-lee-TEEK'},
    {de:'Demokratie', art:'die', pl:'', en:'democracy', ph:'deh-mo-krah-TEE'},
    {de:'Wahl', art:'die', pl:'Wahlen', en:'election', ph:'vahl'},
    {de:'Bürger', art:'der', pl:'Bürger', en:'citizen', ph:'BUER-ger'},
    {de:'Gesetz', art:'das', pl:'Gesetze', en:'law', ph:'geh-ZETS'},
    {de:'Regierung', art:'die', pl:'Regierungen', en:'government', ph:'reh-GHEE-rung'},
    {de:'Partei', art:'die', pl:'Parteien', en:'party', ph:'pahr-TAI'},
    {de:'wählen', art:'', pl:'', en:'to vote, to elect', ph:'VAY-len'},
  ], next:'Next: Chapter 8 — Work & Economy (syllabus)' };

CHAPTERS['B2-8'] = { id:'B2-8', n:8, level:'B2', title:'Work & Economy', time:'10 min', syllabus:true,
  concept:'Talk about the economy, markets and wages.',
  learn:['Discuss the economy and unemployment','Talk about wages and taxes','Use subjective modal verbs'],
  grammar:{ title:'Subjective modal verbs — "Er soll reich sein"',
    plain:'Modal verbs can express rumour or assumption: "Er soll reich sein." (He is said to be rich.) "Er muss krank sein." (He must be ill — I conclude this.) "Er kann nicht zu Hause sein." (He cannot be at home.)' },
  vocab:[
    {de:'Wirtschaft', art:'die', pl:'', en:'economy', ph:'VIRT-shahft'},
    {de:'Markt', art:'der', pl:'Märkte', en:'market', ph:'mahrkt'},
    {de:'Inflation', art:'die', pl:'', en:'inflation', ph:'in-flah-TSEE-ohn'},
    {de:'Arbeitslosigkeit', art:'die', pl:'', en:'unemployment', ph:'AHR-baits-loh-zish-kait'},
    {de:'Lohn', art:'der', pl:'Löhne', en:'wage', ph:'lohn'},
    {de:'Steuer', art:'die', pl:'Steuern', en:'tax', ph:'SHTOY-er'},
    {de:'Handel', art:'der', pl:'', en:'trade', ph:'HAHN-del'},
    {de:'investieren', art:'', pl:'', en:'to invest', ph:'in-ves-TEE-ren'},
  ], next:'Next: Chapter 9 — Culture & Arts (syllabus)' };

CHAPTERS['B2-9'] = { id:'B2-9', n:9, level:'B2', title:'Culture & Arts', time:'10 min', syllabus:true,
  concept:'Talk about art, theatre, literature and exhibitions.',
  learn:['Describe a painting or a play','Give your opinion on art','Discuss literature and film'],
  grammar:{ title:'Adjective endings mastered + n-declension',
    plain:'Adjectives before nouns: "der neue Film", "ein neuer Film", "den neuen Film". And the n-declension: some masculine nouns add -n/-en in all cases except nominative: "der Patient, den Patienten, dem Patienten, des Patienten".' },
  vocab:[
    {de:'Kunst', art:'die', pl:'', en:'art', ph:'koonst'},
    {de:'Theater', art:'das', pl:'Theater', en:'theatre', ph:'tay-AH-ter'},
    {de:'Ausstellung', art:'die', pl:'Ausstellungen', en:'exhibition', ph:'OWS-shtel-lung'},
    {de:'Künstler', art:'der', pl:'Künstler', en:'artist', ph:'KUENST-ler'},
    {de:'Gemälde', art:'das', pl:'Gemälde', en:'painting', ph:'geh-MAYL-de'},
    {de:'Literatur', art:'die', pl:'', en:'literature', ph:'lee-te-rah-TOOR'},
    {de:'Roman', art:'der', pl:'Romane', en:'novel', ph:'ro-MAHN'},
    {de:'Aufführung', art:'die', pl:'Aufführungen', en:'performance', ph:'OWF-fue-rung'},
  ], next:'Next: Chapter 10 — Health & Medicine (syllabus)' };

CHAPTERS['B2-10'] = { id:'B2-10', n:10, level:'B2', title:'Health & Medicine', time:'10 min', syllabus:true,
  concept:'Medical German: diagnosis, therapy and treatment.',
  learn:['Talk about diagnoses and therapies','Use noun-verb collocations','Describe treatments precisely'],
  grammar:{ title:'Noun-verb collocations',
    plain:'Fixed pairs: "einen Antrag stellen" (to submit an application), "eine Entscheidung treffen" (to make a decision), "eine Frage stellen" (to ask a question), "in Kraft treten" (to come into force). Learn them as whole phrases — they are the building blocks of formal German.' },
  vocab:[
    {de:'Diagnose', art:'die', pl:'Diagnosen', en:'diagnosis', ph:'dee-ahg-NOH-ze'},
    {de:'Therapie', art:'die', pl:'Therapien', en:'therapy', ph:'teh-rah-PEE'},
    {de:'Operation', art:'die', pl:'Operationen', en:'surgery, operation', ph:'o-pe-rah-TSEE-ohn'},
    {de:'Eingriff', art:'der', pl:'Eingriffe', en:'procedure, intervention', ph:'INE-grif'},
    {de:'Heilung', art:'die', pl:'', en:'healing, recovery', ph:'HAI-lung'},
    {de:'Vorsorge', art:'die', pl:'', en:'prevention, precaution', ph:'FOR-zor-ge'},
    {de:'behandeln', art:'', pl:'', en:'to treat', ph:'beh-HAHN-deln'},
    {de:'Krankheit', art:'die', pl:'Krankheiten', en:'illness, disease', ph:'KRAHNK-hite'},
  ], next:'Next: Chapter 11 — Environment & Sustainability (syllabus)' };

CHAPTERS['B2-11'] = { id:'B2-11', n:11, level:'B2', title:'Environment & Sustainability', time:'10 min', syllabus:true,
  concept:'Discuss sustainability, energy and climate change.',
  learn:['Argue about sustainability','Talk about renewable energy','Use the passive in all tenses'],
  grammar:{ title:'Passive in all tenses',
    plain:'Present: "Die Energie wird gespart." Past: "Die Energie wurde gespart." Perfect: "Die Energie ist gespart worden." The passive works in every tense — the Partizip II stays at the end, "werden" changes.' },
  vocab:[
    {de:'Nachhaltigkeit', art:'die', pl:'', en:'sustainability', ph:'NAHKH-hahl-tish-kait'},
    {de:'Energie', art:'die', pl:'Energien', en:'energy', ph:'en-air-GHEE'},
    {de:'erneuerbar', art:'', pl:'', en:'renewable', ph:'air-NOY-er-bahr'},
    {de:'Klimawandel', art:'der', pl:'', en:'climate change', ph:'KLEE-mah-vahn-del'},
    {de:'Emission', art:'die', pl:'Emissionen', en:'emission', ph:'eh-mee-SEE-ohn'},
    {de:'CO2-Ausstoß', art:'der', pl:'', en:'CO2 emissions', ph:'tseh-oh-TSVAI-OWS-shtohss'},
    {de:'Ressource', art:'die', pl:'Ressourcen', en:'resource', ph:'reh-SOOR-se'},
    {de:'umweltfreundlich', art:'', pl:'', en:'environmentally friendly', ph:'OOM-velt-froynt-lish'},
  ], next:'Next: Chapter 12 — Review & B2 Mock (syllabus)' };

CHAPTERS['B2-12'] = { id:'B2-12', n:12, level:'B2', title:'Review & B2 Mock (Goethe/telc)', time:'12 min', syllabus:true,
  concept:'Review all of B2 and test yourself, Goethe/telc-style.',
  learn:['Review Konjunktiv I, passive, relative clauses and nominal style','Practise all B2 topics in one test','See your score per module — pass is 60% per module'],
  grammar:{ title:'B2 review — the four big steps',
    plain:'B2 gave you four big tools: (1) Konjunktiv I — "Er sagt, er sei ..." (2) Passive and its substitutes — "lässt sich lösen", "ist zu schaffen". (3) Relative clauses in all cases. (4) Nominal style — "die Behandlung des Patienten". The Goethe B2 exam has 4 modules, each 100 points, pass 60 per module. The telc B1·B2 Pflege exam is the nursing exam.' },
  vocab:[
    {de:'Zertifikat', art:'das', pl:'Zertifikate', en:'certificate', ph:'tsair-tee-fee-KAHT'},
    {de:'Vorbereitung', art:'die', pl:'Vorbereitungen', en:'preparation', ph:'FOR-bai-rai-tung'},
    {de:'Anmeldung', art:'die', pl:'Anmeldungen', en:'registration', ph:'AHN-mel-dung'},
    {de:'Gebühr', art:'die', pl:'Gebühren', en:'fee', ph:'geh-BUEHR'},
    {de:'Ergebnis', art:'das', pl:'Ergebnisse', en:'result', ph:'air-GAYP-nis'},
    {de:'bestehen', art:'', pl:'', en:'to pass (an exam)', ph:'beh-SHTAY-en'},
    {de:'Bewertung', art:'die', pl:'Bewertungen', en:'assessment', ph:'beh-VAIR-tung'},
    {de:'Prüfung', art:'die', pl:'Prüfungen', en:'exam', ph:'PRUE-fung'},
  ], next:'Next: C1 — Advanced (stretch goal)' };

/* ================= C1 ================= */

CHAPTERS['C1-1'] = {
  id:'C1-1', n:1, level:'C1', title:'Science & Research', time:'10 min',
  concept:'Formal German: nominal style and genitive chains.',
  dialogue:[
    {who:'A', de:'Die Behandlung des Patienten erfordert viel Erfahrung.', en:'The treatment of the patient requires a lot of experience.', ph:'dee beh-HAHNT-lung des pah-TSEE-en-ten air-FOR-dert feel air-FAH-rung'},
    {who:'B', de:'Ja, die Durchführung der Untersuchung dauert etwa eine Stunde.', en:'Yes, carrying out the examination takes about an hour.', ph:'yah, dee DOORKH-fue-rung dair oon-ter-ZOO-khung DOW-ert ET-vah AI-ne SHTOON-de'},
    {who:'A', de:'Die Ergebnisse der Studie zeigen eine deutliche Verbesserung.', en:'The results of the study show a clear improvement.', ph:'dee air-GAYP-nis-se dair SHTOO-dee-e TSAI-gen AI-ne DOYT-li-khe fair-BES-se-rung'},
    {who:'B', de:'Die Veröffentlichung der Erkenntnisse ist für nächsten Monat geplant.', en:'The publication of the findings is planned for next month.', ph:'dee fair-OEF-fent-li-khung dair air-KENT-nis-se ist fuer NEKHS-ten MOH-naht geh-PLAHNT'},
    {who:'A', de:'Die Bedeutung der Forschung ist unbestritten.', en:'The importance of the research is undisputed.', ph:'dee beh-DOY-tung dair FOR-shung ist oon-beh-SHTRIT-ten'},
    {who:'B', de:'Richtig. Ohne die Unterstützung der Kollegen wäre das nicht möglich.', en:'Right. Without the support of the colleagues, that would not be possible.', ph:'RIKH-tish. OH-ne dee oon-ter-SHTUET-tsung dair kol-LAY-gen VAY-re dahs nikht MERG-lish'},
  ],
  vocab:[
    {de:'Behandlung', art:'die', pl:'Behandlungen', en:'treatment', ph:'beh-HAHNT-lung'},
    {de:'Durchführung', art:'die', pl:'', en:'implementation, carrying out', ph:'DOORKH-fue-rung'},
    {de:'Untersuchung', art:'die', pl:'Untersuchungen', en:'examination', ph:'oon-ter-ZOO-khung'},
    {de:'Ergebnis', art:'das', pl:'Ergebnisse', en:'result', ph:'air-GAYP-nis'},
    {de:'Verbesserung', art:'die', pl:'Verbesserungen', en:'improvement', ph:'fair-BES-se-rung'},
    {de:'Veröffentlichung', art:'die', pl:'Veröffentlichungen', en:'publication', ph:'fair-OEF-fent-li-khung'},
    {de:'Erkenntnis', art:'die', pl:'Erkenntnisse', en:'finding, insight', ph:'air-KENT-nis'},
    {de:'Bedeutung', art:'die', pl:'', en:'importance, meaning', ph:'beh-DOY-tung'},
    {de:'Forschung', art:'die', pl:'', en:'research', ph:'FOR-shung'},
    {de:'Unterstützung', art:'die', pl:'', en:'support', ph:'oon-ter-SHTUET-tsung'},
    {de:'erfordern', art:'', pl:'', en:'to require', ph:'air-FOR-dern'},
    {de:'dauern', art:'', pl:'', en:'to last, to take (time)', ph:'DOW-ern'},
    {de:'zeigen', art:'', pl:'', en:'to show', ph:'TSAI-gen'},
    {de:'planen', art:'', pl:'', en:'to plan', ph:'PLAH-nen'},
    {de:'unbestritten', art:'', pl:'', en:'undisputed', ph:'oon-beh-SHTRIT-ten'},
    {de:'deutlich', art:'', pl:'', en:'clear, significant', ph:'DOYT-lish'},
  ],
  grammar:{
    title:'Nominal style — nouns instead of verbs',
    plain:'Formal and academic German prefers nouns: "die Behandlung des Patienten" (the treatment of the patient) instead of "den Patienten behandeln" (to treat the patient). Build nouns from verbs: behandeln → die Behandlung, entscheiden → die Entscheidung, untersuchen → die Untersuchung. Genitive chains link them: "die Ergebnisse der Studie".',
    rule:'die Behandlung des Patienten · die Durchführung der Untersuchung · die Veröffentlichung der Erkenntnisse · die Bedeutung der Forschung',
    examples:[
      {de:'Die Behandlung des Patienten dauert eine Stunde.', en:'The treatment of the patient takes an hour.', ph:'dee beh-HAHNT-lung des pah-TSEE-en-ten DOW-ert AI-ne SHTOON-de'},
      {de:'Die Veröffentlichung der Ergebnisse ist geplant.', en:'The publication of the results is planned.', ph:'dee fair-OEF-fent-li-khung dair air-GAYP-nis-se ist geh-PLAHNT'},
      {de:'Ohne die Unterstützung der Kollegen wäre das nicht möglich.', en:'Without the support of the colleagues, that would not be possible.', ph:'OH-ne dee oon-ter-SHTUET-tsung dair kol-LAY-gen VAY-re dahs nikht MERG-lish'},
    ],
  },
  quiz:[
    {q:'Fill in: "Die Behandlung ___ Patienten erfordert Erfahrung."', options:['der','des','dem','den'], answer:1,
     why:'Genitive masculine: "des Patienten". "Die Behandlung des Patienten" = the treatment of the patient.'},
    {q:'Nominal style uses...', options:['more verbs','nouns instead of verbs','shorter sentences','more adjectives'], answer:1,
     why:'Formal German prefers nouns: "die Behandlung" instead of "behandeln".'},
    {q:'Fill in: "Die Veröffentlichung ___ Erkenntnisse ist geplant."', options:['der','des','dem','den'], answer:0,
     why:'Genitive plural: "der Erkenntnisse". "Die Veröffentlichung der Erkenntnisse" = the publication of the findings.'},
    {q:'What does "erfordern" mean?', options:['to improve','to require','to support','to plan'], answer:1,
     why:'erfordern = to require. "Das erfordert viel Erfahrung" = That requires a lot of experience.'},
    {q:'"Ohne die Unterstützung ... wäre das nicht möglich." — "wäre" is...', options:['Präteritum of sein','Konjunktiv II of sein','Konjunktiv I of sein','Perfekt of sein'], answer:1,
     why:'"wäre" is Konjunktiv II of "sein". It talks about an unreal situation.'},
  ],
  speak:{ prompt:'Speak formally out loud: "Die Behandlung des Patienten erfordert viel Erfahrung. Die Ergebnisse der Studie zeigen eine deutliche Verbesserung."',
    model:['Die Behandlung des Patienten erfordert viel Erfahrung.', 'Die Durchführung der Untersuchung dauert etwa eine Stunde.', 'Die Bedeutung der Forschung ist unbestritten.'] },
  recap:[
    'Nominal style: nouns instead of verbs — die Behandlung, die Durchführung, die Veröffentlichung.',
    'Genitive chains: die Ergebnisse der Studie, die Bedeutung der Forschung.',
    'Verbs become nouns: behandeln → die Behandlung, entscheiden → die Entscheidung.',
    'This is the language of reports, studies and official documents.',
  ],
  tip:'Memory tip: when you write a report, turn your verbs into nouns. "Wir behandeln den Patienten" becomes "die Behandlung des Patienten" — instantly more formal.',
  extra:[
    {q:'Say "The treatment of the patient takes an hour."', a:'Die Behandlung des Patienten dauert eine Stunde.'},
    {q:'Say "The publication of the results is planned."', a:'Die Veröffentlichung der Ergebnisse ist geplant.'},
    {q:'What is the noun from "entscheiden"?', a:'die Entscheidung (the decision).'},
  ],
  next:'Next: Chapter 2 — Culture & Media',
};

CHAPTERS['C1-2'] = {
  id:'C1-2', n:2, level:'C1', title:'Culture & Media', time:'10 min',
  concept:'Idioms, register and nuanced connectors — sound like a native.',
  dialogue:[
    {who:'A', de:'Der neue Film ist in aller Munde. Hast du ihn schon gesehen?', en:'The new film is on everyone\'s lips. Have you seen it yet?', ph:'dair NOY-e film ist in AHL-ler MOON-de. hahst doo een shohn geh-ZAY-en'},
    {who:'B', de:'Ja, er hat mich umgehauen! Die Bilder sind atemberaubend.', en:'Yes, it blew me away! The images are breathtaking.', ph:'yah, air haht mish OOM-geh-how-en! dee BIL-der zint AH-tem-beh-ROW-bent'},
    {who:'A', de:'Meiner Meinung nach ist das der beste Film des Jahres.', en:'In my opinion, that is the best film of the year.', ph:'MAI-ner MAI-nung nahkh ist dahs dair BES-te film des YAH-res'},
    {who:'B', de:'Da bin ich ganz deiner Meinung. Allerdings ist das Ende etwas langatmig.', en:'I completely agree with you there. However, the ending is a bit long-winded.', ph:'dah bin ish gahnts DAI-ner MAI-nung. AH-ler-dings ist dahs EN-de ET-vahs LAHNG-aht-mish'},
    {who:'A', de:'Stimmt. Aber alles in allem ist der Film ein Meisterwerk.', en:'True. But all in all, the film is a masterpiece.', ph:'shtimt. AH-ber AHL-les in AHL-lem ist dair film ine MAI-ster-vairk'},
    {who:'B', de:'Auf jeden Fall. Man sollte ihn unbedingt sehen.', en:'Definitely. One should absolutely see it.', ph:'owf YAY-den fahl. mahn ZOL-te een oon-beh-DINGT ZAY-en'},
  ],
  vocab:[
    {de:'Redewendung', art:'die', pl:'Redewendungen', en:'idiom, saying', ph:'RAY-de-ven-dung'},
    {de:'umhauen', art:'', pl:'', en:'to blow away (figurative)', ph:'OOM-how-en'},
    {de:'atemberaubend', art:'', pl:'', en:'breathtaking', ph:'AH-tem-beh-ROW-bent'},
    {de:'langatmig', art:'', pl:'', en:'long-winded', ph:'LAHNG-aht-mish'},
    {de:'Meisterwerk', art:'das', pl:'Meisterwerke', en:'masterpiece', ph:'MAI-ster-vairk'},
    {de:'unbedingt', art:'', pl:'', en:'definitely, absolutely', ph:'oon-beh-DINGT'},
    {de:'allerdings', art:'', pl:'', en:'however, though', ph:'AH-ler-dings'},
    {de:'immerhin', art:'', pl:'', en:'at least, after all', ph:'IM-mer-hin'},
    {de:'schließlich', art:'', pl:'', en:'finally, after all', ph:'SHLEESS-lish'},
    {de:'im Großen und Ganzen', art:'', pl:'', en:'on the whole', ph:'im GROH-sen oont GAHN-tsen'},
    {de:'in aller Munde', art:'', pl:'', en:'on everyone\'s lips', ph:'in AHL-ler MOON-de'},
    {de:'Kritik', art:'die', pl:'Kritiken', en:'criticism, review', ph:'kree-TEEK'},
    {de:'Kritiker', art:'der', pl:'Kritiker', en:'critic', ph:'kree-TEE-ker'},
    {de:'Premiere', art:'die', pl:'Premieren', en:'premiere', ph:'preh-mee-AY-re'},
    {de:'Regisseur', art:'der', pl:'Regisseure', en:'director', ph:'reh-zhis-SOER'},
    {de:'Schauspielerin', art:'die', pl:'Schauspielerinnen', en:'actress', ph:'SHOW-shpee-le-rin'},
  ],
  grammar:{
    title:'Register & idioms — sounding natural',
    plain:'At C1, it is not only WHAT you say, but HOW you say it. "Meiner Meinung nach" (in my opinion), "allerdings" (however), "immerhin" (at least), "schließlich" (after all), "im Großen und Ganzen" (on the whole) — these small words make your German sound educated. Idioms like "in aller Munde sein" (to be on everyone\'s lips) and "jemanden umhauen" (to blow someone away) make it sound native.',
    rule:'Meiner Meinung nach ... · Allerdings ... · Immerhin ... · Schließlich ... · Im Großen und Ganzen ... · Alles in allem ...',
    examples:[
      {de:'Der Film ist in aller Munde.', en:'The film is on everyone\'s lips.', ph:'dair film ist in AHL-ler MOON-de'},
      {de:'Meiner Meinung nach ist das der beste Film des Jahres.', en:'In my opinion, that is the best film of the year.', ph:'MAI-ner MAI-nung nahkh ist dahs dair BES-te film des YAH-res'},
      {de:'Alles in allem ist der Film ein Meisterwerk.', en:'All in all, the film is a masterpiece.', ph:'AHL-les in AHL-lem ist dair film ine MAI-ster-vairk'},
    ],
  },
  quiz:[
    {q:'"Der Film ist in aller Munde" means...', options:['The film is silent','Everyone is talking about the film','The film is boring','The film is in the mouth'], answer:1,
     why:'"in aller Munde sein" is an idiom: to be on everyone\'s lips — everyone is talking about it.'},
    {q:'"Meiner Meinung nach" means...', options:['In my opinion','In my experience','In my country','In my view of the film'], answer:0,
     why:'"Meiner Meinung nach" = In my opinion. Use it to start an argument.'},
    {q:'"Er hat mich umgehauen" means...', options:['He hit me','It blew me away','He hugged me','It bored me'], answer:1,
     why:'"umhauen" literally means "to knock over" — figuratively: to blow someone away, to amaze.'},
    {q:'"Allerdings" means...', options:['definitely','however, though','at least','finally'], answer:1,
     why:'"allerdings" = however / though. It softens a disagreement: "Allerdings ist das Ende etwas langatmig."'},
    {q:'What is "das Meisterwerk"?', options:['the premiere','the masterpiece','the critic','the director'], answer:1,
     why:'das Meisterwerk = the masterpiece. der Regisseur = the director, der Kritiker = the critic.'},
  ],
  speak:{ prompt:'Give your opinion out loud: "Meiner Meinung nach ist das der beste Film des Jahres. Allerdings ist das Ende etwas langatmig."',
    model:['Der neue Film ist in aller Munde.', 'Er hat mich umgehauen!', 'Meiner Meinung nach ist das der beste Film des Jahres.', 'Alles in allem ist der Film ein Meisterwerk.'] },
  recap:[
    'Opinion phrases: Meiner Meinung nach, meiner Ansicht nach, alles in allem.',
    'Softeners: allerdings, immerhin, schließlich, im Großen und Ganzen.',
    'Idioms: in aller Munde sein, jemanden umhauen, atemberaubend.',
    'C1 German is about HOW you say it — register matters as much as grammar.',
  ],
  tip:'Memory tip: collect one idiom per day. "In aller Munde", "umhauen", "atemberaubend" — use each one in a real sentence today.',
  extra:[
    {q:'Say "In my opinion, that is the best film of the year."', a:'Meiner Meinung nach ist das der beste Film des Jahres.'},
    {q:'Say "All in all, the film is a masterpiece."', a:'Alles in allem ist der Film ein Meisterwerk.'},
    {q:'What does "unbedingt" mean?', a:'Definitely, absolutely. "Man sollte ihn unbedingt sehen."'},
  ],
  next:'Next: Chapter 3 — Society in Change',
};

CHAPTERS['C1-3'] = {
  id:'C1-3', n:3, level:'C1', title:'Society in Change', time:'10 min',
  concept:'Complex sentences: participles as adjectives.',
  dialogue:[
    {who:'A', de:'Die in den letzten Jahren stark gestiegene Lebenserwartung stellt die Gesellschaft vor neue Herausforderungen.', en:'Life expectancy, which has risen sharply in recent years, presents society with new challenges.', ph:'dee in dayn LETS-ten YAH-ren shtahrk geh-SHTEE-ge-ne LAY-bens-air-vahr-tung shtelt dee geh-ZEL-shahft for NOY-e hair-OWS-for-de-roong-en'},
    {who:'B', de:'Stimmt. Die Zahl der in Pflegeheimen lebenden Menschen wächst ständig.', en:'True. The number of people living in care homes is constantly growing.', ph:'shtimt. dee tsahl dair in PFLAY-geh-hai-men LAY-ben-den MEN-shen VEKST SHTEN-dish'},
    {who:'A', de:'Die von der Regierung geplanten Reformen sollen die Situation verbessern.', en:'The reforms planned by the government are supposed to improve the situation.', ph:'dee fon dair reh-GHEE-rung geh-PLAHN-ten reh-FOR-men ZOL-len dee zee-too-ah-TSEE-ohn fair-BES-sern'},
    {who:'B', de:'Ob die Reformen ausreichen, ist umstritten. Viele Experten sind skeptisch.', en:'Whether the reforms are enough is disputed. Many experts are sceptical.', ph:'op dee reh-FOR-men OWS-rai-khen, ist oom-SHTRIT-ten. FEE-le ex-PAIR-ten zint SKEP-tish'},
    {who:'A', de:'Meiner Ansicht nach muss mehr in die Ausbildung investiert werden.', en:'In my view, more must be invested in training.', ph:'MAI-ner AHN-zikht nahkh mooss mair in dee OWS-bil-dung in-ves-TEERT VAIR-den'},
    {who:'B', de:'Da stimme ich dir zu. Die gut ausgebildeten Pflegekräfte sind die Zukunft.', en:'I agree with you there. Well-trained care workers are the future.', ph:'dah SHTIM-me ish deer tsoo. dee goot OWS-geh-bil-de-ten PFLAY-geh-kref-te zint dee TSOO-koonft'},
  ],
  vocab:[
    {de:'Lebenserwartung', art:'die', pl:'', en:'life expectancy', ph:'LAY-bens-air-vahr-tung'},
    {de:'Herausforderung', art:'die', pl:'Herausforderungen', en:'challenge', ph:'hair-OWS-for-de-rung'},
    {de:'Gesellschaft', art:'die', pl:'', en:'society', ph:'geh-ZEL-shahft'},
    {de:'Reform', art:'die', pl:'Reformen', en:'reform', ph:'reh-FORM'},
    {de:'umstritten', art:'', pl:'', en:'controversial, disputed', ph:'oom-SHTRIT-ten'},
    {de:'skeptisch', art:'', pl:'', en:'sceptical', ph:'SKEP-tish'},
    {de:'Ansicht', art:'die', pl:'Ansichten', en:'view, opinion', ph:'AHN-zikht'},
    {de:'investieren', art:'', pl:'', en:'to invest', ph:'in-ves-TEE-ren'},
    {de:'Ausbildung', art:'die', pl:'Ausbildungen', en:'training, apprenticeship', ph:'OWS-bil-dung'},
    {de:'Pflegekraft', art:'die', pl:'Pflegekräfte', en:'care worker', ph:'PFLAY-geh-krahft'},
    {de:'ständig', art:'', pl:'', en:'constantly', ph:'SHTEN-dish'},
    {de:'steigen', art:'', pl:'', en:'to rise', ph:'SHTAI-gen'},
    {de:'wachsen', art:'', pl:'', en:'to grow', ph:'VAHKH-sen'},
    {de:'Zahl', art:'die', pl:'Zahlen', en:'number', ph:'tsahl'},
    {de:'Pflegeheim', art:'das', pl:'Pflegeheime', en:'care home', ph:'PFLAY-geh-hime'},
  ],
  grammar:{
    title:'Participial attributes — adjectives from verbs',
    plain:'You can turn a whole relative clause into one word before the noun. "Die Menschen, die in Pflegeheimen leben" becomes "die in Pflegeheimen lebenden Menschen". Partizip I (lebend) = active, ongoing. Partizip II (gelesen, geplant) = passive, finished. The participle goes BEFORE the noun with an adjective ending.',
    rule:'Partizip I: die in Berlin lebenden Menschen (the people living in Berlin) · Partizip II: das gestern gelesene Buch (the book read yesterday) · die von der Regierung geplanten Reformen (the reforms planned by the government)',
    examples:[
      {de:'Die in Pflegeheimen lebenden Menschen brauchen gute Pflege.', en:'The people living in care homes need good care.', ph:'dee in PFLAY-geh-hai-men LAY-ben-den MEN-shen BROW-khen GOO-te PFLAY-ge'},
      {de:'Die von der Regierung geplanten Reformen sollen helfen.', en:'The reforms planned by the government are supposed to help.', ph:'dee fon dair reh-GHEE-rung geh-PLAHN-ten reh-FOR-men ZOL-len HEL-fen'},
      {de:'Die gut ausgebildeten Pflegekräfte sind die Zukunft.', en:'Well-trained care workers are the future.', ph:'dee goot OWS-geh-bil-de-ten PFLAY-geh-kref-te zint dee TSOO-koonft'},
    ],
  },
  quiz:[
    {q:'Fill in: "die in Berlin ___ Menschen"', options:['lebend','lebenden','lebte','gelebt'], answer:1,
     why:'Partizip I with an adjective ending: "die in Berlin lebenden Menschen" (the people living in Berlin).'},
    {q:'Fill in: "das gestern ___ Buch"', options:['lesend','gelesene','gelesen','lesende'], answer:1,
     why:'Partizip II with an adjective ending: "das gestern gelesene Buch" (the book read yesterday).'},
    {q:'Partizip I is...', options:['passive, finished','active, ongoing','past tense','future tense'], answer:1,
     why:'Partizip I (lebend, wachsend) = active and ongoing. Partizip II (gelesen, geplant) = passive and finished.'},
    {q:'Partizip II is...', options:['active, ongoing','passive, finished','present tense','imperative'], answer:1,
     why:'Partizip II (gelesen, geplant, ausgebildet) = passive and finished.'},
    {q:'"Die Lebenserwartung stellt die Gesellschaft vor Herausforderungen" means...', options:['Life expectancy is a challenge','Life expectancy presents society with new challenges','Society expects a long life','The challenge is life expectancy'], answer:1,
     why:'"jemanden vor Herausforderungen stellen" = to present someone with challenges.'},
  ],
  speak:{ prompt:'Argue out loud: "Meiner Ansicht nach muss mehr in die Ausbildung investiert werden. Die gut ausgebildeten Pflegekräfte sind die Zukunft."',
    model:['Die in den letzten Jahren stark gestiegene Lebenserwartung stellt die Gesellschaft vor neue Herausforderungen.', 'Meiner Ansicht nach muss mehr in die Ausbildung investiert werden.'] },
  recap:[
    'Partizip I = active, ongoing: die lebenden Menschen.',
    'Partizip II = passive, finished: das gelesene Buch, die geplanten Reformen.',
    'The participle goes BEFORE the noun, with an adjective ending.',
    'This is C1: long, precise sentences that pack a whole clause into one phrase.',
  ],
  tip:'Memory tip: read one German news article per day and underline every participle before a noun — "die geplanten Reformen", "die steigenden Zahlen". You will see them everywhere.',
  extra:[
    {q:'Say "The people living in care homes need good care."', a:'Die in Pflegeheimen lebenden Menschen brauchen gute Pflege.'},
    {q:'Say "Well-trained care workers are the future."', a:'Die gut ausgebildeten Pflegekräfte sind die Zukunft.'},
    {q:'What does "umstritten" mean?', a:'Controversial, disputed. "Ob die Reformen ausreichen, ist umstritten."'},
  ],
  next:'Next: Chapter 4 — Work & Globalisation (syllabus)',
};

/* ---- C1 syllabus chapters 4–12 ---- */
CHAPTERS['C1-4'] = { id:'C1-4', n:4, level:'C1', title:'Work & Globalisation', time:'10 min', syllabus:true,
  concept:'Discuss globalisation, competition and the skills shortage.',
  learn:['Discuss globalisation and its effects','Use Konjunktiv I in journalism','Argue about skilled workers'],
  grammar:{ title:'Konjunktiv I — full (journalistic reported speech)',
    plain:'In news and reports: "Die Ministerin sagt, die Zahl der Fachkräfte steige." (The minister says the number of skilled workers is rising.) Konjunktiv I forms: sei, habe, werde, könne, müsse, solle — and "man sage", "es heiße".' },
  vocab:[
    {de:'Globalisierung', art:'die', pl:'', en:'globalisation', ph:'glo-bah-lee-ZEE-rung'},
    {de:'Wettbewerb', art:'der', pl:'', en:'competition', ph:'VET-be-vairp'},
    {de:'Digitalisierung', art:'die', pl:'', en:'digitalisation', ph:'dee-gee-tah-lee-ZEE-rung'},
    {de:'Standort', art:'der', pl:'Standorte', en:'location, site', ph:'SHTAHNT-ort'},
    {de:'Fachkraft', art:'die', pl:'Fachkräfte', en:'skilled worker', ph:'FAHKH-krahft'},
    {de:'Fachkräftemangel', art:'der', pl:'', en:'skills shortage', ph:'FAHKH-kref-te-mahng-el'},
    {de:'auslagern', art:'', pl:'', en:'to outsource', ph:'OWS-lah-gern'},
    {de:'Konzern', art:'der', pl:'Konzerne', en:'corporation', ph:'kon-TSERN'},
  ], next:'Next: Chapter 5 — Environment & Climate Policy (syllabus)' };

CHAPTERS['C1-5'] = { id:'C1-5', n:5, level:'C1', title:'Environment & Climate Policy', time:'10 min', syllabus:true,
  concept:'Discuss climate policy, agreements and the energy transition.',
  learn:['Discuss climate agreements','Use complex nominal phrases','Argue about energy policy'],
  grammar:{ title:'Complex nominal phrases + genitive chains',
    plain:'"die Folgen des Klimawandels für die Landwirtschaft" (the consequences of climate change for agriculture). Chain genitives: "die Ziele der Politik der Bundesregierung". Keep the chain short — two genitives are enough.' },
  vocab:[
    {de:'Klimapolitik', art:'die', pl:'', en:'climate policy', ph:'KLEE-mah-po-lee-teek'},
    {de:'Abkommen', art:'das', pl:'Abkommen', en:'agreement', ph:'AHP-kom-men'},
    {de:'Emission', art:'die', pl:'Emissionen', en:'emission', ph:'eh-mee-SEE-ohn'},
    {de:'Energiewende', art:'die', pl:'', en:'energy transition', ph:'en-air-GHEE-ven-de'},
    {de:'Ausstieg', art:'der', pl:'', en:'phase-out, exit', ph:'OWS-shteek'},
    {de:'Subvention', art:'die', pl:'Subventionen', en:'subsidy', ph:'zoop-ven-TSEE-ohn'},
    {de:'nachhaltig', art:'', pl:'', en:'sustainable', ph:'NAHKH-hahl-tish'},
    {de:'CO2-Steuer', art:'die', pl:'CO2-Steuern', en:'CO2 tax', ph:'tseh-oh-TSVAI-SHTOY-er'},
  ], next:'Next: Chapter 6 — Education & Digital Learning (syllabus)' };

CHAPTERS['C1-6'] = { id:'C1-6', n:6, level:'C1', title:'Education & Digital Learning', time:'10 min', syllabus:true,
  concept:'Talk about education, lifelong learning and digital platforms.',
  learn:['Discuss education systems','Practise mediation: explain a text simply','Talk about online learning'],
  grammar:{ title:'Mediation — explaining in plain language',
    plain:'Mediation means carrying meaning across: "Könnten Sie das bitte einfacher erklären?" (Could you explain that more simply, please?) Summarise a German text for an English-speaking colleague. This is a C1 skill — and exactly what a nurse does every day with patients.' },
  vocab:[
    {de:'Bildung', art:'die', pl:'', en:'education', ph:'BIL-dung'},
    {de:'Weiterbildung', art:'die', pl:'', en:'further training', ph:'VAI-ter-bil-dung'},
    {de:'Fernstudium', art:'das', pl:'Fernstudien', en:'distance learning', ph:'FAIRN-shtoo-dee-um'},
    {de:'Kompetenz', art:'die', pl:'Kompetenzen', en:'competence', ph:'kom-pe-TENTS'},
    {de:'Lernplattform', art:'die', pl:'Lernplattformen', en:'learning platform', ph:'LERN-plaht-form'},
    {de:'Abschluss', art:'der', pl:'Abschlüsse', en:'qualification, degree', ph:'AHP-shlooss'},
    {de:'Zertifikat', art:'das', pl:'Zertifikate', en:'certificate', ph:'tsair-tee-fee-KAHT'},
    {de:'lebenslang', art:'', pl:'', en:'lifelong', ph:'LAY-bens-lahng'},
  ], next:'Next: Chapter 7 — Health & Medical Ethics (syllabus)' };

CHAPTERS['C1-7'] = { id:'C1-7', n:7, level:'C1', title:'Health & Medical Ethics', time:'10 min', syllabus:true,
  concept:'Discuss medical ethics: consent, dignity and difficult decisions.',
  learn:['Discuss ethical dilemmas','Structure an argument: thesis → argument → counter-argument → conclusion','Use formal ethical vocabulary'],
  grammar:{ title:'Argumentation structure',
    plain:'A C1 argument has 4 parts: (1) Thesis: "Ich bin der Meinung, dass ..." (2) Argument: "Dafür spricht, dass ..." (3) Counter-argument: "Allerdings muss man bedenken, dass ..." (4) Conclusion: "Alles in allem ..." Practise this skeleton with every topic.' },
  vocab:[
    {de:'Ethik', art:'die', pl:'', en:'ethics', ph:'AY-tik'},
    {de:'Sterbehilfe', art:'die', pl:'', en:'assisted dying', ph:'SHTAIR-be-hil-fe'},
    {de:'Organspende', art:'die', pl:'Organspenden', en:'organ donation', ph:'or-GAHN-shpen-de'},
    {de:'Patientenverfügung', art:'die', pl:'Patientenverfügungen', en:'living will', ph:'pah-TSEE-en-ten-fair-fue-gung'},
    {de:'Einwilligung', art:'die', pl:'Einwilligungen', en:'consent', ph:'INE-vil-lee-gung'},
    {de:'Würde', art:'die', pl:'', en:'dignity', ph:'VUIR-de'},
    {de:'Dilemma', art:'das', pl:'Dilemmata', en:'dilemma', ph:'dee-LEM-mah'},
    {de:'Eingriff', art:'der', pl:'Eingriffe', en:'procedure, intervention', ph:'INE-grif'},
  ], next:'Next: Chapter 8 — Media & Public Opinion (syllabus)' };

CHAPTERS['C1-8'] = { id:'C1-8', n:8, level:'C1', title:'Media & Public Opinion', time:'10 min', syllabus:true,
  concept:'Describe charts and discuss public opinion.',
  learn:['Describe a chart or a graph','Discuss surveys and majorities','Use precise numbers language'],
  grammar:{ title:'Describing charts',
    plain:'"Die Grafik zeigt ..." (The chart shows ...) "Der Anteil steigt von 20 Prozent auf 35 Prozent." (The share rises from 20% to 35%.) "Die Mehrheit der Befragten ist der Meinung, dass ..." (The majority of respondents think that ...)' },
  vocab:[
    {de:'Grafik', art:'die', pl:'Grafiken', en:'chart, graph', ph:'GRAH-fik'},
    {de:'Statistik', art:'die', pl:'Statistiken', en:'statistics', ph:'shtah-tees-TEEK'},
    {de:'Anteil', art:'der', pl:'Anteile', en:'share', ph:'AHN-tile'},
    {de:'steigen', art:'', pl:'', en:'to rise', ph:'SHTAI-gen'},
    {de:'sinken', art:'', pl:'', en:'to fall, to sink', ph:'ZING-ken'},
    {de:'Umfrage', art:'die', pl:'Umfragen', en:'survey', ph:'OOM-frah-ge'},
    {de:'Mehrheit', art:'die', pl:'Mehrheiten', en:'majority', ph:'MAIR-hite'},
    {de:'Minderheit', art:'die', pl:'Minderheiten', en:'minority', ph:'MIN-der-hite'},
  ], next:'Next: Chapter 9 — Migration & Integration (syllabus)' };

CHAPTERS['C1-9'] = { id:'C1-9', n:9, level:'C1', title:'Migration & Integration', time:'10 min', syllabus:true,
  concept:'Discuss migration, integration and diversity.',
  learn:['Discuss migration and integration','Use nuanced connectors','Argue with balance and precision'],
  grammar:{ title:'Nuanced connectors — insofern, wenngleich, obgleich',
    plain:'"insofern" (insofar as), "insoweit" (to the extent that), "wenngleich" (although), "obgleich" (although, formal). "Wenngleich die Integration Fortschritte macht, bleibt viel zu tun." (Although integration is making progress, much remains to be done.)' },
  vocab:[
    {de:'Migration', art:'die', pl:'', en:'migration', ph:'mee-grah-TSEE-ohn'},
    {de:'Integration', art:'die', pl:'', en:'integration', ph:'in-teh-grah-TSEE-ohn'},
    {de:'Flüchtling', art:'der', pl:'Flüchtlinge', en:'refugee', ph:'FLUEKHT-ling'},
    {de:'Einwanderung', art:'die', pl:'', en:'immigration', ph:'INE-vahn-de-rung'},
    {de:'Auswanderung', art:'die', pl:'', en:'emigration', ph:'OWS-vahn-de-rung'},
    {de:'Staatsangehörigkeit', art:'die', pl:'Staatsangehörigkeiten', en:'citizenship', ph:'SHTAHTS-ahn-geh-her-ish-kait'},
    {de:'Vielfalt', art:'die', pl:'', en:'diversity', ph:'FEEL-fahlt'},
    {de:'Teilhabe', art:'die', pl:'', en:'participation', ph:'TILE-hah-be'},
  ], next:'Next: Chapter 10 — Science & Technology (syllabus)' };

CHAPTERS['C1-10'] = { id:'C1-10', n:10, level:'C1', title:'Science & Technology', time:'10 min', syllabus:true,
  concept:'Talk about inventions, AI and the future of technology.',
  learn:['Discuss inventions and discoveries','Use word formation (prefixes and suffixes)','Argue about AI and robots'],
  grammar:{ title:'Word formation — prefixes and suffixes',
    plain:'German builds words: ver- (verbessern = to improve), be- (behandeln = to treat), -ung (die Behandlung), -keit (die Möglichkeit), -lich (freundlich), un- (unmöglich = impossible). Learn the building blocks and you can decode thousands of words.' },
  vocab:[
    {de:'Erfindung', art:'die', pl:'Erfindungen', en:'invention', ph:'air-FIN-dung'},
    {de:'Entdeckung', art:'die', pl:'Entdeckungen', en:'discovery', ph:'ent-DEK-kung'},
    {de:'Entwicklung', art:'die', pl:'Entwicklungen', en:'development', ph:'ent-VIK-lung'},
    {de:'Fortschritt', art:'der', pl:'Fortschritte', en:'progress', ph:'FORT-shrit'},
    {de:'Innovation', art:'die', pl:'Innovationen', en:'innovation', ph:'in-no-vah-TSEE-ohn'},
    {de:'Künstliche Intelligenz', art:'die', pl:'', en:'artificial intelligence', ph:'KUENST-li-khe in-tel-lee-GENTS'},
    {de:'Roboter', art:'der', pl:'Roboter', en:'robot', ph:'ro-BOH-ter'},
    {de:'Automatisierung', art:'die', pl:'', en:'automation', ph:'ow-to-mah-tee-ZEE-rung'},
  ], next:'Next: Chapter 11 — Literature & Philosophy (syllabus)' };

CHAPTERS['C1-11'] = { id:'C1-11', n:11, level:'C1', title:'Literature & Philosophy', time:'10 min', syllabus:true,
  concept:'Read literature, discuss philosophy and use literary German.',
  learn:['Discuss a book or an author','Interpret a text','Use literary and philosophical language'],
  grammar:{ title:'Stylistic variation — register control',
    plain:'C1 means choosing the right register: formal ("Es sei denn, ..."), literary ("geschweige denn" = let alone), academic ("insofern als ..."). "Es sei denn, es regnet." (Unless it rains.) "Geschweige denn ein ganzes Buch." (Let alone a whole book.)' },
  vocab:[
    {de:'Philosophie', art:'die', pl:'', en:'philosophy', ph:'fee-lo-zoh-FEE'},
    {de:'Autor', art:'der', pl:'Autoren', en:'author', ph:'OW-tor'},
    {de:'Werk', art:'das', pl:'Werke', en:'work (of art/literature)', ph:'vairk'},
    {de:'Interpretation', art:'die', pl:'Interpretationen', en:'interpretation', ph:'in-tair-preh-tah-TSEE-ohn'},
    {de:'Metapher', art:'die', pl:'Metaphern', en:'metaphor', ph:'meh-TAH-fer'},
    {de:'Ironie', art:'die', pl:'', en:'irony', ph:'ee-roh-NEE'},
    {de:'Zitat', art:'das', pl:'Zitate', en:'quotation', ph:'tsee-TAHT'},
    {de:'Literatur', art:'die', pl:'', en:'literature', ph:'lee-te-rah-TOOR'},
  ], next:'Next: Chapter 12 — Review & C1 Mock (syllabus)' };

CHAPTERS['C1-12'] = { id:'C1-12', n:12, level:'C1', title:'Review & C1 Mock (Goethe)', time:'12 min', syllabus:true,
  concept:'Review all of C1 and test yourself, Goethe-style.',
  learn:['Review Konjunktiv I, nominal style, participles and register','Practise all C1 topics in one test','See your score per module — pass is 60% per module'],
  grammar:{ title:'C1 review — the four big steps',
    plain:'C1 gave you four big tools: (1) Konjunktiv I in full — journalistic reported speech. (2) Nominal style — "die Behandlung des Patienten". (3) Participial attributes — "die geplanten Reformen". (4) Register control — formal, academic, literary. The Goethe C1 exam has 4 modules, each 100 points, pass 60 per module.' },
  vocab:[
    {de:'Prüfung', art:'die', pl:'Prüfungen', en:'exam', ph:'PRUE-fung'},
    {de:'Zertifikat', art:'das', pl:'Zertifikate', en:'certificate', ph:'tsair-tee-fee-KAHT'},
    {de:'Vorbereitung', art:'die', pl:'Vorbereitungen', en:'preparation', ph:'FOR-bai-rai-tung'},
    {de:'Anmeldung', art:'die', pl:'Anmeldungen', en:'registration', ph:'AHN-mel-dung'},
    {de:'Ergebnis', art:'das', pl:'Ergebnisse', en:'result', ph:'air-GAYP-nis'},
    {de:'bestehen', art:'', pl:'', en:'to pass (an exam)', ph:'beh-SHTAY-en'},
    {de:'Bewertung', art:'die', pl:'Bewertungen', en:'assessment', ph:'beh-VAIR-tung'},
    {de:'Herausforderung', art:'die', pl:'Herausforderungen', en:'challenge', ph:'hair-OWS-for-de-rung'},
  ], next:'Next: You did it — C1 complete!' };

/* ---- Level revision cards (each level starts with a quick revision) ---- */
const REVISION = {
  A1: { title:'Start from zero', sub:'No German yet? Perfect. Start here.',
    points:['German letters sound almost as they are written. Only a few are different: J = Y, V = F, W = V, Z = TS.',
      'Every noun starts with a capital letter: der Mann, das Wasser.',
      'Numbers 0–20 and 10 greetings cover your first real conversations.',
      'Rule: always speak German OUT LOUD. Reading silently does not train your mouth.'] },
  A2: { title:'A1 in 60 seconds', sub:'Quick revision before you start A2.',
    points:['sein: ich bin, du bist, er ist, wir sind, ihr seid, sie sind.',
      'Present tense: stem + -e, -st, -t, -en, -t, -en. Verb in 2nd place.',
      'Articles: der, die, das. Learn every noun WITH its article.',
      'Accusative: only masculine changes — der → den, ein → einen.',
      'Modal verbs: können, wollen, müssen, sollen, dürfen. Main verb goes to the end.'] },
  B1: { title:'A2 in 60 seconds', sub:'Quick revision before you start B1.',
    points:['Perfekt: haben + Partizip II — "Ich habe gelernt." (Verbs of movement use sein.)',
      'Dative: mir, dir, ihm, ihr, uns, euch, ihnen. "Mir schmeckt die Suppe."',
      'Past of sein/haben: ich war, du warst, ich hatte, du hattest.',
      'Separable verbs split: aufstehen → Ich stehe ... auf.'] },
  B2: { title:'B1 in 60 seconds', sub:'Quick revision before you start B2.',
    points:['weil/dass: the verb goes to the END of the subordinate clause.',
      'Konjunktiv II (polite): Ich hätte gern ..., Könnten Sie ...?, Ich würde gern ...',
      'Passive: werden + Partizip II — "Der Film wird gezeigt."',
      'Genitive: das Auto meines Vaters. Adjectives before nouns change their ending.'] },
  C1: { title:'B2 in 60 seconds', sub:'Quick revision before you start C1.',
    points:['Konjunktiv I (reported speech): "Er sagt, er sei zufrieden."',
      'Passive substitutes: "Das lässt sich lösen." / "Das ist zu schaffen."',
      'Relative clauses in all cases: der/den/dem/dessen, die/die/der/deren.',
      'Nominal style: "die Behandlung des Patienten" instead of "den Patienten behandeln".'] },
};

/* ---- Nursing (Pflege) section ---- */
const NURSING = {
  intro:'German for nurses. B1 is the entry level for the Ausbildung visa. B2 is required for the nursing licence in every federal state. The exam that matters most is telc Deutsch B1·B2 Pflege (one exam, B1-or-B2 result) or the state Fachsprachprüfung (FSP) B2 Pflege.',
  words:[
    {de:'Krankenhaus', art:'das', pl:'Krankenhäuser', en:'hospital', ph:'KRAHN-ken-hows'},
    {de:'Pflege', art:'die', pl:'', en:'care, nursing', ph:'PFLAY-ge'},
    {de:'Pfleger', art:'der', pl:'Pfleger', en:'nurse (male)', ph:'PFLAY-ger'},
    {de:'Pflegerin', art:'die', pl:'Pflegerinnen', en:'nurse (female)', ph:'PFLAY-ge-rin'},
    {de:'Patient', art:'der', pl:'Patienten', en:'patient (male)', ph:'pah-TSEE-ent'},
    {de:'Patientin', art:'die', pl:'Patientinnen', en:'patient (female)', ph:'pah-TSEE-en-tin'},
    {de:'Arzt', art:'der', pl:'Ärzte', en:'doctor (male)', ph:'ahrtst'},
    {de:'Ärztin', art:'die', pl:'Ärztinnen', en:'doctor (female)', ph:'ERTS-tin'},
    {de:'Bett', art:'das', pl:'Betten', en:'bed', ph:'bet'},
    {de:'Schmerz', art:'der', pl:'Schmerzen', en:'pain', ph:'shmairts'},
    {de:'Gesundheit', art:'die', pl:'', en:'health', ph:'geh-ZOONT-hite'},
    {de:'Medizin', art:'die', pl:'', en:'medicine', ph:'me-dee-TSEEN'},
    {de:'Tablette', art:'die', pl:'Tabletten', en:'tablet', ph:'tah-BLET-te'},
    {de:'Spritze', art:'die', pl:'Spritzen', en:'injection', ph:'SHPRIT-se'},
    {de:'Verband', art:'der', pl:'Verbände', en:'bandage', ph:'fair-BAHNT'},
    {de:'Fieber', art:'das', pl:'', en:'fever', ph:'FEE-ber'},
    {de:'Blutdruck', art:'der', pl:'', en:'blood pressure', ph:'BLOOT-drook'},
    {de:'Puls', art:'der', pl:'', en:'pulse', ph:'pools'},
    {de:'Temperatur', art:'die', pl:'Temperaturen', en:'temperature', ph:'tem-pe-rah-TOOR'},
    {de:'Rollstuhl', art:'der', pl:'Rollstühle', en:'wheelchair', ph:'ROL-shtool'},
    {de:'Station', art:'die', pl:'Stationen', en:'ward', ph:'shtah-TSEE-ohn'},
    {de:'Schicht', art:'die', pl:'Schichten', en:'shift', ph:'shikht'},
    {de:'Übergabe', art:'die', pl:'Übergaben', en:'handover', ph:'ue-ber-GAH-be'},
    {de:'Dokumentation', art:'die', pl:'', en:'documentation', ph:'do-koo-men-tah-TSEE-ohn'},
    {de:'Dienst', art:'der', pl:'Dienste', en:'shift, duty', ph:'deenst'},
    {de:'Wunde', art:'die', pl:'Wunden', en:'wound', ph:'VOON-de'},
  ],
  phrases:[
    {de:'Wie geht es Ihnen?', en:'How are you? (formal)', ph:'vee GAYT es EE-nen'},
    {de:'Haben Sie Schmerzen?', en:'Do you have pain?', ph:'HAH-ben zee SHMAIR-tsen'},
    {de:'Wo tut es weh?', en:'Where does it hurt?', ph:'voh toot es vay'},
    {de:'Ich helfe Ihnen gern.', en:'I am happy to help you.', ph:'ish HEL-fe EE-nen gairn'},
    {de:'Bitte trinken Sie viel Wasser.', en:'Please drink a lot of water.', ph:'BIT-te TRING-ken zee feel VAH-ser'},
    {de:'Ich messe jetzt Ihren Blutdruck.', en:'I will measure your blood pressure now.', ph:'ish MES-se yetst EE-ren BLOOT-drook'},
    {de:'Es tut mir leid.', en:'I am sorry.', ph:'es toot meer lite'},
    {de:'Keine Sorge.', en:'Do not worry.', ph:'KAI-ne ZOR-ge'},
    {de:'Rufen Sie mich bitte, wenn Sie etwas brauchen.', en:'Please call me if you need anything.', ph:'ROO-fen zee mish BIT-te, ven zee ET-vahs BROW-khen'},
    {de:'Gute Besserung!', en:'Get well soon!', ph:'GOO-te BES-se-rung'},
    {de:'Ich bin Ihre Pflegekraft.', en:'I am your nurse.', ph:'ish bin EE-re PFLAY-geh-krahft'},
    {de:'Das Essen kommt gleich.', en:'The food is coming soon.', ph:'dahs ES-sen komt glaish'},
    {de:'Bitte bleiben Sie im Bett.', en:'Please stay in bed.', ph:'BIT-te BLAI-ben zee im bet'},
    {de:'Ich komme gleich zurück.', en:'I will be right back.', ph:'ish KOM-me glaish tsoo-RUEK'},
  ],
  dialogue:[
    {who:'A', de:'Guten Morgen, Herr Weber! Wie geht es Ihnen heute?', en:'Good morning, Mr Weber! How are you today?', ph:'GOO-ten MOR-gen, hair VAY-ber! vee GAYT es EE-nen HOY-te'},
    {who:'B', de:'Guten Morgen! Es geht mir besser, danke.', en:'Good morning! I am feeling better, thank you.', ph:'GOO-ten MOR-gen! es gayt meer BES-ser, DAHN-ke'},
    {who:'A', de:'Haben Sie gut geschlafen?', en:'Did you sleep well?', ph:'HAH-ben zee goot geh-SHLAH-fen'},
    {who:'B', de:'Ja, ich habe gut geschlafen. Aber ich habe noch Schmerzen im Arm.', en:'Yes, I slept well. But I still have pain in my arm.', ph:'yah, ish HAH-be goot geh-SHLAH-fen. AH-ber ish HAH-be nokh SHMAIR-tsen im ahrm'},
    {who:'A', de:'Ich gebe Ihnen jetzt Ihre Medizin. Bitte trinken Sie viel Wasser.', en:'I will give you your medicine now. Please drink a lot of water.', ph:'ish GAY-be EE-nen yetst EE-re me-dee-TSEEN. BIT-te TRING-ken zee feel VAH-ser'},
    {who:'B', de:'Danke schön! Wann kommt der Arzt?', en:'Thank you very much! When does the doctor come?', ph:'DAHN-ke shern! vahn komt dair ahrtst'},
    {who:'A', de:'Der Arzt kommt um zehn Uhr. Bis später!', en:'The doctor comes at ten o\'clock. See you later!', ph:'dair ahrtst komt oom tsayn oor. bis SHPAY-ter'},
  ],
  exam:'telc Deutsch B1·B2 Pflege — one exam, B1-or-B2 result. Written part 115 min (listening, reading, language elements, writing an admission or biography report). Speaking in pairs: photo description, short talk on a care topic, discussion. Speaking must be at least B1 for any certificate. The FSP (Fachsprachprüfung) B2 Pflege is 3 × 20 minutes: patient conversation, colleague conversation, documentation.',
};

/* ---- Podcast section (Day 1 episode — recorded audio, separate series) ---- */
const PODCAST = {
  title:'German Day 1 — Zero se Start',
  file:'assets/day1-podcast.mp3',
  duration:'10:08',
  desc:'BAT and Alex teach German Day 1: alphabet, numbers 0–20, greetings, a 5-line self-introduction, the verb "sein", 30 everyday words, 2 dialogues and 6 nursing words. Narration is in Hindi — the podcast is a separate audio series. The app itself is English + German only.',
  routine:'How to use this episode (4-pass routine): 1) Listen once without reading. 2) Read the highlights below and look up 3–5 words. 3) Listen again while reading. 4) Listen once more tomorrow, without reading. Then shadow 2–3 sentences: pause and repeat with the speaker\'s rhythm.',
  highlights:[
    {de:'Guten Morgen!', en:'Good morning!', ph:'GOO-ten MOR-gen'},
    {de:'Ich heiße Ashutosh Kumar.', en:'My name is Ashutosh Kumar.', ph:'ish HAI-se ah-shoo-TOHSH koo-MAHR'},
    {de:'Ich komme aus Indien.', en:'I come from India.', ph:'ish KOM-me owss IN-dee-en'},
    {de:'Ich wohne in Gopalganj.', en:'I live in Gopalganj.', ph:'ish VOH-ne in go-PAHL-gahnj'},
    {de:'Ich lerne Deutsch.', en:'I am learning German.', ph:'ish LER-ne doych'},
    {de:'Wie geht es Ihnen?', en:'How are you? (formal)', ph:'vee GAYT es EE-nen'},
  ],
  glossary:[
    {de:'Guten Morgen', art:'', pl:'', en:'good morning', ph:'GOO-ten MOR-gen'},
    {de:'danke', art:'', pl:'', en:'thank you', ph:'DAHN-ke'},
    {de:'heißen', art:'', pl:'', en:'to be called', ph:'HAI-sen'},
    {de:'Wie geht es Ihnen?', art:'', pl:'', en:'how are you? (formal)', ph:'vee GAYT es EE-nen'},
    {de:'Krankenhaus', art:'das', pl:'Krankenhäuser', en:'hospital', ph:'KRAHN-ken-hows'},
  ],
  quiz:[
    {q:'What does "Ich heiße Ashutosh" mean?', options:['I am Ashutosh','My name is Ashutosh','I come from Ashutosh','Ashutosh is my friend'], answer:1,
     why:'"heißen" means "to be called". "Ich heiße ..." = My name is ...'},
    {q:'How do you say "good morning"?', options:['Guten Abend','Gute Nacht','Guten Morgen','Tschüss'], answer:2,
     why:'"Guten Morgen" = good morning. "Guten Abend" = good evening, "Gute Nacht" = good night.'},
    {q:'"Wie geht es Ihnen?" is used for...', options:['friends','children','patients and seniors (formal)','animals'], answer:2,
     why:'"Ihnen" is the formal form. In a hospital, always use "Ihnen" — never "dir" with patients.'},
  ],
};
