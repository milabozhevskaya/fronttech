import { SVGSelector } from "@/shared/ui/svg";

import styles from "./styles.module.scss";

const LoadingPage = () => (
  <div className={styles["loading-page"]}>
    <div className={styles["loading-page__icon"]}>
      <SVGSelector id="loading" />
    </div>
    <div className={styles["loading-page__text"]}>Loading...</div>
  </div>
);

export { LoadingPage };
