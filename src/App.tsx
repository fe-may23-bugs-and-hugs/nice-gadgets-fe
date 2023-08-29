import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './module/shared';

export const App = () => (
  <div>
    <Header />
    <Outlet />
  </div>
);
