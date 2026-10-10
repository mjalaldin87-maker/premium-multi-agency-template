(() => {
  const buttons = [...document.querySelectorAll('[data-brand-choice]')];
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
      try { window.localStorage.setItem('your-brand-style', brand); }
      catch (error) { /* The switcher still works for this visit when storage is blocked. */ }
    }
  };
  let initial = document.documentElement.getAttribute('data-brand') || 'ultramarine';
  try {
    const stored = window.localStorage.getItem('your-brand-style');
    if (stored && Object.prototype.hasOwnProperty.call(names, stored)) initial = stored;
  } catch (error) { /* Use the document default if browser storage is unavailable. */ }
  apply(initial, false);
  buttons.forEach(button => button.addEventListener('click', () => apply(button.dataset.brandChoice, true)));
})();