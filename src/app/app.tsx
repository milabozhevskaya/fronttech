import { Layout } from "@/shared/ui/layout";
import { Header } from "@/widgets/header";
import { Page } from "@/pages";
import { ToastContainer } from "react-toastify";
import { UserContext } from "./context";
import { useGitHubUser } from "../shared/api/useGetDate";

import "react-toastify/dist/ReactToastify.css";

import "./styles/styles.scss";

const App = () => {
  const gitHubUser = useGitHubUser();

  return (
    <UserContext.Provider value={{ ...gitHubUser }}>
      <Layout>
        <Layout.Header as={Header} />
        <Layout.Main as={Page} />
        <ToastContainer />
      </Layout>
    </UserContext.Provider>
  );
};

export { App };
