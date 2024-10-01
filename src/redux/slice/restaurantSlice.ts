import { IRestaurant } from "@/types";
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    _id: "",
    location: "",
    name: "",
    ownedBy: "",
    profile: "",
    ville: ""
}

const restaurantSlice = createSlice({
    name: "restaurant",
    initialState,
    reducers: {
        addRestaurant: (state, action) => {
            return { ...state, ...action.payload }
        }
    }
})

export const { addRestaurant } = restaurantSlice.actions
export default restaurantSlice.reducer