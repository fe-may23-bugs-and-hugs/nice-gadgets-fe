import styled, { css, ThemeContext } from 'styled-components';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { DarkTheme } from '../../../types/DarkTheme';

interface IconElementProps {
  hasPinkCircle?: boolean;
  circleText?: number;
  isMenuOpen?: boolean;
}

const IconsBurgerLeft = 1;

export interface mobileProps {
  isMenuOpen: boolean;
}

type HeaderElementProps = mobileProps & DarkTheme & IconElementProps;

export const HeaderElement = styled.header<HeaderElementProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayElements};
  background-color: ${({ isDarkTheme }) =>
    isDarkTheme
      ? ({ theme }) => theme.darkThemeColors.black
      : ({ theme }) => theme.colors.white};

  height: ${({ isMenuOpen }) => (isMenuOpen ? '100dvh' : 'auto')};
  flex-direction: ${({ isMenuOpen }) => (isMenuOpen ? 'column' : 'row')};
`;

export const BarElement = styled.div<mobileProps>`
  display: flex;
  align-items: center;
  gap: 0px;

  @media (min-width: 768px) {
    gap: 24px;
  }

  flex-direction: ${({ isMenuOpen }) => (isMenuOpen ? 'column' : 'row')};
  width: ${({ isMenuOpen }) => (isMenuOpen ? '100%' : 'auto')};

  @media (min-width: 1200px) {
    gap: 48px;
  }
`;

export const NavElement = styled.nav<HeaderElementProps>`
  font-family: ${({ theme }) => theme.fonts.name};
  font-size: ${({ theme }) => theme.fonts.sizeXxs};
  font-weight: ${({ theme }) => theme.fonts.weightBold};
  color: ${({ isDarkTheme }) =>
    isDarkTheme
      ? ({ theme }) => theme.darkThemeColors.graySecondary
      : ({ theme }) => theme.colors.graySecondary};

  line-height: ${({ theme }) => theme.fonts.lineHeightTablet};
  align-items: center;

  @media (max-width: 639px) {
    display: ${({ isMenuOpen }) => (isMenuOpen ? 'flex' : 'none')};
  }

  @media (min-width: 1200px) {
    line-height: ${({ theme }) => theme.fonts.lineHeightDesktop};
  }
`;

export const ImgArea = styled(NavLink)<mobileProps>`
  width: 100%;

  border-bottom: ${({ isMenuOpen, theme }) =>
    isMenuOpen ? `1px solid ${theme.colors.grayElements}` : 'none'};
`;

export const ImgElement = styled.img`
  height: 23px;
  max-width: 64px;
  align-self: center;
  margin: 13px 16px;

  @media (min-width: 640px) {
    margin: 13px 24px;
  }

  @media (min-width: 1200px) {
    max-width: 80px;
  }
`;

export const UlElement = styled.ul<mobileProps>`
  display: flex;
  gap: ${({ isMenuOpen }) => (isMenuOpen ? '32px' : '16px')};
  align-items: center;
  margin-top: ${({ isMenuOpen }) => (isMenuOpen ? '40px' : 'none')};

  flex-direction: ${({ isMenuOpen }) => (isMenuOpen ? 'column' : 'row')};

  @media (min-width: 768px) {
    gap: 32px;
  }

  @media (min-width: 1200px) {
    gap: 64px;
  }
`;

export const LinkElement = styled(NavLink)<DarkTheme>`
  display: block;
  position: relative;
  text-transform: uppercase;

  &.active {
    color: ${({ isDarkTheme }) =>
    isDarkTheme
      ? ({ theme }) => theme.darkThemeColors.white
      : ({ theme }) => theme.colors.grayPrimary};

    font-weight: ${({ theme }) => theme.fonts.weightBold};

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 3px;
      background-color: ${({ isDarkTheme }) =>
    isDarkTheme
      ? ({ theme }) => theme.darkThemeColors.white
      : ({ theme }) => theme.colors.grayPrimary};
    }
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 0%;
    height: 3px;
    background-color: ${({ isDarkTheme }) =>
    isDarkTheme
      ? ({ theme }) => theme.darkThemeColors.white
      : ({ theme }) => theme.colors.grayPrimary};

    transition: all ${({ theme }) => theme.transition.faster};
    display: block;
    right: 0;
  }
`;

export const LiElement = styled.li<DarkTheme>`
  list-style-type: none;
  cursor: pointer;
  transition: color ${({ theme }) => theme.transition.slower};

  &:hover {
    color: ${({ isDarkTheme }) =>
    isDarkTheme
      ? ({ theme }) => theme.darkThemeColors.white
      : ({ theme }) => theme.colors.grayPrimary};

    transition: color ${({ theme }) => theme.transition.slower};

    ${LinkElement}::after {
      width: 100%;
      left: 0;
    }
  }
`;

export const IconsSection = styled.div<HeaderElementProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${({ isMenuOpen }) => (isMenuOpen ? '100%' : 'auto')};
  height: ${({ isMenuOpen }) => (isMenuOpen ? '48px' : 'auto')};
  border-top: 1px solid
    ${({ isMenuOpen, theme }) =>
    isMenuOpen ? theme.colors.grayElements : 'none'};
`;

export const IconElement = styled.div<HeaderElementProps>`
  position: relative;
  width: 48px;
  cursor: pointer;
  transition: background-color ${({ theme }) => theme.transition.slower};

  ${({ hasPinkCircle, circleText }) =>
    hasPinkCircle
    && css`
      &:before {
        content: '${circleText}';
        font-size: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${({ theme }) => theme.colors.white};

        position: absolute;
        top: 20%;
        left: 70%;
        transform: translateX(-50%);
        width: 14px;
        height: 14px;
        background-color: ${({ theme }) => theme.colors.accentSecondary};
        border: 1px solid ${({ theme }) => theme.colors.white};
        border-radius: 50%;

        @media (min-width: 1200px) {
          top: 25%;
          left: 62%;
        }

        @media (max-width: 640px) {
          left: 54%;
        }
      }
    `};

  @media (min-width: 1200px) {
    width: 64px;
  }

  &:nth-child(n) {
    ${({ isMenuOpen }) => {
    return (
      isMenuOpen
        && css`
          display: none;
        `
    );
  }};
  }

  &:first-child {
    ${({ isMenuOpen }) => {
    return (
      isMenuOpen
        && css`
          width: 48px;
          display: block;
        `
    );
  }};
  }

  @media (max-width: 639px) {
    &.swipetheme {
      ${({ isMenuOpen }) => {
    return isMenuOpen
      ? css`
              position: fixed;
              margin-right: 48px;
              width: 48px;
              height: 48px;
              top: 15px;
              right: 0;

              svg {
                margin-top: 1px;
              }
            `
      : 'position: relative;';
  }};
    }
  }

  &:not(:nth-child(-n + ${IconsBurgerLeft})) {
    ${({ isMenuOpen }) => {
    const theme = useContext(ThemeContext);

    if (!theme) {
      return '';
    }

    return isMenuOpen
      ? css`
            &:not(:nth-child(-n + ${IconsBurgerLeft})) {
              display: block;
              width: 100%;
              position: relative;

              svg {
                margin-left: auto;
                margin-right: auto;
              }
            }
          `
      : 'display: none';
  }};
  }

  &:not(:first-child) {
    border-left: 1px solid
      ${({ isDarkTheme }) =>
    isDarkTheme
      ? ({ theme }) => theme.darkThemeColors.surface2
      : ({ theme }) => theme.colors.grayElements};
  }

  &:not(:first-child):hover {
    background-color: ${({ isDarkTheme }) =>
    isDarkTheme
      ? ({ theme }) => theme.darkThemeColors.grayIcons
      : ({ theme }) => theme.colors.grayBackground};

    transition: background-color ${({ theme }) => theme.transition.slower};
  }

  svg {
    display: block;
    margin-left: 35%;
    line-height: ${({ theme }) => theme.fonts.lineHeightTablet};
    height: ${({ theme }) => theme.fonts.lineHeightTablet};

    @media (min-width: 1200px) {
      line-height: ${({ theme }) => theme.fonts.lineHeightDesktop};
      height: ${({ theme }) => theme.fonts.lineHeightDesktop};
    }
  }

  @media (min-width: 640px) {
    &:not(:last-child) {
      display: block;
    }
    &:last-child {
      display: none;
    }
  }
`;

export const LinkWrapper = styled(NavLink)``;

export const BuregerWrapper = styled.div<HeaderElementProps>`
  border-left: 1px solid
    ${({ isDarkTheme, theme }) =>
    isDarkTheme ? theme.darkThemeColors.surface2 : theme.colors.grayElements};

  ${({ isMenuOpen }) => {
    return isMenuOpen
      ? css`
          position: fixed;
          width: 49px;
          top: 0;
          right: 0;

          svg {
            margin-top: 1px;
          }
        `
      : 'position: relative;';
  }};
`;
