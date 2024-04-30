import { SVGSelector } from "@/shared/ui/svg";

import styles from "./styles.module.scss";

const LoadingPage = () => (
  <div className={styles.loadingPage}>
    <div className={styles.loadingPageIcon}>
      <SVGSelector id="loading" />
    </div>
    <div className={styles.loadingPageText}>Loading...</div>
  </div>
);

export { LoadingPage };
