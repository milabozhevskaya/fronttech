import { SVGSelector } from "@/shared/ui/svg";

import styles from "./styles.module.scss";

export const EmptyPage = () => (
  <div className={styles.emptypage}>
    <div className={styles.icon}>
      <SVGSelector id="search" />
    </div>
    <div className={styles.text}>Start with searching a GitHub user</div>
  </div>
);
