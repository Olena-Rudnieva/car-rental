import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './operations';

export const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    favorites: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        item => item.id !== action.payload.id
      );
    },
  },

  extraReducers: {
    [fetchCars.pending](state) {
      state.isLoading = true;
    },
    [fetchCars.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchCars.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { addFavorite, removeFavorite } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
