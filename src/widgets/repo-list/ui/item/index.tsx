import type { FC, PropsWithChildren } from "react";

type ItemProps = { id: string; classNameItem?: string } & PropsWithChildren;

export const Item: FC<ItemProps> = ({ id, classNameItem, children }) => (
  <li className={classNameItem} key={id}>
    {children}
  </li>
);
