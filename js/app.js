/**
 * app.js — Main Application Entrypoint, Toast Notifications & Utilities
 */

// Toast notification system
function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <span>${message}</span>
  `;
  container.appendChild(toast);

  setTimeout(() => toast.classList.add('show'), 10);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

function copyContact(text) {
  const prefix = window.t ? window.t('toast.copied') : 'Copied to clipboard: ';
  navigator.clipboard.writeText(text).then(() => {
    showToast(prefix + text);
  }).catch(() => {
    showToast(text);
  });
}

// Live UTC clock in footer
function initLiveClock() {
  const clock = document.getElementById('live-clock');
  const statusEl = document.getElementById('status-text');

  function updateClock() {
    if (clock) {
      const now = new Date();
      const timeStr = now.toISOString().substring(11, 19);
      clock.textContent = `UTC ${timeStr}`;
    }
  }

  setInterval(updateClock, 1000);
  updateClock();
}

// Main initialization
document.addEventListener('DOMContentLoaded', () => {
  if (typeof window.initI18n === 'function') {
    window.initI18n();
  }
  if (typeof window.initCanvasBackground === 'function') {
    window.initCanvasBackground();
  }
  if (typeof window.initProjectsModule === 'function') {
    window.initProjectsModule();
  }
  if (typeof window.initTerminal === 'function') {
    window.initTerminal();
  }
  initLiveClock();
});

window.showToast = showToast;
window.copyContact = copyContact;
