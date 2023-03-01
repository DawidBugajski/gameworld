import React from 'react';
import { HamburgerBtn, Logo, MenuExpanded } from 'components';
import { useSelector } from 'react-redux';

const Header = () => {
  const { isMenuOpen } = useSelector((state) => state.toggleMenu);
  const menuOverlay = isMenuOpen
    ? 'h-screen bg-[#0a0a0a] z-20 lg:w-[300px] '
    : 'h-20 lg:w-[100px] lg:bg-[#0a0a0a] lg:h-screen';

  return (
    <header
      className={`flex flex-col justify-center fixed w-full px-2 ${menuOverlay} transition-all duration-300 z-10`}
    >
      <Logo />
      <HamburgerBtn />
      {isMenuOpen && <MenuExpanded />}
    </header>
  );
};

export default Header;

/**
 * zrobić navbar który będzie zawierał filtry jako kategorie gier: ACTION/STRATEGY/RPG/SHOOTER/ADVENTURE/PUZZLE/RACING/SPORTS
 *
 *
 */
