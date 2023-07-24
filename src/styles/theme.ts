import { DefaultTheme } from "styled-components"

const theme = {
  text: {
    primary: "#212121",
    secondary: "#BFBFBF",
    white: "#FFF"
  },
  bg: {
    primary: "#212121",
    secondary: "#f5f5f5",
    white: "#FFF"
  },
  outline: {
    primary: "#EDEDED",
    secondary: "#212121"
  }
}

declare module "styled-components" {
  export interface DefaultTheme {
    text: {
      primary: string
      secondary: string
      white: string
    }
    bg: {
      primary: string
      secondary: string
      white: string
    }
    outline: {
      primary: string
      secondary: string
    }
  }
}

export default theme
