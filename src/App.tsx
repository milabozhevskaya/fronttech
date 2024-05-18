import { useAuth } from "./context/AuthContext";
import { Layout } from "./components/layout/Layout";
import { Login } from "./components/widgets/login/Login";

export function App() {
  const authContent = useAuth();

  if (!authContent) {
    throw new Error("");
  }

  const { currentUser } = authContent;

  return (
    <>
      <div className="container">{currentUser ? <Layout /> : <Login />}</div>
    </>
  );
}
