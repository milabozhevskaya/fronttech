type User = {
  name: string;
  login: string;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
};

type Repo = {
  id: number;
  name: string;
  description: string | null;
  htmlURL: string;
};

type UserQuery = {
  user: string;
};

type ReposQuery = {
  user: string;
  perPage: number;
  page: number;
};

type UserContextType<T> = {
  data: T | null;
  loading: boolean;
  error?: Error;
};

type ServicePayload<T> = {
  isLoading: boolean;
  isFetching: boolean;
  error: Error | null;
  data?: T;
};

type ServiceQuery<T> = T extends User
  ? UserQuery
  : T extends Array<Repo>
    ? ReposQuery
    : ReposQuery;
// : Record<string, string>;

export type {
  User,
  UserContextType,
  Repo,
  ServicePayload,
  UserQuery,
  ReposQuery,
  ServiceQuery,
};
