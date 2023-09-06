/* eslint-disable no-console */

import React, { useEffect, useContext } from 'react';
import { ContentLayout } from '../shared/ContentLayout';
import { ProductsSlider } from './components/ProductsSlider/ProductsSlider';
import { PhonesContext } from '../../context';
import { WelcomeSlider } from './components/WelcomeSlider/WelcomeSlider';
import { Title } from './HomePage.styled';
import { Categories } from './components/Categories';

export const HomePage = () => {
  const {
    loadNewData,
    loadDiscountData,
    newData,
    discountData,
  } = useContext(PhonesContext);

  useEffect(() => {
    loadNewData();
  }, []);

  useEffect(() => {
    loadDiscountData();
  }, []);

  return (
    <ContentLayout>
      <Title>Welcome to Nice Gadgets store!</Title>
      <WelcomeSlider />
      <ProductsSlider
        data={newData}
        uniqueKey="new"
        subtitle="Brand new models"
      />
      <Categories />
      <ProductsSlider
        data={discountData}
        uniqueKey="discount"
        subtitle="Hot prices"
      />
    </ContentLayout>
  );
};
