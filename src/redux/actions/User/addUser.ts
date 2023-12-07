import { INewUser } from "../../../type";
import { ADD_USER } from "../../constants";

export const addUser = (user: INewUser) => {
  return {
    type: ADD_USER,
    user,
  };
};
