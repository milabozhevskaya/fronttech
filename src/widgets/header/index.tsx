import { Search } from "@/features/search";
import { Logo } from "@/shared/ui/logo";
import { SearchInput } from "@/shared/ui/search-input";

const Header = ({ onSearch }: { onSearch: (value: string) => void }) => (
  <>
    <Logo />
    <Search as={SearchInput} onSearch={onSearch} />
  </>
);

export { Header };
