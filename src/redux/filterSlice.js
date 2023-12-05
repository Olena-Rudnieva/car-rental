import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: null,
    filteredCars: [],
  },
  reducers: {
    addFilter(state, { payload }) {
      state.filter = payload;
    },
    filterCars(state, { payload }) {
      state.filteredCars = payload;
    },
    removeFilter(state, { payload }) {
      state.filter = null;
    },
  },
});

export const { addFilter, filterCars, removeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
