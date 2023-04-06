import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { dlcCarouselSettings } from 'utils/dlcCarouselSettings';

const GameSeries = ({ game }) => {
  const settings = dlcCarouselSettings(game);

  return (
    <div className='relative flex flex-col justify-between w-full py-20 text-white bg-fixed bg-center bg-cover bg-gameSeries shadow-left premiere'>
      <h3 className='relative mx-auto text-2xl italic text-center uppercase xl:text-2xl lg:text-xl md:text-2xl sm:text-xl w-fit lg:px-0 2xl:text-4xl fancy-undeline'>
        Can't get enough? Check out the other games in this lore
      </h3>
      <div className='relative flex justify-center w-full gap-5 px-4 py-12 mx-auto sm:mx-0'>
        <Slider {...settings}>
          {game.map(({ id, background_image: image, name }) => (
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
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default GameSeries;

//https://www.react-spring.dev/docs/getting-started
//placeholder photo if game doesn't have background image
// co jeśli jest tylko 1 gra, bo teraz jest with 100 i to sie tak rozkurwia
