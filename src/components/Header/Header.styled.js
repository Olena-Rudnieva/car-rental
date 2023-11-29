import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  display: flex;
  gap: 200px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 50px;
`;

export const StyledLink = styled(NavLink)`
  color: #121417;
  &.active {
    color: #3470ff;
  }
`;
