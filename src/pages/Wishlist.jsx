import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setClearWishlist } from 'store/slices/wishlistSlice';
import { Link } from 'react-router-dom';

const Wishlist = () => {
  const dispatch = useDispatch();
  const { games } = useSelector((state) => state.wishlist);
  const handleClearWishlist = () => dispatch(setClearWishlist());

  return (
    <div className='w-full h-screen bg-main-gray'>
      <button className='text-6xl' onClick={handleClearWishlist}>
        RESET
      </button>
      <div className='container flex gap-8 mx-auto '>
        {games.map((game) => (
          <Link to={`/games/${game.id}`} key={game.name}>
            <div className='w-56 h-72'>
              <img
                alt={game.name}
                src={game.image}
                className='object-cover w-full h-full transition-all duration-150 rounded-xl'
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;

// remember put placeholder image if game doesn't provide image
// max 100 games or comunicate, buy premium and fuck off
