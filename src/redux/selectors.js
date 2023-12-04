import { createSelector } from '@reduxjs/toolkit';

export const selectCars = state => state.cars.items;
export const selectIsLoading = state => state.cars.isLoading;
export const selectFavorites = state => state.cars.favorites;
export const selectFilter = state => state.filter.filter;

export const selectAllBrands = state => selectCars(state);
// export const selectBrands = createSelector([selectAllBrands], cars => {
//   const cars = selectCars(state);
//   const brands = cars.map(item => item.make);
//   const uniqueBrands = brands.filter(
//     (price, index, array) => array.indexOf(price) === index
//   );
//   const brandsArray = Array.from(uniqueBrands).map(brand => ({
//     value: brand.toLowerCase(),
//     label: brand,
//   }));
//   return brandsArray;
// };
export const selectBrands = createSelector([selectAllBrands], cars => {
  const brands = cars.map(item => item.make);
  const uniqueBrands = brands.filter(
    (price, index, array) => array.indexOf(price) === index
  );
  const brandsArray = Array.from(uniqueBrands).map(brand => ({
    value: brand.toLowerCase(),
    label: brand,
  }));
  return brandsArray;
});

export const selectAllPrice = state => selectCars(state);

export const selectPrice = createSelector([selectAllPrice], cars => {
  const prices = cars.map(item =>
    parseInt(item.rentalPrice.replace('$', ''), 10)
  );
  const uniquePrices = prices.filter(
    (price, index, array) => array.indexOf(price) === index
  );
  const maxPrice = Math.max(...uniquePrices);
  const priceOption = [];

  for (let i = 30; i <= maxPrice; i += 10) {
    priceOption.push({ value: i, label: i.toString() });
  }
  return priceOption;
});

export const selectFilteredCars = state => state.filter.filterCars;
