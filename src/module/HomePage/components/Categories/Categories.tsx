import React from 'react';
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
  return (
    <SectionWrapper>
      <CategoriesTitle>Shop by category</CategoriesTitle>

      <CategoriesWrapper>
        {categoriesData.map((categoryData) => (
          <Category
            key={categoryData.category}
            image={categoryData.image}
            title={categoryData.title}
            category={categoryData.category}
          />
        ))}
      </CategoriesWrapper>
    </SectionWrapper>
  );
};
