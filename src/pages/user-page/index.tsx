import { UserInfo } from "@/entities/user";
import { RepoList } from "@/widgets/repo-list";

import type { User } from "@/shared/types";

import styles from "./styles.module.scss";

const UserPage = ({ ...props }: User & { userQuery: string }) => (
  <div className={styles["user-page"]}>
    <div className={styles["user-page__aside"]}>
      <UserInfo {...props} />
    </div>
    <div className={styles["user-page__content"]}>
      <RepoList userQuery={props.userQuery} quantity={props.public_repos} />
    </div>
  </div>
);

export { UserPage };
