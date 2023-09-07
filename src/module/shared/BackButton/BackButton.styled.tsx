import { styled } from 'styled-components';
import { DarkTheme } from '../../../types/DarkTheme';

export const Button = styled.button<DarkTheme>`
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 4px;

  width: 66px;
  height: 16px;

  color: ${({ theme }) => theme.colors.graySecondary};
  font-weight: ${({ theme }) => theme.fonts.weightRegular};
  font-size: ${({ theme }) => theme.fonts.sizeXxs};
  font-style: normal;
  line-height: normal;

  transition: color ${({ theme }) => theme.transition.faster};

  &:hover {
    color: ${({ isDarkTheme }) =>
    isDarkTheme
      ? ({ theme }) => theme.darkThemeColors.graySecondary
      : ({ theme }) => theme.colors.grayPrimary};
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 16px;
  width: 16px;
`;
