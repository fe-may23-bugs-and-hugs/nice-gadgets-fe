import React, { useContext, useEffect, useState } from 'react';
import { PhonesContext } from '../../context/phonesContext';
import { ReactPaginateStyled } from './Pagination.styled';
import { Icon, IconSprite } from '../shared';

export const Pagination: React.FC = () => {
  const { updatePage, totalPages, currentPage } = useContext(PhonesContext);
  const [selectedPage, setSelectedPage] = useState(currentPage);

  useEffect(() => {
    setSelectedPage(currentPage);
  }, [currentPage]);

  useEffect(() => {
    setSelectedPage(1);
  }, []);

  // eslint-disable-next-line no-shadow
  const handlePageClick = (event: any) => {
    updatePage(event.selected + 1);
  };

  const quantityOfButtons = () => {
    const width = window.innerWidth;

    if (width <= 400) {
      return 3;
    }

    return 6;
  };

  const prevDisabled = currentPage === 1;
  const lastDisabled = currentPage === totalPages;

  const nextArrow = (
    <>
      <IconSprite />
      {lastDisabled ? (
        <Icon spriteName="arrow-right" fill="#E2E6E9" />
      ) : (
        <Icon spriteName="arrow-right" />
      )}
    </>
  );

  const prevArrow = (
    <>
      <IconSprite />

      {prevDisabled ? (
        <Icon fill="#E2E6E9" spriteName="arrow-left" />
      ) : (
        <Icon spriteName="arrow-left" />
      )}
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
      forcePage={selectedPage - 1}
    />
  );
};
