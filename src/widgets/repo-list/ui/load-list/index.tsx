import { SVGSelector } from "@/shared/ui/svg";
import styles from "./styles.module.scss";

export const LoadList = () => (
  <div className={styles.loadlist}>
    <div className={styles.icon}>
      <SVGSelector id="loading" />
    </div>
    <p className={styles.text}>Loading..</p>
  </div>
);
