import type { ChangeEvent, FC } from "react";

import styles from "./styles.module.scss";
import { SVGSelector } from "../svg";

type SearchInputProps = {
  search: string;
  onChange: (value: string) => void;
};

export const SearchInput: FC<SearchInputProps> = ({ search, onChange }) => {
  const onInput = (e: ChangeEvent<HTMLInputElement>): void => {
    onChange(e.currentTarget.value);
  };

  return (
    <div className={styles.search}>
      <div className={styles.icon}>
        <SVGSelector id="search" />
      </div>
      <input
        value={search}
        className={styles.input}
        type="text"
        autoFocus={true}
        placeholder="Enter GitHub username"
        onChange={onInput}
      />
    </div>
  );
};
