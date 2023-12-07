import { combineReducers, configureStore } from "@reduxjs/toolkit";
import reducerUser from "./reducers/reducerUser";

const rootReducer = combineReducers({
  user: reducerUser,
});

const store = configureStore({
  reducer: rootReducer,
});

export type rootState = ReturnType<typeof rootReducer>;

export default store;
