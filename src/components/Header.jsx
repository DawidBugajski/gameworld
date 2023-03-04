import React from 'react';
import { HamburgerBtn, Logo, SearchBar, NavBar } from 'components';

const Header = () => {
  return (
    <div className='flex flex-col gap-10'>
      <Logo />
      <HamburgerBtn />
      <SearchBar />
      <NavBar />
    </div>
  );
};

export default Header;
