type User = {
  name: string;
  login: string;
  avatarURL: string,
  htmlURL: string,
  publicRepos: number,
  followers: number,
  following: number,
}

type Repo = {
  id: number,
  name: string;
  description: string | null;
  htmlURL: string;
}

type RepoListProps = {
  login: string;
  quantity: number;
}

type UserContextType<T> = {
  data: T | null;
  loading: boolean;
  error: Error | undefined;
}

type PageProps = {
  user: User | null;
  loading: boolean;
  notFound: boolean;

}

type ServicePayload<T> = {
  loading: boolean,
  error: Error | undefined,
  data: T | null
}

type HeaderProps = {
  onSearch: (value: string) => void;
}

export type { User, UserContextType, Repo, RepoListProps, PageProps, HeaderProps, ServicePayload };
