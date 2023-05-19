var swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 1,
    freeMode: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    breakpoints: {
      450: {
        slidesPerView: 1,
    spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 19,
    },
    991: {
      slidesPerView: 1,
    },
    1200: {
      slidesPerView: 1,
    }

  }});