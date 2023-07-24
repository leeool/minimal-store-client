import React from "react"
import { Container } from "./InputLabel.styled"

interface InputLabelProps {
  children: React.ReactNode
}

const InputLabel = ({ children }: InputLabelProps) => {
  return <Container>{children}</Container>
}

export default InputLabel
