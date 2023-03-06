import { configureStore } from '@reduxjs/toolkit';
import toggleMenuSlice from './slices/toggleMenuSlice';
import searchSlice from './slices/searchSlice';

export const store = configureStore({
  reducer: {
    toggleMenu: toggleMenuSlice,
    search: searchSlice,
  },
});
