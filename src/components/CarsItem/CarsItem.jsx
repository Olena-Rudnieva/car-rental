import { CarWrapper, Img, CarItem } from './CarsItem.styled';

export const CarsItem = ({ car }) => {
  const {
    // id,
    make,
    model,
    year,
    img,
    rentalPrice,
    // rentalCompany,
    // type,
    // functionalities,
    address,
  } = car;
  return (
    <CarWrapper>
      <CarItem>
        <div>
          <Img src={img} alt={model} />
        </div>
        <div>
          <p>
            {make}
            <span>{model}</span>, {year}
          </p>
          <p>{rentalPrice}</p>
        </div>
        <p>{address}</p>
      </CarItem>
    </CarWrapper>
  );
};
