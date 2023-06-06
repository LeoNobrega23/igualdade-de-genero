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

      },
      768: {
        slidesPerView: 2,

    },
    991: {
      slidesPerView: 1,
    },
    1200: {
      slidesPerView: 1,
    }

  }});

  AOS.init();
