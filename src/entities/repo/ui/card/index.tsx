import type { Repo } from "@/shared/types";

import styles from "./styles.module.scss";

const Card = ({ name, description, htmlURL }: Repo) => (
  <div className={styles.card}>
    <a
      href={htmlURL}
      className={styles.card__name}
      target="_blank"
      rel="noreferrer"
    >
      {name}
    </a>
    <p className={styles.card__description}>{description}</p>
  </div>
);

export { Card };
