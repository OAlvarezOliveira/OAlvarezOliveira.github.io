/* =========================================
   🎨 CAMBIO DE TEMA (con transición suave)
========================================= */
const body = document.body;
const themeBtn = document.getElementById("themeToggle");

body.style.transition = "background 0.25s ease, color 0.25s ease";

let savedTheme = "dark";
try { savedTheme = localStorage.getItem("theme") || "dark"; } catch (e) {}
body.className = savedTheme;

themeBtn.textContent = savedTheme === "dark" ? "🌙" : "☀️";

themeBtn.addEventListener("click", () => {
  body.classList.toggle("light");
  body.classList.toggle("dark");

  const newTheme = body.classList.contains("dark") ? "dark" : "light";
  try { localStorage.setItem("theme", newTheme); } catch (e) {}

  themeBtn.textContent = newTheme === "dark" ? "🌙" : "☀️";
});

/* =========================================
   🧭 NAVEGACIÓN — SCROLL SUAVE REAL
========================================= */
const sideNavLinks = document.querySelectorAll('.side-nav a');
const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
const allNavLinks = [...sideNavLinks, ...mobileNavLinks];

function smoothScrollTo(e) {
  e.preventDefault();

  const targetId = this.getAttribute('href');
  const targetSection = document.querySelector(targetId);
  if (!targetSection) return;

  let offset = 0;
  const mobileNav = document.querySelector('.mobile-nav');

  if (window.innerWidth <= 768 && mobileNav) {
    offset = mobileNav.offsetHeight + 10; 
  }

  const elementPosition = targetSection.offsetTop;
  const offsetPosition = elementPosition - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

// Sidebar
sideNavLinks.forEach(link => {
  link.addEventListener('click', smoothScrollTo);
});

// Móvil (cierra menú)
mobileNavLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    smoothScrollTo.call(this, e);

    if (window.innerWidth <= 768) {
      const mobileNav = document.querySelector('.mobile-nav');
      mobileNav.style.transform = 'translateY(-100%)';
    }
  });
});

/* =========================================
   ✨ HIGHLIGHT SECCIÓN ACTIVA
========================================= */
const sections = document.querySelectorAll('main section');

function highlightActiveSection() {
  let current = '';
  const scrollPosition = window.scrollY;

  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const offset = window.innerWidth <= 768 ? 100 : 200;

    if (scrollPosition >= top - offset && scrollPosition < top + height - offset) {
      current = section.id;
    }
  });

  if (!current && scrollPosition < 100) {
    current = sections[0].id;
  }

  allNavLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
}

let scrollTimeout;
window.addEventListener('scroll', () => {
  if (scrollTimeout) cancelAnimationFrame(scrollTimeout);
  scrollTimeout = requestAnimationFrame(highlightActiveSection);
});

window.addEventListener('load', highlightActiveSection);

/* =========================================
   📑 TABS
========================================= */
const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tabContents.forEach(c => c.classList.remove("active"));

    tab.classList.add("active");
    const targetContent = document.getElementById(tab.dataset.target);
    if (targetContent) targetContent.classList.add("active");
  });
});

/* =========================================
   📱 MENU DESLIZANTE MÓVIL
========================================= */
let lastScroll = 0;
const mobileNav = document.querySelector('.mobile-nav');

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;

  if (window.innerWidth <= 768) {
    if (currentScroll > lastScroll && currentScroll > 100) {
      mobileNav.style.transform = 'translateY(-100%)';
    } else {
      mobileNav.style.transform = 'translateY(0)';
    }
  }

  lastScroll = currentScroll;
});

/* =========================================
   ⚡ LAZY LOADING DE IMÁGENES
========================================= */
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}
