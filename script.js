// Mobile menu toggle
document.addEventListener('click', (e) => {
  const toggle = e.target.closest('.menu-toggle');
  if (toggle) {
    document.querySelector('.nav-links').classList.toggle('show');
  }
});

// Current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scroll for in-page links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    const target = document.querySelector(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      document.querySelector('.nav-links')?.classList.remove('show');
    }
  });
});
