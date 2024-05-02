import { SVGSelector } from "@/shared/ui/svg";
import styles from "./styles.module.scss";

export const ErrorList = () => (
  <div className={styles.errorlist}>
    <div className={styles.icon}>
      <SVGSelector id="not-found" />
    </div>
    <p className={styles.text}>Loading..</p>
  </div>
);
