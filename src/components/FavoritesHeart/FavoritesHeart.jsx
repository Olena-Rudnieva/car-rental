import PropTypes from 'prop-types';
import { Heart, IconEmpty, IconFavorite } from './FavoritesHeart.styled';
import sprite from '../../images/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from 'redux/selectors';
import { addFavorite, removeFavorite } from 'redux/carsSlice';

export const FavoritesHeart = ({ car }) => {
  const dispatch = useDispatch();
  const favoriteCars = useSelector(selectFavorites);
  const isFavorite = favoriteCars.find(item => item.id === car.id);

  const handleToggleHeart = () => {
    isFavorite ? dispatch(removeFavorite(car)) : dispatch(addFavorite(car));
  };

  return (
    <Heart type="button" onClick={handleToggleHeart}>
      {isFavorite ? (
        <IconFavorite>
          <use href={sprite + '#heart'}></use>
        </IconFavorite>
      ) : (
        <IconEmpty>
          <use href={sprite + '#heart'}></use>
        </IconEmpty>
      )}
    </Heart>
  );
};

FavoritesHeart.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};
