import { Outlet } from 'react-router-dom';
import { AppLayout } from './module/shared/AppLayout';

export const App = () => (
  <AppLayout>
    <Outlet />
  </AppLayout>
);
