import axios from "axios"
import Cookie from "js-cookie"
const baseURL = import.meta.env.VITE_BACKEND_API
const token = "Bearer " + Cookie.get("token")

export const apiV1 = axios.create(
    {
        baseURL : "https://be-circle-one.vercel.app/api/v1",
        headers: {
            Authorization: token
        }
    }
)