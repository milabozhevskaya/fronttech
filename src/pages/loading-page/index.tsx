import { SVGSelector } from "@/shared/ui/svg";

import css from "./styles.module.scss";

const LoadingPage = (): JSX.Element => (
  <div className={css["loading-page"]}>
    <div className={css["loading-page__icon"]}>
      <SVGSelector id="loading" />
    </div>
    <div className={css["loading-page__text"]}>Loading...</div>
  </div>
);

export { LoadingPage };
