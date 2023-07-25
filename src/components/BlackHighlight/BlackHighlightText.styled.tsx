import theme from "@styles/theme"
import styled from "styled-components"
import { variant } from "styled-system"

export interface BlackHighlightTextStylesProps {
  variant: "title" | "subtitle"
}

export const Container = styled.span<BlackHighlightTextStylesProps>`
  font-size: 1.5rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  ${variant({
    variants: {
      title: {
        fontSize: "1.5rem",
        color: theme.text.white
      },
      subtitle: {
        fontSize: "1.125rem",
        fontWeight: 400,
        color: theme.text.secondary
      }
    }
  })}
`
