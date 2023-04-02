import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setClearWishlist } from 'store/slices/wishlistSlice';

const Wishlist = () => {
  const dispatch = useDispatch();
  const { games } = useSelector((state) => state.wishlist);
  const handleClearWishlist = () => dispatch(setClearWishlist());
  console.log(games);
  return (
    <div className='w-full h-screen bg-main-gray'>
      <button className='text-6xl' onClick={handleClearWishlist}>
        RESET
      </button>
      <div className='container flex gap-8 mx-auto '>
        {games.map((game) => (
          <div className='w-56 h-72' key={game.name}>
            <img
              alt={game.name}
              src={game.image}
              className='object-cover w-full h-full transition-all duration-150 rounded-xl'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;

// remember put placeholder image if game doesn't provide image
