import theme from "@styles/theme"
import styled from "styled-components"
import { variant } from "styled-system"

export interface InputStylesProps {
  variant?: "primary" | "secondary"
}

export const Container = styled.input<InputStylesProps>`
  border-radius: 0.25rem;
  border: 2px solid ${({ theme }) => theme.outline.primary};
  background-color: ${({ theme }) => theme.bg.secondary};
  padding: 0 0.75rem;
  height: 2rem;
  font-size: 1rem;
  transition: all 0.2s ease-in-out;

  &:focus {
    background-color: ${({ theme }) => theme.bg.white};
    border-color: ${({ theme }) => theme.outline.secondary};
    outline: none;
  }

  &:hover {
    background-color: ${({ theme }) => theme.bg.white};
  }

  &::placeholder {
    color: ${({ theme }) => theme.text.secondary};
    opacity: 0.6;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${variant({
    prop: "variant",
    variants: {
      primary: {
        backgroundColor: theme.bg.secondary
      },
      secondary: {
        backgroundColor: theme.bg.white
      }
    }
  })}
`
