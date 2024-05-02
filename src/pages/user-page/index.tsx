import { UserInfo } from "@/entities/user";
import { RepoList } from "@/widgets/repo-list";

import type { Repo, User } from "@/shared/types";
import type { FC } from "react";

import styles from "./styles.module.scss";

type UserPageProps = {
  user: User;
  reposTotalCount: number;
  page: number;
  userRepos: Array<Repo>;
  onGetRepos: (page: number) => void;
  isPendingRepos: boolean;
  isReposError: boolean;
};

export const UserPage: FC<UserPageProps> = ({
  user,
  reposTotalCount,
  page,
  userRepos,
  onGetRepos,
  isPendingRepos,
  isReposError,
}) => (
  <div className={styles.userpage}>
    <div className={styles.aside}>{user && <UserInfo {...user} />}</div>
    <div className={styles.content}>
      <RepoList
        {...{
          reposTotalCount,
          page,
          userRepos,
          onGetRepos,
          isPendingRepos,
          isReposError,
        }}
      />
    </div>
  </div>
);
