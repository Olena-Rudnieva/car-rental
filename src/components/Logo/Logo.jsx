import { Link } from 'react-router-dom';
import { LogoTitle } from './Logo.styled';

export const Logo = () => {
  return (
    <div>
      <Link to="/">
        <LogoTitle>Car rental</LogoTitle>
      </Link>
    </div>
  );
};
