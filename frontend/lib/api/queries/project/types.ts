// TODO: Define type more specific
export type ProjectType = {
  id?: any;
  title?: any;
  subTitle?: any;
  content?: any;
  createdAt?: any;
  updatedAt?: any;
};

export type CreateType = {
  title: string;
  subTitle?: string | null;
  content: string;
};

export type UpdateType = {
  id: number;
  title?: string;
  subTitle?: string;
  content?: string;
};

export type GetQuery = {
  where?: ProjectType;
};
