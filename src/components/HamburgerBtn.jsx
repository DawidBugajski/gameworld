import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setToggleMenu } from 'store/slices/toggleMenuSlice';
const HamburgerBtn = () => {
  const { isMenuOpen } = useSelector((state) => state.toggleMenu);
  const dispatch = useDispatch();
  const handleClick = () => dispatch(setToggleMenu());

  return (
    <div
      className='absolute top-0 bottom-auto left-auto rotate-90  cursor-pointer bg-zinc-900 right-6 h-14 w-14 rounded-r-xl hover:bg-neutral-800 lg:absolute lg:top-1/2 lg:right-0 lg:rounded-tl-[15px] lg:rounded-b-none lg:rounded-r-none lg:rounded-l-[15px] lg:rotate-0'
      onClick={handleClick}
    >
      <div
        className={`bg-main-red h-0.5 left-1/2 top-1/2  absolute transition-all duration-75 rotate-45   ${
          isMenuOpen
            ? '-translate-x-[9px] translate-y-[7px] w-5'
            : '-translate-y-2 w-6'
        }`}
      ></div>
      <div
        className={`bg-main-red h-0.5 left-1/2 top-1/2  absolute transition-all duration-75 -rotate-45   ${
          isMenuOpen
            ? '-translate-x-[9px] -translate-y-[7px] w-5'
            : 'translate-y-2 w-6 '
        }`}
      ></div>
      <div
        className={`bg-main-red h-0.5 left-1/2 top-1/2 w-[15px] absolute transition-all duration-75  rotate-45  ${
          isMenuOpen
            ? 'translate-x-[5px] translate-y-[5px] '
            : '-translate-x-[7px] -translate-y-[5px] '
        }`}
      ></div>
      <div
        className={`bg-main-red h-0.5 left-1/2 top-1/2 w-[15px] absolute transition-all duration-75 -rotate-45   ${
          isMenuOpen
            ? 'translate-x-[5px] -translate-y-[5px]'
            : '-translate-x-[7px] translate-y-[5px] '
        }`}
      ></div>
    </div>
  );
};

export default HamburgerBtn;
