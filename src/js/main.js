var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
});

var swiper1 = new Swiper(".productSwiper", {
  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 15,
    },
    321: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 15,
    },
    712: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 16,
    },
    1280: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 30,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
});

var swiper2 = new Swiper(".productDetailThumbsSwiper", {
  slidesPerView: 3,
  spaceBetween: 11,
  direction: "vertical"
});

var swiper3 = new Swiper(".productDetailSwiper", {
  slidesPerView: 1
});

var swiper4 = new Swiper(".productColorsSwiper", {
  slidesPerView: 11,
  spaceBetween: 10
});