export const fullscreenMainSettings = (currentImageIndex) => {
  return {
    infinite: true,
    slidesToShow: 1,
    autoplaySpeed: 5000,
    arrows: true,
    initialSlide: currentImageIndex,
    accessibility: true,
    draggable: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          draggable: false,
          arrows: true,
          accessibility: false,
        },
      },
    ],
  };
};

export const fullscreenThumbnailSettings = (screenshots, currentImageIndex) => {
  return {
    slidesToShow: screenshots.length,
    arrows: false,
    initialSlide: currentImageIndex,
    className: 'thumbnail',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
};
