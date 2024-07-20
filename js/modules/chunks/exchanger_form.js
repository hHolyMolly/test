const body = window.document.body;

const form = body.querySelector('[data-exchanger-form="main"]');

if (form) {
  const exchangerElements = body.querySelectorAll('[data-exchanger-form="from"], [data-exchanger-form="to"]');

  if (exchangerElements.length > 0) {
    exchangerElements.forEach((elem) => {
      const button = elem.querySelector('[data-exchanger-form="target"]');
      const dropdown = elem.querySelector('[data-exchanger-form="dropdown"]');
      const close = elem.querySelector('[data-exchanger-form="close"]');

      if (button && dropdown && close) {
        button.addEventListener('click', () => {
          dropdown.classList.add('_active');
        });

        close.addEventListener('click', () => {
          dropdown.classList.remove('_active');
        });

        body.addEventListener('click', (e) => {
          const { target } = e;

          if (!target.closest('[data-exchanger-form="target"]') && !target.closest('[data-exchanger-form="dropdown"]')) {
            dropdown.classList.remove('_active');
          }
        });
      }
    });
  }
}
