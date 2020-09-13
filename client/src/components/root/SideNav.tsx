import React, { Suspense } from 'react'
import { Box, Spinner } from '@chakra-ui/core'

import NavContent from './NavContent'

const SideNav = () => {
  return (
    <Box>
      <Suspense fallback={<Spinner />}>
        <NavContent/>
      </Suspense>
    </Box>
  )
}

export default SideNav
