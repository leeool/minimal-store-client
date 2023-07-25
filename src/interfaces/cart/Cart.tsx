import Dialog from "@components/Dialog"
import React from "react"
import { Close, Content, Header, Items, Trigger } from "./Cart.styled"
import { ArrowRightIcon, XIcon } from "@primer/octicons-react"
import useGetUserCart from "@queries/useGetUserCart"
import ProductItem from "@interfaces/Productitem/ProductItem"
import useUserStore from "@stores/useUserStore"
import { Button } from "@components/Button"
import { Link } from "react-router-dom"
import ButtonIcon from "@components/Button/ButtonIcon"
import { AnimatePresence } from "framer-motion"

interface CartProps {
  children: React.ReactNode
}

const Cart = ({ children }: CartProps) => {
  const user = useUserStore((state) => state.user)
  const query = useGetUserCart(user?.id)
  const cartItems = useUserStore((state) => state.cartItems)

  return (
    <Dialog.Root>
      <Trigger>{children}</Trigger>
      <Content>
        <Header>
          <h1>Carrinho de compras</h1>
          <Close>
            <XIcon />
          </Close>
        </Header>
        <Items>
          <AnimatePresence>
            {cartItems.map((cartItem) => (
              <ProductItem key={cartItem.id} cartItem={cartItem} />
            ))}
          </AnimatePresence>
        </Items>
        <Link to="/finalizar" style={{ justifySelf: "end" }}>
          <Button.Root>
            Finalizar compra
            <ButtonIcon>
              <ArrowRightIcon />
            </ButtonIcon>
          </Button.Root>
        </Link>
      </Content>
    </Dialog.Root>
  )
}

export default Cart
