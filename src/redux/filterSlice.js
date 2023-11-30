import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: { brand: '', price: '', mileage: { min: '', max: '' } },
  },
  reducers: {
    addFilter: (state, action) =>
      (state.filter[action.payload.filter] = action.payload.value),
    removeFilter(state) {
      state.filter.brand = '';
      state.filter.price = '';
      state.filter.mileage.max = '';
      state.filter.mileage.min = '';
    },
  },
});

export const { addFilter, removeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
