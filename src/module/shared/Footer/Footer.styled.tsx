import styled from 'styled-components';
import { onDesktop, onTablet } from '../Mixins';

interface DarkTheme {
  isDarkTheme: boolean,
};

export const StyledFooter = styled.footer<DarkTheme>`
  width: 100%;
  margin-top: auto;
  padding: 32px 16px;
  display: flex;
  justify-content: center;

  background-color: ${({ isDarkTheme }) => isDarkTheme
    ? ({ theme }) => theme.darkThemeColors.black
    : ({ theme }) => theme.colors.white};

  box-shadow: 0px -1px 0px 0px ${({ isDarkTheme }) => isDarkTheme
    ? ({ theme }) => theme.darkThemeColors.grayElements
    : ({ theme }) => theme.colors.grayElements};

  font-family: ${({ theme }) => theme.fonts.name};
  font-size: ${({ theme }) => theme.fonts.sizeXxs};
  font-weight: ${({ theme }) => theme.fonts.weightBold};
  line-height: normal;

  ${onTablet(`
    padding: 32px 24px;
  `)}

  ${onDesktop(`
    padding: 32px 32px;
  `)}
`;

export const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;

  ${onTablet(`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `)};
`;

export const LogoFooter = styled.img`
  width: 89px;
  margin-bottom: 32px;
  cursor: pointer;

  ${onTablet(`
    margin: 0;
  `)}
`;

export const LogoFooterDark = styled.img`
  width: 89px;
  margin-bottom: 32px;
  cursor: pointer;

  ${onTablet(`
    margin: 0;
  `)}
`;

export const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0 0 32px 0;
  padding: 0;
  gap: 16px;
  font-weight: ${({ theme }) => theme.fonts.weightBold};
  line-height: ${({ theme }) => theme.fonts.lineHeightXxs};
  letter-spacing: ${({ theme }) => theme.fonts.spacingM};
  text-transform: uppercase;
  list-style: none;

  ${onTablet(`
    flex-direction: row;
    margin: 0;
  `)}

  ${onDesktop(`
    gap: 106px;
    `)}
`;

export const ListItem = styled.li<DarkTheme>`
  color: ${({ isDarkTheme }) => isDarkTheme
    ? ({ theme }) => theme.darkThemeColors.white
    : ({ theme }) => theme.colors.graySecondary};
`;

export const Link = styled.a<DarkTheme>`
  cursor: pointer;
  transition: color ${({ theme }) => theme.transition.slower};

  &:hover {
    color: ${({ isDarkTheme }) => isDarkTheme
    ? ({ theme }) => theme.darkThemeColors.graySecondary
    : ({ theme }) => theme.colors.grayPrimary};
  }
`;

export const IconElement = styled.div`
  position: relative;
  border: ${({ theme }) => `1px solid ${theme.colors.grayIcons}`};
  width: 32px;
  height: 32px;
  border-radius: 50px;
  transition: border ${({ theme }) => theme.transition.slower};

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const ButtonText = styled.p<DarkTheme>`
  margin: 0 16px 0 0;
  color: ${({ isDarkTheme }) => isDarkTheme
    ? ({ theme }) => theme.darkThemeColors.graySecondary
    : ({ theme }) => theme.colors.graySecondary};

  transition: color ${({ theme }) => theme.transition.slower};
`;

export const ButtonWrapper = styled.a<DarkTheme>`
  display: flex;
  align-items: center;
  align-self: center;
  cursor: pointer;

  &:hover {
    ${IconElement} {
      border: ${({ theme }) => `1px solid ${(isDarkTheme: DarkTheme) => isDarkTheme
    ? theme.darkThemeColors.graySecondary
    : theme.colors.grayPrimary}`};
    }

    ${ButtonText} {
      color: ${({ isDarkTheme }) => isDarkTheme
    ? ({ theme }) => theme.darkThemeColors.graySecondary
    : ({ theme }) => theme.colors.grayPrimary};
    }
  }
`;
