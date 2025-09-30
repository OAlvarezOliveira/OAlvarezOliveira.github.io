// Año dinámico
document.getElementById('year').textContent = new Date().getFullYear();

// Animación reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if(e.isIntersecting){
      e.target.classList.add('in-view');
      observer.unobserve(e.target);
    }
  });
}, {threshold:0.1});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Tema claro/oscuro
const root = document.documentElement;
const toggle = document.getElementById('themeToggle');
if(localStorage.getItem('theme')==='light' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: light)').matches)){
  root.classList.add('light');
  toggle.textContent='☀️';
}
toggle.addEventListener('click',()=>{
  root.classList.toggle('light');
  if(root.classList.contains('light')){
    toggle.textContent='☀️';
    localStorage.setItem('theme','light');
  } else {
    toggle.textContent='🌙';
    localStorage.setItem('theme','dark');
  }
});
