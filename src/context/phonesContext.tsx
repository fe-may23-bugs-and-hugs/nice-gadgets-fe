/*eslint-disable*/
import React, { createContext, useState } from 'react';
import { Phone } from '../types/Phone';
import { getPhones, getSliderData } from '../api/phonesAPI';
import { SORTING } from '../types/sortEnum';
import { ORDER } from '../types/OrderEnum';
import { useSearchParams } from 'react-router-dom';

interface IContext {
  phones: Phone[];
  loadPhones: (pathname: string) => void;
  loadSliderData: (pathname: string, callback: (data: Phone[]) => void) => void;
  phonesLoading: boolean;
  currentPage: number;
  currentLimit: number;
  totalPages: number;
  totalModels: number;
  sortField: SORTING;
  order: ORDER;
}

export const PhonesContext = createContext<IContext>({
  phones: [],
  loadPhones: () => { },
  loadSliderData: () => { },
  phonesLoading: false,
  currentPage: 1,
  currentLimit: 16,
  totalPages: 0,
  totalModels: 0,
  sortField: SORTING.NEWEST,
  order: ORDER.DESC,
});

type Props = {
  children: React.ReactNode;
};

export const PhonesProvider: React.FC<Props> = ({ children }) => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [phonesLoading, setPhonesLoading] = useState(false);
  const [errors, setErrors] = useState(false);

  const [searchParams] = useSearchParams();
  const sort = (searchParams.get('sort') || SORTING.NEWEST) as SORTING;
  const order = (searchParams.get('order') || ORDER.DESC) as ORDER;
  const page = +(searchParams.get('page') || 1);
  const limit = +(searchParams.get('limit') || 16);
  const [totalPages, setTotalPages] = useState(0);
  const [totalModels, setTotalModels] = useState(0);

  const loadPhones = (pathname: string) => {
    setPhonesLoading(true);

    getPhones(
      {
        page,
        limit,
        sort,
        order,
      },
      pathname,
    )
      .then((phonesFromServer) => {
        setPhones(phonesFromServer.data);
        setTotalPages(phonesFromServer.totalPages);
        setTotalModels(phonesFromServer.totalItems);
      })
      .catch(() => setErrors(true))
      .finally(() => setPhonesLoading(false));
  };

  const loadSliderData = (
    pathname: string,
    callback: (data: Phone[]) => void
  ) => {
    setPhonesLoading(true);
    
    getSliderData(pathname)
      .then((result) => callback(result))
      .catch(() => setErrors(true))
      .finally(() => setPhonesLoading(false));
  };

  const value = {
    phones,
    loadPhones,
    loadSliderData,
    phonesLoading,
    currentLimit: limit,
    currentPage: page,
    totalPages,
    totalModels,
    sortField: sort,
    order,
  };

  return (
    <PhonesContext.Provider value={value}>{children}</PhonesContext.Provider>
  );
};
