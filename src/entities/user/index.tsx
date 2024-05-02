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
    <div className={styles.userInfoDesc}>
      <h1 className={styles.userInfoName}>{name}</h1>
      <a
        href={htmlURL}
        className={styles.userInfoLogin}
        target="_blank"
        rel="noreferrer"
      >
        {login}
      </a>
      <div className={styles.userInfoStats}>
        <div className={styles.userInfoStat}>
          <div className={styles.userInfoIcon}>
            <SVGSelector id="followers" />
          </div>
          {followers} followers{" "}
        </div>
        <div className={styles.userInfoStat}>
          <div className={styles.userInfoIcon}>
            <SVGSelector id="following" />
          </div>
          {following} following{" "}
        </div>
      </div>
    </div>
  </>
);
