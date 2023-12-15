import { IAction } from "../../types";

const initialState = {
  // user: {} as IUser,
  user: {
    id: 1,
    username: "Ervane Kuitche",
    email: "ervanekuitche@gmail.com",
    password: "123456789",
    isAuthenticated: true,
    img: "/assets/images/bafoussam.jpg",
  },
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
