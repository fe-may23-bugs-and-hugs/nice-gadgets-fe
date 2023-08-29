import { client } from '../helpers/fetchClient';

export const getPhones = () => {
  return client.get('../assets/data/phones.json'); // mock url
};

export const getOnePhone = (phoneId: string) => {
  return client.get(`../assets/data/phones/${phoneId}.json`); // mock url
};
