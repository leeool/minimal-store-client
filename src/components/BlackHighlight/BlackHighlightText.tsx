import React from "react"
import {
  Container,
  BlackHighlightTextStylesProps
} from "./BlackHighlightText.styled"

interface BlackHighlightTextProps {
  children: React.ReactNode
}

const BlackHighlightText = ({
  children,
  variant
}: BlackHighlightTextProps & BlackHighlightTextStylesProps) => {
  return <Container variant={variant}>{children}</Container>
}

export default BlackHighlightText
