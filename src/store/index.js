import { configureStore } from '@reduxjs/toolkit';
import sideBarSlice from './slices/sideBarSlice';

export const store = configureStore({
  reducer: {
    sideBar: sideBarSlice,
  },
});
