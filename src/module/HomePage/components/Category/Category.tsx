import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CategoryWrapper,
  CategoryImage,
  CategoryContent,
  CategoryTitle,
  CategoryModels,
} from './Category.styled';
import { getPhones } from '../../../../api/phonesAPI';
import { SORTING } from '../../../../types/sortEnum';
import { ORDER } from '../../../../types/OrderEnum';
import { useTheme } from '../../../../context';

interface Props {
  image: string;
  title: string;
  category: string;
}

export const Category: React.FC<Props> = ({ image, title, category }) => {
  const [numberOfModels, setNumberOfModels] = useState(0);
  const { isDarkTheme } = useTheme() || { isDarkTheme: false };

  useEffect(() => {
    getPhones(
      {
        limit: 1,
        page: 1,
        sort: SORTING.ALPH,
        order: ORDER.ASC,
      },
      `/${category}`,
    )
      .then((res) => {
        setNumberOfModels(res.totalItems);
      })
      .catch((err) => {
        setNumberOfModels(0);
        throw new Error(err);
      });
  }, []);

  return (
    <CategoryWrapper>
      <Link to={`/${category}`}>
        <CategoryImage src={image} alt="Phone Image" />
      </Link>
      <CategoryContent>
        <Link to={`/${category}`}>
          <CategoryTitle isDarkTheme={isDarkTheme}>{title}</CategoryTitle>
        </Link>

        <CategoryModels>{numberOfModels} models</CategoryModels>
      </CategoryContent>
    </CategoryWrapper>
  );
};
