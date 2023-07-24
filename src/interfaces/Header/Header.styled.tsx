import styled from "styled-components"

export const Container = styled.header`
  display: grid;
  width: 100%;
  max-width: 62rem;
  padding: 0.5rem 0;
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  gap: 0.25rem;
  overflow: hidden;
  align-items: center;
`

export const LogoWrapper = styled.div``

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-self: end;
`
