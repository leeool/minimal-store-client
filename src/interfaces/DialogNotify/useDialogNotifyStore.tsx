import { create } from "zustand"

interface UseDialogNotifyStoreProps {
  open: boolean
  setOpen: (open: boolean) => void
}

const useDialogNotifyStore = create<UseDialogNotifyStoreProps>((set) => ({
  open: false,
  setOpen: (open: boolean) => set({ open })
}))

export default useDialogNotifyStore
