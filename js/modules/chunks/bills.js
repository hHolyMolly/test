const body = window.document.body;

const select = body.querySelector('.popup-bills-select');
if (select) {
  const button = select.querySelector('.popup-bills-select__button');
  const close = select.querySelector('.popup-bills-select__close');
  const dropdown = select.querySelector('.popup-bills-select__dropdown');

  if (button && close && dropdown) {
    button.addEventListener('click', () => {
      dropdown.classList.toggle('_active');
    });

    close.addEventListener('click', () => {
      dropdown.classList.remove('_active');
    });

    body.addEventListener('click', (e) => {
      const { target } = e;

      if (!target.closest('.popup-bills-select__button') && !target.closest('.popup-bills-select__dropdown')) {
        dropdown.classList.remove('_active');
      }

      if (target.closest('.popup-bills-select__list li')) {
        const input = button.querySelector('input');
        if (input) {
          input.value = target.innerText;
          dropdown.classList.remove('_active');
        }
      }
    });
  }
}
