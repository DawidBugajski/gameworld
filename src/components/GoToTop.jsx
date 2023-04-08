import React from 'react';
import { SiAcclaim } from 'react-icons/si';

const GoToTop = () => {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className='test fixed bottom-[5%] right-[1%] p-2 rounded-full bg-main-gray border-2 border-white hover:border-main-red transition-colors duration-150 group'
    >
      <SiAcclaim className='w-5 h-5 transition-all duration-150 fill-white group-hover:animate-gototop group-hover:fill-main-red' />
    </button>
  );
};

export default GoToTop;
