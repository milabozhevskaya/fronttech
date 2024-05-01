import { UserInfo } from "@/entities/user";
import { RepoList } from "@/widgets/repo-list";

import type { Repo, User } from "@/shared/types";

import styles from "./styles.module.scss";

type UserPageProps = {
  user: User;
  reposTotalCount: number;
  userRepos: Array<Repo>;
  onGetRepos: (page: number) => void;
  isPendingRepos: boolean;
  isReposError: boolean;
};

const UserPage = ({
  user,
  reposTotalCount,
  userRepos,
  onGetRepos,
  isPendingRepos,
  isReposError,
}: UserPageProps) => (
  <div className={styles.userPage}>
    <div className={styles.userPageAside}>{user && <UserInfo {...user} />}</div>
    <div className={styles.userPageContent}>
      <RepoList
        {...{
          reposTotalCount,
          userRepos,
          onGetRepos,
          isPendingRepos,
          isReposError,
        }}
      />
    </div>
  </div>
);

export { UserPage };
