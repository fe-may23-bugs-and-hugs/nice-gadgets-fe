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
} from './Sort.styled';
import { PhonesContext } from '../../context';
import { SORTING } from '../../types/sortEnum';
import { ORDER } from '../../types/OrderEnum';
import { useSearchParams } from 'react-router-dom';
import { SearchLink } from '../shared/SearchLink';

const sortOptions = [
  { sort: SORTING.NEWEST, order: ORDER.DESC, title: 'Newer' },
  { sort: SORTING.CHEAPEST, order: ORDER.ASC, title: 'Oldest' },
  {
    sort: SORTING.ALPH,
    order: ORDER.ASC,
    title: 'Alphabetically [A-Z]',
  },
  {
    sort: SORTING.CHEAPEST,
    order: ORDER.DESC,
    title: 'Alphabetically [Z-A]',
  },
  { sort: SORTING.CHEAPEST, order: ORDER.ASC, title: 'Cheapest' },
  { sort: SORTING.CHEAPEST, order: ORDER.DESC, title: 'Expensive' },
];

export const Sort: React.FC = () => {
  const { currentLimit, totalModels } = useContext(PhonesContext);
  const [searchParams] = useSearchParams();

  const [openSort, setOpenSort] = useState(false);
  const [openLimit, setOpenLimit] = useState(false);

  const sort = (searchParams.get('sort') || SORTING.NEWEST) as SORTING;

  const currentTitle = sortOptions.find((sortValue) => sortValue.sort === sort)
    ?.title;

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
        <SortDropDown>
          {currentTitle}
          <IconSprite />
          {openSort ? (
            <Icon spriteName="arrow-up" />
          ) : (
            <Icon spriteName="arrow-down" />
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
        <SortDropDown>
          {currentLimit}
          <IconSprite />
          {openLimit ? (
            <Icon spriteName="arrow-up" />
          ) : (
            <Icon spriteName="arrow-down" />
          )}
        </SortDropDown>
        {openLimit && (
          <SortDropdownContent>
            {['4', '8', '16', 'All'].map((num) => (
              <SearchLink
                key={num}
                params={{ limit: num === 'All' ? totalModels.toString() : num }}
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
