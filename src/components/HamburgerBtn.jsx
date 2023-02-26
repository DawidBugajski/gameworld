import React from 'react';

const HamburgerBtn = () => {
  return (
    <div>
      <button class='relative group'>
        <div class='relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all duration-200 shadow-md'>
          <div class='flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden'>
            <div class='bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:rotate-[42deg]'></div>
            <div class='bg-white h-[2px] w-1/2 rounded transform transition-all duration-300 group-focus:-translate-x-10'></div>
            <div class='bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:-rotate-[42deg]'></div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default HamburgerBtn;
