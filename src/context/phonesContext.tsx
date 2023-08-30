/*eslint-disable*/
import React, { createContext, useState } from 'react';
import { Phone } from '../types/Phone';
import { getPhones } from '../api/phonesAPI';

interface IContext {
  phones: Phone[];
  loadPhones: () => void;
  phonesLoading: boolean;
  updatePage: (numPage: number) => void;
  updateLimit: (numLimit: number) => void;
  currentPage: number;
  currentLimit: number;
}

export const PhonesContext = createContext<IContext>({
  phones: [],
  loadPhones: () => {},
  phonesLoading: false,
  updatePage: () => {},
  updateLimit: () => {},
  currentPage: 1,
  currentLimit: 16,
});

type Props = {
  children: React.ReactNode;
};

export const PhonesProvider: React.FC<Props> = ({ children }) => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [phonesLoading, setPhonesLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentLimit, setCurrentLimit] = useState(16);

  const updatePage = (numPage: number) => {
    setCurrentPage(numPage);
  };

  const updateLimit = (numLimit: number) => {
    setCurrentLimit(numLimit);
  };

  const loadPhones = () => {
    setPhonesLoading(true);

    getPhones({ page: currentPage, limit: currentLimit })
      .then((phonesFromServer) => setPhones(phonesFromServer))
      .finally(() => setPhonesLoading(false));
  };

  const value = {
    phones,
    loadPhones,
    phonesLoading,
    updateLimit,
    updatePage,
    currentLimit,
    currentPage,
  };

  return (
    <PhonesContext.Provider value={value}>{children}</PhonesContext.Provider>
  );
};
