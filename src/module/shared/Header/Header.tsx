/*eslint-disable*/
import { useState, useEffect, useContext } from 'react';
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
import { FavoriteContext, CartContext, AuthContext } from '../../../context';
import { ThemeToggler } from '../ThemeToggler';
import Notiflix from 'notiflix';
import { useTheme } from 'styled-components';

export const Header = () => {
  const theme = useTheme();
  const { totalItems } = useContext(CartContext);
  const { totalFavorite } = useContext(FavoriteContext);
  const { isAuth, onLogoutUser } = useContext(AuthContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const logout = () => {
    Notiflix.Confirm.init({
      fontFamily: 'Mont',
      cancelButtonColor: '#000',
      cancelButtonBackground: theme.colors.grayElements,
      messageFontSize: '16px',
      titleColor: theme.colors.accentSecondary,
      okButtonBackground: theme.colors.accentPrimary,
    });
    Notiflix.Confirm.show(
      'Modal control',
      'Are you sure you want to logout?',
      'Yes',
      'No',
      () => {
        onLogoutUser();
        Notiflix.Notify.success('Successfully loggout');
      },
      () => {
        return;
      },
      {},
    );
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
        <ImgArea
          to="/"
          isMenuOpen={isMenuOpen}
          onClick={isMenuOpen ? closeMenu : undefined}
        >
          <ImgElement src={logo} />
        </ImgArea>
        <NavElement isMenuOpen={isMenuOpen}>
          <UlElement isMenuOpen={isMenuOpen}>
            <LiElement>
              <LinkElement to="/" onClick={isMenuOpen ? closeMenu : undefined}>
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
        <IconElement isMenuOpen={isMenuOpen}>
          <ThemeToggler />
        </IconElement>
        <IconElement isMenuOpen={isMenuOpen}>
          <IconSprite />
          <Icon spriteName="search" size="18px" />
        </IconElement>
        {isAuth ? (
          <IconElement isMenuOpen={isMenuOpen}>
            <div onClick={logout}>
              <IconSprite />
              <Icon spriteName="close" size="18px" />
            </div>
          </IconElement>
        ) : (
          <IconElement isMenuOpen={isMenuOpen}>
            <LinkWrapper to="/auth/logIn">
              <IconSprite />
              <Icon spriteName="account" size="18px" />
            </LinkWrapper>
          </IconElement>
        )}
        <IconElement
          hasPinkCircle={!!totalFavorite}
          circleText={totalFavorite}
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
          hasPinkCircle={!!totalItems}
          circleText={totalItems}
          isMenuOpen={isMenuOpen}
        >
          <LinkWrapper to="/cart" onClick={isMenuOpen ? closeMenu : undefined}>
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
