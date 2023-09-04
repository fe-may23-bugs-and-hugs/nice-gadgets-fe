import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './styles';
import { Root } from './routes';
import { PhonesProvider, FavoriteProvider, CartProvider } from './context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <FavoriteProvider>
        <CartProvider>
          <PhonesProvider>
            <GlobalStyle />
            <Root />
          </PhonesProvider>
        </CartProvider>
      </FavoriteProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
