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

type RepoListProps = {
  userQuery: string;
  quantity: number;
};

type UserContextType<T> = {
  data: T | null;
  loading: boolean;
  error: Error | undefined;
};

type PageProps = {
  user: User | undefined;
  userQuery: string;
  loading: boolean;
  fetching: boolean;
  notFound: boolean;
};

type ServicePayload<T> = {
  isLoading: boolean;
  isFetching: boolean;
  error: Error | null;
  data: T | undefined;
};

type HeaderProps = {
  onSearch: (value: string) => void;
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
  RepoListProps,
  PageProps,
  HeaderProps,
  ServicePayload,
  UserQuery,
  ReposQuery,
  ServiceQuery,
};
