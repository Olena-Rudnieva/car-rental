import { Logo } from 'components/Logo/Logo';
import { Nav, StyledLink, FooterWrapper } from './Footer.styled';

export const Footer = () => {
  return (
    <FooterWrapper>
      <Logo />
      <Nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/catalog">Catalog</StyledLink>
        <StyledLink to="/favorites">Favorites</StyledLink>
      </Nav>
    </FooterWrapper>
  );
};
