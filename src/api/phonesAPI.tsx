import { client } from '../helpers/fetchClient';
import { ORDER } from '../types/OrderEnum';
import { Phone } from '../types/Phone';
import { SORTING } from '../types/sortEnum';

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
    `/products?productType=${pathname.slice(1)}&${
      limit ? `limit=${limit}` : ''
    }${page ? `&page=${page}` : ''}&sort=${sort}&order=${order}`,
  );
};

export const getOnePhone = (phoneId: string) => {
  return client.get(`../assets/data/phones/${phoneId}.json`); // mock url
};

export const getSliderData = (path: string) => {
  return client.get<Phone[]>(`products/${path}`);
};
