import { Card } from "@/entities/card";
import { useService } from "@/shared/api/useService";
import { useState } from "react";
import { QUERY_KEY_REPOS, REPOS_PER_PAGE } from "@/shared/constants";
import type { Repo } from "@/shared/types";
import { services } from "@/shared/api/services";
import { Item } from "../item";
import { Pagination } from "../pagination";

import styles from "./styles.module.scss";

type ListProps = {
  queryString: string;
  totalCountOfItems: number;
};

const List = ({ queryString, totalCountOfItems }: ListProps) => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isFetching, error } = useService<Array<Repo>>(
    QUERY_KEY_REPOS,
    services.getRepos,
    { user: queryString, perPage: REPOS_PER_PAGE, page },
    true,
    page.toString()
  );

  return (
    <div className={styles.repoList}>
      <h2 className={styles.repoListTitle}>
        Repositories ({totalCountOfItems})
      </h2>
      {isLoading && isFetching && <span>Loading...</span>}
      {!isLoading && !isFetching && error && <span>{error}</span>}
      {!isLoading && !isFetching && !error && data && data.length > 0 && (
        <ul className={styles.repoListList}>
          {...data.map((repo) => (
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
      )}
      <div className={styles.repoListPagination}>
        <Pagination
          page={page}
          setPage={setPage}
          quantity={totalCountOfItems}
        />
      </div>
    </div>
  );
};

export { List };
