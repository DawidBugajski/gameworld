import React from 'react';
import Header from 'components/Header';
import { useSelector } from 'react-redux';

const SideBar = () => {
  const { isMenuOpen } = useSelector((state) => state.toggleMenu);
  const menuOverlay = isMenuOpen
    ? 'h-screen bg-[#0a0a0a] z-20 lg:w-[300px] '
    : 'h-20 lg:w-[100px] lg:bg-[#0a0a0a] lg:h-screen';

  return (
    <header
      className={`justify-start flex flex-col fixed w-full ${menuOverlay} transition-all duration-300 z-50 p-[25px] lg:text-center lg:gap-10`}
    >
      <Header />
    </header>
  );
};

export default SideBar;
