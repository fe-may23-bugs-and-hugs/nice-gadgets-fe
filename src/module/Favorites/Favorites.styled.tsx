import styled from 'styled-components';
import { DarkTheme } from '../../types/DarkTheme';

export const BreadcrumbsWrapper = styled.div`
  margin-top: 24px;
  margin-bottom: 40px;
`;

export const Title = styled.h2<DarkTheme>`
  margin-bottom: 8px;
  font-size: ${({ theme }) => theme.fonts.sizeXxxl};
  font-weight: ${({ theme }) => theme.fonts.weightBold};
  line-height: ${({ theme }) => theme.fonts.lineHeightXxxl};
  letter-spacing: -0.48px;
  color: ${({ isDarkTheme }) =>
    isDarkTheme
      ? ({ theme }) => theme.darkThemeColors.white
      : ({ theme }) => theme.colors.black};
`;

export const ItemsCount = styled.p`
  margin-bottom: 40px;
  font-size: ${({ theme }) => theme.fonts.sizeXs};
  font-weight: ${({ theme }) => theme.fonts.weightRegular};
  line-height: ${({ theme }) => theme.fonts.lineHeightM};
  color: ${({ theme }) => theme.colors.graySecondary};
`;

export const CatalogWrapper = styled.p`
  margin-bottom: 80px;
`;
