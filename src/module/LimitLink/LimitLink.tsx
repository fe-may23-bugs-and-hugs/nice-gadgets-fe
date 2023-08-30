import React, { useContext } from 'react';
import { PhonesContext } from '../../context/phonesContext';
import { LimitWrapper } from './LimitLink.styled';

type Props = {
  num: string;
};

export const LimitLink: React.FC<Props> = ({ num }) => {
  // eslint-disable-next-line no-unused-vars
  const { updateLimit } = useContext(PhonesContext);

  return (
    <LimitWrapper onClick={() => updateLimit(+num)}>
      <span>{num}</span>
    </LimitWrapper>
  );
};
