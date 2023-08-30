/* eslint-disable*/
import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

type Props = {
  products: any[];
  itemsPerPage: number;
  updatePhonesData: (data: any) => void;
};

export const Pagination: React.FC<Props> = ({
  products,
  itemsPerPage,
  updatePhonesData,
}) => {
  return (
    // <ReactPaginate
    //   breakLabel="..."
    //   nextLabel="next >"
    //   onPageChange={handlePageClick}
    //   pageRangeDisplayed={5}
    //   pageCount={pageCount}
    //   previousLabel="< previous"
    //   renderOnZeroPageCount={null}
    // />
    <></>
  );
};
