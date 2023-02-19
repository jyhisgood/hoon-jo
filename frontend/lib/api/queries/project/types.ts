export type ProjectType = {
  id: number;
  title: any;
  subTitle: any;
  content: any;
  createdAt: Date;
  updatedAt: Date;
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
