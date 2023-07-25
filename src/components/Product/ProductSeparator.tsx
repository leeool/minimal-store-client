import styled from "styled-components"

export const Separator = styled.span`
  display: block;
  height: 2px;
  background-color: ${({ theme }) => theme.text.primary};
  width: 10%;
  opacity: 0.2;
  margin-top: 0.5rem;
`
