const Search = ({
  as: Component = "input",
  search,
  onSearch,
}: {
  as:
    | (({
        search,
        onChange,
      }: {
        search: string;
        onChange: (value: string) => void;
      }) => JSX.Element)
    | string;
  search: string;
  onSearch: (value: string) => void;
}) => <Component search={search} onChange={onSearch} />;

export { Search };
