// import { Outlet } from 'react-router-dom';
import { AppLayout } from './module/shared/AppLayout/AppLayout';
import { Header, Footer } from './module/shared';
import { styled } from 'styled-components';
import { CartPage } from './module';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

export const App = () => (
  <MainWrapper>
    <Header />
    <AppLayout>
      <CartPage />
      {/* <Outlet /> */}
    </AppLayout>
    <Footer />
  </MainWrapper>
);
