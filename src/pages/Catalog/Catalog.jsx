import { CarsList } from 'components/Carslist/Carslist';
import { Container } from 'components/Container/Container';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { Section } from 'components/Section/Section';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFilter } from 'redux/filterSlice';
import { fetchCars } from 'redux/operations';
import { selectCars, selectIsLoading } from 'redux/selectors';

const Catalog = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const cars = useSelector(selectCars);

  useEffect(() => {
    dispatch(fetchCars());
    dispatch(removeFilter());
  }, [dispatch]);

  return (
    <>
      <Section>
        <Container>
          <Filter />
          {isLoading && <Loader />}
          {cars.length > 0 && <CarsList cars={cars} />}
        </Container>
      </Section>
    </>
  );
};

export default Catalog;
