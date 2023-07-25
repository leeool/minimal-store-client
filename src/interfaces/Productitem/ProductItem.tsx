import React from "react"
import { Container, Content, Details } from "./ProductItem.styled"
import ProductImage from "@components/Product/ProductImage"
import Product from "@components/Product"
import ProductQuantity from "@interfaces/ProductQuantity/ProductQuantity"
import CartItemRemove from "@interfaces/CartItemRemove/CartItemRemove"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

interface Props {
  cartItem: ICartItem
}

const ProductItem = ({ cartItem }: Props) => {
  return (
    <Link to={`/${cartItem.product.id}`}>
      <Container
        as={motion.li}
        initial={{
          opacity: 0,
          translateX: "-100%"
        }}
        animate={{ opacity: 1, translateX: 0 }}
        exit={{ opacity: 0, translateX: "-100%" }}
        transition={{ duration: 0.5, type: "spring" }}
        key={cartItem.id}
      >
        <Product.Image src={cartItem.product.images[0]} />
        <Content>
          <Product.Name>{cartItem.product.name}</Product.Name>
          <Product.Price>
            R$ {cartItem.product.price * cartItem.quantity}
          </Product.Price>
          <Details>
            <ProductQuantity cartItem={cartItem} />
            <CartItemRemove cartItem={cartItem} />
          </Details>
        </Content>
      </Container>
    </Link>
  )
}

export default ProductItem
