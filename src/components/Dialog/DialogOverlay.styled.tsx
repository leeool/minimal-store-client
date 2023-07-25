import styled from "styled-components"
import * as DialogPrimitive from "@radix-ui/react-dialog"

export const DialogOverlayStyles = styled(DialogPrimitive.Overlay)`
  background-color: rgba(0, 0, 0, 0.45);
  position: fixed;
  inset: 0;
  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);

  @keyframes overlayShow {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`
