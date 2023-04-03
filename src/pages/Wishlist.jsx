import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setClearWishlist,
  setRemoveFromWishlist,
} from 'store/slices/wishlistSlice';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';

const Wishlist = () => {
  const dispatch = useDispatch();
  const { games } = useSelector((state) => state.wishlist);
  const handleClearWishlist = () => dispatch(setClearWishlist());
  const handleDeleteGame = (game) => dispatch(setRemoveFromWishlist(game));

  return (
    <div className='shadow-left h-screen bg-gradient-to-b from-[#1f2937] to-[#111827]'>
      <span className='text-[100px] fixed lg:text-[150px] 2xl:top-[10%] left-[4%] top-[15%] rotate-[15deg] pointer-events-none 2xl:text-[150px] text-[#F2F2F2B3] opacity-5 min-[1800px]:text-[200px]'>
        鬼滅の刃 刀鍛冶の里編 ᕦ(⋋‿☄)ᕗ
      </span>
      <div className='container relative mx-auto'>
        <button className='py-2 text-2xl' onClick={handleClearWishlist}>
          Clear wishlist
        </button>
        <div className='flex flex-wrap gap-8 '>
          {games.map(({ image, name, id }) => (
            <div
              key={id}
              className='relative w-56 transition-all duration-150 shadow-xl cursor-pointer h-72 group hover:shadow-cyan-800 hover:shadow-2xl hover:scale-95'
            >
              <FaTrash
                onClick={() => handleDeleteGame({ image, name, id })}
                className='absolute z-10 transition-colors duration-150 opacity-0 w-7 h-7 top-2 right-2 group-hover:opacity-100 hover:fill-main-gray'
              />

              <img
                alt={name}
                src={
                  image !== null
                    ? image
                    : 'https://via.placeholder.com/600x400?text=Game+Image'
                }
                className='object-cover w-full h-full transition-all duration-0 rounded-xl group-hover:brightness-50 group-hover:blur-[1px]'
              />
              <Link to={`/games/${id}`}>
                <h3 className='absolute w-10/12 p-[10px] text-sm font-bold text-left uppercase transition-all duration-150 -translate-x-1/2 border-l-2 cursor-pointer border-main-red bottom-[10%] left-1/2 opacity-0 group-hover:opacity-100'>
                  {name}
                </h3>
              </Link>
            </div>
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
// how to remove game
