import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setShowClearPopupWarning } from 'store/slices/wishlistSlice';
import WishlistCard from 'components/WishlistCard';
import WarningPopup from 'components/WarningPopup';
import GetRandomGameButton from 'components/GetRandomGameButton';

const Wishlist = () => {
  const { games, isClearPopupWarningVisible } = useSelector(
    (state) => state.wishlist
  );

  const dispatch = useDispatch();
  const handleShowWarningPopup = () => dispatch(setShowClearPopupWarning());

  return (
    <div className='relative shadow-left min-h-screen bg-gradient-to-b from-[#1f2937] to-[#111827] overflow-hidden'>
      <span className='text-[100px] fixed lg:text-[150px] 2xl:top-[10%] left-[4%] top-[15%] rotate-[15deg] pointer-events-none 2xl:text-[150px] text-[#F2F2F2B3] opacity-5 min-[1800px]:text-[200px]'>
        鬼滅の刃 刀鍛冶の里編 ᕦ(⋋‿☄)ᕗ
      </span>
      {games.length >= 1 && (
        <div className='relative flex items-center justify-center gap-8 py-4 mt-14 sm:mt-0'>
          <button
            onClick={handleShowWarningPopup}
            className='relative inline-flex items-center px-3 py-2 text-sm tracking-wide text-center text-white transition-all duration-150 rounded-lg bg-main-dark-red hover:shadow-lg hover:bg-main-gray group'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 h-5 mr-2'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
              />
            </svg>
            Clear
            <span className='inline-flex items-center justify-center w-5 h-5 p-3 ml-2 text-xs font-semibold text-white transition-all duration-150 bg-black rounded-full group-hover:bg-main-dark-red'>
              {games.length}
            </span>
          </button>
          <GetRandomGameButton />
        </div>
      )}
      <div className='relative flex mx-auto'>
        <span className='hidden sm:block sm:mr-8 md:mr-12 text-4xl xl:text-6xl lg:mr-2 pl-1 xl:mr-8 2xl:mr-14 min-[1800px]:mr-20 mt-2 italic tracking-widest uppercase pointer-events-none wishlist-title brightness-50'>
          Wishlist
        </span>
        <div className='flex flex-wrap gap-0 pb-8 sm:gap-6'>
          {games.map(({ image, name, id }) => (
            <WishlistCard image={image} name={name} id={id} key={id} />
          ))}
        </div>
      </div>
      {isClearPopupWarningVisible && <WarningPopup />}
    </div>
  );
};

export default Wishlist;
