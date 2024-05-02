import type { Repo } from "@/shared/types";
import type { FC } from "react";

import styles from "./styles.module.scss";

export const Card: FC<Repo> = ({ name, description, html_url: htmlURL }) => (
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
