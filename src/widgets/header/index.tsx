import { Search } from "@/features/search";
import type { HeaderProps } from "@/shared/types";
import { Logo } from "@/shared/ui/logo";
import { SearchInput } from "@/shared/ui/search-input";

const Header = ({ onSearch }: HeaderProps): JSX.Element => (
  <>
    <Logo />
    <Search as={SearchInput} onSearch={onSearch} />
  </>
);

export { Header };
