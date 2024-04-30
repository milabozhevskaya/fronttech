import { SVGSelector } from "@/shared/ui/svg";
import styles from "./styles.module.scss";

const EmptyList = () => (
  <div className={styles.emptyList}>
    <div className={styles.emptyListIcon}>
      <SVGSelector id="empty-list" />
    </div>
    <p className={styles.emptyListText}>Repository list is empty</p>
  </div>
);

export { EmptyList };
