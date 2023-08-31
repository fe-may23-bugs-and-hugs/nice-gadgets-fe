import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

export const ReactPaginateStyled = styled(ReactPaginate)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 80px;
  flex-wrap: wrap;

  padding: 10px;

  margin-top: 40px;

  a {
    position: relative;
  }

  li {
    color: ${({ theme }) => theme.colors.grayPrimary};

    background-color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    border: ${(props) => `1px solid ${props.theme.colors.grayElements}`};
    border-radius: 48px;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;

    &:not(:first-child):not(:last-child):hover {
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.grayPrimary};
    }

    svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  li.selected {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.grayPrimary};
  }
`;
