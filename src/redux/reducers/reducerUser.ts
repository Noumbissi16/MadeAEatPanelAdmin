import { IAction, IUser } from "../../type";

const initialState = {
  user: {} as IUser,
};

const reducerUser = (state = initialState, action: IAction) => {
  switch (action.type) {
    case "ADD_USER":
      break;

    default:
      break;
  }
  return state;
};

export default reducerUser;
