const carousel = document.querySelector('.glider_slide')

new Glider(carousel, {
  slidesToScroll: 1,
  slidesToShow: 2.5,
  draggable: true,
  arrows: {
    prev: '.carousel-prev',
    next: '.carousel-next'
  },
})