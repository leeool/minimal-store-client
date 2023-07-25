import React from "react"
import { Outlet } from "react-router"
import { Container, Content, Item } from "./LoginLayout.styled"
import { Link } from "react-router-dom"

const LoginLayout = () => {
  return (
    <Container>
      <Content as={Link} to="/">
        <Item className="minimal">Minimal</Item>
        <Item className="store">Store</Item>
      </Content>
      <Outlet />
    </Container>
  )
}

export default LoginLayout
