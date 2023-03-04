import React from 'react';
import { HamburgerBtn, Logo, SearchBar, NavBar } from 'components';

const Header = () => {
  return (
    <>
      <Logo />
      <HamburgerBtn />
      <SearchBar />
      <NavBar />
    </>
  );
};

export default Header;

// <div className='flex flex-col gap-10'>