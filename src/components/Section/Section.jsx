import PropTypes from 'prop-types';
import { SectionWrapper } from './Section.styled';

export const Section = ({ children }) => {
  return <SectionWrapper>{children}</SectionWrapper>;
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
};
