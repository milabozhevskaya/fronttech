import styles from "./styles.module.scss";

const Avatar = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.avatar}>{children}</div>
);

export { Avatar };
