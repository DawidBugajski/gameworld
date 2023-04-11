import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import Wishlist from 'pages/Wishlist';
import GameDetails from 'pages/GameDetails';
import Error from '../components/Error';

const ContentRoutes = () => {
  return (
    <Routes>
      <Route path='/gameworld/' element={<HomePage />} />
      <Route path='/gameworld/wishlist' element={<Wishlist />} />
      <Route path='/gameworld/games/:id' element={<GameDetails />} />
      <Route path='*' element={<Error />} />
    </Routes>
  );
};

export default ContentRoutes;
