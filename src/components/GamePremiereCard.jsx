import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const GamePremiereCard = ({ data }) => {
  const { isMenuOpen } = useSelector((state) => state.toggleMenu);
  const gridColumns = isMenuOpen
    ? 'lg:grid-cols-2 2xl:grid-cols-3'
    : 'lg:grid-cols-3';

  const paddings = isMenuOpen ? 'lg:p-4' : 'lg:py-4 lg:px-1';
  const fonts = isMenuOpen ? 'xl:text-lg' : 'lg:text-sm';

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
      <div className={`container mx-auto lg:grid lg:gap-6 ${gridColumns}`}>
        {data.slice(1).map((game) => (
          <Link to={`/games/${game.id}`}>
            <div
              key={game.id}
              className='container relative w-full mx-auto mb-8 bg-center bg-cover cursor-pointer h-72 group'
              style={{ backgroundImage: `url(${game.background_image})` }}
            >
              <div
                className={`absolute bottom-0 left-0 right-0 p-6 transition-all duration-300 bg-black bg-opacity-75 group-hover:bg-opacity-100 lg:text-sm xl:p-6 ${paddings}`}
              >
                <strong
                  className={`text-xl font-bold lg:text-sm 2xl:text-base ${fonts}`}
                >
                  {game.name}
                </strong>
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
