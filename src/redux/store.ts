import { combineReducers, configureStore } from "@reduxjs/toolkit";
import reducerUser from "./reducers/reducerUser";

const rootReducer = combineReducers({
  user: reducerUser,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
