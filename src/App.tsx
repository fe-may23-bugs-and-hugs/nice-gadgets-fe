/* eslint-disable no-console */
import React, { useEffect, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { AppLayout } from './module/shared/AppLayout/AppLayout';
import { Header, Footer } from './module/shared';
import { styled } from 'styled-components';
import { AuthContext } from './context/authContext';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

export const App: React.FC = () => {
  const { token, updateAuthStatus } = useContext(AuthContext);

  useEffect(() => {
    if (token) {
      updateAuthStatus();
    }
  }, [token]);

  return (
    <MainWrapper>
      <Header />
      <AppLayout>
        <Outlet />
      </AppLayout>
      <Footer />
    </MainWrapper>
  );
};
