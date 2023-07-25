import axiosInstance, { axiosInstanceWithAuth } from "@API/Instance"
import useUserStore from "@stores/useUserStore"
import React from "react"
import { useQuery } from "react-query"

const useAuthMe = () => {
  const logOut = useUserStore((state) => state.logOut)
  const setUser = useUserStore((state) => state.setUser)

  const query = useQuery<IUser>({
    queryKey: "authMe",
    queryFn: async () => {
      const token = localStorage.getItem("token")

      if (!token) {
        return Promise.reject("Token not found")
      }

      console.log(token)

      return axiosInstance
        .get("/auth/me", { headers: { Authorization: "Bearer " + token } })
        .then((res) => res.data)
    },
    onSuccess: (data: IUser) => {
      setUser(data)
    },
    onError: () => {
      logOut()
    }
  })

  return query
}

export default useAuthMe
