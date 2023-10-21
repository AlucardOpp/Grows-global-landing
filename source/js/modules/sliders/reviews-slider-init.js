const slider = document.querySelector('.reviews__slider');

const reviewsSlider = () => {
  if (!slider) {
    return;
  }

  // eslint-disable-next-line
  const swiper = new Swiper(slider, {
    slidesPerView: 'auto',
    loop: true,
    centeredSlides: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
};

export {reviewsSlider};
