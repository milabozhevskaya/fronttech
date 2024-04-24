import { SVGSelector } from "@/shared/ui/svg";
import css from "./styles.module.scss";

const EmptyList = (): JSX.Element => (
	<div className={css["empty-list"]}>
		<div className={css["empty-list__icon"]}>
			<SVGSelector id="empty-list" />
		</div>
		<p className={css["empty-list__text"]}>Repository list is empty</p>
	</div>
);

export { EmptyList };
