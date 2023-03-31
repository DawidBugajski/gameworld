import React from 'react';
import { Link } from 'react-router-dom';

const GameDLC = ({ dlc }) => {
  return (
    <div className='relative w-full pt-20 text-white bg-fixed bg-center bg-cover bg-dlc shadow-left premiere'>
      <h2 className='relative mx-auto text-2xl italic text-center uppercase w-fit lg:px-0 2xl:text-4xl fancy-undeline'>
        Expand your experience...
      </h2>
      <div className='relative flex flex-wrap justify-center gap-5 py-12 mx-auto'>
        {dlc.map(({ id, background_image: image, name }) => (
          <div className='h-[270px] w-[200px] relative dlc__card' key={id}>
            <img
              className='object-cover w-full h-full transition-all duration-150 rounded-xl'
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
      </div>
    </div>
  );
};

export default GameDLC;

//https://www.react-spring.dev/docs/getting-started
// what to do if dlc game doesn't have screenshot? some placeholder image? http://localhost:3000/games/3498

// http://localhost:3000/games/42187 - przy simsach 4 wykurwia error (chyba problem jest jeśli z wyszukiwarki pizgniesz giere, np simsy 4)
