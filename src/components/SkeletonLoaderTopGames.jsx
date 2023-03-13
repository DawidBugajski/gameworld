import React from 'react';

const SkeletonLoaderTopGames = () => {
  return (
    <div className='bg-[#181A1B] min-h-[319px] pt-4'>
      <div className='flex px-5 animate-pulse'>
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

export default SkeletonLoaderTopGames;
