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

export const getPhones = ({ limit, page, sort, order }: fetchParams) => {
  return client.get<ServerAnsw>(
    `/phones?${limit ? `limit=${limit}` : ''}${
      page ? `&page=${page}` : ''
    }&sort=${sort}&order=${order}`,
  );
};

export const getOnePhone = (productId: string) => {
  return client.get(`/products/${productId}`);
};
