import { combineReducers, configureStore } from "@reduxjs/toolkit";
import reducerUser from "./reducers/reducerUser";
import reducerRestaurant from "./reducers/restaurantReducer";

const rootReducer = combineReducers({
  user: reducerUser,
  restaurants: reducerRestaurant,
});

const store = configureStore({
  reducer: rootReducer,
});

export type rootState = ReturnType<typeof rootReducer>;

export default store;
