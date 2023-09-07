import { CatalogContainer, CatalogContentWrapper } from './Catalog.styled';

import { PhoneCard } from '../PhoneCard/PhoneCard';
import { Phone } from '../../../types/Phone';
import React, { useContext } from 'react';
import { PhonesContext } from '../../../context';
import { Skeleton } from '..';

type Props = {
  phonesData: Phone[];
};

export const Catalog: React.FC<Props> = ({ phonesData }) => {
  const { phonesLoading } = useContext(PhonesContext);

  return (
    <CatalogContainer>
      <CatalogContentWrapper>
        {phonesLoading ? (
          <Skeleton />
        ) : (
          <>
            {phonesData.map((phone) => (
              <PhoneCard key={phone._id} phone={phone} />
            ))}
          </>
        )}
      </CatalogContentWrapper>
    </CatalogContainer>
  );
};
