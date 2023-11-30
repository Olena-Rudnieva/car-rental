import styled from 'styled-components';

export const CarWrapper = styled.li`
  width: 274px;
`;

export const CarItem = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImgWrapper = styled.div`
  overflow: hidden;
  border-radius: 14px;
  width: 274px;
  height: 268px;
  margin-bottom: 14px;
`;

export const Img = styled.img`
  width: 274px;
  height: 268px;
  object-fit: cover;
  border-radius: 14px;
  cursor: pointer;
  transform: scale(1);
  transition: 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

export const Title = styled.p`
  color: var(--black);
`;

export const TitleAccent = styled.span`
  color: var(--blue);
`;

export const Price = styled.p`
  color: var(--black);
`;
