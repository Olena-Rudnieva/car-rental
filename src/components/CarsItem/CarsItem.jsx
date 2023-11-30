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
import { splitAddress } from 'components/utils/splitAddress';
import { Button } from 'components/Button/Button';

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

  const { city, country } = splitAddress(address);

  return (
    <CarWrapper>
      <CarItem>
        <ImgWrapper>
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
        <Button padding={'12px 98px'} text={'Learn more'} />
      </CarItem>
    </CarWrapper>
  );
};
