import { create } from "zustand"

interface UseCheckoutStoreStoreProps {
  stage: "one" | "two"
  setStage: (stage: "one" | "two") => void
}

const useCheckoutStore = create<UseCheckoutStoreStoreProps>((set) => ({
  stage: "one",
  setStage: (stage: "one" | "two") => set({ stage })
}))

export default useCheckoutStore
