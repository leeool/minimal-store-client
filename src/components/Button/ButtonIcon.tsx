import React from "react"
import { Container } from "./ButtonIcon.styled"

interface ButtonIconProps {
  children: React.ReactNode
}

const ButtonIcon = ({ children }: ButtonIconProps) => {
  return <Container>{children}</Container>
}

export default ButtonIcon
