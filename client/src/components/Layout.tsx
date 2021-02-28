import React from "react"
import { Header } from "./Header"
import { Wrapper } from "./Wrapper"

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <Wrapper>
        {children}
      </Wrapper>
    </>
  )
}