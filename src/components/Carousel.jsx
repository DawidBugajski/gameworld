import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

const Carousel = ({ data }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 8,
    autoplaySpeed: 1000,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 1,
          infinite: true,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };

  return (
    <div className='py-4 mx-6 overflow-hidden'>
      <Slider {...settings}>
        {data.map((game) => (
          <div className='card' onClick={() => console.log(game)} key={game.id}>
            <img
              className='object-cover w-full h-full transition-all duration-150 rounded-xl '
              src={game.background_image}
              alt={game.name}
            />
            <Link to={`/games/${game.id}`}>
              <h3 className='absolute transition-all duration-150 top-1/2 left-1/2 hover:opacity-100'>
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

// lg:-translate-y-20
// <Link to={`/games/${game.id}`}>
