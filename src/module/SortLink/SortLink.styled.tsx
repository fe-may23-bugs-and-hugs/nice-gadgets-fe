import styled from 'styled-components';

export const SortLinkWrapper = styled.div`
  padding: 0 15px;
  width: 160px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.fonts.sizeXs};
  color: $color-primary;
  transition: all ${({ theme }) => theme.transition.slower};

  cursor: pointer;
  &:hover {
    background-color: #f4f6f8;
  }
`;
