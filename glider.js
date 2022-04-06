const carousel = document.querySelector('.glider_slide')

new Glider(carousel, {
  slidesToScroll: 1,
  slidesToShow: 2.5,
  draggable: true,
  arrows: {
    prev: '.carousel-prev',
    next: '.carousel-next'
  },
  responsive: [
    {
      breakpoint: 682,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 1,
      },
    },
  ]
})