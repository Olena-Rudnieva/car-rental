import { Cars } from './Carslist.styled';
import { CarsItem } from 'components/CarsItem/CarsItem';

export const CarsList = ({ cars }) => {
  return (
    <Cars>
      {cars.map(car => (
        <CarsItem car={car} key={car.id} />
      ))}
    </Cars>
  );
};
