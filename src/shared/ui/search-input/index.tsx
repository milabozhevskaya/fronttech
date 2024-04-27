import type { ChangeEvent } from "react";

import styles from "./styles.module.scss";
import { SVGSelector } from "../svg";

const SearchInput = ({
  onChange,
  ...props
}: {
  onChange: (value: string) => void;
}) => (
  <div className={styles.search}>
    <div className={styles.search__icon}>
      <SVGSelector id="search" />
    </div>
    <input
      className={styles.search__input}
      type="text"
      autoFocus={true}
      placeholder="Enter GitHub username"
      {...props}
      onChange={(e: ChangeEvent<HTMLInputElement>): void => {
        onChange(e.target.value);
      }}
    />
  </div>
);

export { SearchInput };
