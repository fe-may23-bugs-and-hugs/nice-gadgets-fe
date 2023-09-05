import React, { useState, useEffect, useContext } from 'react';
import { ContentLayout } from '../shared/ContentLayout';
import { ProductsSlider } from './components/ProductsSlider/ProductsSlider';
import { Phone } from '../../types/Phone';
import { PhonesContext } from '../../context';
import { WelcomeSlider } from './components/WelcomeSlider/WelcomeSlider';

export const HomePage = () => {
  const [newData, setNewData] = useState<Phone[]>([]);
  const [discountData, setDiscountData] = useState<Phone[]>([]);
  const phonesContext = useContext(PhonesContext);

  useEffect(() => {
    phonesContext.loadSliderData('new', setNewData);
    phonesContext.loadSliderData('discount', setDiscountData);
  }, []);

  return (
    <ContentLayout>
      <h1>Welcome to Nice Gadgets store!</h1>
      <WelcomeSlider />
      <ProductsSlider
        data={newData}
        uniqueKey='new'
        subtitle='Brand new models'
      />
      <ProductsSlider
        data={discountData}
        uniqueKey='discount'
        subtitle='Hot prices'
      />
    </ContentLayout>
  );
};
