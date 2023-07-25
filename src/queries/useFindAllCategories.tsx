import axiosInstance from "@API/Instance"
import React from "react"
import { useQuery } from "react-query"

const useFindAllCategories = () => {
  const query = useQuery<ICategory[]>({
    queryKey: "findAllCategories",
    queryFn: async () => {
      return axiosInstance.get("/product/category").then((res) => res.data)
    }
  })

  return query
}

export default useFindAllCategories
