import { client } from '../helpers';
import { LoginTypes, RegisterData, UserLogin } from '../types';

export const fetchLogin = (data: LoginTypes) => {
  return client.post<UserLogin>('/auth/login', data);
};

export const fetchAuthMe = () => {
  return client.get<UserLogin>('/auth/me');
};

export const fetchRegister = (data: RegisterData) => {
  return client.post<UserLogin>('auth/register', data);
};
