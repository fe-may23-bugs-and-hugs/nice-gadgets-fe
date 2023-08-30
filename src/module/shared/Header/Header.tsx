import React from 'react';
import { Icon, IconSprite } from '../Sprites';
import logo from './../../../assets/images/logo.png';
import { NavLink } from 'react-router-dom';
import {
  HeaderElement,
  BarElement,
  NavElement,
  ImgElement,
  UlElement,
  LiElement,
  LinkElement,
  IconsSection,
  IconElement,
} from './Header.styled';

export const Header = () => {
  const showCircleFavorites = true;
  const showCircleBag = true;
  const counterFavorites = 4;
  const counterBag = 3;

  return (
    <HeaderElement>
      <BarElement>
        <NavLink to="/">
          <ImgElement src={logo}/>
        </NavLink>
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
        <IconElement
          hasPinkCircle={showCircleFavorites}
          circleText={counterFavorites}
        >
          <IconSprite/>
          <Icon spriteName="heart" size="18px" />
        </IconElement>
        <IconElement
          hasPinkCircle={showCircleBag}
          circleText={counterBag}
        >
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
