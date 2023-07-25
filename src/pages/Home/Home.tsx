import React from "react"
import { Container, Products } from "./Home.styled"
import BlackHighlight from "@components/BlackHighlight"
import ProductCard from "@interfaces/ProductCard"
import useFindAllProducts from "@queries/useFindAllProducts"

const Home = () => {
  const products = useFindAllProducts()

  return (
    <Container>
      <BlackHighlight.Root>
        <BlackHighlight.Text variant="title">
          Conecte-se com o futuro.
        </BlackHighlight.Text>
        <BlackHighlight.Text variant="subtitle">
          Tecnologia minimalista, experiência máxima
        </BlackHighlight.Text>
      </BlackHighlight.Root>
      <Products>
        {products.data?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Products>
    </Container>
  )
}

export default Home
