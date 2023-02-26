import { createSlice } from '@reduxjs/toolkit';

const sideBarSlice = createSlice({
  name: 'sideBar',
  initialState: { width: 300 },
  reducers: {
    setToggleSideBar: (state) => {
      if (state.width === 300) {
        state.width = 100;
      } else {
        state.width = 300;
      }
      console.log(state.width);
    },
  },
});

export const { setToggleSideBar } = sideBarSlice.actions;
export default sideBarSlice.reducer;
