import { Container } from 'components/Container/Container';
import { Filter } from 'components/Filter/Filter';
import { Section } from 'components/Section/Section';

const Catalog = () => {
  return (
    <>
      <Section>
        <Container>
          <Filter />
        </Container>
      </Section>
    </>
  );
};

export default Catalog;
