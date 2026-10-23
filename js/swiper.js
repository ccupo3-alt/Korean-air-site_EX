const visualSwiper = new Swiper(".visualSwiper" , {
    loop: true,
    autoplay: {
        delay: 2500, // 2.5초
        disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
})
const cardSwiper = new Swiper('.cardSwiper', {
  slidesPerView: 3,    
  spaceBetween: 30,
  scrollbar: {
          el: '.swiper-scrollbar',
        },     
});