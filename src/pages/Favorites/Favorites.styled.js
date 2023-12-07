import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p`
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 50px;
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  color: var(--white);
  font-family: 'Manrope', sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.43;
  background: var(--blue);
  padding: 12px 50px;
  border-radius: 12px;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  transition: background 300ms var(--transition);

  &:hover,
  &:focus {
    background: var(--accent);
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 50px 29px;
`;

export const Item = styled.li`
  width: 274px;
`;
