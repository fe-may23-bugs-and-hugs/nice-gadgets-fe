/* eslint-disable no-console */

import { CatalogContainer, CatalogContentWrapper } from './Catalog.styled';

import { PhoneCard } from '../shared/PhoneCard/PhoneCard';
import { Phone } from '../../types/Phone';
import React from 'react';

type Props = {
  phonesData: Phone[];
};

export const Catalog: React.FC<Props> = ({ phonesData }) => {
  return (
    <CatalogContainer>
      <CatalogContentWrapper>
        {phonesData.map((phone) => (
          <PhoneCard key={phone.id} phone={phone} />
        ))}
      </CatalogContentWrapper>
    </CatalogContainer>
  );
};
