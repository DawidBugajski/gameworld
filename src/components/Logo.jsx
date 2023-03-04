import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to='/'>
      <div className='absolute text-2xl cursor-pointer text-main-red top-5 left-5 lg:text-lg lg:static lg:mt-3'>
        Game
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
