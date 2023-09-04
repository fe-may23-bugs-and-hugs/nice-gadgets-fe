import { client } from '../helpers/fetchClient';
import { Phone } from '../types/Phone';

type fetchParams = {
  limit: number;
  page: number;
};

type ServerAnsw = {
  data: Phone[];
  totalItems: number;
  totalPages: number;
  currentPage: number;
};

export const getPhones = ({ limit, page }: fetchParams) => {
  return client.get<ServerAnsw>(
    `/products?${limit ? `limit=${limit}` : ''}${page ? `&page=${page}` : ''}`,
  );
};

export const getOnePhone = (productId: string) => {
  return client.get(`/products/${productId}`);
};
