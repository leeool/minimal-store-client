import axiosInstance from "@API/Instance"
import React from "react"
import { useMutation } from "react-query"

const useSignUp = () => {
  const mutation = useMutation({
    mutationKey: ["signUp"],
    mutationFn: async (data: Partial<IUser> & { password: string }) => {
      return axiosInstance.post("/auth/signup", data).then((res) => res.data)
    },
    onSuccess: (data: { token: string }) => {
      console.log("User signed up")

      localStorage.setItem("token", data.token)
    }
  })

  return mutation
}

export default useSignUp
