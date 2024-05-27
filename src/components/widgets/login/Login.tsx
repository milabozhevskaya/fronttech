import { type FormEvent, useState, type MouseEvent } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import {
  signup,
  loginWithEmailAndPassword,
  loginWithGoogle,
} from "@/store/action-creators/user";

import styles from "./styles.module.scss";

export const Login = () => {
  const [createAccount, setCreateAccount] = useState(false);
  const [userCreds, setUserCreds] = useState({ email: "", password: "" });

  const dispatch = useAppDispatch();

  const { loading, error } = useAppSelector((state) => state.userReducer);

  const updateEmail = (e: FormEvent<HTMLInputElement>) => {
    setUserCreds({ ...userCreds, email: e.currentTarget.value });
  };

  const updatePassword = (e: FormEvent<HTMLInputElement>) => {
    setUserCreds({ ...userCreds, password: e.currentTarget.value });
  };

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!userCreds.email.trim() || !userCreds.password.trim()) {
      return;
    }

    if (createAccount) {
      dispatch(
        signup({ email: userCreds.email, password: userCreds.password })
      );
    } else {
      dispatch(
        loginWithEmailAndPassword({
          email: userCreds.email,
          password: userCreds.password,
        })
      );
    }
  };

  const handleSubmitWithGoogle = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setCreateAccount(false);
    setUserCreds({ email: "", password: "" });

    dispatch(loginWithGoogle());
  };

  const changeSignUp = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setCreateAccount((prev) => !prev);
  };

  return (
    <form className={styles.login}>
      <input
        placeholder="Email"
        type="email"
        value={userCreds.email}
        onChange={updateEmail}
        className={styles.input}
      />
      <input
        placeholder="Password"
        type="password"
        value={userCreds.password}
        onChange={updatePassword}
        className={styles.input}
      />
      <button onClick={handleSubmit} className={styles.submit} type="submit">
        <span>{createAccount ? "Sign Up" : "Sign In"}</span>
      </button>
      <button onClick={changeSignUp} className={styles.change}>
        <span>
          {createAccount ? "Already have an account" : "Registration"}
        </span>
      </button>
      <button onClick={handleSubmitWithGoogle} className={styles.google}>
        <span>Sign In with Google</span>
      </button>
      {error && <p className={styles.error}>{error}</p>}
      {loading && <p className={styles.loading}>Loading...</p>}
    </form>
  );
};
