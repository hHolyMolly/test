const body = window.document.body;

(() => {
  const slidersArr = body.querySelectorAll('.favorite-news-slider.swiper');
  const arrowPrev = body.querySelectorAll('.favorite-news-slider__arrows .swiper-button-prev');
  const arrowNext = body.querySelectorAll('.favorite-news-slider__arrows .swiper-button-next');

  slidersArr.forEach((slider, idx) => {
    new Swiper(slider, {
      speed: 500,
      spaceBetween: 20,
      slidesPerView: 1.1,

      navigation: {
        prevEl: arrowPrev[idx],
        nextEl: arrowNext[idx],
      },

      breakpoints: {
        1199.98: {
          spaceBetween: 30,
          slidesPerView: 2.26,
        },

        991.98: {
          spaceBetween: 20,
        },

        767.98: {
          spaceBetween: 30,
          slidesPerView: 2.26,
        },

        479.98: {
          spaceBetween: 30,
          slidesPerView: 1.5,
        },
      },
    });
  });
})();
