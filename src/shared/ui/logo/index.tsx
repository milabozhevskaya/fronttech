import { SVGSelector } from "../svg";

const Logo = (): JSX.Element => (
  <a
    href="https://www.github.com"
    title="logo"
    target="_blank"
    rel="noreferrer"
  >
    <SVGSelector id="logo" />
  </a>
);

export { Logo };
