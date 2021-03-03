import React from "react"
import Head from "next/head"
import { Header } from "./Header"
import { Wrapper } from "./Wrapper"

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Head children={<title>Trick Search</title>}/>
      <Header />
      <Wrapper>
        {children}
      </Wrapper>
    </>
  )
}