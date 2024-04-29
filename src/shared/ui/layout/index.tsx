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

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.layout}>{children}</div>
);

Layout.Header = function Header({
  as: Component = "header",
  ...props
}: {
  as: (({ ...props }: HeaderProps) => React.JSX.Element) | string;
} & HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={`${styles.header__container} ${styles.container}`}>
        <Component {...props} />
      </div>
    </header>
  );
};

Layout.Main = function Main({
  as: Component = "main",
  ...props
}: {
  as: (({ ...props }: PageProps) => React.JSX.Element) | string;
} & PageProps) {
  return (
    <main className={styles.main}>
      <div className={`${styles.main__container} ${styles.container}`}>
        <Component {...props} />
      </div>
    </main>
  );
};

export { Layout };
