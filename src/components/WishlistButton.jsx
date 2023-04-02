import React from 'react';
import { useDispatch } from 'react-redux';
import { setAddToWishlist } from 'store/slices/wishlistSlice';

const WishlistButton = ({ name, image }) => {
  const dispatch = useDispatch();
  const handleAddGame = () => dispatch(setAddToWishlist({ name, image }));

  return (
    <button
      onClick={handleAddGame}
      className='inline-flex items-center gap-2 px-5 py-2 text-sm text-center text-white bg-red-600 rounded-lg hover:bg-red-700'
    >
      Add to wishlist
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        className='w-6 h-6'
      >
        <path d='M20.84 4.43a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.24a5.5 5.5 0 00-7.78 0l-.01.01a5.5 5.5 0 000 7.78L12 21l8.84-8.84a5.5 5.5 0 000-7.77v-.01z'></path>
      </svg>
    </button>
  );
};

export default WishlistButton;
