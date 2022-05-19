const carousel = document.querySelector(".glider_slide");
const numberOfSlides = 9;

new Glider(carousel, {
  slidesToScroll: numberOfSlides,
  slidesToShow: 1.5,
  draggable: true,
  // arrows: {
  //   prev: ".carousel-prev",
  //   next: ".carousel-next",
  // },
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 0.5,
        slidesToScroll: numberOfSlides,
        itemWidth: 200,
      },
    },
  ],
});
