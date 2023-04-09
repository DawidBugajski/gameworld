import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaDiceD20 } from 'react-icons/fa';
import { setRandomGame } from 'store/slices/wishlistSlice';
import { useNavigate } from 'react-router-dom';

const GetRandomGameButton = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { games } = useSelector((state) => state.wishlist);
  const [isHover, setIsHover] = useState(false);

  const handleGetRandomGame = () => {
    const getRandomIndex = Math.floor(Math.random() * games.length);
    const getRandomGame = games[getRandomIndex];
    dispatch(setRandomGame(getRandomGame));
    navigate(`/games/${getRandomGame.id}`);
  };
  return (
    <button
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={handleGetRandomGame}
      className='relative z-50 p-2 transition-all duration-150 rounded-full outline-none bg-main-dark-red hover:shadow-lg hover:bg-main-gray group '
    >
      <FaDiceD20 className='w-6 h-6 transition-all duration-150 group-hover:fill-main-dark-red group-hover:animate-spin' />
      {isHover && (
        <span className='absolute z-10 px-3 py-2 text-sm text-center text-white -translate-x-1/2 rounded-lg bg-main-gray roudned-lg top-12 whitespace-nowrap left-1/2 before:block before:h-3 before:w-3 before:rotate-45 before:absolute before:-top-1 before:left-1/2 before:transform before:-translate-x-1/2 before:bg-main-gray'>
          Draw a game!
        </span>
      )}
    </button>
  );
};

export default GetRandomGameButton;
