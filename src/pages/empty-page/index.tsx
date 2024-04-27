import { SVGSelector } from "@/shared/ui/svg";

import styles from "./styles.module.scss";

const EmptyPage = () => (
  <div className={styles["empty-page"]}>
    <div className={styles["empty-page__icon"]}>
      <SVGSelector id="search" />
    </div>
    <div className={styles["empty-page__text"]}>
      Start with searching a GitHub user
    </div>
  </div>
);

export { EmptyPage };
