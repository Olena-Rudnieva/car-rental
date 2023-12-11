import PropTypes from 'prop-types';
import { Description, Item, Wrapper } from './CarDetailsDescription.styled';

export const CarDetailsDescription = ({
  city,
  country,
  type,
  id,
  year,
  fuelConsumption,
  engineSize,
}) => {
  return (
    <Wrapper>
      <Description>
        <Item>{city}</Item>
        <Item>{country}</Item>
        <Item>Id: {id}</Item>
        <Item>Year: {year}</Item>
        <Item>Type: {type}</Item>
        <Item>Fuel Consumption: {fuelConsumption}</Item>
        <Item>Engine Size: {engineSize}</Item>
      </Description>
    </Wrapper>
  );
};

CarDetailsDescription.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  fuelConsumption: PropTypes.string.isRequired,
  engineSize: PropTypes.string.isRequired,
};
