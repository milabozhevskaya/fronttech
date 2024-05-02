import type { FC, ReactNode } from "react";
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
  page: number;
  userRepos: Array<Repo>;
  onGetRepos: (page: number) => void;
  isPendingRepos: boolean;
  isReposError: boolean;
};

type LayoutProps = { children: ReactNode };

type LayoutHeaderProps = { as?: FC<HeaderProps> | string };

type LayoutMainProps = { as?: FC<PageProps> | string };

export const Layout: FC<LayoutProps> = ({ children }) => (
  <div className={styles.layout}>{children}</div>
);

export const LayoutHeader: FC<LayoutHeaderProps> = function Header({
  as: Component = "header",
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

export const LayoutMain: FC<LayoutMainProps> = function Main({
  as: Component = "main",
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
