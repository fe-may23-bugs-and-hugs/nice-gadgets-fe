/* eslint-disable no-console */
import { useContext } from 'react';
import { Breadcrumbs } from '../shared/Breadcrumbs';
import { ContentLayout } from '../shared/ContentLayout';
import {
  BreadcrumbsWrapper,
  CatalogWrapper,
  ItemsCount,
  Title,
} from './Favorites.styled';
import { FavoriteContext } from '../../context';
import { Catalog } from '../Catalog';

export const Favorites = () => {
  const { favoriteProducts } = useContext(FavoriteContext);

  return <ContentLayout>
    <BreadcrumbsWrapper>
      <Breadcrumbs />
    </BreadcrumbsWrapper>

    <Title>Favorites</Title>
    <ItemsCount>
      {favoriteProducts.length > 0 ? (
        <>
          {favoriteProducts.length} {favoriteProducts.length === 1
            ? 'Item'
            : 'Items'
          }
        </>
      ) : (
        'No favorite items yet, please add some products!'
      )}
    </ItemsCount>

    <CatalogWrapper>
      <Catalog phonesData={favoriteProducts}/>
    </CatalogWrapper>
  </ContentLayout>;
};
