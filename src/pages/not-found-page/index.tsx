import { SVGSelector } from "@/shared/ui/svg";

import css from "./styles.module.scss";

const NotFoundPage = (): JSX.Element => (
  <div className={css["not-found-page"]}>
    <div className={css["not-found-page__icon"]}>
      <SVGSelector id="not-found" />
    </div>
    <div className={css["not-found-page__text"]}>User not found</div>
  </div>
);

export { NotFoundPage };
