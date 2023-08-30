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
      <Link to={`/phones`} >
        <CategoryImage src={image} alt="Phone Image" />
      </Link>
      <CategoryContent>
        <Link to={`/phones`}>
          <CategoryTitle>
            {title}
          </CategoryTitle>
        </Link>

        <CategoryModels>
          {numberOfModels} models
        </CategoryModels>
      </CategoryContent>
    </CategoryWrapper>
  );
};
