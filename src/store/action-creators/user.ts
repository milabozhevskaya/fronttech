import { createAsyncThunk } from "@reduxjs/toolkit";
import { signOut } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

import { auth, db } from "../../integrations/firebase/firebase";
import type { User } from "../reducers/UserSlice";

export const writeUserInDataBase = createAsyncThunk<
  void,
  { user: User },
  { rejectValue: string }
>("user/writeUserInDataBase", async ({ user }, { rejectWithValue }) => {
  try {
    await setDoc(doc(db, "users", user.uid), user);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return rejectWithValue(`Error width adding user in database: ${error.message}`);
    }

    return rejectWithValue("Unknown error occurred in writeUserInDataBase");
  }
});

export const logout = createAsyncThunk("user/logout", async (_, thunkAPI) => {
  try {
    await signOut(auth);

    return true;
  } catch (error) {
    return thunkAPI.rejectWithValue("Error logout user");
  }
});
