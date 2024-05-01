import type { Repo } from "@/shared/types";
import { List } from "./ui/list";
import { EmptyList } from "./ui/empty-list";
import { LoadList } from "./ui/load-list";
import { ErrorList } from "./ui/error-list";

type RepoListProps = {
  reposTotalCount: number;
  userRepos: Array<Repo>;
  onGetRepos: (page: number) => void;
  isPendingRepos: boolean;
  isReposError: boolean;
};

const RepoList = ({
  reposTotalCount,
  userRepos,
  onGetRepos,
  isPendingRepos,
  isReposError,
}: RepoListProps) => (
  <>
    {isReposError && <ErrorList />}
    {isPendingRepos && <LoadList />}
    {!reposTotalCount && <EmptyList />}
    {!!reposTotalCount && (
      <List {...{ reposTotalCount, onGetRepos, userRepos }} />
    )}
  </>
);

export { RepoList };
