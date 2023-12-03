import styled from 'styled-components';
import image from '../../images/road.jpg';

export const Wrapper = styled.div`
  padding: 150px;
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
  text-align: end;
`;

export const TextWrapper = styled.div`
  color: var(--white);
  text-shadow: 2px 2px 8px #2d3e56;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const Title = styled.h1`
  font-size: 72px;
  font-weight: 600;
`;

export const Subtitle = styled.h2`
  font-size: 50px;
`;

export const Img = styled.img`
  width: 800px;
`;
