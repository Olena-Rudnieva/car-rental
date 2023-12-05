import PropTypes from 'prop-types';
import { ButtonStyle } from './Button.styled';

export const Button = ({ type, padding, text, handleClick }) => {
  return (
    <ButtonStyle type={type} padding={padding} onClick={handleClick}>
      {text}
    </ButtonStyle>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  padding: PropTypes.string,
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};
