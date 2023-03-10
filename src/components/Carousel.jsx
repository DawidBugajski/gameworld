import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  console.log(data);

  return (
    <div className='overflow-hidden'>
      <Slider {...settings}>
        {data.map((game) => (
          <div key={game.id}>
            <h2>{game.name}</h2>
            <img src={game.background_image} alt={game.name} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
