import React from 'react';
import { Outlet } from 'react-router-dom';
import { AppLayout } from './module/shared/AppLayout/AppLayout';
import { Header, Footer } from './module/shared';
import { styled } from 'styled-components';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

export const App = () => (
  <MainWrapper>
    <Header />
    <AppLayout>
      <Outlet />
    </AppLayout>
    <Footer />
  </MainWrapper>
);
