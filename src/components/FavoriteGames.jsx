import React from 'react';
import { useSelector } from 'react-redux';

import WishlistCard from 'components/WishlistCard';

const FavoriteGames = () => {
  const { games } = useSelector((state) => state.wishlist);

  return (
    <div className='flex flex-wrap gap-8'>
      {games.map(({ image, name, id }) => (
        <WishlistCard image={image} name={name} id={id} key={id} />
      ))}
    </div>
  );
};

export default FavoriteGames;
