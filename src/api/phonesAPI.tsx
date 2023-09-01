import { client } from '../helpers/fetchClient';
import { Phone } from '../types/Phone';
import { PhoneDetails } from '../types/PhoneDetails';

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
    `/phones?${limit ? `limit=${limit}` : ''}${page ? `&page=${page}` : ''}`,
  ); // mock url
};

export const getOnePhone = (phoneId: string) => {
  return client.get<PhoneDetails>(`../assets/data/phones/${phoneId}.json`); // mock url
};
