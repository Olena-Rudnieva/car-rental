import { CarsList } from 'components/Carslist/Carslist';
import { Container } from 'components/Container/Container';
import { Filter } from 'components/Filter/Filter';
import { Section } from 'components/Section/Section';

const Catalog = () => {
  return (
    <>
      <Section>
        <Container>
          <Filter />
          <CarsList />
        </Container>
      </Section>
    </>
  );
};

export default Catalog;
