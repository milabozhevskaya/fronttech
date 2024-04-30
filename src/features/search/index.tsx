const Search = ({
  as: Component = "input",
  onSearch,
}: {
  as:
    | (({ onChange }: { onChange: (value: string) => void }) => JSX.Element)
    | string;
  onSearch: (value: string) => void;
}) => <Component onChange={onSearch} />;

export { Search };
