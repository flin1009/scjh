// Global JavaScript for SCJH Portal
document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('show');
    });
  }

  // 2. Countdown Timer
  // 會考通常於每年 5 月中旬（例如 2027 年 5 月 15-16 日舉行）
  const examDate = new Date('2027-05-15T08:00:00+08:00');
  const daysEl = document.getElementById('countdown-days');

  function updateCountdown() {
    if (!daysEl) return;
    const now = new Date();
    const diff = examDate - now;
    if (diff > 0) {
      const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
      daysEl.textContent = days;
    } else {
      daysEl.textContent = '0';
    }
  }
  updateCountdown();

  // 3. Highlight current nav item
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-item a');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    if (currentPath.endsWith(href) || (href === 'index.html' && (currentPath.endsWith('/') || currentPath.endsWith('index.html')))) {
      link.classList.add('active');
    }
  });
});
