import React from 'react'
import { Box } from '@chakra-ui/core'

import SideNav from './SideNav'
import Routes from './Routes'

const App: React.FC = () => {
  return (
    <Box
      marginLeft={[null, null, "250px"]}
      mt={["4em", null, "0"]}
      minH="100vh"
      pb="20px"
    >
      <SideNav/>
      <Box>
        <Box>
          <Routes />
        </Box>
      </Box>
    </Box>
  )
}

export default App
