import type { RepoListProps } from "@/shared/types";
import { List } from "./ui/list";
import { EmptyList } from "./ui/empty-list";

const RepoList = ({ login, quantity }: RepoListProps): JSX.Element => (
	<>
		{!quantity && <EmptyList />}
		{!!quantity && <List login={login} quantity={quantity} />}
	</>
);

export { RepoList };
