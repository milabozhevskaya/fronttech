import css from "./styles.module.scss";

const Avatar = ({ children }: { children: React.ReactNode }): JSX.Element => (
	<div className={css.avatar}>{children}</div>
);

export { Avatar };
