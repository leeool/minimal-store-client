import { Button } from "@components/Button"
import useDeleteCartItem from "@mutations/useDeleteCartItem"
import { TrashIcon } from "@primer/octicons-react"
import React from "react"

interface Props {
  cartItem: ICartItem
}

const CartItemRemove = ({ cartItem }: Props) => {
  const mutation = useDeleteCartItem(cartItem.id)

  const handleClick = () => {
    mutation.mutate()
  }

  return (
    <Button.Root onClick={handleClick}>
      <Button.Icon>
        <TrashIcon />
      </Button.Icon>
    </Button.Root>
  )
}

export default CartItemRemove
