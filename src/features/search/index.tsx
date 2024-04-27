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
}) => <Component onChange={onSearch} {...props} />;

export { Search };
