import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

type Props = {
  isActive: boolean;
};

export const ReactPaginateStyled = styled(ReactPaginate)<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 80px;
  flex-wrap: wrap;

  margin-top: 40px;

  li {
    color: #0f0f11;

    background-color: #fff;
    cursor: pointer;
    border: 1px solid #e2e6e9;
    border-radius: 48px;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      color: #fff;
      background-color: #0f0f11;
    }
  }

  li.selected {
    color: #fff;
    background-color: #0f0f11;
  }
`;
