import { Card } from "@/entities/card";
import type { FC } from "react";
import type { Repo } from "@/shared/types";
import { Item } from "../item";
import { Pagination } from "../pagination";

import styles from "./styles.module.scss";

type ListProps = {
  reposTotalCount: number;
  page: number;
  userRepos: Array<Repo>;
  onGetRepos: (page: number) => void;
};

export const List: FC<ListProps> = ({
  reposTotalCount,
  page,
  onGetRepos,
  userRepos,
}) => (
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
      <Pagination {...{ reposTotalCount, page, onGetRepos }} />
    </div>
  </div>
);
