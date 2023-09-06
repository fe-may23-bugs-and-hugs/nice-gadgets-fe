import {
  StyledFooter,
  FooterWrapper,
  LogoFooter,
  ListContainer,
  ListItem,
  Link,
  ButtonWrapper,
  ButtonText,
  IconElement,
  LogoFooterDark,
} from './Footer.styled';
import logoFooter from '../../../assets/images/logo.png';
import logoFooterWhite from '../../../assets/images/logo_white.png';
import { Icon, IconSprite } from '../Sprites';
import { useTheme } from '../../../context';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const { isDarkTheme } = useTheme() || { isDarkTheme: false };

  return (
    <StyledFooter isDarkTheme={isDarkTheme}>
      <FooterWrapper>
        <Link
          href="/"
          isDarkTheme={isDarkTheme}
        >
          {isDarkTheme
            ? <LogoFooterDark src={logoFooterWhite} />
            : <LogoFooter src={logoFooter} />
          }
        </Link>

        <ListContainer>
          <ListItem isDarkTheme={isDarkTheme}>
            <Link
              href="https://github.com/fe-may23-bugs-and-hugs"
              isDarkTheme={isDarkTheme}>
              Github
            </Link>
          </ListItem>

          <ListItem isDarkTheme={isDarkTheme}>
            <Link
              href="#"
              isDarkTheme={isDarkTheme}>
              Contacts
            </Link>
          </ListItem>

          <ListItem isDarkTheme={isDarkTheme}>
            <Link
              href="#"
              isDarkTheme={isDarkTheme}>
              rights
            </Link>
          </ListItem>
        </ListContainer>

        <ButtonWrapper isDarkTheme={isDarkTheme} onClick={scrollToTop}>
          <ButtonText isDarkTheme={isDarkTheme}>Back to top</ButtonText>

          <IconElement>
            <IconSprite />
            {isDarkTheme
              ? <Icon spriteName="arrow-up-white" />
              : <Icon spriteName="arrow-up" />
            }
          </IconElement>
        </ButtonWrapper>
      </FooterWrapper>
    </StyledFooter>
  );
};
