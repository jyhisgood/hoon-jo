import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
  Method,
} from 'axios';
import defu from 'defu';
import { parse, stringify } from 'qs';
import Cookies from 'js-cookie';

import type { CookieAttributes } from 'js-cookie';

import { QueryClient } from '@tanstack/react-query';
import {
  CreateProjectType,
  ProjectQuery,
  UpdateProjectType,
} from 'queries/project/types';

interface StoreConfig {
  key: string;
  useLocalStorage?: boolean;
  cookieOptions?: CookieAttributes;
}

type ClientOption = {
  url?: string;
  prefix: string;
  store: StoreConfig;
  axiosOptions: AxiosRequestConfig;
};

// React Query
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      cacheTime: 0, //1000 * 60 * 5,
      staleTime: 0, // 1000 * 60 * 60, // 1 hour (in milliseconds) - how long a query can be cached
      // refatchInterval: 1000 * 60 * 60, // 1 hour (in milliseconds) - how long after a query is stale should it be refetched
      // refetchIntervalInBackground: false, //refetch queries in the background when the app is in the background
      refetchOnWindowFocus: false, //refetch queries when the app regains focus
      refetchOnReconnect: false, //refetch queries when the client reconnects to the server
      // refetchOnMount: true, //refetch queries when the component mounts
      // retryOnMount: true, //retry queries when the component mounts
      // notifyOnChangeProps: [], //notify queries when these props change
      // suspense: true, //suspend queries until the component is mounted
      // keepPreviousData: true, //keep previous data when the component is unmounted
    },
  },
});

export function isBrowser(): boolean {
  return typeof window !== 'undefined';
}

const defaults: ClientOption = {
  prefix: '/api',
  store: {
    key: 'jwt',
    useLocalStorage: false,
    cookieOptions: { path: '/' },
  },
  axiosOptions: {},
};

class Client {
  $axios: AxiosInstance;
  options: ClientOption;

  constructor(options?: ClientOption) {
    this.options = defu(options, defaults);

    this.$axios = axios.create({
      baseURL: this.options.url
        ? new URL(this.options.prefix, this.options.url).href
        : this.options.prefix,

      paramsSerializer: {
        encode: (value, defaultEncoder) => parse(value, defaultEncoder as any),
        serialize: (params, options) => stringify(params, options as any),
      },
    });

    this.$axios.interceptors.request.use(
      this.requestInterceptor,
      this.errorInterceptor
    );

    this.$axios.interceptors.response.use(
      this.responseInterceptor,
      this.errorInterceptor
    );
  }

  requestInterceptor = (config: InternalAxiosRequestConfig) => {
    const token = this.getToken();
    if (token) {
      if (config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  };

  responseInterceptor = (response: AxiosResponse) => {
    return response;
  };

  errorInterceptor = (error: AxiosError) => {
    return Promise.reject(error);
  };

  public getToken(): string | null {
    const { useLocalStorage, key } = this.options.store;
    if (isBrowser()) {
      const token = useLocalStorage
        ? window.localStorage.getItem(key)
        : (Cookies.get(key) as string);

      if (typeof token === 'undefined') return null;

      return token;
    }

    return null;
  }

  request<T = any>(
    method: Method,
    url: string,
    data?: any,
    options?: AxiosRequestConfig
  ) {
    return this.$axios.request<T>({
      method,
      url,
      data,
      ...options,
    });
  }

  async get<T = any>(url: string, options?: AxiosRequestConfig) {
    const res = await this.request<T>('get', url, undefined, options);
    return res.data;
  }

  async post<T = any>(url: string, data?: any, options?: AxiosRequestConfig) {
    const res = await this.request<T>('post', url, data, options);
    return res.data;
  }

  async put<T = any>(url: string, data?: any, options?: AxiosRequestConfig) {
    const res = await this.request<T>('put', url, data, options);
    return res.data;
  }

  async patch<T = any>(url: string, data?: any, options?: AxiosRequestConfig) {
    const res = await this.request<T>('patch', url, data, options);
    return res.data;
  }

  async delete<T = any>(url: string, data?: any, options?: AxiosRequestConfig) {
    const res = await this.request<T>('delete', url, data, options);
    return res.data;
  }

  // Projects
  getProjects(options?: ProjectQuery) {
    return this.get('/project', {
      params: options,
    });
  }
  getProject(id: number, options?: AxiosRequestConfig) {
    return this.get(`/project/${id}`, options);
  }
  deleteProject(id: number) {
    return this.delete(`/project/${id}`);
  }
  patchProject(data: UpdateProjectType, options?: AxiosRequestConfig) {
    const { id, ...rest } = data;
    return this.patch(`/project/${id}`, rest, options);
  }
  createProject(data: CreateProjectType, options?: AxiosRequestConfig) {
    return this.post('/project', data, options);
  }
}

export default new Client();
