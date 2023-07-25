import React from "react"
import { Container, ButtonStylesProps } from "./ButtonRoot.styled"

export interface ButtonRootProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  props?: React.ButtonHTMLAttributes<HTMLButtonElement>
}

const ButtonRoot = ({
  children,
  variant,
  size,
  ...props
}: ButtonRootProps & ButtonStylesProps) => {
  return (
    <Container variant={variant} size={size} {...props}>
      {children}
    </Container>
  )
}

export default ButtonRoot
