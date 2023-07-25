import Dialog from "@components/Dialog"
import React from "react"
import { Close, Content } from "./DialogNotify.styled"
import { XIcon } from "@primer/octicons-react"
import useDialogNotifyStore from "./useDialogNotifyStore"

interface DialogNotifyProps {
  children: React.ReactNode
}

const DialogNotify = ({ children }: DialogNotifyProps) => {
  const open = useDialogNotifyStore((state) => state.open)
  const setOpen = useDialogNotifyStore((state) => state.setOpen)

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Content>
        <Close className="close">
          <XIcon />
        </Close>
        {children}
      </Content>
    </Dialog.Root>
  )
}

export default DialogNotify
