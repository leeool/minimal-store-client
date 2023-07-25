import styled from "styled-components"
import Dialog from "@components/Dialog"

export const Content = styled(Dialog.Content)`
  width: 100vw;
  height: 100vh;
  max-width: 28rem;
  max-height: 100vh;
  height: fit-content;
  padding: 1rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  gap: 1rem;

  .close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    border-radius: 50%;
    place-items: center;
    justify-content: center;
    padding: 0.5rem;

    &:hover {
      background-color: ${({ theme }) => theme.outline.primary};
    }
  }
`

export const Close = styled(Dialog.Close)``
