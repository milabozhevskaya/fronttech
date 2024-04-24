import type { Repo } from "@/shared/types";

import css from "./styles.module.scss";

const Card = ({ name, description, htmlURL }: Repo): JSX.Element => (
	<div className={css.card}>
		<a href={htmlURL} className={css.card__name} target="_blank">
			{name}
		</a>
		<p>{description}</p>
	</div>
);

export { Card };
