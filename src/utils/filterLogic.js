export const filterLogic = (cars, filter) => {
  const filterByBrand = car =>
    filter.brand === 'all' || car.make.toLowerCase() === filter.brand;

  const filterByPrice = car =>
    filter.price === 'all' || Number(car.rentalPrice.slice(1)) <= filter.price;

  const filterByMileage = car => {
    const { min, max } = filter.mileage;
    if (min === '' && max === '') {
      return true;
    }

    const carMileage = car.mileage;
    return (
      (min === '' || carMileage >= parseInt(min)) &&
      (max === '' || carMileage <= parseInt(max))
    );
  };

  const filtered = cars.filter(
    car => filterByBrand(car) && filterByPrice(car) && filterByMileage(car)
  );

  return filtered;
};
