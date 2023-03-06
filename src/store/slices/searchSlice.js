import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    value: '',
    hasInputValue: false,
  },
  reducers: {
    setSearchValue: (state, action) => {
      state.value = action.payload;
      state.value.length >= 1
        ? (state.hasInputValue = true)
        : (state.hasInputValue = false);
    },
    setClearValue: (state) => {
      state.value = '';
      state.hasInputValue = false;
    },
  },
});

export const { setSearchValue, setClearValue } = searchSlice.actions;
export default searchSlice.reducer;
