/* eslint-disable max-len */
import {
  StyledFooter,
  FooterWrapper,
  LogoFooter,
  ListContainer,
  ListItem,
  ButtonWrapper,
  ButtonText,
  IconElement,
} from './Footer.styled';
import logoFooter from '../../../assets/images/logo_footer.png';
import { Icon, IconSprite } from '../Sprites';

export const Footer = () => {
  return (
    <StyledFooter>
      <FooterWrapper>
        <LogoFooter src={logoFooter} />

        <ListContainer>
          <ListItem>Github</ListItem>

          <ListItem>Contacts</ListItem>

          <ListItem>rights</ListItem>
        </ListContainer>

        <ButtonWrapper>
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
