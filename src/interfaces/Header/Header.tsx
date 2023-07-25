import React from "react"
import { ButtonWrapper, Container, Content, LogoWrapper } from "./Header.styled"
import Logo from "@components/Logo"
import { Button } from "@components/Button"
import ButtonRoot from "@components/Button/ButtonRoot"
import {
  ArrowRightIcon,
  HeartFillIcon,
  PeopleIcon,
  PersonFillIcon
} from "@primer/octicons-react"
import HeaderCategories from "./HeaderCategories"
import { Link } from "react-router-dom"
import Cart from "@interfaces/cart/Cart"

export const HeaderLoggedIn = () => {
  return (
    <Container>
      <Content>
        <LogoWrapper as={Link} to={"/"}>
          <Logo />
        </LogoWrapper>

        <ButtonWrapper>
          <Cart>
            <Button.Root variant="secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="#212121"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
            </Button.Root>
          </Cart>
        </ButtonWrapper>

        <HeaderCategories />
      </Content>
    </Container>
  )
}

export const HeaderLoggedOut = () => {
  return (
    <Container>
      <Content>
        <LogoWrapper as={Link} to={"/"}>
          <Logo />
        </LogoWrapper>

        <ButtonWrapper>
          <Link to="/entrar">
            <Button.Root variant="secondary">Entrar</Button.Root>
          </Link>
          <Link to="/entrar/registrar">
            <Button.Root>Registrar</Button.Root>
          </Link>
        </ButtonWrapper>

        <HeaderCategories />
      </Content>
    </Container>
  )
}
