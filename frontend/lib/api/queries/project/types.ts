// TODO: Define type more specific
export type ProjectType = {
  id?: any;
  title?: any;
  subTitle?: any;
  content?: any;
  createdAt?: any;
  updatedAt?: any;
};

export type CreateProjectType = {
  title: string;
  subTitle?: string | null;
  content: string;
};

export type UpdateProjectType = {
  id: number;
  title?: string;
  subTitle?: string;
  content?: string;
};

export type ProjectQuery = {
  where?: ProjectType;
};
