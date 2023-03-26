import React from 'react';
import Footer from 'components/Footer';
import ContentRoutes from 'components/ContentRoutes';
import Sidebar from 'components/Sidebar';
import { useSelector } from 'react-redux';
import FullscreenGallery from './FullscreenGallery';

const Layout = () => {
  const { isMenuOpen } = useSelector((state) => state.toggleMenu);
  const { isGalleryOpen } = useSelector((state) => state.fullscreenGallery);
  const insetLayout = isMenuOpen ? 'lg:ml-[300px]' : 'lg:ml-[100px]';

  return (
    <div
      className={`shadow-left ${
        isGalleryOpen ? 'h-screen overflow-hidden' : ''
      }`}
    >
      <Sidebar />
      <div
        className={`flex flex-col text-white ${insetLayout} transition-all duration-300`}
      >
        <ContentRoutes />
        <Footer />
      </div>
      {isGalleryOpen && <FullscreenGallery />}
    </div>
  );
};

export default Layout;
