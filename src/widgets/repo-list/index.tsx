import { List } from "./ui/list";
import { EmptyList } from "./ui/empty-list";

type RepoListProps = {
  userQuery: string;
  totalCountOfRepos: number;
};

const RepoList = ({ userQuery, totalCountOfRepos }: RepoListProps) => (
  <>
    {!totalCountOfRepos && <EmptyList />}
    {!!totalCountOfRepos && (
      <List queryString={userQuery} totalCountOfItems={totalCountOfRepos} />
    )}
  </>
);

export { RepoList };
