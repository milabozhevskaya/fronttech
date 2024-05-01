import { SVGSelector } from "@/shared/ui/svg";

import styles from "./styles.module.scss";

export const NotFoundPage = () => (
  <div className={styles.notFoundPage}>
    <div className={styles.notFoundPageIcon}>
      <SVGSelector id="not-found" />
    </div>
    <div className={styles.notFoundPageText}>User not found</div>
  </div>
);
