import { type FormEvent, useState, type MouseEvent } from "react";
import { useAuth } from "@/context/AuthContext";

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

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!userCreds.email.trim() || !userCreds.password.trim()) {
      return;
    }

    try {
      if (createAccount) {
        authContext?.signup(userCreds.email, userCreds.password);
      } else {
        authContext?.loginWithEmailAndPassword(
          userCreds.email,
          userCreds.password
        );
      }
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      }
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
    <form>
      <input
        placeholder="Email"
        value={userCreds.email}
        onChange={updateEmail}
      />
      <input
        placeholder="Password"
        type="password"
        value={userCreds.password}
        onChange={updatePassword}
      />
      <button onClick={handleSubmit}>
        <span>Submit</span>
      </button>
      <button onClick={changeSignUp}>
        <span>{createAccount ? "Sign In" : "Sign Up"}</span>
      </button>
      <button onClick={handleSubmitWithGoogle}>
        <span>Sign In with Google</span>
      </button>
      {errorMessage && <p>{errorMessage}</p>}
    </form>
  );
};
