import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  background-color: ${({ theme }) => theme.bg.primary};
  color: ${({ theme }) => theme.text.white};
  padding: 0.5rem;
  border-radius: 0.25rem;
`
