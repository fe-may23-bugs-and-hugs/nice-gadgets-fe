import React from 'react';
import { ContentLayout } from '../shared/ContentLayout';
import { Outlet } from 'react-router-dom';

export const LoginPage: React.FC = () => {
  return (
    <ContentLayout>
      <Outlet />
    </ContentLayout>
  );
};
