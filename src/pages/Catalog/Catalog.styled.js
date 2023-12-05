import styled from 'styled-components';

export const EmptyPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 22px;
  color: var(--black);
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    font-size: 30px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 40px;
  }
`;
