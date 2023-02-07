import { useMutation, useQuery } from '@tanstack/react-query';
import { AxiosRequestConfig } from 'axios';
import client, { queryClient } from '~/lib/api/client';
import { CreateProjectType, ProjectQuery, UpdateProjectType } from './types';

export const PROJECT_KEY = 'projects';

// TODO: How to override id to get one????
export default function useProjects(options?: ProjectQuery) {
  const { data: projects, ...restResults } = useQuery(
    [PROJECT_KEY, options],
    () => client.getProjects(options)
  );

  const { mutate: createProject } = useMutation(
    (data: CreateProjectType) => client.createProject(data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [PROJECT_KEY] });
      },
    }
  );

  const { mutate: patchProject } = useMutation(
    (data: UpdateProjectType) => client.patchProject(data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [PROJECT_KEY] });
      },
    }
  );

  const { mutate: deleteProject } = useMutation(
    (id: number) => client.deleteProject(id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [PROJECT_KEY] });
      },
    }
  );
  return {
    projects,
    createProject,
    patchProject,
    deleteProject,
    ...restResults,
  };
}
