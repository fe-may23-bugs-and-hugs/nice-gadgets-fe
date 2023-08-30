import React from 'react';
import { Icon, IconSprite } from '../Sprites';
import logoDesktop from './../../../assets/images/logo-desktop.png';
import logoTablet from './../../../assets/images/logo-tablet.png';
import logoMobile from './../../../assets/images/logo-mobile.png';
import {
  HeaderElement,
  BarElement,
  ImgElement,
  NavElement,
  UlElement,
  LiElement,
  LinkElement,
  IconsSection,
  IconElement,
} from './Header.styled';

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
