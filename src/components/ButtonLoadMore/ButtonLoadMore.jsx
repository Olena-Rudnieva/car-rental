import PropTypes from 'prop-types';
import { Button } from './ButtonLoadMore.styled';

export const ButtonLoadMore = ({ handleClick }) => {
  return <Button onClick={handleClick}>Load more</Button>;
};

ButtonLoadMore.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
