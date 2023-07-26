import axiosInstance from "@API/Instance"
import React from "react"
import { useMutation } from "react-query"

interface Props {
  email: string
  password: string
}

const useSignIn = () => {
  const mutation = useMutation({
    mutationKey: ["signIn"],
    mutationFn: async (data: Props) => {
      return axiosInstance.post("/auth/signin", data).then((res) => res.data)
    },
    onSuccess: (data: { token: string }) => {
      localStorage.setItem("token", data.token)
    }
  })

  return mutation
}

export default useSignIn
