import React from 'react';
import { SortLinkWrapper } from './SortLink.styled';
import { SORTING } from '../../../../types/sortEnum';
import { ORDER } from '../../../../types/OrderEnum';

type Props = {
  sortField: {
    sort: SORTING;
    order: ORDER;
    title: string;
  };
};

export const SortLink: React.FC<Props> = ({ sortField }) => {
  return (
    <SortLinkWrapper>
      <span>{sortField.title}</span>
    </SortLinkWrapper>
  );
};
