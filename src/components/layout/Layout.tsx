import { useAuth } from "@/context/AuthContext";

export const Layout = () => {
  const authContent = useAuth();

  if (!authContent) {
    return <div>no user</div>;
  }

  const { logout, currentUser } = authContent;

  return (
    <div>
      <p>
        Hello,{" "}
        {currentUser && currentUser.displayName
          ? currentUser.displayName
          : "user"}
        !
      </p>
      <p>You are logged with {currentUser?.email}</p>
      <button onClick={logout}>Sign Out</button>
    </div>
  );
};
