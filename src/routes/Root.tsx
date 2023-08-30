import { HashRouter, Route, Routes } from 'react-router-dom';

import { App } from '../App';
import { HomePage, PageNotFound, ProductCard } from '../module';
import { CatalogPage } from '../module/CatalogPage';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />

        <Route path="phones">
          <Route index element={<CatalogPage />} />
          <Route path=":productId" element={<ProductCard />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  </HashRouter>
);
