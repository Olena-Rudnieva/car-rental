import PropTypes from 'prop-types';
import { Description, Item } from './CarsDescription.styled';

export const CarsDescription = ({
  city,
  country,
  rentalCompany,
  type,
  model,
  id,
  functionalities,
}) => {
  return (
    <Description>
      <Item>{city}</Item>
      <Item>{country}</Item>
      <Item>{rentalCompany}</Item>
      <Item>{type}</Item>
      <Item>{model}</Item>
      <Item>{id}</Item>
      <Item>{functionalities[0]}</Item>
    </Description>
  );
};

CarsDescription.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  rentalCompany: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  functionalities: PropTypes.arrayOf(PropTypes.string).isRequired,
};
