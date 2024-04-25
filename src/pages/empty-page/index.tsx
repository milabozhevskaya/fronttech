import { SVGSelector } from "@/shared/ui/svg";

import css from "./styles.module.scss";

const EmptyPage = (): JSX.Element => (
  <div className={css["empty-page"]}>
    <div className={css["empty-page__icon"]}>
      <SVGSelector id="search" />
    </div>
    <div className={css["empty-page__text"]}>
      Start with searching a GitHub user
    </div>
  </div>
);

export { EmptyPage };
