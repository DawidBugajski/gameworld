import { createSlice } from '@reduxjs/toolkit';

const toggleMenuSlice = createSlice({
  name: 'toggleMenu',
  initialState: { isMenuOpen: false },
  reducers: {
    setToggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

export const { setToggleMenu } = toggleMenuSlice.actions;
export default toggleMenuSlice.reducer;
