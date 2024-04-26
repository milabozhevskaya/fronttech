import type { RepoListProps } from "@/shared/types";
import { List } from "./ui/list";
import { EmptyList } from "./ui/empty-list";

const RepoList = ({ userQuery, quantity }: RepoListProps) => (
  <>
    {!quantity && <EmptyList />}
    {!!quantity && <List userQuery={userQuery} quantity={quantity} />}
  </>
);

export { RepoList };
