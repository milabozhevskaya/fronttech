import type { FC } from "react";

import { useAppSelector } from "hooks/redux";
import { LoginPage, UserPage } from "pages";

export const Route: FC = () => {
  const { isAuth } = useAppSelector((state) => state.userReducer);

  return <>{isAuth ? <UserPage /> : <LoginPage />}</>;
};
