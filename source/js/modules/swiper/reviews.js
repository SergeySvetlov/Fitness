const initeSwiperReviews = () => {
  const swiperReviews = new Swiper('.reviews__list-wrapper', {
    slidesPerView: 1,
    autoHeight: true,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
};

export {initeSwiperReviews};
