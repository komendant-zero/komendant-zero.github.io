/**
 * projects.js — Projects Showcase, Filter Tabs, Spotlight & GitHub Sync
 */

const curatedProjects = [
  {
    id: 'easy-loader-flutter',
    name: 'Easy Loader Flutter',
    category: 'flutter',
    platforms: ['Android', 'Windows'],
    description_ru: 'Высокопроизводительный загрузчик медиа для YouTube и TikTok. Поддерживает конвертацию аудио в MP3/MP4, превью и интеграцию с FFmpeg.',
    description_en: 'High-performance media extractor & downloader for YouTube & TikTok. Supports audio conversion, thumbnails, and custom FFmpeg streams.',
    features_ru: ['Многопоточная загрузка', 'Автоконвертация MP3 / MP4', 'Нативные сборки под Android и Windows'],
    features_en: ['Multi-threaded downloads', 'Automatic MP3/MP4 conversion', 'Native Android & Windows builds'],
    tags: ['Flutter', 'Dart', 'Android', 'Windows', 'FFmpeg', 'yt-dlp'],
    url: 'https://github.com/komendant-zero/easy-loader-flutter',
    stars: 0
  },
  {
    id: 'dialogue-engine',
    name: 'Dialogue Engine',
    category: 'python',
    platforms: ['Desktop', 'Ren\'Py'],
    description_ru: 'Визуальный нодовый редактор диалогов и инструмент построения нелинейного сюжета для Ren\'Py и визуальных новелл.',
    description_en: 'Visual node-based dialogue editor and narrative architecture tool for Ren\'Py and interactive visual novel creators.',
    features_ru: ['Граф узлов диалогов', 'Ветвящаяся интерактивная логика', 'Экспорт и генерация скриптов Ren\'Py'],
    features_en: ['Node graph canvas', 'Interactive branching logic', 'Ren\'Py script generation & export'],
    tags: ['Python', 'Node Editor', 'Ren\'Py', 'Desktop GUI', 'Story Graph'],
    url: 'https://github.com/komendant-zero/dialogue-engine',
    stars: 0
  }
];

let allProjectsData = [...curatedProjects];
let currentFilter = 'all';

function initSpotlightCards() {
  const cards = document.querySelectorAll('.project-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  const lang = window.getLanguage ? window.getLanguage() : 'ru';

  const filtered = allProjectsData.filter(item => {
    if (currentFilter === 'all') return true;
    if (currentFilter === 'flutter') return item.category === 'flutter' || item.tags.includes('Flutter') || item.tags.includes('Dart');
    if (currentFilter === 'python') return item.category === 'python' || item.tags.includes('Python');
    if (currentFilter === 'desktop') return item.platforms.some(p => ['Windows', 'Desktop', 'Ren\'Py'].includes(p));
    return true;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-dim); font-family: var(--font-mono);">${window.t('projects.empty')}</div>`;
    return;
  }

  grid.innerHTML = filtered.map((proj, idx) => {
    const num = String(idx + 1).padStart(2, '0');
    const platformBadges = proj.platforms.map(p => `<span class="badge-pill badge-platform">${p}</span>`).join('');
    const starBadge = `<span class="badge-pill badge-stars">★ ${proj.stars || 0}</span>`;
    
    const desc = (lang === 'ru' && proj.description_ru) ? proj.description_ru : (proj.description_en || proj.description || '');
    const features = (lang === 'ru' && proj.features_ru) ? proj.features_ru : (proj.features_en || proj.features || []);

    const featuresHtml = (features && features.length)
      ? `<ul class="card-features">${features.map(f => `<li class="card-feature-item">${f}</li>`).join('')}</ul>`
      : '';
    const tagsHtml = proj.tags.map(t => `<span class="tag">${t}</span>`).join('');

    return `
      <a class="project-card" href="${proj.url}" target="_blank" rel="noopener noreferrer">
        <div class="card-top">
          <span class="card-num">// ${num}</span>
          <div class="card-badges">
            ${platformBadges}
            ${starBadge}
          </div>
        </div>
        <div class="card-title">
          <span>${proj.name}</span>
          <svg class="arrow-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </div>
        <p class="card-desc">${desc}</p>
        ${featuresHtml}
        <div class="card-tags">
          ${tagsHtml}
        </div>
      </a>
    `;
  }).join('');

  initSpotlightCards();
}

async function syncGitHubRepos() {
  renderProjects(); // Instant render curated projects
  try {
    const res = await fetch('https://api.github.com/users/komendant-zero/repos?type=public&sort=updated&per_page=20');
    if (!res.ok) return;
    const repos = await res.json();

    const exclude = ['komendant-zero', 'komendant-zero.github.io'];
    
    repos.forEach(repo => {
      if (repo.fork || exclude.includes(repo.name)) return;
      
      const existing = allProjectsData.find(p => p.id === repo.name || p.name.toLowerCase() === repo.name.replace(/-/g, ' ').toLowerCase());
      if (existing) {
        existing.stars = repo.stargazers_count;
        if (repo.description && (!existing.description_en || existing.description_en.length < 20)) {
          existing.description_en = repo.description;
        }
      } else {
        const nameFormatted = repo.name.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
        const lang = repo.language || 'Code';
        const cat = (lang === 'Dart' || repo.name.includes('flutter')) ? 'flutter' : (lang === 'Python' ? 'python' : 'desktop');
        const tags = [lang, ...(repo.topics || [])];
        
        allProjectsData.push({
          id: repo.name,
          name: nameFormatted,
          category: cat,
          platforms: ['Open Source'],
          description_ru: repo.description || 'Открытый репозиторий komendant-zero на GitHub.',
          description_en: repo.description || 'Open source engineering repository by komendant-zero.',
          features_ru: ['Публичный репозиторий на GitHub'],
          features_en: ['Public Repository on GitHub'],
          tags: tags.filter(Boolean),
          url: repo.html_url,
          stars: repo.stargazers_count
        });
      }
    });

    renderProjects();
  } catch (e) {
    console.log('GitHub API offline or rate-limited; using fallback cache.');
  }
}

function initProjectsModule() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.getAttribute('data-filter');
      renderProjects();
    });
  });

  window.addEventListener('languageChanged', () => {
    renderProjects();
  });

  syncGitHubRepos();
}

window.initProjectsModule = initProjectsModule;
window.renderProjects = renderProjects;
