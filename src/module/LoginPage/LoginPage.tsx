import React from 'react';
import { LoginForm } from './components/LoginForm/LoginForm';
import { ContentLayout } from '../shared/ContentLayout';

export const LoginPage: React.FC = () => {
  return (
    <ContentLayout>
      <LoginForm />
    </ContentLayout>
  );
};
