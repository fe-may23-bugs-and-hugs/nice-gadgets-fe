/*eslint-disable*/
import React, { createContext, useState } from 'react';
import { Phone } from '../types/Phone';
import { getPhones, getSliderData } from '../api/phonesAPI';

interface IContext {
  phones: Phone[];
  loadPhones: () => void;
  loadSliderData: (pathname: string, clb: (data: any) => void) => void;
  phonesLoading: boolean;
  updatePage: (numPage: number) => void;
  updateLimit: (numLimit: number) => void;
  currentPage: number;
  currentLimit: number;
  totalPages: number;
  totalModels: number;
}

export const PhonesContext = createContext<IContext>({
  phones: [],
  loadPhones: () => { },
  loadSliderData: () => { },
  phonesLoading: false,
  updatePage: () => { },
  updateLimit: () => { },
  currentPage: 1,
  currentLimit: 16,
  totalPages: 0,
  totalModels: 0,
});

type Props = {
  children: React.ReactNode;
};

export const PhonesProvider: React.FC<Props> = ({ children }) => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [phonesLoading, setPhonesLoading] = useState(false);
  const [errors, setErrors] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentLimit, setCurrentLimit] = useState(16);

  const [totalPages, setTotalPages] = useState(0);
  const [totalModels, setTotalModels] = useState(0);

  const updatePage = (numPage: number) => {
    setCurrentPage(numPage);
  };

  const updateLimit = (numLimit: number) => {
    setCurrentLimit(numLimit);
  };

  console.log(currentLimit);

  const loadPhones = () => {
    setPhonesLoading(true);

    getPhones({ page: currentPage, limit: currentLimit })
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
    getSliderData(pathname)
      .then((result) => callback(result));
  };

  const value = {
    phones,
    loadPhones,
    loadSliderData,
    phonesLoading,
    updateLimit,
    updatePage,
    currentLimit,
    currentPage,
    totalPages,
    totalModels,
  };

  return (
    <PhonesContext.Provider value={value}>{children}</PhonesContext.Provider>
  );
};
