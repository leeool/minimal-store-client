import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  gap: 1rem;
`

export const Products = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
`
