$(function () {
  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 20,
    simulateTouch: false
  })

  $('.--swiper-container .header-wrap .prev').click(() => {
    swiper.slidePrev()
  })

  $('.--swiper-container .header-wrap .next').click(() => {
    swiper.slideNext()
  })
})
