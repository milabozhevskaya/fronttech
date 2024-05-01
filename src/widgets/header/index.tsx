import { Search } from "@/features/search";
import { Logo } from "@/shared/ui/logo";
import { SearchInput } from "@/shared/ui/search-input";

export const Header = ({
  search,
  onSearch,
}: {
  search: string;
  onSearch: (value: string) => void;
}) => (
  <>
    <Logo />
    <Search as={SearchInput} search={search} onSearch={onSearch} />
  </>
);
