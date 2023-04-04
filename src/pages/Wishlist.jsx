import React from 'react';
import { useDispatch } from 'react-redux';
import { setClearWishlist } from 'store/slices/wishlistSlice';
import FavoriteGames from 'components/FavoriteGames';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const Wishlist = () => {
  const dispatch = useDispatch();
  const handleClearWishlist = () => dispatch(setClearWishlist());

  return (
    <div className='shadow-left h-screen bg-gradient-to-b from-[#1f2937] to-[#111827]'>
      <span className='text-[100px] fixed lg:text-[150px] 2xl:top-[10%] left-[4%] top-[15%] rotate-[15deg] pointer-events-none 2xl:text-[150px] text-[#F2F2F2B3] opacity-5 min-[1800px]:text-[200px]'>
        鬼滅の刃 刀鍛冶の里編 ᕦ(⋋‿☄)ᕗ
      </span>
      <div className='container relative mx-auto'>
        <button className='py-2 text-2xl' onClick={handleClearWishlist}>
          Clear wishlist
        </button>
        <DndProvider backend={HTML5Backend}>
          <FavoriteGames />
        </DndProvider>
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
