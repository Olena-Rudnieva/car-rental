import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;

  position: relative;
  z-index: 2;
  margin-bottom: 50px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media (min-width: 768px) {
    flex-direction: column;
    gap: 18px;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 1440px) {
    flex-direction: row;
  }
`;

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 44px 10px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 10px;
  }
  @media (min-width: 1440px) {
    gap: 18px;
  }
`;

export const CommonInputWrapper = styled.div`
  display: flex;
  gap: 10px;

  @media (min-width: 1440px) {
    gap: 18px;
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
  line-height: 1.28;
`;

export const MileageWrapper = styled.div`
  display: flex;
  position: relative;
`;

export const LowerLabel = styled.label`
  position: absolute;
  top: -28px;
  color: var(--grey);
  font-weight: 500;
  line-height: 1.28;
`;

export const LeftInput = styled.input`
  width: 120px;
  height: 48px;
  padding: 14px 41px 14px 24px;
  border-radius: 14px 0px 0px 14px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  background: #f7f7fb;
  border: 1px solid transparent;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
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
    font-size: 14px;
    font-weight: 500;
  }

  @media (min-width: 768px) {
    width: 160px;
    &::placeholder {
      font-size: 18px;
    }
  }
`;

export const RightInput = styled.input`
  width: 120px;
  height: 48px;
  padding: 14px 41px 14px 24px;
  border-radius: 0px 14px 14px 0px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  background: #f7f7fb;
  border: 1px solid transparent;
  border-right: none;
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
    font-size: 14px;
    font-weight: 500;
  }

  @media (min-width: 768px) {
    width: 160px;
    &::placeholder {
      font-size: 18px;
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 18px;
`;

export const Button = styled.button`
  padding: 10px 24px;
  border-radius: 12px;
  border: none;
  background: var(--blue);
  font-size: 14px;
  font-family: 'Manrope', sans-serif;
  font-weight: 600;
  color: var(--white);
  transition: background 350ms cubic-bezier(0.17, 0.67, 0.83, 0.67);
  &:hover,
  &:focus {
    background: var(--accent);
  }

  @media (min-width: 768px) {
    padding: 14px 44px;
  }
`;
