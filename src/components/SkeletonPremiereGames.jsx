import React from 'react';
import { useSelector } from 'react-redux';

const SkeletonPremiereGames = () => {
  const { isMenuOpen } = useSelector((state) => state.toggleMenu);
  const gridColumns = isMenuOpen
    ? 'lg:grid-cols-2 2xl:grid-cols-3'
    : 'lg:grid-cols-3';

  const games = Array.from({ length: 9 }).map((_, i) => (
    <div
      key={i}
      className='container relative w-full mx-auto mb-8 bg-gray-400 h-72'
    ></div>
  ));

  return (
    <div className='relative w-full p-5 text-white bg-fixed bg-center bg-cover lg:p-8 shadow-left premiere bg-premiere'>
      <div className='container relative w-full mx-auto mb-8 bg-gray-400 bg-center bg-cover cursor-pointer h-72 lg:h-96 animate-pulse'></div>
      <div
        className={`container mx-auto lg:grid lg:gap-6 ${gridColumns} animate-pulse`}
      >
        {games}
      </div>
    </div>
  );
};

export default SkeletonPremiereGames;
