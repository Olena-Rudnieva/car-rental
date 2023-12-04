import { ButtonLoadMore } from 'components/ButtonLoadMore/ButtonLoadMore';
import { CarsList } from 'components/Carslist/Carslist';
import { Container } from 'components/Container/Container';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { Section } from 'components/Section/Section';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from 'redux/operations';
import { selectCars, selectFilter, selectIsLoading } from 'redux/selectors';

const Catalog = () => {
  const [itemsOnPage, setItemsOnPage] = useState(12);
  const [isLoadMore, setIsLoadMore] = useState(true);
  const [filteredCars, setFilteredCars] = useState(null);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const filter = useSelector(selectFilter);

  const visibleOnPage = () => {
    setItemsOnPage(prevState => prevState + 12);
  };

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  useEffect(() => {
    itemsOnPage >= cars.length || cars.length < 13
      ? setIsLoadMore(false)
      : setIsLoadMore(true);
  }, [cars.length, isLoadMore, itemsOnPage]);

  useEffect(() => {
    if (filter === null) {
      return;
    }
    const filtered = cars.filter(car =>
      car.make.toLowerCase().includes(filter.brand)
    );
    setFilteredCars(filtered);
  }, [filter, cars]);

  return (
    <>
      <Section>
        <Container>
          <Filter />
          {isLoading && <Loader />}
          {filteredCars ? (
            <CarsList cars={filteredCars} />
          ) : (
            <CarsList cars={cars.slice(0, itemsOnPage)} />
          )}

          {isLoadMore && <ButtonLoadMore handleClick={visibleOnPage} />}
        </Container>
      </Section>
    </>
  );
};

export default Catalog;
