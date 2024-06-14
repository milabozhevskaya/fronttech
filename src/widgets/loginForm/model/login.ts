import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";

import { auth, db, type Provider } from "@/integrations/firebase/firebase";
import type { AppDispatch } from "@/store";
import { writeUserInDataBase } from "@/store/action-creators/user";
import { type User, setCurrentUser, setIsAuth } from "store/reducers/UserSlice";

const getUserFromDB = async (email: string) => {
  const getUser = query(collection(db, "users"), where("email", "==", email));

  return getDocs(getUser);
};

export const loginWithProvider = async (provider: Provider, dispatch: AppDispatch) => {
  const user = await signInWithPopup(auth, provider);
  const userInfo: User = {
    email: user.user.email || "",
    uid: user.user.uid,
    displayName: user.user.displayName || user.user.email || "",
    photoURL: user.user.photoURL ?? "",
  };

  const userSnapshot = await getUserFromDB(userInfo.email);

  if (userSnapshot.empty) {
    dispatch(writeUserInDataBase({ user: userInfo }));
  }

  dispatch(setCurrentUser(userInfo));
  dispatch(setIsAuth(true));
};

export const loginWithEmailAndPassword = async (
  { email, password }: { email: string; password: string },
  dispatch: AppDispatch,
) => {
  const user = await signInWithEmailAndPassword(auth, email, password);
  const userInfo: User = {
    email: user.user.email || "",
    uid: user.user.uid,
    displayName: user.user.displayName || user.user.email || "",
    photoURL: user.user.photoURL ?? "",
  };

  const userSnapshot = await getUserFromDB(userInfo.email);

  if (userSnapshot.empty) {
    dispatch(writeUserInDataBase({ user: userInfo }));
  }

  dispatch(setCurrentUser(userInfo));
  dispatch(setIsAuth(true));
};

export const signup = async (
  { email, password }: { email: string; password: string },
  dispatch: AppDispatch,
) => {
  const user = await createUserWithEmailAndPassword(auth, email, password);
  const userInfo: User = {
    email: user.user.email || "",
    uid: user.user.uid,
    displayName: user.user.displayName || user.user.email || "",
    photoURL: user.user.photoURL ?? "",
  };
  dispatch(writeUserInDataBase({ user: userInfo }));
  dispatch(setCurrentUser(userInfo));
  dispatch(setIsAuth(true));
};
