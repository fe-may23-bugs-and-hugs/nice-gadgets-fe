import React, { useState, useEffect } from 'react';
import { Icon, IconSprite } from '../Sprites';
import logo from './../../../assets/images/logo.png';
import {
  HeaderElement,
  BarElement,
  NavElement,
  ImgArea,
  ImgElement,
  UlElement,
  LiElement,
  LinkElement,
  IconsSection,
  IconElement,
  BuregerWrapper,
  LinkWrapper,
} from './Header.styled';

export const Header = () => {
  const showCircleFavorites = true;
  const showCircleBag = true;
  const counterFavorites = 4;
  const counterBag = 3;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  return (
    <HeaderElement isMenuOpen={isMenuOpen}>
      <BarElement isMenuOpen={isMenuOpen}>
        <ImgArea to="/" isMenuOpen={isMenuOpen}>
          <ImgElement src={logo} />
        </ImgArea>
        <NavElement isMenuOpen={isMenuOpen}>
          <UlElement isMenuOpen={isMenuOpen}>
            <LiElement>
              <LinkElement
                to="/"
                onClick={isMenuOpen ? closeMenu : undefined}
              >
                Home
              </LinkElement>
            </LiElement>
            <LiElement>
              <LinkElement
                to="/phones"
                onClick={isMenuOpen ? closeMenu : undefined}
              >
                Phones
              </LinkElement>
            </LiElement>
            <LiElement>
              <LinkElement
                to="/tablets"
                onClick={isMenuOpen ? closeMenu : undefined}
              >
                Tablets
              </LinkElement>
            </LiElement>
            <LiElement>
              <LinkElement
                to="/accessories"
                onClick={isMenuOpen ? closeMenu : undefined}
              >
                Accessories
              </LinkElement>
            </LiElement>
          </UlElement>
        </NavElement>
      </BarElement>
      <IconsSection isMenuOpen={isMenuOpen}>
        <IconElement
          hasPinkCircle={showCircleFavorites}
          circleText={counterFavorites}
          isMenuOpen={isMenuOpen}
        >
          <LinkWrapper
            to="/favorites"
            onClick={isMenuOpen ? closeMenu : undefined}
          >
            <IconSprite />
            <Icon spriteName="heart" size="18px" />
          </LinkWrapper>
        </IconElement>
        <IconElement
          hasPinkCircle={showCircleBag}
          circleText={counterBag}
          isMenuOpen={isMenuOpen}
        >
          <LinkWrapper
            to="/cart"
            onClick={isMenuOpen ? closeMenu : undefined}
          >
            <IconSprite />
            <Icon spriteName="shopping-bag" size="18px" />
          </LinkWrapper>
        </IconElement>
        <BuregerWrapper onClick={toggleMenu} isMenuOpen={isMenuOpen}>
          <IconElement className={isMenuOpen ? 'close' : 'burger'}>
            <IconSprite />
            <Icon spriteName={isMenuOpen ? 'close' : 'burger'} size="18px" />
          </IconElement>
        </BuregerWrapper>
      </IconsSection>
    </HeaderElement>
  );
};
