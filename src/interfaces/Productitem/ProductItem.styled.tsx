import styled from "styled-components"

export const Container = styled.li`
  display: grid;
  grid-template-columns: minmax(5rem, 8rem) 1fr;
  gap: 1rem;
  cursor: pointer;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: end;
  gap: 0.5rem;
`

export const Details = styled.div`
  display: flex;
  /* align-self: end; */
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  justify-self: end;
`
