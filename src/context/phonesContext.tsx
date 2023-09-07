import React, { createContext, useState } from 'react';
import { ORDER, Phone, SORTING } from '../types';
import { useSearchParams } from 'react-router-dom';
import { getPhones, getSliderData } from '../api';

interface IContext {
  phones: Phone[];
  loadPhones: (pathname: string) => Promise<void>;
  loadNewData: () => void;
  loadDiscountData: () => void;
  loadRecommendedData: (path: string) => void;
  newLoader: boolean;
  discountLoader: boolean;
  recommendedLoader: boolean;
  newData: Phone[];
  discountData: Phone[];
  recommendedData: Phone[];
  phonesLoading: boolean;
  currentPage: number;
  currentLimit: number;
  totalPages: number;
  totalModels: number;
  sortField: SORTING;
  order: ORDER;
  limit: number;
  errors: boolean;
}

export const PhonesContext = createContext<IContext>({
  phones: [],
  loadPhones: () => Promise.resolve(),
  loadNewData: () => {},
  loadDiscountData: () => {},
  loadRecommendedData: () => {},
  newLoader: false,
  discountLoader: false,
  recommendedLoader: false,
  newData: [],
  discountData: [],
  recommendedData: [],
  limit: 16,
  phonesLoading: false,
  currentPage: 1,
  currentLimit: 16,
  totalPages: 0,
  totalModels: 0,
  sortField: SORTING.NEWEST,
  order: ORDER.DESC,
  errors: false,
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
  const [newData, setNewData] = useState<Phone[]>([]);
  const [discountData, setDiscountData] = useState<Phone[]>([]);
  const [newLoader, setNewLoader] = useState(false);
  const [discountLoader, setDiscountLoader] = useState(false);
  const [recommendedData, setRecommendedData] = useState<Phone[]>([]);
  const [recommendedLoader, setRecommendedLoader] = useState(false);

  const loadPhones = async(pathname: string): Promise<void> => {
    setPhonesLoading(true);

    try {
      const phonesFromServer = await getPhones(
        {
          page,
          limit,
          sort,
          order,
        },
        pathname,
      );

      setPhones(phonesFromServer.data);
      setTotalPages(phonesFromServer.totalPages);
      setTotalModels(phonesFromServer.totalItems);
    } catch (error) {
      setErrors(true);
    } finally {
      setPhonesLoading(false);
    }
  };

  const loadNewData = () => {
    setNewLoader(true);

    getSliderData('/new')
      .then(setNewData)
      .catch(() => setErrors(true))
      .finally(() => setNewLoader(false));
  };

  const loadDiscountData = () => {
    setDiscountLoader(true);

    getSliderData('/discount')
      .then(setDiscountData)
      .catch(() => setErrors(true))
      .finally(() => setDiscountLoader(false));
  };

  const loadRecommendedData = (path: string) => {
    setRecommendedLoader(true);

    getSliderData(`${path}/recommended`)
      .then(setRecommendedData)
      .catch(() => setErrors(true))
      .finally(() => setRecommendedLoader(false));
  };

  const value = {
    phones,
    loadPhones,
    loadNewData,
    loadDiscountData,
    loadRecommendedData,
    newLoader,
    discountLoader,
    recommendedLoader,
    newData,
    discountData,
    recommendedData,
    phonesLoading,
    currentLimit: limit,
    currentPage: page,
    totalPages,
    totalModels,
    sortField: sort,
    order,
    limit,
    errors,
  };

  return (
    <PhonesContext.Provider value={value}>{children}</PhonesContext.Provider>
  );
};
