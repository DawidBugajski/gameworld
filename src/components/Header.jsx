import React from 'react';
import { HamburgerBtn, Logo } from 'components';
import { useSelector } from 'react-redux';

const Header = () => {
  const { isMenuOpen } = useSelector((state) => state.toggleMenu);
  const menuOverlay = isMenuOpen ? 'h-screen' : 'h-24';

  return (
    <header
      className={`fixed flex items-center justify-between w-full px-2 bg-[#0a0a0a] ${menuOverlay}`}
    >
      <Logo />
      <HamburgerBtn />
    </header>
  );
};

export default Header;

/**
 * jeśli jest overlay włączony to muszę mieć komponent z klasą h-screen na pewno, ale inne mają zostać, ale w tym komponencie będę też wyswietlać inne elementy, czyli w zależności od tego czy isMenuOpen jest prawdą czy fałszem, to muszę wyświetlać albo jedno albo drugie, czyli albo jeden komponent albo drugi.
 */
