import type { FC } from "react";
import styles from "./styles.module.scss";

type AvatarProps = {
  src: string;
  alt: string;
};

export const Avatar: FC<AvatarProps> = ({ src, alt }) => (
  <div className={styles.avatar}>
    <img src={src} alt={alt} />
  </div>
);
