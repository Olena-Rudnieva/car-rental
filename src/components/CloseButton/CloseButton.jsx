import PropTypes from 'prop-types';
import { Btn, Icon } from './CloseButton.styled';
import sprite from '../../images/sprite.svg';

export const CloseButton = ({ handleCloseModal }) => {
  return (
    <Btn type="button" onClick={handleCloseModal}>
      <Icon>
        <use href={sprite + '#close'}></use>
      </Icon>
    </Btn>
  );
};

CloseButton.propTypes = {
  handleCloseModal: PropTypes.func.isRequired,
};
