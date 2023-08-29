import axios, { AxiosRequestConfig } from 'axios';

// axios.defaults.baseURL = 'http://localhost:3000/';

const wait = (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

type RequestMethod = 'GET';

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
    .then(() => axios.request<T>({ url, ...options }))
    .then((response) => {
      return response.data;
    });
}

export const client = {
  get: <T>(url: string) => request<T>(url),
};
