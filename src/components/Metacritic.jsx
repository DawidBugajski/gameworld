import React from 'react';

const Metacritic = ({ meta }) => {
  if (!meta) return null;

  const backgroundColor =
    meta <= 19
      ? '[#F44336]'
      : meta <= 39
      ? '[#FF9800]'
      : meta <= 59
      ? '[#FFEB3B]'
      : meta <= 79
      ? '[#8BC34A]'
      : '[#4CAF50]';
  const gradient = `bg-gradient-to-b from-${backgroundColor} to-black`;

  return (
    <div
      className={`w-12 h-12 2xl:w-16 2xl:h-16 ${gradient} flex items-center justify-center rounded-full lg:order-first flex-shrink-0 lg:w-12 lg:h-12`}
    >
      <span className='text-xl font-bold text-white lg:text-2xl 2xl:text-4xl'>
        {meta}
      </span>
    </div>
  );
};

export default Metacritic;
