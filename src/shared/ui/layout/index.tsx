import type { ReactNode } from "react";
import type { User } from "@/shared/types";

import styles from "./styles.module.scss";

type HeaderProps = {
  onSearch: (value: string) => void;
};

type PageProps = {
  user?: User;
  userQuery: string;
  loading: boolean;
  fetching: boolean;
  notFound: boolean;
};

const Layout = ({ children }: { children: ReactNode }) => (
  <div className={styles.layout}>{children}</div>
);

Layout.Header = function Header({
  as: Component = "header",
  ...props
}: {
  as: (({ ...props }: HeaderProps) => JSX.Element) | string;
} & HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={`${styles.headerContainer} ${styles.container}`}>
        <Component {...props} />
      </div>
    </header>
  );
};

Layout.Main = function Main({
  as: Component = "main",
  ...props
}: {
  as: (({ ...props }: PageProps) => JSX.Element) | string;
} & PageProps) {
  return (
    <main className={styles.main}>
      <div className={`${styles.mainContainer} ${styles.container}`}>
        <Component {...props} />
      </div>
    </main>
  );
};

export { Layout };
