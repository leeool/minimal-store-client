import styled from "styled-components"
import * as DialogPrimitive from "@radix-ui/react-dialog"

export const DialogContentStyles = styled(DialogPrimitive.Content)`
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
`
