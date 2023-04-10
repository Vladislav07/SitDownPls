const { notify } = require('browser-sync');

const swiper = new Swiper('.hero__swiper', {
  slidesPerView: 1,
  loop: true,
  // пагинация
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const swiperOffers = new Swiper('.offers__container', {
  slidesPerGroup: 3,
  slidesPerView: 'auto',
  spaceBetween: 30,
  navigation: {
    nextEl: '.offers__container > .swiper-button-next',
    prevEl: '.offers__container > .swiper-button-prev',
  },
});

const swiperUseful = new Swiper('.useful__container', {
  slidesPerView: 1,
  //loop: true,
  // навигация
  navigation: {
    nextEl: '.useful__container > .swiper-button-next',
    prevEl: '.useful__container > .swiper-button-prev',
  },
});

//Modal

const modal = document.querySelector('#openModal');
const btnOpenBuy = document.querySelector('.item__btn__buy');
const btnClose = document.querySelector('.modal__close');
const btnOpenClick = document.querySelector('.item__btn__toBasket');
const btnOpenPhoto = document.querySelector('.item__photoMain');
const contextForm = document.querySelector('.modal__content__one');
const contextBacket = document.querySelector('.modal__content__two');
const contextPhoto = document.querySelector('.modal__content__three');
const dialog = document.querySelector('.modal__dialog');

btnOpenBuy.addEventListener('click', OpenForm);
btnOpenClick.addEventListener('click', OpenBacket);
btnOpenPhoto.addEventListener('click', OpenPhoto);
btnClose.addEventListener('click', Close);

function OpenForm() {
  contextForm.style.display = 'block';
  contextPhoto.style.display = 'none';
  contextBacket.style.display = 'none';
  modal.style.display = 'block';
}

function OpenBacket() {
  contextForm.style.display = 'none';
  contextPhoto.style.display = 'none';
  contextBacket.style.display = 'block';
  modal.style.display = 'block';
}

function OpenPhoto() {
  dialog.style.width = '1280px';
  dialog.style.height = '684px';
  dialog.style.left = 'calc(50% - 640px)';

  contextForm.style.display = 'none';
  contextBacket.style.display = 'none';
  contextPhoto.style.display = 'block';
  modal.style.display = 'block';
}

function Close() {
  modal.style.display = 'none';
}

window.addEventListener('click', (event) => {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});

// let burger = document.querySelector(".burger");
// let menu = document.querySelector(".header__nav");
// let menuLinks=document.querySelectorAll(".nav__link");
// let isState=false;

// burger.addEventListener("click", function () {
//   burger.classList.toggle("burger__active");
//   menu.classList.toggle("header__nav--active");
//   document.body.classList.toggle('stop-scroll');
//   requestAnimationFrame(Play);

// });

// menuLinks.forEach(function(el){
//   el.addEventListener("click",
//   function(){
//     burger.classList.remove("burger__active");
//     menu.classList.remove("header__nav--active");
//     document.body.classList.remove('stop-scroll');
//   })
// })

// let btnSearh = document.querySelector(".search");
// let fieldSearch=document.querySelector(".header__search");
// let btnCloseSearch=document.querySelector(".header__close-search")

// btnSearh.addEventListener("click",
// function () {

//   fieldSearch.classList.add("header__search--active")
// })

// btnCloseSearch.addEventListener("click",
// function () {
//   fieldSearch.classList.remove("header__search--active")

// })

// const block = document.querySelector('.nav');

//   const frameBlock = new KeyframeEffect(
//     block,
//     [
//        {
//         transform: 'translate(0,-100vh)',
//       },
//       {
//         transform: 'translate(0, 0)',
//       },
//     ],
//     { duration: 1000 }
//   );

//   const animation = new Animation(frameBlock, document.timeline);
//   function Play() {
//     animation.play();
//   }
