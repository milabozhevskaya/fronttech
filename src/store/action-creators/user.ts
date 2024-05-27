import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../../../firebase";

export const signup = createAsyncThunk(
  "user/signup",
  async (
    { email, password }: { email: string; password: string },
    thunkAPI
  ) => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);

      return user.user;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error signup user");
    }
  }
);

export const loginWithEmailAndPassword = createAsyncThunk(
  "user/login",
  async (
    { email, password }: { email: string; password: string },
    thunkAPI
  ) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);

      return user.user;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error login user");
    }
  }
);

export const loginWithGoogle = createAsyncThunk(
  "user/loginWithGoogle",
  async (_, thunkAPI) => {
    try {
      const provider = new GoogleAuthProvider();
      const user = await signInWithPopup(auth, provider);

      return user.user;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error login user");
    }
  }
);

export const logout = createAsyncThunk("user/logout", async (_, thunkAPI) => {
  try {
    await signOut(auth);

    return true;
  } catch (error) {
    return thunkAPI.rejectWithValue("Error logout user");
  }
});
