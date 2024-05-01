import { Card } from "@/entities/card";
import type { Repo } from "@/shared/types";
import { Item } from "../item";
import { Pagination } from "../pagination";

import styles from "./styles.module.scss";

type ListProps = {
  reposTotalCount: number;
  userRepos: Array<Repo>;
  onGetRepos: (page: number) => void;
};

export const List = ({ reposTotalCount, onGetRepos, userRepos }: ListProps) => (
  <div className={styles.repoList}>
    <h2 className={styles.repoListTitle}>Repositories ({reposTotalCount})</h2>
    <ul className={styles.repoListList}>
      {...userRepos.map((repo) => (
        <Item
          key={repo.id}
          id={repo.id + repo.name}
          classNameItem={styles.repoListItem}
        >
          <Card
            name={repo.name}
            description={repo.description}
            id={repo.id}
            html_url={repo.html_url}
          />
        </Item>
      ))}
    </ul>
    <div className={styles.repoListPagination}>
      <Pagination {...{ reposTotalCount, onGetRepos }} />
    </div>
  </div>
);
