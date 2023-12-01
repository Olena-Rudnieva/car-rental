import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 300px;
  max-height: 40px;
  margin-bottom: 14px;
`;

export const Description = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  width: 100%;
  color: var(--semiblack);
`;

export const Item = styled.li`
  position: relative;
  &:not(:last-child) {
    margin-right: 12px;
  }
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    display: block;
    width: 1px;
    background-color: rgba(18, 20, 23, 0.1);
    height: 18px;
    top: 2px;
    right: -6px;
  }
`;
