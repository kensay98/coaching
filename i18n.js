(function () {
  var translations = {
    en: {
      // Meta
      "meta.description": "1:1 coaching for founders and leaders who carry hard decisions. A confidential thinking partnership to untangle patterns and make clearer calls. Free first session.",
      "meta.title": "Rustam Babadjanov | Coaching for Those Who Build",

      // Nav
      "nav.cta": "Book Free Session",

      // Hero
      "hero.imgAlt": "Rustam Babadjanov",
      "hero.title": "Coaching for Those Who Build",
      "hero.sub": "For founders and leaders who carry the hardest calls. A confidential partnership to untangle what's really going on, change the patterns underneath, and leave with your own clear next step.",
      "hero.meta.1": "Built-world context",
      "hero.meta.2": "Strictly confidential",
      "hero.meta.3": "Your answers, not mine",
      "hero.cta.primary": "Book a Free Session",
      "hero.cta.ghost": "Learn More",

      // Who section
      "who.label": "Who This Is For",
      "who.title": "Ready to go deeper",
      "who.intro": "Two tracks, same core: partnership, clarity, and change that sticks.",
      "who.founders.h": "Founders",
      "who.founders.sub": "You're holding the hard decisions, the people dynamics, and the invisible weight.",
      "who.founders.1": "A decision keeps looping — pivot or persevere, fire or repair, raise or stay lean",
      "who.founders.2": "The same people pattern keeps costing you hires or momentum",
      "who.founders.3": "You feel lonely at the top and can't be fully honest with your team or investors",
      "who.founders.4": "You're scaling the company but your own identity hasn't caught up yet",
      "who.leaders.h": "Ambitious leaders",
      "who.leaders.sub": "You're leading inside a complex org and need clarity without politics.",
      "who.leaders.1": "You're stepping into bigger scope and feel the internal noise rising",
      "who.leaders.2": "Conflict, feedback, and stakeholder management keep draining you",
      "who.leaders.3": "You overthink decisions and want a clean, grounded process",
      "who.leaders.4": "Imposter feelings show up right when visibility matters most",
      "who.notfit.heading": "Not a fit if:",
      "who.notfit.1": "You're in crisis and need clinical support. That's what therapy is for.",
      "who.notfit.2": "You want someone to tell you what to do. Get a mentor or advisor.",
      "who.notfit.3": "You want quick fixes. This takes time.",

      // About section
      "about.label": "Who I Am",
      "about.title": "Rustam Babadjanov",
      "about.p1": "The best coaching, to me, is two people going deep together — not as guru and client, but as partners. I bring directness, care, and a willingness to stay in the uncomfortable places where real change lives.",
      "about.p2": "Every session is an experiment. We might work with a decision that's keeping you up at night, or go underneath it into the patterns and parts driving it. I follow what's alive, not a script.",
      "about.p3": "I come from the world I coach in. I co-founded a startup, built products at a company acquired by Yandex, and led teams through fast growth. I know what it's like to carry the weight of decisions with nobody to be fully honest with.",
      "about.p4": "I've been coaching since 2024 and I'm completing my ICF accreditation in 2026. My approach blends ICF fundamentals, somatic work, Internal Family Systems, and years of meditation. I'm also building ttune.ai — I'm still in the startup world, not coaching from the outside.",

      // Why section
      "why.label": "Why This",
      "why.title": "Why coaching, not something else",
      "why.mentor.h": "vs. Mentor or Advisor",
      "why.mentor.p1": "They give you their answer, from their experience, with their biases. You can't be fully honest about fears or doubts — they're evaluating whether you're \"leadership material.\"",
      "why.mentor.p2": "<strong>Coaching helps you arrive at your answer</strong> — uncovered through questions and challenge. An answer you own because it came from you.",
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
      "how.method.intro": "We work with whatever you bring. Sometimes that's a concrete decision this week. Sometimes it goes deeper — into the patterns and beliefs underneath. I draw from several approaches to go wherever the session needs to go:",
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


      // Lead magnet
      "leadmagnet.label": "Free Resource",
      "leadmagnet.title": "Get the Founder Clarity Reset",
      "leadmagnet.sub": "A practical worksheet to untangle one hard decision in 15 minutes.",
      "leadmagnet.card.title": "What's inside",
      "leadmagnet.card.1": "A 5-question decision framework for founder-level calls",
      "leadmagnet.card.2": "A loop-breaker prompt when you keep overthinking",
      "leadmagnet.card.3": "A 10-minute debrief template to spot repeating patterns",
      "leadmagnet.note": "You'll also get a short follow-up email sequence with practical prompts. Unsubscribe anytime.",
      "leadmagnet.form.name": "First name",
      "leadmagnet.form.namePlaceholder": "Alex",
      "leadmagnet.form.email": "Email",
      "leadmagnet.form.emailPlaceholder": "alex@company.com",
      "leadmagnet.form.challenge": "Biggest challenge right now (optional)",
      "leadmagnet.form.challengeOption0": "Choose one",
      "leadmagnet.form.challengeOption1": "Decision fatigue",
      "leadmagnet.form.challengeOption2": "People conflict",
      "leadmagnet.form.challengeOption3": "Self-doubt under pressure",
      "leadmagnet.form.challengeOption4": "Too many priorities",
      "leadmagnet.form.cta": "Send me the worksheet",
      "leadmagnet.form.disclaimer": "Replace <strong>YOUR_EMAIL@example.com</strong> in <code>index.html</code> with your real email to start collecting leads.",

      // CTA
      "cta.label": "Start Here",
      "cta.title": "Free First Session",
      "cta.step1.h": "The first session",
      "cta.step1.p1": "60 minutes. Bring one real decision, pattern, or situation.",
      "cta.step1.p2": "This isn't a pitch. It's real coaching.",
      "cta.step1.p3": "You'll leave with clarity and a concrete next step, whether we continue or not.",
      "cta.step2.h": "If it's a fit",
      "cta.step2.p1": "We figure out logistics and cadence. Usually weekly, adjusted to what's happening in your life.",
      "cta.step2.p2": "We keep going as long as the work is useful.",
      "cta.step2.p3": "Most clients stay for 3–6 months, some longer.",
      "cta.step3.h": "The work",
      "cta.step3.p1": "Each session, you bring what's most alive. We untangle it and run small experiments.",
      "cta.step3.p2": "Over time, decisions get clearer and old patterns loosen.",
      "cta.step3.p3": "You start showing up differently — not through willpower, but because something has actually changed.",
      "cta.book": "Book Your Free Session",

      // Footer
      "footer.main": "Rustam Babadjanov · Coaching for Those Who Build",
      "footer.meta": "English & Russian · Virtual sessions worldwide"
    },

    ru: {
      // Meta
      "meta.description": "Индивидуальный коучинг для фаундеров и лидеров, которые держат на себе сложные решения. Конфиденциальное партнёрство, чтобы распутать узлы и прийти к ясному следующему шагу. Первая сессия бесплатно.",
      "meta.title": "Рустам Бабаджанов | Коучинг для тех, кто строит",

      // Nav
      "nav.cta": "Записаться",

      // Hero
      "hero.imgAlt": "Рустам Бабаджанов",
      "hero.title": "Коучинг для тех, кто строит",
      "hero.sub": "Для фаундеров и лидеров, которые несут самые сложные решения. Конфиденциальное партнёрство, чтобы понять, что происходит на самом деле, сдвинуть повторяющиеся паттерны и выйти со своим ясным следующим шагом.",
      "hero.meta.1": "Опыт изнутри построения компаний",
      "hero.meta.2": "Строгая конфиденциальность",
      "hero.meta.3": "Твои ответы, не мои",
      "hero.cta.primary": "Записаться на бесплатную сессию",
      "hero.cta.ghost": "Узнать больше",

      // Who section
      "who.label": "Для кого это",
      "who.title": "Готов копнуть глубже",
      "who.intro": "Два трека, но суть одна: партнёрство, ясность и реальные сдвиги.",
      "who.founders.h": "Фаундеры",
      "who.founders.sub": "Ты держишь на себе сложные решения, людей и невидимый вес.",
      "who.founders.1": "Решение застряло — поворачивать или продолжать, увольнять или чинить, привлекать или оставаться «lean»",
      "who.founders.2": "Один и тот же паттерн с людьми снова и снова стоит тебе наймов и скорости",
      "who.founders.3": "Наверху одиноко, и ты не можешь быть полностью честным с командой или инвесторами",
      "who.founders.4": "Компания растёт, а внутри ты не успеваешь перестроиться",
      "who.leaders.h": "Амбициозные лидеры",
      "who.leaders.sub": "Ты ведёшь внутри сложной организации и хочешь ясности без политики.",
      "who.leaders.1": "Ты входишь в больший скоуп и чувствуешь внутренний шум",
      "who.leaders.2": "Конфликты, фидбек и стейкхолдеры выматывают",
      "who.leaders.3": "Ты слишком долго прокручиваешь решения и хочешь более ясного, приземлённого процесса",
      "who.leaders.4": "Синдром самозванца приходит именно тогда, когда нужна видимость",
      "who.notfit.heading": "Не подойдёт, если:",
      "who.notfit.1": "Ты в кризисе и нужна клиническая поддержка. Для этого есть терапия.",
      "who.notfit.2": "Ты хочешь, чтобы тебе сказали, что делать. Это про ментора или советника.",
      "who.notfit.3": "Ты хочешь быстрых решений. Эта работа требует времени.",

      // About section
      "about.label": "Кто я",
      "about.title": "Рустам Бабаджанов",
      "about.p1": "Лучший коучинг для меня — когда два человека идут вглубь вместе. Не как гуру и клиент, а как партнёры. Прямота, забота и готовность быть в некомфортных местах — там и происходят настоящие сдвиги.",
      "about.p2": "Каждая сессия — эксперимент. Иногда это решение, которое не даёт тебе спать. Иногда — глубже, в паттерны и части, которые за ним стоят. Я иду за тем, что живое, а не за сценарием.",
      "about.p3": "Я из того же мира, в котором коучу. Со-основал стартап, строил продукты в компании, которую купил Яндекс, вёл команды через быстрый рост. Знаю, каково нести вес решений, когда не с кем быть по-настоящему честным.",
      "about.p4": "Коучу с 2024 года, заканчиваю аккредитацию ICF в 2026. Подход — основы ICF, соматическая работа, IFS и годы медитации. Параллельно строю ttune.ai — я до сих пор в стартапах, а не коучу со стороны.",

      // Why section
      "why.label": "Почему это",
      "why.title": "Почему коучинг, а не что-то другое",
      "why.mentor.h": "vs. Ментор или советник",
      "why.mentor.p1": "Они дают свой ответ из своего опыта, со своими предубеждениями. Ты не можешь быть полностью честным про страхи — тебя оценивают, «лидер» ты или нет.",
      "why.mentor.p2": "<strong>Коучинг помогает прийти к своему ответу</strong> — через вопросы и вызовы. Ответ, который ты принимаешь, потому что он твой.",
      "why.therapist.h": "vs. Терапевт",
      "why.therapist.p1": "Терапия — от «не ок» к «ок». Важная работа, и если тебе это нужно — туда.",
      "why.therapist.p2": "<strong>А здесь — от «ок» к «следующему уровню».</strong> Ты уже функционируешь. Это не ремонт, это рост.",
      "why.friends.h": "vs. Друзья, партнёр, со-основатель",
      "why.friends.p1": "Они слишком близко. У них свои интересы в твоих решениях. Ты не скажешь «я боюсь, что не справлюсь» без последствий.",
      "why.friends.p2": "<strong>У меня нет ставки в твоих решениях.</strong> Полная конфиденциальность. Ничего из сказанного не уйдёт дальше.",
      "why.coaches.h": "vs. Другие коучи",
      "why.coaches.p1": "Многие бизнес-коучи остаются на поверхности — тактики и фреймворки. Многие «трансформационные» коучи абстрактны и медленны.",
      "why.coaches.p2": "<strong>Я совмещаю и то, и другое.</strong> Глубокая работа с прагматизмом того, кто реально строил в IT.",

      // How section
      "how.label": "Как это работает",
      "how.title": "Формат и подход",
      "how.format.h": "Формат",
      "how.format.1": "<strong>Индивидуальные сессии</strong>, 60 минут каждая",
      "how.format.2": "<strong>Обычно раз в неделю</strong> — подстраиваемся под то, что у тебя происходит",
      "how.format.3": "<strong>Обычно 3-6 месяцев</strong>",
      "how.format.4": "<strong>Без программы.</strong> Ты приносишь то, что на уме. То, что важно тебе прямо сейчас — там и происходит работа.",
      "how.method.h": "Как я работаю",
      "how.method.intro": "Работаем с тем, что ты приносишь. Иногда это конкретное решение на эту неделю. Иногда идём глубже — в паттерны и убеждения под ним. Я пользуюсь несколькими подходами, чтобы идти туда, куда нужно:",
      "how.method.1": "<strong>Основы ICF-коучинга</strong> — слушать, задавать вопросы, давать тебе пространство, чтобы думать ясно и находить свои ответы",
      "how.method.2": "<strong>Работа с телом</strong> — паттерны проявляются в теле раньше, чем голова их ловит. Иногда важно идти туда.",
      "how.method.3": "<strong>Работа с частями (IFS)</strong> — разобраться с разными голосами внутри, вместо того чтобы с ними воевать",
      "how.method.4": "<strong>Практика медитации</strong> — умение быть с дискомфортом, не бросаясь его чинить",

      // Testimonials
      "testimonials.label": "Отзывы",
      "testimonials.title": "Слова людей, с кем я работал",
      "testimonial.rasul": "Хочу отметить коуча Рустама. У нас было несколько сессий недавно — и я оценил его умение создавать пространство, задавать правильные вопросы и помогать разобраться в происходящем. Без давления, без клише — спокойное, вдумчивое сопровождение. Если проходишь через перемены или хочешь больше ясности — стоит с ним поговорить.",
      "testimonial.rasul.role": "Android-разработчик",
      "testimonial.samira": "У Рустама крутой опыт в IT, но также он как коуч умеет слушать, задавать точные вопросы и мягко направлять в нужную сторону. После сессий с ним реально появляется ясность и уверенность, куда двигаться дальше. Если хотите профессионально и личностно расти — с коучем это сделать гораздо проще. В общем, рекомендую.",
      "testimonial.samira.role": "Фаундер, комьюнити-билдер",


      // Lead magnet
      "leadmagnet.label": "Бесплатный материал",
      "leadmagnet.title": "Получи Founder Clarity Reset",
      "leadmagnet.sub": "Практичный worksheet, чтобы распутать одно сложное решение за 15 минут.",
      "leadmagnet.card.title": "Что внутри",
      "leadmagnet.card.1": "Фреймворк из 5 вопросов для решений фаундера",
      "leadmagnet.card.2": "Промпт, который помогает выйти из бесконечного обдумывания",
      "leadmagnet.card.3": "Шаблон 10-минутного разбора, чтобы заметить повторяющиеся паттерны",
      "leadmagnet.note": "Также получишь короткую серию follow-up писем с практичными вопросами. Отписаться можно в любой момент.",
      "leadmagnet.form.name": "Имя",
      "leadmagnet.form.namePlaceholder": "Алекс",
      "leadmagnet.form.email": "Email",
      "leadmagnet.form.emailPlaceholder": "alex@company.com",
      "leadmagnet.form.challenge": "Главный вызов прямо сейчас (необязательно)",
      "leadmagnet.form.challengeOption0": "Выбери вариант",
      "leadmagnet.form.challengeOption1": "Усталость от решений",
      "leadmagnet.form.challengeOption2": "Конфликты с людьми",
      "leadmagnet.form.challengeOption3": "Неуверенность под давлением",
      "leadmagnet.form.challengeOption4": "Слишком много приоритетов",
      "leadmagnet.form.cta": "Отправьте мне worksheet",
      "leadmagnet.form.disclaimer": "Замени <strong>YOUR_EMAIL@example.com</strong> в <code>index.html</code> на свой реальный email, чтобы начать собирать лиды.",

      // CTA
      "cta.label": "Начни здесь",
      "cta.title": "Бесплатная первая сессия",
      "cta.step1.h": "Первая сессия",
      "cta.step1.p1": "60 минут. Принеси одно реальное решение, паттерн или ситуацию.",
      "cta.step1.p2": "Это не продажа. Это настоящий коучинг.",
      "cta.step1.p3": "Ты уйдёшь с ясностью и конкретным следующим шагом — продолжим мы работать или нет.",
      "cta.step2.h": "Если подходит",
      "cta.step2.p1": "Разбираемся с логистикой и ритмом. Обычно раз в неделю, подстраиваемся под жизнь.",
      "cta.step2.p2": "Работаем дальше, пока это полезно.",
      "cta.step2.p3": "Большинство клиентов работают 3–6 месяцев, некоторые дольше.",
      "cta.step3.h": "Работа",
      "cta.step3.p1": "Каждую сессию ты приносишь то, что сейчас действительно важно. Мы распутываем и пробуем небольшие эксперименты.",
      "cta.step3.p2": "Со временем решения становятся яснее, старые паттерны ослабевают.",
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
