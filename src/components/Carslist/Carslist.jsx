import { Cars } from './Carslist.styled';
import { CarsItem } from 'components/CarsItem/CarsItem';

export const CarsList = ({ cars, handleLoadMore, isLoadMore }) => {
  return (
    <>
      <Cars>
        {cars.map(car => (
          <CarsItem car={car} key={car.id} />
        ))}
      </Cars>
    </>
  );
};
