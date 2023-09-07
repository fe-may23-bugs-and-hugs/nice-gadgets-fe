import styled from 'styled-components';
import { DarkTheme } from '../../types/DarkTheme';

export const BreadcrumbsWrapper = styled.div`
  margin-top: 24px;
  margin-bottom: 40px;
`;

export const CatalogTitle = styled.h1<DarkTheme>`
  color: ${({ isDarkTheme }) =>
    isDarkTheme
      ? ({ theme }) => theme.darkThemeColors.white
      : ({ theme }) => theme.colors.grayPrimary};
  /* Mobile/H1 */
  font-size: ${({ theme }) => theme.fonts.sizeXxl};
  font-style: normal;
  font-weight: 800;
  line-height: ${({ theme }) => theme.fonts.sizeXxl};
  letter-spacing: -0.32px;

  margin-bottom: 8px;
`;

export const CatalogModelsLeft = styled.p`
  color: ${({ theme }) => theme.colors.graySecondary};

  font-size: ${({ theme }) => theme.fonts.sizeXs};
  font-weight: ${({ theme }) => theme.fonts.weightSemiBold};
  line-height: ${({ theme }) => theme.fonts.lineHeightM};

  margin-bottom: 32px;
`;
