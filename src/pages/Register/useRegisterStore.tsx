import { create } from "zustand"

interface UseRegisterStoreStoreProps {
  stage: "one" | "two"
  setStage: (stage: "one" | "two") => void
  email: string
  setEmail: (email: string) => void
  password: string
  setPassword: (password: string) => void
  name: string
  setName: (name: string) => void
  cpf: string
  setCpf: (cpf: string) => void
  address: string
  setAddress: (address: string) => void
}

const useRegisterStore = create<UseRegisterStoreStoreProps>((set) => ({
  stage: "one",
  setStage: (stage: "one" | "two") => set({ stage }),
  email: "",
  setEmail: (email: string) => set({ email }),
  password: "",
  setPassword: (password: string) => set({ password }),
  name: "",
  setName: (name: string) => set({ name }),
  cpf: "",
  setCpf: (cpf: string) => set({ cpf }),
  address: "",
  setAddress: (address: string) => set({ address })
}))

export default useRegisterStore
