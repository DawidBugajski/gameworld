import React from 'react';
import { Footer, ContentRoutes, Header } from 'components';
import { useSelector } from 'react-redux';

const Layout = () => {
  const { isMenuOpen } = useSelector((state) => state.toggleMenu);
  const insetLayout = isMenuOpen ? 'lg:ml-[300px]' : 'lg:ml-[150px]';

  return (
    <>
      <Header />
      <div
        className={`flex flex-col text-white ${insetLayout} transition-all duration-300`}
      >
        <ContentRoutes />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
