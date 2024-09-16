import { IUser } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    id: "",
    username: "",
    email: "",
    isAuthenticated: false,
    agency: "",
    token: "",
  } as IUser,
  reducers: {
    createUser: (state, payload) => {
      state.agency = payload.payload.agency;
      state.email = payload.payload.email;
      state.username = payload.payload.username;
      state.token = payload.payload.token;
      state.isAuthenticated = true;
    },
  },
});

export const { createUser } = userSlice.actions;

export default userSlice.reducer;
