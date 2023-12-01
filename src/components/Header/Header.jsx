import { HeaderWrapper, Nav, StyledLink } from './Header.styled';

export const Header = () => {
  return (
    <HeaderWrapper>
      <Nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/catalog">Catalog</StyledLink>
        <StyledLink to="/favorites">Favorites</StyledLink>
      </Nav>
    </HeaderWrapper>
  );
};
