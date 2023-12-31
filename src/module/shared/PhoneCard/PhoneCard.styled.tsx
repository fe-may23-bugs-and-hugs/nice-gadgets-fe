import styled from 'styled-components';
import { onDesktop, onTablet } from '../Mixins';
import { Link } from 'react-router-dom';
import { DarkTheme } from '../../../types/DarkTheme';

interface ButtonProps {
  isClicked: boolean;
}

type CardProps = ButtonProps & DarkTheme;

export const CardWrapper = styled.div<DarkTheme>`
  display: flex;
  flex-direction: column;
  align-self: flex-start;

  box-sizing: border-box;
  padding: 32px;
  width: 272px;
  background: ${({ isDarkTheme }) =>
    isDarkTheme
      ? ({ theme }) => theme.darkThemeColors.surface1 + ' !important'
      : ({ theme }) => theme.colors.white + ' !important'};

  /* ${onTablet(`
    width: 229px;
  `)} */

  border-radius: 8px;

  border: 1px solid
    ${({ isDarkTheme, theme }) =>
    isDarkTheme
      ? theme.darkThemeColors.grayElements
      : theme.colors.grayElements};
  transition: box-shadow ${({ theme }) => theme.transition.slower};

  &:hover {
    box-shadow:
      rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;

    & a:first-child {
      transform: scale(1.05); /* Увеличение изображения при ховере */
    }
  }
`;

export const ImageBox = styled(Link)`
  width: 208px;
  height: 208px;
  margin-bottom: 24px;

  transition: transform ${({ theme }) => theme.transition.faster};
`;

export const CardImage = styled.img`
  height: 100%;
  display: block;
  object-fit: contain;

  margin: 0 auto;
`;

export const CardTitle = styled(Link)<DarkTheme>`
  color: ${({ isDarkTheme }) =>
    isDarkTheme
      ? ({ theme }) => theme.darkThemeColors.white
      : ({ theme }) => theme.colors.grayPrimary};

  font-size: ${({ theme }) => theme.fonts.sizeXs};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fonts.weightRegular};
  line-height: ${({ theme }) => theme.fonts.lineHeightS};

  height: 42px;

  margin-bottom: 8px;

  transition: color ${({ theme }) => theme.transition.slower};

  &:hover {
    color: ${({ theme }) => theme.colors.graySecondary};
  }
`;

export const PriceWrapper = styled.div<DarkTheme>`
  display: flex;
  gap: 8px;

  margin-bottom: 8px;
  border-bottom: 1px solid
    ${({ isDarkTheme, theme }) =>
    isDarkTheme
      ? theme.darkThemeColors.grayElements
      : theme.colors.grayElements};

  padding-bottom: 8px;

  &.card-price {
    border-bottom: none;
  }
`;

export const CurrentPrice = styled.h3<DarkTheme>`
  font-size: ${({ theme }) => theme.fonts.lineHeightM};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fonts.weightBold};
  line-height: ${({ theme }) => theme.fonts.lineHeightXl};

  color: ${({ isDarkTheme }) =>
    isDarkTheme
      ? ({ theme }) => theme.darkThemeColors.white
      : ({ theme }) => theme.colors.grayPrimary};

  &.card-current-price {
    font-size: ${({ theme }) => theme.fonts.sizeXxl};
    height: ${({ theme }) => theme.fonts.lineHeightXxl};
  }
`;

export const OldPrice = styled(CurrentPrice)<DarkTheme>`
  color: ${({ isDarkTheme }) =>
    isDarkTheme
      ? ({ theme }) => theme.darkThemeColors.graySecondary
      : ({ theme }) => theme.colors.graySecondary};
  text-decoration: line-through;

  &.card-old-price {
    font-size: ${({ theme }) => theme.fonts.sizeL};
    height: ${({ theme }) => theme.fonts.lineHeightL};
    font-weight: ${({ theme }) => theme.fonts.weightRegular};
  }
`;

export const DescrWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const DescrBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const DescrTitle = styled.h3<DarkTheme>`
  color: ${({ isDarkTheme }) =>
    isDarkTheme
      ? ({ theme }) => theme.darkThemeColors.graySecondary
      : ({ theme }) => theme.colors.graySecondary};

  font-size: ${({ theme }) => theme.fonts.sizeXxs};
  font-weight: ${({ theme }) => theme.fonts.weightSemiBold};
  line-height: normal;
`;

export const DescrValue = styled.p<DarkTheme>`
  color: ${({ isDarkTheme }) =>
    isDarkTheme
      ? ({ theme }) => theme.darkThemeColors.white
      : ({ theme }) => theme.colors.grayPrimary};
  text-align: right;
  font-family: Mont;
  font-size: ${({ theme }) => theme.fonts.sizeXxs};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fonts.weightBold};
  line-height: normal;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;

  margin-top: auto;

  &.card-button {
    margin-bottom: 32px;
  }
`;

export const ButtonAdd = styled.button<CardProps>`
  width: 160px;
  height: 40px;

  color: ${(props) => {
    if (props.isClicked) {
      if (props.isDarkTheme) {
        return props.theme.darkThemeColors.white;
      }

      return props.theme.colors.accentPrimary;
    }

    if (props.isDarkTheme) {
      return props.theme.darkThemeColors.white;
    }

    return props.theme.colors.white;
  }};

  border: ${(props) => {
    if (props.isClicked) {
      if (props.isDarkTheme) {
        return 'none';
      }

      return `1px solid ${props.theme.colors.grayElements}`;
    }

    if (props.isDarkTheme) {
      return 'none';
    }

    return 'none';
  }};

  text-align: center;
  cursor: pointer;

  border-radius: 8px;
  background-color: ${(props) => {
    if (props.isClicked) {
      if (props.isDarkTheme) {
        return props.theme.darkThemeColors.surface2;
      }

      return props.theme.colors.white;
    }

    if (props.isDarkTheme) {
      return props.theme.darkThemeColors.accentPrimary;
    }

    return props.theme.colors.accentPrimary;
  }};

  font-size: ${({ theme }) => theme.fonts.sizeXs};
  font-weight: ${({ theme }) => theme.fonts.weightBold};
  line-height: ${({ theme }) => theme.fonts.lineHeightM};

  transition: background-color ${({ theme }) => theme.transition.slower};

  &:hover {
    background-color: ${(props) => {
    if (props.isClicked) {
      if (props.isDarkTheme) {
        return props.theme.darkThemeColors.grayIcons;
      }

      return props.theme.colors.whiteLight;
    }

    if (props.isDarkTheme) {
      return props.theme.darkThemeColors.lightAccent;
    }

    return props.theme.colors.lightAccent;
  }};
  }

  &.card-button-add {
    min-width: 231px;
    width: 80%;
    height: 48px;

    ${onDesktop(`
      width: 263px;
  `)}
  }
`;

export const ButtonLike = styled.button<CardProps>`
  position: relative;
  cursor: pointer;
  border: ${(props) => {
    if (props.isClicked) {
      if (props.isDarkTheme) {
        return `1px solid ${props.theme.darkThemeColors.grayElements}`;
      }

      return `1px solid ${props.theme.colors.grayIcons}`;
    }

    if (props.isDarkTheme) {
      return 'none';
    }

    return `1px solid ${props.theme.colors.grayIcons}`;
  }};
  background-color: ${(props) => {
    if (props.isClicked) {
      if (props.isDarkTheme) {
        return props.theme.darkThemeColors.surface1;
      }

      return props.theme.colors.white;
    }

    if (props.isDarkTheme) {
      return props.theme.darkThemeColors.surface2;
    }

    return props.theme.colors.white;
  }};
  width: 40px;

  border-radius: 48px;

  transition: border ${({ theme }) => theme.transition.slower};

  &:hover {
    border: ${(props) => {
    if (props.isClicked) {
      if (props.isDarkTheme) {
        return `1px solid ${props.theme.darkThemeColors.grayIcons}`;
      }

      return `1px solid ${props.theme.colors.grayPrimary}`;
    }

    if (props.isDarkTheme) {
      return `1px solid ${props.theme.darkThemeColors.grayIcons}`;
    }

    return `1px solid ${props.theme.colors.grayPrimary}`;
  }};
  }

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &.card-button-like {
    width: 48px;
    height: 48px;
  }
`;
