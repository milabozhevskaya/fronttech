import type { FC } from "react";
import { Search } from "@/features/search";
import { Logo } from "@/shared/ui/logo";
import { SearchInput } from "@/shared/ui/search-input";

type HeaderProps = {
  search: string;
  onSearch: (value: string) => void;
};

export const Header: FC<HeaderProps> = ({ search, onSearch }) => (
  <>
    <Logo />
    <Search asComponent={SearchInput} search={search} onSearch={onSearch} />
  </>
);
