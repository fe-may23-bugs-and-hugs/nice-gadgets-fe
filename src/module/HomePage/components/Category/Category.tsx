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
}

export const Category: React.FC<Props> = ({ image, title, numberOfModels }) => {
  return (
    <CategoryWrapper>
      <CategoryImage src={image} alt="Phone Image" />
      <CategoryContent>
        <CategoryTitle>
          <Link to={`/phones`} >{title}</Link>
        </CategoryTitle>
        <CategoryModels>
          <Link to={`/phones`} >{numberOfModels} models</Link>
        </CategoryModels>
      </CategoryContent>
    </CategoryWrapper>
  );
};
