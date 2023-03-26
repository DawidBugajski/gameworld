import { createSlice } from '@reduxjs/toolkit';

const fullscreenGallerySlice = createSlice({
  name: 'fullscreenGallery',
  initialState: { isGalleryOpen: false },
  reducers: {
    setOpenGallery: (state) => {
      state.isGalleryOpen = true;
    },
    setCloseGallery: (state) => {
      state.isGalleryOpen = false;
    },
  },
});

export const { setOpenGallery, setCloseGallery } =
  fullscreenGallerySlice.actions;
export default fullscreenGallerySlice.reducer;
