const swiper = new Swiper('.hero__swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const swiperOffers = new Swiper('.offers__container', {
  slidesPerGroup: 3,
  slidesPerView: 1,
  spaceBetween: 32,
  breakpoints: {
    1280: {
      slidesPerView: 3,
    },

    992: {
      slidesPerView: 3,
    },
    575: {
      slidesPerView: 2,
    },
    275: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
  },
  navigation: {
    nextEl: '.offers__container > .swiper-button-next',
    prevEl: '.offers__container > .swiper-button-prev',
  },
});

const swiperUseful = new Swiper('.useful__container', {
  slidesPerGroup: 1,
  slidesPerView: 2,
  spaceBetween: 32,
  loop: true,
  breakpoints: {
    1280: {
      slidesPerView: 2,
    },

    992: {
      slidesPerView: 3,
    },
    575: {
      slidesPerView: 2,
    },
    275: {
      slidesPerView: 1,
    },
  },
  navigation: {
    nextEl: '.useful__container > .swiper-button-next',
    prevEl: '.useful__container > .swiper-button-prev',
  },
});

const swiperProducts = new Swiper('.products__swiper', {
  slidesPerGroup: 4,
  slidesPerView: 1,
  spaceBetween: 32,
  breakpoints: {
    1280: {
      //  slidesPerGroup: 1,
      slidesPerView: 4,
    },

    992: {
      slidesPerView: 3,
    },
    575: {
      slidesPerView: 2,
    },
    275: {
      slidesPerView: 2,
      spaceBetween: 16
    },
  },
  navigation: {
    nextEl: '.products__swiper > .swiper-button-next',
    prevEl: '.products__swiper > .swiper-button-prev',
  },
});
