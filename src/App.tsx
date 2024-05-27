import { Layout } from "./components/layout/Layout";
import { Login } from "./components/widgets/login/Login";
import { useAppSelector } from "./hooks/redux";

export function App() {
  const { currentUser } = useAppSelector((state) => state.userReducer);

  return (
    <>
      <div className="container">{currentUser ? <Layout /> : <Login />}</div>
    </>
  );
}
