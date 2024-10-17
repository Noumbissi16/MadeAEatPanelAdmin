import { DEV_BACKEND_BASE_URL } from "@/constants";
import { RootState } from "@/redux/store";
import axios from "axios";
import { useSelector } from "react-redux";


const user = () => {
    const user = useSelector((state: RootState) => state.user)
    return user.token
}

const axiosInstance = axios.create({
    baseURL: DEV_BACKEND_BASE_URL,
    headers: {
        Authorization: `Bearer ${user()}`
    }
})
export default axiosInstance
