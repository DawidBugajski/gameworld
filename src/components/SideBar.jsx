import React from 'react';
import Header from 'components/Header';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const { isMenuOpen } = useSelector((state) => state.toggleMenu);
  const { isGalleryOpen } = useSelector((state) => state.fullscreenGallery);
  const hideSidebar = isGalleryOpen ? 'lg:hidden' : 'lg:fixed';
  const menuOverlay = isMenuOpen
    ? 'h-screen bg-main-gray z-20 lg:w-[300px]'
    : 'h-20 lg:w-[100px] lg:bg-main-gray lg:h-full';

  return (
    <div
      className={`fixed justify-start flex flex-col ${hideSidebar} w-full ${menuOverlay} transition-all duration-300  p-[25px] lg:text-center lg:gap-10 z-50 `}
    >
      <Header />
    </div>
  );
};

export default Sidebar;
