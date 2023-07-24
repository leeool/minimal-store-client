import styled from "styled-components"

export const Container = styled.footer`
  display: grid;
  width: 100%;
  color: ${({ theme }) => theme.text.white};
  margin-bottom: 0.5rem;

  svg,
  path {
    fill: ${({ theme }) => theme.text.white};
    stroke: ${({ theme }) => theme.text.white};
  }
`

export const Content = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  border-radius: 0.25rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.bg.primary};
`

export const Item = styled.li`
  width: 100%;

  & > li {
    font-size: 1.25rem;
    font-weight: 500;
  }

  ul li {
    color: ${({ theme }) => theme.text.secondary};
    font-size: 0.875rem;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.text.white};
    }
  }
`

export const Rights = styled.p`
  grid-column: 1 / -1;
  grid-row: 2;
  justify-self: center;
  margin-top: 0.5rem;
`
