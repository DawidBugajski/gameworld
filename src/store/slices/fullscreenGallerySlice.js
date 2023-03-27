import { createSlice } from '@reduxjs/toolkit';

const fullscreenGallerySlice = createSlice({
  name: 'fullscreenGallery',
  initialState: { isGalleryOpen: false, currentImageIndex: 0 },
  reducers: {
    setOpenGallery: (state) => {
      state.isGalleryOpen = true;
    },
    setCloseGallery: (state) => {
      state.isGalleryOpen = false;
    },
    setCurrentImageIndex: (state, action) => {
      state.currentImageIndex = action.payload;
      console.log(state.currentImageIndex);
    },
  },
});

export const { setOpenGallery, setCloseGallery, setCurrentImageIndex } =
  fullscreenGallerySlice.actions;
export default fullscreenGallerySlice.reducer;
