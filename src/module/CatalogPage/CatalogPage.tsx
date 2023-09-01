/* eslint-disable*/
import React, { useContext, useEffect, useState } from 'react';
import { IconSprite, Icon } from '../shared';
import { ContentLayout } from '../shared/ContentLayout';
import {
  IconsWrapper,
  IconsTitle,
  CatalogTitle,
  CatalogModelsLeft,
  SortWrapper,
  SortTitle,
  SortDropDown,
  SortDropdownContent,
} from './CatalogPage.styled';
import { Catalog } from '../Catalog/Catalog';
import { PhonesContext } from '../../context/phonesContext';
import { Spinner } from '../Spinner';
import { SortLink } from '../SortLink';
import { Pagination } from '../Pagination/Pagination';
import { LimitLink } from '../LimitLink';

export const CatalogPage: React.FC = () => {
  const {
    loadPhones,
    phones,
    phonesLoading,
    currentPage,
    currentLimit,
    totalModels,
  } = useContext(PhonesContext);
  useEffect(() => {
    loadPhones();
  }, [currentPage, currentLimit]);

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
    <>
      <ContentLayout>
        {phonesLoading ? (
          <Spinner />
        ) : (
          <>
            <IconsWrapper>
              <IconSprite />
              <Icon size="24" spriteName="home" />
              <Icon size="12" spriteName="arrow-right" />
              <IconsTitle>Phones</IconsTitle>
            </IconsWrapper>

            <CatalogTitle>Mobile Phones</CatalogTitle>
            <CatalogModelsLeft>{totalModels} models</CatalogModelsLeft>

            <SortWrapper>
              <div
                id="sort-dropdown"
                onClick={() => setOpenSort((prev) => !prev)}
              >
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

              <div
                id="limit-dropdown"
                onClick={() => setOpenLimit((prev) => !prev)}
              >
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

            <Catalog phonesData={phones} />
          </>
        )}
        <Pagination />
      </ContentLayout>
    </>
  );
};
