import { IUser } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the initial state outside the slice for reuse
const initialState: IUser = {
  id: "",
  username: "",
  email: "",
  isAuthenticated: false,
  agency: "",
  token: "",
  profile: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser: (state, action) => {
      return { ...state, ...action.payload, isAuthenticated: true };
    },
    logOutUserAction: () => {
      return initialState;
    },
  },
});

export const { createUser, logOutUserAction } = userSlice.actions;

export default userSlice.reducer;
