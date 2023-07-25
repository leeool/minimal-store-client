import React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { DialogOverlayStyles } from "./DialogOverlay.styled"
import { DialogContentStyles } from "./DialogContent.styled"

interface Props {
  children: React.ReactNode
  props?: React.ComponentProps<typeof DialogPrimitive.Root>
}

export const DialogContent = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<Props>
>(({ children, ...props }, forwardedRef) => (
  <DialogPrimitive.Portal>
    <DialogOverlayStyles />
    <DialogContentStyles {...props} ref={forwardedRef}>
      {children}
    </DialogContentStyles>
  </DialogPrimitive.Portal>
))
