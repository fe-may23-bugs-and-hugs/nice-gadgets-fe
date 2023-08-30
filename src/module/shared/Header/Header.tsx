import React from 'react';
import styled from 'styled-components';
import { Icon, IconSprite } from '../Sprites';
import logoDesktop from './../../../assets/images/logo-desktop.png';
import logoTablet from './../../../assets/images/logo-tablet.png';
import logoMobile from './../../../assets/images/logo-mobile.png';
import { Link } from 'react-router-dom';

const HeaderElement = styled.header`
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

const NavElement = styled.nav`
  font-family: ${({ theme }) => theme.fonts.name};
  font-size: ${({ theme }) => theme.fonts.sizeS};
  font-weight: ${({ theme }) => theme.fonts.weightBold};
  color: ${({ theme }) => theme.colors.graySecondary};

  @media (max-width: 639px) {
    display: none;
  }
`;

const BarElement = styled(Link)`
  display: flex;
  margin: 0 24px;
  gap: 32px;

  @media (min-width: 1200px) {
    gap: 64px;
  }
`;

const ImgElement = styled.img`
  height: 100%;
  line-height: 100%;
  align-self: center;
`;

const UlElement = styled.ul`
  display: flex;
  gap: 32px;

  @media (min-width: 1200px) {
    gap: 64px;
  }
`;

const LiElement = styled.li`
  list-style-type: none;
  cursor: pointer;
  transition: color ${({ theme }) => theme.transition.slower};

  &:hover {
    color: ${({ theme }) => theme.colors.grayPrimary};
    transition: color ${({ theme }) => theme.transition.slower};
  }
`;

const LinkElement = styled(Link)``;

const IconsSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IconElement = styled.div`
  padding: 0 24px;
  cursor: pointer;
  transition: background-color ${({ theme }) => theme.transition.slower};

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

export const Header = () => {
  return (
    <HeaderElement>
      <BarElement to="/">
        <ImgElement
          srcSet={`${logoMobile} 319w, ${logoTablet} 1199w, ${logoDesktop} 1400w`}
          sizes="(max-width: 319px) 319px, (max-width: 1199px) 1200px, 1400px"
          src={logoMobile}
          alt="Nice gadgets logo"
        />
        <NavElement>
          <UlElement>
            <LiElement>
              <LinkElement to="/">Home</LinkElement>
            </LiElement>
            <LiElement>
              <LinkElement to="/phones">Phones</LinkElement>
            </LiElement>
            <LiElement>
              <LinkElement to="/tablets">Tablets</LinkElement>
            </LiElement>
            <LiElement>
              <LinkElement to="/accessories">Accessories</LinkElement>
            </LiElement>
          </UlElement>
        </NavElement>
      </BarElement>
      <IconsSection>
        <IconElement>
          <IconSprite />
          <Icon spriteName="heart" size="18px" />
        </IconElement>
        <IconElement>
          <IconSprite />
          <Icon spriteName="shopping-bag" size="18px" />
        </IconElement>
        <IconElement>
          <IconSprite />
          <Icon spriteName="burger" size="18px" />
        </IconElement>
      </IconsSection>
    </HeaderElement>
  );
};
