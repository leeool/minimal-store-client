import styled from "styled-components"

export const Container = styled.div`
  display: grid;

  h1 {
    line-height: 1;
  }

  h2 {
    font-size: 1.125rem;
    font-weight: 400;
    margin-bottom: 1rem;
    line-height: 1;
    color: ${({ theme }) => theme.text.secondary};
  }
`

export const ContainerOne = styled.div`
  display: grid;
  gap: 1rem;

  button {
    justify-self: end;
  }
`

export const CartItems = styled.ul`
  display: grid;
  align-items: start;
  align-content: start;
  gap: 1rem;
`

export const ContainerTwo = styled.div`
  display: grid;
  gap: 1rem;

  button {
    justify-self: end;
  }
`

export const UserData = styled.ul`
  display: grid;
  gap: 1rem;
`

export const UserDataItem = styled.li`
  p {
    opacity: 0.7;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
