import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { dlcCarouselSettings } from 'utils/dlcCarouselSettings';
import useWindowWidth from 'hooks/useWindowWidth';

const GameSeries = ({ game }) => {
  const settings = dlcCarouselSettings(game);
  const { isMobile } = useWindowWidth();
  const desktopLayout = game.map(({ id, background_image: image, name }) => (
    <div className='relative mx-auto dlc__card cursor-grab' key={id}>
      <img
        className='object-cover w-full h-full transition-all duration-150 rounded-xl'
        src={
          image !== null
            ? image
            : 'https://via.placeholder.com/600x400?text=Game+Image'
        }
        alt={name}
      />
      <Link to={`/games/${id}`}>
        <h3 className='absolute w-10/12 p-[10px] text-sm font-bold text-left uppercase transition-all duration-150 -translate-x-1/2 border-l-2 cursor-pointer border-main-red bottom-[10%] left-1/2'>
          {name}
        </h3>
      </Link>
    </div>
  ));

  const mobileLayout = game.map(({ id, background_image: image, name }) => (
    <Link key={id} to={`/games/${id}`}>
      <div className='relative mx-auto dlc__card--mobile'>
        <img
          className='object-cover w-full h-full rounded-xl brightness-50'
          src={
            image !== null
              ? image
              : 'https://via.placeholder.com/600x400?text=Game+Image'
          }
          alt={name}
        />
        <h3 className='border-main-red border-l-2 px-3 py-1 absolute w-full text-sm font-bold uppercase cursor-pointer bottom-[10%] left-1/2-translate-x-1/2'>
          {name}
        </h3>
      </div>
    </Link>
  ));

  return (
    <div className='relative flex flex-col justify-between w-full py-20 text-white bg-fixed bg-center bg-cover bg-gameSeries shadow-left premiere'>
      <h3 className='relative mx-auto text-lg italic text-center uppercase tex-xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl w-fit lg:px-0 2xl:text-4xl fancy-undeline'>
        Can't get enough? Check out the other games in this lore
      </h3>
      <div className='relative flex justify-center w-full gap-5 px-4 py-12 mx-auto sm:mx-0'>
        <Slider {...settings}>
          {' '}
          {isMobile ? mobileLayout : desktopLayout}
        </Slider>
      </div>
    </div>
  );
};

export default GameSeries;
