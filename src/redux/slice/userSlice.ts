import { IUser } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

// Define the initial state outside the slice for reuse
const initialState: IUser = {
  _id: "",
  username: "",
  email: "",
  isAuthenticated: false,
  agence: "",
  token: "",
  profileImage: "",
  profileAgence: ""
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
    updateUser: (state, action) => {
      // return { ...state, ...action.payload }
      state = { ...state, ...action.payload }
      return state
    }
  },
});

export const { createUser, logOutUserAction, updateUser } = userSlice.actions;

export default userSlice.reducer;
