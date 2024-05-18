import { useAuth } from "@/context/AuthContext";

import styles from "./styles.module.scss";

export const Layout = () => {
  const authContent = useAuth();

  if (!authContent) {
    return <div>no user</div>;
  }

  const { logout, currentUser } = authContent;

  return (
    <div className={styles.preview}>
      <p>
        Hello,{" "}
        {currentUser && currentUser.displayName
          ? currentUser.displayName
          : "user"}
        !
      </p>
      <p>You are logged with {currentUser?.email}</p>
      <button onClick={logout} className={styles.button}>
        Sign Out
      </button>
    </div>
  );
};
