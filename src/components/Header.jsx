import React from 'react';
import {
  HamburgerBtn,
  Logo,
  SearchBar,
  NavBar,
  SearchResults,
} from 'components';

const Header = () => {
  return (
    <>
      <Logo />
      <HamburgerBtn />
      <SearchBar />
      <NavBar />
      <SearchResults />
    </>
  );
};

export default Header;
