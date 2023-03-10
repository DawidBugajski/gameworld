import React from 'react';
import Header from 'components/Header';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const { isMenuOpen } = useSelector((state) => state.toggleMenu);
  const menuOverlay = isMenuOpen
    ? 'h-screen bg-main-gray z-20 lg:w-[300px] '
    : 'h-20 lg:w-[100px] lg:bg-main-gray lg:h-screen';

  return (
    <header
      className={`justify-start flex flex-col fixed w-full ${menuOverlay} transition-all duration-300 z-50 p-[25px] lg:text-center lg:gap-10 `}
    >
      <Header />
    </header>
  );
};

export default Sidebar;
