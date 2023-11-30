import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--accent);
  width: 100%;
  background: linear-gradient(to bottom, #ffffff, #8eaefb);
`;

export const Nav = styled.nav`
  display: flex;
  gap: 70px;
`;

export const StyledLink = styled(NavLink)`
  color: #121417;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.1;
  &.active {
    color: #3470ff;
  }
`;
