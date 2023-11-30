import { Puff } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

export const Loader = () => (
  <LoaderWrapper>
    <Puff
      height="80"
      width="80"
      radius={1}
      color="#6d97f8"
      ariaLabel="puff-loading"
      visible={true}
    />
  </LoaderWrapper>
);
