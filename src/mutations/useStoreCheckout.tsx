import axiosInstance, { axiosInstanceWithAuth } from "@API/Instance"
import React from "react"
import { useMutation } from "react-query"

interface Props {
  userId: string
  cartId: string
}

const useStoreCheckout = () => {
  const mutation = useMutation({
    mutationKey: "storeCheckout",
    mutationFn: async (data: Props) => {
      const token = localStorage.getItem("token")

      return axiosInstance.post(
        `/order/${data.userId}`,
        {
          cartId: data.cartId
        },
        { headers: { Authorization: `Bearer ${token}` } }
      )
    }
  })

  return mutation
}

export default useStoreCheckout
