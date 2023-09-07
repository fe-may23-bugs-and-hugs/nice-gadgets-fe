import React, { useContext, useEffect, useState } from 'react';
import { ContentLayout } from '../shared/ContentLayout';
import {
  CatalogTitle,
  CatalogModelsLeft,
  BreadcrumbsWrapper,
} from './CatalogPage.styled';
import { Catalog } from '../shared/Catalog/Catalog';
import { PhonesContext } from '../../context/phonesContext';
import { Pagination } from './components/Pagination/Pagination';
import { Breadcrumbs } from '../shared/Breadcrumbs';
import { Sort } from './components/Sort';
import { useLocation } from 'react-router-dom';
import { Loader } from '../shared/Loader';
import { useTheme } from '../../context';

export const CatalogPage: React.FC = () => {
  const {
    loadPhones,
    phones,
    phonesLoading,
    currentPage,
    currentLimit,
    totalModels,
    sortField,
    order,
  } = useContext(PhonesContext);

  const { pathname } = useLocation();
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const { isDarkTheme } = useTheme() || { isDarkTheme: false };

  useEffect(() => {
    loadPhones(pathname)
      .then(() => {
        setIsDataLoaded(true);
      })
      .catch(() => {
        setIsDataLoaded(true);
      });
  }, [currentPage, currentLimit, sortField, order, pathname]);

  const isModelsExist
    = totalModels > 0 ? `${totalModels} models` : 'There are no such models';

  const normalizeTitle = pathname.slice(1);

  const finalTitle
    = normalizeTitle.slice(0, 1).toUpperCase() + normalizeTitle.slice(1);

  return (
    <>
      <ContentLayout>
        <BreadcrumbsWrapper>
          <Breadcrumbs />
        </BreadcrumbsWrapper>

        <CatalogTitle isDarkTheme={isDarkTheme}>{finalTitle}</CatalogTitle>
        <CatalogModelsLeft>{isModelsExist}</CatalogModelsLeft>

        {isDataLoaded && totalModels === 0 ? (
          <CatalogTitle isDarkTheme={isDarkTheme}>
            Right now we don't have availiable products. Try later
          </CatalogTitle>
        ) : (
          <>
            <Sort />
            <Catalog phonesData={phones} />
          </>
        )}

        <Loader visible={phonesLoading} />
        <Pagination />
      </ContentLayout>
    </>
  );
};
