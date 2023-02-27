import React from 'react';
import { Footer, Content, Header } from 'components';

const Layout = () => {
  return (
    <div className='flex flex-col h-screen text-white bg-neutral-800'>
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default Layout;
