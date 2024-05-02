import { Avatar } from "@/shared/ui/avatar";
import { SVGSelector } from "@/shared/ui/svg";
import type { FC } from "react";

import styles from "./styles.module.scss";

type UserInfoProps = {
  name: string;
  login: string;
  avatar_url: string;
  html_url: string;
  followers: number;
  following: number;
};

export const UserInfo: FC<UserInfoProps> = ({
  name,
  login,
  avatar_url: avatarURL,
  html_url: htmlURL,
  followers,
  following,
}) => (
  <>
    <Avatar src={avatarURL} alt={name} />
    <div className={styles.desc}>
      <h1 className={styles.name}>{name}</h1>
      <a
        href={htmlURL}
        className={styles.login}
        target="_blank"
        rel="noreferrer"
      >
        {login}
      </a>
      <div className={styles.stats}>
        <div className={styles.stat}>
          <div className={styles.icon}>
            <SVGSelector id="followers" />
          </div>
          {followers} followers{" "}
        </div>
        <div className={styles.stat}>
          <div className={styles.icon}>
            <SVGSelector id="following" />
          </div>
          {following} following{" "}
        </div>
      </div>
    </div>
  </>
);
