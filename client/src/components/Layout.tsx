import React from "react"
import Head from "next/head"
import { Header } from "./Header"
import { Wrapper } from "./Wrapper"
import { Box } from "@chakra-ui/react"

export const Layout: React.FC = ({ children }) => {
  return (
    <Box margin="auto" padding="1" alignSelf="center" maxWidth="4xl">
      <Head children={<title>Skate Clips</title>}/>
      <Header />
      <Wrapper>
        {children}
      </Wrapper>
    </Box>
  )
}