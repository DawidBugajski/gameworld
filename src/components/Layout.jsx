import React from 'react';
import { Footer, ContentRoutes, Header } from 'components';

const Layout = () => {
  return (
    <div className='flex flex-col text-white'>
      <Header />
      <ContentRoutes />
      <Footer />
    </div>
  );
};

export default Layout;
