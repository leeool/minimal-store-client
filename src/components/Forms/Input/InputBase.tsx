import React, { HTMLAttributes } from "react"
import { Container, InputStylesProps } from "./InputBase.styled"

interface InputBaseProps extends HTMLAttributes<HTMLInputElement> {
  props?: HTMLAttributes<HTMLInputElement>
}

const InputBase = ({
  variant,
  ...props
}: InputBaseProps & InputStylesProps) => {
  return <Container variant={variant} {...props} />
}

export default InputBase
