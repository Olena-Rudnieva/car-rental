import styled from 'styled-components';

export const ContainerWrapper = styled.div`
  width: 100vw;
  margin: 0, auto;
  padding: 0 15px;
  font-family: 'Manrope', sans-serif;

  @media (min-width: 375px) {
    width: 375px;
  }

  @media (min-width: 768px) {
    width: 768px;
  }

  @media (min-width: 1440px) {
    width: 1214px;
  }
`;
