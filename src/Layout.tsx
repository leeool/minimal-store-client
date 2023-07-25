import BlackHighlight from "@components/BlackHighlight"
import Footer from "@interfaces/Footer"
import { HeaderLoggedIn, HeaderLoggedOut } from "@interfaces/Header"
import useAuthMe from "@queries/useAuthMe"
import useUserStore from "@stores/useUserStore"
import { Content, MainContainer } from "@styles/styled"
import React from "react"
import { Outlet } from "react-router"

const Layout = () => {
  const me = useAuthMe()
  const isLogged = useUserStore((state) => state.isLogged)

  React.useEffect(() => {
    const token = localStorage.getItem("token")

    if (!token) return

    me.refetch()
  }, [])

  return (
    <MainContainer>
      {isLogged ? <HeaderLoggedIn /> : <HeaderLoggedOut />}
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </MainContainer>
  )
}

export default Layout
