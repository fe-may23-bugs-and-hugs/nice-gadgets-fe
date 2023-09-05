/* eslint-disable max-len */
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
} from './Footer.styled';
import logoFooter from '../../../assets/images/logo.png';
import { Icon, IconSprite } from '../Sprites';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <StyledFooter>
      <FooterWrapper>
        <Link href="#">
          <LogoFooter src={logoFooter} />
        </Link>

        <ListContainer>
          <ListItem>
            <Link href="https://github.com/fe-may23-bugs-and-hugs">Github</Link>
          </ListItem>

          <ListItem>
            <Link href="#">Contacts</Link>
          </ListItem>

          <ListItem>
            <Link href="#">rights</Link>
          </ListItem>
        </ListContainer>

        <ButtonWrapper onClick={scrollToTop}>
          <ButtonText>Back to top</ButtonText>

          <IconElement>
            <IconSprite />
            <Icon spriteName="arrow-up" />
          </IconElement>
        </ButtonWrapper>
      </FooterWrapper>
    </StyledFooter>
  );
};
