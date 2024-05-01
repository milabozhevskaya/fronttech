import styles from "./styles.module.scss";

type AvatarProps = {
  src: string;
  alt: string;
};

export const Avatar = ({ src, alt }: AvatarProps) => (
  <div className={styles.avatar}>
    <img src={src} alt={alt} />
  </div>
);
