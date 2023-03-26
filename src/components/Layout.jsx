import React, { useEffect } from 'react';
import Footer from 'components/Footer';
import ContentRoutes from 'components/ContentRoutes';
import Sidebar from 'components/Sidebar';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { setCloseGallery } from 'store/slices/fullscreenGallerySlice';

const Layout = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { isMenuOpen } = useSelector((state) => state.toggleMenu);
  const { isGalleryOpen } = useSelector((state) => state.fullscreenGallery);
  const insetLayout = isMenuOpen ? 'lg:ml-[300px]' : 'lg:ml-[100px]';
  const isFullscreenGalleryOpen = isGalleryOpen
    ? 'h-screen overflow-hidden'
    : '';

  // Set flag to false with fullscreenGallery when changing the routing so that the sidebar is set to fixed
  useEffect(() => {
    if (!pathname.includes('/games')) {
      dispatch(setCloseGallery());
    }
  }, [dispatch, pathname]);

  return (
    <div className={`shadow-left ${isFullscreenGalleryOpen}`}>
      <Sidebar />
      <div
        className={`flex flex-col text-white ${insetLayout} transition-all duration-300`}
      >
        <ContentRoutes />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
