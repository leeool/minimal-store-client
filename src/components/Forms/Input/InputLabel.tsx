import React from "react"
import { Container } from "./InputLabel.styled"

interface InputLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode
  props?: React.LabelHTMLAttributes<HTMLLabelElement>
}

const InputLabel = ({ children, ...props }: InputLabelProps) => {
  return <Container {...props}>{children}</Container>
}

export default InputLabel
