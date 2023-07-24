import React from "react"
import { Container, Content, Item, Rights } from "./Footer.styled"
import Logo from "@components/Logo"

const Footer = () => {
  return (
    <Container>
      <Content>
        <Logo />
        <Item>
          <li>Contato</li>
          <ul>
            <li>minstoreoficial@gmail.com</li>
            <li>+55 (11) 994736587</li>
          </ul>
        </Item>
        <Item>
          <li>Ajuda</li>
          <ul>
            <li>Como comprar</li>
            <li>Formas de pagamento</li>
            <li>Termos de uso</li>
          </ul>
        </Item>
        <Item>
          <li>Sobre</li>
          <ul>
            <li>Quem somos</li>
            <li>Missão e valores</li>
          </ul>
        </Item>
        <Rights>© 2023 - Todos os direitos reservados</Rights>
      </Content>
    </Container>
  )
}

export default Footer
