import { useMutation, useQuery } from '@tanstack/react-query';
import { AxiosRequestConfig } from 'axios';
import client, { queryClient } from '~/lib/api/client';
import { CreateType, GetQuery, UpdateType } from './types';
import useApi from './useApi';

export const PROJECT_KEY = '/project';

export default function useProjects(options?: GetQuery) {
  const { create, remove, update, getAll } = useApi(PROJECT_KEY);

  const { data: projects, ...restResults } = useQuery(
    [PROJECT_KEY, options],
    () => getAll(options)
  );

  const { mutate: createProject } = useMutation(
    (data: CreateType) => create(data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [PROJECT_KEY] });
      },
    }
  );

  const { mutate: patchProject } = useMutation(
    (data: UpdateType) => update(data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [PROJECT_KEY] });
      },
    }
  );

  const { mutate: deleteProject } = useMutation((id: number) => remove(id), {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [PROJECT_KEY] });
    },
  });
  return {
    projects: projects || [],
    createProject,
    patchProject,
    deleteProject,
    ...restResults,
  };
}
