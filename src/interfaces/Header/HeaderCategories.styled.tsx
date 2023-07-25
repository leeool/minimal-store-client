import ButtonRoot from "@components/Button/ButtonRoot"
import styled from "styled-components"

export const Container = styled.div`
  grid-column: 1 / -1;
  grid-row: 2;
  position: relative;
`

export const Categories = styled.nav`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  scrollbar-width: none;
  white-space: nowrap;
  flex-wrap: nowrap;
  padding: 0.25rem;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const CategoriesButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  opacity: 1;
  height: 100%;
  width: 2rem;
  transition: opacity 0.5s ease-in-out;
  border: none;
  display: grid;
  align-items: center;
  cursor: pointer;

  &[data-dir="left"] {
    left: 0;
    background: linear-gradient(90deg, #fff 70%, #fff0 100%);
    justify-items: start;
  }

  &[data-dir="right"] {
    right: 0;
    background: linear-gradient(-90deg, #fff 70%, #fff0 100%);
    justify-items: end;
  }

  &[data-hidden="true"] {
    opacity: 0;
    user-select: none;
    pointer-events: none;
    transition: opacity 0.2s ease-in-out;
  }
`
