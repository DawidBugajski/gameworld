import React from 'react';
import HamburgerButton from 'components/HamburgerButton';
import Logo from 'components/Logo';
import Searchbar from 'components/Searchbar';
import Navbar from 'components/Navbar';
import SearchResults from 'components/SearchResults';

const Header = () => {
  return (
    <>
      <Logo />
      <HamburgerButton />
      <Searchbar />
      <Navbar />
      <SearchResults />
    </>
  );
};

export default Header;
