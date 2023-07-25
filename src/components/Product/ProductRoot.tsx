import React from "react"
import { Container } from "./ProductRoot.styled"

interface ProductRootProps {
  children: React.ReactNode
}

const ProductRoot = ({ children }: ProductRootProps) => {
  return <Container>{children}</Container>
}

export default ProductRoot
