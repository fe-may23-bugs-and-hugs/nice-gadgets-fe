/* eslint-disable */
import React, { useState } from 'react';
import { IconSprite, Icon } from '../shared';
import { ContentLayout } from '../shared/ContentLayout';
import {
  IconsWrapper,
  IconsTitle,
  CatalogTitle,
  CatalogModelsLeft,
  SortWrapper,
  SortTitle,
  SortDropDown,
} from './CatalogPage.styles';
import { Catalog } from '../Catalog/Catalog';
import { Pagination } from '../Pagination';

import phones from '../../assets/data/phones.json';

export const CatalogPage: React.FC = () => {


  return (
    <ContentLayout>
      <IconsWrapper>
        <IconSprite />
        <Icon size="24" spriteName="home" />
        <Icon size="12" spriteName="arrow-right" />
        <IconsTitle>Phones</IconsTitle>
      </IconsWrapper>

      <CatalogTitle>Mobile Phones</CatalogTitle>
      <CatalogModelsLeft>95 models</CatalogModelsLeft>

      <SortWrapper>
        <div>
          <SortTitle>Sort by</SortTitle>
          <SortDropDown>
            Newest
            <IconSprite />
            <Icon spriteName="arrow-down" />
          </SortDropDown>
        </div>

        <div>
          <SortTitle>Items on page</SortTitle>
          <SortDropDown>
            16
            <IconSprite />
            <Icon spriteName="arrow-down" />
          </SortDropDown>
        </div>
      </SortWrapper>

      <Catalog phonesData={phones} />

      {/* <Pagination
        products={phones}
        itemsPerPage={5}
      /> */}
    </ContentLayout>
  );
};
