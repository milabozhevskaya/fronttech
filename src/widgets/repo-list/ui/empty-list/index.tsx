import { SVGSelector } from "@/shared/ui/svg";
import styles from "./styles.module.scss";

export const EmptyList = () => (
  <div className={styles.emptylist}>
    <div className={styles.icon}>
      <SVGSelector id="empty-list" />
    </div>
    <p className={styles.text}>Repository list is empty</p>
  </div>
);
