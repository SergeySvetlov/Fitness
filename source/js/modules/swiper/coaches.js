const initeSwiperCoaches = () => {
  const swiperCoaches = new Swiper('.coaches__slider-container', {
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: '.coaches__button--next',
      prevEl: '.coaches__button--prev',
    },
    breakpoints: {
      767: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1199: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });
};

export {initeSwiperCoaches};
