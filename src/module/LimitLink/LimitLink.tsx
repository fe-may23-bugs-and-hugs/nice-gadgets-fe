import React, { useContext } from 'react';
import { PhonesContext } from '../../context/phonesContext';
import { LimitWrapper } from './LimitLink.styled';

type Props = {
  num: string;
};

export const LimitLink: React.FC<Props> = ({ num }) => {
  // eslint-disable-next-line no-unused-vars
  const { updateLimit, updatePage, totalModels } = useContext(PhonesContext);

  const handleChangeLimit = () => {
    if (num === 'All') {
      updateLimit(totalModels);
      updatePage(1);

      return;
    }

    updateLimit(+num);
    updatePage(1);
  };

  return (
    <LimitWrapper onClick={handleChangeLimit}>
      <span>{num}</span>
    </LimitWrapper>
  );
};
