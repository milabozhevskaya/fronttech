import { useAuth } from "@/context/AuthContext";

export const Layout = () => {
  const authContent = useAuth();

  if (!authContent) {
    return <div>no user</div>;
  }

  const { logout, currentUser } = authContent;

  return (
    <div>
      <p>{currentUser?.displayName}</p>
      <button onClick={logout}></button>
    </div>
  );
};
