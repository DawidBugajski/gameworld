import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import { carouselSettings } from 'utils/carouselSettings';
import useWindowWidth from 'hooks/useWindowWidth';

const Carousel = ({ data }) => {
  const { isMobile } = useWindowWidth();

  const desktopLayout = data.map(({ id, background_image: image, name }) => (
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
  ));

  const mobileLayout = data.map(({ id, background_image: image, name }) => (
    <Link key={id} to={`/games/${id}`}>
      <div className='carousel__card--mobile'>
        <img
          className='object-cover w-full h-full rounded-xl brightness-50'
          src={image}
          alt={name}
        />
        <h3 className=' border-main-red border-l-2 px-3 py-1 absolute w-full text-sm font-bold uppercase cursor-pointer bottom-[10%] left-1/2-translate-x-1/2'>
          {name}
        </h3>
      </div>
    </Link>
  ));

  return (
    <div className='relative py-4 mx-6 overflow-hidden'>
      <Slider {...carouselSettings}>
        {isMobile ? mobileLayout : desktopLayout}
      </Slider>
    </div>
  );
};

export default Carousel;
