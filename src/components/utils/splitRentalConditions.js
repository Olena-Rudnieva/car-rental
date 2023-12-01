export const splitRentalConditions = conditions => {
  const [age, licence, required] = conditions.split('\n');
  const splitedConditions = {
    age,
    licence,
    required,
  };
  return splitedConditions;
};
