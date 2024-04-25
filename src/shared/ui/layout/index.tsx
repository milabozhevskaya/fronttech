import type { HeaderProps, PageProps } from "@/shared/types";

import css from "./styles.module.scss";

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => (
  <div className={css.layout}>{children}</div>
);

Layout.Header = function Header({
  as: Component = "header",
  ...props
}: {
  as: (({ ...props }: HeaderProps) => React.JSX.Element) | string;
} & HeaderProps): JSX.Element {
  return (
    <header className={css.header}>
      <div className={`${css.header__container} ${css.container}`}>
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
} & PageProps): JSX.Element {
  return (
    <main className={css.main}>
      <div className={`${css.main__container} ${css.container}`}>
        <Component {...props} />
      </div>
    </main>
  );
};

export { Layout };
