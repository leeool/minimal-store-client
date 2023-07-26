import axiosInstance from "@API/Instance"
import useUserStore from "@stores/useUserStore"
import React from "react"
import { useMutation } from "react-query"

const useDeleteCartItem = (id: string) => {
  const setCartItems = useUserStore((state) => state.setCartItems)
  const cartItems = useUserStore((state) => state.cartItems)

  const mutation = useMutation({
    mutationKey: ["deleteCartItem", id],
    mutationFn: async () => {
      return axiosInstance.delete(`/cart-item/${id}`)
    },
    onSuccess: () => {
      setCartItems(cartItems.filter((item) => item.id !== id))
    }
  })

  return mutation
}

export default useDeleteCartItem
