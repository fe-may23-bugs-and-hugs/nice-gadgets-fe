/*eslint-disable*/
import React, { createContext, useState } from 'react';
import { Phone } from '../types/Phone';
import { getPhones } from '../api/phonesAPI';
import { SORTING } from '../types/sortEnum';
import { ORDER } from '../types/OrderEnum';
import { useSearchParams } from 'react-router-dom';

interface IContext {
  phones: Phone[];
  loadPhones: () => void;
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
  loadPhones: () => {},
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

  const loadPhones = () => {
    setPhonesLoading(true);

    getPhones({
      page,
      limit,
      sort,
      order,
    })
      .then((phonesFromServer) => {
        setPhones(phonesFromServer.data);
        setTotalPages(phonesFromServer.totalPages);
        setTotalModels(phonesFromServer.totalItems);
      })
      .catch(() => setErrors(true))
      .finally(() => setPhonesLoading(false));
  };

  const value = {
    phones,
    loadPhones,
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
