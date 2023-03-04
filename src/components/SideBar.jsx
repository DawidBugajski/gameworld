import React from 'react';
import { HamburgerBtn, Logo, MenuExpanded, NavBar } from 'components';
import { useSelector } from 'react-redux';

const SideBar = () => {
  const { isMenuOpen } = useSelector((state) => state.toggleMenu);
  const menuOverlay = isMenuOpen
    ? 'h-screen bg-[#0a0a0a] z-20 lg:w-[300px] '
    : 'h-20 lg:w-[150px] lg:bg-[#0a0a0a] lg:h-screen';

  return (
    <header
      className={`justify-center flex flex-col fixed w-full ${menuOverlay} transition-all duration-300 z-10 p-4 lg:text-center lg:justify-start lg:gap-9 `}
    >
      <Logo />
      <HamburgerBtn />
      {isMenuOpen && <MenuExpanded />}
      <NavBar />
    </header>
  );
};

export default SideBar;

/**
 * ukryć serduszko na mobile jeśli menu nie jest rozwinięte
 * zrobić navbar który będzie zawierał filtry jako kategorie gier: ACTION/STRATEGY/RPG/SHOOTER/ADVENTURE/PUZZLE/RACING/SPORTS
 *
 *
 */
