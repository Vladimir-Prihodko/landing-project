$('.slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        draggable: true,
        autoplay: true,
        autoplaySpeed: 2000,
      }
    }
  ]
});