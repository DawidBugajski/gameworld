import React from 'react';
import { HamburgerBtn, Logo, SearchBar, NavBar } from 'components';
import { useSelector } from 'react-redux';

const Header = () => {
  const { isMenuOpen } = useSelector((state) => state.toggleMenu);
  const opacityElement = isMenuOpen
    ? 'opacity-1'
    : 'opacity-0 pointer-events-none';
  return (
    <div className='flex flex-col items-center gap-10 '>
      <Logo />
      <HamburgerBtn />
      <SearchBar opacityElement={opacityElement} />
      <NavBar />
    </div>
  );
};

export default Header;
