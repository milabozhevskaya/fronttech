import { Card } from "@/entities/repo/intex";
import { useService } from "@/shared/api/useService";
import { useState } from "react";
import { QUERY_KEY_REPOS, REPOS_PER_PAGE } from "@/shared/constants";
import type { Repo } from "@/shared/types";
import { services } from "@/shared/api/services";
import { Item } from "../item";
import { Pagination } from "../pagination";

import styles from "./styles.module.scss";

const List = ({
  userQuery,
  quantity,
}: {
  userQuery: string;
  quantity: number;
}) => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isFetching, error } = useService<Array<Repo>>(
    QUERY_KEY_REPOS,
    services.getRepos,
    { user: userQuery, perPage: REPOS_PER_PAGE, page },
    true,
    page.toString()
  );

  return (
    <div className={styles["repo-list"]}>
      <h2 className={styles["repo-list__title"]}>Repositories ({quantity})</h2>
      {isLoading && isFetching && <span>Loading...</span>}
      {!isLoading && !isFetching && error && <span>{error.message}</span>}
      {!isLoading && !isFetching && !error && data && data.length > 0 && (
        <ul className={styles["repo-list__list"]}>
          {...data.map((repo) => (
            <Item
              key={repo.id}
              id={repo.id + repo.name}
              classNameItem={styles["repo-list__item"]}
            >
              <Card
                name={repo.name}
                description={repo.description}
                id={repo.id}
                htmlURL={repo.htmlURL}
              />
            </Item>
          ))}
        </ul>
      )}
      <div className={styles["repo-list__pagination"]}>
        <Pagination page={page} setPage={setPage} quantity={quantity} />
      </div>
    </div>
  );
};

export { List };
