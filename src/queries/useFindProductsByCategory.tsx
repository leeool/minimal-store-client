import axiosInstance from "@API/Instance"
import React from "react"
import { useQuery } from "react-query"

const useFindProductsByCategory = (id: string) => {
  const query = useQuery<ICategory & { products: IProduct[] }>({
    queryKey: ["findProductsByCategory", id],
    queryFn: async () => {
      return axiosInstance
        .get(`/product/category/${id}`)
        .then((res) => res.data)
    },
    enabled: !!id
  })

  return query
}

export default useFindProductsByCategory
