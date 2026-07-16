/* =========================================
   Scroll reveal
========================================= */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.setAttribute('data-reveal', 'in');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('[data-reveal]').forEach((el) => revealObserver.observe(el));

/* =========================================
   Mobile nav toggle
========================================= */
(function initMobileNav() {
  const toggle = document.getElementById('nav-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  if (!toggle || !mobileNav) return;

  function closeMobileNav() {
    mobileNav.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle.addEventListener('click', () => {
    const isOpen = !mobileNav.hidden;
    mobileNav.hidden = isOpen;
    toggle.setAttribute('aria-expanded', String(!isOpen));
  });

  mobileNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMobileNav);
  });
})();

/* =========================================
   Terminal typing animation
========================================= */
const PROMPT_TEXT = 'oscar@backend:~$';

const TERMINAL_LINES = [
  { cmd: ' whoami', out: ['Óscar Álvarez Oliveira'] },
  { cmd: ' cat stack.txt', out: ['Java · Spring Boot · PHP/Symfony · Angular'] },
  { cmd: ' ./status.sh', out: ['[OK] Backend dev en prácticas @ Macrotest', '[OK] DevOps & Cloud: Azure · AWS · CI/CD'] },
];

(function initTerminal() {
  const terminalBody = document.getElementById('terminal-body');
  if (!terminalBody) return;

  const segments = [];
  TERMINAL_LINES.forEach((line) => {
    segments.push({ type: 'cmd', text: line.cmd });
    line.out.forEach((text) => segments.push({ type: 'out', text }));
  });

  const cursor = document.createElement('span');
  cursor.className = 'term-cursor';

  const CHAR_DELAY = 26;
  const START_DELAY = 500;
  let segIndex = 0;
  let charIndex = 0;
  let textSpan = null;

  function appendPromptRow(promptText) {
    const row = document.createElement('div');
    const prompt = document.createElement('span');
    prompt.className = 'term-prompt';
    prompt.textContent = promptText;
    row.appendChild(prompt);
    row.appendChild(cursor);
    terminalBody.appendChild(row);
    return row;
  }

  function startSegment() {
    const seg = segments[segIndex];

    if (seg.type === 'cmd') {
      const row = appendPromptRow(PROMPT_TEXT);
      textSpan = document.createElement('span');
      textSpan.className = 'term-cmd';
      row.insertBefore(textSpan, cursor);
    } else {
      const row = document.createElement('div');
      textSpan = document.createElement('span');
      textSpan.className = 'term-out';
      row.appendChild(textSpan);
      row.appendChild(cursor);
      terminalBody.appendChild(row);
    }

    charIndex = 0;
  }

  function finish() {
    appendPromptRow(PROMPT_TEXT);
  }

  function tick() {
    const seg = segments[segIndex];
    if (charIndex < seg.text.length) {
      charIndex++;
      textSpan.textContent = seg.text.slice(0, charIndex);
      setTimeout(tick, CHAR_DELAY);
      return;
    }
    segIndex++;
    if (segIndex < segments.length) {
      startSegment();
      setTimeout(tick, CHAR_DELAY);
    } else {
      finish();
    }
  }

  startSegment();
  setTimeout(tick, START_DELAY);
})();
