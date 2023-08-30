import { HashRouter, Route, Routes } from 'react-router-dom';

import { App } from '../App';
import { HomePage, PageNotFound, ProductCard } from '../module';
import { CatalogPage } from '../module/CatalogPage';
import { PhonesProvider } from '../context/phonesContext';

export const Root = () => (
  <HashRouter>
    <PhonesProvider>
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
    </PhonesProvider>
  </HashRouter>
);
