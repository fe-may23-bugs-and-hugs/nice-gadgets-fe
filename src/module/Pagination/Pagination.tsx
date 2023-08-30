/* eslint-disable*/
import React, { useState, useContext } from 'react';
import ReactPaginate from 'react-paginate';
import { PhonesContext } from '../../context/phonesContext';

type Props = {
  products: any[];
  itemsPerPage: number;
};

export const Pagination: React.FC<Props> = ({ products, itemsPerPage }) => {
  const { updatePage, currentLimit } = useContext(PhonesContext);

  const handlePageClick = (event: any) => {
    console.log(event);
    updatePage(event.selected + 1);
  };
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next >"
      onPageChange={handlePageClick}
      pageRangeDisplayed={currentLimit}
      pageCount={10}
      previousLabel="< previous"
      renderOnZeroPageCount={null}
    />
  );
};
