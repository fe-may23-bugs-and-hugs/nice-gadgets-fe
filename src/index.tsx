import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './styles';
import { Root } from './routes';
import {
  FavoriteProvider,
  CartProvider,
  ThemeProvider as CustomThemeProvider,
} from './context';
import { AuthProvider } from './context/authContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <CustomThemeProvider>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <FavoriteProvider>
            <CartProvider>
              <GlobalStyle />
              <Root />
            </CartProvider>
          </FavoriteProvider>
        </AuthProvider>
      </ThemeProvider>
    </CustomThemeProvider>
  </React.StrictMode>,
);
