// Año en footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Reveal
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in-view');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Tema claro/oscuro (dark por defecto)
const root = document.documentElement;
const toggle = document.getElementById('themeToggle');
const saved = localStorage.getItem('theme');

if (saved === 'light') {
  root.classList.add('light');
  root.classList.remove('dark');
  toggle.textContent = '☀️';
} else {
  root.classList.add('dark');
  root.classList.remove('light');
  toggle.textContent = '🌙';
}

toggle.addEventListener('click', () => {
  if (root.classList.contains('light')) {
    root.classList.remove('light');
    root.classList.add('dark');
    toggle.textContent = '🌙';
    localStorage.setItem('theme', 'dark');
  } else {
    root.classList.remove('dark');
    root.classList.add('light');
    toggle.textContent = '☀️';
    localStorage.setItem('theme', 'light');
  }
});

// Tabs Tech Stack
const tabs = document.querySelectorAll('.tab');
const panes = document.querySelectorAll('.tab-content');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    panes.forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(tab.dataset.target).classList.add('active');
  });
});

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    e.preventDefault();
    const el = document.querySelector(a.getAttribute('href'));
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
