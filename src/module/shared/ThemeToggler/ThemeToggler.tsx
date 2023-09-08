import { useTheme } from '../../../context/themeContext';
import { Icon, IconSprite } from '../Sprites';
import {
  IconWrapper,
  Input,
  Label,
  Span,
  Wrapper,
} from './ThemeToggler.styled';

export const ThemeToggler = () => {
  const themeContext = useTheme() || {
    isDarkTheme: false,
    toggleTheme: () => {},
  };

  const { isDarkTheme, toggleTheme } = themeContext;

  return (
    <Wrapper>
      <Label htmlFor="darkmode-toggle" isDarkTheme={isDarkTheme}>
        <Input
          type="checkbox"
          checked={isDarkTheme}
          id="darkmode-toggle"
          onChange={() => toggleTheme()}
          aria-label="Switch theme"
        />
        <IconSprite />
        <IconWrapper>
          <Icon spriteName="sun" size="20px" fill="#FAFBFC" />
        </IconWrapper>
        <IconWrapper>
          <Icon spriteName="moon" size="20px" fill="#75767F" />
        </IconWrapper>
        <Span isDarkTheme={isDarkTheme}></Span>
      </Label>
    </Wrapper>
  );
};
