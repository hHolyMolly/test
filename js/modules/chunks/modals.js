import { bodyLock, bodyUnLock } from '../functions/body_lock.js';

const body = window.document.body;

const links = body.querySelectorAll('[data-popup-open]');

if (links.length > 0) {
  let unlock = true;

  const parentContainer = body.getElementById('modal-wrapper');
  const time = parentContainer.dataset.popupSpeed ? Number(parentContainer.dataset.popupSpeed) : 500;

  links.forEach((link) => {
    link.addEventListener('click', function (e) {
      const popupName = this.getAttribute('data-popup');
      const currentPopup = body.getElementById(popupName);
      popupOpen(currentPopup);
    });
  });

  const close = body.querySelectorAll('[data-popup-close]');

  close.forEach((item) => {
    item.addEventListener('click', function (e) {
      popupClose(item.closest('.popup'));
    });
  });

  function popupOpen(currentPopup) {
    if (currentPopup && unlock) {
      const popupActive = body.querySelector('.popup._active');

      popupActive ? popupClose(popupActive, false) : modalBodyLock();

      currentPopup.classList.add('_active');

      currentPopup.addEventListener('click', function (e) {
        if (!e.target.closest('.popup-body')) {
          popupClose(e.target.closest('.popup'));
        }
      });
    }
  }

  function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
      popupActive.classList.remove('_active');

      if (doUnlock) modalBodyUnLock();
    }
  }

  function modalBodyLock() {
    bodyLock();

    unlock = false;
    setTimeout(() => (unlock = true), time);
  }

  function modalBodyUnLock() {
    setTimeout(() => bodyUnLock(), time);

    unlock = false;
    setTimeout(() => (unlock = true), time);
  }

  body.addEventListener('keydown', function (e) {
    if (e.code === 'Escape') {
      const popupActive = body.querySelector('.popup._active');
      popupClose(popupActive);
    }
  });

  (function () {
    if (!Element.prototype.closest) {
      Element.prototype.closest = function (css) {
        var node = this;
        while (node) {
          if (node.matches(css)) return node;
          else node = node.parentElement;
        }
        return null;
      };
    }
  })();
  (function () {
    if (!Element.prototype.matches) {
      Element.prototype.mathes =
        Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector;
    }
  })();
}
