import React, { useCallback } from 'react';
import data from '../../../../assets/data/phones.json';
import {
  SectionWrapper,
  CategoriesTitle,
  CategoriesWrapper,
} from './Categories.styled';
import phonesImage from '../../../../assets/images/category-phones.png';
import tabletsImage from '../../../../assets/images/category-tablets.png';
// eslint-disable-next-line max-len
import accessoriesImage from '../../../../assets/images/category-accessories.png';
import { Category } from '../Category';

const categoriesData = [
  {
    image: phonesImage,
    title: 'Mobile phones',
    category: 'phones',
  },
  {
    image: tabletsImage,
    title: 'Tablets',
    category: 'tablets',
  },
  {
    image: accessoriesImage,
    title: 'Accessories',
    category: 'accessories',
  },
];

export const Categories: React.FC = () => {
  const calculateNumberOfModels = useCallback(
    (category: string) => {
      const categoryCounts: { [key: string]: number } = {};

      data.forEach((product) => {
        if (product.category === category) {
          categoryCounts[category] = (categoryCounts[category] || 0) + 1;
        }
      });

      return categoryCounts[category] || 0;
    },
    [data],
  );

  return (
    <SectionWrapper>
      <CategoriesTitle>Shop by category</CategoriesTitle>

      <CategoriesWrapper>
        {categoriesData.map((categoryData) => (
          <Category
            key={categoryData.category}
            image={categoryData.image}
            title={categoryData.title}
            numberOfModels={calculateNumberOfModels(categoryData.category)}
            category={categoryData.category}
          />
        ))}
      </CategoriesWrapper>
    </SectionWrapper>
  );
};
