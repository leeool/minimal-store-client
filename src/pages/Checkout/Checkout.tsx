import React from "react"
import {
  ButtonWrapper,
  CartItems,
  Container,
  ContainerOne,
  ContainerTwo,
  UserData,
  UserDataItem
} from "./Checkout.styled"
import useUserStore from "@stores/useUserStore"
import ProductItem from "@interfaces/Productitem/ProductItem"
import useCheckoutStore from "./useCheckoutStore"
import { Button } from "@components/Button"
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckIcon
} from "@primer/octicons-react"
import { AnimatePresence } from "framer-motion"
import cpfMask from "@helpers/cpfMask"
import BlackHighlight from "@components/BlackHighlight"
import useStoreCheckout from "@mutations/useStoreCheckout"
import DialogNotify from "@interfaces/DialogNotify/DialogNotify"
import useDialogNotifyStore from "@interfaces/DialogNotify/useDialogNotifyStore"
import { useNavigate } from "react-router"

const Checkout = () => {
  const stage = useCheckoutStore((state) => state.stage)

  const stages = {
    one: <CheckoutOne />,
    two: <CheckoutTwo />
  }

  return (
    <Container>
      <h1>Checkout</h1>
      {stages[stage]}
    </Container>
  )
}

const CheckoutOne = () => {
  const cartItems = useUserStore((state) => state.cartItems)
  const setStage = useCheckoutStore((state) => state.setStage)

  const handleClick = () => {
    if (cartItems.length === 0) return alert("Carrinho vazio")

    setStage("two")
  }

  return (
    <ContainerOne>
      <h2>Conferir carrinho</h2>
      <CartItems>
        <AnimatePresence>
          {cartItems.map((cartItem) => (
            <ProductItem key={cartItem.id} cartItem={cartItem} />
          ))}
        </AnimatePresence>
      </CartItems>
      <BlackHighlight.Root>
        <BlackHighlight.Text variant="subtitle">Total</BlackHighlight.Text>
        <BlackHighlight.Text variant="title">
          R${" "}
          {cartItems
            .reduce((acc, item) => acc + item.product.price * item.quantity, 0)
            .toFixed(2)
            .replace(".", ",")}
        </BlackHighlight.Text>
      </BlackHighlight.Root>
      <Button.Root onClick={handleClick}>
        Avançar
        <ArrowRightIcon />
      </Button.Root>
    </ContainerOne>
  )
}

const CheckoutTwo = () => {
  const setStage = useCheckoutStore((state) => state.setStage)
  const user = useUserStore((state) => state.user)
  const cart = useUserStore((state) => state.cart)
  const mutation = useStoreCheckout()
  const setOpen = useDialogNotifyStore((state) => state.setOpen)

  const handleClick = () => {
    if (!user) return alert("Usuário não está logado")
    if (!cart) return alert("Carrinho não encontrado")

    mutation.mutate(
      {
        userId: user.id as string,
        cartId: cart.id as string
      },
      {
        onSuccess: () => {
          setOpen(true)
        },
        onError: () => {
          alert("Erro ao realizar compra")
        }
      }
    )
  }

  if (!user) return <div>Carregando...</div>
  return (
    <ContainerTwo>
      <DialogNotify>
        <h1>Compra realizada com sucesso</h1>
        <p>Confira sua caixa de entrada para mais detalhes sobre sua compra</p>
        <Button.Root onClick={() => setOpen(false)}>Ok</Button.Root>
      </DialogNotify>
      <h2>Confirme seus dados</h2>

      <UserData>
        <UserDataItem>
          <h3>Nome completo</h3>
          <p>{user.name}</p>
        </UserDataItem>
        <UserDataItem>
          <h3>Email</h3>
          <p>{user.email}</p>
        </UserDataItem>
        <UserDataItem>
          <h3>CPF</h3>
          <p>{cpfMask(user.cpf)}</p>
        </UserDataItem>
        <UserDataItem>
          <h3>Endereço</h3>
          <p>{user.address}</p>
        </UserDataItem>
      </UserData>

      <ButtonWrapper>
        <Button.Root onClick={() => setStage("one")}>
          <ArrowLeftIcon />
          Voltar
        </Button.Root>
        <Button.Root onClick={handleClick}>
          Comprar
          <CheckIcon />
        </Button.Root>
      </ButtonWrapper>
    </ContainerTwo>
  )
}

export default Checkout
