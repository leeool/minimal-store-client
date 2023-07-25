import Product from "@components/Product"
import React from "react"
import { Link } from "react-router-dom"

interface Props {
  product: IProduct
}

const ProductCard = ({ product }: Props) => {
  return (
    <Product.Root>
      <Link to={`/${product.id}`}>
        <Product.Image src={product.images[0]} />
        <Product.Name>{product.name}</Product.Name>
        <Product.Price>
          R$ {String(product.price).replace(".", ",")}
        </Product.Price>
        <Product.Separator />
      </Link>
    </Product.Root>
  )
}

export default ProductCard
