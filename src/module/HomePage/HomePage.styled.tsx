import styled from 'styled-components';
import { onDesktop, onTablet } from '../shared/Mixins';
import { DarkTheme } from '../../types/DarkTheme';

export const Title = styled.h1<DarkTheme>`
  font-size: ${({ theme }) => theme.fonts.sizeXxxl};
  font-weight: ${({ theme }) => theme.fonts.weightBold};
  line-height: ${({ theme }) => theme.fonts.lineHeightXxxl};
  letter-spacing: ${({ theme }) => theme.fonts.spacingS};
  margin: 24px 0;
  color: ${({ isDarkTheme }) =>
    isDarkTheme
      ? ({ theme }) => theme.darkThemeColors.white
      : ({ theme }) => theme.colors.grayPrimary};
  ${onTablet(`
    margin: 32px 0;
  `)}
  ${onDesktop(`
    margin: 56px 0;
  `)}
`;
