import "./App.css";
import { useAuth } from "./context/AuthContext";
import { Layout } from "./components/layout/Layout";
import { Login } from "./components/widgets/Login";

export function App() {
  const authContent = useAuth();

  if (!authContent) {
    throw new Error("");
  }

  const { currentUser } = authContent;

  return (
    <>
      <div>{currentUser ? <Layout /> : <Login />}</div>
    </>
  );
}
