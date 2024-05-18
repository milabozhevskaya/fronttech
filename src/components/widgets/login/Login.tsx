import { type FormEvent, useState, type MouseEvent } from "react";
import { useAuth } from "@/context/AuthContext";

import styles from "./styles.module.scss";

export const Login = () => {
  const [createAccount, setCreateAccount] = useState(false);
  const [userCreds, setUserCreds] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");

  const authContext = useAuth();

  const updateEmail = (e: FormEvent<HTMLInputElement>) => {
    setUserCreds({ ...userCreds, email: e.currentTarget.value });
  };

  const updatePassword = (e: FormEvent<HTMLInputElement>) => {
    setUserCreds({ ...userCreds, password: e.currentTarget.value });
  };

  const showErrorMessage = (message: string) => {
    setErrorMessage(message);
    const timer = setTimeout(() => {
      setErrorMessage("");
      clearTimeout(timer);
    }, 2000);
  };

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!userCreds.email.trim() || !userCreds.password.trim()) {
      return;
    }

    if (createAccount) {
      authContext
        ?.signup(userCreds.email, userCreds.password)
        .catch((error) => {
          showErrorMessage(error.message);
        });
    } else {
      authContext
        ?.loginWithEmailAndPassword(userCreds.email, userCreds.password)
        .catch((error) => {
          showErrorMessage(error.message);
        });
    }
  };

  const handleSubmitWithGoogle = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setCreateAccount(false);
    setUserCreds({ email: "", password: "" });

    authContext?.loginWithGoogle();
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
      {errorMessage && <p className={styles.error}>{errorMessage}</p>}
    </form>
  );
};
