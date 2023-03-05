import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to='/'>
      <div className='absolute text-center uppercase cursor-pointer top-5 left-5 lg:text-lg lg:relative lg:mt-6 lg:flex lg:flex-col lg:leading-3 lg:left-0'>
        <span className='text-lg italic font-bold uppercase lg:leading-[4px] lg:text-2xl text-main-red'>
          Game
        </span>
        <span className='text-lg font-bold text-white lg:text-lg'>
          W
          <span className='text-2xl rounded-full text-main-red lg:text-lg'>
            ▽
          </span>
          RLD
        </span>
      </div>
    </Link>
  );
};

export default Logo;
