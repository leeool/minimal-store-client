import axiosInstance from "@API/Instance"
import useUserStore from "@stores/useUserStore"
import React from "react"
import { useQuery } from "react-query"

const useGetUserCart = (id: string | null | undefined) => {
  const setCartItems = useUserStore((state) => state.setCartItems)
  const setCart = useUserStore((state) => state.setCart)

  const query = useQuery<ICart>({
    queryKey: ["getUserCart", id],
    queryFn: async () => {
      return axiosInstance.get(`/cart/${id}`).then((res) => res.data)
    },
    enabled: !!id,
    onSuccess(data) {
      setCartItems(data.cartItems)
      setCart(data)
    }
  })

  return query
}

export default useGetUserCart
