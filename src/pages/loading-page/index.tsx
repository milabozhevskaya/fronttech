import { SVGSelector } from "@/shared/ui/svg";

import styles from "./styles.module.scss";

export const LoadingPage = () => (
  <div className={styles.loadingpage}>
    <div className={styles.icon}>
      <SVGSelector id="loading" />
    </div>
    <div className={styles.text}>Loading...</div>
  </div>
);
