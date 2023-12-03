import { CarsItem } from 'components/CarsItem/CarsItem';
import { Container } from 'components/Container/Container';
import { Loader } from 'components/Loader/Loader';
import { useSelector } from 'react-redux';
import { selectFavorites, selectIsLoading } from 'redux/selectors';
import { Item, List, StyledLink, Text, Wrapp } from './Favorites.styled';
import { Link } from 'react-router-dom';
import { Section } from 'components/Section/Section';

const Favorite = () => {
  const favoriteCars = useSelector(selectFavorites);
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      <Section>
        <Container>
          <Wrapp>
            {isLoading ? (
              <Loader />
            ) : (
              <>
                {favoriteCars.length === 0 ? (
                  <>
                    <Text>No favorite cars yet</Text>
                    <StyledLink to="/catalog">Сatalog</StyledLink>
                  </>
                ) : (
                  <List>
                    {favoriteCars.map(car => (
                      <CarsItem car={car} key={car.id} />
                    ))}
                  </List>
                )}
              </>
            )}
          </Wrapp>
        </Container>
      </Section>
    </>
  );
};

export default Favorite;
