import React from 'react';
import { Link } from 'react-router-dom';
import {
  CategoryWrapper,
  CategoryImage,
  CategoryContent,
  CategoryTitle,
  CategoryModels,
} from './Category.styled';

interface Props {
  image: string;
  title: string;
  numberOfModels: number;
  category: string;
}

export const Category: React.FC<Props> = ({
  image,
  title,
  numberOfModels,
  category,
}) => {
  return (
    <CategoryWrapper>
      <Link to={`/${category}`}>
        <CategoryImage src={image} alt="Phone Image" />
      </Link>
      <CategoryContent>
        <Link to={`/${category}`}>
          <CategoryTitle>{title}</CategoryTitle>
        </Link>

        <CategoryModels>{numberOfModels} models</CategoryModels>
      </CategoryContent>
    </CategoryWrapper>
  );
};
