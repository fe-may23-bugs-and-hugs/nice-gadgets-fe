import { Outlet } from 'react-router-dom';
import { Footer } from './module/shared/Footer/Footer';

export const App = () => (
  <div>
    <Outlet />
    <Footer />
  </div>
);
