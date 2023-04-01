import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import { carouselSettings } from 'utils/carouselSettings';

const Carousel = ({ data }) => {
  return (
    <div className='relative py-4 mx-6 overflow-hidden'>
      <Slider {...carouselSettings}>
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
