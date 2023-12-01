import { CarDetailsDescription } from 'components/CarDetailsDescription/CarDetailsDescription';
import {
  Wrapper,
  Img,
  TitleWrapper,
  Title,
  TitleAccent,
  Subtitle,
  CarDescription,
  List1,
  List2,
  BlockWrapper,
  Block,
  AccentText,
} from './ModalCarDetails.styled';
import { splitAddress } from 'components/utils/splitAddress';
import { splitRentalConditions } from 'components/utils/splitRentalConditions';
import {
  Description,
  Item,
} from 'components/CarDetailsDescription/CarDetailsDescription.styled';
import { Button } from 'components/Button/Button';

export const ModalCarDetails = ({ handleModalToggle, car }) => {
  const {
    id,
    make,
    model,
    year,
    rentalPrice,
    rentalCompany,
    type,
    functionalities,
    address,
    description,
    accessories,
    fuelConsumption,
    engineSize,
    rentalConditions,
    mileage,
  } = car;

  const { city, country } = splitAddress(address);
  const { age, licence, required } = splitRentalConditions(rentalConditions);
  const splitAge = age.split(':');
  const phoneNumber = '+380730000000';

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
    handleModalToggle();
  };

  return (
    <Wrapper>
      <Img src={car.img} alt="Car" />
      <TitleWrapper>
        <Title>
          {make} <TitleAccent>{model}</TitleAccent>, {year}
        </Title>
      </TitleWrapper>
      <CarDetailsDescription
        city={city}
        country={country}
        rentalCompany={rentalCompany}
        type={type}
        model={model}
        id={id}
        functionalities={functionalities}
        year={year}
        fuelConsumption={fuelConsumption}
        engineSize={engineSize}
      />
      <CarDescription>{description}</CarDescription>
      <Subtitle>Accessories and functionalities:</Subtitle>
      <List1>
        <Description>
          {accessories.map((item, index) => {
            return <Item key={index}>{item}</Item>;
          })}
        </Description>
      </List1>
      <List2>
        <Description>
          {functionalities.map((item, index) => {
            return <Item key={index}>{item}</Item>;
          })}
        </Description>
      </List2>
      <Subtitle>Rental Conditions:</Subtitle>
      <BlockWrapper>
        <Block>
          {splitAge[0]}: <AccentText>{splitAge[1]}</AccentText>
        </Block>
        <Block>{licence}</Block>
        <Block>{required}</Block>
        <Block>
          Mileage: <AccentText>{mileage}</AccentText>
        </Block>
        <Block>
          Price: <AccentText>{rentalPrice}</AccentText>
        </Block>
      </BlockWrapper>
      <Button
        padding={'12px 50px'}
        text={'Rental car'}
        handleClick={handleCall}
      />
    </Wrapper>
  );
};
