import styled from 'styled-components';

export const Heart = styled.button`
  position: absolute;
  /* padding: 5px; */
  top: 14px;
  right: 14px;
  border: none;
  background: transparent;
  z-index: 1;
`;

export const IconEmpty = styled.svg`
  width: 18px;
  height: 18px;
  stroke: var(--white);
  fill: transparent;
`;

export const IconFavorite = styled.svg`
  width: 18px;
  height: 18px;
  fill: var(--blue);
  stroke: var(--blue);
`;
