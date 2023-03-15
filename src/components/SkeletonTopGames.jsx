import React from 'react';

const SkeletonTopGames = () => {
  return (
    <div className='p-5 bg-[#181A1B]'>
      <div className='flex animate-pulse'>
        <div className='hidden sm:block h-[280px] w-[185px] mx-[5px] bg-gray-400 rounded-xl flex-grow'></div>
        <div className='hidden md:block h-[280px] w-[185px] mx-[5px] bg-gray-400 rounded-xl flex-grow'></div>
        <div className='hidden xl:block h-[280px] w-[185px] mx-[5px] bg-gray-400 rounded-xl flex-grow'></div>
        <div className='hidden xl:block h-[280px] w-[185px] mx-[5px] bg-gray-400 rounded-xl flex-grow'></div>
        <div className=' h-[280px] w-[190px] mx-[5px] bg-gray-400 rounded-xl flex-grow'></div>
        <div className='h-[280px] w-[190px] mx-[5px] bg-gray-400 rounded-xl flex-grow'></div>
        <div className='hidden 2xl:block h-[280px] w-[190px] mx-[5px] bg-gray-400 rounded-xl flex-grow'></div>
        <div className='hidden 2xl:block h-[280px] w-[190px] mx-[5px] bg-gray-400 rounded-xl flex-grow'></div>
      </div>
    </div>
  );
};

export default SkeletonTopGames;
