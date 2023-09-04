/* eslint-disable*/
import React, { useContext, useEffect } from 'react';
import { ContentLayout } from '../shared/ContentLayout';
import {
  CatalogTitle,
  CatalogModelsLeft,
  BreadcrumbsWrapper,
} from './CatalogPage.styled';
import { Catalog } from '../Catalog/Catalog';
import { PhonesContext } from '../../context/phonesContext';
import { Spinner } from '../Spinner';
import { Pagination } from '../Pagination/Pagination';
import { Breadcrumbs } from '../shared/Breadcrumps';

export const CatalogPage: React.FC = () => {
  const {
    loadPhones,
    phones,
    phonesLoading,
    currentPage,
    currentLimit,
    totalModels,
  } = useContext(PhonesContext);
  useEffect(() => {
    loadPhones();
  }, [currentPage, currentLimit]);

  return (
    <>
      <ContentLayout>
        {phonesLoading ? (
          <Spinner />
        ) : (
          <>
            <BreadcrumbsWrapper>
              <Breadcrumbs />
            </BreadcrumbsWrapper>

            <CatalogTitle>Mobile Phones</CatalogTitle>
            <CatalogModelsLeft>{totalModels} models</CatalogModelsLeft>

            <Catalog phonesData={phones} />
          </>
        )}
        <Pagination />
      </ContentLayout>
    </>
  );
};
