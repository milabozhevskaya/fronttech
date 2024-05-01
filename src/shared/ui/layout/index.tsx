import type { ReactNode } from "react";
import type { Repo, User } from "@/shared/types";

import { UserContext } from "@/app/context";
import styles from "./styles.module.scss";

type HeaderProps = {
  search: string;
  onSearch: (value: string) => void;
};

type PageProps = {
  user: User | null;
  isPendingUser: boolean;
  isUserError: boolean;
  reposTotalCount: number;
  userRepos: Array<Repo>;
  onGetRepos: (page: number) => void;
  isPendingRepos: boolean;
  isReposError: boolean;
};

export const Layout = ({ children }: { children: ReactNode }) => (
  <div className={styles.layout}>{children}</div>
);

Layout.Header = function Header({
  as: Component = "header",
}: {
  as: (({ ...props }: HeaderProps) => JSX.Element) | string;
}) {
  return (
    <header className={styles.header}>
      <div className={`${styles.headerContainer} ${styles.container}`}>
        <UserContext.Consumer>
          {(context) =>
            context && (
              <Component search={context.search} onSearch={context.onGetUser} />
            )
          }
        </UserContext.Consumer>
      </div>
    </header>
  );
};

Layout.Main = function Main({
  as: Component = "main",
}: {
  as: (({ ...props }: PageProps) => JSX.Element) | string;
}) {
  return (
    <main className={styles.main}>
      <div className={`${styles.mainContainer} ${styles.container}`}>
        <UserContext.Consumer>
          {(context) => context && <Component {...context} />}
        </UserContext.Consumer>
      </div>
    </main>
  );
};
