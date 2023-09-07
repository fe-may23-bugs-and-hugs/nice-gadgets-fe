import styled from 'styled-components';
import { DarkTheme } from '../../types/DarkTheme';

export const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  padding: 20px 0;
  margin-top: 200px;
`;

export const NotFoundTitle = styled.h2<DarkTheme>`
  font-weight: ${({ theme }) => theme.fonts.weightBold};
  font-size: ${({ theme }) => theme.fonts.sizeL};
  margin-bottom: 30px;
  color: ${({ isDarkTheme }) =>
    isDarkTheme
      ? ({ theme }) => theme.darkThemeColors.white
      : ({ theme }) => theme.colors.grayPrimary};
`;

export const NotFoundText = styled.p<DarkTheme>`
  margin-bottom: 30px;
  color: ${({ isDarkTheme }) =>
    isDarkTheme
      ? ({ theme }) => theme.darkThemeColors.white
      : ({ theme }) => theme.colors.grayPrimary};
  font-size: ${({ theme }) => theme.fonts.sizeXs};
  text-align: center;
`;

export const NotFoundGif = styled.img`
  width: 160px;
  margin-bottom: 30px;
`;

export const ButtonGoHome = styled.a<DarkTheme>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 176px;
  height: 40px;

  font-size: ${({ theme }) => theme.fonts.sizeXs};
  font-weight: ${({ theme }) => theme.bold};
  background-color: ${({ isDarkTheme }) =>
    isDarkTheme
      ? ({ theme }) => theme.darkThemeColors.accentPrimary
      : ({ theme }) => theme.colors.accentPrimary};

  color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transition.slower};

  &:hover {
    background-color: ${({ isDarkTheme }) =>
    isDarkTheme
      ? ({ theme }) => theme.darkThemeColors.lightAccent
      : ({ theme }) => theme.colors.lightAccent};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.accentPrimary};
    border: 1px solid ${({ theme }) => theme.colors.grayElements};
    box-shadow: none;
  }
`;
