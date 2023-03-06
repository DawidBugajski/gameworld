import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage, Wishlist } from 'pages';

const ContentRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/wishlist' element={<Wishlist />} />
    </Routes>
  );
};

export default ContentRoutes;
