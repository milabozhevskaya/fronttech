import { SVGSelector } from "@/shared/ui/svg";
import styles from "./styles.module.scss";

const ErrorList = () => (
  <div className={styles.errorList}>
    <div className={styles.errorListIcon}>
      <SVGSelector id="not-found" />
    </div>
    <p className={styles.errorListText}>Loading..</p>
  </div>
);

export { ErrorList };
