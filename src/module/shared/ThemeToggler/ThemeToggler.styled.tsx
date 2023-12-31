/* eslint-disable indent */
/* eslint-disable operator-linebreak */
import { styled } from 'styled-components';

export const Wrapper = styled.div``;

export const Label = styled.label<{ isDarkTheme: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 62px;
  height: 30px;
  background: ${({ isDarkTheme }) =>
    isDarkTheme
      ? ({ theme }) => theme.darkThemeColors.graySecondary
      : ({ theme }) => theme.colors.grayBackground};
  border-radius: 32px;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  position: relative;
  transition: background-color 0.2s;
`;

export const Input = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
`;

export const Span = styled.span<{ isDarkTheme: boolean }>`
  &::after {
    content: '';
    position: absolute;
    top: 4px;
    left: 4px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    transition: 0.2s;

    box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);

    background: linear-gradient(180deg, #f447af, #fcdbc1);

    ${({ isDarkTheme }) =>
      isDarkTheme &&
      `
        left: calc(100% - 4px);
        transform: translateX(-100%);
        background: linear-gradient(180deg, #905BFF, #0F0F11);
    `}
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 22px;
  width: 22px;

  :first-child {
    margin: 0;
  }
`;
