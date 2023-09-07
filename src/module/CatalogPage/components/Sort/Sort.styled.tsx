import styled from 'styled-components';
import { DarkTheme } from '../../../../types/DarkTheme';

export const SortWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
`;

export const SortTitle = styled.h2`
  color: ${({ theme }) => theme.colors.graySecondary};

  font-size: ${({ theme }) => theme.fonts.sizeXxs};
  font-weight: ${({ theme }) => theme.fonts.weightSemiBold};
  line-height: normal;

  margin-bottom: 4px;
`;

export const SortDropDown = styled.button<DarkTheme>`
  position: relative;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  padding: 0 15px;
  background-color: ${({ isDarkTheme }) =>
    isDarkTheme
      ? ({ theme }) => theme.darkThemeColors.surface2
      : ({ theme }) => theme.colors.white};
  cursor: pointer;
  min-width: 140px;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.colors.grayIcons};
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border: 1px solid ${({ theme }) => theme.colors.grayIcons};
  border-radius: 8px;

  color: ${({ isDarkTheme }) =>
    isDarkTheme
      ? ({ theme }) => theme.darkThemeColors.white
      : ({ theme }) => theme.colors.grayPrimary};
  /* Buttons */
  font-family: Mont;
  font-size: ${({ theme }) => theme.fonts.sizeXs};
  font-style: normal;
  font-weight: 700;
  line-height: ${({ theme }) => theme.fonts.lineHeightM};

  &:hover {
    border-color: ${({ theme }) => theme.colors.graySecondary};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.grayPrimary};
  }

  svg {
    position: absolute;
    top: 50%;
    right: 4px;
    transform: translate(-50%, -50%);
  }
`;

export const SortDropDownSmall = styled(SortDropDown)`
  min-width: 100px;
`;

export const SortDropdownContent = styled.ul`
  position: absolute;
  margin-top: 4px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.grayElements};
  min-width: inherit;
`;
