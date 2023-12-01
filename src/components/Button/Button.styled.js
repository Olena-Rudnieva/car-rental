import styled from 'styled-components';

export const ButtonStyle = styled.button`
  color: var(--white);
  font-family: 'Manrope', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  background: var(--blue);
  padding: ${props => props.padding};
  border-radius: 12px;
  border: none;
  transition: background 300ms var(--transition);

  &:hover,
  &:focus {
    background: var(--accent);
  }
`;
