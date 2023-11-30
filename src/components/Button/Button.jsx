import { ButtonStyle } from './Button.styled';

export const Button = ({ padding, text }) => {
  return (
    <ButtonStyle type="button" padding={padding}>
      {text}
    </ButtonStyle>
  );
};
