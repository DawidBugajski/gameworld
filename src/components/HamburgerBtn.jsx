import React from 'react';
import { useDispatch } from 'react-redux';
import { setToggleMenu } from 'store/slices/toggleMenuSlice';
const HamburgerBtn = () => {
  const dispatch = useDispatch();
  const handleClick = () => dispatch(setToggleMenu());

  return (
    <div>
      <button onClick={handleClick} className='relative group'>
        <div
          className='relative flex overflow-hidden items-center
        justify-center rounded-full w-[50px] h-[50px] transform transition-all duration-200 shadow-md '
        >
          <div className='flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden '>
            <div className='bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:rotate-[42deg]  group-hover:bg-gradient-to-tr from-stone-900 to-red-600'></div>
            <div className='bg-white h-[2px] w-1/2 rounded transform transition-all duration-300 group-focus:-translate-x-10 group-hover:bg-gradient-to-tr from-stone-900 to-red-600'></div>
            <div className='bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:-rotate-[42deg] group-hover:bg-gradient-to-tr from-stone-900 to-red-600'></div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default HamburgerBtn;
