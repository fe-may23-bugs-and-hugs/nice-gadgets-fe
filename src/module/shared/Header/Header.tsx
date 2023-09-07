import { useState, useEffect, useContext } from 'react';
import { Icon, IconSprite } from '../Sprites';
import logo from './../../../assets/images/logo.png';
import logoWhite from './../../../assets/images/logo_header_white.png';
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
import {
  FavoriteContext,
  CartContext,
  AuthContext,
  useTheme as customUseTheme,
} from '../../../context';
import { ThemeToggler } from '../ThemeToggler';
import Notiflix from 'notiflix';
import { useTheme } from 'styled-components';

export const Header = () => {
  const theme = useTheme();
  const { totalItems } = useContext(CartContext);
  const { totalFavorite } = useContext(FavoriteContext);
  const { isAuth, onLogoutUser } = useContext(AuthContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkTheme } = customUseTheme() || { isDarkTheme: false };

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

        Notiflix.Notify.init({
          position: 'right-bottom',
        });
        Notiflix.Notify.success('Successfully loggout', { timeout: 1000 });
      },
      () => {},
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
    <HeaderElement isMenuOpen={isMenuOpen} isDarkTheme={isDarkTheme}>
      <BarElement isMenuOpen={isMenuOpen}>
        <ImgArea
          to="/"
          isMenuOpen={isMenuOpen}
          onClick={isMenuOpen ? closeMenu : undefined}
        >
          {isDarkTheme ? (
            <ImgElement src={logoWhite} />
          ) : (
            <ImgElement src={logo} />
          )}
        </ImgArea>
        <NavElement isMenuOpen={isMenuOpen} isDarkTheme={isDarkTheme}>
          <UlElement isMenuOpen={isMenuOpen}>
            <LiElement isDarkTheme={isDarkTheme}>
              <LinkElement
                to="/"
                onClick={isMenuOpen ? closeMenu : undefined}
                isDarkTheme={isDarkTheme}
              >
                Home
              </LinkElement>
            </LiElement>
            <LiElement isDarkTheme={isDarkTheme}>
              <LinkElement
                to="/phones"
                onClick={isMenuOpen ? closeMenu : undefined}
                isDarkTheme={isDarkTheme}
              >
                Phones
              </LinkElement>
            </LiElement>
            <LiElement isDarkTheme={isDarkTheme}>
              <LinkElement
                to="/tablets"
                onClick={isMenuOpen ? closeMenu : undefined}
                isDarkTheme={isDarkTheme}
              >
                Tablets
              </LinkElement>
            </LiElement>
            <LiElement isDarkTheme={isDarkTheme}>
              <LinkElement
                to="/accessories"
                onClick={isMenuOpen ? closeMenu : undefined}
                isDarkTheme={isDarkTheme}
              >
                Accessories
              </LinkElement>
            </LiElement>
          </UlElement>
        </NavElement>
      </BarElement>

      <IconsSection isMenuOpen={isMenuOpen} isDarkTheme={isDarkTheme}>
        <IconElement
          isMenuOpen={isMenuOpen}
          isDarkTheme={isDarkTheme}
          className="swipetheme"
        >
          <ThemeToggler />
        </IconElement>

        {isAuth ? (
          <IconElement isMenuOpen={isMenuOpen} isDarkTheme={isDarkTheme}>
            <div onClick={logout}>
              <IconSprite />
              {isDarkTheme ? (
                <Icon spriteName="logout" size="18px" stroke="#fff" />
              ) : (
                <Icon spriteName="logout" size="18px" stroke="#000" />
              )}
            </div>
          </IconElement>
        ) : (
          <IconElement isMenuOpen={isMenuOpen} isDarkTheme={isDarkTheme}>
            <LinkWrapper
              to="/auth/logIn"
              onClick={isMenuOpen ? closeMenu : undefined}
            >
              <IconSprite />
              {isDarkTheme ? (
                <Icon spriteName="account" size="18px" fill="#fff" />
              ) : (
                <Icon spriteName="account" size="18px" />
              )}
            </LinkWrapper>
          </IconElement>
        )}

        <IconElement
          hasPinkCircle={!!totalFavorite}
          circleText={totalFavorite}
          isMenuOpen={isMenuOpen}
          isDarkTheme={isDarkTheme}
        >
          <LinkWrapper
            to="/favorites"
            onClick={isMenuOpen ? closeMenu : undefined}
          >
            <IconSprite />
            {isDarkTheme ? (
              <Icon spriteName="heart-white" size="18px" />
            ) : (
              <Icon spriteName="heart" size="18px" />
            )}
          </LinkWrapper>
        </IconElement>

        <IconElement
          hasPinkCircle={!!totalItems}
          circleText={totalItems}
          isMenuOpen={isMenuOpen}
          isDarkTheme={isDarkTheme}
        >
          <LinkWrapper to="/cart" onClick={isMenuOpen ? closeMenu : undefined}>
            <IconSprite />
            {isDarkTheme ? (
              <Icon spriteName="shopping-bag-white" size="18px" />
            ) : (
              <Icon spriteName="shopping-bag" size="18px" />
            )}
          </LinkWrapper>
        </IconElement>

        <BuregerWrapper
          onClick={toggleMenu}
          isMenuOpen={isMenuOpen}
          isDarkTheme={isDarkTheme}
        >
          <IconElement
            className={isMenuOpen ? 'close' : 'burger'}
            isMenuOpen={isMenuOpen}
            isDarkTheme={isDarkTheme}
          >
            <IconSprite />
            {isDarkTheme ? (
              <Icon
                spriteName={isMenuOpen ? 'close-white' : 'burger-white'}
                size="18px"
              />
            ) : (
              <Icon spriteName={isMenuOpen ? 'close' : 'burger'} size="18px" />
            )}
          </IconElement>
        </BuregerWrapper>
      </IconsSection>
    </HeaderElement>
  );
};
