import { client } from '../helpers';
import { ORDER, Phone, SORTING } from '../types';

type fetchParams = {
  limit: number;
  page: number;
  sort: SORTING;
  order: ORDER;
};

type ServerAnsw = {
  data: Phone[];
  totalItems: number;
  totalPages: number;
  currentPage: number;
};

export const getPhones = (
  { limit, page, sort, order }: fetchParams,
  pathname: string,
) => {
  return client.get<ServerAnsw>(
    `/api/products?productType=${pathname.slice(1)}&${
      limit ? `limit=${limit}` : ''
    }${page ? `&page=${page}` : ''}&sort=${sort}&order=${order}`,
  );
};

export const getOnePhone = (productId: string) => {
  return client.get(`/api/products/${productId}`);
};

export const getSliderData = (path: string) => {
  return client.get<Phone[]>(`/api/products/${path}`);
};
