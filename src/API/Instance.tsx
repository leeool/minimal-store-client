import axios from "axios"

const ENDPOINT = import.meta.env.VITE_API_URL as string

const axiosInstance = axios.create({
  baseURL: ENDPOINT,
  headers: {
    "Content-Type": "application/json",
    "data-type": "jsonp",
    "Access-Control-Allow-Origin": "*"
  }
})

export const axiosInstanceWithAuth = axios.create({
  baseURL: ENDPOINT,
  headers: {
    "Content-Type": "application/json",
    "data-type": "jsonp",
    "Access-Control-Allow-Origin": "*",
    Authorization: `Bearer ${localStorage.getItem("token")}`
  }
})

export default axiosInstance
