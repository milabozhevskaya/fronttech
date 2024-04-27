import { SVGSelector } from "@/shared/ui/svg";
import { getDisplay } from "./api/getDisplay";
import { useOptionsButtons } from "./hooks/pagination";

import styles from "./styles.module.scss";

const Pagination = ({
  page,
  setPage,
  quantity,
  perPage = 4,
}: {
  page: number;
  setPage: (value: number) => void;
  quantity: number;
  perPage?: number;
}) => {
  const options = useOptionsButtons(page, perPage, quantity, 7);
  return (
    <div className={styles.pagination}>
      <div className={styles.pagination__display}>
        {getDisplay(page, perPage, quantity)}
      </div>
      <div className={styles.pagination__buttons}>
        <button
          className={styles["pagination__button-nav"]}
          onClick={(): void => {
            setPage(page - 1);
          }}
          disabled={page === 1}
        >
          <SVGSelector id="arrow-left" />
        </button>
        <div className={styles.pagination__list}>
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
                    className={styles.pagination__button}
                    onClick={(): void => {
                      setPage(value);
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
                  className={`${styles.pagination__button} ${styles["pagination__button--dots"]}`}
                  onClick={(): void => {}}
                  disabled={disabled}
                >
                  {"..."}
                </button>
              );
            })}
        </div>
        <button
          className={styles["pagination__button-nav"]}
          onClick={(): void => {
            setPage(page + 1);
          }}
          disabled={page === Math.ceil(quantity / perPage)}
        >
          <SVGSelector id="arrow-right" />
        </button>
      </div>
    </div>
  );
};

export { Pagination };
