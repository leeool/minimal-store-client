import React from "react"
import { Container, ButtonStylesProps } from "./ButtonRoot.styled"

export interface ButtonRootProps {
  children: React.ReactNode
}

const ButtonRoot = ({
  children,
  variant,
  size
}: ButtonRootProps & ButtonStylesProps) => {
  return (
    <Container variant={variant} size={size}>
      {children}
    </Container>
  )
}

export default ButtonRoot
