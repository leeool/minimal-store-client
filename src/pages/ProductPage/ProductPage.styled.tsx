import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  row-gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const Details = styled.div`
  display: grid;
  gap: 0.5rem;
  height: 100%;
`

export const Buttons = styled.div`
  align-self: end;
  display: flex;
  gap: 1rem;
  padding-bottom: 1.5rem;
`

export const Highlight = styled.div`
  display: grid;
  gap: 0.5rem;
  align-content: start;
`

export const Description = styled.div`
  display: grid;
  gap: 0.5rem;
  grid-column: 1 / -1;

  p {
    line-height: 1.5;
  }
`

export const SimilarProducts = styled.div`
  display: grid;
  gap: 0.5rem;
  grid-column: 1 / -1;
`

export const SimilarContent = styled.ul`
  display: flex;
  gap: 1rem;
  overflow-x: auto;

  li {
    flex: 0 0 250px;
  }
`
