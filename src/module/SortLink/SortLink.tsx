import React from 'react';
import { SortLinkWrapper } from './SortLink.styled';

type Props = {
  title: string;
};

export const SortLink: React.FC<Props> = ({ title }) => {
  return (
    <SortLinkWrapper>
      <span>{title}</span>
    </SortLinkWrapper>
  );
};
