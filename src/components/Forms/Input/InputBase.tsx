import React, { HTMLAttributes, forwardRef } from "react"
import { Container, InputStylesProps } from "./InputBase.styled"

interface InputBaseProps extends React.InputHTMLAttributes<HTMLInputElement> {
  props?: React.InputHTMLAttributes<HTMLInputElement>
}

const InputBase = React.forwardRef<
  HTMLInputElement,
  React.PropsWithChildren<InputBaseProps & InputStylesProps>
>(({ variant, ...props }, forwardRef) => {
  return <Container variant={variant} ref={forwardRef} {...props} />
})

export default InputBase
