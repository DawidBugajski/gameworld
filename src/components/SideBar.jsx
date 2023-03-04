import React from 'react';
import { Header } from 'components';
import { useSelector } from 'react-redux';

const SideBar = () => {
  const { isMenuOpen } = useSelector((state) => state.toggleMenu);
  const menuOverlay = isMenuOpen
    ? 'h-screen bg-[#0a0a0a] z-20 lg:w-[300px] '
    : 'h-20 lg:w-[100px] lg:bg-[#0a0a0a] lg:h-screen';

  return (
    <header
      className={`justify-center flex flex-col fixed w-full ${menuOverlay} transition-all duration-300 z-10 p-4 lg:text-center lg:justify-start lg:gap-9 `}
    >
      <Header />
    </header>
  );
};

export default SideBar;
