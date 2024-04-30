import { SVGSelector } from "@/shared/ui/svg";

import styles from "./styles.module.scss";

const EmptyPage = () => (
  <div className={styles.emptyPage}>
    <div className={styles.emptyPageIcon}>
      <SVGSelector id="search" />
    </div>
    <div className={styles.emptyPageText}>
      Start with searching a GitHub user
    </div>
  </div>
);

export { EmptyPage };
