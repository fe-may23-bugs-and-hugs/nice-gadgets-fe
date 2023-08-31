/* eslint-disable*/
import React, { useContext, useEffect } from 'react';
import { PhonesContext } from '../../context/phonesContext';
import { ReactPaginateStyled } from './Pagination.styled';
import { Icon, IconSprite } from '../shared';

export const Pagination: React.FC = () => {
  const { updatePage, totalPages } = useContext(PhonesContext);

  const handlePageClick = (event: any) => {
    console.log(event);
    updatePage(event.selected + 1);
  };

  const quantityOfButtons = () => {
    const width = window.innerWidth;

    if (width <= 400) {
      return 3;
    }

    return 6;
  };

  const nextArrow = (
    <>
      <IconSprite />
      <Icon spriteName="arrow-right" />
    </>
  );

  const prevArrow = (
    <>
      <IconSprite />
      <Icon spriteName="arrow-left" />
    </>
  );

  return (
    <ReactPaginateStyled
      breakLabel="..."
      nextLabel={nextArrow}
      onPageChange={handlePageClick}
      pageRangeDisplayed={quantityOfButtons()}
      marginPagesDisplayed={1}
      pageCount={totalPages}
      previousLabel={prevArrow}
      renderOnZeroPageCount={null}
    />
  );
};
