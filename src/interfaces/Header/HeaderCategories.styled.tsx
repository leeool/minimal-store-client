import ButtonRoot from "@components/Button/ButtonRoot"
import styled from "styled-components"

export const Container = styled.div`
  grid-column: 1 / -1;
  grid-row: 2;
  position: relative;
`

export const Categories = styled.nav`
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  scrollbar-width: none;
  white-space: nowrap;
  flex-wrap: nowrap;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const CategoriesButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  &[data-dir="left"] {
    left: 0;
  }

  &[data-dir="right"] {
    right: 0;
  }
`
