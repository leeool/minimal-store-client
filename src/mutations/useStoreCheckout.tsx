import { axiosInstanceWithAuth } from "@API/Instance"
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
      return axiosInstanceWithAuth.post(`/order/${data.userId}`, {
        cartId: data.cartId
      })
    }
  })

  return mutation
}

export default useStoreCheckout
