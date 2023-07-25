import { create } from "zustand"

interface UseUserStoreStoreProps {
  user: IUser | null
  setUser: (user: IUser | null) => void
  isLogged: boolean
  setIsLogged: (isLogged: boolean) => void
  logOut: () => void
  cartItems: ICartItem[]
  setCartItems: (cartItems: ICartItem[]) => void
  cart: ICart | null
  setCart: (cart: ICart) => void
}

const useUserStore = create<UseUserStoreStoreProps>((set) => ({
  user: null,
  setUser: (user: IUser | null) => set({ user, isLogged: true }),
  isLogged: false,
  setIsLogged: (isLogged: boolean) => set({ isLogged }),
  logOut: () => {
    localStorage.removeItem("token")
    set({ user: null, isLogged: false })
  },
  cartItems: [],
  setCartItems: (cartItems: ICartItem[]) => set({ cartItems }),
  setCart: (cart: ICart) => set({ cart }),
  cart: null
}))

export default useUserStore
