const Search = ({
	as: Component = "input",
	onSearch,
	...props
}: {
	as:
		| (({
				onChange,
		  }: {
				onChange: (value: string) => void;
		  }) => React.JSX.Element)
		| string;
	onSearch: (value: string) => void;
}): JSX.Element => <Component onChange={onSearch} {...props} />;

export { Search };
