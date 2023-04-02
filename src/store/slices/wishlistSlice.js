import { createSlice } from '@reduxjs/toolkit';

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {
    games: [],
  },
  reducers: {
    setAddToWishlist: (state, action) => {
      const game = action.payload;
      if (state.games.some((item) => item.name === game.name)) return;
      state.games.push(game);
      console.log('ADDED NEW GAME', state.games);
    },
    setRemoveFromWishlist: (state, action) => {
      const deletedGame = action.payload;
      state.games = state.games.filter(
        (game) => game.name !== deletedGame.name
      );
      console.log('REMOVED GAME', state.games);
    },
    setClearWishlist: (state) => {
      state.games = [];
      console.log('CLEARED', state.games);
    },
  },
});

export const { setAddToWishlist, setRemoveFromWishlist, setClearWishlist } =
  wishlistSlice.actions;
export default wishlistSlice.reducer;
