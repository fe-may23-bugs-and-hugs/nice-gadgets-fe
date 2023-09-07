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

          <Route path="logIn" element={<LoginPage />} />
          <Route path="signUp" element={<LoginPage />} />

          <Route path="cart" element={<CartPage />} />

          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </PhonesProvider>
  </BrowserRouter>
);
