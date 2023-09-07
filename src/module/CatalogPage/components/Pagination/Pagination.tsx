import React, { useContext, useEffect, useState } from 'react';
import { PhonesContext } from '../../../../context/phonesContext';
import { ReactPaginateStyled } from './Pagination.styled';
import { Icon, IconSprite } from '../../../shared';
import { useSearchParams } from 'react-router-dom';
import { getSearchWith } from '../../../../helpers/searchHelper';
import { useTheme } from '../../../../context';

export const Pagination: React.FC = () => {
  const { totalPages, currentPage } = useContext(PhonesContext);
  const [selectedPage, setSelectedPage] = useState(currentPage);
  const { isDarkTheme } = useTheme() || { isDarkTheme: false };

  const [searchParams, setSearchParams] = useSearchParams();

  const setSearchWith = (params: any) => {
    const search = getSearchWith(searchParams, params);

    setSearchParams(search);
  };

  useEffect(() => {
    setSelectedPage(currentPage);
  }, [currentPage]);

  // eslint-disable-next-line no-shadow
  const handlePageClick = (event: any) => {
    setSearchWith({ page: event.selected + 1 });

    setSelectedPage(event.selected + 1);
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
        <>
          {isDarkTheme ? (
            <Icon spriteName="arrow-right" fill="#4A4D58" />
          ) : (
            <Icon fill="#E2E6E9" spriteName="arrow-right" />
          )}
        </>
      ) : (
        <>
          {isDarkTheme ? (
            <Icon spriteName="arrow-right" fill="#F1F2F9" />
          ) : (
            <Icon spriteName="arrow-right" />
          )}
        </>
      )}
    </>
  );

  const prevArrow = (
    <>
      <IconSprite />

      {prevDisabled ? (
        <>
          {isDarkTheme ? (
            <Icon spriteName="arrow-left" fill="#4A4D58" />
          ) : (
            <Icon fill="#E2E6E9" spriteName="arrow-left" />
          )}
        </>
      ) : (
        <>
          {isDarkTheme ? (
            <Icon spriteName="arrow-left" fill="#F1F2F9" />
          ) : (
            <Icon spriteName="arrow-left" />
          )}
        </>
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
      isDarkTheme={isDarkTheme}
    />
  );
};
