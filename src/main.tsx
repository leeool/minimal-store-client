import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import GlobalStyle from "@style/global"
import { ThemeProvider } from "styled-components"
import theme from "@styles/theme"
import { RouterProvider } from "react-router"
import router from "@routes.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
)
