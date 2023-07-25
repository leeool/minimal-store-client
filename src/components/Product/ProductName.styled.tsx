import styled from "styled-components"

export const Container = styled.p`
  font-size: 1.125rem;
  font-weight: 600;
  width: fit-content;

  &::after {
    content: "";
    display: block;
    height: 2px;
    width: 0;
    background-color: #000;
    transition: width 0.3s ease-in-out;
  }

  &:hover::after {
    transform: scaleX(1);
    width: 100%;
  }
`
