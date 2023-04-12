export const dlcCarouselSettings = (game) => {
  return {
    className: 'dlc__carousel',
    slidesToShow: game.length >= 8 ? 8 : game.length,
    arrows: false,
    autoplay: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: game.length >= 6 ? 6 : game.length,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: game.length >= 5 ? 5 : game.length,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: game.length >= 4 ? 4 : game.length,
        },
      },
      {
        breakpoint: 640,
        settings: {
          autoplay: false,
          slidesToShow: game.length >= 3 ? 3 : game.length,
        },
      },
      {
        breakpoint: 500,
        settings: {
          autoplay: false,
          slidesToShow: game.length === 1 ? 1 : 2,
        },
      },
    ],
  };
};
