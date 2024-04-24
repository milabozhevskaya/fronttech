import { createContext, useContext } from "react";

import type { UserContextType, User } from "@/shared/types";

function createUserContext<T>(): React.Context<UserContextType<T> | null> {
  return createContext<UserContextType<T> | null>(null);
}

const UserContext = createUserContext<User>();

const useUserContext = (): UserContextType<User> => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("Components must be used within a <Layout/>");
  }
  return context;
};

export { UserContext, useUserContext };
