import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    value: '',
    hasInputValue: false,
    showResults: false,
  },
  reducers: {
    setSearchValue: (state, action) => {
      state.value = action.payload;
      state.value.length >= 1
        ? (state.hasInputValue = true)
        : (state.hasInputValue = false);
      state.value.length >= 3
        ? (state.showResults = true)
        : (state.showResults = false);
    },
    setClearValue: (state) => {
      state.value = '';
      state.hasInputValue = false;
      state.showResults = false;
    },
    setHideResults: (state) => {
      state.showResults = false;
    },
  },
});

export const { setSearchValue, setClearValue, setHideResults } =
  searchSlice.actions;
export default searchSlice.reducer;
