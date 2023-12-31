import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import './index.css';
import { onTablet } from '../module/shared/Mixins';
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
  html,
  #root {
    height: 100%;
  }

  body {
    height: 100%;
    margin: 0;
    font-family: "Mont", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: normal;

    ${onTablet(`
      overflow: scroll;
      overflow-x: hidden;
    `)}
  }

  ${onTablet(`
    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${theme.colors.graySecondary};
      border-radius: 5px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background-color: ${theme.colors.grayElements};
    }

    ::-webkit-scrollbar-track {
      background: ${theme.colors.grayBackground};
    }
  `)}

  h1, h2, h3, h4, h5, p, ul {
    padding: 0;
    margin: 0;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

li{
  padding: 0;
    margin: 0;
  list-style: none;
}
  a {
    color: inherit;
    text-decoration: none;
  }
`;
