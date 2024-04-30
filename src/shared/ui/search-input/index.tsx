import type { ChangeEvent } from "react";

import styles from "./styles.module.scss";
import { SVGSelector } from "../svg";

const SearchInput = ({ onChange }: { onChange: (value: string) => void }) => {
  const onInput = (e: ChangeEvent<HTMLInputElement>): void => {
    onChange(e.currentTarget.value);
  };
  return (
    <div className={styles.search}>
      <div className={styles.searchIcon}>
        <SVGSelector id="search" />
      </div>
      <input
        className={styles.searchInput}
        type="text"
        autoFocus={true}
        placeholder="Enter GitHub username"
        onChange={onInput}
      />
    </div>
  );
};

export { SearchInput };
