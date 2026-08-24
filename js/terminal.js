/**
 * terminal.js — Interactive Terminal Emulator with Bilingual Commands & Responses
 */

const terminalResponses = {
  ru: {
    welcome: `<span class="t-accent">komendant-zero</span> [Версия 2.4.0-release]
Введите <span class="t-cyan">'help'</span> для списка команд или используйте быстрые кнопки ниже.`,
    help: `Доступные команды:
  <span class="t-cyan">about</span>       - О разработчике и философии разработки
  <span class="t-cyan">projects</span>    - Список созданных проектов и утилит
  <span class="t-cyan">skills</span>      - Ключевой технический стек
  <span class="t-cyan">contact</span>     - Контакты и копирование ссылки
  <span class="t-cyan">github</span>      - Открыть GitHub профиль в новой вкладке
  <span class="t-cyan">clear</span>       - Очистить экран терминала
  <span class="t-cyan">echo &lt;текст&gt;</span> - Вывести текст на экран
  <span class="t-cyan">sudo</span>        - Запросить права администратора`,
    about: `<span class="t-accent">komendant-zero</span>:
Кроссплатформенный разработчик (Flutter/Dart, Python).
Специализация: десктопные и мобильные инструменты, нодовые графы, мультимедиа-конвейеры (FFmpeg).
Философия: "Всё начинается с нуля. Пиши чисто, делай быстро."`,
    projects: `Каталог проектов:
1. <span class="t-cyan">easy-loader-flutter</span> [Flutter/Dart] - Загрузчик видео/аудио для Android & Windows
2. <span class="t-cyan">dialogue-engine</span> [Python] - Визуальный нодовый редактор диалогов для Ren'Py
Введите <span class="t-yellow">'github'</span>, чтобы открыть страницу всех репозиториев.`,
    skills: `Матрица компетенций:
- <span class="t-emerald">Mobile & Desktop:</span> Flutter, Dart, Android SDK, Windows Win32
- <span class="t-emerald">Python & Tools:</span>    Python 3, Node Graph UI, Ren'Py, автоматизация
- <span class="t-emerald">Мультимедиа:</span>       FFmpeg, yt-dlp, конвейеры транскодирования`,
    contact_copied: `GitHub: <span class="t-cyan">https://github.com/komendant-zero</span> (Скопировано в буфер!)`,
    opening_github: `Открытие https://github.com/komendant-zero...`,
    sudo: `<span class="t-yellow">Доступ разрешён:</span> Вы уже обладаете root-правами в нулевом пространстве.`,
    not_found: (cmd) => `<span style="color:#ef4444">Команда не найдена: '${cmd}'.</span> Введите <span class="t-cyan">'help'</span> для справки.`
  },
  en: {
    welcome: `<span class="t-accent">komendant-zero</span> [Version 2.4.0-release]
Type <span class="t-cyan">'help'</span> to see available commands or click quick actions below.`,
    help: `Available commands:
  <span class="t-cyan">about</span>       - Print bio and developer philosophy
  <span class="t-cyan">projects</span>    - List all engineered software
  <span class="t-cyan">skills</span>      - Show core technical capabilities
  <span class="t-cyan">contact</span>     - Display contact info & copy link
  <span class="t-cyan">github</span>      - Open GitHub profile in new tab
  <span class="t-cyan">clear</span>       - Clear console output
  <span class="t-cyan">echo &lt;msg&gt;</span>  - Print text to screen
  <span class="t-cyan">sudo</span>        - Request administrative privileges`,
    about: `<span class="t-accent">komendant-zero</span>:
Cross-platform developer specializing in Flutter/Dart and Python.
Focusing on developer tools, multimedia utilities, and desktop GUI systems.
Philosophy: "Everything starts from zero. Build clean, build fast."`,
    projects: `Current Software Showcase:
1. <span class="t-cyan">easy-loader-flutter</span> [Flutter/Dart] - Video & audio downloader for Android & Windows
2. <span class="t-cyan">dialogue-engine</span> [Python] - Visual node-based dialogue editor for Ren'Py
Type <span class="t-yellow">'github'</span> to open full profile repository list.`,
    skills: `Tech Stack Matrix:
- <span class="t-emerald">Mobile/Desktop:</span> Flutter, Dart, Android SDK, Windows Win32
- <span class="t-emerald">Python & Tools:</span> Python 3, Node Graph UI, Ren'Py, Automation
- <span class="t-emerald">Multimedia:</span>     FFmpeg, yt-dlp, Audio/Video Conversion Pipelines`,
    contact_copied: `GitHub: <span class="t-cyan">https://github.com/komendant-zero</span> (Copied to clipboard!)`,
    opening_github: `Opening https://github.com/komendant-zero...`,
    sudo: `<span class="t-yellow">Permission granted:</span> You are already root in zero space.`,
    not_found: (cmd) => `<span style="color:#ef4444">Command not found: '${cmd}'.</span> Type <span class="t-cyan">'help'</span> for available commands.`
  }
};

function runTerminalCommand(cmdText) {
  const terminalInput = document.getElementById('terminal-input');
  const terminalOutput = document.getElementById('terminal-output');
  const terminalBody = document.getElementById('terminal-body');

  const trimmed = cmdText.trim();
  if (!trimmed) return;

  const lang = window.getLanguage ? window.getLanguage() : 'ru';
  const dict = terminalResponses[lang] || terminalResponses['ru'];

  const parts = trimmed.split(' ');
  const mainCmd = parts[0].toLowerCase();
  const args = parts.slice(1).join(' ');

  if (mainCmd === 'clear') {
    if (terminalOutput) terminalOutput.innerHTML = '';
    return;
  }

  const outputDiv = document.createElement('div');
  outputDiv.className = 'terminal-output';
  const promptHtml = `<span class="terminal-prompt-symbol">&gt;</span> <span style="color:#fff">${trimmed}</span>\n`;

  let result = '';

  if (mainCmd === 'help') {
    result = dict.help;
  } else if (mainCmd === 'about') {
    result = dict.about;
  } else if (mainCmd === 'projects') {
    result = dict.projects;
  } else if (mainCmd === 'skills') {
    result = dict.skills;
  } else if (mainCmd === 'contact') {
    if (typeof window.copyContact === 'function') {
      window.copyContact('https://github.com/komendant-zero');
    }
    result = dict.contact_copied;
  } else if (mainCmd === 'github') {
    window.open('https://github.com/komendant-zero', '_blank');
    result = dict.opening_github;
  } else if (mainCmd === 'sudo') {
    result = dict.sudo;
  } else if (mainCmd === 'echo') {
    result = args || '';
  } else {
    result = dict.not_found(trimmed);
  }

  if (result && terminalOutput) {
    outputDiv.innerHTML = promptHtml + result;
    terminalOutput.appendChild(outputDiv);
  }

  if (terminalBody) {
    terminalBody.scrollTop = terminalBody.scrollHeight;
  }
}

function initTerminal() {
  const terminalInput = document.getElementById('terminal-input');
  const terminalOutput = document.getElementById('terminal-output');

  if (terminalInput) {
    terminalInput.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        runTerminalCommand(terminalInput.value);
        terminalInput.value = '';
      }
    });
  }

  window.addEventListener('languageChanged', (e) => {
    const lang = e.detail.lang;
    const dict = terminalResponses[lang] || terminalResponses['ru'];
    if (terminalOutput && terminalOutput.children.length === 0) {
      terminalOutput.innerHTML = dict.welcome;
    }
  });

  const lang = window.getLanguage ? window.getLanguage() : 'ru';
  const dict = terminalResponses[lang] || terminalResponses['ru'];
  if (terminalOutput) {
    terminalOutput.innerHTML = dict.welcome;
  }
}

window.runCommand = runTerminalCommand;
window.initTerminal = initTerminal;
