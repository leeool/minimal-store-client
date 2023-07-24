import { Button } from "@components/Button"
import Input from "@components/Forms/Input"
import Logo from "@components/Logo"
import Header from "@interfaces/Header"
import { ArrowDownRightIcon } from "@primer/octicons-react"
import { Content, MainContainer } from "@styles/styled"
import React from "react"
import { Outlet } from "react-router"

const App = () => {
  return (
    <>
      <Outlet />
    </>
  )
}

export default App
