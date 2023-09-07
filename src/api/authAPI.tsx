import { client } from '../helpers/fetchClient';
import { LoginTypes } from '../types/Login';
import { RegisterData } from '../types/Register';
import { UserLogin } from '../types/UserLogin';

export const fetchLogin = (data: LoginTypes) => {
  return client.post<UserLogin>('/auth/login', data);
};

export const fetchAuthMe = () => {
  return client.get<UserLogin>('/auth/me');
};

export const fetchRegister = (data: RegisterData) => {
  return client.post<UserLogin>('auth/register', data);
};
