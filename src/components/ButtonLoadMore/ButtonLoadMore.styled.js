import styled from 'styled-components';

export const Button = styled.button`
  display: block;
  color: var(--blue);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  text-decoration-line: underline;
  border: none;
  background: transparent;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  transition: color 250ms var(--transition);

  &:hover,
  &:focus {
    color: var(--accent);
  }
`;
