import React from 'react';
import { HamburgerBtn } from 'components';

const Header = () => {
  return (
    <div className='sticky flex items-center justify-between h-24 px-2'>
      <p className='text-xl text-transparent bg-gradient-to-tr from-stone-900 to-red-600 bg-clip-text'>
        GAME W_RLD
      </p>
      <HamburgerBtn />
    </div>
  );
};

export default Header;

/**
 * TODO
 * Mobile:
 * Header sticky
 * logo button => when clicked, the entire application is to be covered by a menu overlay:
 * search input
 * icons and positions to route (filtertype games?)
 */
