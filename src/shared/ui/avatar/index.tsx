import type { ReactNode } from "react";
import styles from "./styles.module.scss";

const Avatar = ({ children }: { children: ReactNode }) => (
  <div className={styles.avatar}>{children}</div>
);

export { Avatar };
