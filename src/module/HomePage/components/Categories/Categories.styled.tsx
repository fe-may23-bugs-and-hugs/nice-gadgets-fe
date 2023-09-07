import styled from 'styled-components';
import { onDesktop, onTablet } from '../../../shared/Mixins';
import { DarkTheme } from '../../../../types/DarkTheme';

export const SectionWrapper = styled.section`
  position: relative;
  margin-bottom: 57px;

  ${onTablet(`
    margin-bottom: 64px;
  `)}

  ${onDesktop(`
    margin-bottom: 80px;
  `)}

  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const CategoriesWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;

  ${onTablet(`
    flex-direction: row;
    gap: 16px;
  `)};
`;

export const CategoriesTitle = styled.h2<DarkTheme>`
  font-weight: ${({ theme }) => theme.fonts.weightBold};
  font-size: ${({ theme }) => theme.fonts.sizeL};
  line-height: ${({ theme }) => theme.fonts.lineHeightL};
  font-style: normal;

  color: ${({ isDarkTheme }) =>
    isDarkTheme
      ? ({ theme }) => theme.darkThemeColors.white
      : ({ theme }) => theme.colors.black};

  ${onTablet(`
      font-size: 32px;
      line-height: 41px;
      letter-spacing: -0.01em;
  `)};
`;
