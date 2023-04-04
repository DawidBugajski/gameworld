import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setClearWishlist } from 'store/slices/wishlistSlice';
import WishlistCard from 'components/WishlistCard';

const Wishlist = () => {
  const { games } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  const handleClearWishlist = () => dispatch(setClearWishlist());

  return (
    <div className='relative shadow-left h-screen bg-gradient-to-b from-[#1f2937] to-[#111827]'>
      <span className='text-[100px] fixed lg:text-[150px] 2xl:top-[10%] left-[4%] top-[15%] rotate-[15deg] pointer-events-none 2xl:text-[150px] text-[#F2F2F2B3] opacity-5 min-[1800px]:text-[200px]'>
        鬼滅の刃 刀鍛冶の里編 ᕦ(⋋‿☄)ᕗ
      </span>
      <button className='p-2 text-2xl' onClick={handleClearWishlist}>
        Clear wishlist
      </button>
      <div className='relative flex mx-auto'>
        <span className='pl-3 pr-12 text-6xl italic tracking-widest uppercase pointer-events-none wishlist-title brightness-50'>
          Wishlist
        </span>
        <div className='flex flex-wrap gap-8'>
          {games.map(({ image, name, id }) => (
            <WishlistCard image={image} name={name} id={id} key={id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;

// napis z boku odwrócony your wishlist o 90 stopni i jak się skończy to taka kreska gradientowa może, na środku karty z grami, gra by miała image oraz napis, i jakiś dropdown w który moglibyśmy na pewno usunąć tą gre
// max 100 games or comunicate, buy premium and fuck off
// show counter how many left games you can add ?
// filtering games by ?
// draggable games?
// you dont know what buy first? let's roll (add spin animate and after 2sec throw popup with losed game)
