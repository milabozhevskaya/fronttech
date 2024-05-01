import type { PropsWithChildren } from "react";

export const Item = ({
  id,
  classNameItem,
  children,
}: { id: string; classNameItem?: string } & PropsWithChildren) => (
  <li className={classNameItem} key={id}>
    {children}
  </li>
);
