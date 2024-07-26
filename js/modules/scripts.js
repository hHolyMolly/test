const body = window.document.body;

const exchangePrompt = body.querySelector('.content-exchange-course-info');
if (exchangePrompt) {
  const button = body.querySelector('.content-exchange-course-info__button');
  const close = body.querySelector('.content-exchange-course-info__close');
  const dropdown = body.querySelector('.content-exchange-course-info__dropdown');

  if (button && close && dropdown) {
    button.addEventListener('click', () => {
      dropdown.classList.toggle('_active');
    });

    close.addEventListener('click', () => {
      dropdown.classList.remove('_active');
    });

    body.addEventListener('click', (e) => {
      const { target } = e;

      if (!target.closest('.content-exchange-course-info__button')) {
        dropdown.classList.remove('_active');
      }
    });
  }
}

let copyTimeout = null;

document.body.addEventListener('click', (e) => {
  const { target } = e;

  const copyButton = target.closest('[data-copy]');
  if (copyButton) {
    const copyValue = copyButton.getAttribute('data-copy');

    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(copyValue)
        .then(() => {
          clearTimeout(copyTimeout);
          copyButton.classList.add('_active');

          copyTimeout = setTimeout(() => {
            copyButton.classList.remove('_active');
          }, 2000);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }
});
