import { Layout } from "@/shared/ui/layout";
import { Header } from "@/widgets/header";
import { Page } from "@/pages";
import { useState } from "react";
import { useService } from "@/shared/api/useService";
import { services } from "@/shared/api/services";

import type { User } from "@/shared/types";
import { QUERY_KEY_USER } from "@/shared/constants";

const App = () => {
  const [userQuery, setUserQuery] = useState("");
  const {
    data: user,
    isLoading: isLoadingUser,
    isFetching: isFetchingUser,
    error: errorUser,
  } = useService<User>(
    QUERY_KEY_USER,
    services.getUser,
    { user: userQuery },
    !!userQuery,
    userQuery
  );
  return (
    <Layout>
      <Layout.Header as={Header} onSearch={setUserQuery} />
      <Layout.Main
        as={Page}
        user={user}
        userQuery={userQuery}
        loading={isLoadingUser}
        fetching={isFetchingUser}
        notFound={!!errorUser}
      />
    </Layout>
  );
};

export { App };
