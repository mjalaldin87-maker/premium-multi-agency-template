(() => {
  const buttons = [...document.querySelectorAll('[data-brand-choice]')];
  if (!buttons.length) return;

  const status = document.querySelector('.switcher-status');
  const names = {
    ultramarine: 'Studio',
    rose: 'Culture',
    forest: 'Grounded',
    mono: 'Essential'
  };

  const apply = (brand, remember) => {
    if (!Object.prototype.hasOwnProperty.call(names, brand)) return;
    document.documentElement.setAttribute('data-brand', brand);
    buttons.forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.brandChoice === brand));
    });
    if (status) status.textContent = names[brand] + ' style selected. Choose a style to preview the site.';
    if (remember) {
      try {
        window.localStorage.setItem('your-brand-style', brand);
      } catch (error) {
        /* The live switcher remains usable when browser storage is blocked. */
      }
    }
  };

  let initial = 'ultramarine';
  try {
    const stored = window.localStorage.getItem('your-brand-style');
    if (stored && Object.prototype.hasOwnProperty.call(names, stored)) initial = stored;
  } catch (error) {
    /* Use the default when storage is blocked or unavailable. */
  }
  apply(initial, false);
  buttons.forEach(button => button.addEventListener('click', () => apply(button.dataset.brandChoice, true)));
})();