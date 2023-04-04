import { createSlice } from '@reduxjs/toolkit';

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {
    games: JSON.parse(localStorage.getItem('wishlistItems')) || [],
  },
  reducers: {
    setAddToWishlist: (state, action) => {
      const game = action.payload;
      if (state.games.some((item) => item.name === game.name)) return;
      state.games.push(game);
      localStorage.setItem(
        'wishlistItems',
        JSON.stringify(state.games.map((game) => game))
      );
    },
    setRemoveFromWishlist: (state, action) => {
      const deletedGame = action.payload;
      state.games = state.games.filter(
        (game) => game.name !== deletedGame.name
      );
      localStorage.setItem(
        'wishlistItems',
        JSON.stringify(state.games.map((game) => game))
      );
    },
    setClearWishlist: (state) => {
      state.games = [];
      localStorage.removeItem('wishlistItems');
    },
    setMoveGame: (state, action) => {
      const { id, atIndex } = action.payload;
      const game = state.games.find((game) => game.id === id);
      const currentIndex = state.games.indexOf(game);

      if (currentIndex !== -1 && atIndex !== -1) {
        state.games.splice(currentIndex, 1);
        state.games.splice(atIndex, 0, game);
      }
      localStorage.setItem(
        'wishlistItems',
        JSON.stringify(state.games.map((game) => game))
      );
    },
  },
});

export const {
  setAddToWishlist,
  setRemoveFromWishlist,
  setClearWishlist,
  setMoveGame,
} = wishlistSlice.actions;
export default wishlistSlice.reducer;
