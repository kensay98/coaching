(function () {
  var translations = {
    en: {
      // Meta
      "meta.description": "1:1 coaching for founders and leaders who carry hard decisions. A confidential thinking partnership to untangle patterns and make clearer calls. Free first session.",
      "meta.title": "Rustam Babadjanov | Coaching for Those Who Build",

      // Nav
      "nav.startups": "For Startups",
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
      "footer.meta": "English & Russian · Virtual sessions worldwide",

      // Startup leadership page
      "startup.meta.description": "An 8-week coaching program for early-stage startups that turns strong ICs into autonomous team leads, so founders stop being the bottleneck.",
      "startup.meta.title": "First Team Leads | Rustam Babadjanov",
      "startup.nav.general": "General Coaching",
      "startup.nav.cta": "Book Founder Call",
      "startup.hero.imgAlt": "Rustam Babadjanov",
      "startup.hero.title": "Your team leads still depend on you for every decision?",
      "startup.hero.sub": "I turn strong ICs into autonomous leaders in 8 weeks, so you can step out of day-to-day decisions without the company slowing down.",
      "startup.hero.meta.1": "Early-stage startups",
      "startup.hero.meta.2": "10-30 people",
      "startup.hero.meta.3": "Founder bottleneck removal",
      "startup.hero.cta.primary": "Book a Founder Call",
      "startup.hero.cta.ghost": "See the Program",
      "startup.moment.label": "The Moment",
      "startup.moment.title": "\"I can't be in every decision anymore. But when I step back, things break.\"",
      "startup.moment.intro": "This is the buying moment. The company is growing fast, first team leads are emerging, but there is no real leadership layer yet. Every unclear decision still finds its way back to the founder.",
      "startup.moment.see.h": "What you see",
      "startup.moment.see.sub": "The symptoms are practical and visible.",
      "startup.moment.see.1": "Everything still routes through you",
      "startup.moment.see.2": "Team leads ask instead of decide",
      "startup.moment.see.3": "Ownership is blurry",
      "startup.moment.see.4": "Execution slows when you are not involved",
      "startup.moment.cost.h": "What it costs",
      "startup.moment.cost.sub": "The company keeps scaling, but your attention does not.",
      "startup.moment.cost.1": "You are overloaded and slightly frustrated",
      "startup.moment.cost.2": "People problems wait too long",
      "startup.moment.cost.3": "Decision speed depends on your availability",
      "startup.moment.cost.4": "The team cannot fully own outcomes yet",
      "startup.root.label": "Root Problem",
      "startup.root.title": "You promoted executors, not leaders.",
      "startup.root.p1": "They are strong ICs. That is why you trusted them. But execution skill does not automatically become ownership, people leadership, or decision-making under uncertainty.",
      "startup.root.p2": "The work is to help each lead build a new operating pattern: own the outcome, make bounded decisions, delegate the work, and address friction before it becomes your problem.",
      "startup.offer.label": "The Offer",
      "startup.offer.title": "8 weeks of real-time leadership practice",
      "startup.offer.format.h": "Format",
      "startup.offer.format.1": "<strong>8 weeks</strong> focused on your first team leads",
      "startup.offer.format.2": "<strong>Weekly 1:1 coaching</strong>, 60 minutes per lead",
      "startup.offer.format.3": "<strong>Async support</strong> for real situations during the week",
      "startup.offer.format.4": "<strong>Founder calibration</strong> on what should stop escalating to you",
      "startup.offer.work.h": "What we work on",
      "startup.offer.work.intro": "No generic leadership training. We use the actual problems your leads are facing right now:",
      "startup.offer.work.1": "\"I don't know how to delegate this.\"",
      "startup.offer.work.2": "\"I'm stuck making this decision.\"",
      "startup.offer.work.3": "\"My team member is underperforming.\"",
      "startup.offer.work.4": "\"I'm avoiding this conversation.\"",
      "startup.shifts.label": "Core Shifts",
      "startup.shifts.title": "What changes in the lead",
      "startup.shifts.executor.h": "Executor -> Owner",
      "startup.shifts.executor.p": "They stop waiting for instructions and start taking responsibility for outcomes.",
      "startup.shifts.executor.1": "Clarify the outcome, not just the task",
      "startup.shifts.executor.2": "Notice what is theirs to own",
      "startup.shifts.executor.3": "Move without needing constant founder context",
      "startup.shifts.asking.h": "Asking -> Deciding",
      "startup.shifts.asking.p": "They learn what to decide, what to communicate, and what truly needs escalation.",
      "startup.shifts.asking.1": "Define decision boundaries",
      "startup.shifts.asking.2": "Escalate exceptions, not routine calls",
      "startup.shifts.asking.3": "Build confidence under uncertainty",
      "startup.shifts.doing.h": "Doing -> Delegating",
      "startup.shifts.doing.p": "They hand off work without dumping, hovering, or taking it back at the first sign of friction.",
      "startup.shifts.doing.1": "Choose what to delegate",
      "startup.shifts.doing.2": "Set clear expectations",
      "startup.shifts.doing.3": "Avoid micromanagement loops",
      "startup.shifts.avoiding.h": "Avoiding -> Addressing",
      "startup.shifts.avoiding.p": "They handle feedback, underperformance, and uncomfortable conversations earlier.",
      "startup.shifts.avoiding.1": "Name issues clearly",
      "startup.shifts.avoiding.2": "Give useful feedback",
      "startup.shifts.avoiding.3": "Reduce hidden tension in the team",
      "startup.outcomes.label": "Founder Outcomes",
      "startup.outcomes.title": "\"I don't need to be in everything anymore.\"",
      "startup.outcomes.1.h": "Fewer interruptions",
      "startup.outcomes.1.p": "Team leads stop routing routine uncertainty through you.",
      "startup.outcomes.2.h": "Fewer escalations",
      "startup.outcomes.2.p": "The boundary between \"decide\" and \"escalate\" becomes clear.",
      "startup.outcomes.3.h": "Faster execution",
      "startup.outcomes.3.p": "Work moves without waiting for the founder to unblock every call.",
      "startup.outcomes.cta": "Start Here",
      "startup.different.label": "Why This",
      "startup.different.title": "Leadership is built in real situations, not learned in the abstract.",
      "startup.different.alt.h": "Most alternatives",
      "startup.different.alt.p1": "Generic leadership training, frameworks, workshops, and slides.",
      "startup.different.alt.p2": "<strong>The problem:</strong> they rarely touch the actual situations your leads are avoiding this week.",
      "startup.different.this.h": "This program",
      "startup.different.this.p1": "We work on live situations, in real time, with your actual team leads.",
      "startup.different.this.p2": "<strong>The shift:</strong> what happened this week becomes the material for how they lead differently next week.",
      "startup.contact.label": "Start Here",
      "startup.contact.title": "Ready to stop being the bottleneck?",
      "startup.contact.1.h": "Bring the current leads",
      "startup.contact.1.p": "Who is newly responsible for outcomes, people, or decisions?",
      "startup.contact.2.h": "Bring the escalations",
      "startup.contact.2.p": "Which decisions still come to you that should not?",
      "startup.contact.3.h": "Bring where it breaks",
      "startup.contact.3.p": "What slows down or gets messy when you step back?",
      "startup.contact.cta": "Book a Founder Call",
      "startup.footer.main": "Rustam Babadjanov · First Team Leads",
      "startup.footer.meta": "English & Russian · Virtual sessions worldwide"
    },

    ru: {
      // Meta
      "meta.description": "Индивидуальный коучинг для фаундеров и лидеров, которые держат на себе сложные решения. Конфиденциальное партнёрство, чтобы распутать узлы и прийти к ясному следующему шагу. Первая сессия бесплатно.",
      "meta.title": "Рустам Бабаджанов | Коучинг для тех, кто строит",

      // Nav
      "nav.startups": "Для стартапов",
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
      "footer.meta": "Английский и русский · Онлайн-сессии по всему миру",

      // Startup leadership page
      "startup.meta.description": "8-недельная коучинговая программа для стартапов ранней стадии: превращаем сильных IC в автономных тимлидов, чтобы фаундер перестал быть узким местом.",
      "startup.meta.title": "Первые тимлиды | Рустам Бабаджанов",
      "startup.nav.general": "Общий коучинг",
      "startup.nav.cta": "Звонок для фаундера",
      "startup.hero.imgAlt": "Рустам Бабаджанов",
      "startup.hero.title": "Твои тимлиды всё ещё зависят от тебя в каждом решении?",
      "startup.hero.sub": "Я помогаю сильным IC стать автономными лидерами за 8 недель, чтобы ты мог выйти из ежедневных решений без замедления компании.",
      "startup.hero.meta.1": "Стартапы ранней стадии",
      "startup.hero.meta.2": "10-30 человек",
      "startup.hero.meta.3": "Фаундер перестаёт быть узким местом",
      "startup.hero.cta.primary": "Записаться на звонок",
      "startup.hero.cta.ghost": "Посмотреть программу",
      "startup.moment.label": "Момент",
      "startup.moment.title": "\"Я больше не могу быть в каждом решении. Но когда я отхожу, всё начинает ломаться.\"",
      "startup.moment.intro": "Это момент покупки. Компания быстро растёт, появляются первые тимлиды, но настоящего лидерского слоя ещё нет. Каждое неясное решение всё равно возвращается к фаундеру.",
      "startup.moment.see.h": "Что ты видишь",
      "startup.moment.see.sub": "Симптомы практичные и очень узнаваемые.",
      "startup.moment.see.1": "Всё всё ещё проходит через тебя",
      "startup.moment.see.2": "Тимлиды спрашивают, вместо того чтобы решать",
      "startup.moment.see.3": "Ответственность размыта",
      "startup.moment.see.4": "Всё замедляется, когда ты не вовлечён",
      "startup.moment.cost.h": "Чего это стоит",
      "startup.moment.cost.sub": "Компания масштабируется, а твоё внимание нет.",
      "startup.moment.cost.1": "Ты перегружен и тихо раздражён",
      "startup.moment.cost.2": "Проблемы с людьми откладываются слишком долго",
      "startup.moment.cost.3": "Скорость решений зависит от твоей доступности",
      "startup.moment.cost.4": "Команда ещё не умеет полноценно владеть результатами",
      "startup.root.label": "Корневая проблема",
      "startup.root.title": "Ты продвинул исполнителей, а не лидеров.",
      "startup.root.p1": "Они сильные IC. Поэтому ты им доверил больше. Но умение хорошо выполнять задачи само по себе не превращается в ownership, лидерство людей и решения в неопределённости.",
      "startup.root.p2": "Задача — помочь каждому лиду выстроить новый паттерн: владеть результатом, принимать решения в границах, делегировать работу и разбирать напряжение до того, как это снова станет твоей проблемой.",
      "startup.offer.label": "Оффер",
      "startup.offer.title": "8 недель лидерской практики на реальных ситуациях",
      "startup.offer.format.h": "Формат",
      "startup.offer.format.1": "<strong>8 недель</strong> фокуса на первых тимлидах",
      "startup.offer.format.2": "<strong>Еженедельный 1:1 коучинг</strong>, 60 минут на каждого лида",
      "startup.offer.format.3": "<strong>Асинхронная поддержка</strong> по реальным ситуациям в течение недели",
      "startup.offer.format.4": "<strong>Калибровка с фаундером</strong>: что должно перестать эскалироваться к тебе",
      "startup.offer.work.h": "С чем работаем",
      "startup.offer.work.intro": "Без generic leadership training. Берём реальные проблемы, с которыми твои лиды сталкиваются прямо сейчас:",
      "startup.offer.work.1": "\"Я не знаю, как это делегировать.\"",
      "startup.offer.work.2": "\"Я застрял в решении.\"",
      "startup.offer.work.3": "\"Мой сотрудник не справляется.\"",
      "startup.offer.work.4": "\"Я избегаю этого разговора.\"",
      "startup.shifts.label": "Ключевые сдвиги",
      "startup.shifts.title": "Что меняется в лиде",
      "startup.shifts.executor.h": "Исполнитель -> Owner",
      "startup.shifts.executor.p": "Он перестаёт ждать инструкций и начинает брать ответственность за результат.",
      "startup.shifts.executor.1": "Прояснять результат, а не только задачу",
      "startup.shifts.executor.2": "Видеть, что именно его зона ответственности",
      "startup.shifts.executor.3": "Двигаться без постоянного контекста от фаундера",
      "startup.shifts.asking.h": "Спрашивает -> Решает",
      "startup.shifts.asking.p": "Он понимает, что решать самому, что проговаривать, а что действительно эскалировать.",
      "startup.shifts.asking.1": "Определить границы решений",
      "startup.shifts.asking.2": "Эскалировать исключения, а не рутинные вопросы",
      "startup.shifts.asking.3": "Развивать уверенность в неопределённости",
      "startup.shifts.doing.h": "Делает сам -> Делегирует",
      "startup.shifts.doing.p": "Он передаёт работу без сбрасывания, микроменеджмента и забирания задачи обратно при первом трении.",
      "startup.shifts.doing.1": "Выбирать, что делегировать",
      "startup.shifts.doing.2": "Ставить ясные ожидания",
      "startup.shifts.doing.3": "Не уходить в микроменеджмент",
      "startup.shifts.avoiding.h": "Избегает -> Разбирает",
      "startup.shifts.avoiding.p": "Он раньше берётся за фидбек, underperformance и неудобные разговоры.",
      "startup.shifts.avoiding.1": "Называть проблему ясно",
      "startup.shifts.avoiding.2": "Давать полезный фидбек",
      "startup.shifts.avoiding.3": "Снижать скрытое напряжение в команде",
      "startup.outcomes.label": "Результаты для фаундера",
      "startup.outcomes.title": "\"Мне больше не нужно быть во всём.\"",
      "startup.outcomes.1.h": "Меньше прерываний",
      "startup.outcomes.1.p": "Тимлиды перестают нести к тебе каждую рутинную неопределённость.",
      "startup.outcomes.2.h": "Меньше эскалаций",
      "startup.outcomes.2.p": "Граница между \"решить\" и \"эскалировать\" становится ясной.",
      "startup.outcomes.3.h": "Быстрее execution",
      "startup.outcomes.3.p": "Работа движется без ожидания, пока фаундер разблокирует каждый вопрос.",
      "startup.outcomes.cta": "Начать здесь",
      "startup.different.label": "Почему это",
      "startup.different.title": "Лидерство строится на реальных ситуациях, а не в абстрактной теории.",
      "startup.different.alt.h": "Большинство альтернатив",
      "startup.different.alt.p1": "Generic leadership training, фреймворки, воркшопы и слайды.",
      "startup.different.alt.p2": "<strong>Проблема:</strong> они редко касаются реальных ситуаций, которых твои лиды избегают на этой неделе.",
      "startup.different.this.h": "Эта программа",
      "startup.different.this.p1": "Мы работаем с живыми ситуациями, в реальном времени, с твоими actual тимлидами.",
      "startup.different.this.p2": "<strong>Сдвиг:</strong> то, что произошло на этой неделе, становится материалом для того, как они будут лидировать по-другому на следующей.",
      "startup.contact.label": "Начать здесь",
      "startup.contact.title": "Готов перестать быть bottleneck?",
      "startup.contact.1.h": "Принеси текущих лидов",
      "startup.contact.1.p": "Кто теперь отвечает за результаты, людей или решения?",
      "startup.contact.2.h": "Принеси эскалации",
      "startup.contact.2.p": "Какие решения всё ещё приходят к тебе, хотя не должны?",
      "startup.contact.3.h": "Принеси, где ломается",
      "startup.contact.3.p": "Что замедляется или становится messy, когда ты отходишь?",
      "startup.contact.cta": "Записаться на звонок",
      "startup.footer.main": "Рустам Бабаджанов · Первые тимлиды",
      "startup.footer.meta": "Английский и русский · Онлайн-сессии по всему миру"
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
    var titleKey = document.body ? document.body.getAttribute("data-title-key") : null;
    document.title = translations[lang][titleKey || "meta.title"] || translations[lang]["meta.title"];
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
