import React from 'react';
import { Outlet } from 'react-router-dom';
import { AppLayout } from './module/shared/AppLayout/AppLayout';

export const App = () => (
  <AppLayout>
    <Outlet />
  </AppLayout>
);
