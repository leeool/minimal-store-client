import React from "react"
import { Container } from "./ProductPrice.styled"

interface ProductPriceProps {
  children: React.ReactNode
}

const ProductPrice = ({ children }: ProductPriceProps) => {
  return <Container>{children}</Container>
}

export default ProductPrice
