import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

const Carousel = ({ data }) => {
  const settings = {
    infinite: true,
    speed: 1500,
    autoplay: true,
    slidesToShow: 8,
    slidesToScroll: 8,
    autoplaySpeed: 5000,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          infinite: true,
          adaptiveHeight: true,
          speed: 1000,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          adaptiveHeight: true,
          speed: 700,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 0,
          speed: 500,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
          speed: 500,
        },
      },
    ],
  };

  return (
    <div className='relative py-4 mx-6 overflow-hidden'>
      <Slider {...settings}>
        {data.map(({ id, background_image: image, name }) => (
          <div className='carousel__card' key={id}>
            <img
              className='object-cover w-full h-full transition-all duration-150 rounded-xl '
              src={image}
              alt={name}
            />
            <Link to={`/games/${id}`}>
              <h3 className='absolute w-10/12 p-[10px] text-sm font-bold text-left uppercase transition-all duration-150 -translate-x-1/2 border-l-2 cursor-pointer border-main-red bottom-[10%] left-1/2'>
                {name}
              </h3>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
