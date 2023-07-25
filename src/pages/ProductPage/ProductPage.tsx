import React from "react"
import {
  Buttons,
  Container,
  Description,
  Details,
  Highlight,
  SimilarContent,
  SimilarProducts
} from "./ProductPage.styled"
import useShowProduct from "@queries/useShowProduct"
import { useParams } from "react-router"
import ProductPageImages from "./ProductPageImages"
import BlackHighlight from "@components/BlackHighlight"
import { CreditCardIcon, HeartFillIcon } from "@primer/octicons-react"
import { Button } from "@components/Button"
import useFindProductsByCategory from "@queries/useFindProductsByCategory"
import ProductCard from "@interfaces/ProductCard"
import Cart from "@interfaces/cart/Cart"
import useStoreCartItem from "@mutations/useStoreCartItem"
import useUserStore from "@stores/useUserStore"

const ProductPage = () => {
  const { id } = useParams()
  const product = useShowProduct(id as string)
  const productsByCategory = useFindProductsByCategory(
    product.data?.category.id as string
  )
  const mutation = useStoreCartItem()
  const cartItems = useUserStore((state) => state.cartItems)
  const user = useUserStore((state) => state.user)

  React.useEffect(() => {
    console.log(product.data)
  }, [product.data])

  const handleStore = () => {
    if (cartItems.find((item) => item.product.id === id))
      return console.log("Item já está no carrinho")

    if (!user) return console.log("Usuário não está logado")

    mutation.mutate({
      productId: id as string,
      userId: user.id
    })
  }

  if (!product.data) return <div>Carregando...</div>
  return (
    <Container>
      <ProductPageImages images={product.data.images} />
      <Details>
        <Highlight>
          <BlackHighlight.Root>
            <BlackHighlight.Text variant="title">
              {product.data.name}
            </BlackHighlight.Text>
            <BlackHighlight.Text variant="subtitle">
              por R$ {String(product.data.price).replace(".", ",")} à vista
            </BlackHighlight.Text>
          </BlackHighlight.Root>
          <BlackHighlight.Root>
            <BlackHighlight.Text variant="subtitle">
              <CreditCardIcon size={16} />
              em até 12x de R${" "}
              {String((product.data.price / 12).toFixed(2)).replace(".", ",")}
            </BlackHighlight.Text>
          </BlackHighlight.Root>
        </Highlight>
        <Buttons>
          <Cart>
            <Button.Root variant="primary" onClick={handleStore}>
              {cartItems.find((item) => item.product.id === id)
                ? "Adicionado"
                : "Adicionar ao carrinho"}
            </Button.Root>
          </Cart>
          <Button.Root variant="primary">
            <HeartFillIcon />
          </Button.Root>
        </Buttons>
      </Details>
      <Description>
        <h2>Sobre o produto</h2>
        <p>{product.data.description}</p>
      </Description>
      <SimilarProducts>
        <h2>Produtos similares</h2>
        <SimilarContent>
          {productsByCategory.data?.products
            .filter((product) => product.id !== id)
            .map((product) => (
              <li>
                <ProductCard key={product.id} product={product} />
              </li>
            ))}
        </SimilarContent>
      </SimilarProducts>
    </Container>
  )
}

export default ProductPage
