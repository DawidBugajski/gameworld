import { configureStore } from '@reduxjs/toolkit';
import toggleMenuSlice from './slices/toggleMenuSlice';
import searchSlice from './slices/searchSlice';
import fullscreenGallerySlice from './slices/fullscreenGallerySlice';
import wishlistSlice from './slices/wishlistSlice';

export const store = configureStore({
  reducer: {
    toggleMenu: toggleMenuSlice,
    search: searchSlice,
    fullscreenGallery: fullscreenGallerySlice,
    wishlist: wishlistSlice,
  },
});
