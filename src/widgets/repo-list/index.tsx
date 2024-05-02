import type { Repo } from "@/shared/types";
import type { FC } from "react";
import { List } from "./ui/list";
import { EmptyList } from "./ui/empty-list";
import { LoadList } from "./ui/load-list";
import { ErrorList } from "./ui/error-list";

type RepoListProps = {
  reposTotalCount: number;
  page: number;
  userRepos: Array<Repo>;
  onGetRepos: (page: number) => void;
  isPendingRepos: boolean;
  isReposError: boolean;
};

export const RepoList: FC<RepoListProps> = ({
  reposTotalCount,
  page,
  userRepos,
  onGetRepos,
  isPendingRepos,
  isReposError,
}) => (
  <>
    {isPendingRepos && <LoadList />}
    {!isPendingRepos && isReposError && <ErrorList />}
    {!isPendingRepos && !reposTotalCount && <EmptyList />}
    {!isPendingRepos && !!reposTotalCount && (
      <List {...{ reposTotalCount, page, onGetRepos, userRepos }} />
    )}
  </>
);
