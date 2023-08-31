import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { App } from '../App';
import {
  CartPage,
  Catalog,
  Favorites,
  HomePage,
  PageNotFound,
  ProductCard,
} from '../module';

export const Root = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />

        <Route path="phones">
          <Route index element={<Catalog />} />
          <Route path=":productId" element={<ProductCard />} />
        </Route>

        <Route path="tablets">
          <Route index element={<Catalog />} />
          <Route path=":productId" element={<ProductCard />} />
        </Route>

        <Route path="accessories">
          <Route index element={<Catalog />} />
          <Route path=":productId" element={<ProductCard />} />
        </Route>

        <Route path="favorites">
          <Route index element={<Favorites/>} />
          <Route path=":productId" element={<ProductCard />} />
        </Route>

        <Route path="cart" element={<CartPage/>} />

        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
