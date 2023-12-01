import { ButtonStyle } from './Button.styled';

export const Button = ({ padding, text, handleClick }) => {
  return (
    <ButtonStyle type="button" padding={padding} onClick={handleClick}>
      {text}
    </ButtonStyle>
  );
};
