import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  padding: 1rem;
  align-items: center;
  align-content: center;
  gap: 1rem;

  a {
    justify-self: center;
    margin-top: 3rem;
  }
`

export const Form = styled.form`
  display: grid;
  gap: 1rem;

  button {
    justify-self: end;
  }
`
