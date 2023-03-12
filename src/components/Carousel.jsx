import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

const Carousel = ({ data }) => {
  const settings = {
    infinite: true,
    speed: 500,
    // autoplay: true,
    slidesToShow: 8,
    slidesToScroll: 2,
    autoplaySpeed: 3000,
    initialSlide: 0,
    arrow: false,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };

  return (
    <div className='relative py-4 mx-6 overflow-hidden'>
      <Slider {...settings}>
        {data.map((game) => (
          <div
            className='carousel__card'
            onClick={() => console.log(game)}
            key={game.id}
          >
            <img
              className='object-cover w-full h-full transition-all duration-150 rounded-xl '
              src={game.background_image}
              alt={game.name}
            />
            <Link to={`/games/${game.id}`}>
              <h3 className='absolute w-10/12 p-[10px] text-sm font-bold text-left uppercase transition-all duration-150 -translate-x-1/2 border-l-2 cursor-pointer border-main-red bottom-[10%] left-1/2'>
                {game.name}
              </h3>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;

// top-1/2 -translate-y-1/2
// <Link to={`/games/${game.id}`}>
