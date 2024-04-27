import { SVGSelector } from "@/shared/ui/svg";

import styles from "./styles.module.scss";

const NotFoundPage = () => (
  <div className={styles["not-found-page"]}>
    <div className={styles["not-found-page__icon"]}>
      <SVGSelector id="not-found" />
    </div>
    <div className={styles["not-found-page__text"]}>User not found</div>
  </div>
);

export { NotFoundPage };
