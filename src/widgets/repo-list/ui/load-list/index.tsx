import { SVGSelector } from "@/shared/ui/svg";
import styles from "./styles.module.scss";

export const LoadList = () => (
  <div className={styles.loadList}>
    <div className={styles.loadListIcon}>
      <SVGSelector id="loading" />
    </div>
    <p className={styles.loadListText}>Loading..</p>
  </div>
);
