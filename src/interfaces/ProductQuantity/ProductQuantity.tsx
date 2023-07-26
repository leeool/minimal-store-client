import React from "react"
import { Container, Content } from "./ProductQuantity.styled"
import { Button } from "@components/Button"
import useUpdateItemQty from "@mutations/useUpdateItemQty"
import useDeleteCartItem from "@mutations/useDeleteCartItem"
import useUserStore from "@stores/useUserStore"

interface Props {
  cartItem: ICartItem
}

const ProductQuantity = ({ cartItem }: Props) => {
  const mutation = useUpdateItemQty(cartItem.id)
  const mutationDelete = useDeleteCartItem(cartItem.id)
  const setCartItems = useUserStore((state) => state.setCartItems)
  const cartItems = useUserStore((state) => state.cartItems)

  const handleSubmit = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (mutation.isLoading) return

    if (!(event.target instanceof HTMLButtonElement)) return

    const method = event.target.dataset.method

    if (method === "increment") {
      mutation.mutate("increment", {
        onSuccess: () => {
          setCartItems(
            cartItems.map((item) => {
              if (item.id === cartItem.id) {
                return { ...item, quantity: item.quantity + 1 }
              } else return item
            }) as ICartItem[]
          )
        }
      })
    } else if (method === "decrement") {
      if (cartItem.quantity === 1) {
        mutationDelete.mutate()
        return
      }

      mutation.mutate("decrement", {
        onSuccess: () => {
          setCartItems(
            cartItems.map((item) => {
              if (item.id === cartItem.id) {
                return { ...item, quantity: item.quantity - 1 }
              } else return item
            }) as ICartItem[]
          )
        }
      })
    }
  }
  return (
    <Container onClick={handleSubmit}>
      <Button.Root data-method="decrement" disabled={mutation.isLoading}>
        -
      </Button.Root>
      <Content>{cartItem.quantity}</Content>
      <Button.Root data-method="increment" disabled={mutation.isLoading}>
        +
      </Button.Root>
    </Container>
  )
}

export default ProductQuantity
