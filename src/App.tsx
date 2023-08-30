// import { Outlet } from 'react-router-dom';
import { AppLayout } from './module/shared/AppLayout/AppLayout';
import { Footer, Header } from './module/shared';
import { CatalogPage } from './module/CatalogPage';

export const App = () => (
  <>
    <Header />
    <AppLayout>
      <CatalogPage />
      {/* <Outlet /> */}
    </AppLayout>
    <Footer />
  </>
);
