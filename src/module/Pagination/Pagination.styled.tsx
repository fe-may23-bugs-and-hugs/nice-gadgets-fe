import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

export const ReactPaginateStyled = styled(ReactPaginate)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 80px;
  flex-wrap: wrap;
  margin-top: 40px;

  li {
    list-style: none;
    display: inline-block;
    margin: 0;

    a {
      display: block;
      color: ${({ theme }) => theme.colors.grayPrimary};
      border: ${(props) => `1px solid ${props.theme.colors.grayIcons}`};
      border-radius: 48px;
      width: 32px;
      height: 32px;
      line-height: ${({ theme }) => theme.fonts.sizeXxl};
      text-align: center;
      cursor: pointer;
      position: relative;

      &:hover {
        color: ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => theme.colors.grayPrimary};

        svg use {
          fill: ${({ theme }) => theme.colors.white};
        }
      }

      svg {
        position: absolute;
        top: 50%;
        left: 51%;
        transform: translate(-50%, -50%);
      }
    }

    &.disabled {
      a {
        border: ${(props) => `1px solid ${props.theme.colors.grayElements}`};
        cursor: not-allowed;

        svg {
          use {
            fill: ${(props) => `1px solid ${props.theme.colors.grayElements}`};
          }
        }
      }
    }

    &.selected {
      a {
        color: ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => theme.colors.grayPrimary};
      }
    }
  }
`;
