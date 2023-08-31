/*eslint-disable*/
import { Outlet } from 'react-router-dom';
import { AppLayout } from './module/shared/AppLayout/AppLayout';
import { Header, Footer } from './module/shared';

export const App = () => (
  <>
    <Header />
    <AppLayout>
      <Outlet />
    </AppLayout>
    <Footer />
  </>
);
