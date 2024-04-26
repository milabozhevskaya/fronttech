import type { ChangeEvent } from "react";

import css from "./styles.module.scss";
import { SVGSelector } from "../svg";

const SearchInput = ({
  onChange,
  ...props
}: {
  onChange: (value: string) => void;
}): JSX.Element => (
  <div className={css.search}>
    <div className={css.search__icon}>
      <SVGSelector id="search" />
    </div>
    <input
      className={css.search__input}
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
