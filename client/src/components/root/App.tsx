import React from 'react'
import { Box } from '@chakra-ui/core'
import { BrowserRouter as Router } from 'react-router-dom'

import SideNav from './SideNav'
import Routes from './Routes'

const App: React.FC = () => {
  return (
    <Router>
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
    </Router>
  )
}

export default App
