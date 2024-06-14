import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

import { logout, writeUserInDataBase } from "../action-creators/user";

export type User = {
  email: string;
  displayName: string;
  photoURL: string;
  uid: string;
};
export interface UserState {
  currentUser: User | null;
  isAuth: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  currentUser: null,
  isAuth: false,
  loading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<User | null>) => {
      state.currentUser = action.payload;
    },
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(writeUserInDataBase.fulfilled.type, (state) => {
      state.loading = false;
    });
    builder.addCase(writeUserInDataBase.pending.type, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      writeUserInDataBase.rejected.type,
      (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.error = action.payload;
      },
    );

    builder.addCase(logout.fulfilled.type, (state) => {
      state.loading = false;
    });
    builder.addCase(logout.pending.type, (state) => {
      state.loading = true;
      state.isAuth = false;
      state.error = null;
      state.currentUser = null;
    });
    builder.addCase(logout.rejected.type, (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const userReducer = userSlice.reducer;
export const { setCurrentUser, setIsAuth } = userSlice.actions;
