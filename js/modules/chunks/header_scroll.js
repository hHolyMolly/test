const body = window.document.body;

const headerScroll = body.querySelector('.header-scroll');
const headerMain = body.querySelector('.header-main');
const headerTopAuth = body.querySelector('.header-auth');

if (headerScroll && headerMain && headerTopAuth) {
  const headerRight = headerMain.querySelector('.header-main__right');
  const headerMainTime = headerMain.querySelector('.header-main__time');

  const callback = function (entries, observer) {
    if (entries[0].isIntersecting) {
      headerMain.classList.remove('_scroll');
      if (window.innerWidth > 991.98) {
        headerMainTime.style.display = 'block';

        const headerMainAuth = headerMain.querySelector('.header-main__right .header-auth');
        if (headerMainAuth) {
          headerMainAuth.remove();
        }
      }
    } else {
      headerMain.classList.add('_scroll');
      if (window.innerWidth > 991.98) {
        headerMainTime.style.display = 'none';

        if (headerRight) {
          headerRight.appendChild(headerTopAuth.cloneNode(true));
        }
      }
    }
  };

  const headerObserver = new IntersectionObserver(callback);
  headerObserver.observe(headerScroll);
}

if (headerTopAuth) {
  const headerMenuContent = body.querySelector('.header-main-menu__auth');

  if (headerMenuContent) {
    const funcAuthAction = () => {
      const headerMainAuth = body.querySelector('.header-main__right').querySelector('.header-auth');
      if (headerMainAuth) {
        const headerContentAuth = headerMenuContent.querySelector('.header-main-menu__auth .header-auth');

        if (window.innerWidth > 639.98) {
          if (headerContentAuth) {
            headerContentAuth.remove();
          }
        } else {
          if (!headerContentAuth) {
            headerMenuContent.appendChild(headerMainAuth.cloneNode(true));
          }
        }
      }
    };

    funcAuthAction();
    window.addEventListener('resize', funcAuthAction);
  }
}
