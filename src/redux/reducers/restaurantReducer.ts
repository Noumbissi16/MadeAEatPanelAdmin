import { restaurantData } from "../../../public/restaurantData";
import { IAction } from "../../type";

const initialState = restaurantData;

const reducerRestaurant = (state = initialState, action: IAction) => {
  switch (action.type) {
    case "value":
      break;

    default:
      break;
  }

  return state;
};

export default reducerRestaurant;