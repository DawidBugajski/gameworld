export const gallerySettings = (screenshots) => {
  return {
    infinite: false,
    swipeToSlide: true,
    speed: 1500,
    autoplay: true,
    slidesToShow: screenshots.length <= 3 ? screenshots.length : 3,
    autoplaySpeed: 5000,
    arrows: false,
    rows: screenshots.length <= 3 ? 1 : 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          rows: 1,
          autoplay: false,
          infinite: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          rows: 1,
          autoplay: false,
          infinite: true,
        },
      },
    ],
  };
};
