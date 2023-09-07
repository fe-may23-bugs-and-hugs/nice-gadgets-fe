import axios, { AxiosRequestConfig } from 'axios';

axios.defaults.baseURL = 'https://nice-gadgets-be.onrender.com';

axios.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem('token');

  return config;
});

const wait = (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

type RequestMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE';

function request<T>(
  url: string,
  method: RequestMethod = 'GET',
  data: any = null,
): Promise<T> {
  const options: AxiosRequestConfig = { method };

  if (data) {
    options.data = data;

    options.headers = {
      'Content-Type': 'application/json; charset=UTF-8',
    };
  }

  return wait(300)
    .then(() => axios.request<T>({ url, method, data }))
    .then((response) => {
      return response.data;
    });
}

export const client = {
  get: <T>(url: string) => request<T>(url),
  post: <T>(url: string, data: any) => request<T>(url, 'POST', data),
};
