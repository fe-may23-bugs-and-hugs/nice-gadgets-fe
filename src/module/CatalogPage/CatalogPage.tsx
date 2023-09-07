/* eslint-disable*/
import React, { useContext, useEffect, useState } from 'react';
import { ContentLayout } from '../shared/ContentLayout';
import {
  CatalogTitle,
  CatalogModelsLeft,
  BreadcrumbsWrapper,
} from './CatalogPage.styled';
import { Catalog } from '../Catalog/Catalog';
import { PhonesContext } from '../../context/phonesContext';
import { Pagination } from '../Pagination/Pagination';
import { Breadcrumbs } from '../shared/Breadcrumbs';
import { Sort } from '../Sort';
import { useLocation } from 'react-router-dom';
import { Loader } from '../Loader';

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

  useEffect(() => {
    loadPhones(pathname)
      .then(() => {
        setIsDataLoaded(true);
      })
      .catch(() => {
        setIsDataLoaded(true);
      });
  }, [currentPage, currentLimit, sortField, order, pathname]);

  const isModelsExist =
    totalModels > 0 ? `${totalModels} models` : 'There are no such models';

  const normalizeTitle = pathname.slice(1);

  const finalTitle =
    normalizeTitle.slice(0, 1).toUpperCase() + normalizeTitle.slice(1);

  return (
    <>
      <ContentLayout>
        <BreadcrumbsWrapper>
          <Breadcrumbs />
        </BreadcrumbsWrapper>

        <CatalogTitle>{finalTitle}</CatalogTitle>
        <CatalogModelsLeft>{isModelsExist}</CatalogModelsLeft>

        {isDataLoaded && totalModels === 0 ? (
          <CatalogTitle>
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
