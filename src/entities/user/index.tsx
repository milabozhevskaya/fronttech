import { Avatar } from "@/shared/ui/avatar";
import type { User } from "@/shared/types";
import { SVGSelector } from "@/shared/ui/svg";

import styles from "./styles.module.scss";

const UserInfo = ({
  name,
  login,
  avatar_url: avatarURL,
  html_url: htmlURL,
  followers,
  following,
}: Exclude<User, "publicRepos">) => (
  <>
    <Avatar>
      <img src={avatarURL} alt={name} />
    </Avatar>
    <div className={styles["user-info__desc"]}>
      <h1 className={styles["user-info__name"]}>{name}</h1>
      <a
        href={htmlURL}
        className={styles["user-info__login"]}
        target="_blank"
        rel="noreferrer"
      >
        {login}
      </a>
      <div className={styles["user-info__stats"]}>
        <div className={styles["user-info__stat"]}>
          <div className={styles["user-info__icon"]}>
            <SVGSelector id="followers" />
          </div>
          {followers} followers{" "}
        </div>
        <div className={styles["user-info__stat"]}>
          <div className={styles["user-info__icon"]}>
            <SVGSelector id="following" />
          </div>
          {following} following{" "}
        </div>
      </div>
    </div>
  </>
);

export { UserInfo };
