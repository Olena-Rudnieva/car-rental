import PropTypes from 'prop-types';
import { CarsDescription } from 'components/CarsDescription/CarsDescription';
import {
  CarWrapper,
  Img,
  CarItem,
  ImgWrapper,
  TextWrapper,
  Title,
  TitleWrapper,
  TitleAccent,
  Price,
} from './CarsItem.styled';
import { splitAddress } from 'utils/splitAddress';
import { Button } from 'components/Button/Button';
import { useState } from 'react';
import { BasicModalWindow } from 'components/BasicModalWindow/BasicModalWindow';
import { ModalCarDetails } from 'components/ModalCarDetails/ModalCarDetails';
import { FavoritesHeart } from '../../components/FavoritesHeart/FavoritesHeart';

export const CarsItem = ({ car }) => {
  const {
    id,
    make,
    model,
    year,
    img,
    rentalPrice,
    rentalCompany,
    type,
    functionalities,
    address,
  } = car;

  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(state => !state);
    document.body.classList.toggle('body-scroll-lock');
  };

  const { city, country } = splitAddress(address);

  return (
    <CarWrapper>
      <CarItem>
        <ImgWrapper>
          <FavoritesHeart car={car} />
          <Img src={img} alt={model} />
        </ImgWrapper>
        <TextWrapper>
          <TitleWrapper>
            <Title>
              {make} <TitleAccent>{model}</TitleAccent>, {year}
            </Title>
            <Price>{rentalPrice}</Price>
          </TitleWrapper>
          <CarsDescription
            city={city}
            country={country}
            rentalCompany={rentalCompany}
            type={type}
            model={model}
            id={id}
            functionalities={functionalities}
          />
        </TextWrapper>
        <Button
          padding={'12px 98px'}
          type={'button'}
          text={'Learn more'}
          handleClick={handleModal}
        />
        {modal && (
          <BasicModalWindow handleModalToggle={handleModal}>
            <ModalCarDetails handleModalToggle={handleModal} car={car} />
          </BasicModalWindow>
        )}
      </CarItem>
    </CarWrapper>
  );
};

CarsItem.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.string.isRequired,
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    rentalPrice: PropTypes.string.isRequired,
    rentalCompany: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    functionalities: PropTypes.arrayOf(PropTypes.string).isRequired,
    address: PropTypes.string.isRequired,
  }).isRequired,
};
