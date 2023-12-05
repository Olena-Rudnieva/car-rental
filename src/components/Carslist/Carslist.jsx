import PropTypes from 'prop-types';
import { Cars } from './Carslist.styled';
import { CarsItem } from 'components/CarsItem/CarsItem';

export const CarsList = ({ cars }) => {
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

CarsList.propTypes = {
  cars: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      make: PropTypes.string.isRequired,
      model: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
      rentalPrice: PropTypes.string.isRequired,
      rentalCompany: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      functionalities: PropTypes.arrayOf(PropTypes.string).isRequired,
      address: PropTypes.string.isRequired,
    })
  ).isRequired,
};
