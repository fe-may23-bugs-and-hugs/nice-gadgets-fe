import { Outlet } from 'react-router-dom';
import { Footer } from './module/shared';

export const App = () => (
  <div>
    <Outlet />
    <Footer />
  </div>
);
