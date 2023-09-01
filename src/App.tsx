/*eslint-disable*/
import { Outlet } from 'react-router-dom';
import { AppLayout } from './module/shared/AppLayout/AppLayout';
import { Header, Footer } from './module/shared';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

export const App = () => (
  <MainWrapper>
    <Header />
    <AppLayout>
      <Outlet />
    </AppLayout>
    <Footer />
  </MainWrapper>
);
