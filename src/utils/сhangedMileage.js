export const changedMileage = mileage => {
  const newMileage = Number(mileage).toLocaleString('en-US');
  return newMileage;
};
