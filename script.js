(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      toggle.setAttribute('aria-label', open ? 'Open navigation' : 'Close navigation');
      nav.classList.toggle('is-open', !open);
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation');
      nav.classList.remove('is-open');
    }));
    window.addEventListener('resize', () => {
      if (window.innerWidth > 760) {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
      }
    });
  }
  document.querySelectorAll('[data-year]').forEach(node => { node.textContent = new Date().getFullYear(); });
  const revealTargets = document.querySelectorAll('.service-row, .project-card, .feature-card, .work-item, .price-card');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealTargets.forEach(node => observer.observe(node));
  } else {
    revealTargets.forEach(node => node.classList.add('is-visible'));
  }
  const contactForm = document.querySelector('[data-contact-form]');
  if (contactForm) {
    contactForm.addEventListener('submit', event => {
      if (!contactForm.checkValidity()) {
        event.preventDefault();
        contactForm.reportValidity();
        return;
      }
      const status = contactForm.querySelector('.form-status');
      if (status) status.textContent = 'Sending your enquiry…';
    });
  }
})();