import { SVGSelector } from "@/shared/ui/svg";

import styles from "./styles.module.scss";

export const NotFoundPage = () => (
  <div className={styles.notfoundpage}>
    <div className={styles.icon}>
      <SVGSelector id="not-found" />
    </div>
    <div className={styles.text}>User not found</div>
  </div>
);
