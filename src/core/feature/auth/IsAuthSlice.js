import { createSlice } from "@reduxjs/toolkit";
import { isAuthenticated } from "../../utils/auth/IsAuthenticated";

const IsAuthSlice = createSlice({
  name: "isAuth",

  initialState: {
    isAuth: isAuthenticated(),
  },

  reducers: {
    login: (state) => {
      state.isAuth = true;
    },

    logout: (state) => {
      localStorage.removeItem("token");
      state.isAuth = false;
    },
  },
});

export const { login, logout } = IsAuthSlice.actions;
export default IsAuthSlice.reducer;