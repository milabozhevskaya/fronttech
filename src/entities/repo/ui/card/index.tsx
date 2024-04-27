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
    <p>{description}</p>
  </div>
);

export { Card };
