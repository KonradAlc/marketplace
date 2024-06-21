import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { User } from "src/types/common";

export interface AuthState {
  isAuth?: boolean;
  isLoading?: boolean;
  user?: User | null;
}

const initialState: AuthState = {
  isAuth: false,
  isLoading: false,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ email: string; password: string }>) => {
      state.isLoading = true;
    },
    loginSuccess: (state, action: PayloadAction<{ user: AuthState["user"] }>) => {
      state.isLoading = false;
      state.isAuth = true;
      state.user = action.payload.user;
    },
    loginFailed: (state) => {
      state.isLoading = false;
    },
    logout: (state) => {
      state.isAuth = false;
      state.user = initialState.user;
    },
  },
});

export const { login, loginSuccess, loginFailed, logout } = authSlice.actions;

export default authSlice.reducer;
