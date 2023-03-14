import React from 'react';
import { Link } from 'react-router-dom';

const GamePremiereCard = ({ data }) => {
  return (
    <>
      {data.slice(0, 1).map((game) => (
        <Link to={`/games/${game.id}`}>
          <div
            key={game.id}
            className='container relative w-full mx-auto mb-8 bg-center bg-cover cursor-pointer h-72 lg:h-96 group'
            style={{ backgroundImage: `url(${game.background_image})` }}
          >
            <div className='absolute bottom-0 left-0 right-0 p-6 transition-all duration-300 bg-black bg-opacity-75 group-hover:bg-opacity-100'>
              <strong className='text-xl font-bold lg:text-4xl'>
                {game.name}
              </strong>
              <p className='mt-2 text-sm lg:text-lg'>{game.released}</p>
            </div>
          </div>
        </Link>
      ))}
      <div className='container mx-auto lg:grid lg:gap-6 lg:grid-cols-3'>
        {data.slice(1).map((game) => (
          <Link to={`/games/${game.id}`}>
            <div
              key={game.id}
              className='container relative w-full mx-auto mb-8 bg-center bg-cover cursor-pointer h-72 group'
              style={{ backgroundImage: `url(${game.background_image})` }}
            >
              <div className='absolute bottom-0 left-0 right-0 p-6 transition-all duration-300 bg-black bg-opacity-75 group-hover:bg-opacity-100'>
                <strong className='text-xl font-bold'>{game.name}</strong>
                <p className='mt-2 text-sm'>{game.released}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default GamePremiereCard;
