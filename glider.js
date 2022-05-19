const carousel = document.querySelector(".glider_slide");
const numberOfSlides = 9;

new Glider(carousel, {
  slidesToScroll: numberOfSlides,
  slidesToShow: 1.1,
  draggable: true,
  dragVelocity: 10,
  responsive: [
    {
      breakpoint: 950,
      settings: {
        slidesToShow: 1,
        slidesToScroll: numberOfSlides,
        itemWidth: 200,
      },
    },
  ],
});
