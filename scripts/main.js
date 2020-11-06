'use strict';

const menuButton = document.querySelector('.menu-button');
const header = document.querySelector('.header');
const star = document.querySelectorAll('.star');

let count = 0;
star.forEach((el) => {
  el.style.animationDelay = `${(count += 0.2)}s`;
});

menuButton.addEventListener('click', function () {
  header.classList.toggle('header-active');
  menuButton.classList.toggle('menu-button-active');
});
var mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.arrow',
  },
  breakpoints: {
    // when window width is >= 320px
    540: {
      slidesPerView: 2,
    },
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
});
