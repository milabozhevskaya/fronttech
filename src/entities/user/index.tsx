import { Avatar } from "@/shared/ui/avatar";
import type { User } from "@/shared/types";
import { SVGSelector } from "@/shared/ui/svg";

import css from "./styles.module.scss";

const UserInfo = ({
	name,
	login,
	avatarURL,
	htmlURL,
	followers,
	following,
}: Exclude<User, "publicRepos">): JSX.Element => (
	<div className={css["user-info"]}>
		<Avatar>
			<img src={avatarURL} alt={name} />
		</Avatar>
		<div className={css["user-info__desc"]}>
			<h1 className={css["user-info__name"]}>{name}</h1>
			<a href={htmlURL} className={css["user-info__login"]} target="_blank">
				{login}
			</a>
			<div className={css["user-info__stats"]}>
				<div className={css["user-info__stat"]}>
					<div className={css["user-info__icon"]}>
						<SVGSelector id="followers" />
					</div>
					{followers} followers{" "}
				</div>
				<div className={css["user-info__stat"]}>
					<div className={css["user-info__icon"]}>
						<SVGSelector id="following" />
					</div>
					{following} following{" "}
				</div>
			</div>
		</div>
	</div>
);

export { UserInfo };