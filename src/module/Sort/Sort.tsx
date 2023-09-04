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

export const Sort: React.FC = () => {
  const { currentLimit } = useContext(PhonesContext);

  const [openSort, setOpenSort] = useState(false);
  const [openLimit, setOpenLimit] = useState(false);

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
          Newest
          <IconSprite />
          {openSort ? (
            <Icon spriteName="arrow-up" />
          ) : (
            <Icon spriteName="arrow-down" />
          )}
        </SortDropDown>
        {openSort && (
          <SortDropdownContent>
            <li>
              <SortLink title="Newer" />
            </li>

            <li>
              <SortLink title="Newer" />
            </li>

            <li>
              <SortLink title="Newer" />
            </li>
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
              <LimitLink key={num} num={num} />
            ))}
          </SortDropdownContent>
        )}
      </div>
    </SortWrapper>
  );
};
