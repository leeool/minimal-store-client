import Dialog from "@components/Dialog"
import styled from "styled-components"

export const Trigger = styled(Dialog.Trigger)``

export const Content = styled(Dialog.Content)`
  display: grid;
  align-content: start;
  grid-template-rows: auto 1fr auto;
  width: 100vw;
  height: calc(100vh - 2rem);
  max-width: 28rem;
  max-height: 100vh;
  padding: 1rem;
  animation: slideLeft 350ms cubic-bezier(0.16, 1, 0.3, 1);
  right: 1rem;
  top: 1rem;

  button {
    align-self: end;
  }

  @media (max-width: 768px) {
    max-width: 20rem;
    right: 0;
    top: 0;
    height: 100vh;
  }

  @keyframes slideLeft {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }
`

export const Items = styled.ul`
  display: grid;
  gap: 2rem;
  align-self: start;
  overflow-y: auto;
  max-height: 100%;
  overflow-x: hidden;
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.outline.primary};
`

export const Close = styled(Dialog.Close)`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  background-color: transparent;
  border: none;
  place-items: center;
  justify-content: center;
  padding: 1rem;
  display: flex;
  border-radius: 50%;

  &:hover {
    background-color: #f5f5f5;
  }
`
