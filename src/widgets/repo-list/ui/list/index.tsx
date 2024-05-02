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
  <div className={styles.repolist}>
    <h2 className={styles.title}>Repositories ({reposTotalCount})</h2>
    <ul className={styles.list}>
      {...userRepos.map((repo) => (
        <Item
          key={repo.id}
          id={repo.id + repo.name}
          classNameItem={styles.item}
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
    <div className={styles.pagination}>
      <Pagination {...{ reposTotalCount, page, onGetRepos }} />
    </div>
  </div>
);
