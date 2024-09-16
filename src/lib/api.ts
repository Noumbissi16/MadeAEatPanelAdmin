const url = "https://api-madeaeat.vercel.app/api/v1/auth/agence/";
import { IUserDataLogin } from "@/types";
import axios from "axios";

export const signInUser = async (userData: IUserDataLogin) => {
  try {
    const result = await axios.post(
      "https://api-madeaeat.vercel.app/api/v1/auth/agence/signin-agence",
      userData
    );
    const data = result.data;
    console.log(data.token);
    return data;
  } catch (error: any) {
    console.log(error.response.data);
  }
};
// {
//   "name": "Jack Garcia1",
//   "email": "jack.garcia1@example.com",
//   "password": "Password1234"
// }
