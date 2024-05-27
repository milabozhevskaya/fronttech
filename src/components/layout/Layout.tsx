import { logout } from "@/store/action-creators/user";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";

import styles from "./styles.module.scss";

export const Layout = () => {
  const { currentUser } = useAppSelector((state) => state.userReducer);

  const dispatch = useAppDispatch();

  const logOut = () => {
    dispatch(logout());
  };

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
      <button onClick={logOut} className={styles.button}>
        Sign Out
      </button>
    </div>
  );
};
