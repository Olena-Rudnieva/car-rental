import { ButtonLoadMore } from 'components/ButtonLoadMore/ButtonLoadMore';
import { CarsList } from 'components/Carslist/Carslist';
import { Container } from 'components/Container/Container';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { Section } from 'components/Section/Section';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterCars, removeFilter } from 'redux/filterSlice';
import { fetchCars } from 'redux/operations';
import {
  selectCars,
  selectFilter,
  selectFilteredCars,
  selectIsLoading,
} from 'redux/selectors';
import { EmptyPage } from './Catalog.styled';
import { filterLogic } from 'utils/filterLogic';

const Catalog = () => {
  const [itemsOnPage, setItemsOnPage] = useState(12);
  const [isLoadMore, setIsLoadMore] = useState(true);

  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const filter = useSelector(selectFilter);
  const filteredCars = useSelector(selectFilteredCars);

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

    if (
      filter.brand === 'all' &&
      filter.price === 'all' &&
      filter.mileage.min === '' &&
      filter.mileage.max === ''
    ) {
      dispatch(removeFilter());
      return;
    }

    const filtered = filterLogic(cars, filter);

    dispatch(filterCars(filtered));
  }, [filter, cars, dispatch]);

  return (
    <>
      <Section>
        <Container>
          <Filter />
          {isLoading && <Loader />}
          {filter !== null ? (
            filteredCars?.length > 0 ? (
              <CarsList cars={filteredCars} />
            ) : (
              <EmptyPage>
                <p>No cars found for your search</p>
              </EmptyPage>
            )
          ) : (
            cars?.length > 0 && (
              <>
                <CarsList cars={cars.slice(0, itemsOnPage)} />
                {isLoadMore && <ButtonLoadMore handleClick={visibleOnPage} />}
              </>
            )
          )}
        </Container>
      </Section>
    </>
  );
};

export default Catalog;
