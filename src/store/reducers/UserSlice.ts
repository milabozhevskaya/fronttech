import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { User } from "firebase/auth";
import {
  loginWithEmailAndPassword,
  loginWithGoogle,
  logout,
  signup,
} from "../action-creators/user";

export interface UserState {
  currentUser: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  currentUser: null,
  loading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      signup.fulfilled.type,
      (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.currentUser = action.payload;
      }
    );
    builder.addCase(signup.pending.type, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      signup.rejected.type,
      (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.error = action.payload;
      }
    );

    builder.addCase(
      loginWithEmailAndPassword.fulfilled.type,
      (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.currentUser = action.payload;
      }
    );
    builder.addCase(loginWithEmailAndPassword.pending.type, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      loginWithEmailAndPassword.rejected.type,
      (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.error = action.payload;
      }
    );

    builder.addCase(
      loginWithGoogle.fulfilled.type,
      (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.currentUser = action.payload;
      }
    );
    builder.addCase(loginWithGoogle.pending.type, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      loginWithGoogle.rejected.type,
      (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.error = action.payload;
      }
    );

    builder.addCase(logout.fulfilled.type, (state) => {
      state.loading = false;
    });
    builder.addCase(logout.pending.type, (state) => {
      state.loading = true;
      state.error = null;
      state.currentUser = null;
    });
    builder.addCase(
      logout.rejected.type,
      (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.error = action.payload;
      }
    );
  },
});

export const userReducer = userSlice.reducer;
