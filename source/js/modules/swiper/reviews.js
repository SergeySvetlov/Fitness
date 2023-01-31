const initeSwiperReviews = () => {
  const swiperReviews = new Swiper('.reviews__list-wrapper', {
    slidesPerView: 1,
    autoHeight: true,
    loop: false,
    navigation: {
      nextEl: '.reviews__button--next',
      prevEl: '.reviews__button--previous',
    },
  });
};

export {initeSwiperReviews};
