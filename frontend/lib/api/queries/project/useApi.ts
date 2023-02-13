import { AxiosRequestConfig } from 'axios';
import client from '../../client';
import { CreateType, GetQuery, ProjectType, UpdateType } from './types';

export default function useApi(url: string) {
  function getAll(options?: GetQuery): Promise<ProjectType[]> {
    return client.get<ProjectType[]>(url, {
      params: options,
    });
  }
  function getOne(id: number) {
    return client.get<ProjectType>(`${url}/${id}`);
  }
  function remove(id: number) {
    return client.delete(`${url}/${id}`);
  }
  function update(data: UpdateType, options?: AxiosRequestConfig) {
    const { id, ...rest } = data;
    return client.patch(`${url}/${id}`, rest, options);
  }
  function create(data: CreateType, options?: AxiosRequestConfig) {
    return client.post(url, data, options);
  }

  return { getAll, getOne, create, update, remove };
}
