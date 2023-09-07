import React from 'react';
import { LimitWrapper } from './LimitLink.styled';

type Props = {
  num: string;
};

export const LimitLink: React.FC<Props> = ({ num }) => {
  return (
    <LimitWrapper>
      <span>{num}</span>
    </LimitWrapper>
  );
};
