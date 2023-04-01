export const dlcCarouselSettings = (dlc) => {
  return {
    className: 'dlc__carousel',
    slidesToShow: dlc.length >= 8 ? 8 : dlc.length,
    arrows: false,
    autoplay: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: dlc.length >= 6 ? 6 : dlc.length,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: dlc.length >= 5 ? 5 : dlc.length,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: dlc.length >= 4 ? 4 : dlc.length,
        },
      },
      {
        breakpoint: 640,
        settings: {
          autoplay: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          autoplay: false,
          slidesToShow: 2,
        },
      },
    ],
  };
};
