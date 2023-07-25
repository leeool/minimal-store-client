import React from "react"
import { Container } from "./ProductName.styled"

interface ProductNameProps {
  children: React.ReactNode
}

const ProductName = ({ children }: ProductNameProps) => {
  return <Container>{children}</Container>
}

export default ProductName
