import { Layout } from "@/shared/ui/layout";
import { Header } from "@/widgets/header";
import { Page } from "@/pages";
import { useEffect, useState } from "react";
import { useService } from "@/shared/api/useService";
import { services } from "@/shared/api/services";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import type { User } from "@/shared/types";
import { QUERY_KEY_USER } from "@/shared/constants";

import "./styles/styles.scss";

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

  useEffect(() => {
    if (errorUser) {
      toast.error(`Something went wrong: ${errorUser}`, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }, [errorUser]);

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
      <ToastContainer />
    </Layout>
  );
};

export { App };
