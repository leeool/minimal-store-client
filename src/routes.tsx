import Layout from "@Layout"
import Checkout from "@pages/Checkout"
import Home from "@pages/Home"
import Login from "@pages/Login"
import LoginLayout from "@pages/LoginLayout"
import ProductPage from "@pages/ProductPage"
import Register from "@pages/Register"
import { createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "",
    Component: Layout,
    children: [
      {
        path: "",
        Component: Home
      },
      {
        path: "finalizar",
        Component: Checkout
      },
      {
        path: ":id",
        Component: ProductPage
      }
    ]
  },
  {
    path: "entrar",
    Component: LoginLayout,
    children: [
      {
        path: "",
        Component: Login
      },
      {
        path: "registrar",
        Component: Register
      }
    ]
  }
])

export default router
