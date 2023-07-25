import axiosInstance from "@API/Instance"
import React from "react"
import { useQuery } from "react-query"

const useFindAllProducts = () => {
  const query = useQuery<IProduct[]>({
    queryKey: ["findAllProducts"],
    queryFn: async () => {
      return axiosInstance.get("/product").then((res) => res.data)
    }
  })

  return query
}

export default useFindAllProducts
