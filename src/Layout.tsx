import Header from "@interfaces/Header"
import { Content, MainContainer } from "@styles/styled"
import React from "react"
import { Outlet } from "react-router"

const Layout = () => {
  return (
    <MainContainer>
      <Header />
      <Content>
        <Outlet />
      </Content>
    </MainContainer>
  )
}

export default Layout
