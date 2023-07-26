import axiosInstance, { axiosInstanceWithAuth } from "@API/Instance"
import useUserStore from "@stores/useUserStore"
import React from "react"
import { useMutation } from "react-query"

interface Props {
  productId: string
  userId: string
}

const useStoreCartItem = () => {
  const setCartItems = useUserStore((state) => state.setCartItems)
  const cartItems = useUserStore((state) => state.cartItems)

  const mutation = useMutation({
    mutationKey: ["storeCartItem"],
    mutationFn: async ({ productId, userId }: Props) => {
      const token = localStorage.getItem("token")

      return axiosInstance
        .post(
          `/cart/${userId}`,
          { productId },
          { headers: { Authorization: `Bearer ${token}` } }
        )
        .then((res) => res.data)
    },
    onSuccess: (data: ICartItem[]) => {
      ;("Item stored")

      setCartItems(data)
    }
  })

  return mutation
}

export default useStoreCartItem
