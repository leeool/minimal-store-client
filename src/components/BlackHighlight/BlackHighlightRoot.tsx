import React from "react"
import { Container } from "./BlackHighlightRoot.styled"

interface BlackHighlightRootProps {
  children: React.ReactNode
}

const BlackHighlightRoot = ({ children }: BlackHighlightRootProps) => {
  return <Container>{children}</Container>
}

export default BlackHighlightRoot
