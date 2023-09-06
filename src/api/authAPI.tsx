import { client } from '../helpers/fetchClient';
import { LoginTypes } from '../types/Login';

export const fetchLogin = (data: LoginTypes) => {
  return client.post('/auth/login', data);
};
