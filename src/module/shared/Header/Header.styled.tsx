import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

interface IconElementProps {
  hasPinkCircle?: boolean;
  circleText?: number;
}

export const HeaderElement = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayElements};
  line-height: ${({ theme }) => theme.fonts.lineHeightXxl};
  @media (min-width: 1200px) {
    line-height: ${({ theme }) => theme.fonts.lineHeightXxxl};
  }
`;

export const NavElement = styled.nav`
  font-family: ${({ theme }) => theme.fonts.name};
  font-size: ${({ theme }) => theme.fonts.sizeS};
  font-weight: ${({ theme }) => theme.fonts.weightBold};
  color: ${({ theme }) => theme.colors.graySecondary};

  @media (max-width: 639px) {
    display: none;
  }
`;

export const BarElement = styled.div`
  display: flex;
  align-items: center;
  margin: 0 24px;
  gap: 32px;

  @media (min-width: 1200px) {
    gap: 64px;
  }
`;

export const ImgElement = styled.img`
  height: auto;
  max-width: 64px;
  align-self: center;

  @media (min-width: 1200px) {
    max-width: 80px;
  }
`;

export const UlElement = styled.ul`
  display: flex;
  gap: 32px;

  @media (min-width: 1200px) {
    gap: 64px;
  }
`;

export const LiElement = styled.li`
  list-style-type: none;
  cursor: pointer;
  transition: color ${({ theme }) => theme.transition.slower};

  &:hover {
    color: ${({ theme }) => theme.colors.grayPrimary};
    transition: color ${({ theme }) => theme.transition.slower};
  }
`;

export const LinkElement = styled(NavLink)`
  &.active {
    color: ${({ theme }) => theme.colors.grayPrimary};
    font-weight: ${({ theme }) => theme.fonts.weightBold};
  }
`;

export const IconsSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const IconElement = styled.div<IconElementProps>`
  position: relative;
  padding: 0 12px;
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
      }
    `};

  @media (min-width: 1200px) {
    padding: 0 24px;
  }

  &:not(:last-child) {
    display: none;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.grayBackground};
    transition: background-color ${({ theme }) => theme.transition.slower};
  }

  svg {
    display: block;
    line-height: ${({ theme }) => theme.fonts.lineHeightXxl};
    height: ${({ theme }) => theme.fonts.lineHeightXxl};

    @media (min-width: 1200px) {
      line-height: ${({ theme }) => theme.fonts.lineHeightXxxl};
      height: ${({ theme }) => theme.fonts.lineHeightXxxl};
    }
  }
  border-left: 1px solid ${({ theme }) => theme.colors.grayElements};

  @media (min-width: 640px) {
    &:not(:last-child) {
      display: block;
    }
    &:last-child {
      display: none;
    }
  }
`;
