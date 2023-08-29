import { Outlet } from 'react-router-dom';
import { AppLayout } from './module/shared/AppLayout/AppLayout';
import { Footer } from './module/shared';

export const App = () => (
  <>
    <AppLayout>
      <Outlet />
    </AppLayout>
    <Footer />
  </>
);
