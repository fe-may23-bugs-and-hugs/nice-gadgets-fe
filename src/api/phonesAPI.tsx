import { client } from '../helpers/fetchClient';
import { Phone } from '../types/Phone';
import { PhoneDetails } from '../types/PhoneDetails';

export const getPhones = () => {
  return client.get<Phone[]>('../assets/data/phones.json'); // mock url
};

export const getOnePhone = (phoneId: string) => {
  return client.get<PhoneDetails>(`../assets/data/phones/${phoneId}.json`); // mock url
};
