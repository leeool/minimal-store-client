import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  grid-template-columns: 0.2fr 1fr;
  gap: 0.5rem;

  span img {
    border-radius: 0.25rem;
    width: 100%;
    height: 5rem;
    aspect-ratio: 1/1;
    /* grid-area: auto; */
    cursor: zoom-in;
    object-fit: cover;
  }

  span {
    grid-column: 1 / 2;
    height: 5rem;
    /* grid-row: span; */
  }

  span.active {
    cursor: default;
    grid-column: 2 / 4;
    grid-row: 1 / span 5;
    height: 21.5rem;
    /* align-self: start; */
    /* grid-row: 1 / 2; */

    img {
      height: 100%;
    }
  }
`

export const Paragraph = styled.p`
  font-size: 0.75rem;
  grid-column: 1 / -1;
  grid-row: 5 / 6;
  opacity: 0.5;
`
