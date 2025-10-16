/* Cambio de tema */
const body = document.body;
const themeBtn = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("theme");
if (savedTheme) body.className = savedTheme;
themeBtn.addEventListener("click", () => {
  body.classList.toggle("light");
  body.classList.toggle("dark");
  localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light");
});

/* Navegación lateral */
const navLinks = document.querySelectorAll('.side-nav a');
const sections = document.querySelectorAll('main section');
navLinks.forEach(link=>{
  link.addEventListener('click',e=>{
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});
window.addEventListener('scroll',()=>{
  let current='';
  sections.forEach(sec=>{
    const top=window.scrollY;
    if(top>=sec.offsetTop-200) current=sec.id;
  });
  navLinks.forEach(l=>{
    l.classList.remove('active');
    if(l.getAttribute('href')==='#'+current) l.classList.add('active');
  });
});
/* Tabs del Tech Stack */
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    contents.forEach((c) => c.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById(tab.dataset.target).classList.add("active");
  });
});
