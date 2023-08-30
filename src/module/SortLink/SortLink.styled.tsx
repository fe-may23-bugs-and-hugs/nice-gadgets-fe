import styled from 'styled-components';

export const SortLinkWrapper = styled.div`
  padding: 0 15px;
  width: 160px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  color: $color-primary;
  transition: all 0.1s linear;

  cursor: pointer;
  &:hover {
    background-color: #f4f6f8;
  }
`;
