import { SVGSelector } from "@/shared/ui/svg";
import type { FC } from "react";
import { getDisplay } from "./api/getDisplay";
import { useOptionsButtons } from "./hooks/useOptionsButtons";

import styles from "./styles.module.scss";

type PaginationProps = {
  reposTotalCount: number;
  page: number;
  onGetRepos: (page: number) => void;
  perPage?: number;
};

export const Pagination: FC<PaginationProps> = ({
  reposTotalCount,
  page,
  onGetRepos,
  perPage = 4,
}) => {
  const options = useOptionsButtons(page, perPage, reposTotalCount, 7);

  const scrollOnPrevPage = () => {
    onGetRepos(page - 1);
  };

  const scrollOnNextPage = () => {
    onGetRepos(page + 1);
  };

  const changePage = (value: number) => {
    onGetRepos(value);
  };

  return (
    <div className={styles.pagination}>
      <div className={styles.paginationDisplay}>
        {getDisplay(page, perPage, reposTotalCount)}
      </div>
      <div className={styles.paginationButtons}>
        <button
          className={styles.paginationButtonNav}
          onClick={scrollOnPrevPage}
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
                    onClick={() => {
                      changePage(value);
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
                  className={`${styles.paginationButton} ${styles.paginationButtonDots}`}
                  disabled={disabled}
                >
                  {"..."}
                </button>
              );
            })}
        </div>
        <button
          className={`${styles.paginationButtonNav} ${styles.paginationButtonNavRight}`}
          onClick={scrollOnNextPage}
          disabled={page === Math.ceil(reposTotalCount / perPage)}
        >
          <SVGSelector id="arrow-left" />
        </button>
      </div>
    </div>
  );
};
