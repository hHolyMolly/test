const body = window.document.body;

const selects = body.querySelectorAll('[data-select="body"]');
if (selects.length > 0) {
  selects.forEach((select) => {
    const button = select.querySelector('[data-select="toggle"]');

    button.addEventListener('click', () => {
      const window = button.nextElementSibling;

      const dropdowns = body.querySelectorAll('[data-select="list"]');
      dropdowns.forEach((dropdown) => {
        dropdown.classList.remove('_active');
      });

      window.classList.toggle('_active');
    });
  });

  body.addEventListener('click', (e) => {
    const { target } = e;

    const buttons = body.querySelectorAll('[data-select="toggle"]');
    buttons.forEach((button) => {
      const window = button.nextElementSibling;

      if (!target.closest('[data-select="toggle"]') && !target.closest('[data-select="list"]')) {
        window.classList.remove('_active');
      }

      if (target.closest('[data-select="list"] li')) {
        const value = target.closest('[data-select="body"]').querySelector('[data-select="value"]');
        value.innerText = target.innerText;
        window.classList.remove('_active');
      }
    });
  });
}
