import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../features/auth/loginSlice";
export const store = configureStore({
  reducer: {
    login: loginSlice,
  },
});
