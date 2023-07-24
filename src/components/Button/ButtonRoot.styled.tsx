import theme from "@styles/theme"
import styled from "styled-components"
import { variant } from "styled-system"

export interface ButtonStylesProps {
  variant?: "primary" | "secondary"
  size?: "sm" | "md"
}

export const Container = styled.button<ButtonStylesProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.75rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  gap: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  height: 2rem;
  color: ${({ theme }) => theme.text.primary};
  background: ${({ theme }) => theme.bg.secondary};

  &:hover {
    border-color: #212121;
    background-color: #212121;
    color: #fff;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.25rem rgba(0, 0, 0, 0.25);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${variant({
    prop: "variant",
    variants: {
      primary: {
        color: theme.text.primary,
        backgroundColor: theme.bg.secondary,
        outline: `2px solid ${theme.bg.secondary}`,
        "&:hover": {
          background: theme.bg.primary
        }
      },
      secondary: {
        color: theme.text.primary,
        backgroundColor: theme.bg.white,
        outline: `2px solid ${theme.outline.primary}`
      }
    }
  })}

  ${variant({
    prop: "size",
    variants: {
      sm: {
        height: "1.75rem",
        fontSize: "0.875rem",
        padding: "0 0.5rem",
        fontWeight: 400
      },
      md: {
        height: "2rem",
        fontSize: "1rem",
        padding: "0 0.75rem"
      }
    }
  })}
`
