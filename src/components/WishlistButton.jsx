import React from 'react';
import { useDispatch } from 'react-redux';
import { setAddToWishlist } from 'store/slices/wishlistSlice';

const WishlistButton = ({ name, image }) => {
  const dispatch = useDispatch();
  const handleAddGame = () => dispatch(setAddToWishlist({ name, image }));

  return (
    <button
      onClick={handleAddGame}
      className='flex items-center justify-center gap-2 p-2 rounded-lg cursor-pointer bg-gradient-to-r from-main-red to-main-dark-red hover:from-main-red hover:to-neutral-800 lg:p-1 xl:p-2'
    >
      <p className='flex-shrink-0 font-sans text-sm xl:text-xs 2xl:text-sm'>
        Add to wishlist
      </p>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        width='25'
        height='20'
      >
        <path d='M20.84 4.43a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.24a5.5 5.5 0 00-7.78 0l-.01.01a5.5 5.5 0 000 7.78L12 21l8.84-8.84a5.5 5.5 0 000-7.77v-.01z'></path>
      </svg>
    </button>
  );
};

export default WishlistButton;
