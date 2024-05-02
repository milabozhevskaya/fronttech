import type { FC } from "react";

type SearchProps = {
  asComponent:
    | FC<{
        search: string;
        onChange: (value: string) => void;
      }>
    | string;
  search: string;
  onSearch: (value: string) => void;
};

export const Search: FC<SearchProps> = ({
  asComponent: Component = "input",
  search,
  onSearch,
}) => <Component search={search} onChange={onSearch} />;
