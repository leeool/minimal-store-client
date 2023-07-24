import React from "react"
import { Container } from "./InputRoot.styled"

interface InputRootProps {
  children: React.ReactNode
}

const InputRoot = ({ children }: InputRootProps) => {
  return <Container>{children}</Container>
}

export default InputRoot
