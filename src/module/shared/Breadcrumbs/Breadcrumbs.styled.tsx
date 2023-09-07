import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { DarkTheme } from '../../../types/DarkTheme';

export const BlockWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const PathWrapper = styled.ul`
  list-style: none;
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const PathItem = styled.li`
  display: flex;
  gap: 8px;
  align-items: center;
  font-weight: ${({ theme }) => theme.fonts.weightRegular};
  font-size: ${({ theme }) => theme.fonts.sizeXxs};
  font-style: normal;
  line-height: normal;
`;

export const PathLink = styled.p<DarkTheme>`
  color: ${({ isDarkTheme }) =>
    isDarkTheme
      ? ({ theme }) => theme.darkThemeColors.graySecondary
      : ({ theme }) => theme.colors.grayPrimary};

  transition: color ${({ theme }) => theme.transition.faster};

  &:hover {
    color: ${({ theme }) => theme.colors.graySecondary};
  }
`;

export const CurrentPath = styled.p<DarkTheme>`
  color: ${({ isDarkTheme }) =>
    isDarkTheme
      ? ({ theme }) => theme.darkThemeColors.graySecondary
      : ({ theme }) => theme.colors.graySecondary};
`;

export const HomeIconWrapper = styled(Link)`
  display: inline-block;
  width: ${({ theme }) => theme.colors.sizeS};
  height: ${({ theme }) => theme.colors.sizeS};

  & svg use {
    transition: fill ${({ theme }) => theme.transition.faster};
  }

  &:hover svg use {
    fill: ${({ theme }) => theme.colors.graySecondary};
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 16px;
  width: 16px;
`;
