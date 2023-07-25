import axiosInstance from "@API/Instance"
import React from "react"
import { useQuery } from "react-query"

const useShowProduct = (id: string) => {
  const query = useQuery<IProduct>({
    queryKey: ["showProduct", id],
    queryFn: async () => {
      return axiosInstance.get(`/product/${id}`).then((res) => res.data)
    },
    enabled: !!id
  })

  return query
}

export default useShowProduct
