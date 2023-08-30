// import { Outlet } from 'react-router-dom';
import { AppLayout } from './module/shared/AppLayout/AppLayout';
import { CatalogPage } from './module/CatalogPage';

export const App = () => (
  <>
    <AppLayout>
      {/* <Outlet /> */}
      <CatalogPage />
    </AppLayout>
  </>
);
