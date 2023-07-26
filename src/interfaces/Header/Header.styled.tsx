import styled from "styled-components"

export const Container = styled.header`
  display: grid;
  width: 100%;
  border-bottom: 2px solid ${({ theme }) => theme.outline.primary};
  padding: 0.5rem 0;
  position: fixed;
  top: 0;
  max-width: 63rem;
  background-color: ${({ theme }) => theme.bg.white};
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  gap: 0.25rem;
  column-gap: 1rem;
  overflow: hidden;
  align-items: center;
  padding: 0 0.25rem;
`

export const LogoWrapper = styled.div`
  @media (max-width: 768px) {
    svg {
      max-width: 100%;
    }
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
  justify-self: end;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`
