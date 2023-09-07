/*eslint-disable*/
import React, { useState, useEffect, useContext } from 'react';
import { LimitLink } from '../LimitLink';
import { SortLink } from '../SortLink';
import { IconSprite, Icon } from '../shared';
import {
  SortWrapper,
  SortTitle,
  SortDropDown,
  SortDropdownContent,
  SortDropDownSmall,
} from './Sort.styled';
import { PhonesContext, useTheme } from '../../context';
import { SORTING } from '../../types/sortEnum';
import { ORDER } from '../../types/OrderEnum';
import { useSearchParams } from 'react-router-dom';
import { SearchLink } from '../shared/SearchLink';

const sortOptions = [
  { sort: SORTING.NEWEST, order: ORDER.DESC, title: 'Newer' },
  { sort: SORTING.NEWEST, order: ORDER.ASC, title: 'Oldest' },
  {
    sort: SORTING.ALPH,
    order: ORDER.ASC,
    title: 'Name [A-Z]',
  },
  {
    sort: SORTING.ALPH,
    order: ORDER.DESC,
    title: 'Name [Z-A]',
  },
  { sort: SORTING.CHEAPEST, order: ORDER.ASC, title: 'Cheapest' },
  { sort: SORTING.CHEAPEST, order: ORDER.DESC, title: 'Expensive' },
];

export const Sort: React.FC = () => {
  const { currentLimit, totalModels } = useContext(PhonesContext);
  const { isDarkTheme } = useTheme() || { isDarkTheme: false };
  const [searchParams] = useSearchParams();

  const [openSort, setOpenSort] = useState(false);
  const [openLimit, setOpenLimit] = useState(false);

  const sort = (searchParams.get('sort') || SORTING.NEWEST) as SORTING;
  const order = (searchParams.get('order') || ORDER.DESC) as ORDER;

  const currentTitle = sortOptions.find(
    (sortValue) => sortValue.sort === sort && sortValue.order === order,
  )?.title;

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      if (
        !event.target ||
        !(event.target instanceof Element) ||
        (!event.target.closest('#sort-dropdown') &&
          !event.target.closest('#limit-dropdown'))
      ) {
        setOpenSort(false);
        setOpenLimit(false);
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <SortWrapper>
      <div id="sort-dropdown" onClick={() => setOpenSort((prev) => !prev)}>
        <SortTitle>Sort by</SortTitle>
        <SortDropDown isDarkTheme={isDarkTheme}>
          {currentTitle}
          <IconSprite />
          {openSort ? (
            <>
              {isDarkTheme ? (
                <Icon spriteName="arrow-up" fill="#75767F" />
              ) : (
                <Icon spriteName="arrow-up" />
              )}
            </>
          ) : (
            <>
              {isDarkTheme ? (
                <Icon spriteName="arrow-down" fill="#75767F" />
              ) : (
                <Icon spriteName="arrow-down" />
              )}
            </>
          )}
        </SortDropDown>
        {openSort && (
          <SortDropdownContent>
            {sortOptions.map((option, index) => (
              <SearchLink
                key={index}
                params={{ sort: option.sort, order: option.order, page: null }}
              >
                <SortLink sortField={option} />
              </SearchLink>
            ))}
          </SortDropdownContent>
        )}
      </div>

      <div id="limit-dropdown" onClick={() => setOpenLimit((prev) => !prev)}>
        <SortTitle>Items on page</SortTitle>
        <SortDropDownSmall isDarkTheme={isDarkTheme}>
          {currentLimit}
          <IconSprite />
          {openLimit ? (
            <>
              {isDarkTheme ? (
                <Icon spriteName="arrow-up" fill="#75767F" />
              ) : (
                <Icon spriteName="arrow-up" />
              )}
            </>
          ) : (
            <>
              {isDarkTheme ? (
                <Icon spriteName="arrow-down" fill="#75767F" />
              ) : (
                <Icon spriteName="arrow-down" />
              )}
            </>
          )}
        </SortDropDownSmall>
        {openLimit && (
          <SortDropdownContent>
            {['4', '8', '16', 'All'].map((num) => (
              <SearchLink
                key={num}
                params={{
                  limit: num === 'All' ? totalModels.toString() : num,
                  page: null,
                }}
              >
                <LimitLink num={num} />
              </SearchLink>
            ))}
          </SortDropdownContent>
        )}
      </div>
    </SortWrapper>
  );
};
