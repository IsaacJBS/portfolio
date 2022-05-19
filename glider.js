const carousel = document.querySelector(".glider_slide");

new Glider(carousel, {
  slidesToScroll: 9,
  slidesToShow: 1.5,
  draggable: true,
  arrows: {
    prev: ".carousel-prev",
    next: ".carousel-next",
  },
});
