import type { Repo } from "@/shared/types";

import styles from "./styles.module.scss";

const Card = ({ name, description, html_url: htmlURL }: Repo) => (
  <div className={styles.card}>
    <a
      href={htmlURL}
      className={styles.cardName}
      target="_blank"
      rel="noreferrer"
    >
      {name}
    </a>
    <p className={styles.cardDescription}>{description}</p>
  </div>
);

export { Card };
