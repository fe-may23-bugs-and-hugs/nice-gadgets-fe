/* eslint-disable max-len */
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { App } from '../App';
import {
  CartPage,
  CatalogPage,
  Favorites,
  HomePage,
  PageNotFound,
  ProductCard,
} from '../module';
import { PhonesProvider } from '../context';
import { LoginPage } from '../module/LoginPage';
import { RegistrationForm } from '../module/LoginPage/components/RegistrationForm';
import { LoginForm } from '../module/LoginPage/components/LoginForm/LoginForm';

export const Root = () => (
  <BrowserRouter>
    <PhonesProvider>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />

          <Route path="phones">
            <Route index element={<CatalogPage />} />
            <Route path=":productId" element={<ProductCard />} />
          </Route>

          <Route path="tablets">
            <Route index element={<CatalogPage />} />
            <Route path=":productId" element={<ProductCard />} />
          </Route>

          <Route path="accessories">
            <Route index element={<CatalogPage />} />
            <Route path=":productId" element={<ProductCard />} />
          </Route>

          <Route path="favorites">
            <Route index element={<Favorites />} />
            <Route path=":productId" element={<ProductCard />} />
          </Route>

          <Route path="auth" element={<LoginPage />}>
            <Route path="logIn" element={<LoginForm />} />
            <Route path="signUp" element={<RegistrationForm />} />
          </Route>

          <Route path="cart" element={<CartPage />} />

          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </PhonesProvider>
  </BrowserRouter>
);
