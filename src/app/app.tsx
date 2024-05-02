import { Layout, LayoutHeader, LayoutMain } from "@/shared/ui/layout";
import { Header } from "@/widgets/header";
import { Page } from "@/pages";
import { ToastContainer } from "react-toastify";
import { UserContext } from "./context";
import { useGitHubUser } from "../shared/api/useGetDate";

import "react-toastify/dist/ReactToastify.css";

import "./styles/styles.scss";

export const App = () => {
  const gitHubUser = useGitHubUser();

  return (
    <UserContext.Provider value={{ ...gitHubUser }}>
      <Layout>
        <LayoutHeader as={Header} />
        <LayoutMain as={Page} />
        <ToastContainer />
      </Layout>
    </UserContext.Provider>
  );
};
