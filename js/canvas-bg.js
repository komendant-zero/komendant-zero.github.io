/**
 * canvas-bg.js — Interactive Dot-Grid Reactive Background Canvas
 */

function initCanvasBackground() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = 0;
  let height = 0;
  let mouseX = -1000;
  let mouseY = -1000;
  const dotSpacing = 32;

  function resizeCanvas() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  window.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  window.addEventListener('mouseleave', () => {
    mouseX = -1000;
    mouseY = -1000;
  });

  function drawCanvas() {
    ctx.clearRect(0, 0, width, height);

    const cols = Math.ceil(width / dotSpacing);
    const rows = Math.ceil(height / dotSpacing);

    for (let i = 0; i <= cols; i++) {
      for (let j = 0; j <= rows; j++) {
        const x = i * dotSpacing;
        const y = j * dotSpacing;

        const dx = x - mouseX;
        const dy = y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let radius = 1;
        let alpha = 0.12;

        if (dist < 180) {
          const factor = 1 - dist / 180;
          radius = 1 + factor * 1.8;
          alpha = 0.12 + factor * 0.45;
          ctx.fillStyle = `rgba(79, 140, 255, ${alpha})`;
        } else {
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        }

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    requestAnimationFrame(drawCanvas);
  }

  drawCanvas();
}

window.initCanvasBackground = initCanvasBackground;
