import React from "react"
import { Box } from "@chakra-ui/react"

export const Wrapper: React.FC = ({ children }) => {
  return (
    <Box>
      {children}
    </Box>
  )
}
