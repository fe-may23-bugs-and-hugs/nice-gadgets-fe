import React from 'react';
import { Outlet } from 'react-router-dom';
import { AppLayout } from './module/shared/AppLayout/AppLayout';
import { Header, Footer } from './module/shared';
import { ProductCard } from './module';

export const App = () => (
  <>
    <Header />
    <ProductCard />
    <AppLayout>
      <Outlet />
    </AppLayout>
    <Footer />
  </>
);
