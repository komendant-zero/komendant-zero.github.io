/**
 * i18n.js - Internationalization & Localization Engine (RU / EN)
 */

const translations = {
  ru: {
    // Navigation
    'nav.projects': 'проекты',
    'nav.skills': 'стек',
    'nav.terminal': 'терминал',
    'nav.donate': 'донат',
    'nav.contact': 'контакты',

    // Hero Section
    'hero.status': 'ДОСТУПЕН ДЛЯ ПРОЕКТОВ И OPEN-SOURCE',
    'hero.bio': 'Разработчик ПО, создающий <strong>кроссплатформенные инструменты для десктопа и мобильных устройств</strong>, визуальные нодовые редакторы и медиа-утилиты. Всё начинается с нуля.',
    'hero.btn.projects': 'Смотреть проекты',
    'hero.btn.github': 'Профиль GitHub',
    'hero.btn.contact': 'Быстрая связь',
    'hero.stack.label': 'Ключевые технологии и экосистема',

    // Projects Section
    'projects.tag': 'РАЗРАБОТКА ПО',
    'projects.title': 'Избранные проекты',
    'projects.desc': 'Open-source утилиты, десктопные приложения и кроссплатформенные инструменты с упором на производительность, чистую архитектуру и удобство.',
    'projects.filter.all': 'Все проекты',
    'projects.filter.flutter': 'Flutter и мобильные',
    'projects.filter.python': 'Python и утилиты',
    'projects.filter.desktop': 'Десктоп приложения',
    'projects.empty': 'Нет проектов по выбранному фильтру.',

    // Skills Section
    'skills.tag': 'КОМПЕТЕНЦИИ',
    'skills.title': 'Технический стек',
    'skills.desc': 'Ключевые специализации и архитектурные домены разработки приложений и системных утилит.',
    'skills.card1.title': 'Кроссплатформа и Mobile',
    'skills.card2.title': 'Python и автоматизация',
    'skills.card3.title': 'Мультимедиа и утилиты',

    // Terminal Section
    'terminal.tag': 'ЖИВАЯ КОНСОЛЬ',
    'terminal.title': 'Интерактивный терминал',
    'terminal.desc': 'Исследуйте информацию, список репозиториев или вызывайте команды через встроенную командную строку.',
    'terminal.prompt.placeholder': 'Введите команду...',
    'terminal.quick.label': 'Быстрые команды:',

    // Donate Section
    'donate.tag': 'ПОДДЕРЖКА АВТОРА',
    'donate.title': 'Поддержать разработку',
    'donate.desc': 'Если мои открытые инструменты и проекты оказались полезны, вы можете поддержать разработку и развитие новых утилит криптовалютой:',
    'donate.copied': 'Адрес скопирован в буфер: ',

    // Contact Section
    'contact.title': 'Давайте создадим что-то вместе',
    'contact.desc': 'Заинтересованы в сотрудничестве, разработке кроссплатформенных приложений или создании инструментов? Напишите на GitHub или скопируйте контакты.',
    'contact.btn.github': 'GitHub профиль',
    'contact.btn.copy': 'Скопировать ссылку',

    // Footer
    'footer.copy': 'komendant-zero © 2026. Все права защищены.',
    'footer.source': 'Исходный код',
    'footer.status': 'В сети',

    // Toasts
    'toast.copied': 'Скопировано в буфер обмена: ',
    'toast.lang_switched': 'Язык переключен на русский'
  },
  en: {
    // Navigation
    'nav.projects': 'projects',
    'nav.skills': 'stack',
    'nav.terminal': 'terminal',
    'nav.donate': 'donate',
    'nav.contact': 'contact',

    // Hero Section
    'hero.status': 'AVAILABLE FOR PROJECTS & OPEN-SOURCE',
    'hero.bio': 'Software developer crafting <strong>cross-platform desktop & mobile tools</strong>, visual node-based editors, and high-performance media utilities. Everything starts from zero.',
    'hero.btn.projects': 'Explore Projects',
    'hero.btn.github': 'GitHub Profile',
    'hero.btn.contact': 'Quick Connect',
    'hero.stack.label': 'Core Technologies & Ecosystem',

    // Projects Section
    'projects.tag': 'ENGINEERED SOFTWARE',
    'projects.title': 'Featured Projects',
    'projects.desc': 'Open-source utilities, desktop applications, and cross-platform tools designed with focus on performance, clean architecture, and intuitive user experiences.',
    'projects.filter.all': 'All Projects',
    'projects.filter.flutter': 'Flutter & Mobile',
    'projects.filter.python': 'Python & Tools',
    'projects.filter.desktop': 'Desktop Apps',
    'projects.empty': 'No projects matched this filter.',

    // Skills Section
    'skills.tag': 'CAPABILITIES',
    'skills.title': 'Technical Expertise',
    'skills.desc': 'Core specializations and architectural domains honed across application development and system tools.',
    'skills.card1.title': 'Cross-Platform & Mobile',
    'skills.card2.title': 'Python & Automation',
    'skills.card3.title': 'Multimedia & Utilities',

    // Terminal Section
    'terminal.tag': 'LIVE CONSOLE',
    'terminal.title': 'Interactive Terminal',
    'terminal.desc': 'Explore info, list repositories, or trigger actions directly via the command line interface.',
    'terminal.prompt.placeholder': 'Type command...',
    'terminal.quick.label': 'Quick Commands:',

    // Donate Section
    'donate.tag': 'SUPPORT & SPONSORSHIP',
    'donate.title': 'Support Development',
    'donate.desc': 'If my open-source tools and utilities have helped you, you can support future development with crypto donations:',
    'donate.copied': 'Address copied to clipboard: ',

    // Contact Section
    'contact.title': 'Let\'s Build Something Together',
    'contact.desc': 'Interested in collaboration, cross-platform app development, or tools creation? Reach out on GitHub or connect directly.',
    'contact.btn.github': 'Follow on GitHub',
    'contact.btn.copy': 'Copy Profile URL',

    // Footer
    'footer.copy': 'komendant-zero © 2026. All rights reserved.',
    'footer.source': 'Source Code',
    'footer.status': 'Online',

    // Toasts
    'toast.copied': 'Copied to clipboard: ',
    'toast.lang_switched': 'Language switched to English'
  }
};

let currentLang = 'ru';

function t(key) {
  if (translations[currentLang] && translations[currentLang][key]) {
    return translations[currentLang][key];
  }
  if (translations['en'] && translations['en'][key]) {
    return translations['en'][key];
  }
  return key;
}

function getLanguage() {
  return currentLang;
}

function setLanguage(lang, notify = false) {
  if (!translations[lang]) lang = 'ru';
  currentLang = lang;
  localStorage.setItem('kz_lang', lang);

  document.documentElement.lang = lang;

  // Update text for all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translated = t(key);
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = translated;
    } else {
      el.innerHTML = translated;
    }
  });

  // Update active state on language switcher buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Dispatch custom event for dependent modules
  window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));

  if (notify && typeof window.showToast === 'function') {
    window.showToast(t('toast.lang_switched'));
  }
}

function initI18n() {
  const savedLang = localStorage.getItem('kz_lang');
  if (savedLang && translations[savedLang]) {
    currentLang = savedLang;
  } else {
    const browserLang = (navigator.language || '').toLowerCase();
    currentLang = browserLang.startsWith('ru') ? 'ru' : 'ru';
  }

  // Setup click events on lang switcher buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetLang = btn.getAttribute('data-lang');
      if (targetLang !== currentLang) {
        setLanguage(targetLang, true);
      }
    });
  });

  setLanguage(currentLang, false);
}

window.t = t;
window.getLanguage = getLanguage;
window.setLanguage = setLanguage;
window.initI18n = initI18n;
