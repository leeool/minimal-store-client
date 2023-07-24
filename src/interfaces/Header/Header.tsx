import React from "react"
import { ButtonWrapper, Container, Content, LogoWrapper } from "./Header.styled"
import Logo from "@components/Logo"
import { Button } from "@components/Button"
import ButtonRoot from "@components/Button/ButtonRoot"
import { ArrowRightIcon } from "@primer/octicons-react"
import HeaderCategories from "./HeaderCategories"

const Header = () => {
  return (
    <Container>
      <Content>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>

        <ButtonWrapper>
          <Button.Root>Registrar</Button.Root>
          <Button.Root>Entrar</Button.Root>
        </ButtonWrapper>

        <HeaderCategories />
      </Content>
    </Container>
  )
}

export default Header
