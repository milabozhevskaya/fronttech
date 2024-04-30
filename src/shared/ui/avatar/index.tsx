import styles from "./styles.module.scss";

type AvatarProps = {
  src: string;
  alt: string;
};

const Avatar = ({ src, alt }: AvatarProps) => (
  <div className={styles.avatar}>
    <img src={src} alt={alt} />
  </div>
);

export { Avatar };
