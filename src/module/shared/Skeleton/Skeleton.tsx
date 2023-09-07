/* eslint-disable no-console */
import ContentLoader from 'react-content-loader';
import { SkeletonWrapper } from './Skeleton.styled';
import React, { useContext } from 'react';
import { PhonesContext } from '../../../context';

type Props = {
  itemsCount?: number;
};

export const Skeleton: React.FC<Props> = ({ itemsCount }) => {
  const { limit } = useContext(PhonesContext);

  const skeletContent = [...new Array(itemsCount || limit)].map((_, id) => (
    <SkeletonWrapper key={id}>
      <ContentLoader
        speed={2}
        width={206}
        height={453}
        viewBox="0 0 206 453"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="0" rx="0" ry="0" width="208" height="208" />
        <rect x="0" y="228" rx="0" ry="0" width="206" height="21" />
        <rect x="0" y="268" rx="0" ry="0" width="206" height="40" />
        <rect x="0" y="327" rx="0" ry="0" width="206" height="67" />
        <rect x="0" y="408" rx="0" ry="0" width="206" height="40" />
      </ContentLoader>
    </SkeletonWrapper>
  ));

  return <>{skeletContent}</>;
};
