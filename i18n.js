(function () {
  var translations = {
    en: {
      // Meta
      "meta.description": "1:1 coaching for startup founders and tech leaders. Work through decisions, patterns, and the loneliness of leadership with someone who's been there. Free first session.",
      "meta.title": "Rustam Babadjanov | Coaching for Those Who Build",

      // Nav
      "nav.cta": "Book Free Session",

      // Hero
      "hero.imgAlt": "Rustam Babadjanov",
      "hero.title": "Coaching for Those Who Build",
      "hero.sub": "A space to go deep with someone who gets it. We work as partners — exploring what's really going on, running experiments, and finding what actually shifts things. No agenda, no advice. Just the kind of honest work that changes how you lead and live.",
      "hero.meta.1": "No agenda",
      "hero.meta.2": "Totally confidential",
      "hero.meta.3": "Your answers, not mine",
      "hero.cta.primary": "Book a Free Session",
      "hero.cta.ghost": "Learn More",

      // Who section
      "who.label": "Who This Is For",
      "who.title": "Ready to go deeper",
      "who.intro": "You're accomplished and capable. You don't need fixing — you want partnership. Someone to think with, experiment with, and go beneath the surface with. Because the next level isn't about working harder. It's about seeing clearer.",
      "who.might.heading": "You might be:",
      "who.might.1": "A <strong>founder</strong> dealing with the loneliness and the weight of decisions nobody else can make",
      "who.might.2": "A <strong>leader in transition</strong>, stepping into a bigger role or figuring out what's next",
      "who.might.3": "Someone struggling with <strong>people stuff</strong>: managing, conflict, communicating with stakeholders who don't think like you",
      "who.might.4": "Someone stuck in <strong>patterns</strong> you can see but can't seem to stop",
      "who.might.5": "Someone dealing with <strong>imposter syndrome</strong>, self-doubt, the voice that says you don't belong",
      "who.might.6": "Someone making <strong>hard calls</strong> with incomplete information, wanting a thinking partner who doesn't have a stake in your decision",
      "who.notfit.heading": "Not a fit if:",
      "who.notfit.1": "You're in crisis and need clinical support. That's what therapy is for.",
      "who.notfit.2": "You want someone to tell you what to do. Get a mentor or advisor.",
      "who.notfit.3": "You want quick fixes. This takes time.",

      // About section
      "about.label": "Who I Am",
      "about.title": "Rustam Babadjanov",
      "about.p1": "I believe the best coaching happens when two people go deep together — not as guru and client, but as partners. I bring curiosity, directness, and a willingness to sit in the uncomfortable places where real change lives.",
      "about.p2": "Every session is an experiment. We might work with a decision that's keeping you up at night, or go underneath it into the patterns and parts driving it. I follow what's alive, not a script.",
      "about.p3": "I come from the world I coach in. I co-founded a startup, built products at a company acquired by Yandex, and led teams through the chaos of fast growth. I know what it's like to carry the weight of decisions with nobody to be honest with.",
      "about.p4": "I've been coaching since 2024 and I'm completing my ICF accreditation in 2026. My approach draws on formal coaching training, somatic work, Internal Family Systems, and years of meditation and internal work. I'm also building ttune.ai — I'm still in the startup world, not coaching from the outside.",

      // Why section
      "why.label": "Why This",
      "why.title": "Why coaching, not something else",
      "why.mentor.h": "vs. Mentor or Advisor",
      "why.mentor.p1": "They give you their answer, from their experience, with their biases. You can't be fully honest about fears or doubts — they're evaluating whether you're \"leadership material.\"",
      "why.mentor.p2": "<strong>Coaching gives you your answer</strong> — uncovered through questions and challenge. An answer you own because it came from you.",
      "why.therapist.h": "vs. Therapist",
      "why.therapist.p1": "Therapy takes you from \"not okay\" to \"okay.\" Important work, and if that's what you need, do that.",
      "why.therapist.p2": "<strong>This is \"okay\" to \"next level.\"</strong> You're already functioning. We're working on evolution, not repair.",
      "why.friends.h": "vs. Friends, Partner, Co-founder",
      "why.friends.p1": "They're too close. They have stakes in your decisions. You can't say \"I'm afraid I can't handle this\" without consequences.",
      "why.friends.p2": "<strong>I have zero stake in your decisions.</strong> Complete confidentiality. Nothing you say will be shared with anyone or used against you.",
      "why.coaches.h": "vs. Other Coaches",
      "why.coaches.p1": "Many business coaches stay surface-level — tactics and frameworks. Many \"transformational\" coaches are abstract and slow.",
      "why.coaches.p2": "<strong>I integrate both.</strong> Depth modalities with the pragmatism of someone who's actually built things in tech.",

      // How section
      "how.label": "How It Works",
      "how.title": "Format & approach",
      "how.format.h": "Format",
      "how.format.1": "<strong>1:1 sessions</strong>, 60 minutes each",
      "how.format.2": "<strong>Every week</strong>, adjusted to what's happening in your life",
      "how.format.3": "<strong>3-6 months</strong> is typical",
      "how.format.4": "<strong>No curriculum.</strong> You bring what's on your mind. The stuff that matters to you right now is where the work happens.",
      "how.method.h": "How I Work",
      "how.method.intro": "We work with whatever you bring. Sometimes that's a concrete decision you need to make this week. Sometimes it goes deeper — into the patterns and beliefs underneath. I draw from several approaches to go wherever the session needs to go:",
      "how.method.1": "<strong>ICF coaching fundamentals</strong> — listening, asking questions, creating space for you to think clearly and find your own answers",
      "how.method.2": "<strong>Body awareness</strong> — patterns show up in your body before your mind catches up. Sometimes we need to go there.",
      "how.method.3": "<strong>Parts work (IFS)</strong> — understanding the competing voices inside you instead of fighting them",
      "how.method.4": "<strong>Meditation Practice</strong> — shapes how I show up: the ability to sit with discomfort without rushing to fix it",

      // Testimonials
      "testimonials.label": "What Clients Say",
      "testimonials.title": "Words from people I've worked with",
      "testimonial.rasul": "Quick shoutout to coach Rustam. We've had a few sessions recently — and I really appreciated his ability to create space, ask the right questions, and help make sense of what's going on. No pressure, no clichés — just calm, thoughtful guidance. If you're navigating change or just need more clarity, definitely worth talking to him.",
      "testimonial.rasul.role": "Android Developer",
      "testimonial.samira": "As a coach, Rustam knows how to listen, ask the right questions, and gently guide you in the right direction. After sessions with him, you genuinely gain clarity and confidence about where to go next. If you want to grow professionally and personally — having a coach makes it so much easier. Highly recommend.",
      "testimonial.samira.role": "Founder, Community Builder",

      // CTA
      "cta.label": "Start Here",
      "cta.title": "Free First Session",
      "cta.step1.h": "The first session",
      "cta.step1.p1": "60 minutes. Bring something real — a decision you're stuck on, a pattern you want to understand, a situation you're navigating.",
      "cta.step1.p2": "This isn't a pitch. It's actual coaching.",
      "cta.step1.p3": "You'll leave with clarity on whatever you bring, whether we continue or not.",
      "cta.step2.h": "If it's a fit",
      "cta.step2.p1": "We figure out logistics and get started. Usually every week, adjusted based on what's going on in your life.",
      "cta.step2.p2": "No long-term commitments — we keep going as long as the work is useful.",
      "cta.step2.p3": "Most clients stay for 3–6 months, some longer.",
      "cta.step3.h": "The work",
      "cta.step3.p1": "Each session, you bring what's on your mind. We go where it needs to go.",
      "cta.step3.p2": "Over time, things shift. Decisions get clearer. Old patterns loosen.",
      "cta.step3.p3": "You start showing up differently — not through willpower, but because something has actually changed.",
      "cta.book": "Book Your Free Session",

      // Footer
      "footer.main": "Rustam Babadjanov · Coaching for Those Who Build",
      "footer.meta": "English & Russian · Virtual sessions worldwide"
    },

    ru: {
      // Meta
      "meta.description": "Индивидуальный коучинг для фаундеров и лидеров в IT. Разобраться с решениями и паттернами — с тем, кто через это прошёл. Первая сессия бесплатно.",
      "meta.title": "Рустам Бабаджанов | Коучинг для тех, кто строит",

      // Nav
      "nav.cta": "Записаться",

      // Hero
      "hero.imgAlt": "Рустам Бабаджанов",
      "hero.title": "Коучинг для тех, кто строит",
      "hero.sub": "Место, где можно честно разобраться в том, что происходит. Мы работаем как партнёры — копаем вглубь и пробуем то, что реально сдвигает ситуацию. Без повестки, без советов. Работа, после которой меняется то, как ты принимаешь решения и живёшь.",
      "hero.meta.1": "Без повестки",
      "hero.meta.2": "Полная конфиденциальность",
      "hero.meta.3": "Твои ответы, не мои",
      "hero.cta.primary": "Записаться на бесплатную сессию",
      "hero.cta.ghost": "Узнать больше",

      // Who section
      "who.label": "Для кого это",
      "who.title": "Готов копнуть глубже",
      "who.intro": "Ты уже многого добился. Тебе не нужно «чинить» — тебе нужен партнёр. Кто-то, с кем можно думать и заглядывать под поверхность. Следующий уровень не про «больше работать». Он про «яснее видеть».",
      "who.might.heading": "Ты можешь быть:",
      "who.might.1": "<strong>Фаундером</strong>, который тащит на себе решения, которые никто больше не примет. И одиночество, которое с этим идёт",
      "who.might.2": "<strong>Лидером на переходе</strong> — входишь в новую роль или разбираешься, что дальше",
      "who.might.3": "Тем, кому трудно с <strong>людьми</strong>: управление, конфликты, разговоры со стейкхолдерами, которые думают иначе",
      "who.might.4": "Тем, кто застрял в <strong>паттернах</strong>, которые видишь, но не можешь остановить",
      "who.might.5": "Тем, кто столкнулся с <strong>синдромом самозванца</strong>, неуверенностью, голосом, который говорит, что ты тут не на своём месте",
      "who.might.6": "Тем, кто принимает <strong>сложные решения</strong> при неполной информации и хочет собеседника, у которого нет ставки в твоём выборе",
      "who.notfit.heading": "Не подойдёт, если:",
      "who.notfit.1": "Ты в кризисе и нужна клиническая поддержка. Для этого есть терапия.",
      "who.notfit.2": "Ты хочешь, чтобы тебе сказали, что делать. Найди ментора или советника.",
      "who.notfit.3": "Ты хочешь быстрых решений. Это требует времени.",

      // About section
      "about.label": "Кто я",
      "about.title": "Рустам Бабаджанов",
      "about.p1": "Лучший коучинг для меня — когда два человека идут вглубь вместе. Не как гуру и клиент, а как партнёры. Любопытство, прямота и готовность быть в некомфортных местах, где и случаются настоящие сдвиги.",
      "about.p2": "Каждая сессия — эксперимент. Можем работать с решением, которое не даёт тебе спать. Можем пойти глубже — в паттерны и части, которые за ним стоят. Я иду за тем, что живое, а не за сценарием.",
      "about.p3": "Я из того же мира, в котором коучу. Со-основал стартап, строил продукты в компании, которую купил Яндекс, вёл команды через хаос быстрого роста. Знаю, каково нести вес решений, когда не с кем быть честным.",
      "about.p4": "Коучу с 2024 года, заканчиваю аккредитацию ICF в 2026. Подход — формальное обучение коучингу, соматическая работа, IFS и годы медитации. Параллельно строю ttune.ai — я до сих пор в стартапах, а не коучу со стороны.",

      // Why section
      "why.label": "Почему это",
      "why.title": "Почему коучинг, а не что-то другое",
      "why.mentor.h": "vs. Ментор или советник",
      "why.mentor.p1": "Они дают свой ответ, из своего опыта, со своими предубеждениями. Ты не можешь быть полностью честен про страхи — они оценивают, «лидер» ты или нет.",
      "why.mentor.p2": "<strong>Коучинг даёт тебе твой ответ</strong> — через вопросы и вызовы. Ответ, который ты принимаешь, потому что он пришёл от тебя.",
      "why.therapist.h": "vs. Терапевт",
      "why.therapist.p1": "Терапия — от «не ок» к «ок». Важная работа, и если тебе это нужно, делай.",
      "why.therapist.p2": "<strong>А здесь — от «ок» к «следующему уровню».</strong> Ты уже функционируешь. Это не ремонт, это рост.",
      "why.friends.h": "vs. Друзья, партнёр, со-основатель",
      "why.friends.p1": "Они слишком близко. У них свои интересы в твоих решениях. Ты не скажешь «я боюсь, что не справлюсь» без последствий.",
      "why.friends.p2": "<strong>Мне всё равно, что ты решишь.</strong> Полная конфиденциальность. Ничего из сказанного не уйдёт дальше.",
      "why.coaches.h": "vs. Другие коучи",
      "why.coaches.p1": "Многие бизнес-коучи остаются на поверхности — тактики и фреймворки. Многие «трансформационные» коучи абстрактны и медленны.",
      "why.coaches.p2": "<strong>Я совмещаю и то, и то.</strong> Глубокая работа с прагматизмом того, кто реально строил в IT.",

      // How section
      "how.label": "Как это работает",
      "how.title": "Формат и подход",
      "how.format.h": "Формат",
      "how.format.1": "<strong>Индивидуальные сессии</strong>, 60 минут каждая",
      "how.format.2": "<strong>Каждую неделю</strong>, подстраиваемся под то, что у тебя происходит",
      "how.format.3": "<strong>3-6 месяцев</strong> обычно",
      "how.format.4": "<strong>Без программы.</strong> Ты приносишь то, что на уме. То, что важно тебе прямо сейчас — там и происходит работа.",
      "how.method.h": "Как я работаю",
      "how.method.intro": "Работаем с тем, что ты приносишь. Иногда это конкретное решение на эту неделю. Иногда уходим глубже — в паттерны и убеждения под ним. Я пользуюсь несколькими подходами, чтобы идти туда, куда нужно:",
      "how.method.1": "<strong>Основы ICF-коучинга</strong> — слушать, спрашивать, давать тебе место, чтобы думать ясно и находить свои ответы",
      "how.method.2": "<strong>Работа с телом</strong> — паттерны проявляются в теле раньше, чем голова их ловит. Иногда нужно туда пойти.",
      "how.method.3": "<strong>Работа с частями (IFS)</strong> — разобраться с разными голосами внутри, вместо того чтобы с ними воевать",
      "how.method.4": "<strong>Практика медитации</strong> — умение быть с дискомфортом, не бросаясь его чинить",

      // Testimonials
      "testimonials.label": "Отзывы",
      "testimonials.title": "Слова тех, с кем я работал",
      "testimonial.rasul": "Хочу отметить коуча Рустама. У нас было несколько сессий недавно — и я оценил его умение создавать пространство, задавать правильные вопросы и помогать разобраться в происходящем. Без давления, без клише — спокойное, вдумчивое сопровождение. Если проходишь через перемены или хочешь больше ясности — стоит с ним поговорить.",
      "testimonial.rasul.role": "Android-разработчик",
      "testimonial.samira": "У Рустама крутой опыт в IT, но также он как коуч умеет слушать, задавать точные вопросы и мягко направлять в нужную сторону. После сессий с ним реально появляется ясность и уверенность, куда двигаться дальше. Если хотите профессионально и личностно расти — с коучем это сделать гораздо проще. В общем, рекомендую.",
      "testimonial.samira.role": "Фаундер, комьюнити-билдер",

      // CTA
      "cta.label": "Начни здесь",
      "cta.title": "Бесплатная первая сессия",
      "cta.step1.h": "Первая сессия",
      "cta.step1.p1": "60 минут. Принеси что-то настоящее — решение, в котором застрял, паттерн, который хочешь понять, ситуацию, которую разруливаешь.",
      "cta.step1.p2": "Это не продажа. Это настоящий коучинг.",
      "cta.step1.p3": "Ты уйдёшь с ясностью по тому, с чем пришёл — продолжим мы работать или нет.",
      "cta.step2.h": "Если подходит",
      "cta.step2.p1": "Разбираемся с логистикой и начинаем. Обычно раз в неделю, подстраиваемся под жизнь.",
      "cta.step2.p2": "Без долгосрочных обязательств — продолжаем, пока работа полезна.",
      "cta.step2.p3": "Большинство клиентов работают 3–6 месяцев, некоторые дольше.",
      "cta.step3.h": "Работа",
      "cta.step3.p1": "Каждую сессию ты приносишь то, что на уме. Мы идём туда, куда нужно.",
      "cta.step3.p2": "Со временем всё сдвигается. Решения становятся яснее. Старые паттерны ослабевают.",
      "cta.step3.p3": "Ты начинаешь вести себя иначе — не через силу воли, а потому что что-то внутри сдвинулось.",
      "cta.book": "Записаться на бесплатную сессию",

      // Footer
      "footer.main": "Рустам Бабаджанов · Коучинг для тех, кто строит",
      "footer.meta": "Английский и русский · Онлайн-сессии по всему миру"
    }
  };

  function setLanguage(lang) {
    if (!translations[lang]) lang = "en";

    // Update all elements with data-i18n
    var elements = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < elements.length; i++) {
      var el = elements[i];
      var key = el.getAttribute("data-i18n");
      var val = translations[lang][key];
      if (val === undefined) continue;

      var attr = el.getAttribute("data-i18n-attr");
      if (attr) {
        el.setAttribute(attr, val);
      } else {
        el.innerHTML = val;
      }
    }

    // Update document title and lang
    document.title = translations[lang]["meta.title"];
    document.documentElement.lang = lang;

    // Update toggle UI
    var buttons = document.querySelectorAll(".lang-btn");
    for (var j = 0; j < buttons.length; j++) {
      if (buttons[j].getAttribute("data-lang") === lang) {
        buttons[j].classList.add("active");
      } else {
        buttons[j].classList.remove("active");
      }
    }

    // Persist
    try { localStorage.setItem("lang", lang); } catch (e) {}

    // Update URL param without reload
    var url = new URL(window.location);
    if (lang === "en") {
      url.searchParams.delete("lang");
    } else {
      url.searchParams.set("lang", lang);
    }
    history.replaceState(null, "", url);
  }

  function getInitialLanguage() {
    // 1. URL param
    var params = new URLSearchParams(window.location.search);
    var urlLang = params.get("lang");
    if (urlLang && translations[urlLang]) return urlLang;

    // 2. localStorage
    try {
      var stored = localStorage.getItem("lang");
      if (stored && translations[stored]) return stored;
    } catch (e) {}

    // 3. Browser language
    var browserLang = (navigator.language || "").split("-")[0];
    if (browserLang === "ru") return "ru";

    return "en";
  }

  // Init on DOM ready
  document.addEventListener("DOMContentLoaded", function () {
    // Bind toggle buttons
    var buttons = document.querySelectorAll(".lang-btn");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function () {
        setLanguage(this.getAttribute("data-lang"));
      });
    }

    // Set initial language
    var lang = getInitialLanguage();
    if (lang !== "en") {
      setLanguage(lang);
    } else {
      // Just mark the active button
      var enBtn = document.querySelector('.lang-btn[data-lang="en"]');
      if (enBtn) enBtn.classList.add("active");
    }
  });
})();
