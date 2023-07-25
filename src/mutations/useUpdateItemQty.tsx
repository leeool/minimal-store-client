import axiosInstance from "@API/Instance"
import React from "react"
import { useMutation } from "react-query"

const useUpdateItemQty = (id: string) => {
  const mutation = useMutation({
    mutationKey: ["updateItemQty", id],
    mutationFn: async (method: "increment" | "decrement") => {
      return axiosInstance.patch(`/cart-item/${id}/${method}`)
    }
  })

  return mutation
}

export default useUpdateItemQty
