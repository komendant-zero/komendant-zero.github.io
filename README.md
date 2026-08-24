# ⚡ komendant-zero.github.io

<p align="center">
  <strong>Personal Developer Portfolio & Software Showcase</strong><br>
  <em>Personal website and engineering portfolio of komendant-zero.</em>
</p>

<p align="center">
  <a href="https://komendant-zero.github.io/"><img src="https://img.shields.io/badge/Website-komendant--zero.github.io-4f8cff?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Website"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-10b981?style=for-the-badge" alt="License: MIT"></a>
  <img src="https://img.shields.io/badge/Language-RU%20%7C%20EN-38bdf8?style=for-the-badge" alt="Languages">
</p>

---

<p align="center">
  <a href="#-english">English</a> • <a href="#-русский">Русский</a> • <a href="#-support--donations">Support</a>
</p>

---

## 🌐 English

### Overview
Modern, lightweight, and responsive developer portfolio built with Vanilla HTML5, CSS3, and ES6+ JavaScript. Designed with contemporary engineering aesthetics (dark mode, ambient lighting, bento grid layout, interactive terminal, and dynamic reactive canvas).

### ✨ Features
- **Bilingual Localization (RU / EN)**: Instant switching with persistent state saved in `localStorage`.
- **Interactive Dot-Matrix Canvas**: Custom HTML5 Canvas grid that dynamically responds to mouse movement.
- **Spotlight Bento Cards**: Radial gradient border tracking following cursor coordinates.
- **Project Showcase & GitHub Sync**: Automatically fetches and enriches repositories via GitHub API with an instant fallback cache.
- **Interactive Dev Terminal**: Built-in CLI emulator supporting interactive commands (`help`, `about`, `projects`, `skills`, `donate`, `contact`, `clear`) in both English and Russian.
- **Pure Vanilla Stack**: Zero external bundle dependencies for maximum performance (100/100 Google PageSpeed score).

### 📁 Project Structure
```
komendant-zero.github.io/
├── index.html          # Semantic HTML markup with data-i18n hooks
├── LICENSE             # MIT License
├── README.md           # Bilingual project documentation
├── css/
│   └── style.css       # Design tokens, bento layout, animations, responsive rules
└── js/
    ├── i18n.js         # Localization engine (RU/EN dictionaries & state management)
    ├── projects.js     # Project showcase, category filters, spotlight & GitHub sync
    ├── terminal.js     # Interactive CLI emulator with bilingual response system
    ├── canvas-bg.js    # Reactive dot-matrix Canvas background
    └── app.js          # Main entrypoint, live UTC clock, toasts & clipboard utils
```

### 🚀 Running Locally
You can run this project locally with any static web server:

**Using Python:**
```bash
python -m http.server 8000
```
Open `http://localhost:8000` in your browser.

**Using Node.js (npx serve):**
```bash
npx serve .
```

---

## 🇷🇺 Русский

### О проекте
Современный, легковесный и полностью адаптивный сайт-портфолио разработчика, созданный на чистом HTML5, CSS3 и модульном JavaScript (ES6+). Выполнен в технологичной темной эстетике (неоморфизм, Bento Grid, интерактивный терминал и фоновая динамическая Canvas-сетка).

### ✨ Ключевые возможности
- **Двуязычная локализация (RU / EN)**: Мгновенное переключение языка в шапке с сохранением выбора в `localStorage`.
- **Интерактивная Canvas-сетка**: Реактивный фон из точек, мягко реагирующий на движение курсора мыши.
- **Spotlight Bento-карточки**: Радиальная подсветка граней карточек по координатам мыши.
- **Каталог проектов и синхронизация с GitHub**: Автоматическая подгрузка актуальных данных из GitHub API с надежным кэшем на случай лимитов.
- **Интерактивный терминал**: Встроенная консоль разработчика с поддержкой команд (`help`, `about`, `projects`, `skills`, `donate`, `contact`, `clear`) на русском и английском языках.
- **Чистый стек без тяжелых фреймворков**: Высочайшая скорость загрузки и 100/100 в PageSpeed.

### 📁 Архитектура файлов
```
komendant-zero.github.io/
├── index.html          # Семантическая разметка с хуками data-i18n
├── LICENSE             # Лицензия MIT
├── README.md           # Документация на двух языках
├── css/
│   └── style.css       # Стили, переменные темы, анимации и адаптивность
└── js/
    ├── i18n.js         # Движок локализации (словари RU/EN и переключатель)
    ├── projects.js     # Каталог проектов, фильтрация, Spotlight и GitHub sync
    ├── terminal.js     # Интерактивный терминал с русскими и английскими ответами
    ├── canvas-bg.js    # Фоновая Canvas-сетка с эффектом слежения за курсором
    └── app.js          # Точка входа, живые UTC-часы, Toast-уведомления
```

### 🚀 Локальный запуск
Для запуска локального сервера можно использовать любую стандартную утилиту:

**С помощью Python:**
```bash
python -m http.server 8000
```
Затем откройте `http://localhost:8000` в браузере.

**С помощью Node.js:**
```bash
npx serve .
```

---

## ☕ Support & Donations (Crypto)

If you find my open-source projects, tools, and libraries helpful, you can support future development:

| Asset | Network | Address |
| :--- | :--- | :--- |
| **USDT** | BNB Smart Chain (BEP-20) | `0xC0DCB82231d14997Af7ce7b3D8558F5A9705B321` |
| **TRON** | TRX (TRON Network) | `TCqMo27bo8WTpyVLrjsPmEdFW3zpnTmsaj` |
| **Bitcoin** | BTC (Native SegWit) | `bc1qas3ejdkrjeadr9hpzh0gndkkt4xshypnjs05hz` |
| **Litecoin** | LTC (Native Bech32) | `ltc1qttc2hm2p74sw26c8tvjj9jlrjm536ngn72vlwg` |

---

## 📄 License
This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.
