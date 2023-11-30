import { Form } from './Filter.styled';

export const Filter = () => {
  return (
    <>
      <Form>
        <label>
          Car brand
          <select name="brand">
            <option defaultValue="Brand">Please choose car brand</option>
          </select>
        </label>
        <label>
          Price/ 1 hour
          <select name="price">
            <option defaultValue="Brand">To $</option>
          </select>
        </label>
        <label>
          Сar mileage / km
          <input
            type="number"
            name="mileageFrom"
            placeholder="From"
            min="0"
            step="10"
          />
        </label>
        <input
          type="number"
          name="mileageTo"
          placeholder="To"
          min="10"
          step="10"
        />
        <button type="submit">Search</button>
      </Form>
    </>
  );
};
