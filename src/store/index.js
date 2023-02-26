import { configureStore } from '@reduxjs/toolkit';
import toggleMenuSlice from './slices/toggleMenuSlice';

export const store = configureStore({
  reducer: {
    toggleMenu: toggleMenuSlice,
  },
});
