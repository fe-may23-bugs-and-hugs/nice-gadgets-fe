/* eslint-disable*/
import React, { useState, useContext } from 'react';
import { PhonesContext } from '../../context/phonesContext';
import { ReactPaginateStyled } from './Pagination.styled';

export const Pagination: React.FC = () => {
  const { updatePage, currentLimit, currentPage, totalPages } =
    useContext(PhonesContext);

  const [currentPaginatePage, setCurrentPaginatePage] = useState(1);

  const isActiveButton = currentPaginatePage === currentPage;

  const handlePageClick = (event: any) => {
    console.log(event);
    setCurrentPaginatePage(event.selected + 1);
    updatePage(event.selected);
  };
  return (
    <ReactPaginateStyled
      isActive={isActiveButton}
      breakLabel="..."
      nextLabel=">"
      onPageChange={handlePageClick}
      pageRangeDisplayed={currentLimit}
      pageCount={totalPages}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};
