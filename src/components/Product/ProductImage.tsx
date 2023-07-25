import React from "react"
import { Container } from "./ProductImage.styled"

interface ProductImageProps {
  src: string
}

const ProductImage = ({ src }: ProductImageProps) => {
  return <Container src={src} />
}

export default ProductImage
