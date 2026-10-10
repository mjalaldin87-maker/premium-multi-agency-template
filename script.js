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
      if (window.innerWidth > 700) {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
      }
    });
  }

  document.querySelectorAll('[data-year]').forEach(node => {
    node.textContent = new Date().getFullYear();
  });

  const brandButtons = [...document.querySelectorAll('[data-brand-choice]')];
  const brandStatus = document.querySelector('.switcher-status');
  const brandNames = {
    ultramarine: 'Studio',
    rose: 'Culture',
    forest: 'Grounded',
    mono: 'Essential'
  };
  const applyBrand = (brand, shouldRemember) => {
    if (!Object.prototype.hasOwnProperty.call(brandNames, brand)) return;
    document.documentElement.setAttribute('data-brand', brand);
    brandButtons.forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.brandChoice === brand));
    });
    if (brandStatus) brandStatus.textContent = brandNames[brand] + ' style selected. Choose a style to preview the site.';
    if (shouldRemember) {
      try {
        window.localStorage.setItem('your-brand-style', brand);
      } catch (error) {
        /* Storage may be blocked; the switcher still works for this visit. */
      }
    }
  };

  if (brandButtons.length) {
    let savedBrand = 'ultramarine';
    try {
      const storedBrand = window.localStorage.getItem('your-brand-style');
      if (storedBrand && Object.prototype.hasOwnProperty.call(brandNames, storedBrand)) savedBrand = storedBrand;
    } catch (error) {
      /* Storage may be blocked; use the default style. */
    }
    applyBrand(savedBrand, false);
    brandButtons.forEach(button => {
      button.addEventListener('click', () => applyBrand(button.dataset.brandChoice, true));
    });
  }

  const revealTargets = document.querySelectorAll('.service-row, .project-card, .process-grid article, .feature-card, .work-item, .price-card');
  revealTargets.forEach(node => node.classList.add('reveal'));
  if ('IntersectionObserver' in window) {
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
      const status = contactForm.querySelector('.form-status');
      if (!contactForm.checkValidity()) {
        event.preventDefault();
        contactForm.reportValidity();
        return;
      }
      if (status) status.textContent = 'Sending your message…';
    });
  }
})();