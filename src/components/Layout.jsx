import React from 'react';
import { Footer, Content, Header } from 'components';

const Layout = () => {
  return (
    <div className='flex flex-col text-white'>
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default Layout;
