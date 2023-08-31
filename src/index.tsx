import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './styles';
import { Root } from './routes';
import { PhonesProvider } from './context/phonesContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <PhonesProvider>
        <GlobalStyle />
        <Root />
      </PhonesProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
