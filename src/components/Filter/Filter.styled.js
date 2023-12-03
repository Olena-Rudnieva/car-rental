import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 18px;
  margin-bottom: 50px;

  position: relative;
  z-index: 2;
  margin-bottom: 50px;

  & > form {
    display: flex;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const Label = styled.label`
  position: absolute;
  top: -28px;
  color: var(--grey);
  font-weight: 500;
  line-height: 128.571%;
`;

export const Input = styled.input`
  width: 160px;
  height: 48px;
  padding: 14px 41px 14px 24px;
  border-radius: ${props =>
    props.left ? '14px 0px 0px 14px' : ' 0px 14px 14px 0px;'};
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  background: #f7f7fb;
  border: 1px solid transparent;
  border-right: ${props =>
    props.left ? '1px solid rgba(138, 138, 137, 0.20)' : 'none'};
  font-weight: 500;
  font-size: 18px;
  outline: none;
  color: var(--black);

  &:hover,
  &:focus {
    border: 1px solid #2684ff;
  }

  &::placeholder {
    color: var(--black);
    font-family: Manrope;
    font-size: 18px;
    font-weight: 500;
  }
`;

export const Button = styled.button`
  padding: 14px 44px;
  border-radius: 12px;
  border: none;
  background: var(--blue);
  font-size: 14px;
  font-family: 'Manrope', sans-serif;
  font-weight: 600;
  color: var(--white);
  margin-left: 18px;
  transition: background 350ms cubic-bezier(0.17, 0.67, 0.83, 0.67);
  &:hover,
  &:focus {
    background: var(--accent);
  }
`;
