import React from 'react'
import { Box } from '@chakra-ui/core'

import SideNav from './SideNav'
import Routes from './Routes'

const App: React.FC = () => {
  return (
    <Box>
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
