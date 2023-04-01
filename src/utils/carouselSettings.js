export const carouselSettings = {
  infinite: true,
  swipeToSlide: true,
  speed: 1500,
  autoplay: true,
  slidesToShow: 8,
  autoplaySpeed: 5000,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 1536,
      settings: {
        slidesToShow: 6,
        infinite: true,
        adaptiveHeight: true,
        speed: 1000,
      },
    },
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 4,
        infinite: true,
        adaptiveHeight: true,
        speed: 700,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        initialSlide: 0,
        speed: 500,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
        initialSlide: 0,
        speed: 500,
      },
    },
  ],
};
