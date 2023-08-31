import React from 'react';
// import { Outlet } from 'react-router-dom';
import { AppLayout } from './module/shared/AppLayout/AppLayout';
import { Header, Footer } from './module/shared';
import { CartPage } from './module';

export const App = () => (
  <>
    <Header />
    <AppLayout>
      <CartPage />
      {/* <Outlet /> */}
    </AppLayout>
    <Footer />
  </>
);
