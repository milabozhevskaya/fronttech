import type { PropsWithChildren } from "react";

const Item = ({
	id,
	classNameItem,
	children,
}: { id: string; classNameItem?: string } & PropsWithChildren): JSX.Element => (
	<li className={classNameItem} key={id}>
		{children}
	</li>
);

export { Item };
