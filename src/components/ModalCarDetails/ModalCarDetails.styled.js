import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 10px;
  width: 305px;

  @media (min-width: 768px) {
    padding: 40px;
    width: 549px;
  }
`;

export const Img = styled.img`
  width: 290px;
  height: 153px;
  border-radius: 14px;
  object-fit: cover;
  margin-bottom: 14px;

  @media (min-width: 768px) {
    width: 469px;
    height: 248px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`;

export const Title = styled.p`
  color: var(--black);
`;

export const TitleAccent = styled.span`
  color: var(--blue);
`;

export const CarDescription = styled.p`
  color: var(--black);
  line-height: 1.42;
  margin-bottom: 24px;
`;

export const Subtitle = styled.p`
  color: var(--black);
  line-height: 1.42;
  font-weight: 500;
  margin-bottom: 8px;
`;

export const List1 = styled.div`
  margin-bottom: 4px;
`;

export const List2 = styled.div`
  margin-bottom: 24px;
`;

export const BlockWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;

export const Block = styled.li`
  display: inline-block;
  padding: 7px 14px;
  border-radius: 35px;
  background: #f9f9f9;
  color: #363535;
`;

export const AccentText = styled.span`
  font-weight: 600;
  color: var(--blue);
`;
