import { UserInfo } from "@/entities/user";
import { RepoList } from "@/widgets/repo-list";

import type { User } from "@/shared/types";

import styles from "./styles.module.scss";

type UserPageProps = User & { userQuery: string };

const UserPage = ({ ...props }: UserPageProps) => (
  <div className={styles["user-page"]}>
    <div className={styles["user-page__aside"]}>
      <UserInfo {...props} />
    </div>
    <div className={styles["user-page__content"]}>
      <RepoList
        userQuery={props.userQuery}
        totalCountOfRepos={props.public_repos}
      />
    </div>
  </div>
);

export { UserPage };
