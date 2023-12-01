import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 20px;
  /* border-bottom: 1px solid #8eaefb; */
  width: 100%;
  background: linear-gradient(to bottom, #ffffff, #1976d2);
`;

export const Nav = styled.nav`
  display: flex;
  gap: 70px;
`;

export const StyledLink = styled(NavLink)`
  /* color: #121417; */
  color: var(--white);
  text-shadow: 2px 2px 10px #2d3e56;
  font-size: 30px;
  font-weight: 600;
  line-height: 1.1;
  &.active {
    color: var(--accent);
  }
`;
