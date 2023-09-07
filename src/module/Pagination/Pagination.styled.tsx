import styled from 'styled-components';
import ReactPaginate from 'react-paginate';
import { DarkTheme } from '../../types/DarkTheme';

export const ReactPaginateStyled = styled(ReactPaginate) <DarkTheme>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 80px;
  flex-wrap: wrap;

  li {
    list-style: none;
    display: inline-block;
    margin: 0;

    a {
      display: block;
      color: ${({ isDarkTheme }) =>
    isDarkTheme
      ? ({ theme }) => theme.darkThemeColors.white
      : ({ theme }) => theme.colors.grayPrimary};
      border: 1px solid ${({ isDarkTheme, theme }) =>
    isDarkTheme
      ? theme.darkThemeColors.grayElements
      : theme.colors.grayElements};
      border-radius: 48px;
      width: 32px;
      height: 32px;
      line-height: ${({ theme }) => theme.fonts.sizeXxl};
      text-align: center;
      cursor: pointer;
      position: relative;

      &:hover {
        color: ${({ theme }) => theme.colors.white};
        background-color: ${({ isDarkTheme }) =>
    isDarkTheme
      ? ({ theme }) => theme.darkThemeColors.grayIcons
      : ({ theme }) => theme.colors.grayPrimary};

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
        border: 1px solid
  ${({ isDarkTheme, theme }) =>
    isDarkTheme
      ? theme.darkThemeColors.grayElements
      : theme.colors.grayElements};
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
        background-color: ${({ isDarkTheme }) =>
    isDarkTheme
      ? ({ theme }) => theme.darkThemeColors.accentPrimary
      : ({ theme }) => theme.colors.grayPrimary};
      }
    }
  }
`;
