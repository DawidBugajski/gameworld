import React from 'react';
import { useDispatch } from 'react-redux';
import { setClearWishlist } from 'store/slices/wishlistSlice';

const Wishlist = () => {
  const dispatch = useDispatch();
  const handleClearWishlist = () => dispatch(setClearWishlist());
  return (
    <div className='w-full h-screen bg-main-gray'>
      <button className='text-6xl' onClick={handleClearWishlist}>
        RESET
      </button>
    </div>
  );
};

export default Wishlist;
