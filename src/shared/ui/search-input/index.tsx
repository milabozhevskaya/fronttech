import type { ChangeEvent } from "react";

import styles from "./styles.module.scss";
import { SVGSelector } from "../svg";

export const SearchInput = ({
  search,
  onChange,
}: {
  search: string;
  onChange: (value: string) => void;
}) => {
  const onInput = (e: ChangeEvent<HTMLInputElement>): void => {
    onChange(e.currentTarget.value);
  };
  return (
    <div className={styles.search}>
      <div className={styles.searchIcon}>
        <SVGSelector id="search" />
      </div>
      <input
        value={search}
        className={styles.searchInput}
        type="text"
        autoFocus={true}
        placeholder="Enter GitHub username"
        onChange={onInput}
      />
    </div>
  );
};
