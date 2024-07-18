import { bodyLock, bodyUnLock } from '../functions/body_lock.js';

const body = window.document.body;

const headerMain = body.querySelector('.header-main');

if (headerMain) {
  const burgerIcon = headerMain.querySelector('[data-menu="toggle"]');
  const dropdown = headerMain.querySelector('[data-menu="dropdown"]');

  if (burgerIcon && dropdown) {
    burgerIcon.addEventListener('click', () => {
      burgerIcon.classList.toggle('_active');
      dropdown.classList.toggle('_active');
      headerMain.classList.toggle('_active');

      if (headerMain.classList.contains('_active')) {
        bodyLock();
      } else {
        bodyUnLock();
      }
    });
  }
}
