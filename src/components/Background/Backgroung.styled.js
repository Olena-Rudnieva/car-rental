import styled from 'styled-components';
import image from '../../images/road.jpg';

export const Wrapper = styled.div`
  padding: 170px 50px;
  margin: 0;
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  background-image: linear-gradient(
      rgba(142, 174, 251, 0.01),
      rgba(255, 255, 255, 0.8)
    ),
    url(${image});
  text-align: center;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 40px 70px;
    text-align: end;
  }

  @media (min-width: 1440px) {
    padding: 80px 150px;
  }
`;

export const TextWrapper = styled.div`
  color: var(--white);
  text-shadow: 2px 2px 8px #2d3e56;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media (min-width: 768px) {
    margin-bottom: 80px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 0;
  }
`;

export const Title = styled.h1`
  font-size: 44px;
  font-weight: 600;
  margin-bottom: 44px;

  @media (min-width: 375px) {
    font-size: 48px;
  }

  @media (min-width: 768px) {
    font-size: 72px;
    font-weight: 600;
    margin-bottom: 0;
  }
`;

export const Subtitle = styled.h2`
  font-size: 32px;

  @media (min-width: 375px) {
    font-size: 34px;
  }

  @media (min-width: 768px) {
    font-size: 50px;
  }
`;

export const Img = styled.img`
  display: none;

  @media (min-width: 768px) {
    display: block;
    width: 500px;
  }

  @media (min-width: 1440px) {
    width: 800px;
  }
`;
