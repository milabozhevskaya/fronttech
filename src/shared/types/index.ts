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
  html_url: string;
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
  search: string;
  user: T | null;
  onGetUser: (value: string) => void;
  isPendingUser: boolean;
  isUserError: boolean;
  reposTotalCount: number;
  page: number;
  userRepos: Array<Repo>;
  onGetRepos: (page: number) => void;
  isPendingRepos: boolean;
  isReposError: boolean;
};

type ServicePayload<T> = {
  isLoading: boolean;
  isFetching: boolean;
  error: string | null;
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
