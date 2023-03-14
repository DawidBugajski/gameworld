import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to='/'>
      <div className='absolute z-50 text-center uppercase cursor-pointer top-5 left-5 lg:text-lg lg:relative lg:flex lg:flex-col lg:leading-3 lg:left-0 lg:mb-3'>
        <span className='text-lg italic font-bold uppercase lg:leading-[5px] lg:text-[12px] text-main-red'>
          Game
        </span>
        <span className='text-lg font-bold text-white lg:text-sm'>
          W
          <span className='text-2xl rounded-full text-main-red lg:text-sm'>
            ▽
          </span>
          RLD
        </span>
      </div>
    </Link>
  );
};

export default Logo;
