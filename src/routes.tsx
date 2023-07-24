import Layout from "@Layout"
import { createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "",
    Component: Layout,
    children: [
      {
        path: "",
        Component: () => <div>Home</div>
      }
    ]
  },
  {
    path: "login",
    Component: () => <div>Login</div>
  }
])

export default router
