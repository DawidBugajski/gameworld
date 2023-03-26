import { configureStore } from '@reduxjs/toolkit';
import toggleMenuSlice from './slices/toggleMenuSlice';
import searchSlice from './slices/searchSlice';
import fullscreenGallerySlice from './slices/fullscreenGallerySlice';

export const store = configureStore({
  reducer: {
    toggleMenu: toggleMenuSlice,
    search: searchSlice,
    fullscreenGallery: fullscreenGallerySlice,
  },
});
