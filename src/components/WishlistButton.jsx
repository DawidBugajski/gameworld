import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setAddToWishlist,
  setRemoveFromWishlist,
} from 'store/slices/wishlistSlice';

const WishlistButton = ({ name, image }) => {
  const [showTooltip, setShowToolTip] = useState(false);
  const dispatch = useDispatch();
  const { games } = useSelector((state) => state.wishlist);
  const isGameInWishlist = games.some((game) => game.name === name);

  const handleAddGame = () => {
    dispatch(setAddToWishlist({ name, image }));
    setShowToolTip(true);
    setTimeout(() => setShowToolTip(false), 2000);
  };
  const handleDeleteGame = () =>
    dispatch(setRemoveFromWishlist({ name, image }));
  return (
    <div className='relative'>
      <button
        onClick={isGameInWishlist ? handleDeleteGame : handleAddGame}
        className='flex items-center justify-center w-full gap-2 p-2 rounded-lg cursor-pointer bg-gradient-to-r from-main-red to-main-dark-red hover:from-main-red hover:to-neutral-800 lg:p-1 xl:p-2'
      >
        <p className='flex-shrink-0 font-sans text-sm xl:text-xs 2xl:text-sm'>
          {isGameInWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
        </p>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill={isGameInWishlist ? '#fff' : 'none'}
          stroke='currentColor'
          strokeWidth='2'
          width='25'
          height='20'
        >
          <path d='M20.84 4.43a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.24a5.5 5.5 0 00-7.78 0l-.01.01a5.5 5.5 0 000 7.78L12 21l8.84-8.84a5.5 5.5 0 000-7.77v-.01z'></path>
        </svg>
      </button>
      {showTooltip && (
        <span className='absolute px-3 py-2 text-sm text-center text-white -translate-x-1/2 bg-black rounded-lg roudned-lg top-12 whitespace-nowrap left-1/2 before:block before:h-3 before:w-3 before:rotate-45 before:absolute before:-top-1 before:left-1/2 before:transform before:-translate-x-1/2 before:bg-black'>
          Added to wishlist!
        </span>
      )}
    </div>
  );
};

export default WishlistButton;
