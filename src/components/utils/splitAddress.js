export const splitAddress = address => {
  const [street, city, country] = address?.split(',');
  const splitedAddress = {
    street,
    city,
    country,
  };
  return splitedAddress;
};
