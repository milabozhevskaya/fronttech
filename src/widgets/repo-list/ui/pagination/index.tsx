import { SVGSelector } from "@/shared/ui/svg";
import { useState } from "react";
import { getDisplay } from "./api/getDisplay";
import { useOptionsButtons } from "./hooks/pagination";

import styles from "./styles.module.scss";

const Pagination = ({
  reposTotalCount,
  onGetRepos,
  perPage = 4,
}: {
  reposTotalCount: number;
  onGetRepos: (page: number) => void;
  perPage?: number;
}) => {
  const [page, setPage] = useState(1);
  const options = useOptionsButtons(page, perPage, reposTotalCount, 7);
  return (
    <div className={styles.pagination}>
      <div className={styles.paginationDisplay}>
        {getDisplay(page, perPage, reposTotalCount)}
      </div>
      <div className={styles.paginationButtons}>
        <button
          className={styles.paginationButtonNav}
          onClick={(): void => {
            setPage(page - 1);
            onGetRepos(page - 1);
          }}
          disabled={page === 1}
        >
          <SVGSelector id="arrow-left" />
        </button>
        <div className={styles.paginationList}>
          {...options
            .filter(
              (cur, index) =>
                !cur.hidden ||
                (index > 0 && !options[index - 1]?.hidden) ||
                index === 0
            )
            .map(({ disabled, value, hidden }) => {
              if (!hidden) {
                return (
                  <button
                    key={value}
                    className={styles.paginationButton}
                    onClick={(): void => {
                      setPage(value);
                      onGetRepos(value);
                    }}
                    disabled={disabled}
                  >
                    {value}
                  </button>
                );
              }
              return (
                <button
                  key={value}
                  className={`${styles.paginationButton} ${styles.paginationButton_dots}`}
                  onClick={(): void => {}}
                  disabled={disabled}
                >
                  {"..."}
                </button>
              );
            })}
        </div>
        <button
          className={styles.paginationButtonNav}
          onClick={(): void => {
            setPage(page + 1);
            onGetRepos(page + 1);
          }}
          disabled={page === Math.ceil(reposTotalCount / perPage)}
        >
          <SVGSelector id="arrow-right" />
        </button>
      </div>
    </div>
  );
};

export { Pagination };
