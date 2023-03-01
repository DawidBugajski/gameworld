import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage, Page } from 'pages';

const ContentRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/page' element={<Page />} />
    </Routes>
  );
};

export default ContentRoutes;

//
