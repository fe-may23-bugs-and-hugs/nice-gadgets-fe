/*eslint-disable*/
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
import { FavoriteContext, CartContext } from '../../../context';
import { ThemeToggler } from '../ThemeToggler';
import { useTheme } from '../../../context';

export const Header = () => {
  const { totalItems } = useContext(CartContext);
  const { totalFavorite } = useContext(FavoriteContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkTheme } = useTheme() || { isDarkTheme: false };

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
    <HeaderElement isMenuOpen={isMenuOpen} isDarkTheme={isDarkTheme}>
      <BarElement isMenuOpen={isMenuOpen}>
        <ImgArea
          to="/"
          isMenuOpen={isMenuOpen}
          onClick={isMenuOpen ? closeMenu : undefined}
        >
          {isDarkTheme
            ? <ImgElement src={logoWhite} />
            : <ImgElement src={logo} />
          }
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
        <IconElement isMenuOpen={isMenuOpen} isDarkTheme={isDarkTheme}>
          <ThemeToggler />
        </IconElement>
        <IconElement isMenuOpen={isMenuOpen} isDarkTheme={isDarkTheme}>
          <IconSprite />
          {isDarkTheme
            ? <Icon spriteName="search-white" size="18px" />
            : <Icon spriteName="search" size="18px" />
          }
        </IconElement>
        <IconElement
          isMenuOpen={isMenuOpen}
          isDarkTheme={isDarkTheme}
        >
          <LinkWrapper to="/account">
            <IconSprite />
            <Icon spriteName="account" size="18px" />
          </LinkWrapper>
        </IconElement>

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
            {isDarkTheme
              ? <Icon spriteName="heart-white" size="18px" />
              : <Icon spriteName="heart" size="18px" />
            }
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
            {isDarkTheme
              ? <Icon spriteName="shopping-bag-white" size="18px" />
              : <Icon spriteName="shopping-bag" size="18px" />
            }
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
            {isDarkTheme
              ? <Icon spriteName={isMenuOpen ? 'close-white' : 'burger-white'} size="18px" />
              : <Icon spriteName={isMenuOpen ? 'close' : 'burger'} size="18px" />
            }
          </IconElement>
        </BuregerWrapper>
      </IconsSection>
    </HeaderElement>
  );
};
