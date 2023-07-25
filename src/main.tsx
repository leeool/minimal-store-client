import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import GlobalStyle from "@style/global"
import { ThemeProvider } from "styled-components"
import theme from "@styles/theme"
import { RouterProvider } from "react-router"
import router from "@routes.tsx"
import { QueryClient, QueryClientProvider } from "react-query"

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } }
})

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
)
