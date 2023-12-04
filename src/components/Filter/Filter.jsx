import { useDispatch, useSelector } from 'react-redux';
import { Input, InputWrapper, Label, Wrapper, Button } from './Filter.styled';
import Select from 'react-select';
import { selectBrands, selectFilter, selectPrice } from 'redux/selectors';
import { useState } from 'react';
import { addFilter } from 'redux/filterSlice';
import { stylesBrand, stylesPrice } from './filtersStyles';

export const Filter = () => {
  const [brand, setBrand] = useState({ value: 'all', label: 'Enter the text' });
  const [price, setPrice] = useState({ value: 'all', label: 'To $' });
  const [mileage, setMileage] = useState({ min: '', max: '' });

  const dispatch = useDispatch();
  const brands = useSelector(selectBrands);
  const prices = useSelector(selectPrice);

  const handleChange = e => {
    switch (e.target.name) {
      case 'min':
        setMileage(prevMileage => ({
          ...prevMileage,
          min: e.target.value,
        }));
        break;
      case 'max':
        setMileage(prevMileage => ({
          ...prevMileage,
          max: e.target.value,
        }));
        break;
      default:
        return;
    }
  };

  const reset = () => {
    setBrand({ value: 'all', label: 'Enter the text' });
    setPrice({ value: 'all', label: 'To $' });
    setMileage({ min: '', max: '' });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      brand: brand.value,
      price: price.value,
      mileage: { min: mileage.min, max: mileage.max },
    };
    dispatch(addFilter(data));

    reset();
  };

  return (
    <>
      <Wrapper>
        <InputWrapper>
          <Label htmlFor="brand">Car brand </Label>
          <Select
            id="brand"
            value={brand}
            options={brands}
            onChange={setBrand}
            isSearchable
            styles={stylesBrand}
            placeholder="Enter the text"
          />
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="price">Price/ 1 hour </Label>
          <Select
            id="price"
            value={price}
            options={prices}
            onChange={setPrice}
            isSearchable
            styles={stylesPrice}
            placeholder="To $"
          />
        </InputWrapper>

        <form onSubmit={handleSubmit}>
          <Label htmlFor="min">Сar mileage / km </Label>
          <InputWrapper>
            <Input
              id="min"
              name="min"
              type="number"
              value={mileage.min}
              placeholder="From:"
              onChange={handleChange}
              left="true"
            />
          </InputWrapper>

          <InputWrapper>
            <Input
              name="max"
              value={mileage.max}
              type="number"
              placeholder="To:"
              onChange={handleChange}
            />
          </InputWrapper>

          <Button type="submit">Search</Button>
        </form>
      </Wrapper>
    </>
  );
};
