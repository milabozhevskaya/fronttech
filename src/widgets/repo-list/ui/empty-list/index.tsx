import { SVGSelector } from "@/shared/ui/svg";
import styles from "./styles.module.scss";

const EmptyList = () => (
  <div className={styles["empty-list"]}>
    <div className={styles["empty-list__icon"]}>
      <SVGSelector id="empty-list" />
    </div>
    <p className={styles["empty-list__text"]}>Repository list is empty</p>
  </div>
);

export { EmptyList };
