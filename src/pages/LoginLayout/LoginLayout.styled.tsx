import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(min-content, 1fr) 0.6fr;
`

export const Content = styled.div`
  display: grid;
  justify-items: center;
  justify-content: center;
  height: 100vh;
  align-items: center;
  align-content: center;
  line-height: 1;
  border-right: 2px solid ${({ theme }) => theme.outline.primary};

  .store {
    justify-self: end;
    /* transform: translateX(25%); */
    animation: slideRight 200s linear infinite alternate;
  }

  .minimal {
    /* transform: translateX(-25%); */
    animation: slideLeft 200s linear infinite alternate;
  }

  @keyframes slideLeft {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-25%);
    }
  }
  @keyframes slideRight {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(25%);
    }
  }
`

export const Item = styled.span`
  font-size: 10vw;
  font-weight: 500;
`
